"use strict";
exports.__esModule = true;
exports.NotificationDrawer = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
exports.NotificationDrawer = function () {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(), size = _b[0], setSize = _b[1];
    var showDefaultDrawer = function () {
        setSize('default');
        setVisible(true);
    };
    var showLargeDrawer = function () {
        setSize('large');
        setVisible(true);
    };
    var onClose = function () {
        setVisible(false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Space, null,
            react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: showDefaultDrawer }, "Open Default Size (378px)"),
            react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: showLargeDrawer }, "Open Large Size (736px)")),
        react_1["default"].createElement(antd_1.Drawer, { title: size + " Drawer", placement: "right", size: size, onClose: onClose, visible: visible, extra: react_1["default"].createElement(antd_1.Space, null,
                react_1["default"].createElement(antd_1.Button, { onClick: onClose }, "Cancel"),
                react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: onClose }, "OK")) },
            react_1["default"].createElement("p", null, "Some contents..."),
            react_1["default"].createElement("p", null, "Some contents..."),
            react_1["default"].createElement("p", null, "Some contents..."))));
};
