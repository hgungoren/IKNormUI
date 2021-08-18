/*eslint-disable */

import './index.less';
import * as React from 'react';
import { FormInstance } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import KNormStore from '../../stores/kNormStore';
import Stores from '../../stores/storeIdentifier';
import { isGranted, L } from '../../lib/abpUtility';
import NormDetailTimeLine from '../NormDetailTimeLine';
import TalepTuru from '../../services/kNorm/dto/talepTuru';
import Status from '../../services/kNormDetail/dto/status';
import NormRejectDescription from '../NormRejectDescription';
import NormStatus from '../../services/kNorm/dto/normStatus';
import KNormDetailStore from '../../stores/kNormDetailStore';
import TalepNedeni from '../../services/kNorm/dto/talepNedeni';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import { notification, Card, Col, Row, Table, Input, Button, Tooltip, Space } from 'antd';
import { CheckCircleOutlined, FileSearchOutlined, StopOutlined } from '@ant-design/icons';
import { GetAllKNormOutput } from '../../services/kNorm/dto/getAllKNormOutput';

export interface INormRequestListTableState {
    subeOrBolgeAdi: string;
    filter: string;
    subeObjId: string;
    requestId: number;
    inputValue: string;
    skipNormCount: number;
    maxNormResultCount: number;
    detaillModalVisible: boolean;
    normRejectDescriptionModalVisible: boolean;
}


interface INormRequestListTableProps {

    type: string;
    table: string,
    bolgeId: string;
    isModal: boolean,
    subeObjId: string;
    tableTitle: string;
    isHoverable: boolean;
    kNormStore: KNormStore;
    isConfirmOrCancel: boolean;
    kNormDetailStore: KNormDetailStore;
}

const Search = Input.Search;
@inject(Stores.KNormStore)
@inject(Stores.KNormDetailStore)

@observer
class NormRequestListTable extends React.Component<INormRequestListTableProps, INormRequestListTableState> {

    state = {
        subeOrBolgeAdi: '',
        filter: '',
        requestId: 0,
        subeObjId: '0',
        inputValue: '',
        skipNormCount: 0,
        maxNormResultCount: 5,
        detaillModalVisible: false,
        normRejectDescriptionModalVisible: false,
    }

    formRef = React.createRef<FormInstance>();

    getNormRequests = async () => {
        this.props.kNormStore.getAll({
            bolgeId: '0',
            maxResultCount: 5,
            type: this.props.type,
            id: this.props.subeObjId,
            keyword: this.state.filter,
            skipCount: this.state.skipNormCount,
        })
    }

    async getNormRequestsAll() {
        this.props.kNormStore.getMaxAll({
            skipCount: 0,
            type: this.props.type,
            id: this.props.subeObjId,
            keyword: this.state.filter,
            maxResultCount: 1000000000,
            bolgeId: this.props.bolgeId,
        })
    }


