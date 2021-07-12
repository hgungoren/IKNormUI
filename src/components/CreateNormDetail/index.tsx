import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
import { QuestionCircleOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const NormDetailDetail = ({ visible, onCancel, title  }) => {
 
    return (
        <>
            <Modal
                title ={title}
                centered
                visible={visible}
                onCancel={onCancel}
                width={1000}
                footer={
                    []
                }
            >
                <Timeline mode="alternate">
                    <Timeline.Item dot={<CheckCircleOutlined    style={{ fontSize: '20px', color: "#237804", marginLeft: 10, marginRight: 10 }} />}> Bölge Operasyon Tarafından Onaylandı 06.06.2021 </Timeline.Item>
                    <Timeline.Item dot={<CheckCircleOutlined    style={{ fontSize: '20px', color: "#237804", marginLeft: 10, marginRight: 10 }} />}> GM Operasyon Tarafından Onaylandı 07.06.2021    </Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined    style={{ fontSize: '26px', color: "#1890ff", marginLeft: 10, marginRight: 10 }} />}> İK Yöneticisi Onayı Bekleniyor                  </Timeline.Item>
                    <Timeline.Item dot={<QuestionCircleOutlined style={{ fontSize: '20px', color: "#595959", marginLeft: 10, marginRight: 10 }} />}> İK GMY Onayı Bekleniyor                         </Timeline.Item>
                </Timeline>
            </Modal>
        </>
    );
};

NormDetailDetail.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string
}; 

export default NormDetailDetail;