"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
require("./AppLayout.less");
var antd_1 = require("antd");
var utils_1 = require("../../utils/utils");
var Footer_1 = require("../../components/Footer");
var Header_1 = require("../../components/Header");
var react_document_title_1 = require("react-document-title");
var SiderMenu_1 = require("../../components/SiderMenu");
var NotFoundRoute_1 = require("../Router/NotFoundRoute");
var router_config_1 = require("../Router/router.config");
var react_router_dom_1 = require("react-router-dom");
var ProtectedRoute_1 = require("../../components/Router/ProtectedRoute");
var Content = antd_1.Layout.Content;
var AppLayout = /** @class */ (function (_super) {
    __extends(AppLayout, _super);
    function AppLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: false
        };
        _this.toggle = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
        };
        _this.onCollapse = function (collapsed) {
            _this.setState({ collapsed: collapsed });
        };
        return _this;
    }
    AppLayout.prototype.render = function () {
        var _a = this.props, history = _a.history, pathname = _a.location.pathname;
        var path = this.props.match.path;
        var collapsed = this.state.collapsed;
        var layout = (React.createElement(antd_1.Layout, { style: { minHeight: '100vh' } },
            React.createElement(SiderMenu_1["default"], { path: path, onCollapse: this.onCollapse, history: history, collapsed: collapsed }),
            React.createElement(antd_1.Layout, null,
                React.createElement(antd_1.Layout.Header, { style: { background: '#fff', minHeight: 52, padding: 0 } },
                    React.createElement(Header_1["default"], { collapsed: this.state.collapsed, toggle: this.toggle })),
                React.createElement(Content, { style: { margin: 16 } },
                    React.createElement(react_router_dom_1.Switch, null,
                        pathname === '/' && React.createElement(react_router_dom_1.Redirect, { from: "/", to: "/home" }),
                        router_config_1.appRouters
                            .filter(function (item) { return !item.isLayout; })
                            .map(function (route, index) { return (React.createElement(react_router_dom_1.Route, { exact: true, key: index, path: route.path, render: function (props) { return React.createElement(ProtectedRoute_1["default"], { component: route.component, permission: route.permission }); } })); }),
                        pathname !== '/' && React.createElement(NotFoundRoute_1["default"], null))),
                React.createElement(Footer_1["default"], null))));
        return React.createElement(react_document_title_1["default"], { title: utils_1["default"].getPageTitle(pathname) }, layout);
    };
    return AppLayout;
}(React.Component));
exports["default"] = AppLayout;
