import './index.less';
import * as React from 'react';
import { L } from '../../lib/abpUtility';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import NormDetailTimeLine from '../NormDetailTimeLine';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import NormRejectDescription from '../NormRejectDescription';
import NormStatus from '../../services/kNorm/dto/normStatus';
import KNormDetailStore from '../../stores/kNormDetailStore';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import { CheckCircleOutlined, FileSearchOutlined, StopOutlined } from '@ant-design/icons';
import { notification, Card, Col, Row, Table, Input, Button, Tooltip, Space, Tag } from 'antd';


export interface INormRequestListTableState {
    filter: string;
    subeObjId: number;
    requestId: number;
    skipNormCount: number;
    maxNormResultCount: number;
    detaillModalVisible: boolean;
    normRejectDescriptionModalVisible: boolean;
}
interface INormRequestListTableProps {
    table: string,
    isModal: boolean,
    subeObjId: number;
    tableTitle: string;
    isHoverable: boolean;
    kNormStore: KNormStore;
    isConfirmOrCancel: boolean;
    kNormDetailStore: KNormDetailStore,
}

const Search = Input.Search;
@inject(Stores.KNormStore)
@inject(Stores.KNormDetailStore)
@observer
class NormRequestListTable extends React.Component<INormRequestListTableProps, INormRequestListTableState> {

    formRef = React.createRef<FormInstance>();

    state = {
        filter: '',
        requestId: 0,
        subeObjId: 0,
        skipNormCount: 0,
        maxNormResultCount: 5,
        detaillModalVisible: false,
        normRejectDescriptionModalVisible: false,
    }

    getNormRequests = async () => {
        this.props.kNormStore.getAll({
            maxResultCount: 5,
            id: this.props.subeObjId,
            keyword: this.state.filter,
            skipCount: this.state.skipNormCount
        })
    }

    async getNormRequestsAll() {
        this.props.kNormStore.getMaxAll({
            skipCount: 0,
            id: this.props.subeObjId,
            keyword: this.state.filter,
            maxResultCount: 1000000000,
        })
    }

    handleNormSearch = (value: string) => {
        if (this.props.isModal)
            this.setState({ filter: value }, async () => await this.getNormRequestsAll());
        else
            this.setState({ filter: value }, async () => await this.getNormRequests());
    };

    async componentDidMount() {

        if (this.props.isModal)
            this.getNormRequestsAll();
        else
            this.getNormRequests()
    }

