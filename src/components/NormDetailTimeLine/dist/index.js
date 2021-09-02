"use strict";
exports.__esModule = true;
require("./index.less");
var react_1 = require("react");
var antd_1 = require("antd");
var prop_types_1 = require("prop-types");
var talepDurumu_1 = require("../../services/kNorm/dto/talepDurumu");
var status_1 = require("../../services/kNormDetail/dto/status");
var react_uuid_1 = require("react-uuid");
var abpUtility_1 = require("../../lib/abpUtility");
var normStatus_1 = require("../../services/kNorm/dto/normStatus");
var icons_1 = require("@ant-design/icons");
var Step = antd_1.Steps.Step;
var NormDetailTimeLine = function (_a) {
    var visible = _a.visible, onCancel = _a.onCancel, title = _a.title, data = _a.data, norm = _a.norm;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Modal, { title: title, centered: true, visible: visible, onCancel: onCancel, width: '70%', footer: [] },
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                    react_1["default"].createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 12, offset: 0 } },
                        react_1["default"].createElement(antd_1.Descriptions, { column: 1, key: react_uuid_1["default"](), size: 'small', title: abpUtility_1.L("RequestDetail"), bordered: true }, norm !== undefined && react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.area.name") }, norm.bolgeAdi),
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.branch.name") }, norm.subeAdi),
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.position") }, norm.pozisyon),
                            norm.yeniPozisyon !== null && react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.newposition") }, norm.yeniPozisyon),
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.description") }, norm.aciklama),
                            norm.personelId > 0 && react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.leaving.staff") }, norm.personelAdi),
                            norm.nedeni !== '' && react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.requestreason") }, norm.nedeni),
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.requesttype") }, abpUtility_1.L(norm.turu)),
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L("table.norm.requestdate") }, new Date(norm.creationTime).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })),
                            react_1["default"].createElement(antd_1.Descriptions.Item, { key: react_uuid_1["default"](), label: abpUtility_1.L('table.norm.requeststatus') }, (normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Beklemede) ?
                                react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Waiting') },
                                    " ",
                                    react_1["default"].createElement(antd_1.Tag, { color: 'rgb(250, 173, 20)', icon: react_1["default"].createElement(icons_1.ClockCircleOutlined, null), className: 'requeststatus' },
                                        " ",
                                        talepDurumu_1["default"][norm.durumu],
                                        " ")) :
                                (normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Iptal) ?
                                    react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Reject') },
                                        "   ",
                                        react_1["default"].createElement(antd_1.Tag, { color: 'rgb(250, 84, 28)', icon: react_1["default"].createElement(icons_1.StopOutlined, null), className: 'requeststatus' },
                                            " ",
                                            talepDurumu_1["default"][norm.durumu],
                                            " ")) :
                                    react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Approved') },
                                        " ",
                                        react_1["default"].createElement(antd_1.Tag, { color: 'rgb(29, 165, 122)', icon: react_1["default"].createElement(icons_1.CheckCircleOutlined, null), className: 'requeststatus' },
                                            " ",
                                            talepDurumu_1["default"][norm.durumu],
                                            " ")))))),
                    react_1["default"].createElement(antd_1.Col, { xs: { span: 24, offset: 2 }, sm: { span: 10, offset: 2 } },
                        react_1["default"].createElement(antd_1.Steps, { direction: "vertical" }),
                        react_1["default"].createElement(antd_1.Steps, { direction: "vertical" }, data !== undefined && data.map(function (x) { return react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Step, { key: react_uuid_1["default"](), status: (x.status === status_1["default"].Apporved) ? "finish" : (x.status === status_1["default"].Waiting ? "wait" : "error"), title: talepDurumu_1["default"][x.talepDurumuStr], description: react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement("p", { className: 'step-time' },
                                        " ",
                                        ((x.lastModificationTime !== null && x.status !== status_1["default"].Waiting) && new Date(x.lastModificationTime).toLocaleDateString("tr-TR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        }))),
                                    react_1["default"].createElement("p", { className: 'step-description' },
                                        " ",
                                        (x.description !== null ? x.description : ''),
                                        " ")) })); }))))))));
};
NormDetailTimeLine.propTypes = {
    visible: prop_types_1["default"].bool.isRequired,
    title: prop_types_1["default"].string
};
exports["default"] = NormDetailTimeLine;
