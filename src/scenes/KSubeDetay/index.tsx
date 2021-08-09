/*eslint-disable */
import './index.less';
import * as React from 'react';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KSubeStore from '../../stores/kSubeStore';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import { EntityDto } from '../../services/dto/entityDto';
import KSubeNormStore from '../../stores/kSubeNormStore';
import KPersonelStore from '../../stores/kPersonelStore';
import KHierarchyStore from '../../stores/kHierarchyStore';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import CreateNormForm from '../../components/CreateNormForm';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import AppComponentBase from '../../components/AppComponentBase';
import NormDetailTimeLine from '../../components/NormDetailTimeLine';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, Card, Col, Row, Table, Input, Button, Breadcrumb, PageHeader } from 'antd'; 

export interface IKsubeDatayProps {
    kSubeStore: KSubeStore;
    kNormStore: KNormStore;
    kPersonelStore: KPersonelStore;
    kSubeNormStore: KSubeNormStore;
    kHierarchyStore: KHierarchyStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;

    location: {
        hash: "",
        key: "",
        pathname: "",
        search: "",
        state: {
            subeAdi: ""
        }
    }
}

export interface IKSubeDatayState {
    detaillModalVisible: boolean,
    maxNormResultCount: number,
    bagliOlduguSubeId: string,
    maxResultCount: number,
    skipNormCount: number,
    modalVisible: boolean,
    cardLoading: boolean,
    filterKNorm: string,
    filterNorm: string,
    skipCount: number,
    groupEmployee: {},
    groupData: any[],
    filter: string,
    userId: number,
    groupNorm: {},
    tip: string,
    id: number,
}

