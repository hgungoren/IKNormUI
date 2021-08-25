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
require("./UserLayout.less");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var react_document_title_1 = require("react-document-title");
var Footer_1 = require("../Footer");
var LanguageSelect_1 = require("../LanguageSelect");
var router_config_1 = require("../Router/router.config");
var utils_1 = require("../../utils/utils");
var UserLayout = /** @class */ (function (_super) {
    __extends(UserLayout, _super);
    function UserLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLayout.prototype.render = function () {
        var pathname = this.props.location.pathname;
        return (React.createElement(react_document_title_1["default"], { title: utils_1["default"].getPageTitle(pathname) },
            React.createElement(antd_1.Col, { className: "container" },
                React.createElement("div", { style: { height: 'calc(100vh - 55px)' } },
                    React.createElement("div", { className: 'lang' },
                        React.createElement(LanguageSelect_1["default"], null)),
                    React.createElement(react_router_dom_1.Switch, null,
                        router_config_1.userRouter
                            .filter(function (item) { return !item.isLayout; })
                            .map(function (item, index) { return (React.createElement(react_router_dom_1.Route, { key: index, path: item.path, component: item.component, exact: item.exact })); }),
                        React.createElement(react_router_dom_1.Redirect, { from: "/user", to: "/user/login" }))),
                React.createElement(Footer_1["default"], null))));
    };
    return UserLayout;
}(React.Component));
exports["default"] = UserLayout;
