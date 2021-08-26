import './index.less';
import React from 'react';
import { Col, Descriptions, Modal, Row, Steps } from 'antd';
import PropTypes from 'prop-types';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import Status from '../../services/kNormDetail/dto/status';
import uuid from 'react-uuid';
import { L } from '../../lib/abpUtility';
import NormStatus from '../../services/kNorm/dto/normStatus';

const { Step } = Steps;


const NormDetailTimeLine = ({ visible, onCancel, title, data, norm }) => {

    return (
        <>
            <Modal title={title} centered visible={visible} onCancel={onCancel} width={'70%'} footer={[]}     >
                <>
                    <Row>
                        <Col xs={{ span: 14, offset: 0 }}>
                            <Descriptions key={uuid()} title={L("RequestDetail")} layout="vertical" bordered={true}>
                                {norm !== undefined && <>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.area.name")}>{norm.bolgeAdi}</Descriptions.Item>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.branch.name")}>{norm.subeAdi}</Descriptions.Item>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.position")}>{norm.pozisyon}</Descriptions.Item>

                                    {
                                        norm.yeniPozisyon !== null && <Descriptions.Item key={uuid()} label={L("table.norm.newposition")}>{norm.yeniPozisyon}</Descriptions.Item>
                                    }
                                    {
                                        norm.personelId > 0 && <Descriptions.Item key={uuid()} label={L("table.norm.leaving.staff")}>{norm.personelAdi}</Descriptions.Item>
                                    }
                                    {
                                        norm.nedeni !== '' && <Descriptions.Item key={uuid()} label={L("table.norm.requestreason")}>{norm.nedeni}</Descriptions.Item>
                                    }

                                    <Descriptions.Item key={uuid()} label={L("table.norm.requesttype")}>{norm.turu}</Descriptions.Item>
                                    <Descriptions.Item key={uuid()} label={L("table.norm.requestdate")}>{
                                        new Date(norm.creationTime).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}</Descriptions.Item>
                                    <Descriptions.Item key={uuid()} label={L('table.norm.requeststatus')}>{(NormStatus[norm.normStatusValue] === NormStatus.Beklemede) ?
                                        <div key={uuid()} className={'requeststatus'}> {TalepDurumu[norm.durumu] + ' ' + L('Waiting')}  </div> :
                                        <div key={uuid()} className={'requeststatus'}> {TalepDurumu[norm.durumu] + ' ' + L('Reject')}   </div>}</Descriptions.Item>
                                </>
                                }

                            </Descriptions>
                        </Col>
                        <Col xs={{ span: 8, offset: 2 }}>
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
                                                <p className='step-description'> {(x.description !== null ? x.description : '')} </p>   </>} />

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