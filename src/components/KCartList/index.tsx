import './index.less';
import { Row } from 'antd';
import KCart from '../KCart';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { L } from '../../lib/abpUtility';
import NormRequestListTableModal from '../NormRequestListTableModal'

function KCartList({
    kNormDetailStore,
    cardLoading,
    normCount,
    kPersonelCount,
    getTotalNormFillingRequest,
    getTotalNormUpdateRequest,
    getPendingNormFillRequest,
    getPendingNormUpdateRequest,
    getAcceptedNormFillRequest,
    getAcceptedNormUpdateRequest,
    getCanceledNormFillRequest,
    getCanceledNormUpdateRequest,
    kNormStore,
    subeObjId
}) {

    const [visible, setVisible] = useState(false)
    const [table, setTable] = useState('')

    const onOpenModal = (card: string) => {
        setVisible(!visible);
        setTable(card);
    }

    const setDefautl = (key: string) => { }

    const onCancelModal = () => {
        setVisible(!visible);
    }

    return (
        <>
            <Row gutter={16}>
                <KCart onClick={() => setDefautl('')} cardLoading={cardLoading} color='rgb(64, 169, 255)' title={L('NormCount')} icon='UsergroupAddOutlined' number={normCount} />
                <KCart onClick={() => setDefautl('')} cardLoading={cardLoading} color='rgb(64, 169, 255)' title={L('EmployeeCount')} icon='UserAddOutlined' number={kPersonelCount} />
            </Row>

            <Row gutter={16}>
                <KCart onClick={() => onOpenModal('getTotalNormFillingRequest')} cardLoading={cardLoading} color='rgb(83, 29, 171)' title={L('TotalNormFillingRequest')} icon='FileDoneOutlined' number={getTotalNormFillingRequest !== undefined ? getTotalNormFillingRequest.length : 0} />
                <KCart onClick={() => onOpenModal('getPendingNormFillRequest')}  cardLoading={cardLoading} color='rgb(250, 173, 20)' title={L('PendingNormFillRequest')} icon='ClockCircleOutlined' number={getPendingNormFillRequest !== undefined ? getPendingNormFillRequest.length : 0} />
                <KCart onClick={() => onOpenModal('getAcceptedNormFillRequest')} cardLoading={cardLoading} color='#1DA57A' title={L('AcceptedNormFillRequest')} icon='CheckCircleOutlined' number={getAcceptedNormFillRequest !== undefined ? getAcceptedNormFillRequest.length : 0} />
                <KCart onClick={() => onOpenModal('getCanceledNormFillRequest')} cardLoading={cardLoading} color='#fa541c' title={L('CanceledNormFillRequest')} icon='StopOutlined' number={getCanceledNormFillRequest !== undefined ? getCanceledNormFillRequest.length : 0} />
            </Row>

            <Row gutter={16}>
                <KCart onClick={() => onOpenModal('getTotalNormUpdateRequest')}    cardLoading={cardLoading} color='rgb(83, 29, 171)' title={L('TotalNormUpdateRequest')} icon='FileDoneOutlined' number={getTotalNormUpdateRequest !== undefined ? getTotalNormUpdateRequest.length : 0} />
                <KCart onClick={() => onOpenModal('getPendingNormUpdateRequest')}  cardLoading={cardLoading} color='rgb(250, 173, 20)' title={L('PendingNormUpdateRequest')} icon='ClockCircleOutlined' number={getPendingNormUpdateRequest !== undefined ? getPendingNormUpdateRequest.length : 0} />
                <KCart onClick={() => onOpenModal('getAcceptedNormUpdateRequest')} cardLoading={cardLoading} color='#1DA57A' title={L('AcceptedNormUpdateRequest')} icon='CheckCircleOutlined' number={getAcceptedNormUpdateRequest !== undefined ? getAcceptedNormUpdateRequest.length : 0} />
                <KCart onClick={() => onOpenModal('getCanceledNormUpdateRequest')} cardLoading={cardLoading} color='#fa541c' title={L('CanceledNormUpdateRequest')} icon='StopOutlined' number={getCanceledNormUpdateRequest !== undefined ? getCanceledNormUpdateRequest.length : 0} />
            </Row>

            <NormRequestListTableModal
                kNormDetailStore={kNormDetailStore}
                title={table.replace('get', '')}
                table={table}
                onCancel={onCancelModal}
                kNormStore={kNormStore}
                subeObjId={subeObjId}
                visible={visible} />
        </>
    );
}

KCartList.propTypes = {
    visible: PropTypes.bool,
    cardLoading: PropTypes.bool,
    normCount: PropTypes.number,
    subeObjId: PropTypes.number,
    kNormStore: PropTypes.object,
    kPersonelCount: PropTypes.number
};

export default KCartList;
