"use strict";
exports.__esModule = true;
exports.HierarchyDrawer = void 0;
/* eslint-disable */
var react_1 = require("react");
var antd_1 = require("antd");
require("./index.less");
function HierarchyDrawer(props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Drawer, { title: "Norm Bildirim Paneli", placement: "right", width: 600, onClose: props.onClose, visible: props.visible },
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: " Mail Bildirimi", description: "Yeni Bir Norm Talebi Geldi\u011Finde, Kullan\u0131c\u0131ya Mail Olarak Bildirim Gider", type: "info", closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.mail, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'Mail' }); } }, "Bildirim")) })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Mail Bildirimi - Durum De\u011Fi\u015Fikli\u011Fi", description: "Var Olan Norm \u00DCzerinde Bir De\u011Fi\u015Fiklik Oldu\u011Funda, Kullan\u0131c\u0131ya Bildirim Maili Gider", type: "info", closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.mailStatusChange, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'MailStatusChange' }); } }, "Bildirim")) })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Telefon Bildirimi", description: "Var Olan Norm \u00DCzerinde Bir De\u011Fi\u015Fiklik Oldu\u011Funda, Kullan\u0131c\u0131ya Telefonuna Bildirim Gider", type: "info", closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationPhone, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationPhone' }); } }, "Bildirim")) }))),
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationPhoneStatusChange, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationPhoneStatusChange' }); } }, "Telefon Bildirimi - Durum De\u011Fi\u015Fikli\u011Fi")))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationWeb, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationWeb' }); } }, "Browser Bildirimi"),
                        "   ")),
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationWebStatusChange, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'PushNotificationWebStatusChange' }); } }, "Browser Bildirimi - Durum De\u011Fi\u015Fikli\u011Fi"),
                        "   "))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("p", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationWebStatusChange, disabled: false, onChange: function (x) { return props.onSwitchChange({ id: props.node.id, status: x.target.checked, type: 'CanTerminate' }); } }, "Sonland\u0131r"),
                        "   "))))));
}
exports.HierarchyDrawer = HierarchyDrawer;