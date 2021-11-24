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
// import GonderenCariSelect from './components/GonderenCariSelect';
// import AliciCariSelect from './components/AliciCariSelect';
// import FarkliCari from './components/FarkliCari';
// import EditableTagGroup from './components/LinkTag';
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var icons_1 = require("@ant-design/icons");
var rc_textarea_1 = require("rc-textarea");
var DamageCompensation = /** @class */ (function (_super) {
    __extends(DamageCompensation, _super);
    function DamageCompensation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formRef = react_1["default"].createRef();
        _this.formRefDeg = react_1["default"].createRef();
        _this.state = {
            setradioValue: 1,
            setsorgulama: true,
            setformreadonly: true,
            setformselectdisable: true,
            settazminmusteriAlici: false,
            settazminmusteriFarkli: false,
            setradioValueTazminMusteri: 4,
            settazminmusteriGonderici: false,
            Ktno: 0,
            cariList: [],
            gonderiUnvanInput: '',
            aliciUnvanInput: '',
            subeList: [],
            birimList: [],
            bolgeList: [],
            lastId: 0,
            SurecSahibibolgeList: [],
            tagLink: 'cengiz',
            fileInput: '',
            //değerlendirme 
            selectedItems: []
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
                                // console.log('gelenform',this.props.kDamageCompensationStore.getCreateDamageInput)
                            })["catch"](function () { return antd_1.notification.open({
                                icon: react_1["default"].createElement(icons_1.AlertOutlined, { style: { color: 'red' } }),
                                message: 'Uyarı',
                                description: 'Kayıt Bulunamadı.Takip Numarası Hatalı'
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.getcarilistdamageCompensation = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.kDamageCompensationStore
                                .getCariListDamageComppensation({ id: id })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //sube listesi
        _this.getsubelistdamageCompensation = function () { return __awaiter(_this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.kDamageCompensationStore.getSubeListDamageComppensation()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //Bolge listesi
        _this.getbolgelistdamageCompensation = function () { return __awaiter(_this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.kDamageCompensationStore.getBolgeListDamageComppensation()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //Birim listesi
        _this.getbirimlistdamageCompensation = function () { return __awaiter(_this, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.props.kDamageCompensationStore.getBirimListDamageComppensation()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        console.log(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //sonıd cekme 
        _this.getlastiddamageCompensation = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kDamageCompensationStore.GetDamageComppensationLastId()];
                    case 1:
                        _a.sent();
                        this.setState({ lastId: this.props.kDamageCompensationStore.lastIdDamage });
                        return [2 /*return*/];
                }
            });
        }); };
        // Tanzim  için  Oluşturma Metodu
        _this.kDamageCompensationCreate = function () {
            var form = _this.formRef.current;
            form.validateFields().then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            values.FileInfo = this.state.fileInput;
                            return [4 /*yield*/, this.props.kDamageCompensationStore.create(values)];
                        case 1:
                            _a.sent();
                            this.openNotificationWithIcon('success');
                            form.resetFields();
                            return [4 /*yield*/, this.getlastiddamageCompensation()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        // Tanzim  Değerlendirm için  Oluşturma Metodu
        _this.kDamageCompensationEvalutaionCreate = function () {
            var form = _this.formRefDeg.current;
            form.validateFields().then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.props.kDamageCompensationStore.createDamageCompensationEvalutaion(values)];
                        case 1:
                            _a.sent();
                            this.openNotificationWithIcon('success');
                            form.resetFields();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        _this.openNotificationWithIcon = function (type) {
            antd_1.notification[type]({
                message: type === "success" ? 'Tazmin Başarıyla Kaydedildi' : abpUtility_1.L('NormRejectNotificationMessageTitle'),
                description: type === "success" ? '' : abpUtility_1.L('NormCreateNotificationMessageDescription'),
                duration: 3
            });
        };
        return _this;
    }
    DamageCompensation.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getsubelistdamageCompensation()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getbirimlistdamageCompensation()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getbolgelistdamageCompensation()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getlastiddamageCompensation()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DamageCompensation.prototype.render = function () {
        var _this = this;
        var Option = antd_1.Select.Option;
        var TabPane = antd_1.Tabs.TabPane;
        //const dateFormat = 'YYYY/MM/DD';
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
            if (_this.state.Ktno !== 0) {
                _this.getdamage(_this.state.Ktno);
                setTimeout(function () { console.log(_this.props.kDamageCompensationStore.getCreateDamageInput); }, 1000);
            }
            else {
                antd_1.notification.open({
                    icon: react_1["default"].createElement(icons_1.AlertOutlined, { style: { color: 'red' } }),
                    message: 'Uyarı',
                    description: 'Takip No Numarası Giriniz.'
                });
            }
        };
        var onSearch = function (val) {
            if (val.length > 3) {
                _this.getcarilistdamageCompensation(val);
                _this.setState({
                    cariList: _this.props.kDamageCompensationStore.getCariListDamage !== undefined && _this.props.kDamageCompensationStore.getCariListDamage.map(function (value, index) {
                        return react_1["default"].createElement(Option, { key: 'cari' + value.kodu, value: value.unvan },
                            " ",
                            value.kodu,
                            " ");
                    })
                });
            }
        };
        var onChangeGondericiSelect = function (res) {
            _this.setState({ gonderiUnvanInput: res });
            setTimeout(function () { console.log(_this.state.gonderiUnvanInput); }, 100);
        };
        var onChangeAliciSelect = function (res) {
            _this.setState({ aliciUnvanInput: res });
            setTimeout(function () { console.log(_this.state.aliciUnvanInput); }, 100);
        };
        //onDropdownVisibleChangeCikis cikis selectin tıklandıgında
        var onDropdownVisibleChangeCikis = function () {
            _this.setState({
                subeList: _this.props.kDamageCompensationStore.getSubeListDamage !== undefined && _this.props.kDamageCompensationStore.getSubeListDamage.map(function (value, index) {
                    return react_1["default"].createElement(Option, { key: value.objId + '-' + index, value: value.objId + '-' + index },
                        " ",
                        value.adi,
                        " ");
                })
            });
        };
        //onDropdownVisibleChangeVaris varis selectin tıklandıgında
        var onDropdownVisibleChangeVaris = function () {
            _this.setState({
                subeList: _this.props.kDamageCompensationStore.getSubeListDamage !== undefined && _this.props.kDamageCompensationStore.getSubeListDamage.map(function (value, index) {
                    return react_1["default"].createElement(Option, { key: value.objId + '-' + index, value: value.objId + '-' + index },
                        " ",
                        value.adi,
                        " ");
                })
            });
        };
        //onDropdownVisibleChangeBrim birim selectin tıklandıgında
        var onDropdownVisibleChangeBirim = function () {
            _this.setState({
                birimList: _this.props.kDamageCompensationStore.getBirimListDamage !== undefined && _this.props.kDamageCompensationStore.getBirimListDamage.map(function (value, index) {
                    return react_1["default"].createElement(Option, { key: value.objId + '-' + index, value: value.objId + '-' + index },
                        " ",
                        value.adi,
                        " ");
                })
            });
        };
        //onDropdownVisibleChangeBolge ödeme bolge selectin tıklandıgında
        var onDropdownVisibleChangeBolge = function () {
            _this.setState({
                bolgeList: _this.props.kDamageCompensationStore.getBolgeListDamage !== undefined && _this.props.kDamageCompensationStore.getBolgeListDamage.map(function (value, index) {
                    return react_1["default"].createElement(Option, { key: value.objId + '-' + index, value: value.objId + '-' + index },
                        " ",
                        value.adi,
                        " ");
                })
            });
        };
        //onDropdownVisibleChange SurecSahibiBolge ödeme bolge selectin tıklandıgında
        var onDropdownVisibleChangeSurecSahibiBolge = function () {
            _this.setState({
                SurecSahibibolgeList: _this.props.kDamageCompensationStore.getBolgeListDamage !== undefined && _this.props.kDamageCompensationStore.getBolgeListDamage.map(function (value, index) {
                    return react_1["default"].createElement(Option, { key: value.objId + '-' + index, value: value.objId + '-' + index },
                        " ",
                        value.adi,
                        " ");
                })
            });
        };
        // const onChangeFile = (info) => {
        //   let len = info.fileList.length
        //   this.setState({ fileInput: '' })
        //   for (var i = 0; i < len; i++) {
        //     let ttx = this.state.fileInput
        //     this.setState({ fileInput: ttx + ',' + info.fileList[i].name })
        //   }
        // }
        var Deghasar = ['Taşımadan Kaynaklı', 'İstif Hatası', 'Kaza', 'Teslimat Esnasında Tespit-DTT Var', 'Teslimattan Sonra-DTT', 'Aracın Su Alması', 'Banttan Düşme',
            'Farklı Kargonun Zarar Vermesi', 'Ambalaj Yetersizliği', 'Doğal Afet', 'Müşteri Memnuniyeti'];
        var DegKayıp = ['Adres Teslim Sırasında Kayıp', 'Aktarma-Aktarma Arasında', 'Faturası Düzenlenmeden Kayıp', 'Gasp', 'İçten Eksilme', 'Kaza', 'Şube Kayıp', 'Birim-Aktarma Arasında Kayıp', 'Teslim Belgesi Sunulamaması', 'Yanlış Kişiye Teslimat', 'Müşteri Memnuniyeti'];
        var DegGecTeslimat = ['Geç Teslim'];
        var DegMusteriMemnuniyeti = ['Müşteri Memnuniyeti'];
        var DegOnchangeTazminTipi = function (value) {
            if (value === "1") {
                _this.setState({
                    selectedItems: Deghasar.map(function (value, index) {
                        return react_1["default"].createElement(Option, { key: index, value: index },
                            " ",
                            value,
                            " ");
                    })
                });
            }
            else if (value === "2") {
                _this.setState({
                    selectedItems: DegKayıp.map(function (value, index) {
                        return react_1["default"].createElement(Option, { key: index, value: index },
                            " ",
                            value,
                            " ");
                    })
                });
            }
            else if (value === "3") {
                _this.setState({
                    selectedItems: DegGecTeslimat.map(function (value, index) {
                        return react_1["default"].createElement(Option, { key: index, value: index },
                            " ",
                            value,
                            " ");
                    })
                });
            }
            else if (value === "4") {
                _this.setState({
                    selectedItems: DegMusteriMemnuniyeti.map(function (value, index) {
                        return react_1["default"].createElement(Option, { key: index, value: index },
                            " ",
                            value,
                            " ");
                    })
                });
            }
            else
                (antd_1.notification.open({
                    icon: react_1["default"].createElement(icons_1.AlertOutlined, { style: { color: 'red' } }),
                    message: 'Uyarı',
                    description: 'Lütfen Tazmin Tipi Seçiniz.'
                }));
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
                                    react_1["default"].createElement(antd_1.Form, null,
                                        react_1["default"].createElement(antd_1.Row, null,
                                            react_1["default"].createElement(antd_1.Col, { style: { float: 'right' } },
                                                react_1["default"].createElement(antd_1.Form.Item, { name: "", label: react_1["default"].createElement("label", null, "Tanzim No"), labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                                    console.log(this.state.lastId),
                                                    react_1["default"].createElement(antd_1.Input, { disabled: true, className: "formInput", value: this.state.lastId }))),
                                            react_1["default"].createElement(antd_1.Col, null,
                                                react_1["default"].createElement(antd_1.Form.Item, { name: "", label: react_1["default"].createElement("label", null, "Tanzim Stat\u00FCs\u00FC"), labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                                    react_1["default"].createElement(antd_1.Input, { readOnly: true, className: "formInput", defaultValue: "Taslak" }))))))),
                            react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "Sorgulama"),
                            react_1["default"].createElement(antd_1.Row, null,
                                react_1["default"].createElement(antd_1.Col, { span: 12 },
                                    react_1["default"].createElement(antd_1.Form, { layout: "inline" },
                                        react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Takip No", name: 'kargotakipNoRadio' },
                                            react_1["default"].createElement(antd_1.Radio.Group, { onChange: onChangeRadio, defaultValue: this.state.setradioValue },
                                                react_1["default"].createElement(antd_1.Radio, { value: 1 }, "Biliniyor"))),
                                        this.state.setsorgulama ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                                            react_1["default"].createElement(antd_1.Form.Item, { labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                                react_1["default"].createElement(antd_1.Input, { type: 'number', placeholder: "Kargo Takip Numaras\u0131", name: "ktno", onChange: handleChange })),
                                            react_1["default"].createElement(antd_1.Form.Item, { label: "", labelCol: { span: 10 }, wrapperCol: { span: 16 } },
                                                react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: handleClick }, "Getir")))) : (react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Kabul Fi\u015F No", labelCol: { span: 15 }, wrapperCol: { span: 20 } },
                                            react_1["default"].createElement(antd_1.Input, { placeholder: "Kargo Kabul Fi\u015F No" })))))),
                            react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "G\u00F6nderi Bilgileri"),
                            react_1["default"].createElement(antd_1.Form, { ref: this.formRef, initialValues: { remember: false }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { hidden: true, name: 'takipNo' },
                                            react_1["default"].createElement(antd_1.Input, null)),
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].sistem_InsertTime, name: "sistem_InsertTime", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Evrak Olu\u015Fturma Tarihi") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", type: "date" }))),
                                    this.state.setsorgulama ?
                                        react_1["default"].createElement(antd_1.Col, { span: 12 },
                                            react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].evrakSeriNo, name: "evrakSeriNo", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Evrak Seri S\u0131ra No") },
                                                react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", placeholder: "Evrak Seri S\u0131ra No" })))
                                        : ''),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].gonderenKodu, name: "gonderenKodu", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "G\u00F6nderici Kodu") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable, onSearch: onSearch, onChange: onChangeGondericiSelect }, this.state.cariList))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "gonderenUnvan", rules: HasarTazmin_validation_1["default"].gonderenUnvan, label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "G\u00F6nderici") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: true, className: "formInput", placeholder: "G\u00F6nderici" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].aliciKodu, name: "aliciKodu", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Al\u0131c\u0131 Kodu") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true, disabled: this.state.setformselectdisable, 
                                                // options={options}
                                                onSearch: onSearch, onChange: onChangeAliciSelect }, this.state.cariList))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "aliciUnvan", rules: HasarTazmin_validation_1["default"].aliciUnvan, label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Al\u0131c\u0131") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: true, className: "formInput", placeholder: "Alici" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].cikis_Sube_Unvan, name: "cikis_Sube_Unvan", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "\u00C7\u0131k\u0131\u015F \u015Eube Ad\u0131") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", disabled: this.state.setformselectdisable, onDropdownVisibleChange: onDropdownVisibleChangeCikis, placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true }, this.state.subeList)),
                                        react_1["default"].createElement(antd_1.Form.Item, { hidden: true, name: "ilkGondericiSube_ObjId" }, " ")),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { hidden: true, name: "varisSube_ObjId" }, " "),
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].varis_Sube_Unvan, name: "varis_Sube_Unvan", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Var\u0131\u015F \u015Eube Ad\u0131") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable, onDropdownVisibleChange: onDropdownVisibleChangeVaris }, this.state.subeList)))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { hidden: true, name: "birimi_ObjId" }, " "),
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].birimi, name: "birimi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Kargo Tipi") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, disabled: this.state.setformselectdisable, onDropdownVisibleChange: onDropdownVisibleChangeBirim }, this.state.birimList))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].adet, name: "adet", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Par\u00E7a Adedi") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: this.state.setformreadonly, className: "formInput", type: "number", min: 1, max: 1000, placeholder: "Par\u00E7a Adedi" })))),
                                react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "Tazmin Bilgileri"),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Tazmin_Talep_Tarihi, name: "Tazmin_Talep_Tarihi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Tazmin Talep Tarihi") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", type: 'date' }))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Tazmin_Tipi, name: "Tazmin_Tipi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Tazmin Tipi") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "Hasar"),
                                                react_1["default"].createElement(Option, { value: "2" }, "Kay\u0131p"),
                                                react_1["default"].createElement(Option, { value: "3" }, "Ge\u00E7 Teslimat"),
                                                react_1["default"].createElement(Option, { value: "4" }, "M\u00FC\u015Fteri Memnuniyeti"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Tazmin_Musteri_Tipi, name: "Tazmin_Musteri_Tipi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Tazmin M\u00FC\u015Fterisi") },
                                            react_1["default"].createElement(antd_1.Radio.Group, { onChange: onChangeRadioTazminMusteri, value: this.state.setradioValueTazminMusteri },
                                                react_1["default"].createElement(antd_1.Radio, { value: 0 }, "G\u00F6nderen Cari"),
                                                react_1["default"].createElement(antd_1.Radio, { value: 1 }, "Al\u0131c\u0131 Cari")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Odeme_Musteri_Tipi, name: "Odeme_Musteri_Tipi", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "\u00D6denecek M\u00FC\u015Fteri Tipi") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "Bireysel"),
                                                react_1["default"].createElement(Option, { value: "2" }, "Kurumsal"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' },
                                                { pattern: /^[\d]{11,11}$/, message: 'TC no 11 karakterden az ve fazla olamaz' },
                                                { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                                            ], name: "TCK_NO", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "TC Kimlik No") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "TC Kimlik No" }))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' },
                                                { pattern: /^[\d]{11,11}$/, message: 'Vkno no 11 karakterden az ve fazla olamaz' },
                                                { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                                            ], name: "VK_NO", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Vergi Kimlik No") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "Vergi Kimlik No" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Odeme_Birimi_Bolge, name: "Odeme_Birimi_Bolge", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "\u00D6deme Birimi/B\u00F6lge") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, onDropdownVisibleChange: onDropdownVisibleChangeBolge }, this.state.bolgeList))),
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Talep_Edilen_Tutar, name: "Talep_Edilen_Tutar", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Talep Edilen Tutar ") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", type: "number", placeholder: "Talep Edilen Tutar KDV Hari\u00E7" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { rules: HasarTazmin_validation_1["default"].Surec_Sahibi_Birim_Bolge, name: "Surec_Sahibi_Birim_Bolge", label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "S\u00FCre\u00E7 Sahibi Birim/B\u00F6lge") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", showSearch: true, placeholder: "Se\u00E7iniz", allowClear: true, onDropdownVisibleChange: onDropdownVisibleChangeSurecSahibiBolge }, this.state.SurecSahibibolgeList)))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "Telefon", rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' },
                                                { pattern: /^[\d]{10,11}$/, message: 'Lütfen geçerli bir telefon numarası giriniz' },
                                                { pattern: /^(?:\d*)$/, message: 'Sadece sayısal değerler girilebilir' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Bilgilendirme(SMS)") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "SMS" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: "Email", rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' },
                                                { type: "email", message: 'Lütfen geçerli bir Email  giriniz' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 150, minWidth: 150 } }, "Bilgilendirme(Email)") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput", placeholder: "Email" })))),
                                react_1["default"].createElement(antd_1.Divider, { orientation: "left" }, "Tazmin Belgeleri"),
                                react_1["default"].createElement(antd_1.Row, { style: { float: 'right' } },
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Space, { style: { width: '100%' } },
                                            react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: this.kDamageCompensationCreate, icon: react_1["default"].createElement(icons_1.SendOutlined, null), htmlType: "submit" }, "Kaydet")))))),
                        react_1["default"].createElement(TabPane, { tab: react_1["default"].createElement("span", null,
                                react_1["default"].createElement(icons_1.SwitcherOutlined, null),
                                "De\u011Ferlendirme"), key: "2" },
                            react_1["default"].createElement(antd_1.Form, { ref: this.formRefDeg, layout: 'horizontal' },
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaTazmin_Tipi', label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Tazmin Tipi"), rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ] },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true, onChange: DegOnchangeTazminTipi },
                                                react_1["default"].createElement(Option, { value: "1" }, "Hasar"),
                                                react_1["default"].createElement(Option, { value: "2" }, "Kay\u0131p"),
                                                react_1["default"].createElement(Option, { value: "3" }, "Ge\u00E7 Teslimat"),
                                                react_1["default"].createElement(Option, { value: "4" }, "M\u00FC\u015Fteri Memnuniyeti")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaTazmin_Nedeni', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Tazmin Nedeni") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true }, this.state.selectedItems)))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaKargo_Bulundugu_Yer', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Kargonun Bulundu\u011Fu Yer") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "\u00C7\u0131k\u0131\u015F Birim"),
                                                react_1["default"].createElement(Option, { value: "2" }, "\u00C7\u0131k\u0131\u015F Aktarma"),
                                                react_1["default"].createElement(Option, { value: "3" }, "Var\u0131\u015F Aktarma"),
                                                react_1["default"].createElement(Option, { value: "4" }, "Var\u0131\u015F Birim"),
                                                react_1["default"].createElement(Option, { value: "5" }, "G\u00F6nderici M\u00FCsteri"),
                                                react_1["default"].createElement(Option, { value: "6" }, "Al\u0131c\u0131 M\u00FC\u015Fteri"),
                                                react_1["default"].createElement(Option, { value: "7" }, "Di\u011Fer"),
                                                react_1["default"].createElement(Option, { value: "8" }, "\u0130mha")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaKusurlu_Birim', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Kusurlu Birim Var m\u0131?") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "Evet"),
                                                react_1["default"].createElement(Option, { value: "2" }, "Hay\u0131r"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaIcerik_Grubu', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "\u0130\u00E7erik Grubu") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "\u0130\u00E7erik")))),
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaIcerik', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "\u0130\u00E7erik") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "Evet"),
                                                react_1["default"].createElement(Option, { value: "2" }, "Hay\u0131r"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaUrun_Aciklama', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "\u00DCr\u00FCn A\u00E7\u0131klamas\u0131") },
                                            react_1["default"].createElement(antd_1.Input, { className: "formInput" }))),
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaEkleyen_Kullanici', label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Ekleyen Kullanc\u0131") },
                                            react_1["default"].createElement(antd_1.Input, { readOnly: true, value: 'Admin', className: "formInput" })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 13 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaBolge_Aciklama', rules: [
                                                { required: false, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "B\u00F6lge A\u00E7\u0131klama") },
                                            react_1["default"].createElement(rc_textarea_1["default"], { rows: 4, style: { width: '100%' } })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 13 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaGm_Aciklama', rules: [
                                                { required: false, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Gm A\u00E7\u0131klama") },
                                            react_1["default"].createElement(rc_textarea_1["default"], { rows: 4, style: { width: '100%' } })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaTalep_Edilen_Tutar', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Talep Edilen Tutar") },
                                            react_1["default"].createElement(antd_1.Input, { type: 'number', className: "formInput", defaultValue: 500 })))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaTazmin_Odeme_Durumu', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "Tazmin \u00D6deme Durumu") },
                                            react_1["default"].createElement(antd_1.Select, { className: "formInput", placeholder: "Se\u00E7iniz", allowClear: true, showSearch: true },
                                                react_1["default"].createElement(Option, { value: "1" }, "\u00D6denecek"),
                                                react_1["default"].createElement(Option, { value: "2" }, "\u00D6denmicek"),
                                                react_1["default"].createElement(Option, { value: "2" }, "Farkl\u0131 Bir Tutar \u00D6denecek"))))),
                                react_1["default"].createElement(antd_1.Row, null,
                                    react_1["default"].createElement(antd_1.Col, { span: 7 },
                                        react_1["default"].createElement(antd_1.Form.Item, { name: 'evaOdenecek_Tutar', rules: [
                                                { required: true, message: 'Lütfen Boş Bırakmayınız!' }
                                            ], label: react_1["default"].createElement("label", { style: { maxWidth: 155, minWidth: 155 } }, "\u00D6denecek Tutar") },
                                            react_1["default"].createElement(antd_1.Input, { type: 'number', className: "formInput" })))),
                                react_1["default"].createElement(antd_1.Row, { style: { float: 'right' } },
                                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                                        react_1["default"].createElement(antd_1.Space, { style: { width: '100%' } },
                                            react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.SendOutlined, null), onClick: this.kDamageCompensationEvalutaionCreate, htmlType: "submit" }, "Onaya G\u00F6nder")))))),
                        react_1["default"].createElement(TabPane, { tab: react_1["default"].createElement("span", null,
                                react_1["default"].createElement(icons_1.SwitcherOutlined, null),
                                "Tarih\u00E7e"), key: "3" }, "Content of Tab Pane 3"))))));
    };
    DamageCompensation = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KDamageCompensationStore),
        mobx_react_1.observer
    ], DamageCompensation);
    return DamageCompensation;
}(AppComponentBase_1["default"]));
exports["default"] = DamageCompensation;