const Search = Input.Search;
@inject(Stores.KSubeStore)
@inject(Stores.KNormStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KHierarchyStore)
@inject(Stores.KInkaLookUpTableStore)

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
        filterKNorm: '',
        filterNorm: '',
        groupNorm: {},
        skipCount: 0,
        filter: '',
        userId: 0,
        tip: '',
        id: 0,
        groupData: [{
            id: 0,
            gorev: '',
            employeeCount: 0,
            normCount: 0,
            norm: 0
        }],
        bagliOlduguSubeId: ''
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
            keyword: this.state.filterKNorm,
            maxResultCount: this.state.maxNormResultCount,
            skipCount: this.state.skipNormCount
        })
    }

    async getAllSubeNorm() {
        await this.props.kSubeNormStore.getAllNorms({
            maxResultCount: 10000,
            skipCount: 0,
            keyword: '',
            id: this.state.id
        });

        let groupNorm = this.props.kSubeNormStore.norms.items.reduce((result, currentValue) => {

            (result[currentValue['pozisyon']] = result[currentValue['pozisyon']] || [])
                .push(
                    currentValue
                );
            return result;
        }, {});
        this.setState({ groupNorm, cardLoading: false })
    }

    async getAllEmployees() {

        await this.props.kPersonelStore.getAllEmployees({
            maxResultCount: 10000,
            skipCount: 0,
            keyword: '',
            id: this.state.id
        });

        let groupEmployee = this.props.kPersonelStore.kAllPersonels.items.reduce((result, currentValue) => {
            (result[currentValue['gorevi']] = result[currentValue['gorevi']] || [])
                .push(
                    currentValue
                );
            return result;
        }, {});
        this.setState({ groupEmployee, cardLoading: false })
    }

    async getAll() {

        await this.props.kPersonelStore.getAll({
            maxResultCount: this.state.maxResultCount,
            skipCount: this.state.skipCount,
            keyword: this.state.filter,
            id: this.state.id
        });
    }

    getKHierarchy = async () => {
        await this.props.kHierarchyStore.getAll(this.state.tip, this.state.bagliOlduguSubeId);
    }

    async get(entityDto: EntityDto) {
        await this.props.kSubeStore.get(entityDto);
        this.setState({ tip: this.props.kSubeStore.editKSube.tip, bagliOlduguSubeId: this.props.kSubeStore.editKSube.bagliOlduguSube_ObjId })
    }

    setPageState = async () => this.setState({ id: this.props["match"].params["id"] });

    async componentDidMount() {
        await this.setPageState();
        await this.getAll();
        await this.getAllSubeNorm();
        await this.getAllEmployees();
        await this.get({ id: this.state.id });
        await this.getNormRequests();
        await this.mergeArray();
        await this.getKHierarchy();
    }

    handleTableChange = (pagination: any) => {
        this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
    };

    handleSearch = (value: string) => {
        this.setState({ filter: value }, async () => await this.getAll());
    };

    handleNormTableChange = (pagination: any) => {
        this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequests());
    };

    handleNormSearch = (value: string) => {
        this.setState({ filter: value }, async () => await this.getNormRequests());
    };

    async createOrUpdateModalOpen(entityDto: EntityDto) {
        this.setState({ modalVisible: !this.state.modalVisible });
        this.getPosition(this.state.tip);
    }

    async detailModalOpen(id: any) {
        this.setState({ detaillModalVisible: !this.state.detaillModalVisible });
    }

    openNotificationWithIcon = type => {
        notification[type]({
            message: L('NormCreateNotificationMessageTitle'),
            description: L('NormCreateNotificationMessageDescription'),
            duration: 3
        });
    };

    createNorm = () => {
        const form = this.formRef.current;
        form!.validateFields().then(async (values: any) => {

            let mails = this.props.kHierarchyStore.kHierarchies.map(x => (
                {
                    mail: x.mail,
                    title: x.title,
                    orderNo: x.orderNo,
                    gMYType: x.gMYType,
                    lastName: x.lastName,
                    firstName: x.firstName,
                    normalizedTitle: x.normalizedTitle,
                }
            ));

            values.mails = mails;

            await this.props.kNormStore.create(values);
            this.openNotificationWithIcon('success')
            form!.resetFields();
            await this.getNormRequests();
            setTimeout(() => {
                this.setState({ modalVisible: false })
            }, 1000);
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

        const { location } = this.props;
        const { kNorms } = this.props.kNormStore;
        const { editKSube } = this.props.kSubeStore;
        const { norms } = this.props.kSubeNormStore;
        const { kHierarchies } = this.props.kHierarchyStore;
        const { kPersonels, kAllPersonels } = this.props.kPersonelStore!;

        const normEmployeeCoumns = [
            { title: 'Gorev', dataIndex: 'gorev', key: 'gorev', width: 150, render: (text: string) => <div>{text}</div> },
            { title: 'Personel', dataIndex: 'employeeCount', key: 'employeeCount', width: 150, render: (text: string) => <div>{text}</div> },
            { title: 'Norm', dataIndex: 'nomrCount', key: 'nomrCount', width: 150, render: (text: string) => <div>{text}</div> },
            { title: 'Norm Açığı', dataIndex: 'norm', key: 'norm', width: 150, render: (text: string) => <div>{text}</div> }
        ]

        const columns = [
            { title: 'Adi', dataIndex: 'ad', key: 'ad', width: 150, render: (text: string) => <div>{text}</div> },
            { title: 'Soyadi', dataIndex: 'soyad', key: 'soyad', width: 150, render: (text: string) => <div>{text}</div> },
            { title: 'Görevi', dataIndex: 'gorevi', key: 'gorevi', width: 150, render: (text: string) => <div>{text}</div> },
            { title: 'Sicil No', dataIndex: 'sicilNo', key: 'sicilNo', width: 150, render: (text: string) => <div>{text}</div> }
        ];

        const columnsNorm = [
            { title: "Talep Tarihi", dataIndex: 'creationTime', key: 'creationTime', width: 100, render: (text: string) => <div>{text}</div> },
            { title: "Talep Durumu", dataIndex: 'durumu', key: 'durumu', width: 250, render: (text: TalepDurumu) => <div>{TalepDurumu[text]}</div> },
            { title: "Pozisyon", dataIndex: 'pozisyon', key: 'pozisyon', width: 100, render: (text: string) => <div>{text}</div> },
            { title: "Talep Nedeni", dataIndex: 'nedeni', key: 'nedeni', width: 150, render: (text: TalepNedeni) => <div>{TalepNedeni[text]}</div> },
            { title: "Talep Türü", dataIndex: 'turu', key: 'turu', width: 150, render: (text: TalepTuru) => <div>{TalepTuru[text]}</div> },
            {
                title: "İşlem",
                dataIndex: 'aktif',
                key: 'aktif',
                width: 50,
                render: (text: boolean) => (
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
                                <Breadcrumb.Item> {L('Dashboard')} </Breadcrumb.Item>
                                <Breadcrumb.Item> {L('RegionalOffices')} </Breadcrumb.Item>
                                <Breadcrumb.Item>  {location !== undefined && location.state.subeAdi}  </Breadcrumb.Item>
                                <Breadcrumb.Item> {editKSube === undefined ? '' : editKSube.adi} </Breadcrumb.Item>
                            </Breadcrumb>
                        }  >
                    </PageHeader>
                </Card>
                <Card style={{ marginBottom: 20 }} hoverable>
                    <Row style={{ marginTop: 20 }}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}   >
                            <Table
                                bordered={false}
                                columns={normEmployeeCoumns}
                                rowKey={(record) => record.id}
                                loading={this.state.groupData.length == 1 ? true : false}
                                pagination={{ pageSize: 5, total: kNorms === undefined ? 0 : this.state.groupData.length, defaultCurrent: 1 }}
                                dataSource={this.state.groupData === undefined ? [] : this.state.groupData}
                            />
                        </Col>
                    </Row>
                </Card>
                <Card hoverable>
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
                            xxl={{ span: 1, offset: 21 }}  >
                            <Button type="primary" icon={<PlusOutlined />} onClick={() => this.createOrUpdateModalOpen({ id: 0 })}  > {L('RequestNorm')} </Button>
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
                <Card hoverable style={{ marginTop: 15 }}>
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
                            xxl={{ span: 1, offset: 21 }} >
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Search placeholder={this.L('Filter')} onSearch={this.handleNormSearch} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}   >
                            <Table
                                bordered={false}
                                columns={columnsNorm}
                                onChange={this.handleNormTableChange}
                                rowKey={(record) => record.subeObjId}
                                loading={kNorms === undefined ? true : false}
                                dataSource={kNorms === undefined ? [] : kNorms.items}
                                pagination={{ pageSize: 5, total: kNorms === undefined ? 0 : kNorms.totalCount, defaultCurrent: 1 }}
                            />
                        </Col>
                    </Row>
                </Card>
                <CreateNormForm
                    modalType={'create'}
                    tip={this.state.tip}
                    formRef={this.formRef}
                    subeId={this.state.id}
                    hierarchy={kHierarchies}
                    employees={kAllPersonels}
                    onCreateNorm={this.createNorm}
                    visible={this.state.modalVisible}
                    position={this.props.kInkaLookUpTableStore.positions}
                    normCount={norms !== undefined ? norms.items.length : 0}
                    onCancel={() => {
                        const form = this.formRef.current;
                        this.setState({
                            modalVisible: false,
                        });
                        form!.resetFields();
                    }}
                />

                <NormDetailTimeLine
                    title={location.state.subeAdi}
                    visible={this.state.detaillModalVisible}
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


