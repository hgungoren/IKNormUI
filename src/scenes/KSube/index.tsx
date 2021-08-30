/* eslint-disable */
import './index.less';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KSubeStore from '../../stores/kSubeStore';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KCartList from '../../components/KCartList';
import { SettingOutlined } from '@ant-design/icons';
import { isGranted, L } from '../../lib/abpUtility';
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
import moment from 'moment';

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
    moment: any;
    normId: string;
    subeAdi: string;
    subeObjId: string;
    totalSize: number;
    skipCount: number;
    searchFilter: string;
    cardLoading: boolean;
    modalVisible: boolean;
    maxResultCount: number;
    kPersonelCount: number;
    filter: { offset: number, limit: number, current: number }
}

const confirm = Modal.confirm;
const startOfMonth = moment(moment().startOf('month').format('DD-MM-YYYY')).toDate();
const currentDate = moment().toDate();

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
        subeAdi: '',
        skipCount: 0,
        subeObjId: '0',
        searchFilter: '',
        cardLoading: true,
        maxResultCount: 5,
        kPersonelCount: 0,
        modalVisible: false,
        totalSize: 0,
        filter: { offset: 0, limit: 5, current: 0, },
        moment: [] as any
    };
 
    getNormRequests = async (id: string, start?: Date, end?: Date) => {

        await this.props.kNormStore.getMaxAll({
            id: '0',
            keyword: '',
            bolgeId: id,
            type: 'sube',
            skipCount: 0,
            maxResultCount: 100000,
            end: end,
            start: start,
        });

    }
    getNormRequestCounts = async (id: string, start?: Date, end?: Date) => {

        await this.props.kNormStore.getMaxAllCount({
            id: '0',
            keyword: '',
            bolgeId: id,
            type: 'sube',
            skipCount: 0,
            maxResultCount: 100000,
            end: end,
            start: start
        });
    }
    onDateFilter = async (date) => {
        if (date !== null) {
            let start: any;
            let end: any;

            if (date[0] !== null) {
                start = date[0]._d;
            }
            if (date[1] !== null) {
                end = date[1]._d;
            }

            await this.getNormRequests(start, end);
            await this.getNormRequestCounts(start, end);

            this.setState({ moment: date })
        }
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
            message: type === "success" ? L('NormCreateNotificationMessageTitle') : L('NormRejectNotificationMessageTitle'),
            description: type === "success" ? L('NormCreateNotificationMessageDescription') : L('NormCreateNotificationMessageDescription'),
            duration: 3
        });
    };

    permissionNotification = type => {
        notification[type]({
            message: L('YouAreNotAuthorizedToAddRecordsTitle'),
            description: L('YouAreNotAuthorizedToAddRecordsDescription'),
            duration: 3
        });
    };

    // Şube için Norm Oluşturma Metodu
    kSubeNormCreate = () => {
        const form = this.formRef.current;
        form!.validateFields().then(async (values: any) => {

            if (this.state.normId === '0') {

                if (isGranted('ksubenorm.create')) {
                    await this.props.kSubeNormStore.create(values);
                    this.openNotificationWithIcon('success')
                } else {
                    this.permissionNotification('warning');
                }
            }

            else {
                if (isGranted('ksubenorm.edit')) {
                    await this.props.kSubeNormStore.update({ ...values, id: this.state.normId });
                } else {
                    this.permissionNotification('warning');
                }
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
            keyword: this.state.searchFilter,
            skipCount: this.state.skipCount,
            maxResultCount: this.state.maxResultCount
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
        await this.getPosition(tip);

        if (isGranted('ksubenorm.view')) {
            await this.getKSubeNorms();
        }

        this.setState({ modalVisible: !this.state.modalVisible });
    }

    async getEmployeeCount(id: string) {

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
        await this.getNormRequests(this.state.id, startOfMonth, currentDate)
        await this.getNormRequestCounts(this.state.id, startOfMonth, currentDate)
    }

    handleTableChange = (pagination: any) => {
        this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
    };

    handleSearch = (value: string) => {
        this.setState({ searchFilter: value }, async () => await this.getAll());
    };

    handlePagination = pagination => {
        const { filter } = this.state;
        const { pageSize, current } = pagination;

        this.setState({
            filter: {
                ...filter,
                current,
                limit: pageSize
            }
        });
    };

    public render() {

        const { filter, totalSize } = this.state;
        const tablePagination = {
            pageSize: filter.limit,
            current: filter.current || 1,
            total: totalSize,
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true,
            locale: { items_per_page: L('page') },
            // showTotal: total => L('Total') + ` : ${total}   `
        };

        const Search = Input.Search;
        const { cardLoading, moment } = this.state;
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
            { title: L('table.branch.name'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.type'), dataIndex: 'tip', key: 'tip', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.employeecount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.normcount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.normgap'), dataIndex: 'normEksigi', key: 'normEksigi', width: 150, render: (text: number) => <div>{text}</div> },
            {
                title: L('table.branch.transactions'),
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
                                    {
                                        this.isGranted('ksubenorm.operation') && <Menu.Item > <Link to={'#'} onClick={() => this.createOrUpdateModalOpen(item.tip, item.objId, item.adi)} > {L('NormCreate')} </Link> </Menu.Item>
                                    }
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
            <>  <React.Fragment>
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
                    moment={moment}
                    type="sube"
                    bolgeId={this.state.id}
                    normCount={normCount}
                    subeObjId={this.state.id}
                    cardLoading={cardLoading}
                    kPersonelCount={kPersonelCount}
                    onDateFilter={this.onDateFilter}
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
                            <Search placeholder={L('Filter')} onSearch={this.handleSearch} />
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
                                bordered={false}
                                columns={columns}
                                pagination={tablePagination}
                                onChange={this.handlePagination}
                                locale={{ emptyText: L('NoData') }}
                                rowKey={(record) => record.objId.toString()}
                                loading={kSubes === undefined ? true : false}
                                dataSource={kSubes === undefined ? [] : kSubes.items}
                            />
                        </Col>
                    </Row>
                </Card>
                <CreateKSubeNorm
                    modalType={'create'}
                    formRef={this.formRef}
                    positionSelect={positions}
                    subeAdi={this.state.subeAdi}
                    subeObjId={this.state.subeObjId}
                    visible={this.state.modalVisible}
                    kSubeNormEdit={this.kSubeNormEdit}
                    kSubeNormCreate={this.kSubeNormCreate}
                    kSubeNormDelete={this.kSubeNormDelete}
                    kPosizyonKontrol={this.kPosizyonKontrol}
                    kSubeNormStore={this.props.kSubeNormStore}
                    kSubeNorms={this.props.kSubeNormStore.norms}
                    onCancel={() => { this.setState({ modalVisible: false, }); }}
                    bolgeAdi={this.props.kSubeStore.editKSube !== undefined ? this.props.kSubeStore.editKSube.adi : ''}
                />
            </React.Fragment >
            </>
        )
    }
}

export default KSube;