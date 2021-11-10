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
var react_1 = require("react");
require("antd/dist/antd.css");
require("./index.less");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var antd_1 = require("antd");
var mobx_react_1 = require("mobx-react");
var HasarTazmin_validation_1 = require("./HasarTazmin.validation");
var react_router_dom_1 = require("react-router-dom");
var abpUtility_1 = require("../../lib/abpUtility");
var GonderenCariSelect_1 = require("./components/GonderenCariSelect");
var AliciCariSelect_1 = require("./components/AliciCariSelect");
var FarkliCari_1 = require("./components/FarkliCari");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var icons_1 = require("@ant-design/icons");
var DamageCompensation = /** @class */ (function (_super) {
    __extends(DamageCompensation, _super);
    function DamageCompensation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = react_1["default"].createRef();
        _this.state = {
            setradioValue: 1,
            setsorgulama: true,
            setformreadonly: true,
            setformselectdisable: true,
            settazminmusteriAlici: false,
            settazminmusteriFarkli: false,
            setradioValueTazminMusteri: 4,
            settazminmusteriGonderici: false,
            Ktno: 0
        };
        _this.getdamage = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.kDamageCompensationStore
                                .getDamageComppensation({ id: id })
                                .then(function (response) {
                                setTimeout(function () {
                                    var _a;
                                    (_a = _this.formRef.current) === null || _a === void 0 ? void 0 : _a.setFieldsValue(__assign({}, _this.props.kDamageCompensationStore.getCreateDamageInput));
                                }, 500);
                            })["catch"](function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    DamageCompensation.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DamageCompensation.prototype.render = function () {
        var _this = this;
        var Option = antd_1.Select.Option;
        var TabPane = antd_1.Tabs.TabPane;
        //bugunün tarihi
        var today = Date.now();
        var test = new Intl.DateTimeFormat('tr-TR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(today);
        var onChangeRadio = function (e) {
            var _a, _b, _c, _d;
            var changeRadio = e.target.value;
            _this.setState({ setradioValue: changeRadio });
            if (changeRadio === 1) {
                _this.setState({ setformreadonly: true });
                _this.setState({ setformselectdisable: true });
                _this.setState({ setsorgulama: true });
                _this.setState({ settazminmusteriGonderici: false });
                _this.setState({ settazminmusteriAlici: false });
                _this.setState({ settazminmusteriFarkli: false });
                (_b = (_a = _this.formRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.resetFields();
            }
            else {
                _this.setState({ setformreadonly: false });
                _this.setState({ setformselectdisable: false });
                _this.setState({ setsorgulama: false });
                _this.setState({ settazminmusteriGonderici: false });
                _this.setState({ settazminmusteriAlici: false });
                _this.setState({ settazminmusteriFarkli: false });
                (_d = (_c = _this.formRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.resetFields();
            }
        };
        var onChangeRadioTazminMusteri = function (e) {
            _this.setState({ setradioValueTazminMusteri: e.target.value });
            if (e.target.value === 0) {
                _this.setState({ settazminmusteriGonderici: true });
                _this.setState({ settazminmusteriAlici: false });
                _this.setState({ settazminmusteriFarkli: false });
            }
            else if (e.target.value === 1) {
                _this.setState({ settazminmusteriGonderici: false });
                _this.setState({ settazminmusteriAlici: true });
                _this.setState({ settazminmusteriFarkli: false });
            }
            else {
                console.log(_this.state.setsorgulama);
                if (_this.state.setsorgulama === false) {
                    _this.setState({ settazminmusteriGonderici: false });
                    _this.setState({ settazminmusteriAlici: false });
                    _this.setState({ settazminmusteriFarkli: true });
                }
                else {
                    antd_1.notification.open({
                        icon: react_1["default"].createElement(icons_1.AlertOutlined, { style: { color: 'red' } }),
                        message: 'Uyarı',
                        description: 'Farklı cari girilmesi için kargo takip numarasının bilinmiyor olması gerekiyor.'
                    });
                    _this.setState({ setradioValueTazminMusteri: 4 });
                    _this.setState({ settazminmusteriGonderici: false });
                    _this.setState({ settazminmusteriAlici: false });
                }
            }
        };
        var onFinish = function (values) {
            console.log('Success:', values);
        };
        var onFinishFailed = function (errorInfo) {
            console.log('Failed:', errorInfo);
        };
        //tab callback
        function callback(key) {
            console.log(key);
        }
        var handleChange = function (e) {
            _this.setState({ Ktno: e.target.value });
        };
        var handleClick = function (e) {
            _this.getdamage(_this.state.Ktno);
        };
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(antd_1.Card, { style: { marginBottom: 20 } },
                    react_1["default"].createElement(antd_1.PageHeader, { ghost: false, onBack: function () { return window.history.back(); }, title: react_1["default"].createElement(antd_1.Breadcrumb, null,
                            react_1["default"].createElement(antd_1.Breadcrumb.Item, null,
                                abpUtility_1.isGranted('items.dashboard.view') ? (react_1["default"].createElement(react_router_dom_1.Link, { to: "/dashboard" }, abpUtility_1.L('Dashboard'))) : (react_1["default"].createElement(react_router_dom_1.Link, { to: "/home" }, abpUtility_1.L('Dashboard'))),
                                ' '),
                            react_1["default"].createElement(antd_1.Breadcrumb.Item, null,
                                " ",
                                abpUtility_1.L('DamageCompensation'),
                                " "),
                            react_1["default"].createElement(antd_1.Breadcrumb.Item, null, "Hasar Tazmin Formu ")) })),
                react_1["default"].createElement(antd_1.Card, null,
                    react_1["default"].createElement(antd_1.Tabs, { defaultActiveKey: "1", onChange: callback, tabBarGutter: 50, 
                        // type="card"
                        tabPosition: "top", size: "large" },
                        react_1["default"].createElement(TabPane, { tab: react_1["default"].createElement("span", null,
                                react_1["default"].createElement(icons_1.SwitcherOutlined, null),
                                "Tanzim Bilgileri"), key: "1" },
                            react_1["default"].createElement(antd_1.Row, null,
                                react_1["default"].createElement(antd_1.Col, { span: 24 },
                                    react_1["default"].createElement(antd_1.Form, { layout: "inline" },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "coders", label: react_1["default"].createElement("label", { style: { fontWeight: 'bold' } }, "Tanzim No"), labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: true, defaultValue: "001" })),
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "coders", label: react_1["default"].createElement("label", { style: { fontWeight: 'bold' } }, "Tanzim Stat\u00FCs\u00FC"), labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: true, defaultValue: "Yeni Tazmin" }))))),
                            react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "Sorgulama"),
                            react_1["default"].createElement(antd_1.Row, null,
                                react_1["default"].createElement(antd_1.Col, { span: 12 },
                                    react_1["default"].createElement(antd_1.Form, { layout: "inline" },
                                        react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Takip No" },
                                            react_1["default"].createElement(antd_1.Radio.Group, { onChange: onChangeRadio, value: this.state.setradioValue },
                                                react_1["default"].createElement(antd_1.Radio, { value: 1 }, "Biliniyor"),
                                                react_1["default"].createElement(antd_1.Radio, { value: 2 }, "Bilinmiyor"))),
                                        this.state.setsorgulama ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                            react_1["default"].createElement(antd_1.Form.Item, { label: "Takip No", labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                                react_1["default"].createElement(antd_1.Input, { placeholder: "Kargo Takip Numaras\u0131", name: "ktno", onChange: handleChange })),
                                            react_1["default"].createElement(antd_1.Form.Item, { label: "", labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                                react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: handleClick }, "Getir")))) : (react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Kabul Fi\u015F No", labelCol: { span: 15 }, wrapperCol: { span: 20 } },
                                            react_1["default"].createElement(antd_1.Input, { placeholder: "Kargo Kabul Fi\u015F No" })))))),
                            react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "G\u00F6nderi Bilgileri"),
                            react_1["default"].createElement(antd_1.Form, { ref: this.formRef, initialValues: { remember: false }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].sistem_InsertTime, name: "sistem_InsertTime", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Evrak Olu\u015Fturma Tarihi") },
                                            react_1["default"].createElement(antd_1.Input
                                            //readOnly={this.state.setformreadonly}
                                            , { 
                                                //readOnly={this.state.setformreadonly}
                                                className: "formInput", type: "date" }))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].evrakSeriNo, name: "evrakSeriNo", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Evrak Seri S\u0131ra No") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", placeholder: "Evrak Seri S\u0131ra No" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].gonderenKodu, name: "gonderenKodu", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "G\u00F6nderici Kodu") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable },
                                                react_1["default"].createElement(Option, { value: "1000011" }, "1000011"),
                                                react_1["default"].createElement(Option, { value: "1000012" }, "1000012"),
                                                react_1["default"].createElement(Option, { value: "1000013" }, "1000013"),
                                                react_1["default"].createElement(Option, { value: "1000014" }, "1000014")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].gonderenUnvan, name: "gonderenUnvan", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "G\u00F6nderici") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", placeholder: "G\u00F6nderici" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].aliciKodu, name: "aliciKodu", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Al\u0131c\u0131 Kodu") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable },
                                                react_1["default"].createElement(Option, { value: "1000011" }, "1000011"),
                                                react_1["default"].createElement(Option, { value: "1000012" }, "1000012"),
                                                react_1["default"].createElement(Option, { value: "1000013" }, "1000013"),
                                                react_1["default"].createElement(Option, { value: "1000014" }, "1000014")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].aliciUnvan, name: "aliciUnvan", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Al\u0131c\u0131") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", placeholder: "Al\u0131c\u0131" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].cikis_Sube_Unvan, name: "cikis_Sube_Unvan", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "\u00C7\u0131k\u0131\u015F \u015Eube Ad\u0131") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable },
                                                react_1["default"].createElement(Option, { value: "incirli" }, "incirli"),
                                                react_1["default"].createElement(Option, { value: "ikitelli aktarma" }, "ikitelli aktarma"),
                                                react_1["default"].createElement(Option, { value: "mikro ba\u011Fc\u0131lar" }, "mikro ba\u011Fc\u0131lar"),
                                                react_1["default"].createElement(Option, { value: "ata\u015Fehir" }, "ata\u015Fehir")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].varis_Sube_Unvan, name: "varis_Sube_Unvan", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Var\u0131\u015F \u015Eube Ad\u0131") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable },
                                                react_1["default"].createElement(Option, { value: "incirli" }, "incirli"),
                                                react_1["default"].createElement(Option, { value: "ikitelli aktarma" }, "ikitelli aktarma"),
                                                react_1["default"].createElement(Option, { value: "mikro ba\u011Fc\u0131lar" }, "mikro ba\u011Fc\u0131lar"),
                                                react_1["default"].createElement(Option, { value: "ata\u015Fehir" }, "ata\u015Fehir"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].birimi, name: "birimi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Kargo Tipi") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable },
                                                react_1["default"].createElement(Option, { value: "Mi" }, "Mi"),
                                                react_1["default"].createElement(Option, { value: "Paket" }, "Paket"),
                                                react_1["default"].createElement(Option, { value: "Koli" }, "Koli")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].adet, name: "adet", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Par\u00E7a Adedi") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", type: "number", min: 1, max: 1000, placeholder: "Par\u00E7a Adedi" })))),
                                react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "Tazmin Bilgileri"),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].tazminTalepTarihi, name: "tazminTalepTarihi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Tazmin Talep Tarihi") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", readOnly: true, defaultValue: test }))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].tazminTipi, name: "tazminTipi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Tazmin Tipi") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true },
                                                react_1["default"].createElement(Option, { value: "Hasar" }, "Hasar"),
                                                react_1["default"].createElement(Option, { value: "Kay\u0131p" }, "Kay\u0131p"),
                                                react_1["default"].createElement(Option, { value: "Ge\u00E7 Teslimat" }, "Ge\u00E7 Teslimat"),
                                                react_1["default"].createElement(Option, { value: "M\u00FC\u015Fteri Memnuniyeti" }, "M\u00FC\u015Fteri Memnuniyeti"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Tazmin M\u00FC\u015Fterisi") },
                                            react_1["default"].createElement(antd_1.Radio.Group, { onChange: onChangeRadioTazminMusteri, value: this.state.setradioValueTazminMusteri },
                                                react_1["default"].createElement(antd_1.Radio, { value: 0 }, "G\u00F6nderen Cari"),
                                                react_1["default"].createElement(antd_1.Radio, { value: 1 }, "Al\u0131c\u0131 Cari"),
                                                react_1["default"].createElement(antd_1.Radio, { value: 2 }, "Farkl\u0131 Cari"))),
                                        this.state.settazminmusteriGonderici ? react_1["default"].createElement(GonderenCariSelect_1["default"], null) : '',
                                        this.state.settazminmusteriAlici ? react_1["default"].createElement(AliciCariSelect_1["default"], null) : '',
                                        this.state.settazminmusteriFarkli ? react_1["default"].createElement(FarkliCari_1["default"], null) : ''),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].odemeSekli, name: "odemeSekli", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "\u00D6denecek M\u00FC\u015Fteri Tipi") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true },
                                                react_1["default"].createElement(Option, { value: "Bireysel" }, "Bireysel"),
                                                react_1["default"].createElement(Option, { value: "Kurumsal" }, "Kurumsal"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].tckno, name: "tckno", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "TC Kimlik No") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "TC Kimlik No" }))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].vergiKimlik, name: "vergiKimlik", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Vergi Kimlik No") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "Vergi Kimlik No" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].odemeBirimiBolge, name: "odemeBirimiBolge", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "\u00D6deme Birimi/B\u00F6lge") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true },
                                                react_1["default"].createElement(Option, { value: "\u0130kitelli B\u00F6lge" }, "\u0130kitelli B\u00F6lge"),
                                                react_1["default"].createElement(Option, { value: "Genel M\u00FCd\u00FCrl\u00FCk" }, "Genel M\u00FCd\u00FCrl\u00FCk")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].talepEdilenTutar, name: "talepEdilenTutar", tooltip: "KDV TUTAR HAR\u0130\u00C7", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Talep Edilen Tutar") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", type: "number", placeholder: "Talep Edilen Tutar KDV Hari\u00E7" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].surecSahibiniBolgeyeAta, name: "surecSahibiniBolgeyeAta", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "S\u00FCre\u00E7 Sahibi Birim/B\u00F6lge") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true },
                                                react_1["default"].createElement(Option, { value: "\u0130kitelli B\u00F6lge" }, "\u0130kitelli B\u00F6lge"),
                                                react_1["default"].createElement(Option, { value: "Genel M\u00FCd\u00FCrl\u00FCk" }, "Genel M\u00FCd\u00FCrl\u00FCk"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "SMS", rules: HasarTazmin_validation_1["default"].SMS, label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Bilgilendirme(SMS)") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "SMS" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "email", rules: HasarTazmin_validation_1["default"].email, label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Bilgilendirme(Email)") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "Email" })))),
                                react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "Tazmin Belgeleri"),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Belgeler") },
                                            react_1["default"].createElement(antd_1.Upload, { maxCount: 4, multiple: true, listType: "picture" },
                                                react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.FileAddTwoTone, null) }, "Max(4)"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Belgeler") },
                                            react_1["default"].createElement(antd_1.Upload, { maxCount: 4, multiple: true, listType: "picture" },
                                                react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.FileAddTwoTone, null) }, "Max(4)"))))),
                                react_1["default"].createElement(antd_1.Row, { style: { float: 'right' } },
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Space, { style: { width: '100%' } },
                                            react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.SendOutlined, null), htmlType: "submit" }, "Onaya G\u00F6nder")))))),
                        react_1["default"].createElement(TabPane, { tab: "De\u011Ferlendirme", key: "2" }, "Content of Tab Pane 2"),
                        react_1["default"].createElement(TabPane, { tab: "Tarih\u00E7e", key: "3" }, "Content of Tab Pane 3"))))));
    };
    DamageCompensation = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KDamageCompensationStore),
        mobx_react_1.observer
    ], DamageCompensation);
    return DamageCompensation;
}(AppComponentBase_1["default"]));
exports["default"] = DamageCompensation;
