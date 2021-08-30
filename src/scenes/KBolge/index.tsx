/* eslint-disable */
import './index.less';
import *  as React from 'react';
import { Link } from 'react-router-dom';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KBolgeStore from '../../stores/kBolgeStore';
import KCartList from '../../components/KCartList';
import { SettingOutlined } from '@ant-design/icons';
import { isGranted, L } from '../../lib/abpUtility';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import KSubeNormStore from '../../stores/kSubeNormStore';
import { EntityDto } from '../../services/dto/entityDto';
import KPersonelStore from '../../stores/kPersonelStore';
import BolgeTip from '../../services/kBolge/dto/bolgeTip';
import CreateKBolgeNorm from './components/createKBolgeNorm';
import KNormDetailStore from '../../stores/kNormDetailStore';
import AppComponentBase from '../../components/AppComponentBase';
import AuthenticationStore from '../../stores/authenticationStore';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, message, Button, Card, Col, Dropdown, Menu, Row, Table, Input, Breadcrumb, PageHeader, Modal } from 'antd';
import moment from 'moment';
import { Breakpoint } from 'antd/lib/_util/responsiveObserve';

export interface IBolgeProps {
    kNormStore: KNormStore;
    kBolgeStore: KBolgeStore;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;
    kPersonelStore: KPersonelStore;
    kSubeNormStore: KSubeNormStore;
    kNormDetailStore: KNormDetailStore;
    authenticationStore?: AuthenticationStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;
}

export interface IBolgeState {
    id: string;
    normId: string;
    userId: string;
    subeAdi: string;
    skipCount: number;
    subeObjId: string;
    totalSize: number;
    cardLoading: boolean;
    searchFilter: string;
    modalVisible: boolean;
    maxResultCount: number;
    filter: { offset: number, limit: number, current: number }
    moment: any;
}

const Search = Input.Search;
const confirm = Modal.confirm;
const startOfMonth = moment(moment().startOf('month').format('DD-MM-YYYY')).toDate();
const currentDate = moment().toDate();


