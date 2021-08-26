"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var RangePicker = antd_1.DatePicker.RangePicker;
function KNormDateFilter(_a) {
    var cardLoading = _a.cardLoading, color = _a.color, onClick = _a.onClick, _b = _a.cursor, cursor = _b === void 0 ? '' : _b;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Col, { xs: { offset: 1, span: 22 }, sm: { offset: 1, span: 22 }, md: { offset: 1, span: 11 }, lg: { offset: 1, span: 11 }, xl: { offset: 0, span: 12 }, xxl: { offset: 0, span: 12 } },
            react_1["default"].createElement(antd_1.Card, { onClick: onClick, hoverable: true, style: { cursor: cursor }, bodyStyle: { padding: 10 }, loading: cardLoading, bordered: false },
                react_1["default"].createElement(antd_1.Col, { span: 24 },
                    react_1["default"].createElement(antd_1.Space, { direction: "vertical", size: 24 },
                        react_1["default"].createElement(RangePicker, { size: 'large', className: 'range-picker', dateRender: function (current) {
                                var style = { border: '', borderRadius: '' };
                                if (current.date() === 1) {
                                    style.border = '1px solid #1890ff';
                                    style.borderRadius = '50%';
                                }
                                return (react_1["default"].createElement("div", { className: "ant-picker-cell-inner", style: style }, current.date()));
                            } })))))));
}
exports["default"] = KNormDateFilter;
