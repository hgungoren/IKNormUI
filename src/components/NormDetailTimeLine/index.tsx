import './index.less';
import React from 'react';
//import uuid from 'react-uuid';
import DateCart from '../DateCart';
import PropTypes from 'prop-types';
import { L } from '../../lib/abpUtility';
import Status from '../../services/kNormDetail/dto/status';
import NormStatus from '../../services/kNorm/dto/normStatus';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import { Col, Descriptions, Modal, Row, Steps, Tag, Tooltip } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, StopOutlined } from '@ant-design/icons';


const { Step } = Steps;

const NormDetailTimeLine = ({ visible, onCancel, title, data, norm }) => {

    
    return (
        <>
            <Modal title={title} centered visible={visible} onCancel={onCancel} width={'70%'} footer={[]}>
                <>
                    <Row gutter={16}>
                        <Col xs={{ span: 24, offset: 0 }} sm={{ span: 12, offset: 0 }}>
                            <Descriptions column={1} size={'small'} title={L("RequestDetail")} bordered={true}>
                                {norm !== undefined && <>
                                    <Descriptions.Item key={'area_name' + norm.id} label={L("table.norm.area.name")}>{norm.bolgeAdi}</Descriptions.Item>
                                    <Descriptions.Item key={'branch_name' + norm.id} label={L("table.norm.branch.name")}>{norm.subeAdi}</Descriptions.Item>
                                    {/* <Descriptions.Item key={uuid()} label={L("table.norm.creator.user.name")}> {norm.user.firstName} {norm.user.lastName}  </Descriptions.Item> */}
                                    <Descriptions.Item key={'norm_position'+norm.id} label={L("table.norm.position")}>{norm.pozisyon}</Descriptions.Item>
                                    {norm.yeniPozisyon !== null && <Descriptions.Item key={'norm_newpositon'+norm.id} label={L("table.norm.newposition")}>{norm.yeniPozisyon}</Descriptions.Item>}
                                    <Descriptions.Item key={'norm_description' + norm.id} label={L("table.norm.description")}>{norm.aciklama}</Descriptions.Item>
                                    {norm.personelId > 0 && <Descriptions.Item key={'leavin_staff'+norm.id} label={L("table.norm.leaving.staff")}>{norm.personelAdi}</Descriptions.Item>}
                                    {norm.nedeni !== '' && <Descriptions.Item key={'norm_requestreason'+norm.id} label={L("table.norm.requestreason")}> {L(norm.nedeni)} </Descriptions.Item>}
                                    <Descriptions.Item key={'norm_requesttyp'+norm.id} label={L("table.norm.requesttype")}>{L(norm.turu)}</Descriptions.Item>
                                    <Descriptions.Item key={'norm_requsestdate'+norm.id} label={L("table.norm.requestdate")}>{<DateCart date={norm.creationTime} />}</Descriptions.Item>
                                    <Descriptions.Item key={'norm_requeststatus'+norm.id} label={L('table.norm.requeststatus')}>{(NormStatus[norm.normStatusValue] === NormStatus.Beklemede) ?

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
                                    data !== undefined && data.map((record, index) => <>
                                        <Step key={index} status={(record.status === Status.Apporved) ? "finish" : (record.status === Status.Waiting ? "wait" : "error")}
                                            title={TalepDurumu[record.talepDurumuStr]}
                                            description={<>
                                                {((record.lastModificationTime !== null && record.status !== Status.Waiting) && <DateCart date={record.lastModificationTime} />)}
                                                <p className='step-description'> {(record.description !== null ? record.description : '')} </p></>} />
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



