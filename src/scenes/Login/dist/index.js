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
require("./index.less");
var React = require("react");
var index_validation_1 = require("./index.validation");
var abpUtility_1 = require("../../lib/abpUtility");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var tenantAvailabilityState_1 = require("../../services/account/dto/tenantAvailabilityState");
var FormItem = antd_1.Form.Item;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = React.createRef();
        _this.changeTenant = function () { return __awaiter(_this, void 0, void 0, function () {
            var tenancyName, loginModel, tenant;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tenancyName = (_a = this.formRef.current) === null || _a === void 0 ? void 0 : _a.getFieldValue('tenancyName');
                        loginModel = this.props.authenticationStore.loginModel;
                        if (!!tenancyName) return [3 /*break*/, 1];
                        abp.multiTenancy.setTenantIdCookie(undefined);
                        window.location.href = '/';
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, this.props.accountStore.isTenantAvailable(tenancyName)];
                    case 2:
                        _b.sent();
                        tenant = this.props.accountStore.tenant;
                        switch (tenant.state) {
                            case tenantAvailabilityState_1["default"].Available:
                                abp.multiTenancy.setTenantIdCookie(tenant.tenantId);
                                loginModel.tenancyName = tenancyName;
                                loginModel.toggleShowModal();
                                window.location.href = '/';
                                return [2 /*return*/];
                            case tenantAvailabilityState_1["default"].InActive:
                                antd_1.Modal.error({ title: abpUtility_1.L('Error'), content: abpUtility_1.L('TenantIsNotActive') });
                                break;
                            case tenantAvailabilityState_1["default"].NotFound:
                                antd_1.Modal.error({ title: abpUtility_1.L('Error'), content: abpUtility_1.L('ThereIsNoTenantDefinedWithName{0}', tenancyName) });
                                break;
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
            var loginModel, state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginModel = this.props.authenticationStore.loginModel;
                        return [4 /*yield*/, this.props.authenticationStore.login(values)];
                    case 1:
                        _a.sent();
                        sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
                        state = this.props.location.state;
                        window.location = state ? state.from.pathname : '/';
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Login.prototype.render = function () {
        var _a;
        var from = (this.props.location.state || { from: { pathname: '/' } }).from;
        if (this.props.authenticationStore.isAuthenticated)
            return React.createElement(react_router_dom_1.Redirect, { to: from });
        var loginModel = this.props.authenticationStore.loginModel;
        return (React.createElement(antd_1.Form, { className: "", onFinish: this.handleSubmit, ref: this.formRef },
            React.createElement(antd_1.Row, { style: { marginTop: 150 } },
                React.createElement(antd_1.Modal, { visible: loginModel.showModal, onCancel: loginModel.toggleShowModal, onOk: this.changeTenant, title: abpUtility_1.L('ChangeTenant'), okText: abpUtility_1.L('OK'), cancelText: abpUtility_1.L('Cancel') },
                    React.createElement(antd_1.Row, null,
                        React.createElement(antd_1.Col, { span: 8, offset: 8 },
                            React.createElement("h3", null, abpUtility_1.L('TenancyName'))),
                        React.createElement(antd_1.Col, null,
                            React.createElement(FormItem, { name: 'tenancyName' },
                                React.createElement(antd_1.Input, { placeholder: abpUtility_1.L('TenancyName'), prefix: React.createElement(icons_1.UserOutlined, { style: { color: 'rgba(0,0,0,.25)' } }), size: "large" })),
                            !((_a = this.formRef.current) === null || _a === void 0 ? void 0 : _a.getFieldValue('tenancyName')) ? React.createElement("div", null, abpUtility_1.L('LeaveEmptyToSwitchToHost')) : '')))),
            React.createElement(antd_1.Row, { style: { marginTop: 10 } },
                React.createElement(antd_1.Col, { span: 8, offset: 8 },
                    React.createElement(antd_1.Card, null,
                        React.createElement("div", { style: { textAlign: 'center' } },
                            React.createElement("h3", null, abpUtility_1.L('WellcomeMessage'))),
                        React.createElement(FormItem, { name: 'userNameOrEmailAddress', rules: index_validation_1["default"].userNameOrEmailAddress },
                            React.createElement(antd_1.Input, { placeholder: abpUtility_1.L('UserNameOrEmail'), prefix: React.createElement(icons_1.UserOutlined, { style: { color: 'rgba(0,0,0,.25)' } }), size: "large" })),
                        React.createElement(FormItem, { name: 'password', rules: index_validation_1["default"].password },
                            React.createElement(antd_1.Input, { placeholder: abpUtility_1.L('Password'), prefix: React.createElement(icons_1.LockOutlined, { style: { color: 'rgba(0,0,0,.25)' } }), type: "password", size: "large" })),
                        React.createElement(antd_1.Row, null,
                            React.createElement(antd_1.Col, { span: 24 },
                                React.createElement(antd_1.Button, { style: { backgroundColor: '#f5222d', color: 'white' }, block: true, htmlType: 'submit', danger: true }, abpUtility_1.L('LogIn')))))))));
    };
    Login = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], Login);
    return Login;
}(React.Component));
exports["default"] = Login;
