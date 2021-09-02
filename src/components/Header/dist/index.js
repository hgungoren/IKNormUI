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
exports.Header = void 0;
require("./index.less");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var abpUtility_1 = require("../../lib/abpUtility");
var LanguageSelect_1 = require("../LanguageSelect");
var user_png_1 = require("../../images/user.png");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var userDropdownMenu = (React.createElement(antd_1.Menu, null,
    React.createElement(antd_1.Menu.Item, { key: "2" },
        React.createElement(react_router_dom_1.Link, { to: "/logout" },
            React.createElement(icons_1.LogoutOutlined, null),
            React.createElement("span", null,
                " ",
                abpUtility_1.L('Logout'))))));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false,
            notificationCount: 0
        };
        _this.onNotificationHandler = function () {
            _this.setState({ visible: !_this.state.visible });
        };
        _this.hideDrawer = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ visible: false });
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Header.prototype.render = function () {
        var 
        // visible,
        notificationCount = this.state.notificationCount;
        return (React.createElement(antd_1.Row, { className: 'header-container' },
            React.createElement(antd_1.Col, { style: { textAlign: 'left' }, span: 12 }, this.props.collapsed ? (React.createElement(icons_1.MenuUnfoldOutlined, { className: "trigger", onClick: this.props.toggle })) : (React.createElement(icons_1.MenuFoldOutlined, { className: "trigger", onClick: this.props.toggle }))),
            React.createElement(antd_1.Col, { style: { padding: '0px 15px 0px 15px', textAlign: 'right' }, span: 12 },
                React.createElement(antd_1.Space, null,
                    React.createElement(antd_1.Badge, { count: notificationCount },
                        React.createElement(antd_1.Avatar, { size: "small", shape: "circle", alt: 'profile', icon: React.createElement(icons_1.BellOutlined, { onClick: this.onNotificationHandler }) })),
                    React.createElement(LanguageSelect_1["default"], null),
                    React.createElement(antd_1.Dropdown, { className: 'header-drop', overlay: userDropdownMenu, trigger: ['click'] },
                        React.createElement(antd_1.Avatar, { size: "small", shape: "circle", alt: 'profile', src: user_png_1["default"] }))))));
    };
    return Header;
}(React.Component));
exports.Header = Header;
exports["default"] = Header;
