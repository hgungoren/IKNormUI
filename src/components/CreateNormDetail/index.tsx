import './index.less';
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
import { CheckOutlined, CloseOutlined, ExclamationOutlined, QuestionOutlined } from '@ant-design/icons';

const NormDetailDetail = ({ visible, onCancel, title }) => {
    return (
        <>
            <Modal
                title={title}
                centered
                visible={visible}
                onCancel={onCancel}
                width={'70%'}
                footer={
                    []
                }
            >
                <Timeline mode="alternate">
                    <Timeline.Item dot={<CheckOutlined className={'icon success'} />}>
                        <div className="item-div">
                            <p>Bölge Operasyon Tarafından Onaylandı 06.06.2021</p>
                            <p>Açıklama Alanı Gelecek</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<CheckOutlined className={'icon'} />}>
                        <div className="item-div">
                            <p>Bölge Operasyon Tarafından Onaylandı 06.06.2021</p>
                            <p>Açıklama Alanı Gelecek</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<ExclamationOutlined className={'icon'} />}>
                        <div className="item-div">
                            <p>Bölge Operasyon Tarafından Onaylandı 06.06.2021</p>
                            <p>Açıklama Alanı Gelecek</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<QuestionOutlined className={'icon'} />}>
                        <div className="item-div">
                            <p>Bölge Operasyon Tarafından Onaylandı 06.06.2021</p>
                            <p>Açıklama Alanı Gelecek</p>
                        </div>
                    </Timeline.Item>
                    <Timeline.Item dot={<CloseOutlined className={'icon danger'} />}>
                        <div className="item-div">
                            <p>Bölge Operasyon Tarafından Onaylandı 06.06.2021</p>
                            <p>Açıklama Alanı Gelecek</p>
                        </div>
                    </Timeline.Item>
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