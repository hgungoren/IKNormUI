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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/*eslint-disable */
require("./index.less");
var react_uuid_1 = require("react-uuid");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var abpUtility_1 = require("../../lib/abpUtility");
var talepTuru_1 = require("../../services/kNorm/dto/talepTuru");
var CreateNormForm_1 = require("../../components/CreateNormForm");
var normStatus_1 = require("../../services/kNorm/dto/normStatus");
var talepNedeni_1 = require("../../services/kNorm/dto/talepNedeni");
var talepDurumu_1 = require("../../services/kNorm/dto/talepDurumu");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var NormDetailTimeLine_1 = require("../../components/NormDetailTimeLine");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var Search = antd_1.Input.Search;
var KSubeDetay = /** @class */ (function (_super) {
    __extends(KSubeDetay, _super);
    function KSubeDetay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = React.createRef();
        _this.state = {
            detaillModalVisible: false,
            maxNormResultCount: 5,
            modalVisible: false,
            cardLoading: true,
            groupEmployee: {},
            maxResultCount: 5,
            skipNormCount: 0,
            normFilter: '',
            groupNorm: {},
            skipCount: 0,
            userId: 0,
            tip: '',
            id: '0',
            groupData: [{
                    id: 0,
                    norm: 0,
                    gorev: '',
                    normCount: 0,
                    employeeCount: 0
                }],
            bagliOlduguSubeId: '',
            createFormState: {
                "name": "Next",
                "visible": false,
                "pane": "PositionSelect"
            },
            breadcrumbSubeAdi: '',
            breadcrumbBolgeAdi: '',
            filterTable1: { offset: 0, limit: 5, current: 0 },
            filterTable2: { offset: 0, limit: 5, current: 0 },
            filterTable3: { offset: 0, limit: 5, current: 0 },
            totalSizeTable1: 0,
            totalSizeTable2: 0,
            totalSizeTable3: 0,
            searchFilter: ""
        };
        _this.getKHierarchy = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kHierarchyStore.getAll(this.state.tip, this.state.bagliOlduguSubeId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.pageSettings = function () { return __awaiter(_this, void 0, void 0, function () {
            var tur;
            return __generator(this, function (_a) {
                console.log('this.props.kSubeStore.editKSube', this.props.kSubeStore.editKSube);
                tur = this.props.kSubeStore.editKSube.tur;
                if (tur === 'Acente') {
                    this.setState({ tip: tur });
                }
                else {
                    this.setState({ tip: this.props.kSubeStore.editKSube.tip });
                }
                this.setState({
                    bagliOlduguSubeId: this.props.kSubeStore.editKSube.bagliOlduguSube_ObjId
                });
                if (abpUtility_1.isGranted('items_kareas_menu_view')) {
                    this.props.kBolgeStore.get({ id: this.state.bagliOlduguSubeId });
                    this.setState({
                        breadcrumbBolgeAdi: 'bölge adı',
                        // breadcrumbBolgeAdi: this.props.kBolgeStore.editKBolge.adi,
                        // breadcrumbSubeAdi: this.props.kSubeStore.editKSube.adi
                        breadcrumbSubeAdi: 'şube adı gelecek'
                    });
                }
                return [2 /*return*/];
            });
        }); };
        _this.setPageState = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.setState({ id: this.props["match"].params["id"] });
                this.props.kSubeStore.get({ id: this.state.id });
                setTimeout(function () { return _this.pageSettings(); }, 500);
                return [2 /*return*/];
            });
        }); };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setPageState()];
                    case 1:
                        _a.sent();
                        if (!abpUtility_1.isGranted('subitems.branch.detail.total.table.view')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAllEmployees()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!abpUtility_1.isGranted('subitems.branch.detail.employee.table.view')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getNormRequests()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getAllEmployees()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!abpUtility_1.isGranted('subitems.branch.detail.norm.request.table.view')) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.getAllEmployeesForGroupBy()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.getAllSubeNormForGroupBy()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.setAllEmployeesGroupBy()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.setAllSubeNormGroupBy()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.mergeArray()];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        }); };
        _this.handleSearch = function (value) {
            _this.setState({ searchFilter: value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllEmployees()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); });
        };
        _this.handleNormSearch = function (value) {
            _this.setState({ normFilter: value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getNormRequests()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); });
        };
        _this.openNotificationWithIcon = function (type) {
            antd_1.notification[type]({
                message: type === "success" ? abpUtility_1.L('NormCreateNotificationMessageTitle') : abpUtility_1.L('NormRejectNotificationMessageTitle'),
                description: type === "success" ? abpUtility_1.L('NormCreateNotificationMessageDescription') : abpUtility_1.L('NormCreateNotificationMessageDescription'),
                duration: 3
            });
        };
        _this.createNorm = function () {
            var form = _this.formRef.current;
            form.validateFields().then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            values.mails = this.props.kHierarchyStore.kHierarchies;
                            return [4 /*yield*/, this.props.kNormStore.create(values)];
                        case 1:
                            _a.sent();
                            this.openNotificationWithIcon('success');
                            form.resetFields();
                            this.setState({ modalVisible: false });
                            return [4 /*yield*/, this.getNormRequests()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        _this.mergeArray = function () { return __awaiter(_this, void 0, void 0, function () {
            var employees, norms, result, names, set, groupData;
            var _this = this;
            return __generator(this, function (_a) {
                employees = (Object.keys(this.state.groupEmployee).map(function (y, i) { return ({
                    id: i,
                    gorev: y,
                    employeeCount: __spreadArrays(_this.state.groupEmployee[y]).length,
                    normCount: 0
                }); }));
                norms = (Object.keys(this.state.groupNorm).map(function (y, i) { return ({
                    id: i,
                    gorev: y,
                    employeeCount: 0,
                    normCount: __spreadArrays(_this.state.groupNorm[y]).length
                }); }));
                result = __spreadArrays(employees, norms);
                names = result.map(function (x) { return x.gorev; });
                set = new Set(names);
                groupData = __spreadArrays(set).map(function (x, i) {
                    var _a, _b;
                    var gorev = x;
                    var employee = (_a = employees.find(function (x) { return x.gorev === gorev; })) === null || _a === void 0 ? void 0 : _a.employeeCount;
                    var norm = (_b = norms.find(function (x) { return x.gorev === gorev; })) === null || _b === void 0 ? void 0 : _b.normCount;
                    return Object.assign({
                        id: i,
                        gorev: x,
                        employeeCount: employee !== undefined ? employee : 0,
                        nomrCount: norm !== undefined ? norm : 0,
                        norm: ((norm !== undefined ? norm : 0) - (employee !== undefined ? employee : 0))
                    });
                });
                this.setState({ groupData: groupData });
                return [2 /*return*/];
            });
        }); };
        _this.getHierarchy = function (subeId, bolgeId, tip, pozisyon) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kHierarchyStore.generateHierarchy({
                            subeId: subeId,
                            bolgeId: bolgeId,
                            tip: tip,
                            pozisyon: pozisyon
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handlePaginationTable1 = function (pagination) {
            var filterTable1 = _this.state.filterTable1;
            var pageSize = pagination.pageSize, current = pagination.current;
            _this.setState({
                filterTable1: __assign(__assign({}, filterTable1), { current: current, limit: pageSize })
            });
        };
        _this.handlePaginationTable2 = function (pagination) {
            var filterTable2 = _this.state.filterTable2;
            var pageSize = pagination.pageSize, current = pagination.current;
            _this.setState({
                filterTable2: __assign(__assign({}, filterTable2), { current: current, limit: pageSize })
            });
        };
        _this.handlePaginationTable3 = function (pagination) {
            var filterTable3 = _this.state.filterTable3;
            var pageSize = pagination.pageSize, current = pagination.current;
            _this.setState({
                filterTable3: __assign(__assign({}, filterTable3), { current: current, limit: pageSize })
            });
        };
        return _this;
    }
    KSubeDetay.prototype.getPosition = function (key) {
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
    KSubeDetay.prototype.getNormRequests = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kNormStore.getAll({
                    id: this.state.id,
                    keyword: this.state.normFilter,
                    maxResultCount: this.state.maxNormResultCount,
                    skipCount: this.state.skipNormCount,
                    bolgeId: '0',
                    type: 'subedetail'
                });
                return [2 /*return*/];
            });
        });
    };
    KSubeDetay.prototype.getAllSubeNormForGroupBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeNormStore.getAllNorms({
                            maxResultCount: 10000,
                            skipCount: 0,
                            keyword: '',
                            id: this.state.id
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSubeDetay.prototype.setAllSubeNormGroupBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var groupNorm;
            return __generator(this, function (_a) {
                groupNorm = this.props.kSubeNormStore.norms.items.reduce(function (result, currentValue) {
                    (result[currentValue['pozisyon']] = result[currentValue['pozisyon']] || [])
                        .push(currentValue);
                    return result;
                }, {});
                this.setState({ groupNorm: groupNorm, cardLoading: false });
                return [2 /*return*/];
            });
        });
    };
    KSubeDetay.prototype.getAllEmployeesForGroupBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kPersonelStore.getAllEmployees({
                            maxResultCount: 10000,
                            skipCount: 0,
                            keyword: '',
                            id: this.state.id
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSubeDetay.prototype.setAllEmployeesGroupBy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var groupEmployee;
            return __generator(this, function (_a) {
                groupEmployee = this.props.kPersonelStore.kAllPersonels.items.reduce(function (result, currentValue) {
                    (result[currentValue['gorevi']] = result[currentValue['gorevi']] || [])
                        .push(currentValue);
                    return result;
                }, {});
                this.setState({ groupEmployee: groupEmployee, cardLoading: false });
                return [2 /*return*/];
            });
        });
    };
    KSubeDetay.prototype.getAllEmployees = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kPersonelStore.getAll({
                            maxResultCount: this.state.maxResultCount,
                            skipCount: this.state.skipCount,
                            keyword: '',
                            id: this.state.id
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSubeDetay.prototype.createOrUpdateModalOpen = function (entityDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ modalVisible: !this.state.modalVisible });
                this.getPosition(this.state.tip);
                return [2 /*return*/];
            });
        });
    };
    KSubeDetay.prototype.detailModalOpen = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getById({ id: id })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.props.kNormDetailStore.getDetails(id)];
                    case 2:
                        _a.sent();
                        this.setState({ detaillModalVisible: !this.state.detaillModalVisible });
                        return [2 /*return*/];
                }
            });
        });
    };
    KSubeDetay.prototype.render = function () {
        var _this = this;
        var _a = this.props.kNormStore, kNorms = _a.kNorms, editKNorm = _a.editKNorm;
        var norms = this.props.kSubeNormStore.norms;
        var kPersonels = this.props.kPersonelStore.kPersonels;
        var kHierarchies = this.props.kHierarchyStore.kHierarchies;
        var kNormAllDetails = this.props.kNormDetailStore.kNormAllDetails;
        var _b = this.state, breadcrumbBolgeAdi = _b.breadcrumbBolgeAdi, breadcrumbSubeAdi = _b.breadcrumbSubeAdi, detaillModalVisible = _b.detaillModalVisible, groupData = _b.groupData, createFormState = _b.createFormState, modalVisible = _b.modalVisible, tip = _b.tip, id = _b.id, bagliOlduguSubeId = _b.bagliOlduguSubeId;
        var _c = this.state, filterTable1 = _c.filterTable1, filterTable2 = _c.filterTable2, filterTable3 = _c.filterTable3, totalSizeTable1 = _c.totalSizeTable1, totalSizeTable2 = _c.totalSizeTable2, totalSizeTable3 = _c.totalSizeTable3;
        var tablePaginationTable1 = {
            pageSize: filterTable1.limit,
            current: filterTable1.current || 1,
            total: totalSizeTable1,
            locale: { items_per_page: abpUtility_1.L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true
        };
        var tablePaginationTable2 = {
            pageSize: filterTable2.limit,
            current: filterTable2.current || 1,
            total: totalSizeTable2,
            locale: { items_per_page: abpUtility_1.L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true
        };
        var tablePaginationTable3 = {
            pageSize: filterTable3.limit,
            current: filterTable3.current || 1,
            total: totalSizeTable3,
            locale: { items_per_page: abpUtility_1.L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true
        };
        var normEmployeeCoumns = [
            {
                title: abpUtility_1.L('NormEmployeeInformations xs'),
                render: function (record) { return (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.branch.duty')),
                    " : ",
                    record.gorev,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.branch.employeecount')),
                    "  : ",
                    record.employeeCount,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        abpUtility_1.L('table.branch.normcount'),
                        " "),
                    " : ",
                    record.nomrCount,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.branch.normgap')),
                    "  : ",
                    record.norm,
                    React.createElement("br", null))); },
                responsive: ['xs']
            },
            { title: abpUtility_1.L('table.branch.duty'), dataIndex: 'gorev', key: 'gorev', width: 150, render: function (key, value) { return React.createElement("div", { key: 'gorev-' + key }, value.gorev); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.employeecount'), dataIndex: 'employeeCount', key: 'employeeCount', width: 150, render: function (key, value) { return React.createElement("div", { key: 'employeeCount-' + key }, value.employeeCount); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.normcount'), dataIndex: 'nomrCount', key: 'nomrCount', width: 150, render: function (key, value) { return React.createElement("div", { key: 'nomrCount-' + key }, value.nomrCount); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.normgap'), dataIndex: 'norm', key: 'norm', width: 150, render: function (key, value) { return React.createElement("div", { key: 'norm-' + key }, value.norm); }, responsive: ['sm'] }
        ];
        var columns = [
            {
                title: abpUtility_1.L('NormEmployeeInformations xs'),
                render: function (record) { return (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.employee.name')),
                    " : ",
                    record.ad,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.employee.surname')),
                    "  : ",
                    record.soyad,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        abpUtility_1.L('table.employee.duty'),
                        " "),
                    " : ",
                    record.gorevi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.employee.registrationnumber')),
                    "  : ",
                    record.sicilNo,
                    React.createElement("br", null))); },
                responsive: ['xs']
            },
            { title: abpUtility_1.L('table.employee.name'), dataIndex: 'ad', key: 'ad', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.employee.surname'), dataIndex: 'soyad', key: 'soyad', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.employee.duty'), dataIndex: 'gorevi', key: 'gorevi', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.employee.registrationnumber'), dataIndex: 'sicilNo', key: 'sicilNo', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] }
        ];
        var columnsNorm = [
            {
                title: abpUtility_1.L('NormInformations xs'),
                render: function (record) { return (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.norm.requestdatee')),
                    " : ",
                    record.creationTime,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.norm.requeststatus')),
                    "  : ",
                    record.durumu,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        abpUtility_1.L('table.norm.area.name'),
                        " "),
                    " : ",
                    record.bolgeAdi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.norm.branch.name')),
                    "  : ",
                    record.subeAdi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.norm.position')),
                    "  : ",
                    record.pozisyon,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.norm.requestreason')),
                    "  : ",
                    record.nedeni,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.norm.requesttype')),
                    "  : ",
                    record.turu)); },
                responsive: ['xs']
            },
            {
                title: abpUtility_1.L("table.norm.requestdate"), dataIndex: 'creationTime', key: 'creationTime', width: 100,
                render: function (text) { return React.createElement("div", null, new Date(text).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "numeric",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                })); },
                responsive: ['sm']
            },
            {
                title: abpUtility_1.L('table.norm.requeststatus'), dataIndex: 'durumu', key: react_uuid_1["default"](), width: 200,
                render: function (text, norm) { return (React.createElement(React.Fragment, null, (normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Beklemede) ?
                    React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Waiting') },
                        " ",
                        React.createElement(antd_1.Tag, { color: 'rgb(250, 173, 20)', icon: React.createElement(icons_1.ClockCircleOutlined, null), className: 'requeststatus' },
                            " ",
                            talepDurumu_1["default"][norm.durumu],
                            " ")) :
                    (normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Iptal) ?
                        React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Reject') },
                            "   ",
                            React.createElement(antd_1.Tag, { color: 'rgb(250, 84, 28)', icon: React.createElement(icons_1.StopOutlined, null), className: 'requeststatus' },
                                " ",
                                talepDurumu_1["default"][norm.durumu],
                                " ")) :
                        React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Approved') },
                            " ",
                            React.createElement(antd_1.Tag, { color: 'rgb(29, 165, 122)', icon: React.createElement(icons_1.CheckCircleOutlined, null), className: 'requeststatus' },
                                " ",
                                talepDurumu_1["default"][norm.durumu],
                                " ")))); },
                responsive: ['sm']
            },
            { title: abpUtility_1.L("table.norm.area.name"), dataIndex: 'bolgeAdi', key: 'bolgeAdi', width: 100, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L("table.norm.branch.name"), dataIndex: 'subeAdi', key: 'subeAdi', width: 100, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L("table.norm.position"), dataIndex: 'pozisyon', key: 'pozisyon', width: 100, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L("table.norm.requestreason"), dataIndex: 'nedeni', key: 'nedeni', width: 150, render: function (text) { return React.createElement("div", null, talepNedeni_1["default"][text]); }, responsive: ['sm'] },
            { title: abpUtility_1.L("table.norm.requesttype"), dataIndex: 'turu', key: 'turu', width: 150, render: function (text) { return React.createElement("div", null, talepTuru_1["default"][text]); }, responsive: ['sm'] },
            {
                title: abpUtility_1.L("table.norm.transactions"),
                dataIndex: 'id',
                key: 'id',
                width: 50,
                render: function (text) { return (React.createElement(antd_1.Button, { className: 'info', onClick: function () { return _this.detailModalOpen(text); }, icon: React.createElement(icons_1.FileSearchOutlined, null), type: "primary" })); },
                responsive: ['sm']
            }
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Card, { style: { marginBottom: 20 }, hoverable: true },
                React.createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: React.createElement(antd_1.Breadcrumb, null,
                        React.createElement(antd_1.Breadcrumb.Item, null, abpUtility_1.isGranted('items_dashboard_menu_view') ? React.createElement(react_router_dom_1.Link, { to: "/dashboard" }, abpUtility_1.L('Dashboard')) : React.createElement(react_router_dom_1.Link, { to: "/home" }, abpUtility_1.L('Home'))),
                        abpUtility_1.isGranted('items_branch_menu_view') && React.createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            React.createElement(react_router_dom_1.Link, { to: "/bolgemudurluk" }, abpUtility_1.L('RegionalOffices')),
                            " "),
                        breadcrumbBolgeAdi !== '' && React.createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            breadcrumbBolgeAdi,
                            " "),
                        breadcrumbSubeAdi !== '' && React.createElement(antd_1.Breadcrumb.Item, null,
                            " ",
                            breadcrumbSubeAdi,
                            " ")) })),
            abpUtility_1.isGranted('subitems.branch.detail.total.table.view') && React.createElement(antd_1.Card, { style: { marginBottom: 20 }, hoverable: true },
                React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                        React.createElement(antd_1.Table, { bordered: false, onChange: this.handlePaginationTable1, columns: normEmployeeCoumns, rowKey: function (record) { return record.id; }, locale: { emptyText: abpUtility_1.L('NoData') }, loading: groupData.length == 1 ? true : false, dataSource: groupData === undefined ? [] : groupData, pagination: tablePaginationTable1 })))),
            abpUtility_1.isGranted('subitems.branch.detail.employee.table.view') && React.createElement(antd_1.Card, { hoverable: true },
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 23, offset: 0 }, md: { span: 23, offset: 0 }, lg: { span: 23, offset: 0 }, xl: { span: 23, offset: 0 }, xxl: { span: 23, offset: 0 } },
                        ' ',
                        React.createElement("h2", null, abpUtility_1.L('EmployeesList'))),
                    React.createElement(antd_1.Col, { xs: { span: 14, offset: 0 }, sm: { span: 15, offset: 0 }, md: { span: 15, offset: 0 }, lg: { span: 1, offset: 21 }, xl: { span: 1, offset: 21 }, xxl: { span: 1, offset: 21 } })),
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { sm: { span: 10, offset: 0 } },
                        React.createElement(Search, { placeholder: abpUtility_1.L('Filter'), onSearch: this.handleSearch }))),
                React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                        React.createElement(antd_1.Table, { locale: { emptyText: abpUtility_1.L('NoData') }, bordered: false, columns: columns, onChange: this.handlePaginationTable2, rowKey: function (record) { return record.objId.toString(); }, loading: kPersonels === undefined ? true : false, dataSource: kPersonels === undefined ? [] : kPersonels.items, pagination: tablePaginationTable2 })))),
            abpUtility_1.isGranted('subitems.branch.detail.norm.request.table.view') && React.createElement(antd_1.Card, { hoverable: true, style: { marginTop: 15 } },
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 23, offset: 0 }, md: { span: 23, offset: 0 }, lg: { span: 23, offset: 0 }, xl: { span: 23, offset: 0 }, xxl: { span: 23, offset: 0 } },
                        ' ',
                        React.createElement("h2", null, abpUtility_1.L('NormDetailPanel'))),
                    React.createElement(antd_1.Col, { xs: { span: 14, offset: 0 }, sm: { span: 15, offset: 0 }, md: { span: 15, offset: 0 }, lg: { span: 1, offset: 21 }, xl: { span: 1, offset: 21 }, xxl: { span: 1, offset: 21 } }, abpUtility_1.isGranted('subitems.branch.detail.norm.request.table.view') && React.createElement(antd_1.Button, { type: "primary", icon: React.createElement(icons_1.PlusOutlined, null), onClick: function () { return _this.createOrUpdateModalOpen({ id: 0 }); } },
                        " ",
                        abpUtility_1.L('NormOperations'),
                        " "))),
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { sm: { span: 10, offset: 0 } },
                        React.createElement(Search, { placeholder: abpUtility_1.L('Filter'), onSearch: this.handleNormSearch }))),
                React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                        React.createElement(antd_1.Table, { bordered: false, columns: columnsNorm, locale: { emptyText: abpUtility_1.L('NoData') }, onChange: this.handlePaginationTable3, rowKey: function (record) { return record.id; }, loading: kNorms === undefined ? true : false, dataSource: kNorms === undefined ? [] : kNorms.items, pagination: tablePaginationTable3 })))),
            React.createElement(CreateNormForm_1["default"], { tip: tip, subeId: id, modalWidth: '60%', modalType: 'create', formRef: this.formRef, employees: kPersonels, visible: modalVisible, hierarchy: kHierarchies, onCreateNorm: this.createNorm, getHierarchy: this.getHierarchy, createFormState: createFormState, bagliOlduguSubeId: bagliOlduguSubeId, position: this.props.kInkaLookUpTableStore.positions, normCount: norms !== undefined ? norms.items.length : 0, onCancel: function () {
                    var form = _this.formRef.current;
                    _this.setState({
                        modalVisible: false
                    });
                    form.resetFields();
                } }),
            React.createElement(NormDetailTimeLine_1["default"], { norm: editKNorm, data: kNormAllDetails, title: breadcrumbSubeAdi, visible: detaillModalVisible, onCancel: function () {
                    _this.setState({
                        detaillModalVisible: false
                    });
                } })));
    };
    KSubeDetay = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KSubeStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KBolgeStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KPersonelStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KSubeNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KHierarchyStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormDetailStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KInkaLookUpTableStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], KSubeDetay);
    return KSubeDetay;
}(AppComponentBase_1["default"]));
exports["default"] = KSubeDetay;
