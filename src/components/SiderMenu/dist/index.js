"use strict";
exports.__esModule = true;
require("./index.less");
var React = require("react");
var antd_1 = require("antd");
var abpUtility_1 = require("../../lib/abpUtility");
var surat_logo_svg_1 = require("../../images/surat-logo.svg");
var surat_kisa_logo_png_1 = require("../../images/surat_kisa_logo.png");
var router_config_1 = require("../../components/Router/router.config");
var utils_1 = require("../../utils/utils");
var Sider = antd_1.Layout.Sider;
var SiderMenu = function (props) {
    var collapsed = props.collapsed, history = props.history, onCollapse = props.onCollapse;
    var currentRoute = utils_1["default"].getRoute(history.location.pathname);
    return (React.createElement(Sider, { trigger: null, className: 'sidebar', width: 256, collapsible: true, collapsed: collapsed, onCollapse: onCollapse },
        collapsed ? (React.createElement(antd_1.Col, { style: { textAlign: 'center', marginTop: 15, marginBottom: 10 } },
            React.createElement(antd_1.Avatar, { shape: "square", style: { height: 30, width: 55 }, src: surat_kisa_logo_png_1["default"] }))) : (React.createElement(antd_1.Col, { style: { textAlign: 'center', marginTop: 15, marginBottom: 10 } },
            React.createElement(antd_1.Avatar, { shape: "square", style: { height: 60, width: 215 }, src: surat_logo_svg_1["default"] }))),
        React.createElement(antd_1.Menu, { theme: "dark", mode: "inline", selectedKeys: [currentRoute ? currentRoute.path : ''] }, router_config_1.appRouters
            .filter(function (item) { return !item.isLayout && item.showInMenu; })
            .map(function (route, index) {
            if (route.permission && !abpUtility_1.isGranted(route.permission))
                return null;
            return (React.createElement(antd_1.Menu.Item, { key: route.path, onClick: function () { return history.push(route.path); } },
                React.createElement(route.icon, null),
                React.createElement("span", null,
                    " ",
                    ' ' + abpUtility_1.L(route.title))));
        }))));
};
exports["default"] = SiderMenu;
