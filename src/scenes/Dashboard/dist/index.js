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
exports.Dashboard = void 0;
/*eslint-disable */
require("./index.less");
var moment_1 = require("moment");
var React = require("react");
var antd_1 = require("antd");
var mobx_react_1 = require("mobx-react");
var date_1 = require("../../helper/date");
var KLineChart_1 = require("./components/KLineChart");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var KCartList_1 = require("../../components/KCartList");
var abpUtility_1 = require("../../lib/abpUtility");
var icons_1 = require("@ant-design/icons");
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            cardLoading: true,
            barChartLoading: true,
            lineFillLoading: true,
            pieChartLoading: true,
            totalFill: [],
            lineUpdateLoading: true,
            totalUpdate: [],
            moment: [],
            lineChartView: false
        };
        _this.getEmployeeCount = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.props.kPersonelStore.getEmployeeCount()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        _this.getNormCount = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.props.kSubeNormStore.getNormCount()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
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
                        return [4 /*yield*/, this.getNormRequests(startDate, endDate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getNormRequestCounts(startDate, endDate)];
                    case 2:
                        _a.sent();
                        this.setState({ moment: [startDate, endDate] });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.getNormRequests = function (start, end) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getMaxAll({
                            id: '0',
                            type: '',
                            end: end,
                            keyword: '',
                            start: start,
                            bolgeId: '0',
                            skipCount: 0,
                            maxResultCount: 100000
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.getNormRequestCounts = function (start, end) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kNormStore.getMaxAllCount({
                            id: '0',
                            type: '',
                            end: end,
                            keyword: '',
                            start: start,
                            skipCount: 0,
                            bolgeId: '0',
                            maxResultCount: 100000
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var currentDate, startOfMonth, resultFill, resultUpdate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setTimeout(function () { return _this.setState({ cardLoading: false }); }, 1000);
                        setTimeout(function () { return _this.setState({ barChartLoading: false }); }, 2000);
                        setTimeout(function () { return _this.setState({ pieChartLoading: false }); }, 1000);
                        currentDate = date_1.dateHelper.getTodayDate('tr');
                        startOfMonth = date_1.dateHelper.getMonthFirstDate('tr');
                        if (!(abpUtility_1.isGranted('knorm.gettotalnormfillingrequest') ||
                            abpUtility_1.isGranted('knorm.getpendingnormfillrequest') ||
                            abpUtility_1.isGranted('knorm.getacceptednormfillrequest') ||
                            abpUtility_1.isGranted('knorm.getcancelednormfillrequest') ||
                            abpUtility_1.isGranted('knorm.gettotalnormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.getpendingnormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.getacceptednormupdaterequest') ||
                            abpUtility_1.isGranted('knorm.getcancelednormupdaterequest'))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getNormRequests(startOfMonth, currentDate)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getNormRequestCounts(startOfMonth, currentDate)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.getEmployeeCount()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getNormCount()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.lineChartModel(this.props.kNormStore.getTotalNormFillingRequest)];
                    case 6:
                        resultFill = _a.sent();
                        return [4 /*yield*/, this.lineChartModel(this.props.kNormStore.getTotalNormUpdateRequest)];
                    case 7:
                        resultUpdate = _a.sent();
                        this.setState({
                            totalFill: resultFill,
                            lineFillLoading: false,
                            totalUpdate: resultUpdate,
                            lineUpdateLoading: false,
                            moment: [startOfMonth, currentDate]
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.lineChartModel = function (data) { return __awaiter(_this, void 0, Promise, function () {
            var week, currentDate, weekStart, i, startDateOfWeek, endDateOfWeek, result, retVal, iptalWeek1, iptalWeek2, iptalWeek3, iptalWeek4, iptalWeek5, iptalWeek6, iptalWeek7, iptal, onaylandi, onaylandiWeek1, onaylandiWeek2, onaylandiWeek3, onaylandiWeek4, onaylandiWeek5, onaylandiWeek6, onaylandiWeek7, beklemede, beklemedeWeek1, beklemedeWeek2, beklemedeWeek3, beklemedeWeek4, beklemedeWeek5, beklemedeWeek6, beklemedeWeek7, toplamWeek1, toplamWeek2, toplamWeek3, toplamWeek4, toplamWeek5, toplamWeek6, toplamWeek7, model, model;
            return __generator(this, function (_a) {
                week = [];
                currentDate = moment_1["default"]();
                weekStart = currentDate.clone().startOf('isoWeek');
                for (i = 0; i <= 6; i++) {
                    week.push(moment_1["default"](moment_1["default"](weekStart).add(i, 'days')).toDate());
                }
                startDateOfWeek = moment_1["default"]().startOf('isoWeek').toDate();
                endDateOfWeek = moment_1["default"]().endOf('isoWeek').toDate();
                if (data === undefined)
                    [];
                result = data.filter(function (item) {
                    return moment_1["default"](item.creationTime).toDate().getTime() >= startDateOfWeek.getTime() &&
                        moment_1["default"](item.creationTime).toDate().getTime() <= endDateOfWeek.getTime();
                });
                retVal = result.reduce(function (result, currentValue) {
                    (result[currentValue['normStatusValue']] = result[currentValue['normStatusValue']] || [])
                        .push(currentValue);
                    return result;
                }, {});
                iptalWeek1 = 0;
                iptalWeek2 = 0;
                iptalWeek3 = 0;
                iptalWeek4 = 0;
                iptalWeek5 = 0;
                iptalWeek6 = 0;
                iptalWeek7 = 0;
                iptal = retVal['Iptal'];
                if (iptal !== undefined) {
                    iptalWeek1 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[0].getDate(); }).length;
                    iptalWeek2 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[1].getDate(); }).length;
                    iptalWeek3 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[2].getDate(); }).length;
                    iptalWeek4 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[3].getDate(); }).length;
                    iptalWeek5 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[4].getDate(); }).length;
                    iptalWeek6 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[5].getDate(); }).length;
                    iptalWeek7 = iptal.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[6].getDate(); }).length;
                }
                onaylandi = retVal['Onaylandi'];
                onaylandiWeek1 = 0;
                onaylandiWeek2 = 0;
                onaylandiWeek3 = 0;
                onaylandiWeek4 = 0;
                onaylandiWeek5 = 0;
                onaylandiWeek6 = 0;
                onaylandiWeek7 = 0;
                if (onaylandi !== undefined) {
                    onaylandiWeek1 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[0].getDate(); }).length;
                    onaylandiWeek2 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[1].getDate(); }).length;
                    onaylandiWeek3 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[2].getDate(); }).length;
                    onaylandiWeek4 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[3].getDate(); }).length;
                    onaylandiWeek5 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[4].getDate(); }).length;
                    onaylandiWeek6 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[5].getDate(); }).length;
                    onaylandiWeek7 = onaylandi.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[6].getDate(); }).length;
                }
                beklemede = retVal['Beklemede'];
                beklemedeWeek1 = 0;
                beklemedeWeek2 = 0;
                beklemedeWeek3 = 0;
                beklemedeWeek4 = 0;
                beklemedeWeek5 = 0;
                beklemedeWeek6 = 0;
                beklemedeWeek7 = 0;
                if (beklemede !== undefined) {
                    beklemedeWeek1 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[0].getDate(); }).length;
                    beklemedeWeek2 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[1].getDate(); }).length;
                    beklemedeWeek3 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[2].getDate(); }).length;
                    beklemedeWeek4 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[3].getDate(); }).length;
                    beklemedeWeek5 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[4].getDate(); }).length;
                    beklemedeWeek6 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[5].getDate(); }).length;
                    beklemedeWeek7 = beklemede.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[6].getDate(); }).length;
                }
                toplamWeek1 = 0;
                toplamWeek2 = 0;
                toplamWeek3 = 0;
                toplamWeek4 = 0;
                toplamWeek5 = 0;
                toplamWeek6 = 0;
                toplamWeek7 = 0;
                if (beklemede !== undefined) {
                    toplamWeek1 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[0].getDate(); }).length;
                    toplamWeek2 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[1].getDate(); }).length;
                    toplamWeek3 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[2].getDate(); }).length;
                    toplamWeek4 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[3].getDate(); }).length;
                    toplamWeek5 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[4].getDate(); }).length;
                    toplamWeek6 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[5].getDate(); }).length;
                    toplamWeek7 = data.filter(function (x) { return moment_1["default"](x.creationTime).toDate().getDate() === week[6].getDate(); }).length;
                }
                if (abp.localization.currentLanguage.name === "tr") {
                    model = [
                        { name: abpUtility_1.L('Monday'), talep: toplamWeek1, bekleyen: beklemedeWeek1, amt: 0, onaylanan: onaylandiWeek1, iptal: iptalWeek1 },
                        { name: abpUtility_1.L('Tuesday'), talep: toplamWeek2, bekleyen: beklemedeWeek2, amt: 0, onaylanan: onaylandiWeek2, iptal: iptalWeek2 },
                        { name: abpUtility_1.L('Wednesday'), talep: toplamWeek3, bekleyen: beklemedeWeek3, amt: 0, onaylanan: onaylandiWeek3, iptal: iptalWeek3 },
                        { name: abpUtility_1.L('Thursday'), talep: toplamWeek4, bekleyen: beklemedeWeek4, amt: 0, onaylanan: onaylandiWeek4, iptal: iptalWeek4 },
                        { name: abpUtility_1.L('Friday'), talep: toplamWeek5, bekleyen: beklemedeWeek5, amt: 0, onaylanan: onaylandiWeek5, iptal: iptalWeek5 },
                        { name: abpUtility_1.L('Saturday'), talep: toplamWeek6, bekleyen: beklemedeWeek6, amt: 0, onaylanan: onaylandiWeek6, iptal: iptalWeek6 },
                        { name: abpUtility_1.L('Sunday'), talep: toplamWeek7, bekleyen: beklemedeWeek7, amt: 0, onaylanan: onaylandiWeek7, iptal: iptalWeek7 }
                    ];
                    return [2 /*return*/, model];
                }
                else {
                    model = [
                        { name: abpUtility_1.L('Monday'), request: toplamWeek1, waiting: beklemedeWeek1, amt: 0, approved: onaylandiWeek1, cancel: iptalWeek1 },
                        { name: abpUtility_1.L('Tuesday'), request: toplamWeek2, waiting: beklemedeWeek2, amt: 0, approved: onaylandiWeek2, cancel: iptalWeek2 },
                        { name: abpUtility_1.L('Wednesday'), request: toplamWeek3, waiting: beklemedeWeek3, amt: 0, approved: onaylandiWeek3, cancel: iptalWeek3 },
                        { name: abpUtility_1.L('Thursday'), request: toplamWeek4, waiting: beklemedeWeek4, amt: 0, approved: onaylandiWeek4, cancel: iptalWeek4 },
                        { name: abpUtility_1.L('Friday'), request: toplamWeek5, waiting: beklemedeWeek5, amt: 0, approved: onaylandiWeek5, cancel: iptalWeek5 },
                        { name: abpUtility_1.L('Saturday'), request: toplamWeek6, waiting: beklemedeWeek6, amt: 0, approved: onaylandiWeek6, cancel: iptalWeek6 },
                        { name: abpUtility_1.L('Sunday'), request: toplamWeek7, waiting: beklemedeWeek7, amt: 0, approved: onaylandiWeek7, cancel: iptalWeek7 }
                    ];
                    return [2 /*return*/, model];
                }
                return [2 /*return*/];
            });
        }); };
        _this.changeLineViewHandler = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ lineChartView: !this.state.lineChartView });
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    Dashboard.prototype.render = function () {
        var _a = this.state, cardLoading = _a.cardLoading, lineFillLoading = _a.lineFillLoading, lineUpdateLoading = _a.lineUpdateLoading, moment = _a.moment, lineChartView = _a.lineChartView;
        var kPersonelCount = this.props.kPersonelStore.kPersonelCount;
        var normCount = this.props.kSubeNormStore.normCount;
        var _b = this.props.kNormStore, getTotalNormUpdateRequestCount = _b.getTotalNormUpdateRequestCount, getPendingNormFillRequestCount = _b.getPendingNormFillRequestCount, getTotalNormFillingRequestCount = _b.getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount = _b.getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount = _b.getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount = _b.getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount = _b.getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount = _b.getCanceledNormUpdateRequestCount;
        var lineChartLayout = {
            onePiece: {
                xs: { offset: 1, span: 22 },
                sm: { offset: 1, span: 22 },
                md: { offset: 1, span: 22 },
                lg: { offset: 1, span: 22 },
                xl: { offset: 0, span: 24 },
                xxl: { offset: 0, span: 24 }
            },
            twoPiece: {
                xs: { offset: 1, span: 23 },
                sm: { offset: 1, span: 23 },
                md: { offset: 1, span: 23 },
                lg: { offset: 1, span: 23 },
                xl: { offset: 0, span: 12 },
                xxl: { offset: 0, span: 12 }
            }
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(KCartList_1["default"], { moment: moment, type: "", bolgeId: 0, subeObjId: 0, normCount: normCount, cardLoading: cardLoading, kPersonelCount: kPersonelCount, onDateFilter: this.onDateFilter, kNormStore: this.props.kNormStore, kNormDetailStore: this.props.kNormDetailStore, getTotalNormUpdateRequestCount: getTotalNormUpdateRequestCount, getPendingNormFillRequestCount: getPendingNormFillRequestCount, getTotalNormFillingRequestCount: getTotalNormFillingRequestCount, getAcceptedNormFillRequestCount: getAcceptedNormFillRequestCount, getCanceledNormFillRequestCount: getCanceledNormFillRequestCount, getPendingNormUpdateRequestCount: getPendingNormUpdateRequestCount, getAcceptedNormUpdateRequestCount: getAcceptedNormUpdateRequestCount, getCanceledNormUpdateRequestCount: getCanceledNormUpdateRequestCount }),
            React.createElement(antd_1.Row, { gutter: 16 },
                React.createElement(antd_1.Col, __assign({}, (lineChartView ? lineChartLayout.onePiece : lineChartLayout.twoPiece)),
                    React.createElement(antd_1.Card, { extra: React.createElement(antd_1.Button, { onClick: this.changeLineViewHandler, icon: (lineChartView ? React.createElement(icons_1.FullscreenExitOutlined, null) : React.createElement(icons_1.FullscreenOutlined, null)) }), hoverable: true, className: 'dashboardBox', title: abpUtility_1.L('TotalNormFillingRequestWeeklyStatistics'), loading: lineFillLoading, bordered: false },
                        React.createElement(KLineChart_1["default"], { data: this.state.totalFill }))),
                React.createElement(antd_1.Col, __assign({}, (lineChartView ? lineChartLayout.onePiece : lineChartLayout.twoPiece)),
                    React.createElement(antd_1.Card, { extra: React.createElement(antd_1.Button, { onClick: this.changeLineViewHandler, icon: (lineChartView ? React.createElement(icons_1.FullscreenExitOutlined, null) : React.createElement(icons_1.FullscreenOutlined, null)) }), hoverable: true, className: 'dashboardBox', title: abpUtility_1.L('TotalNormUpdateRequestWeeklyStatistics'), loading: lineUpdateLoading, bordered: false },
                        React.createElement(KLineChart_1["default"], { data: this.state.totalUpdate }))))));
    };
    Dashboard = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KPersonelStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KSubeNormStore),
        mobx_react_1.inject(storeIdentifier_1["default"].KNormDetailStore),
        mobx_react_1.inject(storeIdentifier_1["default"].AuthenticationStore, storeIdentifier_1["default"].SessionStore, storeIdentifier_1["default"].AccountStore),
        mobx_react_1.observer
    ], Dashboard);
    return Dashboard;
}(React.Component));
exports.Dashboard = Dashboard;
exports["default"] = Dashboard;
