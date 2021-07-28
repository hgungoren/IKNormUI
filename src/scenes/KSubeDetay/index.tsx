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
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import CreateNormForm from '../../components/CreateNormForm';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import CreateNormDetail from '../../components/CreateNormDetail';
import AppComponentBase from '../../components/AppComponentBase';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import KInkaLookUpTableStore from '../../stores/kInkaLookUpTableStore';
import { notification, Card, Col, Row, Table, Input, Button, Breadcrumb, PageHeader, Descriptions } from 'antd';
 
export interface IKsubeDatayProps {
    kPersonelStore: KPersonelStore;
    kSubeNormStore: KSubeNormStore;
    kSubeStore: KSubeStore;
    kInkaLookUpTableStore: KInkaLookUpTableStore;
    kNormStore: KNormStore;

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
    maxResultCount: number,
    skipNormCount: number,
    modalVisible: boolean,
    cardLoading: boolean,
    filterKNorm: string,
    filterNorm: string,
    skipCount: number,
    filter: string,
    userId: number
    groupEmployee: {},
    groupNorm: {},
    tip: string,
    id: number,
}

const Search = Input.Search;
@inject(Stores.KSubeStore)
@inject(Stores.KPersonelStore)
@inject(Stores.KSubeNormStore)
@inject(Stores.KInkaLookUpTableStore)
@inject(Stores.KNormStore)

@observer
class KSubeDetay extends AppComponentBase<IKsubeDatayProps, IKSubeDatayState>{
    formRef = React.createRef<FormInstance>();

    state = {
        detaillModalVisible: false,
        maxNormResultCount: 5,
        modalVisible: false,
        cardLoading: true,
        maxResultCount: 5,
        skipNormCount: 0,
        filterKNorm: '',
        filterNorm: '',
        groupNorm: {},
        groupEmployee: {},
        skipCount: 0,
        filter: '',
        userId: 0,
        tip: '',
        id: 0,
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

    async get(entityDto: EntityDto) {
        await this.props.kSubeStore.get(entityDto);
        this.setState({ tip: this.props.kSubeStore.editKSube.tip })
    }

    async setPageState() {
        this.setState({ id: this.props["match"].params["id"] });
    }

    async componentDidMount() {
        await this.setPageState();
        await this.getAll();
        await this.getAllSubeNorm();
        await this.getAllEmployees();
        await this.get({ id: this.state.id });
        await this.getNormRequests();


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
            await this.props.kNormStore.create(values);
            this.openNotificationWithIcon('success')
            form!.resetFields();
            await this.getNormRequests();
            setTimeout(() => {
                this.setState({ modalVisible: false })
            }, 1000);
        });
    }

    public render() {

        const { editKSube } = this.props.kSubeStore;
        const { kPersonels, kAllPersonels } = this.props.kPersonelStore!;
        const { norms } = this.props.kSubeNormStore;
        const { kNorms } = this.props.kNormStore;
        const { location } = this.props;

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
                    // <Button onClick={() => this.detailModalOpen("test")} icon={<FileSearchOutlined />} type="primary"> </Button>
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
                    <Descriptions size="small" column={4}>
                        {
                            Object.keys(this.state.groupEmployee).map((key) => <Descriptions.Item key={key} label={key}> {this.state.groupEmployee[key].length} </Descriptions.Item>)
                        }
                    </Descriptions>
                </Card>
                <Card style={{ marginBottom: 20 }} hoverable>
                    <Descriptions size="small" column={4}>
                        {
                            Object.keys(this.state.groupNorm).map((key) => <Descriptions.Item key={key + 'Norm'} label={key}> {this.state.groupNorm[key].length} </Descriptions.Item>)
                        }
                    </Descriptions>
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
                                rowKey={(record) => record.objId.toString()}
                                bordered={false}

                                columns={columns}
                                pagination={{ pageSize: 5, total: kPersonels === undefined ? 0 : kPersonels.totalCount, defaultCurrent: 1 }}
                                loading={kPersonels === undefined ? true : false}
                                dataSource={kPersonels === undefined ? [] : kPersonels.items}

                                // columns={normColumn}
                                // pagination={{ pageSize: 5, total: (Object.keys(this.state.groupEmployee).map((y, i) => ({ id: i, position: y, employeeCount: [...this.state.groupEmployee[y]].length }))).length, defaultCurrent: 1 }}
                                // loading={kPersonels === undefined ? true : false}
                                // dataSource={Object.keys(this.state.groupEmployee).map((y, i) => ({ id: i, position: y, employeeCount: [...this.state.groupEmployee[y]].length }))}

                                onChange={this.handleTableChange}
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
                            xxl={{ span: 1, offset: 21 }}  >
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
                                rowKey={(record) => record.objId}
                                bordered={false}
                                columns={columnsNorm}
                                pagination={{ pageSize: 5, total: kNorms === undefined ? 0 : kNorms.totalCount, defaultCurrent: 1 }}
                                loading={kNorms === undefined ? true : false}
                                dataSource={kNorms === undefined ? [] : kNorms.items}
                                onChange={this.handleNormTableChange}
                            />
                        </Col>
                    </Row>
                </Card>
                <CreateNormForm
                    subeId={this.state.id}
                    normCount={norms !== undefined ? norms.items.length : 0}
                    formRef={this.formRef}
                    position={this.props.kInkaLookUpTableStore.positions}
                    visible={this.state.modalVisible}
                    modalType={'create'}
                    onCancel={() => {
                        const form = this.formRef.current;
                        this.setState({
                            modalVisible: false,
                        });
                        form!.resetFields();
                    }}
                    employees={kAllPersonels}
                    onCreateNorm={this.createNorm}
                />

                <CreateNormDetail
                    title="Şube Adi"
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


