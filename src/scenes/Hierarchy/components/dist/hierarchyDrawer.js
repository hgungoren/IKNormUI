"use strict";
exports.__esModule = true;
exports.HierarchyDrawer = void 0;
/* eslint-disable */
var react_1 = require("react");
var antd_1 = require("antd");
require("./index.less");
function HierarchyDrawer(props) {
    console.log('props.node.mail=>', props.node.mail);
    console.log('props.node=>', props.node);
    var _a = react_1.useState(props.node.pushNotificationPhoneStatusChange), defaultVisiblePushNotificationPhoneStatusChange = _a[0], setDefaultVisiblePushNotificationPhoneStatusChange = _a[1];
    var _b = react_1.useState(props.node.pushNotificationWebStatusChange), defaultVisiblePushNotificationWebStatusChange = _b[0], setDefaultVisiblePushNotificationWebStatusChange = _b[1];
    var _c = react_1.useState(props.node.pushNotificationPhone), defaultVisiblePushNotificationPhone = _c[0], setDefaultVisiblePushNotificationPhone = _c[1];
    var _d = react_1.useState(props.node.pushNotificationWeb), defaultVisiblePushNotificationWeb = _d[0], setDefaultVisiblePushNotificationWeb = _d[1];
    var _e = react_1.useState(props.node.canTerminate), defaultVisibleCanTerminate = _e[0], setDefaultVisibleCanTerminate = _e[1];
    var _f = react_1.useState(props.node.mailStatusChange), defaultVisibleMailStatusChange = _f[0], setDefaultVisibleMailStatusChange = _f[1];
    var _g = react_1.useState(props.node.mail), defaultVisibleMail = _g[0], setDefaultVisibleMail = _g[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Drawer, { title: "Norm Bildirim Paneli", placement: "right", width: 600, onClose: props.onClose, visible: props.visible },
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: " Mail Bildirimi", description: "Yeni Bir Norm Talebi Geldi\u011Finde, Kullan\u0131c\u0131ya Mail Olarak Bildirim Gider", type: defaultVisibleMail ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.mail, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'Mail' });
                                        setDefaultVisibleMail(!defaultVisibleMail);
                                    } }, "Bildirim")) })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Mail Bildirimi - Durum De\u011Fi\u015Fikli\u011Fi", description: "Var Olan Norm \u00DCzerinde Bir De\u011Fi\u015Fiklik Oldu\u011Funda, Kullan\u0131c\u0131ya Bildirim Maili Gider", type: defaultVisibleMailStatusChange ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.mailStatusChange, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'MailStatusChange' });
                                        setDefaultVisibleMailStatusChange(!defaultVisibleMailStatusChange);
                                    } }, " Bildirim")) })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Cep Telefonu Bildirimi", description: "Yeni Bir Norm Talebi Geldi\u011Finde, Kullan\u0131c\u0131n\u0131n Cep Telefonuna Bildirim Gider", type: defaultVisiblePushNotificationPhone ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationPhone, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationPhone' });
                                        setDefaultVisiblePushNotificationPhone(!defaultVisiblePushNotificationPhone);
                                    } }, " Bildirim")) }))),
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Cep Telefonu Bildirimi - Durum De\u011Fi\u015Fikli\u011Fi", description: "Var Olan Norm \u00DCzerinde Bir De\u011Fi\u015Fiklik Oldu\u011Funda, Kullan\u0131c\u0131n\u0131n Cep Telefonuna Bildirim Gider", type: defaultVisiblePushNotificationPhoneStatusChange ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationPhoneStatusChange, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationPhoneStatusChange' });
                                        setDefaultVisiblePushNotificationPhoneStatusChange(!defaultVisiblePushNotificationPhoneStatusChange);
                                    } }, "  Bildirim")) })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Browser Bildirimi", description: "Yeni Bir Norm Talebi Geldi\u011Finde, Kullan\u0131c\u0131ya Browser \u00DCzerinden Bildirim Gider", type: defaultVisiblePushNotificationWeb ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationWeb, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationWeb' });
                                        setDefaultVisiblePushNotificationWeb(!defaultVisiblePushNotificationWeb);
                                    } }, "Bildirim")) }))),
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Browser Bildirimi - Durum De\u011Fi\u015Fikli\u011Fi", description: "Var Olan Norm \u00DCzerinde Bir De\u011Fi\u015Fiklik Oldu\u011Funda, Kullan\u0131c\u0131ya Browser \u00DCzerinden Bildirim Gider", type: defaultVisiblePushNotificationWebStatusChange ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.pushNotificationWebStatusChange, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'PushNotificationWebStatusChange' });
                                        setDefaultVisiblePushNotificationWebStatusChange(!defaultVisiblePushNotificationWebStatusChange);
                                    } }, "Bildirim")) })))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16, justify: "start", align: "middle" },
                react_1["default"].createElement(antd_1.Col, { xs: { offset: 0, span: 24 }, sm: { offset: 0, span: 24 }, md: { offset: 0, span: 24 }, lg: { offset: 0, span: 24 }, xl: { offset: 0, span: 24 }, xxl: { offset: 0, span: 24 } },
                    react_1["default"].createElement("div", { style: { marginBottom: '10px' } },
                        react_1["default"].createElement(antd_1.Alert, { message: "Sonland\u0131r", description: "Yeni Bir Norm Talebi Geldi\u011Finde veya Var Olan Norm \u00DCzerinde Bir De\u011Fi\u015Fiklik Oldu\u011Funda Onay Ak\u0131\u015F\u0131n\u0131 Sonlard\u0131rma", type: defaultVisibleCanTerminate ? 'info' : 'error', closable: false, action: react_1["default"].createElement(antd_1.Space, { direction: "vertical" },
                                react_1["default"].createElement(antd_1.Checkbox, { defaultChecked: props.node.canTerminate, disabled: false, onChange: function (e) {
                                        props.onSwitchChange({ id: props.node.id, status: e.target.checked, type: 'CanTerminate' });
                                        setDefaultVisibleCanTerminate(!defaultVisibleCanTerminate);
                                    } }, " Bildirim")) })))))));
}
exports.HierarchyDrawer = HierarchyDrawer;
