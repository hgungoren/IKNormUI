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
require("./index.less");
var react_1 = require("react");
var react_uuid_1 = require("react-uuid");
var antd_1 = require("antd");
require("react-sortable-tree/style.css");
var abpUtility_1 = require("../../lib/abpUtility");
var mobx_react_1 = require("mobx-react");
var react_sortable_tree_1 = require("react-sortable-tree");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var hierarchyDrawer_1 = require("./components/hierarchyDrawer");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var react_router_dom_1 = require("react-router-dom");
var Hierarchy = /** @class */ (function (_super) {
    __extends(Hierarchy, _super);
    function Hierarchy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            nodeKey: 0,
            visible: false,
            node: {},
            treeData: [],
            alertTyp: 'warning'
        };
        _this.onDragStateChanged = function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        _this.onMoveNode = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var ids;
            return __generator(this, function (_a) {
                //  if(data.nextParentNode === null || )
                if (data.nextParentNode !== null) {
                    ids = data.nextParentNode.children.map(function (x) { return x.id; });
                    this.props.kHierarchyStore.updateOrderNodes(ids);
                }
                return [2 /*return*/];
            });
        }); };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kHierarchyStore.getUnit()];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            _this.setState({
                                treeData: _this.props.kHierarchyStore.units.items.map(function (x) { return ({
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
                                            mailStatusChange: n.mailStatusChange,
                                            pushNotificationWeb: n.pushNotificationWeb,
                                            pushNotificationWebStatusChange: n.pushNotificationWebStatusChange,
                                            pushNotificationPhone: n.pushNotificationPhone,
                                            pushNotificationPhoneStatusChange: n.pushNotificationPhoneStatusChange,
                                            active: n.active,
                                            canTerminate: n.canTerminate,
                                            positionId: n.positionId
                                        }); })
                                    }); })
                                }); })
                            });
                        }, 500);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onSwitchChange = function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ alertTyp: 'warning' });
                this.props.kHierarchyStore.update(data);
                return [2 /*return*/];
            });
        }); };
        _this.onPassive = function (position) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kHierarchyStore.updateToPassive({ positionId: position });
                return [2 /*return*/];
            });
        }); };
        _this.drawerOnClose = function () {
            _this.setState({ visible: false });
        };
        _this.drawerOnOpen = function (node) {
            _this.setState({
                visible: true,
                node: node,
                nodeKey: node.id
            });
        };
        return _this;
    }
    Hierarchy.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(antd_1.Card, { style: { marginBottom: 20 } },
                react_1["default"].createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: react_1["default"].createElement(antd_1.Breadcrumb, null,
                        react_1["default"].createElement(antd_1.Breadcrumb.Item, null,
                            this.isGranted('items.dashboard.view') ? react_1["default"].createElement(react_router_dom_1.Link, { to: "/dashboard" }, abpUtility_1.L('Dashboard')) : react_1["default"].createElement(react_router_dom_1.Link, { to: "/home" }, abpUtility_1.L('Dashboard')),
                            "  "),
                        react_1["default"].createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            abpUtility_1.L('pages.hierarchy'),
                            " ")) })),
            react_1["default"].createElement("div", { style: { height: 700 } },
                react_1["default"].createElement(react_sortable_tree_1["default"], { onMoveNode: this.onMoveNode, onDragStateChanged: this.onDragStateChanged, key: react_uuid_1["default"](), onChange: function (treeData) { return _this.setState({ treeData: treeData }); }, treeData: this.state.treeData, generateNodeProps: function (_a) {
                        var node = _a.node, path = _a.path;
                        return ({
                            canDrag: node.subtitle === 'unit' ? false : node.subtitle === 'position' ? false : true,
                            buttons: node.subtitle === 'title'
                                ? [react_1["default"].createElement(antd_1.Button, { onClick: function () { return _this.drawerOnOpen(node); } }, abpUtility_1.L('Operations'))]
                                : []
                        });
                    } }),
                react_1["default"].createElement(hierarchyDrawer_1.HierarchyDrawer, { node: this.state.node, key: this.state.nodeKey, visible: this.state.visible, onClose: this.drawerOnClose, onSwitchChange: this.onSwitchChange, alertTyp: "info", kHierarchyStore: this.props.kHierarchyStore }))));
    };
    Hierarchy = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KHierarchyStore),
        mobx_react_1.observer
    ], Hierarchy);
    return Hierarchy;
}(AppComponentBase_1["default"]));
exports["default"] = Hierarchy;
