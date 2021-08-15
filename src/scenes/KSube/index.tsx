/* eslint-disable */
import './index.less';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KSubeStore from '../../stores/kSubeStore';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KCartList from '../../components/KCartList';
import { SettingOutlined } from '@ant-design/icons';
import SessionStore from '../../stores/sessionStore';
import AccountStore from '../../stores/accountStore';
import KSubeNormStore from '../../stores/kSubeNormStore';
import KPersonelStore from '../../stores/kPersonelStore';
import { EntityDto } from '../../services/dto/entityDto';
import CreateKSubeNorm from './components/createKSubeNorm';
import KNormDetailStore from '../../stores/kNormDetailStore';
import AppComponentBase from '../../components/AppComponentBase';
import AuthenticationStore from '../../stores/authenticationStore';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, message, Button, Card, Col, Dropdown, Menu, Row, Table, Input, Breadcrumb, PageHeader, Modal } from 'antd';


export interface INormProps {
    kSubeStore: KSubeStore;
    kNormStore: KNormStore;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;
    kSubeNormStore: KSubeNormStore;
    kPersonelStore: KPersonelStore;
    kNormDetailStore: KNormDetailStore;
    authenticationStore?: AuthenticationStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;
}

export interface INormState {
    id: string;
    normId: string;
    filter: string;
    subeAdi: string;
    subeObjId: string;
    skipCount: number;
    cardLoading: boolean;
    modalVisible: boolean;
    maxResultCount: number;
    kPersonelCount: number;
}

const confirm = Modal.confirm;

