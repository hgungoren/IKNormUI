"use strict";
/*eslint-disable */
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
exports.Home = void 0;
var React = require("react");
var antd_1 = require("antd");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var mobx_react_1 = require("mobx-react");
// import NotificationStore from '../../stores/notificationStore';
var InformationCard_1 = require("../../components/InformationCard");
// @inject(Stores.NotificationStore)
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        abp.event.on('knorm_added', function (userNotification) {
            alert('saf');
            alert(userNotification);
        });
        return (React.createElement(antd_1.Row, { gutter: 16 },
            React.createElement(antd_1.Col, { xs: { span: 10, offset: 0 }, sm: { span: 10, offset: 0 }, md: { span: 10, offset: 0 }, lg: { span: 10, offset: 0 }, xl: { span: 10, offset: 0 }, xxl: { span: 10, offset: 0 } },
                React.createElement(antd_1.Card, { hoverable: true },
                    React.createElement(InformationCard_1["default"], null))),
            React.createElement(antd_1.Col, { xs: { span: 14, offset: 0 }, sm: { span: 14, offset: 0 }, md: { span: 14, offset: 0 }, lg: { span: 14, offset: 0 }, xl: { span: 14, offset: 0 }, xxl: { span: 14, offset: 0 } },
                React.createElement(antd_1.Card, { hoverable: true }))));
    };
    Home = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], Home);
    return Home;
}(React.Component));
exports.Home = Home;
exports["default"] = Home;
