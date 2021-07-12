import './index.less'
import * as React from 'react';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import KCart from '../../components/KCart';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KSubeStore from '../../stores/kSubeStore';
import Stores from '../../stores/storeIdentifier';
import { SettingOutlined } from '@ant-design/icons';
import KSubeNormStore from '../../stores/kSubeNormStore';
import KPersonelStore from '../../stores/kPersonelStore';
import { EntityDto } from '../../services/dto/entityDto';
import CreateKSubeNorm from './components/createKSubeNorm';
import AppComponentBase from '../../components/AppComponentBase';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, message, Button, Card, Col, Dropdown, Menu, Row, Table, Input, Breadcrumb, PageHeader, Modal } from 'antd';


export interface INormProps {
    kSubeStore: KSubeStore;
    kSubeNormStore: KSubeNormStore;
    kPersonelStore: KPersonelStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;
}

export interface INormState {
    id: number,
    normId: number;
    filter: string;
    subeObjId: number;
    skipCount: number;
    cardLoading: boolean,
    modalVisible: boolean;
    maxResultCount: number;
    kPersonelCount: number;
}

const confirm = Modal.confirm;

@inject(Stores.KSubeStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KInkaLookUpTableStore)

@observer
class KSube extends AppComponentBase<INormProps, INormState>{
    formRef = React.createRef<FormInstance>();

    state = {
        id: 0,
        normId: 0,
        filter: '',
        skipCount: 0,
        subeObjId: 0,
        cardLoading: true,
        maxResultCount: 5,
        modalVisible: false,
        kPersonelCount: 0
    };

    // Şubeye ait norm listesini getirir
    async getKSubeNorms() {
        await this.props.kSubeNormStore.getAllNorms({
            keyword: '',
            skipCount: 0,
            id: this.state.subeObjId,
            maxResultCount: 5,
        });
    }

    async getNormCount(id: number) {
        await this.props.kSubeNormStore.getNormCountById(id);
    }

    kPosizyonKontrol = (key: string) => {
        this.getKSubeNorms();
        const form = this.formRef.current;
        if (this.props.kSubeNormStore.norms.items.filter((x) => x.pozisyon === key).length > 0) {

            message.error({
                content: L('UniqSelect'),
                style: {
                    marginTop: '12vh',
                },
            })
            form!.resetFields();
        }
    }

    openNotificationWithIcon = type => {
        notification[type]({
            message: L('NormCreateNotificationMessageTitle'),
            description: L('NormCreateNotificationMessageDescription'),
            duration: 3
        });
    };

    // Şube için Norm Oluşturma Metodu
    kSubeNormCreate = () => {
        const form = this.formRef.current;
        form!.validateFields().then(async (values: any) => {
            if (this.state.normId === 0) {
                await this.props.kSubeNormStore.create(values);
                this.openNotificationWithIcon('success')
            } else {
                await this.props.kSubeNormStore.update({ ...values, id: this.state.normId });
            }
            form!.resetFields();
            await this.getKSubeNorms();
        });
    };

    kSubeNormEdit = (input: EntityDto) => {
        this.props.kSubeNormStore.get(input);
        const form = this.formRef.current;
        this.setState({ normId: input.id })

        setTimeout(() => {
            form!.setFieldsValue({ ...this.props.kSubeNormStore.editNorm });
        }, 200);

    }

