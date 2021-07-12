import './index.less'
import *  as React from 'react';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import KCart from '../../components/KCart';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import Stores from '../../stores/storeIdentifier';
import KBolgeStore from '../../stores/kBolgeStore';
import { SettingOutlined } from '@ant-design/icons';
import KSubeNormStore from '../../stores/kSubeNormStore';
import { EntityDto } from '../../services/dto/entityDto';
import KPersonelStore from '../../stores/kPersonelStore';
import CreateKBolgeNorm from './components/createKBolgeNorm';
import AppComponentBase from '../../components/AppComponentBase';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, message, Button, Card, Col, Dropdown, Menu, Row, Table, Input, Breadcrumb, PageHeader, Modal } from 'antd';


export interface IBolgeProps {
    kBolgeStore: KBolgeStore;
    kPersonelStore: KPersonelStore;
    kSubeNormStore: KSubeNormStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;
}

export interface IBolgeState {
    maxResultCount: number;
    modalVisible: boolean;
    cardLoading: boolean
    skipCount: number;
    subeObjId: number;
    userId: number;
    filter: string;
    normId: number;
    id: number,
}

const Search = Input.Search;
const confirm = Modal.confirm;

@inject(Stores.KBolgeStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KInkaLookUpTableStore)

@observer
class KBolge extends AppComponentBase<IBolgeProps, IBolgeState> {

    formRef = React.createRef<FormInstance>();

    state = {
        id: 0,
        normId: 0,
        userId: 0,
        filter: '',
        skipCount: 0,
        subeObjId: 0,
        cardLoading: true,
        maxResultCount: 5,
        modalVisible: false,
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

    async getNormCount() {
        await this.props.kSubeNormStore.getNormCount();
    }

    async getNormCountById(id: number) {
        return await this.props.kSubeNormStore.getNormCount();
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
        form!.validateFields()
            .then(async (values: any) => {
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

        await this.props.kBolgeStore.getAll({
            maxResultCount: this.state.maxResultCount,
            skipCount: this.state.skipCount,
            keyword: this.state.filter,
            isActivity: true,
            isActive: true,
            tip: 2,
            tur: 1,
        });

        setTimeout(() => this.setState({ cardLoading: false }), 500);
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

    async getEmployeeCount() {
        await this.props.kPersonelStore.getEmployeeCount();
    }

    async componentDidMount() {
        this.state.id = this.props["match"].params["id"];
        await this.getAll();
        await this.getEmployeeCount();
        await this.getNormCount();
    }

    handleTableChange = (pagination: any) => {
        this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
    };

    handleSearch = (value: string) => {
        this.setState({ filter: value }, async () => await this.getAll());
    };

    public render() {

        const { cardLoading } = this.state;
        const { kBolge } = this.props.kBolgeStore;
        const { normCount } = this.props.kSubeNormStore;
        const { kPersonelCount } = this.props.kPersonelStore;
        const { positions } = this.props.kInkaLookUpTableStore;

        const columns = [
            { title: L('Adi'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('Tip'), dataIndex: 'tip', key: 'tip', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('EmployeeCount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormCount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: (text: number) => <div>{text}</div> },
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

                                    <Menu.Item key={"/ksube"} >
                                        <Link
                                            to={{
                                                pathname: `/ksube/${item.objId}`,
                                                state: {
                                                    name: item.adi,
                                                    tipTur: item.tipTur,
                                                    tip: item.tip
                                                }
                                            }}> {L('Branches')} </Link>
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
            <React.Fragment>
                <Card style={{ marginBottom: 20 }}>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={
                            <Breadcrumb>
                                <Breadcrumb.Item> {L('Dashboard')} </Breadcrumb.Item>
                                <Breadcrumb.Item> {L('RegionalOffices')} </Breadcrumb.Item>
                            </Breadcrumb>
                        }  >
                    </PageHeader>
                </Card>

                <Row gutter={16}>
                    <KCart cardLoading={cardLoading} color='#00bcd4' title={L('NormCount')} icon='UsergroupAddOutlined' number={normCount} />
                    <KCart cardLoading={cardLoading} color='#8884d8' title={L('EmployeeCount')} icon='UserAddOutlined' number={kPersonelCount} />
                    <KCart cardLoading={cardLoading} color='#ff9800' title={L('NormIncreaseRequest')} icon='ClockCircleOutlined' number={0} />
                    <KCart cardLoading={cardLoading} color='#ff9800' title={L('NormFillRequest')} icon='ClockCircleOutlined' number={0} />
                    <KCart cardLoading={cardLoading} color='#7cb305' title={L('PendingNormIncrease')} icon='PlusOutlined' number={0} />
                    <KCart cardLoading={cardLoading} color='#69c0ff' title={L('AcceptedNormIncreasing')} icon='QuestionCircleOutlined' number={0} />
                    <KCart cardLoading={cardLoading} color='#cf1322' title={L('CanceledNormRequest')} icon='CloseOutlined' number={0} />
                </Row>

                <Card hoverable>
                    <Row>
                        <Col xs={{ span: 6, offset: 0 }} sm={{ span: 6, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }} xxl={{ span: 4, offset: 0 }}  >
                            {' '}
                            <h2>{L('Areas')}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Search placeholder={this.L('Filter')} onSearch={this.handleSearch} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}   >
                            <Table
                                rowKey={(record) => record.objId.toString()}
                                bordered={false}
                                columns={columns}
                                pagination={{ pageSize: this.state.maxResultCount, total: kBolge === undefined ? 0 : kBolge.totalCount, defaultCurrent: 1 }}
                                loading={kBolge === undefined ? true : false}
                                dataSource={kBolge === undefined ? [] : kBolge.items}
                                onChange={this.handleTableChange}
                            />
                        </Col>
                    </Row>
                </Card>

                <CreateKBolgeNorm
                    kSubeNorms={this.props.kSubeNormStore.norms}
                    modalType={'create'}
                    formRef={this.formRef}
                    positionSelect={positions}
                    subeObjId={this.state.subeObjId}
                    visible={this.state.modalVisible}
                    kSubeNormCreate={this.kSubeNormCreate}
                    kSubeNormDelete={this.kSubeNormDelete}
                    kSubeNormEdit={this.kSubeNormEdit}
                    kPosizyonKontrol={this.kPosizyonKontrol}
                    kSubeNormStore={this.props.kSubeNormStore}
                    onCancel={() => {
                        this.setState({
                            modalVisible: false,
                        });
                    }}
                />
            </React.Fragment >
        )
    }
}

export default KBolge;