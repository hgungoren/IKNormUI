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
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var KCartList_1 = require("../../components/KCartList");
var icons_1 = require("@ant-design/icons");
var abpUtility_1 = require("../../lib/abpUtility");
var createKSubeNorm_1 = require("./components/createKSubeNorm");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var antd_1 = require("antd");
var date_1 = require("../../helper/date");
var confirm = antd_1.Modal.confirm;
var KSube = /** @class */ (function (_super) {
    __extends(KSube, _super);
    function KSube() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = React.createRef();
        _this.state = {
            id: '0',
            normId: '0',
            subeAdi: '',
            skipCount: 0,
            subeObjId: '0',
            searchFilter: '',
            cardLoading: true,
            maxResultCount: 5,
            kPersonelCount: 0,
            modalVisible: false,
            totalSize: 0,
            filter: { offset: 0, limit: 5, current: 0 },
            moment: [],
            normList: [],
            dateFilter: false
        };
        _this.getNormRequests = function (id, start, end) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getMaxAll({
                            id: '0',
                            keyword: '',
                            bolgeId: id,
                            type: 'sube',
                            skipCount: 0,
                            maxResultCount: 100000,
                            end: end,
                            start: start
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.getNormRequestCounts = function (id, start, end) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getMaxAllCount({
                            id: '0',
                            keyword: '',
                            bolgeId: id,
                            type: 'sube',
                            skipCount: 0,
                            maxResultCount: 100000,
                            end: end,
                            start: start
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onDateFilter = function (date) { return __awaiter(_this, void 0, void 0, function () {
            var startDate, endDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (date === null) {
                            startDate = date_1.dateHelper.getMonthFirstDate('tr');
                            endDate = date_1.dateHelper.getTodayDate('tr');
                        }
                        else {
                            startDate = date_1.dateHelper.getMonthWidthFirstDate(date[0], 'tr');
                            endDate = date_1.dateHelper.getTodayWidthDate(date[1], 'tr');
                        }
                        return [4 /*yield*/, this.getNormRequests(this.state.id, startDate, endDate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getNormRequestCounts(this.state.id, startDate, endDate)];
                    case 2:
                        _a.sent();
                        this.setState({ moment: [startDate, endDate] });
                        return [2 /*return*/];
                }
            });
        }); };
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
        // Şube için Norm Oluşturma Metodu
        _this.kSubeNormCreate = function () {
            var form = _this.formRef.current;
            form.validateFields().then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.state.normId === '0')) return [3 /*break*/, 4];
                            if (!abpUtility_1.isGranted('ksubenorm.create')) return [3 /*break*/, 2];
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
                            if (!abpUtility_1.isGranted('ksubenorm.edit')) return [3 /*break*/, 6];
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
                            return [4 /*yield*/, this.getKSubeEmployees()];
                        case 9:
                            _a.sent();
                            return [4 /*yield*/, this.mergeArray()];
                        case 10:
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
                    self.props.kSubeNormStore["delete"](input).then(function () {
                        self.getKSubeNorms();
                        self.getKSubeEmployees();
                        self.mergeArray();
                    })["catch"](function (err) { return console.log(err); });
                },
                onCancel: function () {
                    console.log('Cancel');
                }
            });
        };
        _this.handleTableChange = function (pagination) {
            _this.setState({ skipCount: (pagination.current - 1) * _this.state.maxResultCount }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); });
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
        _this.mergeArray = function () { return __awaiter(_this, void 0, void 0, function () {
            var normList;
            var _this = this;
            return __generator(this, function (_a) {
                normList = this.props.kSubeNormStore.norms.items.map(function (record, index) { return Object.assign({
                    id: record.id,
                    position: record.pozisyon,
                    creationTime: record.creationTime,
                    normCount: _this.props.kSubeNormStore.norms.items.filter(function (x) { return x.pozisyon === record.pozisyon; })[0].adet,
                    employeeCount: _this.props.kPersonelStore.kPersonels.items.filter(function (x) { return x.gorevi === record.pozisyon; }).length
                }); });
                this.setState({ normList: normList });
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    KSube.prototype.getKSubeEmployees = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kPersonelStore.getAll({
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
    // Şubeye ait norm listesini getirir
    KSube.prototype.getKSubeNorms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeNormStore.getAllNorms({
                            keyword: '',
                            skipCount: 0,
                            maxResultCount: 5,
                            id: this.state.subeObjId
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.getNormCount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeNormStore.getNormCountById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeStore.getAll({
                            isActive: true,
                            isActivity: true,
                            id: this.state.id,
                            keyword: this.state.searchFilter,
                            skipCount: this.state.skipCount,
                            maxResultCount: this.state.maxResultCount
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.props.kSubeStore.getNormCount(this.state.id)];
                    case 2:
                        _a.sent();
                        this.setState({ cardLoading: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.get = function (entityDto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kSubeStore.get(entityDto)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.getPosition = function (key) {
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
    KSube.prototype.createOrUpdateModalOpen = function (tip, id, subeAdi) {
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
                        if (!abpUtility_1.isGranted('ksubenorm.view')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getKSubeNorms()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.getKSubeEmployees()];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.mergeArray()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        this.setState({ modalVisible: !this.state.modalVisible });
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.getEmployeeCount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kPersonelStore.getEmployeeCountById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.setPageState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ id: this.props["match"].params["id"] });
                return [2 /*return*/];
            });
        });
    };
    KSube.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, startOfMonth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = date_1.dateHelper.getTodayDate('tr');
                        startOfMonth = date_1.dateHelper.getMonthFirstDate('tr');
                        if (!(abpUtility_1.isGranted('subitems.dashboard.infobox.gettotalnormfillingrequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.getpendingnormfillrequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.getacceptednormfillrequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.getcancelednormfillrequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.gettotalnormupdaterequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.getpendingnormupdaterequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.getacceptednormupdaterequest') ||
                            abpUtility_1.isGranted('subitems.dashboard.infobox.getcancelednormupdaterequest'))) return [3 /*break*/, 3];
                        this.setState({ dateFilter: true });
                        return [4 /*yield*/, this.getNormRequests(this.state.id, startOfMonth, currentDate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getNormRequestCounts(this.state.id, startOfMonth, currentDate)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.setPageState()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getAll()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.get({ id: this.state.id })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.getEmployeeCount(this.state.id)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.getNormCount(this.state.id)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KSube.prototype.render = function () {
        var _this = this;
        var _a = this.state, filter = _a.filter, totalSize = _a.totalSize, dateFilter = _a.dateFilter;
        var tablePagination = {
            pageSize: filter.limit,
            current: filter.current || 1,
            total: totalSize,
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true,
            locale: { items_per_page: abpUtility_1.L('page') }
        };
        var Search = antd_1.Input.Search;
        var _b = this.state, cardLoading = _b.cardLoading, moment = _b.moment;
        var kPersonelCount = this.props.kPersonelStore.kPersonelCount;
        var positions = this.props.kInkaLookUpTableStore.positions;
        var _c = this.props.kSubeStore, kSubes = _c.kSubes, editKSube = _c.editKSube, normCount = _c.normCount;
        var _d = this.props.kNormStore, getTotalNormUpdateRequestCount = _d.getTotalNormUpdateRequestCount, getPendingNormFillRequestCount = _d.getPendingNormFillRequestCount, getTotalNormFillingRequestCount = _d.getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount = _d.getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount = _d.getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount = _d.getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount = _d.getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount = _d.getCanceledNormUpdateRequestCount;
        var columns = [
            {
                title: abpUtility_1.L('BranchInformations xs'),
                render: function (record) { return (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('Area')),
                    " : ",
                    record.adi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.branch.name')),
                    "  : ",
                    record.adi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        abpUtility_1.L('table.branch.type'),
                        " "),
                    " : ",
                    record.tip,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' }, abpUtility_1.L('table.branch.employeecount')),
                    "  : ",
                    record.personelSayisi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        " ",
                        abpUtility_1.L('table.branch.normcount')),
                    "  : ",
                    record.normSayisi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        " ",
                        abpUtility_1.L('table.branch.normgap')),
                    "  : ",
                    record.normEksigi,
                    React.createElement("br", null),
                    React.createElement("span", { className: 'responsive-title' },
                        " ",
                        abpUtility_1.L('table.branch.transactions')),
                    "  : ",
                    record.text)); },
                responsive: ['xs']
            },
            { title: abpUtility_1.L('Area'), dataIndex: 'adi', key: 'adi', width: 150, render: function (text) { return React.createElement("div", null, editKSube === undefined ? '' : editKSube.adi); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.name'), dataIndex: 'adi', key: 'adi', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.type'), dataIndex: 'tip', key: 'tip', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.employeecount'), dataIndex: 'personelSayisi', key: 'personelSayisi', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.normcount'), dataIndex: 'normSayisi', key: 'normSayisi', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            { title: abpUtility_1.L('table.branch.normgap'), dataIndex: 'normEksigi', key: 'normEksigi', width: 150, render: function (text) { return React.createElement("div", null, text); }, responsive: ['sm'] },
            {
                title: abpUtility_1.L('table.branch.transactions'),
                width: 150,
                render: function (text, item) { return (React.createElement("div", null,
                    React.createElement(antd_1.Dropdown, { trigger: ['click'], overlay: React.createElement(antd_1.Menu, null,
                            React.createElement(antd_1.Menu.Item, null,
                                React.createElement(react_router_dom_1.Link, { to: {
                                        pathname: "/ksubedetay/" + item.objId
                                    } },
                                    " ",
                                    abpUtility_1.L('Detail'),
                                    " ")),
                            _this.isGranted('ksubenorm.operation') && React.createElement(antd_1.Menu.Item, null,
                                " ",
                                React.createElement(react_router_dom_1.Link, { to: '#', onClick: function () { return _this.createOrUpdateModalOpen(item.tip, item.objId, item.adi); } },
                                    " ",
                                    abpUtility_1.L('NormCreate'),
                                    " "),
                                " ")), placement: "bottomLeft" },
                        React.createElement(antd_1.Button, { type: "primary", icon: React.createElement(icons_1.SettingOutlined, null) }, abpUtility_1.L('Actions'))))); },
                responsive: ['sm']
            },
        ];
        return (React.createElement(React.Fragment, null,
            "  ",
            React.createElement(React.Fragment, null,
                React.createElement(antd_1.Card, { style: { marginBottom: 20 } },
                    React.createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: React.createElement(antd_1.Breadcrumb, null,
                            React.createElement(antd_1.Breadcrumb.Item, null,
                                React.createElement(react_router_dom_1.Link, { to: "/home" }, abpUtility_1.L('Dashboard')),
                                "   "),
                            React.createElement(antd_1.Breadcrumb.Item, null,
                                " ",
                                React.createElement(react_router_dom_1.Link, { to: "/bolgemudurluk" }, abpUtility_1.L('RegionalOffices')),
                                "  "),
                            React.createElement(antd_1.Breadcrumb.Item, null,
                                " ",
                                editKSube === undefined ? '' : editKSube.adi,
                                " ")) })),
                React.createElement(KCartList_1["default"], { dateFilter: dateFilter, moment: moment, type: "sube", bolgeId: this.state.id, normCount: normCount, subeObjId: this.state.id, cardLoading: cardLoading, kPersonelCount: kPersonelCount, onDateFilter: this.onDateFilter, kNormStore: this.props.kNormStore, kNormDetailStore: this.props.kNormDetailStore, getTotalNormUpdateRequestCount: getTotalNormUpdateRequestCount, getPendingNormFillRequestCount: getPendingNormFillRequestCount, getTotalNormFillingRequestCount: getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount: getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount: getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount: getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount: getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount: getCanceledNormUpdateRequestCount }),
                React.createElement(antd_1.Card, { hoverable: true },
                    React.createElement(antd_1.Row, null,
                        React.createElement(antd_1.Col, { xs: { span: 4, offset: 0 }, sm: { span: 4, offset: 0 }, md: { span: 4, offset: 0 }, lg: { span: 2, offset: 0 }, xl: { span: 2, offset: 0 }, xxl: { span: 2, offset: 0 } },
                            React.createElement("h2", null, abpUtility_1.L('KSube')))),
                    React.createElement(antd_1.Row, null,
                        React.createElement(antd_1.Col, { sm: { span: 10, offset: 0 } },
                            React.createElement(Search, { placeholder: abpUtility_1.L('Filter'), onSearch: this.handleSearch }))),
                    React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                        React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                            React.createElement(antd_1.Table, { bordered: false, columns: columns, pagination: tablePagination, onChange: this.handlePagination, locale: { emptyText: abpUtility_1.L('NoData') }, rowKey: function (record) { return record.objId.toString(); }, loading: kSubes === undefined ? true : false, dataSource: kSubes === undefined ? [] : kSubes.items })))),
                React.createElement(createKSubeNorm_1["default"], { modalType: 'create', normList: this.state.normList, formRef: this.formRef, positionSelect: positions, subeAdi: this.state.subeAdi, subeObjId: this.state.subeObjId, visible: this.state.modalVisible, kSubeNormEdit: this.kSubeNormEdit, kSubeNormCreate: this.kSubeNormCreate, kSubeNormDelete: this.kSubeNormDelete, kPosizyonKontrol: this.kPosizyonKontrol, kSubeNormStore: this.props.kSubeNormStore, kSubeNorms: this.props.kSubeNormStore.norms, onCancel: function () { _this.setState({ modalVisible: false }); }, bolgeAdi: this.props.kSubeStore.editKSube !== undefined ? this.props.kSubeStore.editKSube.adi : '' }))));
    };
    KSube = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KSubeStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KSubeNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KPersonelStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormDetailStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KInkaLookUpTableStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], KSube);
    return KSube;
}(AppComponentBase_1["default"]));
exports["default"] = KSube;
