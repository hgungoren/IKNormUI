import React from 'react';
import './index.less'
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import NormRequestListTable from '../NormRequestListTable';


function NormRequestListTableModal({ title, table, onCancel, kNormStore, subeObjId, visible, kNormDetailStore }) {

    return (<>
        <Modal
            footer={[]}
            title={''}
            centered
            visible={visible}
            onCancel={onCancel}
            width={'95%'}
        >
            <NormRequestListTable
                kNormDetailStore={kNormDetailStore}
                kNormStore={kNormStore}
                subeObjId={subeObjId}
                isConfirmOrCancel={true}
                isHoverable={false}
                tableTitle={title}
                table={table}
                isModal={true}
            />
        </Modal>
    </>)
}

NormRequestListTableModal.propTypes = {
    title: PropTypes.string,
    table: PropTypes.any,
    onCancel: PropTypes.func,
    kNormStore: PropTypes.any,
    subeObjId: PropTypes.number,
    visible: PropTypes.bool
};


export default NormRequestListTableModal;