    handleNormTableChange = (pagination: any) => {
        if (this.props.isModal)
            this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequestsAll());
        else
            this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequests());
    };

    async detailModalOpen(id: number) {
        this.setState({ detaillModalVisible: !this.state.detaillModalVisible });
    }

    async normRejectDescriptionModalOpen(id: number) {
        this.setState({ normRejectDescriptionModalVisible: !this.state.normRejectDescriptionModalVisible, requestId: id });
    }

    openNotificationWithIcon = type => {
        notification[type]({
            message: L('NormRejectNotificationMessageTitle'),
            description: L('NormCreateNotificationMessageDescription'),
            duration: 3
        });
    };

    rejectRequestClick = async () => {
        const form = this.formRef.current;
        form!.validateFields()
            .then(async (values: any) => {
                await this.props.kNormDetailStore.create(values)
                    .then(() => {
                        this.props.kNormStore.setStatusAsync({
                            id: this.state.requestId,
                            normStatus: NormStatus.Iptal
                        }).then(() => { this.getNormRequestsAll(); });
                    }).catch((err) => {
                        this.openNotificationWithIcon('error')
                        return;
                    });

                this.openNotificationWithIcon('success')
                form!.resetFields();
                this.setState({ normRejectDescriptionModalVisible: false })
            });
    }

    approveRequestClick = async (id: number) => {
        await this.props.kNormDetailStore.create({ kNormId: id })
            .then(() => {
                this.props.kNormStore.setStatusAsync({
                    id: id,
                    normStatus: NormStatus.Onaylandi
                }).then(() => { this.getNormRequestsAll(); });
            })
            .catch((err) => {
                this.openNotificationWithIcon('error')
                return;
            });
        this.openNotificationWithIcon('success')
    }

    render() {

        const { kNorms } = this.props.kNormStore;
        const { isHoverable, tableTitle, table, isModal } = this.props;

        const columnsNorm = [
            {
                title: "Talep Tarihi", dataIndex: 'creationTime', key: 'creationTime', width: 100, render: (text: Date) => <div>
                    {
                        new Date(text).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }
                </div>
            },
            {
                title: "Talep Durumu", dataIndex: 'normStatusValue', key: 'normStatusValue', width: 250, render: (text: NormStatus) =>
                    <Tag className={'tag'} color={NormStatus[text] === NormStatus.Onaylandi ? 'rgb(29, 165, 122)' : NormStatus[text] === NormStatus.Iptal ? 'rgb(250, 84, 28)' : 'rgb(250, 173, 20)'} > {text} </Tag>
            },
            { title: "Pozisyon", dataIndex: 'pozisyon', key: 'pozisyon', width: 100, render: (text: string) => <div>{text}</div> },
            { title: "Talep Nedeni", dataIndex: 'nedeni', key: 'nedeni', width: 150, render: (text: TalepNedeni) => <div>{TalepNedeni[text]}</div> },
            { title: "Talep Türü", dataIndex: 'turu', key: 'turu',       width: 150, render: (text: TalepTuru) => <div>{TalepTuru[text]}</div> },
            {
                title: "İşlem",
                dataIndex: 'id',
                key: 'id',
                width: 50,
                render: (text, norm) => (
                    <>
                        <Space size={'small'}>
                            <Tooltip placement="topLeft" title={L('Detail')}>
                                <Button className={'info'} onClick={() => this.detailModalOpen(text)} icon={<FileSearchOutlined />} type="primary" ></Button>
                            </Tooltip>
                            {
                                (this.props.isConfirmOrCancel && (!tableTitle.search('Pending') || !tableTitle.search('Total')) && NormStatus[norm.normStatusValue] === NormStatus.Beklemede) && (
                                    <>
                                        <Tooltip placement="topLeft" title={L('Accept')}>
                                            <Button onClick={() => this.approveRequestClick(norm.id)} icon={<CheckCircleOutlined />} type="primary"></Button>
                                        </Tooltip>

                                        <Tooltip placement="topLeft" title={L('Reject')}>
                                            <Button danger onClick={() => this.normRejectDescriptionModalOpen(norm.id)} icon={<StopOutlined />} type="primary"></Button>
                                        </Tooltip>
                                    </>
                                )
                            }
                        </Space>
                    </>
                ),
            }
        ];

        return (
            <>
                <Card hoverable={isHoverable} style={{ marginTop: 15 }}>
                    <Row>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 23, offset: 0 }} md={{ span: 23, offset: 0 }} lg={{ span: 23, offset: 0 }} xl={{ span: 23, offset: 0 }} xxl={{ span: 23, offset: 0 }}  >
                            {' '}
                            <h2>{L(tableTitle)}</h2>
                        </Col>
                        <Col
                            xs={{ span: 14, offset: 0 }}
                            sm={{ span: 15, offset: 0 }}
                            md={{ span: 15, offset: 0 }}
                            lg={{ span: 1, offset: 21 }}
                            xl={{ span: 1, offset: 21 }}
                            xxl={{ span: 1, offset: 21 }}>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Search placeholder={L('Filter')} onSearch={this.handleNormSearch} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}   >
                            {
                                isModal ? (
                                    <Table
                                        rowKey={(record) => record.id}
                                        bordered={false}
                                        columns={columnsNorm}
                                        pagination={{
                                            pageSize: 5,
                                            total: this.props.kNormStore[table] === undefined ? 0 : this.props.kNormStore[table].length, defaultCurrent: 1
                                        }}
                                        loading={this.props.kNormStore[table] === undefined ? true : false}
                                        dataSource={this.props.kNormStore[table] === undefined ? [] : this.props.kNormStore[table]}
                                        onChange={this.handleNormTableChange}
                                    />
                                ) : (
                                    <Table
                                        rowKey={(record) => record.id}
                                        bordered={false}
                                        columns={columnsNorm}
                                        pagination={{
                                            pageSize: 5,
                                            total: kNorms === undefined ? 0 : kNorms.totalCount, defaultCurrent: 1
                                        }}
                                        loading={kNorms === undefined ? true : false}
                                        dataSource={
                                            kNorms === undefined ? [] : kNorms.items
                                        }
                                        onChange={this.handleNormTableChange}
                                    />
                                )
                            }
                        </Col>
                    </Row>
                </Card>
                <NormDetailTimeLine
                    title="Ankara Bölge Md."
                    visible={this.state.detaillModalVisible}
                    onCancel={() => {
                        this.setState({
                            detaillModalVisible: false,
                        });
                    }} />

                <NormRejectDescription
                    rejectRequestClick={this.rejectRequestClick}
                    reuestId={this.state.requestId}
                    formRef={this.formRef}
                    title={L('RequestRejectForm')}
                    visible={this.state.normRejectDescriptionModalVisible}
                    onCancel={() => {
                        this.setState({
                            normRejectDescriptionModalVisible: false,
                        });
                    }}
                />
            </>
        )
    }
}

export default NormRequestListTable;
