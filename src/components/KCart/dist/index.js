"use strict";
exports.__esModule = true;
require("./index.less");
var react_1 = require("react");
var antd_1 = require("antd");
var prop_types_1 = require("prop-types");
var react_countup_1 = require("react-countup");
var abpUtility_1 = require("../../lib/abpUtility");
var icons_1 = require("@ant-design/icons");
function KCart(_a) {
    var cardLoading = _a.cardLoading, color = _a.color, title = _a.title, icon = _a.icon, number = _a.number, onClick = _a.onClick, _b = _a.cursor, cursor = _b === void 0 ? '' : _b;
    var _icon;
    if (icon === "UserAddOutlined")
        _icon = react_1["default"].createElement(icons_1.UserAddOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "PlusOutlined")
        _icon = react_1["default"].createElement(icons_1.PlusOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "CloseOutlined")
        _icon = react_1["default"].createElement(icons_1.CloseOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "CheckOutlined")
        _icon = react_1["default"].createElement(icons_1.CheckOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "UserAddOutlined")
        _icon = react_1["default"].createElement(icons_1.UserAddOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "MessageOutlined")
        _icon = react_1["default"].createElement(icons_1.MessageOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "QuestionOutlined")
        _icon = react_1["default"].createElement(icons_1.QuestionOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "ClockCircleOutlined")
        _icon = react_1["default"].createElement(icons_1.ClockCircleOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "UsergroupAddOutlined")
        _icon = react_1["default"].createElement(icons_1.UsergroupAddOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "QuestionCircleOutlined")
        _icon = react_1["default"].createElement(icons_1.QuestionCircleOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "FileDoneOutlined")
        _icon = react_1["default"].createElement(icons_1.FileDoneOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "StopOutlined")
        _icon = react_1["default"].createElement(icons_1.StopOutlined, { className: 'dashboardCardIcon' });
    else if (icon === "CheckCircleOutlined")
        _icon = react_1["default"].createElement(icons_1.CheckCircleOutlined, { className: 'dashboardCardIcon' });
    return (react_1["default"].createElement(antd_1.Col, { className: 'dashboardCard', xs: { offset: 1, span: 22 }, sm: { offset: 1, span: 22 }, md: { offset: 1, span: 11 }, lg: { offset: 1, span: 11 }, xl: { offset: 0, span: 6 }, xxl: { offset: 0, span: 6 } },
        react_1["default"].createElement(antd_1.Card, { onClick: onClick, hoverable: true, className: 'KCard', style: { backgroundColor: color, cursor: cursor }, bodyStyle: { padding: 10 }, loading: cardLoading, bordered: false },
            react_1["default"].createElement(antd_1.Col, { span: 8 }, _icon),
            react_1["default"].createElement(antd_1.Col, { span: 24 },
                " ",
                react_1["default"].createElement(react_countup_1["default"], { start: 0, end: number !== undefined ? number : 0, delay: 0 }, function (_a) {
                    var countUpRef = _a.countUpRef;
                    return (react_1["default"].createElement("div", null,
                        react_1["default"].createElement("p", { className: 'dashboardCardName' }, abpUtility_1.L(title)),
                        react_1["default"].createElement("label", { className: 'dashboardCardCounter', ref: countUpRef })));
                })))));
}
KCart.propTypes = {
    cardLoading: prop_types_1["default"].bool.isRequired,
    number: prop_types_1["default"].number,
    title: prop_types_1["default"].string,
    color: prop_types_1["default"].string,
    icon: prop_types_1["default"].string,
    onclick: prop_types_1["default"].func
};
exports["default"] = KCart;
