import './index.less';
import React from 'react';
import { Col, Modal, Row, Steps } from 'antd';
import PropTypes from 'prop-types';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import Status from '../../services/kNormDetail/dto/status';
import uuid from 'react-uuid';

const { Step } = Steps;


const NormDetailTimeLine = ({ visible, onCancel, title, data }) => {

    return (
        <>

            {
                console.log(data)
            }
            <Modal title={title} centered visible={visible} onCancel={onCancel} width={'70%'} footer={[]}     >
                <>
                    <Row>
                        <Col xs={{ span: 12, offset: 0 }}>

                        </Col>
                        <Col xs={{ span: 12, offset: 0 }}>
                            <Steps direction="vertical" >
                                {
                                    data !== undefined && data.map((x) => <>

                                        <Step key={uuid()} status={(x.status === Status.Apporved) ? "finish" : (x.status === Status.Waiting ? "wait" : "error")} title={TalepDurumu[x.talepDurumuStr]} description={`
                                    ${x.lastModificationTime !== null && new Date(x.lastModificationTime).toLocaleDateString("tr-TR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })}      ${x.description !== null ? x.description : ''} `
                                        } />

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