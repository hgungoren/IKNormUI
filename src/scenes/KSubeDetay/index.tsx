/*eslint-disable */
import './index.less';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KSubeStore from '../../stores/kSubeStore';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import KBolgeStore from '../../stores/kBolgeStore';
import { isGranted, L } from '../../lib/abpUtility';
import AccountStore from '../../stores/accountStore';
import SessionStore from '../../stores/sessionStore';
import { EntityDto } from '../../services/dto/entityDto';
import KSubeNormStore from '../../stores/kSubeNormStore';
import KPersonelStore from '../../stores/kPersonelStore';
import KHierarchyStore from '../../stores/kHierarchyStore';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import CreateNormForm from '../../components/CreateNormForm';
import KNormDetailStore from '../../stores/kNormDetailStore';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import AppComponentBase from '../../components/AppComponentBase';
import AuthenticationStore from '../../stores/authenticationStore';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import NormDetailTimeLine from '../../components/NormDetailTimeLine';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, Card, Col, Row, Table, Input, Button, Breadcrumb, PageHeader, Tag } from 'antd';

export interface IKsubeDatayProps {
    kSubeStore: KSubeStore;
    kNormStore: KNormStore;
    kBolgeStore: KBolgeStore;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;
    kPersonelStore: KPersonelStore;
    kSubeNormStore: KSubeNormStore;
    kHierarchyStore: KHierarchyStore;
    kNormDetailStore: KNormDetailStore;
    authenticationStore?: AuthenticationStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;
}

export interface IKSubeDatayState {
    id: string,
    tip: string,
    groupNorm: {},
    userId: number,
    filter: string,
    groupData: any[],
    groupEmployee: {},
    skipCount: number,
    createFormState: {},
    cardLoading: boolean,
    modalVisible: boolean,
    skipNormCount: number,
    maxResultCount: number,
    breadcrumbSubeAdi: string,
    bagliOlduguSubeId: string,
    breadcrumbBolgeAdi: string,
    maxNormResultCount: number,
    detaillModalVisible: boolean,
    normFilter: string,
}


const Search = Input.Search;

