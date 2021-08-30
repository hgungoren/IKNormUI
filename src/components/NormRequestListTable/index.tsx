/*eslint-disable */

import './index.less';
import uuid from 'react-uuid';
import * as React from 'react';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import { isGranted, L } from '../../lib/abpUtility';
import SessionStore from '../../stores/sessionStore';
import AccountStore from '../../stores/accountStore';
import NormDetailTimeLine from '../NormDetailTimeLine';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import Status from '../../services/kNormDetail/dto/status';
import NormRejectDescription from '../NormRejectDescription';
import NormStatus from '../../services/kNorm/dto/normStatus';
import KNormDetailStore from '../../stores/kNormDetailStore';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import AuthenticationStore from '../../stores/authenticationStore';
import { GetAllKNormOutput } from '../../services/kNorm/dto/getAllKNormOutput';
import { Modal, notification, Card, Col, Row, Table, Input, Button, Tooltip, Space } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined, FileSearchOutlined, StopOutlined } from '@ant-design/icons';
import Tag from 'antd/es/tag';


export interface INormRequestListTableState {
    subeObjId: string;
    requestId: number;
    totalSize: number;
    inputValue: string;
    searchFilter: string;
    skipNormCount: number;
    currentUserId: number;
    getAllKNormOutput: any;
    subeOrBolgeAdi: string;
    maxNormResultCount: number;
    detaillModalVisible: boolean;
    normRejectDescriptionModalVisible: boolean;
    filter: { offset: number, limit: number, current: number };
    dateStart: any;
    dateEnd: any;

}


interface INormRequestListTableProps {
    moment: [any, any];
    type: string;
    table: string,
    bolgeId: string;
    isModal: boolean,
    subeObjId: string;
    tableTitle: string;
    isHoverable: boolean;
    kNormStore: KNormStore;
    isConfirmOrCancel: boolean;
    sessionStore?: SessionStore;
    accountStore?: AccountStore;
    kNormDetailStore: KNormDetailStore;
    authenticationStore?: AuthenticationStore;

}


const { confirm } = Modal;
const Search = Input.Search;

@inject(Stores.KNormStore)
@inject(Stores.AccountStore)
@inject(Stores.SessionStore)
@inject(Stores.KNormDetailStore)
@inject(Stores.AuthenticationStore)

@observer
class NormRequestListTable extends React.Component<INormRequestListTableProps, INormRequestListTableState> {

    state = {
        requestId: 0,
        totalSize: 0,
        subeObjId: '0',
        inputValue: '',
        currentUserId: 0,
        skipNormCount: 0,
        searchFilter: '',
        subeOrBolgeAdi: '',
        maxNormResultCount: 5,
        getAllKNormOutput: {},
        detaillModalVisible: false,
        normRejectDescriptionModalVisible: false,
        filter: { offset: 0, limit: 5, current: 0, },
        dateStart: '',
        dateEnd: ''
    }

    formRef = React.createRef<FormInstance>();

    getNormRequests = async () => {
        this.props.kNormStore.getAll({
            bolgeId: '0',
            maxResultCount: 5,
            type: this.props.type,
            id: this.props.subeObjId,
            keyword: this.state.searchFilter,
            skipCount: this.state.skipNormCount,
        })
    }

    async getNormRequestsAll(start?: any, end?: any) {
        this.props.kNormStore.getMaxAll({
            end: end,
            skipCount: 0,
            start: start,
            type: this.props.type,
            id: this.props.subeObjId,
            maxResultCount: 1000000000,
            bolgeId: this.props.bolgeId,
            keyword: this.state.searchFilter,
        })
    }


    getNormRequestCounts = async (start?: any, end?: any) => {
        this.props.kNormStore.getMaxAllCount({
            end: end,
            skipCount: 0,
            start: start,
            type: this.props.type,
            id: this.props.subeObjId,
            maxResultCount: 1000000000,
            bolgeId: this.props.bolgeId,
            keyword: this.state.searchFilter,
        })
    }



    getAllNormDetails = async () => {
        this.props.kNormDetailStore.getAll({
            id: 0,
            keyword: '',
            skipCount: 0,
            maxResultCount: 100000,
        });
    }

    handleNormSearch = (value: string) => {
        if (this.props.isModal)
            this.setState({ searchFilter: value }, async () => await this.getNormRequestsAll(this.props.moment[0]._d, this.props.moment[1]._d));
        else
            this.setState({ searchFilter: value }, async () => await this.getNormRequests());
    };

