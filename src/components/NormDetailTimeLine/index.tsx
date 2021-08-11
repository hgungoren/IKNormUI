import './index.less';
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';
import { CheckOutlined, CloseOutlined, ExclamationOutlined } from '@ant-design/icons';
import TalepDurumu from '../../services/kNorm/dto/talepDurumu';
import Status from '../../services/kNormDetail/dto/status';

const NormDetailTimeLine = ({ visible, onCancel, title, data }) => {

    return (
        <>
            <Modal
                title={title}
                centered
                visible={visible}
                onCancel={onCancel}
                width={'70%'}
                footer={[]}
            >
                <Timeline mode="alternate">
                    {
                        data !== undefined && data.map((x) => <Timeline.Item
                            key={x.id}
                            dot={
                                x.status == Status.Apporved ?
                                    <CheckOutlined className={'icon success'} /> : x.status == Status.Waiting ?
                                        <ExclamationOutlined className={'icon waiting'} /> : <CloseOutlined className={'icon danger'} />
                            }>
                            <div className="item-div">
                                <p className={'title'}> {TalepDurumu[x.talepDurumuStr]} </p>
                                <p>
                                    {
                                        x.lastModificationTime !== null && new Date(x.lastModificationTime).toLocaleDateString("tr-TR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })
                                    } </p>
                                <p>{x.description} </p>
                            </div>
                        </Timeline.Item>)
                    }
                </Timeline>
            </Modal>
        </>
    );
};

NormDetailTimeLine.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string
};

export default NormDetailTimeLine;