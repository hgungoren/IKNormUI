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
require("./index.less");
var react_uuid_1 = require("react-uuid");
var React = require("react");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var abpUtility_1 = require("../../lib/abpUtility");
var NormDetailTimeLine_1 = require("../NormDetailTimeLine");
var talepTuru_1 = require("../../services/kNorm/dto/talepTuru");
var status_1 = require("../../services/kNormDetail/dto/status");
var NormRejectDescription_1 = require("../NormRejectDescription");
var normStatus_1 = require("../../services/kNorm/dto/normStatus");
var talepNedeni_1 = require("../../services/kNorm/dto/talepNedeni");
var talepDurumu_1 = require("../../services/kNorm/dto/talepDurumu");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var tag_1 = require("antd/es/tag");
var confirm = antd_1.Modal.confirm;
var Search = antd_1.Input.Search;
var NormRequestListTable = /** @class */ (function (_super) {
    __extends(NormRequestListTable, _super);
    function NormRequestListTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            requestId: 0,
            totalSize: 0,
            subeObjId: '0',
            inputValue: '',
            currentUserId: 0,
            skipNormCount: 0,
            searchFilter: '',
            subeOrBolgeAdi: '',
            maxNormResultCount: 5,
            getAllKNormOutput: {},
            detaillModalVisible: false,
            normRejectDescriptionModalVisible: false,
            filter: { offset: 0, limit: 5, current: 0 },
            dateStart: '',
            dateEnd: ''
        };
        _this.formRef = React.createRef();
        _this.getNormRequests = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kNormStore.getAll({
                    bolgeId: '0',
                    maxResultCount: 5,
                    type: this.props.type,
                    id: this.props.subeObjId,
                    keyword: this.state.searchFilter,
                    skipCount: this.state.skipNormCount
                });
                return [2 /*return*/];
            });
        }); };
        _this.getNormRequestCounts = function (start, end) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kNormStore.getMaxAllCount({
                    end: end,
                    skipCount: 0,
                    start: start,
                    type: this.props.type,
                    id: this.props.subeObjId,
                    maxResultCount: 1000000000,
                    bolgeId: this.props.bolgeId,
                    keyword: this.state.searchFilter
                });
                return [2 /*return*/];
            });
        }); };
        _this.getAllNormDetails = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kNormDetailStore.getAll({
                    id: 0,
                    keyword: '',
                    skipCount: 0,
                    maxResultCount: 100000
                });
                return [2 /*return*/];
            });
        }); };
        _this.handleNormSearch = function (value) {
            if (_this.props.isModal)
                _this.setState({ searchFilter: value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getNormRequestsAll(this.props.moment[0]._d, this.props.moment[1]._d)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); });
            else
                _this.setState({ searchFilter: value }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getNormRequests()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); });
        };
        _this.handleNormTableChange = function (pagination) {
            if (_this.props.isModal)
                _this.setState({ skipNormCount: (pagination.current - 1) * _this.state.maxNormResultCount }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getNormRequestsAll(this.props.moment[0]._d, this.props.moment[1]._d)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); });
            else {
                _this.setState({ skipNormCount: (pagination.current - 1) * _this.state.maxNormResultCount }, function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getNormRequests()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); });
            }
        };
        _this.notification = function (type, message) {
            antd_1.notification[type]({
                message: abpUtility_1.L(message.title),
                description: abpUtility_1.L(message.description),
                duration: 3
            });
        };
        _this.rejectRequestClick = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                confirm({
                    icon: React.createElement(icons_1.ExclamationCircleOutlined, null),
                    content: abpUtility_1.L('DoYouWantToConfirm'),
                    okText: abpUtility_1.L('Approve'),
                    cancelText: abpUtility_1.L('Cancel'),
                    onOk: function () {
                        var form = _this.formRef.current;
                        form.validateFields()
                            .then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        values.status = status_1["default"].Reject;
                                        return [4 /*yield*/, this.props.kNormDetailStore.update(values)
                                                .then(function () {
                                                _this.props.kNormStore.setStatusAsync({
                                                    id: _this.state.requestId,
                                                    normStatus: normStatus_1["default"].Iptal
                                                }).then(function () {
                                                    _this.notification('error', {
                                                        title: 'NormRejectNotificationMessageTitle',
                                                        description: 'NormRejectNotificationMessageDescription'
                                                    });
                                                    _this.getAllNormDetails();
                                                    _this.getNormRequestsAll(_this.state.dateStart, _this.state.dateEnd);
                                                    _this.getNormRequestCounts(_this.state.dateStart, _this.state.dateEnd);
                                                });
                                            })["catch"](function (err) {
                                                return;
                                            })];
                                    case 1:
                                        _a.sent();
                                        form.resetFields();
                                        this.setState({ normRejectDescriptionModalVisible: false });
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    },
                    onCancel: function () { console.log(abpUtility_1.L('Cancel')); }
                });
                return [2 /*return*/];
            });
        }); };
        _this.approveRequestClick = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                confirm({
                    icon: React.createElement(icons_1.ExclamationCircleOutlined, null),
                    content: abpUtility_1.L('DoYouWantToConfirm'),
                    okText: abpUtility_1.L('Approve'),
                    cancelText: abpUtility_1.L('Cancel'),
                    onOk: function () {
                        _this.props.kNormDetailStore.update({
                            kNormId: id,
                            id: id,
                            status: status_1["default"].Apporved
                        }).then(function () {
                            _this.props.kNormStore.setStatusAsync({
                                id: id
                            }).then(function () {
                                _this.getAllNormDetails();
                                _this.getNormRequestsAll(_this.state.dateStart, _this.state.dateEnd);
                                _this.getNormRequestCounts(_this.state.dateStart, _this.state.dateEnd);
                                _this.notification('success', {
                                    title: 'NormApproveNotificationMessageTitle',
                                    description: 'NormApproveNotificationMessageDescription'
                                });
                            });
                        })["catch"](function (err) {
                            return;
                        });
                    },
                    onCancel: function () { console.log(abpUtility_1.L('Cancel')); }
                });
                return [2 /*return*/];
            });
        }); };
        _this.handlePagination = function (pagination) {
            var filter = _this.state.filter;
            var pageSize = pagination.pageSize, current = pagination.current;
            _this.setState({
                filter: __assign(__assign({}, filter), { current: current, limit: pageSize })
            });
        };
        return _this;
    }
    NormRequestListTable.prototype.getNormRequestsAll = function (start, end) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.kNormStore.getMaxAll({
                    end: end,
                    skipCount: 0,
                    start: start,
                    type: this.props.type,
                    id: this.props.subeObjId,
                    maxResultCount: 1000000000,
                    bolgeId: this.props.bolgeId,
                    keyword: this.state.searchFilter
                });
                return [2 /*return*/];
            });
        });
    };
    NormRequestListTable.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var start, end;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.props.isModal) {
                            if (this.props.moment.length > 0) {
                                start = void 0;
                                end = void 0;
                                if (this.props.moment[0] !== undefined) {
                                    start = this.props.moment[0]._d;
                                    this.setState({ dateStart: start });
                                }
                                if (this.props.moment[1] !== undefined) {
                                    end = this.props.moment[1]._d;
                                    this.setState({ dateStart: end });
                                }
                                this.getNormRequestsAll(start, end);
                                this.getNormRequestCounts(start, end);
                            }
                            else {
                                this.getNormRequestsAll();
                                this.getNormRequestCounts();
                            }
                        }
                        else
                            this.getNormRequests();
                        return [4 /*yield*/, this.getAllNormDetails()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NormRequestListTable.prototype.detailModalOpen = function (id, name) {
        return __awaiter(this, void 0, void 0, function () {
            var norm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormDetailStore.getDetails(id)];
                    case 1:
                        _a.sent();
                        norm = this.props.kNormStore[this.props.table].filter(function (x) { return x.id === id; })[0];
                        this.setState({ getAllKNormOutput: norm });
                        this.setState({ detaillModalVisible: !this.state.detaillModalVisible, subeOrBolgeAdi: name });
                        return [2 /*return*/];
                }
            });
        });
    };
    NormRequestListTable.prototype.normRejectDescriptionModalOpen = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ normRejectDescriptionModalVisible: !this.state.normRejectDescriptionModalVisible, requestId: id });
                return [2 /*return*/];
            });
        });
    };
    NormRequestListTable.prototype.render = function () {
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
        var kNorms = this.props.kNormStore.kNorms;
        var _b = this.props, isHoverable = _b.isHoverable, tableTitle = _b.tableTitle, table = _b.table, isModal = _b.isModal;
        var _c = this.props.kNormDetailStore, kNormAllDetails = _c.kNormAllDetails, kNormDetails = _c.kNormDetails;
        var _e = this.state, subeOrBolgeAdi = _e.subeOrBolgeAdi, detaillModalVisible = _e.detaillModalVisible, getAllKNormOutput = _e.getAllKNormOutput;
        var columnsNorm = [
            {
                title: abpUtility_1.L("table.norm.requestdate"), dataIndex: 'creationTime', key: react_uuid_1["default"](), width: 60,
                render: function (text) { return React.createElement("div", null, new Date(text).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "numeric",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                })); }
            },
            {
                title: abpUtility_1.L('table.norm.requeststatus'), dataIndex: 'durumu', key: react_uuid_1["default"](), width: 200,
                render: function (text, norm) { return (React.createElement(React.Fragment, null, (normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Beklemede) ?
                    React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Waiting') },
                        " ",
                        React.createElement(tag_1["default"], { color: 'rgb(250, 173, 20)', icon: React.createElement(icons_1.ClockCircleOutlined, null), className: 'requeststatus' },
                            " ",
                            talepDurumu_1["default"][norm.durumu])) :
                    (normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Iptal) ?
                        React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Reject') },
                            "   ",
                            React.createElement(tag_1["default"], { color: 'rgb(250, 84, 28)', icon: React.createElement(icons_1.StopOutlined, null), className: 'requeststatus' },
                                " ",
                                talepDurumu_1["default"][norm.durumu],
                                "    ")) :
                        React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Approved') },
                            " ",
                            React.createElement(tag_1["default"], { color: 'rgb(29, 165, 122)', icon: React.createElement(icons_1.CheckCircleOutlined, null), className: 'requeststatus' },
                                " ",
                                talepDurumu_1["default"][norm.durumu],
                                "  ")))); }
            },
            { title: abpUtility_1.L("table.norm.area.name"), dataIndex: 'bolgeAdi', key: react_uuid_1["default"](), width: 100, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L("table.norm.branch.name"), dataIndex: 'subeAdi', key: react_uuid_1["default"](), width: 100, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L("table.norm.position"), dataIndex: 'pozisyon', key: react_uuid_1["default"](), width: 150, render: function (text) { return React.createElement("div", null, text); } },
            { title: abpUtility_1.L("table.norm.requestreason"), dataIndex: 'nedeni', key: react_uuid_1["default"](), width: 50, render: function (text) { return React.createElement("div", null, talepNedeni_1["default"][text]); } },
            { title: abpUtility_1.L("table.norm.requesttype"), dataIndex: 'turu', key: react_uuid_1["default"](), width: 50, render: function (text) { return React.createElement("div", null, talepTuru_1["default"][text]); } },
            {
                title: "İşlem",
                dataIndex: 'id',
                key: react_uuid_1["default"](),
                width: 50,
                render: function (text, norm) { return React.createElement(antd_1.Space, { size: 'small' },
                    kNormDetails !== undefined && (abpUtility_1.isGranted('knorm.detail')) && (React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Detail') },
                        React.createElement(antd_1.Button, { className: 'info', onClick: function () { return _this.detailModalOpen(norm.id, norm.subeAdi); }, icon: React.createElement(icons_1.FileSearchOutlined, null), type: "primary" }))),
                    (kNormDetails !== undefined && _this.props.isConfirmOrCancel && (!tableTitle.search('Pending') || !tableTitle.search('Total')) && normStatus_1["default"][norm.normStatusValue] === normStatus_1["default"].Beklemede &&
                        kNormDetails.items.filter(function (x) { var _a; return x.status == status_1["default"].Waiting && x.kNormId === norm.id && ((_a = _this.props.sessionStore) === null || _a === void 0 ? void 0 : _a.currentLogin.user.id) === x.userId && x.visible; }).length > 0) && React.createElement(React.Fragment, null,
                        abpUtility_1.isGranted('knorm.reject') && React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Approve') },
                            React.createElement(antd_1.Button, { onClick: function () { return _this.approveRequestClick(norm.id); }, icon: React.createElement(icons_1.CheckCircleOutlined, null), type: "primary" })),
                        abpUtility_1.isGranted('knorm.reject') && React.createElement(antd_1.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Reject') },
                            React.createElement(antd_1.Button, { danger: true, onClick: function () { return _this.normRejectDescriptionModalOpen(norm.id); }, icon: React.createElement(icons_1.StopOutlined, null), type: "primary" })))); }
            }
        ];
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Card, { hoverable: isHoverable, style: { marginTop: 15 } },
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 23, offset: 0 }, md: { span: 23, offset: 0 }, lg: { span: 23, offset: 0 }, xl: { span: 23, offset: 0 }, xxl: { span: 23, offset: 0 } },
                        ' ',
                        React.createElement("h2", null, abpUtility_1.L(tableTitle))),
                    React.createElement(antd_1.Col, { xs: { span: 14, offset: 0 }, sm: { span: 15, offset: 0 }, md: { span: 15, offset: 0 }, lg: { span: 1, offset: 21 }, xl: { span: 1, offset: 21 }, xxl: { span: 1, offset: 21 } })),
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { sm: { span: 10, offset: 0 } },
                        React.createElement(Search, { placeholder: abpUtility_1.L('Filter'), onSearch: this.handleNormSearch }))),
                React.createElement(antd_1.Row, { style: { marginTop: 20 } },
                    React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } }, isModal ? (React.createElement(antd_1.Table, { locale: { emptyText: abpUtility_1.L('NoData') }, rowKey: react_uuid_1["default"](), bordered: false, columns: columnsNorm, pagination: tablePagination, loading: this.props.kNormStore[table] === undefined ? true : false, dataSource: this.props.kNormStore[table] === undefined ? [] : this.props.kNormStore[table], onChange: this.handlePagination })) : (React.createElement(antd_1.Table, { locale: { emptyText: abpUtility_1.L('NoData') }, rowKey: react_uuid_1["default"](), bordered: false, pagination: tablePagination, columns: columnsNorm, loading: kNorms === undefined ? true : false, dataSource: kNorms === undefined ? [] : kNorms.items, onChange: this.handlePagination }))))),
            React.createElement(NormDetailTimeLine_1["default"], { data: kNormAllDetails, title: subeOrBolgeAdi, norm: getAllKNormOutput, visible: detaillModalVisible, onCancel: function () { _this.setState({ detaillModalVisible: false }); } }),
            React.createElement(NormRejectDescription_1["default"], { formRef: this.formRef, title: abpUtility_1.L('RequestRejectForm'), reuestId: this.state.requestId, rejectRequestClick: this.rejectRequestClick, visible: this.state.normRejectDescriptionModalVisible, onCancel: function () {
                    _this.setState({
                        normRejectDescriptionModalVisible: false
                    });
                } })));
    };
    NormRequestListTable = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AccountStore),
        mobx_react_1.inject(storeIdentifier_1["default"].SessionStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormDetailStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore),
        mobx_react_1.observer
    ], NormRequestListTable);
    return NormRequestListTable;
}(React.Component));
exports["default"] = NormRequestListTable;