    async componentDidMount() {
        if (this.props.isModal) {
            if (this.props.moment.length > 0) {

                let start: any;
                let end: any;

                if (this.props.moment[0] !== undefined) {
                    start = this.props.moment[0]._d;
                    this.setState({ dateStart: start })
                }
                if (this.props.moment[1] !== undefined) {
                    end = this.props.moment[1]._d;
                    this.setState({ dateStart: end })
                }

                this.getNormRequestsAll(start, end);
                this.getNormRequestCounts(start, end);
            }
            else {
                this.getNormRequestsAll();
                this.getNormRequestCounts( );
            }
        }
        else
            this.getNormRequests()

        await this.getAllNormDetails();
    }


    handleNormTableChange = (pagination: any) => {
        if (this.props.isModal)
            this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! },
                async () => await this.getNormRequestsAll(this.props.moment[0]._d, this.props.moment[1]._d));
        else {
            this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequests());
        }
    };

    async detailModalOpen(id: number, name: string) {
        await this.props.kNormDetailStore.getDetails(id);
        let norm = this.props.kNormStore[this.props.table].filter(x => x.id === id)[0];
        this.setState({ getAllKNormOutput: norm })
        this.setState({ detaillModalVisible: !this.state.detaillModalVisible, subeOrBolgeAdi: name });
    }

    async normRejectDescriptionModalOpen(id: number) {
        this.setState({ normRejectDescriptionModalVisible: !this.state.normRejectDescriptionModalVisible, requestId: id });
    }

    notification = (type, message) => {
        notification[type]({
            message: L(message.title),
            description: L(message.description),
            duration: 3
        });
    };

    rejectRequestClick = async () => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: L('DoYouWantToConfirm'),
            okText: L('Approve'),
            cancelText: L('Cancel'),
            onOk: () => {
                const form = this.formRef.current;
                form!.validateFields()
                    .then(async (values: any) => {

                        values.status = Status.Reject;
                        await this.props.kNormDetailStore.update(values)
                            .then(() => {
                                this.props.kNormStore.setStatusAsync({
                                    id: this.state.requestId,
                                    normStatus: NormStatus.Iptal
                                }).then(() => {
                                    this.notification('error', {
                                        title: 'NormRejectNotificationMessageTitle',
                                        description: 'NormRejectNotificationMessageDescription'
                                    }); 
                                    this.getAllNormDetails(); 
                                    this.getNormRequestsAll(this.state.dateStart, this.state.dateEnd);
                                    this.getNormRequestCounts(this.state.dateStart, this.state.dateEnd);
                                });
                            }).catch((err) => {
                                return;
                            });
                        form!.resetFields();
                        this.setState({ normRejectDescriptionModalVisible: false })
                    });
            },
            onCancel() { console.log(L('Cancel')); },
        });
    }


    approveRequestClick = async (id: number) => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: L('DoYouWantToConfirm'),
            okText: L('Approve'),
            cancelText: L('Cancel'),
            onOk: () => {
                this.props.kNormDetailStore.update({
                    kNormId: id,
                    id: id,
                    status: Status.Apporved
                }).then(() => {
                    this.props.kNormStore.setStatusAsync({
                        id: id
                    }).then(() => {
                        this.getAllNormDetails(); 
                        this.getNormRequestsAll(this.state.dateStart, this.state.dateEnd);
                        this.getNormRequestCounts(this.state.dateStart, this.state.dateEnd);
                        this.notification('success', {
                            title: 'NormApproveNotificationMessageTitle',
                            description: 'NormApproveNotificationMessageDescription'
                        })
                    });
                }).catch((err) => {
                    return;
                });

            },
            onCancel() { console.log(L('Cancel')); },
        });
    }


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


    render() {
        const { filter, totalSize } = this.state;
        const tablePagination = {
            pageSize: filter.limit,
            current: filter.current || 1,
            total: totalSize,
            locale: { items_per_page: L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true,
        };

        const { kNorms } = this.props.kNormStore;
        const { isHoverable, tableTitle, table, isModal } = this.props;
        const { kNormAllDetails, kNormDetails } = this.props.kNormDetailStore;
        const { subeOrBolgeAdi, detaillModalVisible, getAllKNormOutput } = this.state;

        const columnsNorm = [
            {
                title: L("table.norm.requestdate"), dataIndex: 'creationTime', key: uuid(), width: 60, render: (text: Date) => <div >
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
            {
                title: L('table.norm.requeststatus'), dataIndex: 'durumu', key: uuid(), width: 200, render: (text, norm) => (<>

                    {(NormStatus[norm.normStatusValue] === NormStatus.Beklemede) ?
                        <Tooltip placement="topLeft" title={L('Waiting')}> <Tag color={'rgb(250, 173, 20)'} icon={<ClockCircleOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]}</Tag ></Tooltip> :
                        (NormStatus[norm.normStatusValue] === NormStatus.Iptal) ?

                            <Tooltip placement="topLeft" title={L('Reject')}>   <Tag color={'rgb(250, 84, 28)'} icon={<StopOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]}    </Tag ></Tooltip> :
                            <Tooltip placement="topLeft" title={L('Approved')}> <Tag color={'rgb(29, 165, 122)'} icon={<CheckCircleOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]}  </Tag ></Tooltip>
                    }
                </>)
            },
            { title: L("table.norm.area.name"), dataIndex: 'bolgeAdi', key: uuid(), width: 100, render: (text: string) => <div >{text}</div> },
            { title: L("table.norm.branch.name"), dataIndex: 'subeAdi', key: uuid(), width: 100, render: (text: string) => <div >{text}</div> },
            { title: L("table.norm.position"), dataIndex: 'pozisyon', key: uuid(), width: 150, render: (text: string) => <div >{text}</div> },
            { title: L("table.norm.requestreason"), dataIndex: 'nedeni', key: uuid(), width: 50, render: (text: TalepNedeni) => <div >{TalepNedeni[text]}</div> },
            { title: L("table.norm.requesttype"), dataIndex: 'turu', key: uuid(), width: 50, render: (text: TalepTuru) => <div >{TalepTuru[text]}</div> },
            {
                title: "İşlem",
                dataIndex: 'id',
                key: uuid(),
                width: 50,
                render: (text, norm: GetAllKNormOutput) => <Space size={'small'}>


                    {
                        kNormDetails !== undefined && (isGranted('knorm.detail')) && (
                            <Tooltip placement="topLeft" title={L('Detail')}>
                                <Button className={'info'} onClick={() => this.detailModalOpen(norm.id, norm.subeAdi)} icon={<FileSearchOutlined />} type="primary" ></Button>
                            </Tooltip>)
                    }

                    {
                        (kNormDetails !== undefined && this.props.isConfirmOrCancel && (!tableTitle.search('Pending') || !tableTitle.search('Total')) && NormStatus[norm.normStatusValue] === NormStatus.Beklemede &&
                            kNormDetails.items.filter(x => x.status == Status.Waiting && x.kNormId === norm.id && this.props.sessionStore?.currentLogin.user.id === x.userId && x.visible).length > 0) && <>

                            {
                                isGranted('knorm.reject') && <Tooltip placement="topLeft" title={L('Approve')}>
                                    <Button onClick={() => this.approveRequestClick(norm.id)} icon={<CheckCircleOutlined />} type="primary" />
                                </Tooltip>
                            }

                            {
                                isGranted('knorm.reject') && <Tooltip placement="topLeft" title={L('Reject')}>
                                    <Button danger onClick={() => this.normRejectDescriptionModalOpen(norm.id)} icon={<StopOutlined />} type="primary" />
                                </Tooltip>
                            }

                        </>
                    }
                </Space>
            }
        ];

        return (
            <>
                <Card hoverable={isHoverable} style={{ marginTop: 15 }}>
                    <Row >
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 23, offset: 0 }} md={{ span: 23, offset: 0 }} lg={{ span: 23, offset: 0 }} xl={{ span: 23, offset: 0 }} xxl={{ span: 23, offset: 0 }}  >
                            {' '}
                            <h2 >{L(tableTitle)}</h2>
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
                    <Row >
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Search placeholder={L('Filter')} onSearch={this.handleNormSearch} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 20 }}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} xl={{ span: 24, offset: 0 }} xxl={{ span: 24, offset: 0 }}   >
                            {
                                isModal ? (
                                    <Table

                                        locale={{ emptyText: L('NoData') }}
                                        rowKey={uuid()}
                                        bordered={false}
                                        columns={columnsNorm}
                                        pagination={tablePagination}
                                        loading={this.props.kNormStore[table] === undefined ? true : false}
                                        dataSource={this.props.kNormStore[table] === undefined ? [] : this.props.kNormStore[table]}
                                        onChange={this.handlePagination}
                                    />
                                ) : (
                                    <Table

                                        locale={{ emptyText: L('NoData') }}
                                        rowKey={uuid()}
                                        bordered={false}
                                        pagination={tablePagination}
                                        columns={columnsNorm}
                                        loading={kNorms === undefined ? true : false}
                                        dataSource={
                                            kNorms === undefined ? [] : kNorms.items
                                        }
                                        onChange={this.handlePagination}
                                    />
                                )
                            }
                        </Col>
                    </Row>
                </Card>
                <NormDetailTimeLine

                    data={kNormAllDetails}
                    title={subeOrBolgeAdi}
                    norm={getAllKNormOutput}
                    visible={detaillModalVisible}
                    onCancel={() => { this.setState({ detaillModalVisible: false, }); }} />

                <NormRejectDescription
                    formRef={this.formRef}
                    title={L('RequestRejectForm')}
                    reuestId={this.state.requestId}
                    rejectRequestClick={this.rejectRequestClick}
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
