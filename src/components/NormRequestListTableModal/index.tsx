import './index.less';
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import NormRequestListTable from '../NormRequestListTable';

function NormRequestListTableModal({ title, table, onCancel, kNormStore, subeObjId, visible, kNormDetailStore, userId }) {
    return (
        <>
            <Modal
                centered
                title={''}
                footer={[]}
                width={'95%'}
                visible={visible}
                onCancel={onCancel} >

                <NormRequestListTable
                    userId={userId}
                    kNormDetailStore={kNormDetailStore}
                    isConfirmOrCancel={true}
                    kNormStore={kNormStore}
                    subeObjId={subeObjId}
                    isHoverable={false}
                    tableTitle={title}
                    isModal={true}
                    table={table} />
            </Modal>
        </>
    )
}

NormRequestListTableModal.propTypes = {
    title: PropTypes.string,
    table: PropTypes.string,
    visible: PropTypes.bool,
    onCancel: PropTypes.func,
    kNormStore: PropTypes.any, 
};

export default NormRequestListTableModal;