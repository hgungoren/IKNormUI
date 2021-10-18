"use strict";
exports.__esModule = true;
require("./index.less");
var antd_1 = require("antd");
var KCart_1 = require("../KCart");
var prop_types_1 = require("prop-types");
var KNormDateFilter_1 = require("../KNormDateFilter");
var react_1 = require("react");
var abpUtility_1 = require("../../lib/abpUtility");
var NormRequestListTableModal_1 = require("../NormRequestListTableModal");
function KCartList(_a) {
    var dateFilter = _a.dateFilter, moment = _a.moment, type = _a.type, bolgeId = _a.bolgeId, subeObjId = _a.subeObjId, normCount = _a.normCount, kNormStore = _a.kNormStore, cardLoading = _a.cardLoading, onDateFilter = _a.onDateFilter, kPersonelCount = _a.kPersonelCount, kNormDetailStore = _a.kNormDetailStore, getTotalNormUpdateRequestCount = _a.getTotalNormUpdateRequestCount, getPendingNormFillRequestCount = _a.getPendingNormFillRequestCount, getTotalNormFillingRequestCount = _a.getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount = _a.getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount = _a.getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount = _a.getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount = _a.getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount = _a.getCanceledNormUpdateRequestCount, getTotalNormUpdateRequestPermission = _a.getTotalNormUpdateRequestPermission, getPendingNormFillRequestPermission = _a.getPendingNormFillRequestPermission, getTotalNormFillingRequestPermission = _a.getTotalNormFillingRequestPermission, getAcceptedNormFillRequestPermission = _a.getAcceptedNormFillRequestPermission, getCanceledNormFillRequestPermission = _a.getCanceledNormFillRequestPermission, getPendingNormUpdateRequestPermission = _a.getPendingNormUpdateRequestPermission, getAcceptedNormUpdateRequestPermission = _a.getAcceptedNormUpdateRequestPermission, getCanceledNormUpdateRequestPermission = _a.getCanceledNormUpdateRequestPermission;
    var _b = react_1.useState(0), key = _b[0], setKey = _b[1];
    var _c = react_1.useState(''), table = _c[0], setTable = _c[1];
    var _d = react_1.useState(false), visible = _d[0], setVisible = _d[1];
    var _e = react_1.useState(0), totalNormUpdateRequest = _e[0], setTotalNormUpdateRequest = _e[1];
    var _f = react_1.useState(0), pendingNormFillRequest = _f[0], setPendingNormFillRequest = _f[1];
    var _g = react_1.useState(0), canceledNormFillRequest = _g[0], setCanceledNormFillRequest = _g[1];
    var _h = react_1.useState(0), acceptedNormFillRequest = _h[0], setAcceptedNormFillRequest = _h[1];
    var _j = react_1.useState(0), totalNormFillingRequest = _j[0], setTotalNormFillingRequest = _j[1];
    var _k = react_1.useState(0), pendingNormUpdateRequest = _k[0], setPendingNormUpdateRequest = _k[1];
    var _l = react_1.useState(0), acceptedNormUpdateRequest = _l[0], setAcceptedNormUpdateRequest = _l[1];
    var _m = react_1.useState(0), canceledNormUpdateRequest = _m[0], setCanceledNormUpdateRequest = _m[1];
    var onOpenModal = function (card) {
        setVisible(!visible);
        setTable(card);
    };
    var setDefault = function (key) { };
    var onCancelModal = function () {
        setVisible(!visible);
    };
    react_1.useEffect(function () { setKey(key + 1); }, [visible]);
    setTimeout(function () {
        if (getTotalNormUpdateRequestPermission) {
            setTotalNormUpdateRequest(getTotalNormUpdateRequestCount);
        }
        if (getPendingNormFillRequestPermission) {
            setPendingNormFillRequest(getPendingNormFillRequestCount);
        }
        if (getTotalNormFillingRequestPermission) {
            setTotalNormFillingRequest(getTotalNormFillingRequestCount);
        }
        if (getAcceptedNormFillRequestPermission) {
            setAcceptedNormFillRequest(getAcceptedNormFillRequestCount);
        }
        if (getCanceledNormFillRequestPermission) {
            setCanceledNormFillRequest(getCanceledNormFillRequestCount);
        }
        if (getPendingNormUpdateRequestPermission) {
            setPendingNormUpdateRequest(getPendingNormUpdateRequestCount);
        }
        if (getAcceptedNormUpdateRequestPermission) {
            setAcceptedNormUpdateRequest(getAcceptedNormUpdateRequestCount);
        }
        if (getCanceledNormUpdateRequestPermission) {
            setCanceledNormUpdateRequest(getCanceledNormUpdateRequestCount);
        }
    }, 500);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            abpUtility_1.isGranted('subitems.dashboard.infobox.norm.count') &&
                react_1["default"].createElement(KCart_1["default"], { cursor: 'context-menu', onClick: function () { return setDefault(''); }, cardLoading: cardLoading, color: 'rgb(64, 169, 255)', title: abpUtility_1.L('NormCount'), icon: 'UsergroupAddOutlined', number: normCount }),
            abpUtility_1.isGranted('subitems.dashboard.infobox.emplooye.count') &&
                react_1["default"].createElement(KCart_1["default"], { cursor: 'context-menu', onClick: function () { return setDefault(''); }, cardLoading: cardLoading, color: 'rgb(64, 169, 255)', title: abpUtility_1.L('EmployeeCount'), icon: 'UserAddOutlined', number: kPersonelCount })),
        dateFilter && react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            react_1["default"].createElement(KNormDateFilter_1["default"], { cursor: 'context-menu', onChange: onDateFilter, cardLoading: cardLoading })),
        react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            getTotalNormFillingRequestPermission &&
                react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getTotalNormFillingRequest'); }, cardLoading: cardLoading, color: 'rgb(83, 29, 171)', title: abpUtility_1.L('TotalNormFillingRequest'), icon: 'FileDoneOutlined', number: totalNormFillingRequest }),
            getPendingNormFillRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getPendingNormFillRequest'); }, cardLoading: cardLoading, color: 'rgb(250, 173, 20)', title: abpUtility_1.L('PendingNormFillRequest'), icon: 'ClockCircleOutlined', number: pendingNormFillRequest }),
            getAcceptedNormFillRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getAcceptedNormFillRequest'); }, cardLoading: cardLoading, color: '#1DA57A', title: abpUtility_1.L('AcceptedNormFillRequest'), icon: 'CheckCircleOutlined', number: acceptedNormFillRequest }),
            getCanceledNormFillRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getCanceledNormFillRequest'); }, cardLoading: cardLoading, color: '#fa541c', title: abpUtility_1.L('CanceledNormFillRequest'), icon: 'StopOutlined', number: canceledNormFillRequest })),
        react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            getTotalNormUpdateRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getTotalNormUpdateRequest'); }, cardLoading: cardLoading, color: 'rgb(83, 29, 171)', title: abpUtility_1.L('TotalNormUpdateRequest'), icon: 'FileDoneOutlined', number: totalNormUpdateRequest }),
            getPendingNormUpdateRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getPendingNormUpdateRequest'); }, cardLoading: cardLoading, color: 'rgb(250, 173, 20)', title: abpUtility_1.L('PendingNormUpdateRequest'), icon: 'ClockCircleOutlined', number: pendingNormUpdateRequest }),
            getAcceptedNormUpdateRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getAcceptedNormUpdateRequest'); }, cardLoading: cardLoading, color: '#1DA57A', title: abpUtility_1.L('AcceptedNormUpdateRequest'), icon: 'CheckCircleOutlined', number: acceptedNormUpdateRequest }),
            getCanceledNormUpdateRequestPermission && react_1["default"].createElement(KCart_1["default"], { onClick: function () { return onOpenModal('getCanceledNormUpdateRequest'); }, cardLoading: cardLoading, color: '#fa541c', title: abpUtility_1.L('CanceledNormUpdateRequest'), icon: 'StopOutlined', number: canceledNormUpdateRequest })),
        react_1["default"].createElement(NormRequestListTableModal_1["default"], { key: key, type: type, table: table, moment: moment, bolgeId: bolgeId, visible: visible, subeObjId: subeObjId, kNormStore: kNormStore, onCancel: onCancelModal, title: table.replace('get', ''), kNormDetailStore: kNormDetailStore })));
}
KCartList.propTypes = {
    visible: prop_types_1["default"].bool,
    cardLoading: prop_types_1["default"].bool,
    normCount: prop_types_1["default"].number,
    kNormStore: prop_types_1["default"].object,
    kPersonelCount: prop_types_1["default"].number
};
exports["default"] = KCartList;
