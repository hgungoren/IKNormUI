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
var React = require("react");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var Meta_1 = require("antd/lib/card/Meta");
var InformationCart = /** @class */ (function (_super) {
    __extends(InformationCart, _super);
    function InformationCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InformationCart.prototype.componentDidMount = function () {
        var _a;
        var store = (_a = this.props.sessionStore) === null || _a === void 0 ? void 0 : _a.currentLogin.user;
        this.setState({
            title: (store === null || store === void 0 ? void 0 : store.title) !== undefined ? store === null || store === void 0 ? void 0 : store.title : '',
            emailAddress: (store === null || store === void 0 ? void 0 : store.emailAddress) !== undefined ? store === null || store === void 0 ? void 0 : store.emailAddress : ''
        });
    };
    InformationCart.prototype.render = function () {
        var _a, _b, _c, _d;
        return (React.createElement(React.Fragment, null,
            React.createElement(Meta_1["default"], { avatar: React.createElement(antd_1.Avatar, { size: 100, icon: React.createElement(icons_1.AntDesignOutlined, null) }), title: React.createElement("p", { className: 'metaUserName' },
                    ((_a = this.props.sessionStore) === null || _a === void 0 ? void 0 : _a.currentLogin.user.name) || '',
                    " ",
                    ((_b = this.props.sessionStore) === null || _b === void 0 ? void 0 : _b.currentLogin.user.surname) || ''), description: React.createElement(React.Fragment, null, React.createElement(React.Fragment, null,
                    React.createElement("p", null, ((_c = this.props.sessionStore) === null || _c === void 0 ? void 0 : _c.currentLogin.user.title) || ''),
                    React.createElement("p", null, ((_d = this.props.sessionStore) === null || _d === void 0 ? void 0 : _d.currentLogin.user.emailAddress) || ''))) })));
    };
    InformationCart = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], InformationCart);
    return InformationCart;
}(AppComponentBase_1["default"]));
exports["default"] = InformationCart;
