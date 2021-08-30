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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/*eslint-disable */
var React = require("react");
var antd_1 = require("antd");
var mobx_react_1 = require("mobx-react");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var createOrUpdateRole_1 = require("./components/createOrUpdateRole");
var abpUtility_1 = require("../../lib/abpUtility");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var icons_1 = require("@ant-design/icons");
var RoleDetailDrawer_1 = require("../../components/RoleDetailDrawer");
var confirm = antd_1.Modal.confirm;
var Search = antd_1.Input.Search;
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = React.createRef();
        _this.state = {
            modalVisible: false,
            maxResultCount: 10,
            skipCount: 0,
            roleId: 0,
            filter: '',
            drawerVisible: false
        };
        _this.handleTableChange = function (pagination) {
            _this.setState({ skipCount: (pagination.current - 1) * _this.state.maxResultCount }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); });
        };
        _this.Modal = function () {
            _this.setState({
                modalVisible: !_this.state.modalVisible
            });
        };
        _this.handleCreate = function () {
            var form = _this.formRef.current;
            form.validateFields().then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.state.roleId === 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.props.roleStore.create(values)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.props.roleStore.update(__assign({ id: this.state.roleId }, values))];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4: return [4 /*yield*/, this.getAll()];
                        case 5:
                            _a.sent();
                            this.setState({ modalVisible: false });
                            form.resetFields();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        _this.handleSearch = function (value) {
            _this.setState({ filter: value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); });
        };
        _this.showDrawer = function (entityDto) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.roleStore.getRoleForEdit(entityDto)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.props.roleStore.getAllPermissions()];
                    case 2:
                        _a.sent();
                        this.setState({ drawerVisible: true, roleId: entityDto.id });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.hideDrawer = function (entityDto) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ drawerVisible: false });
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Role.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Role.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.roleStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Role.prototype.createOrUpdateModalOpen = function (entityDto) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(entityDto.id === 0)) return [3 /*break*/, 2];
                        this.props.roleStore.createRole();
                        return [4 /*yield*/, this.props.roleStore.getAllPermissions()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.props.roleStore.getRoleForEdit(entityDto)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.props.roleStore.getAllPermissions()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.setState({ roleId: entityDto.id });
                        this.Modal();
                        setTimeout(function () {
                            var _a;
                            (_a = _this.formRef.current) === null || _a === void 0 ? void 0 : _a.setFieldsValue(__assign(__assign({}, _this.props.roleStore.roleEdit.role), { grantedPermissions: _this.props.roleStore.roleEdit.grantedPermissionNames }));
                        }, 100);
                        return [2 /*return*/];
                }
            });
        });
    };
    Role.prototype["delete"] = function (input) {
        var self = this;
        confirm({
            okText: abpUtility_1.L('Yes'),
            cancelText: abpUtility_1.L('No'),
            title: abpUtility_1.L('ConfirmDelete'),
            onOk: function () {
                self.props.roleStore["delete"](input);
            },
            onCancel: function () { }
        });
    };
    Role.prototype.render = function () {
        var _this = this;
        var drawerVisible = this.state.drawerVisible;
        var _a = this.props.roleStore, allPermissions = _a.allPermissions, roles = _a.roles;
        var columns = [
            { title: abpUtility_1.L('table.role.rolename'), dataIndex: 'name', key: 'name', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L('table.role.displayname'), dataIndex: 'displayName', key: 'displayName', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L('table.role.description'), dataIndex: 'description', key: 'description', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            {
                title: abpUtility_1.L('table.role.transactions'),
                width: 150,
                render: function (text, item) { return (React.createElement("div", null,
                    React.createElement(antd_1.Dropdown, { trigger: ['click'], overlay: React.createElement(antd_1.Menu, null,
                            abpUtility_1.isGranted('role.create') && React.createElement(antd_1.Menu.Item, { onClick: function () { return _this.showDrawer({ id: item.id }); } }, abpUtility_1.L('AddRole')),
                            abpUtility_1.isGranted('role.update') && React.createElement(antd_1.Menu.Item, { onClick: function () { return _this.createOrUpdateModalOpen({ id: item.id }); } }, abpUtility_1.L('Edit')),
                            abpUtility_1.isGranted('role.delete') && React.createElement(antd_1.Menu.Item, { onClick: function () { return _this["delete"]({ id: item.id }); } }, abpUtility_1.L('Delete'))), placement: "bottomLeft" },
                        React.createElement(antd_1.Button, { type: "primary", icon: React.createElement(icons_1.SettingOutlined, null) },
                            " ",
                            abpUtility_1.L('Actions'),
                            " ")))); }
            },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Card, null,
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { xs: { span: 4, offset: 0 }, sm: { span: 4, offset: 0 }, md: { span: 4, offset: 0 }, lg: { span: 2, offset: 0 }, xl: { span: 2, offset: 0 }, xxl: { span: 2, offset: 0 } },
                        React.createElement("h2", null, abpUtility_1.L('Roles'))),
                    React.createElement(antd_1.Col, { xs: { span: 14, offset: 0 }, sm: { span: 15, offset: 0 }, md: { span: 15, offset: 0 }, lg: { span: 1, offset: 21 }, xl: { span: 1, offset: 21 }, xxl: { span: 1, offset: 21 } }, abpUtility_1.isGranted('role.create') && React.createElement(antd_1.Button, { type: "primary", shape: "circle", icon: React.createElement(icons_1.PlusOutlined, null), onClick: function () { return _this.createOrUpdateModalOpen({ id: 0 }); } }))),
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { sm: { span: 10, offset: 0 } },
                        React.createElement(Search, { placeholder: abpUtility_1.L('Filter'), onSearch: this.handleSearch }))),
                React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                        React.createElement(antd_1.Table, { locale: { emptyText: abpUtility_1.L('NoData') }, rowKey: "id", pagination: { pageSize: this.state.maxResultCount, total: roles === undefined ? 0 : roles.totalCount, defaultCurrent: 1 }, columns: columns, loading: roles === undefined ? true : false, dataSource: roles === undefined ? [] : roles.items, onChange: this.handleTableChange }))),
                React.createElement(createOrUpdateRole_1["default"], { visible: this.state.modalVisible, onCancel: function () {
                        return _this.setState({
                            modalVisible: false
                        });
                    }, modalType: this.state.roleId === 0 ? 'edit' : 'create', onOk: this.handleCreate, permissions: allPermissions, roleStore: this.props.roleStore, formRef: this.formRef })),
            React.createElement(RoleDetailDrawer_1["default"], { visible: drawerVisible, showOrHideDrawer: this.hideDrawer, permissions: allPermissions, roleStore: this.props.roleStore })));
    };
    Role = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].RoleStore),
        mobx_react_1.observer
    ], Role);
    return Role;
}(AppComponentBase_1["default"]));
exports["default"] = Role;