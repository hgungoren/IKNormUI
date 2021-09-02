import './index.less';
import React from 'react';
import { Col, Descriptions, Modal, Row, Steps, Tag, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import Status from '../../services/kNormDetail/dto/status';
import uuid from 'react-uuid';
import { L } from '../../lib/abpUtility';
import NormStatus from '../../services/kNorm/dto/normStatus';
import { CheckCircleOutlined, ClockCircleOutlined, StopOutlined } from '@ant-design/icons';

const { Step } = Steps;

const NormDetailTimeLine = ({ visible, onCancel, title, data, norm }) => { 
    return (
        <>
            <Modal title={title} centered visible={visible} onCancel={onCancel} width={'70%'} footer={[]}>
                <>
                    <Row gutter={16}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 12, offset: 0 }}>
                            <Descriptions column={1} key={uuid()} size={'small'} title={L("RequestDetail")} bordered={true}>
                                {norm !== undefined && <>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.area.name")}>{norm.bolgeAdi}</Descriptions.Item>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.branch.name")}>{norm.subeAdi}</Descriptions.Item>
                                    {/* <Descriptions.Item key={uuid()} label={L("table.norm.creator.user.name")}> {norm.user.firstName} {norm.user.lastName}  </Descriptions.Item> */}
                                    <Descriptions.Item key={uuid()} label={L("table.norm.position")}>{norm.pozisyon}</Descriptions.Item>
                                    {norm.yeniPozisyon !== null && <Descriptions.Item key={uuid()} label={L("table.norm.newposition")}>{norm.yeniPozisyon}</Descriptions.Item>}
                                    <Descriptions.Item key={uuid()} label={L("table.norm.description")}>{norm.aciklama}</Descriptions.Item>
                                    {norm.personelId > 0 && <Descriptions.Item key={uuid()} label={L("table.norm.leaving.staff")}>{norm.personelAdi}</Descriptions.Item>}
                                    {norm.nedeni !== '' && <Descriptions.Item key={uuid()} label={L("table.norm.requestreason")}>{norm.nedeni}</Descriptions.Item>}
                                    <Descriptions.Item key={uuid()} label={L("table.norm.requesttype")}>{L(norm.turu)}</Descriptions.Item>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.requestdate")}>{
                                        new Date(norm.creationTime).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</Descriptions.Item> 
                                    <Descriptions.Item key={uuid()} label={L('table.norm.requeststatus')}>{(NormStatus[norm.normStatusValue] === NormStatus.Beklemede) ?

                                        <Tooltip placement="topLeft" title={L('Waiting')}> <Tag color={'rgb(250, 173, 20)'} icon={<ClockCircleOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]} </Tag ></Tooltip> :

                                        (NormStatus[norm.normStatusValue] === NormStatus.Iptal) ?

                                            <Tooltip placement="topLeft" title={L('Reject')}>   <Tag color={'rgb(250, 84, 28)'} icon={<StopOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]} </Tag ></Tooltip> :
                                            <Tooltip placement="topLeft" title={L('Approved')}> <Tag color={'rgb(29, 165, 122)'} icon={<CheckCircleOutlined />} className={'requeststatus'}> {TalepDurumu[norm.durumu]} </Tag ></Tooltip>
                                    }

                                    </Descriptions.Item>
                                </>
                                }

                            </Descriptions>
                        </Col>
                        <Col xs={{ span: 24, offset: 2 }} sm={{ span: 10, offset: 2 }}>

                            <Steps direction="vertical" >

                            </Steps>
                            <Steps direction="vertical" >
                                {
                                    data !== undefined && data.map((x) => <>

                                        <Step key={uuid()} status={(x.status === Status.Apporved) ? "finish" : (x.status === Status.Waiting ? "wait" : "error")}
                                            title={TalepDurumu[x.talepDurumuStr]}
                                            description={<>

                                                {
                                                    <p className='step-time'> {((x.lastModificationTime !== null && x.status !== Status.Waiting) && new Date(x.lastModificationTime).toLocaleDateString("tr-TR", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "2-digit",
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    }))}

                                                    </p>
                                                }
                                                <p className='step-description'> {(x.description !== null ? x.description : '')} </p></>} />

                                    </>)
                                }
                            </Steps>
                        </Col>
                    </Row>
                </>
            </Modal>
        </>
    );
};

NormDetailTimeLine.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string
};

export default NormDetailTimeLine;