@inject(Stores.KSubeStore)
@inject(Stores.KBolgeStore)
@inject(Stores.KNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KHierarchyStore)
@inject(Stores.KNormDetailStore)
@inject(Stores.KInkaLookUpTableStore)
@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class KSubeDetay extends AppComponentBase<IKsubeDatayProps, IKSubeDatayState>{
    formRef = React.createRef<FormInstance>();

    state = {
        detaillModalVisible: false,
        maxNormResultCount: 5,
        modalVisible: false,
        cardLoading: true,
        groupEmployee: {},
        maxResultCount: 5,
        skipNormCount: 0,
        normFilter: '',
        groupNorm: {},
        skipCount: 0,
        filter: '',
        userId: 0,
        tip: '',
        id: '0',
        groupData: [{
            id: 0,
            norm: 0,
            gorev: '',
            normCount: 0,
            employeeCount: 0,
        }],
        bagliOlduguSubeId: '',
        createFormState: {
            "name": "Next",
            "visible": false,
            "pane": "PositionSelect",
        },
        breadcrumbSubeAdi: '',
        breadcrumbBolgeAdi: ''
    };

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

    async getNormRequests() {
        this.props.kNormStore.getAll({
            id: this.state.id,
            keyword: this.state.normFilter,
            maxResultCount: this.state.maxNormResultCount,
            skipCount: this.state.skipNormCount,
            bolgeId: '0',
            type: 'subedetail'
        })
    }


    async getAllSubeNormForGroupBy() {
        await this.props.kSubeNormStore.getAllNorms({
            maxResultCount: 10000,
            skipCount: 0,
            keyword: '',
            id: this.state.id
        });
    }

    async setAllSubeNormGroupBy() {
        let groupNorm = this.props.kSubeNormStore.norms.items.reduce((result, currentValue) => {

            (result[currentValue['pozisyon']] = result[currentValue['pozisyon']] || [])
                .push(
                    currentValue
                );
            return result;
        }, {});
        this.setState({ groupNorm, cardLoading: false })
    }

    async getAllEmployeesForGroupBy() {
        await this.props.kPersonelStore.getAllEmployees({
            maxResultCount: 10000,
            skipCount: 0,
            keyword: '',
            id: this.state.id
        });
    }

    async setAllEmployeesGroupBy() {
        let groupEmployee = this.props.kPersonelStore.kAllPersonels.items.reduce((result, currentValue) => {
            (result[currentValue['gorevi']] = result[currentValue['gorevi']] || [])
                .push(
                    currentValue
                );
            return result;
        }, {});
        this.setState({ groupEmployee, cardLoading: false })
    }

    async getAllEmployees() {

        await this.props.kPersonelStore.getAll({
            maxResultCount: this.state.maxResultCount,
            skipCount: this.state.skipCount,
            keyword: this.state.filter,
            id: this.state.id
        });
    }

    getKHierarchy = async () => {
        await this.props.kHierarchyStore.getAll(
            this.state.tip,
            this.state.bagliOlduguSubeId);
    }

    async pageSettings(entityDto: EntityDto<string>) {

        await this.props.kSubeStore.get(entityDto);
        this.setState({
            tip: this.props.kSubeStore.editKSube.tip,
            bagliOlduguSubeId: this.props.kSubeStore.editKSube.bagliOlduguSube_ObjId,
        })

        if (isGranted('kbolge.view')) {
            await this.props.kBolgeStore.get({ id: this.state.bagliOlduguSubeId });
            this.setState({
                breadcrumbBolgeAdi: this.props.kBolgeStore.editKBolge.adi,
                breadcrumbSubeAdi: this.props.kSubeStore.editKSube.adi
            })
        }
    }

    setPageState = async () => {
        this.setState({ id: this.props["match"].params["id"] });
    }

    async componentDidMount() {

        await this.setPageState();
        if (isGranted('ksubedetail.employee.list')) {
            await this.getAllEmployees();
        }

        await this.pageSettings({ id: this.state.id });

        if (isGranted('ksubedetail.norm.request.list')) {
            await this.getNormRequests();
            await this.getKHierarchy();
            await this.getAllEmployees();
        }

        if (isGranted('ksubedetail.norm.employee.list')) {
            await this.getAllEmployeesForGroupBy();
            await this.getAllSubeNormForGroupBy();
            await this.setAllEmployeesGroupBy();
            await this.setAllSubeNormGroupBy();
            await this.mergeArray();
        }
    }

    handleTableChange = (pagination: any) => {
        this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAllEmployees());
    };

    handleSearch = (value: string) => {
        this.setState({ filter: value }, async () => await this.getAllEmployees());
    };

    handleNormTableChange = (pagination: any) => {
        this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequests());
    };

    handleNormSearch = (value: string) => {
        this.setState({ normFilter: value }, async () => await this.getNormRequests());
    };

    async createOrUpdateModalOpen(entityDto: EntityDto) {
        this.setState({ modalVisible: !this.state.modalVisible });
        this.getPosition(this.state.tip);
    }

    async detailModalOpen(id: number) {

    console.log(this.props.kNormStore)
        await this.props.kNormStore.getById({ id: id });
        await this.props.kNormDetailStore.getDetails(id);
        this.setState({ detaillModalVisible: !this.state.detaillModalVisible });
    }

    openNotificationWithIcon = type => {
        notification[type]({
            message: type === "success" ? L('NormCreateNotificationMessageTitle') : L('NormRejectNotificationMessageTitle'),
            description: type === "success" ? L('NormCreateNotificationMessageDescription') : L('NormCreateNotificationMessageDescription'),
            duration: 3
        });
    };

    createNorm = () => {
        const form = this.formRef.current;
        form!.validateFields().then(async (values: any) => {
            values.mails = this.props.kHierarchyStore.kHierarchies;
            await this.props.kNormStore.create(values);
            this.openNotificationWithIcon('success')
            form!.resetFields();
            await this.getNormRequests();
            setTimeout(() => {
                this.setState({ modalVisible: false })
            }, 500);
        });
    }

    mergeArray = async () => {
        let employees = (Object.keys(this.state.groupEmployee).map((y, i) => ({
            id: i,
            gorev: y,
            employeeCount: [...this.state.groupEmployee[y]].length,
            normCount: 0
        })));

        let norms = (Object.keys(this.state.groupNorm).map((y, i) => ({
            id: i,
            gorev: y,
            employeeCount: 0,
            normCount: [...this.state.groupNorm[y]].length
        })));

        let result = [...employees, ...norms];
        let names = result.map(x => x.gorev);
        let set = new Set(names);

        let groupData = [...set].map((x, i) => {
            let gorev = x;
            let employee = employees.find(x => x.gorev === gorev)?.employeeCount
            let norm = norms.find(x => x.gorev === gorev)?.normCount

            return Object.assign({
                id: i,
                gorev: x,
                employeeCount: employee !== undefined ? employee : 0,
                nomrCount: norm !== undefined ? norm : 0,
                norm: ((norm !== undefined ? norm : 0) - (employee !== undefined ? employee : 0))
            })
        })

        this.setState({ groupData: groupData })
    }


    public render() {

        const { kNorms, editKNorm } = this.props.kNormStore;
        const { norms } = this.props.kSubeNormStore;
        const { kPersonels } = this.props.kPersonelStore!;
        const { kHierarchies } = this.props.kHierarchyStore;
        const { kNormAllDetails } = this.props.kNormDetailStore;
        const { breadcrumbBolgeAdi, breadcrumbSubeAdi, detaillModalVisible, groupData, createFormState, modalVisible, tip, id, bagliOlduguSubeId } = this.state;

        const normEmployeeCoumns = [
            { title: L('table.branch.duty'), dataIndex: 'gorev', key: 'gorev', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.employeecount'), dataIndex: 'employeeCount', key: 'employeeCount', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.normcount'), dataIndex: 'nomrCount', key: 'nomrCount', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.branch.normgap'), dataIndex: 'norm', key: 'norm', width: 150, render: (text: string) => <div>{text}</div> }
        ]

        const columns = [
            { title: L('table.employee.name'), dataIndex: 'ad', key: 'ad', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.employee.surname'), dataIndex: 'soyad', key: 'soyad', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.employee.duty'), dataIndex: 'gorevi', key: 'gorevi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: L('table.employee.registrationnumber'), dataIndex: 'sicilNo', key: 'sicilNo', width: 150, render: (text: string) => <div>{text}</div> }
        ];

        const columnsNorm = [
            {
                title: L("table.norm.requestdate"), dataIndex: 'creationTime', key: 'creationTime', width: 100, render: (text: string) => <div>
                    {
                        new Date(text).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "numeric",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }
                </div>
            },
            { title: L("table.norm.requeststatus"), dataIndex: 'durumu', key: 'durumu', width: 150, render: (text: TalepDurumu) => <div> <Tag color="warning">  {TalepDurumu[text] + ' ' + L('Waiting')}</Tag></div> },
            { title: L("table.norm.area.name"), dataIndex: 'bolgeAdi', key: 'bolgeAdi', width: 100, render: (text: string) => <div>{text}</div> },
            { title: L("table.norm.branch.name"), dataIndex: 'subeAdi', key: 'subeAdi', width: 100, render: (text: string) => <div>{text}</div> },
            { title: L("table.norm.position"), dataIndex: 'pozisyon', key: 'pozisyon', width: 100, render: (text: string) => <div>{text}</div> },
            { title: L("table.norm.requestreason"), dataIndex: 'nedeni', key: 'nedeni', width: 150, render: (text: TalepNedeni) => <div>{TalepNedeni[text]}</div> },
            { title: L("table.norm.requesttype"), dataIndex: 'turu', key: 'turu', width: 150, render: (text: TalepTuru) => <div>{TalepTuru[text]}</div> },
            {
                title: L("table.norm.transactions"),
                dataIndex: 'id',
                key: 'id',
                width: 50,
                render: (text: number) => (
                    <Button className={'info'} onClick={() => this.detailModalOpen(text)} icon={<FileSearchOutlined />} type="primary" ></Button>
                ),
            }
        ];

        return (
            <React.Fragment>
                <Card style={{ marginBottom: 20 }} hoverable>
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={
                            <Breadcrumb>
                                <Breadcrumb.Item>

                                    {
                                        isGranted('dashboard.view') ? <Link to="/dashboard">{L('Dashboard')}</Link> : <Link to="/home">{L('Home')}</Link>
                                    }

                                </Breadcrumb.Item>
                                {
                                    isGranted('kbolge.view') && <Breadcrumb.Item> <Link to="/bolgemudurluk">{L('RegionalOffices')}</Link> </Breadcrumb.Item>
                                }

                                {
                                    breadcrumbBolgeAdi !== '' && <Breadcrumb.Item> {breadcrumbBolgeAdi} </Breadcrumb.Item>
                                }
                                {
                                    breadcrumbSubeAdi !== '' && <Breadcrumb.Item> {breadcrumbSubeAdi} </Breadcrumb.Item>
                                }
                            </Breadcrumb>
                        }  >
                    </PageHeader>
                </Card>

                {
                    isGranted('ksubedetail.norm.employee.list') && <Card style={{ marginBottom: 20 }} hoverable>
                        <Row style={{ marginTop: 20 }}>
                            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}   >
                                <Table
                                    bordered={false}
                                    columns={normEmployeeCoumns}
                                    rowKey={(record) => record.id}
                                    locale={{ emptyText: L('NoData') }}
                                    loading={groupData.length == 1 ? true : false}
                                    dataSource={groupData === undefined ? [] : groupData}
                                    pagination={{ pageSize: 5, total: kNorms === undefined ? 0 : groupData.length, defaultCurrent: 1 }}
                                />
                            </Col>
                        </Row>
                    </Card>
                }


                {
                    isGranted('ksubedetail.employee.list') && <Card hoverable>
                        <Row>
                            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 23, offset: 0 }} md={{ span: 23, offset: 0 }} lg={{ span: 23, offset: 0 }} xl={{ span: 23, offset: 0 }} xxl={{ span: 23, offset: 0 }}  >
                                {' '}
                                <h2>{L('EmployeesList')}</h2>
                            </Col>
                            <Col
                                xs={{ span: 14, offset: 0 }}
                                sm={{ span: 15, offset: 0 }}
                                md={{ span: 15, offset: 0 }}
                                lg={{ span: 1, offset: 21 }}
                                xl={{ span: 1, offset: 21 }}
                                xxl={{ span: 1, offset: 21 }} >
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
                                    locale={{ emptyText: L('NoData') }}
                                    bordered={false}
                                    columns={columns}
                                    onChange={this.handleTableChange}
                                    rowKey={(record) => record.objId.toString()}
                                    loading={kPersonels === undefined ? true : false}
                                    dataSource={kPersonels === undefined ? [] : kPersonels.items}
                                    pagination={{ pageSize: 5, total: kPersonels === undefined ? 0 : kPersonels.totalCount, defaultCurrent: 1 }}
                                />
                            </Col>
                        </Row>
                    </Card>
                }
                {
                    isGranted('ksubedetail.norm.request.list') && <Card hoverable style={{ marginTop: 15 }}>
                        <Row>
                            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 23, offset: 0 }} md={{ span: 23, offset: 0 }} lg={{ span: 23, offset: 0 }} xl={{ span: 23, offset: 0 }} xxl={{ span: 23, offset: 0 }}  >
                                {' '}
                                <h2>{L('NormDetailPanel')}</h2>
                            </Col>
                            <Col
                                xs={{ span: 14, offset: 0 }}
                                sm={{ span: 15, offset: 0 }}
                                md={{ span: 15, offset: 0 }}
                                lg={{ span: 1, offset: 21 }}
                                xl={{ span: 1, offset: 21 }}
                                xxl={{ span: 1, offset: 21 }}  >

                                {isGranted('knorm.create') && <Button type="primary" icon={<PlusOutlined />} onClick={() => this.createOrUpdateModalOpen({ id: 0 })}  > {L('NormOperations')} </Button>}

                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{ span: 10, offset: 0 }}>
                                <Search placeholder={this.L('Filter')} onSearch={this.handleNormSearch} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}>
                                <Table
                                    bordered={false}
                                    columns={columnsNorm}
                                    locale={{ emptyText: L('NoData') }}
                                    onChange={this.handleNormTableChange}
                                    rowKey={(record) => record.id}
                                    loading={kNorms === undefined ? true : false}
                                    dataSource={kNorms === undefined ? [] : kNorms.items}
                                    pagination={{ pageSize: 5, total: kNorms === undefined ? 0 : kNorms.totalCount, defaultCurrent: 1 }}
                                />
                            </Col>
                        </Row>
                    </Card>
                }

                <CreateNormForm
                    modalType={'create'}
                    tip={tip}
                    formRef={this.formRef}
                    subeId={id}
                    hierarchy={kHierarchies}
                    employees={kPersonels}
                    onCreateNorm={this.createNorm}
                    visible={modalVisible}
                    createFormState={createFormState}
                    bagliOlduguSubeId={bagliOlduguSubeId}
                    position={this.props.kInkaLookUpTableStore.positions}
                    normCount={norms !== undefined ? norms.items.length : 0}
                    onCancel={() => {
                        const form = this.formRef.current;
                        this.setState({
                            modalVisible: false,
                        });
                        form!.resetFields();
                    }} />

                <NormDetailTimeLine
                    norm={editKNorm}
                    data={kNormAllDetails}
                    title={breadcrumbSubeAdi}
                    visible={detaillModalVisible}
                    onCancel={() => {
                        this.setState({
                            detaillModalVisible: false,
                        });
                    }}
                />
            </React.Fragment >
        );
    }
}

export default KSubeDetay;


