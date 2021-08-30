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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var mobx_react_1 = require("mobx-react");
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
        _this.hideDrawer = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ drawerVisible: false });
                return [2 /*return*/];
            });
        }); };
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
                    React.createElement(Header_1["default"], { notificationStore: this.props.notificationStore, sessionStore: this.props.sessionStore, accountStore: this.props.accountStore, authenticationStore: this.props.authenticationStore, collapsed: this.state.collapsed, toggle: this.toggle })),
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
    AppLayout = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].NotificationStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], AppLayout);
    return AppLayout;
}(React.Component));
exports["default"] = AppLayout;
