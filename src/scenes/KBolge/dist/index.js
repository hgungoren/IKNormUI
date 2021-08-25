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
/* eslint-disable */
require("./index.less");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var abpUtility_1 = require("../../lib/abpUtility");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var KCartList_1 = require("../../components/KCartList");
var icons_1 = require("@ant-design/icons");
var createKBolgeNorm_1 = require("./components/createKBolgeNorm");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var antd_1 = require("antd");
var bolgeTip_1 = require("../../services/kBolge/dto/bolgeTip");
var Search = antd_1.Input.Search;
var confirm = antd_1.Modal.confirm;
var KBolge = /** @class */ (function (_super) {
    __extends(KBolge, _super);
    function KBolge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = React.createRef();
        _this.state = {
            id: '0',
            normId: '0',
            userId: '0',
            subeAdi: '',
            skipCount: 0,
            totalSize: 0,
            subeObjId: '0',
            cardLoading: true,
            maxResultCount: 5,
            searchFilter: '',
            modalVisible: false,
            filter: { offset: 0, limit: 5, current: 0 }
        };
        _this.kPosizyonKontrol = function (key) {
            _this.getKSubeNorms();
            var form = _this.formRef.current;
            if (_this.props.kSubeNormStore.norms.items.filter(function (x) { return x.pozisyon === key; }).length > 0) {
                antd_1.message.error({
                    content: abpUtility_1.L('UniqSelect'),
                    style: {
                        marginTop: '12vh'
                    }
                });
                form.resetFields();
            }
        };
        _this.openNotificationWithIcon = function (type) {
            antd_1.notification[type]({
                message: type === "success" ? abpUtility_1.L('NormCreateNotificationMessageTitle') : abpUtility_1.L('NormRejectNotificationMessageTitle'),
                description: type === "success" ? abpUtility_1.L('NormCreateNotificationMessageDescription') : abpUtility_1.L('NormCreateNotificationMessageDescription'),
                duration: 3
            });
        };
        _this.permissionNotification = function (type) {
            antd_1.notification[type]({
                message: abpUtility_1.L('YouAreNotAuthorizedToAddRecordsTitle'),
                description: abpUtility_1.L('YouAreNotAuthorizedToAddRecordsDescription'),
                duration: 3
            });
        };
        _this.kSubeNormCreate = function () {
            var form = _this.formRef.current;
            form.validateFields()
                .then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.state.normId === '0')) return [3 /*break*/, 4];
                            if (!abpUtility_1.isGranted('kbolge.norm.create')) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.props.kSubeNormStore.create(values)];
                        case 1:
                            _a.sent();
                            this.openNotificationWithIcon('success');
                            return [3 /*break*/, 3];
                        case 2:
                            this.permissionNotification('warning');
                            _a.label = 3;
                        case 3: return [3 /*break*/, 7];
                        case 4:
                            if (!abpUtility_1.isGranted('kbolge.norm.edit')) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.props.kSubeNormStore.update(__assign(__assign({}, values), { id: this.state.normId }))];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            this.permissionNotification('warning');
                            _a.label = 7;
                        case 7:
                            form.resetFields();
                            return [4 /*yield*/, this.getKSubeNorms()];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        _this.kSubeNormEdit = function (input) {
            _this.props.kSubeNormStore.get(input);
            var form = _this.formRef.current;
            _this.setState({ normId: input.id });
            setTimeout(function () {
                form.setFieldsValue(__assign({}, _this.props.kSubeNormStore.editNorm));
            }, 200);
        };
        _this.kSubeNormDelete = function (input) {
            var self = _this;
            confirm({
                okText: abpUtility_1.L('Yes'),
                cancelText: abpUtility_1.L('No'),
                title: abpUtility_1.L('ConfirmDelete'),
                onOk: function () {
                    self.getKSubeNorms();
                    self.props.kSubeNormStore["delete"](input);
                    self.getKSubeNorms();
                },
                onCancel: function () {
                    console.log('Cancel');
                }
            });
        };
        _this.handleSearch = function (value) {
            _this.setState({ searchFilter: value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); });
        };
        _this.handlePagination = function (pagination) {
            var filter = _this.state.filter;
            var pageSize = pagination.pageSize, current = pagination.current;
            _this.setState({
                filter: __assign(__assign({}, filter), { current: current, limit: pageSize })
            });
        };
        return _this;
    }
    KBolge.prototype.getKSubeNorms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeNormStore.getAllNorms({
                            keyword: '',
                            skipCount: 0,
                            id: this.state.subeObjId,
                            maxResultCount: 5
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.getNormRequests = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getMaxAll({
                            maxResultCount: 100000,
                            skipCount: 0,
                            keyword: '',
                            id: '0',
                            bolgeId: '0',
                            type: 'bolge'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.getNormRequestsAllCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getMaxAllCount({
                            maxResultCount: 100000,
                            skipCount: 0,
                            keyword: '',
                            id: '0',
                            bolgeId: '0',
                            type: 'bolge'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.getNormCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeNormStore.getNormsCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.getEmployeeCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kPersonelStore.getEmployeesCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.getNormCountById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeNormStore.getNormCount()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    KBolge.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kBolgeStore.getAll({
                            maxResultCount: this.state.maxResultCount,
                            skipCount: this.state.skipCount,
                            keyword: this.state.searchFilter
                        })];
                    case 1:
                        _a.sent();
                        setTimeout(function () { return _this.setState({ cardLoading: false }); }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.getPosition = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kInkaLookUpTableStore
                            .getAll({
                            maxResultCount: 1000,
                            keyword: key,
                            skipCount: 0
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.createOrUpdateModalOpen = function (tip, id, subeAdi) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        (_a = this.formRef.current) === null || _a === void 0 ? void 0 : _a.resetFields();
                        return [4 /*yield*/, this.setState({ subeObjId: id, subeAdi: subeAdi })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getPosition(tip)];
                    case 2:
                        _b.sent();
                        if (!abpUtility_1.isGranted('kbolge.norm.view')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getKSubeNorms()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        this.setState({ modalVisible: !this.state.modalVisible });
                        return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.setPageState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ id: this.props["match"].params["id"] });
                return [2 /*return*/];
            });
        });
    };
    KBolge.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setPageState()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAll()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getEmployeeCount()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getNormCount()];
                    case 4:
                        _a.sent();
                        if (!(abpUtility_1.isGranted('knorm.getcancelednormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.getacceptednormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.getpendingnormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.gettotalnormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.getcancelednormfillrequest') ||
                            abpUtility_1.isGranted('knorm.getacceptednormfillrequest') ||
                            abpUtility_1.isGranted('knorm.getpendingnormfillrequest') ||
                            abpUtility_1.isGranted('knorm.gettotalnormfillingrequest'))) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getNormRequests()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.getNormRequestsAllCount()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    KBolge.prototype.render = function () {
        var _this = this;
        var _a = this.state, filter = _a.filter, totalSize = _a.totalSize;
        var tablePagination = {
            pageSize: filter.limit,
            current: filter.current || 1,
            total: totalSize,
            locale: { items_per_page: abpUtility_1.L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true
        };
        var cardLoading = this.state.cardLoading;
        var kBolge = this.props.kBolgeStore.kBolge;
        var normCount = this.props.kSubeNormStore.normCount;
        var kPersonelCount = this.props.kPersonelStore.kPersonelCount;
        var positions = this.props.kInkaLookUpTableStore.positions;
        var _b = this.props.kNormStore, getTotalNormUpdateRequestCount = _b.getTotalNormUpdateRequestCount, getPendingNormFillRequestCount = _b.getPendingNormFillRequestCount, getTotalNormFillingRequestCount = _b.getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount = _b.getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount = _b.getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount = _b.getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount = _b.getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount = _b.getCanceledNormUpdateRequestCount;
        var columns = [
            { title: abpUtility_1.L('table.area.name'), dataIndex: 'adi', key: 'adi', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L('table.area.type'), dataIndex: 'tip', key: 'tip', width: 150, render: function (text) { return React.createElement("div", null, bolgeTip_1["default"][text]); } },
            { title: abpUtility_1.L('table.area.employeecount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L('table.area.normcount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L('table.area.normgap'), dataIndex: 'normEksigi', key: 'normEksigi', width: 150, render: function (text) { return React.createElement("div", null, text); } },
            {
                title: abpUtility_1.L('Actions'),
                width: 150,
                render: function (text, bolge) { return (React.createElement("div", null,
                    React.createElement(antd_1.Dropdown, { trigger: ['click'], overlay: React.createElement(antd_1.Menu, null,
                            abpUtility_1.isGranted('kbolge.detail') && (React.createElement(antd_1.Menu.Item, null,
                                " ",
                                React.createElement(react_router_dom_1.Link, { to: { pathname: "/ksubedetay/" + bolge.objId, state: { subeAdi: bolge.adi } } },
                                    " ",
                                    abpUtility_1.L('UnitDetail'),
                                    " "),
                                " ")),
                            abpUtility_1.isGranted('kbolge.branches') && (React.createElement(antd_1.Menu.Item, { key: "/ksube" },
                                " ",
                                React.createElement(react_router_dom_1.Link, { to: { pathname: "/ksube/" + bolge.objId, state: { name: bolge.adi, tipTur: bolge.tipTur, tip: bolge.tip } } },
                                    " ",
                                    abpUtility_1.L('Branches'),
                                    " "),
                                " ")),
                            abpUtility_1.isGranted('kbolge.norm.operation') && (React.createElement(antd_1.Menu.Item, null,
                                " ",
                                React.createElement(react_router_dom_1.Link, { to: '#', onClick: function () { return _this.createOrUpdateModalOpen(bolge.tip, bolge.objId, bolge.adi); } },
                                    " ",
                                    abpUtility_1.L('NormCreate'),
                                    " "),
                                " "))), placement: "bottomLeft" },
                        React.createElement(antd_1.Button, { type: "primary", icon: React.createElement(icons_1.SettingOutlined, null) }, abpUtility_1.L('Actions'))))); }
            },
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Card, { style: { marginBottom: 20 } },
                React.createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: React.createElement(antd_1.Breadcrumb, null,
                        React.createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            React.createElement(react_router_dom_1.Link, { to: "/dashboard" }, abpUtility_1.L('Dashboard')),
                            "  "),
                        React.createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            abpUtility_1.L('RegionalOffices'),
                            " ")) })),
            React.createElement(KCartList_1["default"], { type: "bolge", subeObjId: 0, normCount: normCount, bolgeId: this.state.id, cardLoading: cardLoading, kPersonelCount: kPersonelCount, kNormStore: this.props.kNormStore, kNormDetailStore: this.props.kNormDetailStore, getTotalNormUpdateRequestCount: getTotalNormUpdateRequestCount, getPendingNormFillRequestCount: getPendingNormFillRequestCount, getTotalNormFillingRequestCount: getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount: getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount: getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount: getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount: getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount: getCanceledNormUpdateRequestCount }),
            this.isGranted('kbolge.areas.list') && React.createElement(antd_1.Card, { hoverable: true },
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { xs: { span: 6, offset: 0 }, sm: { span: 6, offset: 0 }, md: { span: 6, offset: 0 }, lg: { span: 4, offset: 0 }, xl: { span: 4, offset: 0 }, xxl: { span: 4, offset: 0 } },
                        ' ',
                        React.createElement("h2", null, abpUtility_1.L('Areas')))),
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { sm: { span: 10, offset: 0 } },
                        React.createElement(Search, { placeholder: this.L('Filter'), onSearch: this.handleSearch }))),
                React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                        React.createElement(antd_1.Table, { locale: { emptyText: abpUtility_1.L('NoData') }, bordered: false, columns: columns, onChange: this.handlePagination, rowKey: function (record) { return record.objId.toString(); }, loading: kBolge === undefined ? true : false, dataSource: kBolge === undefined ? [] : kBolge.items, pagination: tablePagination })))),
            React.createElement(createKBolgeNorm_1["default"], { modalType: 'create', formRef: this.formRef, positionSelect: positions, subeObjId: this.state.subeObjId, visible: this.state.modalVisible, kSubeNormEdit: this.kSubeNormEdit, kSubeNormCreate: this.kSubeNormCreate, kSubeNormDelete: this.kSubeNormDelete, kPosizyonKontrol: this.kPosizyonKontrol, kSubeNormStore: this.props.kSubeNormStore, kSubeNorms: this.props.kSubeNormStore.norms, onCancel: function () { _this.setState({ modalVisible: false }); } })));
    };
    KBolge = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KBolgeStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KPersonelStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KSubeNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormDetailStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KInkaLookUpTableStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], KBolge);
    return KBolge;
}(AppComponentBase_1["default"]));
exports["default"] = KBolge;