    async getNormRequestsAllCount() {
        this.props.kNormStore.getMaxAllCount({
            skipCount: 0,
            type: this.props.type,
            id: this.props.subeObjId,
            keyword: this.state.filter,
            maxResultCount: 1000000000,
            bolgeId: this.props.bolgeId,
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
            this.setState({ filter: value }, async () => await this.getNormRequestsAll());
        else
            this.setState({ filter: value }, async () => await this.getNormRequests());
    };


    async componentDidMount() {

        if (this.props.isModal) {
            await this.getNormRequestsAll();
            await this.getNormRequestsAllCount();
        }
        else
            this.getNormRequests()

        await this.getAllNormDetails();
    }


    handleNormTableChange = (pagination: any) => {
        if (this.props.isModal)
            this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequestsAll());
        else {
            this.setState({ skipNormCount: (pagination.current - 1) * this.state.maxNormResultCount! }, async () => await this.getNormRequests());
        }
    };

    async detailModalOpen(id: number, name: string) {
        this.props.kNormDetailStore.getDetails(id);
        this.setState({ detaillModalVisible: !this.state.detaillModalVisible, subeOrBolgeAdi: name });
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

                values.status = Status.Reject;
                await this.props.kNormDetailStore.update(values)
                    .then(() => {
                        this.props.kNormStore.setStatusAsync({
                            id: this.state.requestId,
                            normStatus: NormStatus.Iptal
                        }).then(() => { this.getNormRequestsAll(); this.getAllNormDetails(); });
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
        await this.props.kNormDetailStore.update({
            kNormId: id,
            id: id,
            status: Status.Apporved
        }).then(() => {
            this.props.kNormStore.setStatusAsync({
                id: id
            }).then(() => { this.getNormRequestsAll(); this.getAllNormDetails(); });
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
        const { kNormAllDetails, kNormDetails } = this.props.kNormDetailStore;
        const { subeOrBolgeAdi, detaillModalVisible } = this.state;

        const columnsNorm = [
            {
                title: "Talep Tarihi", dataIndex: 'creationTime', key: 'creationTime', width: 100, render: (text: Date) => <div>
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
                title: "Talep Durumu", dataIndex: 'durumu', key: 'durumu', width: 250, render: (text, norm) => (<>

                    {(NormStatus[norm.normStatusValue] === NormStatus.Beklemede) ?
                        <div className={'title'}> {TalepDurumu[norm.durumu] + ' ' + L('Waiting')}  </div> :
                        <div className={'title'}> {TalepDurumu[norm.durumu] + ' ' + L('Reject')}   </div>}
                </>)

            },
            { title: "Bölge Adı", dataIndex: 'bolgeAdi', key: 'bolgeAdi', width: 100, render: (text: string) => <div>{text}</div> },
            { title: "Şube Adı", dataIndex: 'subeAdi', key: 'subeAdi', width: 100, render: (text: string) => <div>{text}</div> },
            { title: "Pozisyon", dataIndex: 'pozisyon', key: 'pozisyon', width: 100, render: (text: string) => <div>{text}</div> },
            { title: "Talep Nedeni", dataIndex: 'nedeni', key: 'nedeni', width: 150, render: (text: TalepNedeni) => <div>{TalepNedeni[text]}</div> },
            { title: "Talep Türü", dataIndex: 'turu', key: 'turu', width: 150, render: (text: TalepTuru) => <div>{TalepTuru[text]}</div> },
            {
                title: "İşlem",
                dataIndex: 'id',
                key: 'id',
                width: 50,
                render: (text, norm: GetAllKNormOutput) => (
                    <>
                        <Space size={'small'}>
                            {
                                isGranted('knorm.detail') && <Tooltip placement="topLeft" title={L('Detail')}>
                                    <Button className={'info'} onClick={() => this.detailModalOpen(norm.id, norm.subeAdi)} icon={<FileSearchOutlined />} type="primary" ></Button>
                                </Tooltip>
                            }
                            {
                                kNormDetails !== undefined &&
                                (this.props.isConfirmOrCancel &&
                                    (!tableTitle.search('Pending') || !tableTitle.search('Total')) &&
                                    NormStatus[norm.normStatusValue] === NormStatus.Beklemede &&
                                    kNormDetails.items.filter(x => x.status == Status.Waiting && x.kNormId == norm.id).length > 0) && (
                                    <>
                                        {
                                            isGranted('knorm.approve') && <Tooltip placement="topLeft" title={L('Accept')}>
                                                <Button onClick={() => this.approveRequestClick(norm.id)} icon={<CheckCircleOutlined />} type="primary"></Button>
                                            </Tooltip>
                                        }

                                        {
                                            isGranted('knorm.reject') && <Tooltip placement="topLeft" title={L('Reject')}>
                                                <Button danger onClick={() => this.normRejectDescriptionModalOpen(norm.id)} icon={<StopOutlined />} type="primary"></Button>
                                            </Tooltip>
                                        }
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
                                        locale={{ emptyText: L('NoData') }}
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
                                        locale={{ emptyText: L('NoData') }}
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
                    data={kNormAllDetails}
                    title={subeOrBolgeAdi}
                    visible={detaillModalVisible}
                    onCancel={() => {
                        this.setState({
                            detaillModalVisible: false,
                        });
                    }} />

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
