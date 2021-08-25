"use strict";
exports.__esModule = true;
require("./index.less");
var react_1 = require("react");
var antd_1 = require("antd");
var prop_types_1 = require("prop-types");
var talepDurumu_1 = require("../../services/kNorm/dto/talepDurumu");
var status_1 = require("../../services/kNormDetail/dto/status");
var react_uuid_1 = require("react-uuid");
var Step = antd_1.Steps.Step;
var NormDetailTimeLine = function (_a) {
    var visible = _a.visible, onCancel = _a.onCancel, title = _a.title, data = _a.data;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        console.log(data),
        react_1["default"].createElement(antd_1.Modal, { title: title, centered: true, visible: visible, onCancel: onCancel, width: '70%', footer: [] },
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 } }),
                    react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 } },
                        react_1["default"].createElement(antd_1.Steps, { direction: "vertical" }, data !== undefined && data.map(function (x) { return react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(Step, { key: react_uuid_1["default"](), status: (x.status === status_1["default"].Apporved) ? "finish" : (x.status === status_1["default"].Waiting ? "wait" : "error"), title: talepDurumu_1["default"][x.talepDurumuStr], description: "\n                                    " + (x.lastModificationTime !== null && new Date(x.lastModificationTime).toLocaleDateString("tr-TR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })) + "      " + (x.description !== null ? x.description : '') + " " })); }))))))));
};
NormDetailTimeLine.propTypes = {
    visible: prop_types_1["default"].bool.isRequired,
    title: prop_types_1["default"].string
};
exports["default"] = NormDetailTimeLine;