    kSubeNormDelete = (input: EntityDto) => {
        const self = this;
        confirm({
            title: L('ConfirmDelete'),
            onOk() {
                self.getKSubeNorms();
                self.props.kSubeNormStore.delete(input);
                self.getKSubeNorms();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }


    async getAll() {
        await this.props.kSubeStore.getAll({
            maxResultCount: this.state.maxResultCount,
            skipCount: this.state.skipCount,
            keyword: this.state.filter,
            isActivity: true,
            isActive: true,
            id: this.state.id
        });

        await this.props.kSubeStore.getNormCount(this.state.id);

        this.setState({ cardLoading: false })
    }

    async get(entityDto: EntityDto) {
        await this.props.kSubeStore.get(entityDto);
    }

    async getPosition(key: string) {
        await this.props.kInkaLookUpTableStore
            .getAll(
                {
                    maxResultCount: 1000,
                    keyword: key,
                    skipCount: 0
                }
            );
    }

    async createOrUpdateModalOpen(tip: string, id: number) {
        await this.setState({ subeObjId: id })
        await this.getPosition(tip);
        await this.getKSubeNorms();
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    async getEmployeeCount(id: number) {
        await this.props.kPersonelStore.getEmployeeCountById(id);
    }

    async setPageState() {
        this.setState({ id: this.props["match"].params["id"] });
    }

    async componentDidMount() {
        await this.setPageState();
        await this.getAll();
        await this.get({ id: this.state.id });
        await this.getEmployeeCount(this.state.id);
        await this.getNormCount(this.state.id);
    }

    handleTableChange = (pagination: any) => {
        this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
    };

    handleSearch = (value: string) => {
        this.setState({ filter: value }, async () => await this.getAll());
    };

    public render() {

        const Search = Input.Search;
        const { cardLoading } = this.state; 
        const { kSubes, editKSube, normCount } = this.props.kSubeStore;
        const { kPersonelCount } = this.props.kPersonelStore;
        const { positions } = this.props.kInkaLookUpTableStore;

        const columns = [
            { title: L('Area'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{ editKSube === undefined ? '' : editKSube.adi }</div> },
            { title: L('Name'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('Tip'), dataIndex: 'tip', key: 'tip', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('EmployeeCount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormCount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormOpening'), dataIndex: 'normEksigi', key: 'normEksigi', width: 150, render: (text: number) => <div>{text}</div> },
            {
                title: L('Actions'),
                width: 150,
                render: (text: string, item: any) => (
                    <div>
                        <Dropdown
                            trigger={['click']}
                            overlay={
                                <Menu>
                                    <Menu.Item >
                                        <Link to={`/ksubedetay/${item.objId}`}> {L('Detail')} </Link>
                                    </Menu.Item>
                                    <Menu.Item > <Link to={'#'} onClick={() => this.createOrUpdateModalOpen(item.tip, item.objId)} > {L('NormCreate')} </Link> </Menu.Item>
                                </Menu>
                            }
                            placement="bottomLeft">
                            <Button type="primary" icon={<SettingOutlined />}>
                                {L('Actions')}
                            </Button>
                        </Dropdown>
                    </div >
                ),
            },
        ];
        return (
            <>
                <React.Fragment>
                    <Card style={{ marginBottom: 20 }}>
                        <PageHeader
                            ghost={false}
                            onBack={() => window.history.back()}
                            title={
                                <Breadcrumb>
                                    <Breadcrumb.Item> {L('Dashboard')} </Breadcrumb.Item>
                                    <Breadcrumb.Item> {L('RegionalOffices')} </Breadcrumb.Item>
                                    <Breadcrumb.Item> {editKSube === undefined ? '' : editKSube.adi} </Breadcrumb.Item>
                                </Breadcrumb>
                            }  >
                        </PageHeader>
                    </Card>

                    <Row gutter={16}>
                        <KCart cardLoading={cardLoading} color='#00bcd4' title={L('NormCount')} icon='UsergroupAddOutlined' number={normCount} />
                        <KCart cardLoading={cardLoading} color='#8884d8' title={L('EmployeeCount')} icon='UserAddOutlined' number={kPersonelCount} />

                        <KCart cardLoading={cardLoading} color='#ff9800' title={ 'Toplam Yapılan Norm Güncelleme Talebi'} icon='ClockCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#ff9800' title={'Toplam Yapılan Norm Doldurma Talebi'} icon='ClockCircleOutlined' number={0} />

                        
                        <KCart cardLoading={cardLoading} color='#7cb305' title={'Bekleyen Norm Doldurma Talebi'} icon='PlusOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#69c0ff' title={'Kabul Edilen Norm Doldurma Talebi'} icon='QuestionCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#cf1322' title={'İptal Edilen Norm Doldurma Talebi'} icon='CloseOutlined' number={0} />


                        <KCart cardLoading={cardLoading} color='#7cb305' title={'Bekleyen Norm Güncelleme Talebi'} icon='PlusOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#69c0ff' title={'Kabul Edilen Norm Güncelleme Talebi'} icon='QuestionCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#cf1322' title={'İptal Edilen Norm Güncelleme Talebi'} icon='CloseOutlined' number={0} />

                        {/* <KCart cardLoading={cardLoading} color='#ff9800' title={L('NormIncreaseRequest')} icon='ClockCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#ff9800' title={L('NormFillRequest')} icon='ClockCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#7cb305' title={L('PendingNormIncrease')} icon='PlusOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#69c0ff' title={L('AcceptedNormIncreasing')} icon='QuestionCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#cf1322' title={L('CanceledNormRequest')} icon='CloseOutlined' number={0} />


                        <KCart cardLoading={cardLoading} color='#7cb305' title={''} icon='PlusOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#69c0ff' title={''} icon='QuestionCircleOutlined' number={0} />
                        <KCart cardLoading={cardLoading} color='#cf1322' title={''} icon='CloseOutlined' number={0} /> */}
                    </Row>

                    <Card hoverable>
                        <Row>
                            <Col
                                xs={{ span: 4, offset: 0 }}
                                sm={{ span: 4, offset: 0 }}
                                md={{ span: 4, offset: 0 }}
                                lg={{ span: 2, offset: 0 }}
                                xl={{ span: 2, offset: 0 }}
                                xxl={{ span: 2, offset: 0 }}
                            >
                                <h2>{L('KSube')}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{ span: 10, offset: 0 }}>
                                <Search placeholder={this.L('Filter')} onSearch={this.handleSearch} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col
                                xs={{ span: 24, offset: 0 }}
                                sm={{ span: 24, offset: 0 }}
                                md={{ span: 24, offset: 0 }}
                                lg={{ span: 24, offset: 0 }}
                                xl={{ span: 24, offset: 0 }}
                                xxl={{ span: 24, offset: 0 }}
                            >
                                <Table
                                    rowKey={(record) => record.objId.toString()}
                                    bordered={false}
                                    columns={columns}
                                    pagination={{ pageSize: this.state.maxResultCount, total: kSubes === undefined ? 0 : kSubes.totalCount, defaultCurrent: 1 }}
                                    loading={kSubes === undefined ? true : false}
                                    dataSource={kSubes === undefined ? [] : kSubes.items}
                                    onChange={this.handleTableChange}
                                />
                            </Col>
                        </Row>
                    </Card>
                    <CreateKSubeNorm
                        kSubeNorms={this.props.kSubeNormStore.norms}
                        modalType={'create'}
                        formRef={this.formRef}
                        positionSelect={positions}
                        subeObjId={this.state.subeObjId}
                        visible={this.state.modalVisible}
                        kPosizyonKontrol={this.kPosizyonKontrol}
                        kSubeNormCreate={this.kSubeNormCreate}
                        kSubeNormDelete={this.kSubeNormDelete}
                        kSubeNormEdit={this.kSubeNormEdit}
                        kSubeNormStore={this.props.kSubeNormStore}
                        onCancel={() => {
                            this.setState({
                                modalVisible: false,
                            });
                        }}
                    />
                </React.Fragment >
            </>
        )
    }
}

export default KSube;