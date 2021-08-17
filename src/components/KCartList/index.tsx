import './index.less';
import { Row } from 'antd';
import KCart from '../KCart';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { isGranted, L } from '../../lib/abpUtility';
import NormRequestListTableModal from '../NormRequestListTableModal';
import { useEffect } from 'react';


function KCartList({
    type,
    kNormDetailStore,
    cardLoading,
    normCount,
    kPersonelCount,
    kNormStore,
    subeObjId,
    getTotalNormUpdateRequestCount,
    getPendingNormFillRequestCount,
    getTotalNormFillingRequestCount,
    getAcceptedNormFillRequestCount,
    getCanceledNormFillRequestCount,
    getPendingNormUpdateRequestCount,
    getAcceptedNormUpdateRequestCount,
    getCanceledNormUpdateRequestCount
}) {

    const [visible, setVisible] = useState(false)
    const [table, setTable] = useState('')
    const [key, setKey] = useState(0)


    const [totalNormFillingRequest, setTotalNormFillingRequest] = useState(0)
    const [totalNormUpdateRequest, setTotalNormUpdateRequest] = useState(0)
    const [pendingNormFillRequest, setPendingNormFillRequest] = useState(0)
    const [pendingNormUpdateRequest, setPendingNormUpdateRequest] = useState(0)
    const [acceptedNormFillRequest, setAcceptedNormFillRequest] = useState(0)
    const [acceptedNormUpdateRequest, setAcceptedNormUpdateRequest] = useState(0)
    const [canceledNormFillRequest, setCanceledNormFillRequest] = useState(0)
    const [canceledNormUpdateRequest, setCanceledNormUpdateRequest] = useState(0)

    const onOpenModal = (card: string) => {
        setVisible(!visible);
        setTable(card);
    }

    const setDefautl = (key: string) => { }

    const onCancelModal = () => {
        setVisible(!visible);
    }

    useEffect(() => { setKey(key + 1) }, [visible]);




    setTimeout(() => {

        setTotalNormFillingRequest(getTotalNormFillingRequestCount)
        setTotalNormUpdateRequest(getTotalNormUpdateRequestCount)
        setPendingNormFillRequest(getPendingNormFillRequestCount)
        setPendingNormUpdateRequest(getPendingNormUpdateRequestCount)
        setAcceptedNormFillRequest(getAcceptedNormFillRequestCount)
        setAcceptedNormUpdateRequest(getAcceptedNormUpdateRequestCount)
        setCanceledNormFillRequest(getCanceledNormFillRequestCount)
        setCanceledNormUpdateRequest(getCanceledNormUpdateRequestCount)

    }, 500)


    return (
        <>
            <Row gutter={16}>
                <KCart cursor={'context-menu'} onClick={() => setDefautl('')} cardLoading={cardLoading} color='rgb(64, 169, 255)' title={L('NormCount')} icon='UsergroupAddOutlined' number={normCount} />
                <KCart cursor={'context-menu'} onClick={() => setDefautl('')} cardLoading={cardLoading} color='rgb(64, 169, 255)' title={L('EmployeeCount')} icon='UserAddOutlined' number={kPersonelCount} />
            </Row>

            <Row gutter={16}>
                {
                    isGranted('knorm.gettotalnormfillingrequest') && <KCart onClick={() => onOpenModal('getTotalNormFillingRequest')}
                        cardLoading={cardLoading}
                        color='rgb(83, 29, 171)'
                        title={L('TotalNormFillingRequest')}
                        icon='FileDoneOutlined'
                        number={totalNormFillingRequest} />
                }
                {

                    isGranted('knorm.getpendingnormfillrequest') && <KCart onClick={() => onOpenModal('getPendingNormFillRequest')}
                        cardLoading={cardLoading} color='rgb(250, 173, 20)'
                        title={L('PendingNormFillRequest')} icon='ClockCircleOutlined'
                        number={pendingNormFillRequest} />
                }
                {
                    isGranted('knorm.getacceptednormfillrequest') && <KCart onClick={() => onOpenModal('getAcceptedNormFillRequest')}
                        cardLoading={cardLoading} color='#1DA57A'
                        title={L('AcceptedNormFillRequest')} icon='CheckCircleOutlined'
                        number={acceptedNormFillRequest} />
                }
                {
                    isGranted('knorm.getcancelednormfillrequest') && <KCart onClick={() => onOpenModal('getCanceledNormFillRequest')}
                        cardLoading={cardLoading} color='#fa541c'
                        title={L('CanceledNormFillRequest')} icon='StopOutlined'
                        number={canceledNormFillRequest} />
                }
            </Row>

            <Row gutter={16}>
                {
                    isGranted('knorm.gettotalnormupdaterequest') && <KCart onClick={() => onOpenModal('getTotalNormUpdateRequest')}
                        cardLoading={cardLoading} color='rgb(83, 29, 171)'
                        title={L('TotalNormUpdateRequest')} icon='FileDoneOutlined'
                        number={totalNormUpdateRequest} />
                }
                {
                    isGranted('knorm.getpendingnormupdaterequest') && <KCart onClick={() => onOpenModal('getPendingNormUpdateRequest')}
                        cardLoading={cardLoading} color='rgb(250, 173, 20)'
                        title={L('PendingNormUpdateRequest')} icon='ClockCircleOutlined'
                        number={pendingNormUpdateRequest} />
                }
                {
                    isGranted('knorm.getacceptednormupdaterequest') && <KCart onClick={() => onOpenModal('getAcceptedNormUpdateRequest')}
                        cardLoading={cardLoading} color='#1DA57A'
                        title={L('AcceptedNormUpdateRequest')} icon='CheckCircleOutlined'
                        number={acceptedNormUpdateRequest} />
                }
                {
                    isGranted('knorm.getcancelednormupdaterequest') && <KCart onClick={() => onOpenModal('getCanceledNormUpdateRequest')}
                        cardLoading={cardLoading} color='#fa541c'
                        title={L('CanceledNormUpdateRequest')} icon='StopOutlined'
                        number={canceledNormUpdateRequest} />
                }

            </Row>

            <NormRequestListTableModal
                key={key}
                type={type}
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
    kNormStore: PropTypes.object,
    kPersonelCount: PropTypes.number
};

export default KCartList;
