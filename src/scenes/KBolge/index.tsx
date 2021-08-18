/* eslint-disable */
import './index.less';
import *  as React from 'react';
import { Link } from 'react-router-dom';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KBolgeStore from '../../stores/kBolgeStore';
import KCartList from '../../components/KCartList';
import { SettingOutlined } from '@ant-design/icons';
import KSubeNormStore from '../../stores/kSubeNormStore';
import { EntityDto } from '../../services/dto/entityDto';
import KPersonelStore from '../../stores/kPersonelStore';
import CreateKBolgeNorm from './components/createKBolgeNorm';
import KNormDetailStore from '../../stores/kNormDetailStore';
import AppComponentBase from '../../components/AppComponentBase';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, message, Button, Card, Col, Dropdown, Menu, Row, Table, Input, Breadcrumb, PageHeader, Modal } from 'antd';
import SessionStore from '../../stores/sessionStore';
import AuthenticationStore from '../../stores/authenticationStore';
import AccountStore from '../../stores/accountStore';
import BolgeTip from '../../services/kBolge/dto/bolgeTip';

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
    maxResultCount: number;
    modalVisible: boolean;
    cardLoading: boolean
    skipCount: number;
    subeObjId: string;
    subeAdi: string;
    userId: string;
    searchFilter: string;
    normId: string;
    id: string;
    totalSize: number;
    filter: {
        offset: number,
        limit: number,
        current: number
    }
}

const Search = Input.Search;
const confirm = Modal.confirm;

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
        searchFilter: '',
        normId: '0',
        userId: '0',
        subeAdi: '',
        skipCount: 0,
        subeObjId: '0',
        cardLoading: true,
        maxResultCount: 5,
        modalVisible: false,
        totalSize: 0,
        filter: {
            offset: 0,
            limit: 10,
            current: 0,
        }
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


    async getNormRequests() {
        await this.props.kNormStore.getMaxAll({
            maxResultCount: 100000,
            skipCount: 0,
            keyword: '',
            id: '0',
            bolgeId: '0',
            type: 'bolge'
        });

        await this.props.kNormStore.getMaxAllCount({
            maxResultCount: 100000,
            skipCount: 0,
            keyword: '',
            id: '0',
            bolgeId: '0',
            type: 'bolge'
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

 
    kSubeNormCreate = () => {
        const form = this.formRef.current;
        form!.validateFields()
            .then(async (values: any) => {
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
        await this.getKSubeNorms();
        this.setState({ modalVisible: !this.state.modalVisible });

    }

    async getEmployeeCount() {
        await this.props.kPersonelStore.getEmployeeCount();
    }


    async setPageState() {
        this.setState({ id: this.props["match"].params["id"] });
    }


    async componentDidMount() {
        await this.setPageState();
        await this.getAll();
        await this.getEmployeeCount();
        await this.getNormCount();
        await this.getNormRequests(); 
    }

    handleSearch = (value: string) => {
        this.setState({ searchFilter: value }, async () => await this.getAll());
    };

    goToNextPage = () => {
        const { filter, totalSize } = this.state;
        const { offset: currentOffset } = filter || {};
        const limit = 20;
        const offset =
            currentOffset + limit >= totalSize
                ? currentOffset
                : currentOffset + limit;

        this.setState({
            filter: {
                ...filter,
                limit,
                offset,
                current: offset / limit + 1
            }
        });
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
            pageSizeOptions: ["10", "20", "30", "50", "100"],
            showSizeChanger: true
            // showTotal: total => L('Total') + ` : ${total}   `
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
            { title: L('Name'), dataIndex: 'adi', key: 'adi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('Type'), dataIndex: 'tip', key: 'tip', width: 150, render: (text: string) => <div>{BolgeTip[text]}</div> },
            { title: L('EmployeeCount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('NormCount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: (text: number) => <div>{text}</div> },
            { title: L('NormOpening'), dataIndex: 'normEksigi', key: 'normEksigi', width: 150, render: (text: number) => <div>{text}</div> },
            {
                title: L('Actions'),
                width: 150,
                render: (text, bolge: any) => (
                    <div>
                        <Dropdown
                            trigger={['click']}
                            overlay={
                                <Menu>
                                    <Menu.Item >
                                        <Link to={
                                            {
                                                pathname: `/ksubedetay/${bolge.objId}`,
                                                state: {
                                                    subeAdi: bolge.adi
                                                }
                                            }
                                        }> {L('UnitDetail')} </Link>
                                    </Menu.Item>

                                    <Menu.Item key={"/ksube"} >
                                        <Link
                                            to={{
                                                pathname: `/ksube/${bolge.objId}`,
                                                state: {
                                                    name: bolge.adi,
                                                    tipTur: bolge.tipTur,
                                                    tip: bolge.tip
                                                }
                                            }}> {L('Branches')} </Link>
                                    </Menu.Item>
                                    <Menu.Item > <Link to={'#'} onClick={() => this.createOrUpdateModalOpen(bolge.tip, bolge.objId, bolge.adi)} > {L('NormCreate')} </Link> </Menu.Item>
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
                                <Breadcrumb.Item> <Link to="/dashboard">{L('Dashboard')}</Link>  </Breadcrumb.Item>
                                <Breadcrumb.Item> {L('RegionalOffices')} </Breadcrumb.Item>
                            </Breadcrumb>
                        }  >
                    </PageHeader>
                </Card>

                <KCartList
                    type={"bolge"}
                    subeObjId={0}
                    normCount={normCount}
                    bolgeId={this.state.id}
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
                    getCanceledNormUpdateRequestCount={getCanceledNormUpdateRequestCount} />
                <Card hoverable>
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
                </Card>

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