"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./index.less");
var antd_1 = require("antd");
var tr_TR_1 = require("antd/lib/locale/tr_TR");
var tr_TR_2 = require("antd/es/date-picker/locale/tr_TR");
var moment_1 = require("moment");
var RangePicker = antd_1.DatePicker.RangePicker;
var dateFormat = 'DD-MM-YYYY';
var startOfMonth = moment_1["default"]().startOf('month').format('DD-MM-YYYY');
var currentDate = moment_1["default"]();
function KNormDateFilter(_a) {
    var cardLoading = _a.cardLoading, _b = _a.cursor, cursor = _b === void 0 ? '' : _b, onChange = _a.onChange;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Col, { className: 'dashboardCard', xs: { offset: 1, span: 22 }, sm: { offset: 1, span: 22 }, md: { offset: 1, span: 22 }, lg: { offset: 1, span: 22 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
            react_1["default"].createElement(antd_1.Card, { className: 'kcard-date-picker', hoverable: true, style: { cursor: cursor }, bodyStyle: { padding: 10 }, loading: cardLoading, bordered: false },
                react_1["default"].createElement(antd_1.Col, { span: 24 },
                    react_1["default"].createElement(antd_1.Space, { direction: "vertical", size: 24 },
                        react_1["default"].createElement(antd_1.ConfigProvider, { locale: tr_TR_1["default"] },
                            react_1["default"].createElement(RangePicker, { defaultValue: [moment_1["default"](startOfMonth, dateFormat), moment_1["default"](currentDate, dateFormat)], locale: tr_TR_2["default"], size: 'large', className: 'range-picker', onCalendarChange: onChange, dateRender: function (current) {
                                    var style = { border: '', borderRadius: '' };
                                    if (current.date() === 1) {
                                        style.border = '1px solid #1890ff';
                                        style.borderRadius = '50%';
                                    }
                                    return (react_1["default"].createElement("div", { className: "ant-picker-cell-inner", style: style }, current.date()));
                                } }))))))));
}
exports["default"] = KNormDateFilter;