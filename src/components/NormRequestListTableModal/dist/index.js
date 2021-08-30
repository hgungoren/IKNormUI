"use strict";
exports.__esModule = true;
require("./index.less");
var react_1 = require("react");
var antd_1 = require("antd");
var prop_types_1 = require("prop-types");
var NormRequestListTable_1 = require("../NormRequestListTable");
function NormRequestListTableModal(_a) {
    var title = _a.title, table = _a.table, onCancel = _a.onCancel, kNormStore = _a.kNormStore, subeObjId = _a.subeObjId, visible = _a.visible, kNormDetailStore = _a.kNormDetailStore, type = _a.type, bolgeId = _a.bolgeId, moment = _a.moment;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Modal, { centered: true, title: '', footer: [], width: '80%', visible: visible, onCancel: onCancel },
            react_1["default"].createElement(NormRequestListTable_1["default"], { moment: moment, bolgeId: bolgeId, type: type, kNormDetailStore: kNormDetailStore, isConfirmOrCancel: true, kNormStore: kNormStore, subeObjId: subeObjId, isHoverable: false, tableTitle: title, isModal: true, table: table }))));
}
NormRequestListTableModal.propTypes = {
    title: prop_types_1["default"].string,
    table: prop_types_1["default"].string,
    visible: prop_types_1["default"].bool,
    onCancel: prop_types_1["default"].func,
    kNormStore: prop_types_1["default"].any
};
exports["default"] = NormRequestListTableModal;