@inject(Stores.KSubeStore)
@inject(Stores.KNormStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KNormDetailStore)
@inject(Stores.KInkaLookUpTableStore)
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class KSube extends AppComponentBase<INormProps, INormState>{
    formRef = React.createRef<FormInstance>();

    state = {
        id: '0',
        normId: '0',
        filter: '',
        subeAdi: '',
        skipCount: 0,
        subeObjId: '0',
        cardLoading: true,
        maxResultCount: 5,
        kPersonelCount: 0,
        modalVisible: false,
    };

    async getNormRequests(id: string) {
        await this.props.kNormStore.getMaxAll({
            id: id,
            keyword: 'sube',
            skipCount: 0,
            maxResultCount: 100000,
            bolgeId: id
        });

        await this.props.kNormStore.getMaxAllCount({
            maxResultCount: 100000,
            skipCount: 0,
            keyword: 'sube',
            id: id,
            bolgeId: id
        });
    }


    // Şubeye ait norm listesini getirir
    async getKSubeNorms() {
        await this.props.kSubeNormStore.getAllNorms({
            keyword: '',
            skipCount: 0,
            maxResultCount: 5,
            id: this.state.subeObjId,
        });
    }

    async getNormCount(id: string) {
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
            if (this.state.normId === '0') {
                await this.props.kSubeNormStore.create(values);
                this.openNotificationWithIcon('success')
            } else {
                await this.props.kSubeNormStore.update({ ...values, id: this.state.normId });
            }
            form!.resetFields();
            await this.getKSubeNorms();
        });
    };

    kSubeNormEdit = (input: EntityDto<string>) => {
        this.props.kSubeNormStore.get(input);
        const form = this.formRef.current;
        this.setState({ normId: input.id })

        setTimeout(() => {
            form!.setFieldsValue({ ...this.props.kSubeNormStore.editNorm });
        }, 200);

    }

    kSubeNormDelete = (input: EntityDto<string>) => {
        const self = this;
        confirm({
            okText: L('Yes'),
            cancelText: L('No'),
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
            isActive: true,
            isActivity: true,
            id: this.state.id,
            keyword: this.state.filter,
            skipCount: this.state.skipCount,
            maxResultCount: this.state.maxResultCount,
        });

        await this.props.kSubeStore.getNormCount(this.state.id);

        this.setState({ cardLoading: false })
    }

    async get(entityDto: EntityDto<string>) {
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

    async createOrUpdateModalOpen(tip: string, id: string, subeAdi: string) {

        this.formRef.current?.resetFields();

        await this.setState({ subeObjId: id, subeAdi: subeAdi })
        await this.setState({ subeObjId: id })
        await this.getPosition(tip);
        await this.getKSubeNorms();
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    async getEmployeeCount(id: string) {

        await this.props.kPersonelStore.getEmployeeCountById(id);
    }

    async setPageState() {

        this.setState({ id: this.props["match"].params["id"] });

        // if (this.props["match"].params["id"] !== undefined && this.props["match"].params["id"] !== ":id") {
        //     this.setState({ id: this.props["match"].params["id"] });
        //     return
        // }


        // if (this.props.sessionStore?.currentLogin !== undefined) {
        //     let companyObjId = this.props.sessionStore?.currentLogin.user.companyObjId;
        //     this.setState({ id: companyObjId });
        // }

    }

    async componentDidMount() {
        await this.setPageState();
        await this.getAll();
        await this.get({ id: this.state.id });
        await this.getEmployeeCount(this.state.id);
        await this.getNormCount(this.state.id);
        await this.getNormRequests(this.state.id)
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
        const { kPersonelCount } = this.props.kPersonelStore;
        const { positions } = this.props.kInkaLookUpTableStore;
        const { kSubes, editKSube, normCount } = this.props.kSubeStore;

        const {
            getTotalNormUpdateRequestCount,
            getPendingNormFillRequestCount,
            getTotalNormFillingRequestCount,
            getAcceptedNormFillRequestCount,
            getCanceledNormFillRequestCount,
            getPendingNormUpdateRequestCount,
            getAcceptedNormUpdateRequestCount,
            getCanceledNormUpdateRequestCount
        } = this.props.kNormStore;

        const columns = [
            { title: L('Area'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{editKSube === undefined ? '' : editKSube.adi}</div> },
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
                                        <Link to={

                                            {
                                                pathname: `/ksubedetay/${item.objId}`
                                            }

                                        }> {L('Detail')} </Link>
                                    </Menu.Item>
                                    <Menu.Item > <Link to={'#'} onClick={() => this.createOrUpdateModalOpen(item.tip, item.objId, item.adi)} > {L('NormCreate')} </Link> </Menu.Item>
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
                                    <Breadcrumb.Item><Link to="/home">{L('Dashboard')}</Link>   </Breadcrumb.Item>
                                    <Breadcrumb.Item> <Link to="/bolgemudurluk">{L('RegionalOffices')}</Link>  </Breadcrumb.Item>
                                    <Breadcrumb.Item> {editKSube === undefined ? '' : editKSube.adi} </Breadcrumb.Item>
                                </Breadcrumb>
                            }  >
                        </PageHeader>
                    </Card>

                    <KCartList
                        userId={this.props.sessionStore?.currentLogin.user.id}
                        normCount={normCount}
                        subeObjId={this.state.id}
                        cardLoading={cardLoading}
                        kPersonelCount={kPersonelCount}
                        kNormStore={this.props.kNormStore}
                        kNormDetailStore={this.props.kNormDetailStore}
                        getTotalNormUpdateRequestCount={getTotalNormUpdateRequestCount}
                        getPendingNormFillRequestCount={getPendingNormFillRequestCount}
                        getTotalNormFillingRequestCount={getTotalNormFillingRequestCount}
                        getAcceptedNormFillRequestCount={getAcceptedNormFillRequestCount}
                        getCanceledNormFillRequestCount={getCanceledNormFillRequestCount}
                        getPendingNormUpdateRequestCount={getPendingNormUpdateRequestCount}
                        getAcceptedNormUpdateRequestCount={getAcceptedNormUpdateRequestCount}
                        getCanceledNormUpdateRequestCount={getCanceledNormUpdateRequestCount}
                    />

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
                                    locale={{ emptyText: L('NoData') }}
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
                        modalType={'create'}
                        formRef={this.formRef}
                        positionSelect={positions}
                        subeObjId={this.state.subeObjId}
                        visible={this.state.modalVisible}
                        kSubeNormEdit={this.kSubeNormEdit}
                        kSubeNormCreate={this.kSubeNormCreate}
                        kSubeNormDelete={this.kSubeNormDelete}
                        kPosizyonKontrol={this.kPosizyonKontrol}
                        kSubeNormStore={this.props.kSubeNormStore}
                        kSubeNorms={this.props.kSubeNormStore.norms}
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