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
/* eslint-disable */
var react_1 = require("react");
var row_1 = require("antd/lib/row");
var react_router_dom_1 = require("react-router-dom");
var abpUtility_1 = require("../../lib/abpUtility");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var antd_1 = require("antd");
var HiearchyTransfer_1 = require("./components/HiearchyTransfer");
var HiearchySortable_1 = require("./components/HiearchySortable");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var react_uuid_1 = require("react-uuid");
var Transfer = /** @class */ (function (_super) {
    __extends(Transfer, _super);
    function Transfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { keys: [] };
        _this.setSeletedItems = function (value) {
            console.log('Transfer -> Values => ', value);
            _this.setState({ keys: value });
            setTimeout(function () { console.log('this.state.keys -> ', _this.state.keys); }, 200);
        };
        return _this;
    }
    Transfer.prototype.render = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(antd_1.Card, { style: { marginBottom: 20 } },
                react_1["default"].createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: react_1["default"].createElement(antd_1.Breadcrumb, null,
                        react_1["default"].createElement(antd_1.Breadcrumb.Item, null,
                            this.isGranted('items.dashboard.view') ? (react_1["default"].createElement(react_router_dom_1.Link, { to: "/dashboard" }, abpUtility_1.L('Dashboard'))) : (react_1["default"].createElement(react_router_dom_1.Link, { to: "/home" }, abpUtility_1.L('Dashboard'))),
                            ' '),
                        react_1["default"].createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            abpUtility_1.L('pages.hierarchy'),
                            " ")) })),
            react_1["default"].createElement(row_1["default"], { gutter: [16, 16] },
                react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 }, sm: { span: 12, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 }, xl: { span: 12, offset: 0 }, xxl: { span: 12, offset: 0 } },
                    react_1["default"].createElement(antd_1.Card, { hoverable: true },
                        react_1["default"].createElement(HiearchyTransfer_1["default"], { setSeletedItems: this.setSeletedItems, kHierarchyStore: this.props.kHierarchyStore, sourceTitle: abpUtility_1.L('Positions'), targetTitle: abpUtility_1.L('SelectedPositions') }))),
                react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 }, sm: { span: 12, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 }, xl: { span: 12, offset: 0 }, xxl: { span: 12, offset: 0 } },
                    react_1["default"].createElement(antd_1.Card, { hoverable: true },
                        react_1["default"].createElement(HiearchySortable_1["default"], { key: react_uuid_1["default"](), keys: this.state.keys, kHierarchyStore: this.props.kHierarchyStore }))))));
    };
    Transfer = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KHierarchyStore),
        mobx_react_1.observer
    ], Transfer);
    return Transfer;
}(AppComponentBase_1["default"]));
exports["default"] = Transfer;
