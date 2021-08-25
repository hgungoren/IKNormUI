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
/* eslint-disable */
require("react-sortable-tree/style.css");
require("./index.less");
var react_1 = require("react");
var react_uuid_1 = require("react-uuid");
var antd_1 = require("antd");
var mobx_react_1 = require("mobx-react");
var react_sortable_tree_1 = require("react-sortable-tree");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var Hierarchy = /** @class */ (function (_super) {
    __extends(Hierarchy, _super);
    function Hierarchy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { treeData: [] };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kHierarchyStore.getUnit()];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            var treeData = _this.props.kHierarchyStore.units.items.map(function (x) { return ({
                                id: x.id,
                                title: x.name,
                                expanded: false,
                                subtitle: 'unit',
                                children: x.positions.map(function (p) { return ({
                                    id: p.id,
                                    title: p.name,
                                    subtitle: 'position',
                                    children: p.nodes.map(function (n) { return ({
                                        id: n.id,
                                        title: n.title,
                                        subtitle: 'title',
                                        mail: n.mail,
                                        active: n.active,
                                        pushNotificationPhone: n.pushNotificationPhone,
                                        pushNotificationWeb: n.pushNotificationWeb,
                                        mailStatusChange: n.mailStatusChange,
                                        canTerminate: n.canTerminate
                                    }); })
                                }); })
                            }); });
                            _this.setState({ treeData: treeData });
                        }, 500);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onSwitchChange = function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kHierarchyStore.update(data);
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Hierarchy.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { style: { height: 700 } },
            react_1["default"].createElement(react_sortable_tree_1["default"], { key: react_uuid_1["default"](), onChange: function (treeData) { return _this.setState({ treeData: treeData }); }, treeData: this.state.treeData, generateNodeProps: function (_a) {
                    var node = _a.node, path = _a.path;
                    return ({
                        canDrag: node.subtitle === "unit" ? false : node.subtitle === "position" ? false : true,
                        buttons: node.subtitle === "title" ? [
                            react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: "Talep İsteği Geldiğinde Mail Gelsinmi", arrowPointAtCenter: true },
                                " ",
                                react_1["default"].createElement(antd_1.Switch, { onChange: function (x) { return _this.onSwitchChange({ id: node.id, status: x, type: 'Mail' }); }, defaultChecked: node.mail, checkedChildren: "Mail", unCheckedChildren: "Mail", className: 'switch-btn' })),
                            react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: "Talep \u0130ste\u011Fi Geldi\u011Finde Telefona Bildirim Gelsinmi", arrowPointAtCenter: true },
                                " ",
                                react_1["default"].createElement(antd_1.Switch, { onChange: function (x) { return _this.onSwitchChange({ id: node.id, status: x, type: 'PushNotificationPhone' }); }, defaultChecked: node.pushNotificationPhone, checkedChildren: "Telefon", unCheckedChildren: "Telefon", className: 'switch-btn' })),
                            react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: "Talep \u0130ste\u011Fi Geldi\u011Finde Web Bildirimi Gelsinmi", arrowPointAtCenter: true },
                                " ",
                                react_1["default"].createElement(antd_1.Switch, { onChange: function (x) { return _this.onSwitchChange({ id: node.id, status: x, type: 'PushNotificationWeb' }); }, defaultChecked: node.pushNotificationWeb, checkedChildren: "Web", unCheckedChildren: "Web", className: 'switch-btn' })),
                            react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: "Talep Durumu De\u011Fi\u015Fti\u011Finde Mail Gelsinmi", arrowPointAtCenter: true },
                                " ",
                                react_1["default"].createElement(antd_1.Switch, { onChange: function (x) { return _this.onSwitchChange({ id: node.id, status: x, type: 'MailStatusChange' }); }, defaultChecked: node.mailStatusChange, checkedChildren: "De\u011Fi\u015Fiklik", unCheckedChildren: "De\u011Fi\u015Fiklik", className: 'switch-btn' })),
                            react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: "Talebi Sonland\u0131rabilirmi", arrowPointAtCenter: true },
                                " ",
                                react_1["default"].createElement(antd_1.Switch, { onChange: function (x) { return _this.onSwitchChange({ id: node.id, status: x, type: 'CanTerminate' }); }, defaultChecked: node.canTerminate, checkedChildren: "Sonland\u0131r", unCheckedChildren: "Sonland\u0131r", className: 'switch-btn' })),
                            react_1["default"].createElement(antd_1.Tooltip, { placement: "topLeft", title: "Hiyerar\u015Fi Listesine Dahil Edilsinmi", arrowPointAtCenter: true },
                                " ",
                                react_1["default"].createElement(antd_1.Switch, { onChange: function (x) { return _this.onSwitchChange({ id: node.id, status: x, type: 'Active' }); }, defaultChecked: node.active, checkedChildren: "Aktif", unCheckedChildren: "Pasif", className: 'switch-btn' })),
                        ] : []
                    });
                } })));
    };
    Hierarchy = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KHierarchyStore),
        mobx_react_1.observer
    ], Hierarchy);
    return Hierarchy;
}(AppComponentBase_1["default"]));
exports["default"] = Hierarchy;