@inject(Stores.KNormStore)
@inject(Stores.KBolgeStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KNormDetailStore)
@inject(Stores.KInkaLookUpTableStore)
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class KBolge extends AppComponentBase<IBolgeProps, IBolgeState> {

    formRef = React.createRef<FormInstance>();

    state = {
        id: '0',
        normId: '0',
        userId: '0',
        subeAdi: '',
        skipCount: 0,
        totalSize: 0,
        subeObjId: '0',
        cardLoading: true,
        maxResultCount: 5,
        searchFilter: '',
        modalVisible: false,
        filter: { offset: 0, limit: 5, current: 0, },
        moment: [] as any
    };


    async getKSubeNorms() {
        await this.props.kSubeNormStore.getAllNorms({
            keyword: '',
            skipCount: 0,
            id: this.state.subeObjId,
            maxResultCount: 5,
        });
    }


    getNormRequests = async (start?: Date, end?: Date) => {
        await this.props.kNormStore.getMaxAll({
            id: '0',
            keyword: '',
            skipCount: 0,
            bolgeId: '0',
            type: 'bolge',
            maxResultCount: 100000,
            end: end,
            start: start
        });
    }

    getNormRequestCounts = async (start?: Date, end?: Date) => {
        await this.props.kNormStore.getMaxAllCount({
            id: '0',
            keyword: '',
            skipCount: 0,
            bolgeId: '0',
            type: 'bolge',
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

    async getNormCount() {
        await this.props.kSubeNormStore.getNormsCount();
    }

    async getEmployeeCount() {
        await this.props.kPersonelStore.getEmployeesCount();
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

    kSubeNormCreate = () => {
        const form = this.formRef.current;
        form!.validateFields()
            .then(async (values: any) => {
                if (this.state.normId === '0') {
                    if (isGranted('kbolge.norm.create')) {
                        await this.props.kSubeNormStore.create(values);
                        this.openNotificationWithIcon('success')
                    }
                    else {
                        this.permissionNotification('warning');
                    }
                } else {
                    if (isGranted('kbolge.norm.edit')) {
                        await this.props.kSubeNormStore.update({ ...values, id: this.state.normId });
                    }
                    else {
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

        await this.props.kBolgeStore.getAll({
            maxResultCount: this.state.maxResultCount,
            skipCount: this.state.skipCount,
            keyword: this.state.searchFilter
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
 
    async createOrUpdateModalOpen(tip: string, id: string, subeAdi: string) {
        this.formRef.current?.resetFields();
        await this.setState({ subeObjId: id, subeAdi: subeAdi })
        await this.getPosition(tip);

        if (isGranted('kbolge.norm.view')) {
            await this.getKSubeNorms();
        }

        this.setState({ modalVisible: !this.state.modalVisible });
    } 

    async setPageState() {
        this.setState({ id: this.props["match"].params["id"] });
    }

    async componentDidMount() {
        await this.setPageState();
        await this.getAll();
        await this.getEmployeeCount();
        await this.getNormCount();

        if (isGranted('knorm.getcancelednormupdaterequest') ||
            isGranted('knorm.getacceptednormupdaterequest') ||
            isGranted('knorm.getpendingnormupdaterequest') ||
            isGranted('knorm.gettotalnormupdaterequest') ||
            isGranted('knorm.getcancelednormfillrequest') ||
            isGranted('knorm.getacceptednormfillrequest') ||
            isGranted('knorm.getpendingnormfillrequest') ||
            isGranted('knorm.gettotalnormfillingrequest')
        ) {
            await this.getNormRequests(startOfMonth, currentDate);
            await this.getNormRequestCounts(startOfMonth, currentDate);
        }
    }

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
        const { filter, totalSize, moment } = this.state;
        const tablePagination = {
            pageSize: filter.limit,
            current: filter.current || 1,
            total: totalSize,
            locale: { items_per_page: L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true,
        };

        const { cardLoading } = this.state;
        const { kBolge } = this.props.kBolgeStore;
        const { normCount } = this.props.kSubeNormStore;
        const { kPersonelCount } = this.props.kPersonelStore;
        const { positions } = this.props.kInkaLookUpTableStore;
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

            {
                title: L('AreaInformations xs'),
                render: (record) => (
                  <React.Fragment>
                    <span className={'responsive-title'}>{L('table.area.name')}</span> : {record.adi}
                    <br />
                    <span className={'responsive-title'}>{L('table.area.type')}</span>  : {record.tip}
                    <br />
                    <span className={'responsive-title'}>{L('table.area.employeecount')} </span> : {record.personelSayisi}
                    <br />
                    <span className={'responsive-title'}>{L('table.area.normcount')}</span>  : {record.normSayisi}
                    <br />
                    <span className={'responsive-title'}> {L('table.area.normgap')}</span>  : {record.normEksigi}
                    <br/>
                    <span className={'responsive-title'}> {L('Actions')}</span>  : {record.text}
                  </React.Fragment>
                ),
                responsive: ['xs'] as Breakpoint[]
                
              },

            

            { title: L('table.area.name'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{text}</div>  ,responsive: ['sm'] as Breakpoint[] },
            { title: L('table.area.type'), dataIndex: 'tip', key: 'tip', width: 150, render: (text: string) => <div>{BolgeTip[text]}</div>  ,responsive: ['sm'] as Breakpoint[] },
            { title: L('table.area.employeecount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: (text: string) => <div>{text}</div>  ,responsive: ['sm'] as Breakpoint[]},
            { title: L('table.area.normcount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: (text: number) => <div>{text}</div>  ,responsive: ['sm'] as Breakpoint[]},
            { title: L('table.area.normgap'), dataIndex: 'normEksigi', key: 'normEksigi', width: 150, render: (text: number) => <div>{text}</div>  ,responsive: ['sm'] as Breakpoint[]},
            {
                title: L('Actions'),
                width: 150,
                render: (text, bolge: any) => (
                    <div>
                        <Dropdown
                            trigger={['click']}
                            overlay={
                                <Menu>
                                    {
                                        isGranted('kbolge.detail') && (<Menu.Item > <Link to={{ pathname: `/ksubedetay/${bolge.objId}`, state: { subeAdi: bolge.adi } }}> {L('UnitDetail')} </Link> </Menu.Item>)
                                    }
                                    {
                                        isGranted('kbolge.branches') && (<Menu.Item key={"/ksube"} > <Link to={{ pathname: `/ksube/${bolge.objId}`, state: { name: bolge.adi, tipTur: bolge.tipTur, tip: bolge.tip } }}> {L('Branches')} </Link> </Menu.Item>)
                                    }
                                    {
                                        isGranted('kbolge.norm.operation') && (<Menu.Item > <Link to={'#'} onClick={() => this.createOrUpdateModalOpen(bolge.tip, bolge.objId, bolge.adi)} > {L('NormCreate')} </Link> </Menu.Item>)
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
                responsive: ['sm'] as Breakpoint[]
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
                                <Breadcrumb.Item> <Link to="/dashboard">{L('Dashboard')}</Link>  </Breadcrumb.Item>
                                <Breadcrumb.Item> {L('RegionalOffices')} </Breadcrumb.Item>
                            </Breadcrumb>
                        }  >
                    </PageHeader>
                </Card>
                <KCartList
                    moment={moment}
                    type={"bolge"}
                    subeObjId={0}
                    normCount={normCount}
                    bolgeId={this.state.id}
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
                    getCanceledNormUpdateRequestCount={getCanceledNormUpdateRequestCount} />
                {
                    this.isGranted('kbolge.areas.list') && <Card hoverable>

                        <Row>
                            <Col
                                xs={{ span: 6, offset: 0 }}
                                sm={{ span: 6, offset: 0 }}
                                md={{ span: 6, offset: 0 }}
                                lg={{ span: 4, offset: 0 }}
                                xl={{ span: 4, offset: 0 }}
                                xxl={{ span: 4, offset: 0 }} >
                                {' '}
                                <h2>{L('Areas')}</h2>
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
                                xxl={{ span: 24, offset: 0 }} >
                                <Table
                                    locale={{ emptyText: L('NoData') }}
                                    bordered={false}
                                    columns={columns}
                                    onChange={this.handlePagination}
                                    rowKey={(record) => record.objId.toString()}
                                    loading={kBolge === undefined ? true : false}
                                    dataSource={kBolge === undefined ? [] : kBolge.items}
                                    pagination={tablePagination}
                                />
                            </Col>
                        </Row>

                    </Card>}

                <CreateKBolgeNorm
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
                    onCancel={() => { this.setState({ modalVisible: false, }) }}
                />
            </React.Fragment >
        )
    }
}

export default KBolge;