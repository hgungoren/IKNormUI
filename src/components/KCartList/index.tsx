import './index.less';
import { Row } from 'antd';
import KCart from '../KCart';
import PropTypes from 'prop-types';
import KNormDateFilter from '../KNormDateFilter';
import React, { useState, useEffect } from 'react';
import { isGranted, L } from '../../lib/abpUtility';
import NormRequestListTableModal from '../NormRequestListTableModal';

interface KCartListProps {
    dateFilter: boolean;
    moment?: any;
    type;
    bolgeId;
    subeObjId;
    normCount;
    kNormStore;
    cardLoading;
    onDateFilter;
    kPersonelCount;
    kNormDetailStore;
    getTotalNormUpdateRequestCount: number;
    getPendingNormFillRequestCount: number;
    getTotalNormFillingRequestCount: number;
    getAcceptedNormFillRequestCount: number;
    getCanceledNormFillRequestCount: number;
    getPendingNormUpdateRequestCount: number;
    getAcceptedNormUpdateRequestCount: number;
    getCanceledNormUpdateRequestCount: number;
}


function KCartList({
    dateFilter,
    moment,
    type,
    bolgeId,
    subeObjId,
    normCount,
    kNormStore,
    cardLoading,
    onDateFilter,
    kPersonelCount,
    kNormDetailStore,
    getTotalNormUpdateRequestCount,
    getPendingNormFillRequestCount,
    getTotalNormFillingRequestCount,
    getAcceptedNormFillRequestCount,
    getCanceledNormFillRequestCount,
    getPendingNormUpdateRequestCount,
    getAcceptedNormUpdateRequestCount,
    getCanceledNormUpdateRequestCount
}: KCartListProps) {

    const [key, setKey] = useState(0)
    const [table, setTable] = useState('')
    const [visible, setVisible] = useState(false)


    const [totalNormUpdateRequest, setTotalNormUpdateRequest] = useState(0)
    const [pendingNormFillRequest, setPendingNormFillRequest] = useState(0)
    const [canceledNormFillRequest, setCanceledNormFillRequest] = useState(0)
    const [acceptedNormFillRequest, setAcceptedNormFillRequest] = useState(0)
    const [totalNormFillingRequest, setTotalNormFillingRequest] = useState(0)
    const [pendingNormUpdateRequest, setPendingNormUpdateRequest] = useState(0)
    const [acceptedNormUpdateRequest, setAcceptedNormUpdateRequest] = useState(0)
    const [canceledNormUpdateRequest, setCanceledNormUpdateRequest] = useState(0)

    const onOpenModal = (card: string) => {
        setVisible(!visible);
        setTable(card);
    }

    const setDefault = (key: string) => { }

    const onCancelModal = () => {
        setVisible(!visible);
    }

    useEffect(() => { setKey(key + 1) }, [visible]);

    setTimeout(() => {

        if ( isGranted('subitems.kareas.infobox.getcancelednormupdaterequest') || isGranted('subitems.dashboard.infobox.getcancelednormupdaterequest')) { setCanceledNormUpdateRequest(getCanceledNormUpdateRequestCount) }
        if ( isGranted('subitems.kareas.infobox.getacceptednormupdaterequest') || isGranted('subitems.dashboard.infobox.getacceptednormupdaterequest')) { setAcceptedNormUpdateRequest(getAcceptedNormUpdateRequestCount) }
        if ( isGranted('subitems.kareas.infobox.getpendingnormupdaterequest')  || isGranted('subitems.dashboard.infobox.getpendingnormupdaterequest')) { setPendingNormUpdateRequest(getPendingNormUpdateRequestCount) }
        if ( isGranted('subitems.kareas.infobox.gettotalnormupdaterequest')    || isGranted('subitems.dashboard.infobox.gettotalnormupdaterequest')) { setTotalNormUpdateRequest(getTotalNormUpdateRequestCount) }
        if ( isGranted('subitems.kareas.infobox.getcancelednormfillrequest')   || isGranted('subitems.dashboard.infobox.getcancelednormfillrequest')) { setCanceledNormFillRequest(getCanceledNormFillRequestCount) }
        if ( isGranted('subitems.kareas.infobox.getacceptednormfillrequest')   || isGranted('subitems.dashboard.infobox.getacceptednormfillrequest')) { setAcceptedNormFillRequest(getAcceptedNormFillRequestCount) }
        if ( isGranted('subitems.kareas.infobox.getpendingnormfillrequest')    || isGranted('subitems.dashboard.infobox.getpendingnormfillrequest')) { setPendingNormFillRequest(getPendingNormFillRequestCount) }
        if ( isGranted('subitems.kareas.infobox.gettotalnormfillingrequest')   || isGranted('subitems.dashboard.infobox.gettotalnormfillingrequest')) { setTotalNormFillingRequest(getTotalNormFillingRequestCount) }


          
          
          
          
         
          
          
          


    }, 500)


    return (
        <>
            <Row gutter={16}>
                <KCart cursor={'context-menu'} onClick={() => setDefault('')} cardLoading={cardLoading} color='rgb(64, 169, 255)' title={L('NormCount')} icon='UsergroupAddOutlined' number={normCount} />
                <KCart cursor={'context-menu'} onClick={() => setDefault('')} cardLoading={cardLoading} color='rgb(64, 169, 255)' title={L('EmployeeCount')} icon='UserAddOutlined' number={kPersonelCount} />
            </Row>

            {
                dateFilter && <Row gutter={16}>
                    <KNormDateFilter cursor={'context-menu'} onChange={onDateFilter} cardLoading={cardLoading} />
                </Row>
            }


            <Row gutter={16}>
                {
                    (isGranted('subitems.dashboard.infobox.gettotalnormfillingrequest') || isGranted('subitems.kareas.infobox.gettotalnormfillingrequest')) && <KCart onClick={() => onOpenModal('getTotalNormFillingRequest')}
                        cardLoading={cardLoading}
                        color='rgb(83, 29, 171)'
                        title={L('TotalNormFillingRequest')}
                        icon='FileDoneOutlined'
                        number={totalNormFillingRequest} />
                }
                {

                    (isGranted('subitems.dashboard.infobox.getpendingnormfillrequest') || isGranted('subitems.kareas.infobox.getpendingnormfillrequest')) && <KCart onClick={() => onOpenModal('getPendingNormFillRequest')}
                        cardLoading={cardLoading} color='rgb(250, 173, 20)'
                        title={L('PendingNormFillRequest')} icon='ClockCircleOutlined'
                        number={pendingNormFillRequest} />
                }
                {
                    (isGranted('subitems.dashboard.infobox.getacceptednormfillrequest') || isGranted('subitems.kareas.infobox.getacceptednormfillrequest')) && <KCart onClick={() => onOpenModal('getAcceptedNormFillRequest')}
                        cardLoading={cardLoading} color='#1DA57A'
                        title={L('AcceptedNormFillRequest')} icon='CheckCircleOutlined'
                        number={acceptedNormFillRequest} />
                }
                {
                    (isGranted('subitems.dashboard.infobox.getcancelednormfillrequest') || isGranted('subitems.kareas.infobox.getcancelednormfillrequest')) && <KCart onClick={() => onOpenModal('getCanceledNormFillRequest')}
                        cardLoading={cardLoading} color='#fa541c'
                        title={L('CanceledNormFillRequest')} icon='StopOutlined'
                        number={canceledNormFillRequest} />
                }
            </Row>

            <Row gutter={16}>
                {
                    (isGranted('subitems.dashboard.infobox.gettotalnormupdaterequest') || isGranted('subitems.kareas.infobox.gettotalnormupdaterequest')) && <KCart onClick={() => onOpenModal('getTotalNormUpdateRequest')}
                        cardLoading={cardLoading} color='rgb(83, 29, 171)'
                        title={L('TotalNormUpdateRequest')} icon='FileDoneOutlined'
                        number={totalNormUpdateRequest} />
                }
                {
                    (isGranted('subitems.dashboard.infobox.getpendingnormupdaterequest') || isGranted('subitems.kareas.infobox.getpendingnormupdaterequest')) && <KCart onClick={() => onOpenModal('getPendingNormUpdateRequest')}
                        cardLoading={cardLoading} color='rgb(250, 173, 20)'
                        title={L('PendingNormUpdateRequest')} icon='ClockCircleOutlined'
                        number={pendingNormUpdateRequest} />
                }
                {
                    (isGranted('subitems.dashboard.infobox.getacceptednormupdaterequest') || isGranted('subitems.kareas.infobox.getacceptednormupdaterequest')) && <KCart onClick={() => onOpenModal('getAcceptedNormUpdateRequest')}
                        cardLoading={cardLoading} color='#1DA57A'
                        title={L('AcceptedNormUpdateRequest')} icon='CheckCircleOutlined'
                        number={acceptedNormUpdateRequest} />
                }
                {
                    (isGranted('subitems.dashboard.infobox.getcancelednormupdaterequest') || isGranted('subitems.kareas.infobox.getcancelednormupdaterequest')) && <KCart onClick={() => onOpenModal('getCanceledNormUpdateRequest')}
                        cardLoading={cardLoading} color='#fa541c'
                        title={L('CanceledNormUpdateRequest')} icon='StopOutlined'
                        number={canceledNormUpdateRequest} />
                }

            </Row>

            <NormRequestListTableModal
                key={key}
                type={type}
                table={table}
                moment={moment}
                bolgeId={bolgeId}
                visible={visible}
                subeObjId={subeObjId}
                kNormStore={kNormStore}
                onCancel={onCancelModal}
                title={table.replace('get', '')}
                kNormDetailStore={kNormDetailStore}
            />
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
