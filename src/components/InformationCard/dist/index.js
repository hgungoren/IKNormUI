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
exports.__esModule = true;
/*eslint-disable */
require("./index.less");
var antd_1 = require("antd");
var React = require("react");
var Meta_1 = require("antd/lib/card/Meta");
var mobx_react_1 = require("mobx-react");
var Loading_1 = require("../../components/Loading");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var icons_1 = require("@ant-design/icons");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var InformationCart = /** @class */ (function (_super) {
    __extends(InformationCart, _super);
    function InformationCart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            title: '',
            userSurname: '',
            emailAddress: '',
            userName: '',
            isLoading: true
        };
        return _this;
    }
    InformationCart.prototype.componentDidMount = function () {
        var _this = this;
        var _a;
        var store = (_a = this.props.sessionStore) === null || _a === void 0 ? void 0 : _a.currentLogin.user;
        setTimeout(function () {
            var _a, _b, _c, _d;
            _this.setState({
                title: (_a = store === null || store === void 0 ? void 0 : store.title) !== null && _a !== void 0 ? _a : '',
                userName: (_b = store === null || store === void 0 ? void 0 : store.userName) !== null && _b !== void 0 ? _b : '',
                userSurname: (_c = store === null || store === void 0 ? void 0 : store.surname) !== null && _c !== void 0 ? _c : '',
                emailAddress: (_d = store === null || store === void 0 ? void 0 : store.emailAddress) !== null && _d !== void 0 ? _d : ''
            });
            _this.setState({ isLoading: false });
        }, 500);
    };
    InformationCart.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.state.isLoading ? React.createElement(Loading_1["default"], null) :
            React.createElement(Meta_1["default"], { avatar: React.createElement(antd_1.Avatar, { size: 100, icon: React.createElement(icons_1.AntDesignOutlined, null) }), title: React.createElement("p", { className: 'metaUserName' },
                    this.state.userName,
                    " ",
                    this.state.userSurname), description: React.createElement(React.Fragment, null,
                    React.createElement("p", null, this.state.title),
                    React.createElement("p", null, this.state.emailAddress)) })));
    };
    InformationCart = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore, storeIdentifier_1["default"].AuthenticationStore),
        mobx_react_1.observer
    ], InformationCart);
    return InformationCart;
}(AppComponentBase_1["default"]));
exports["default"] = InformationCart;
