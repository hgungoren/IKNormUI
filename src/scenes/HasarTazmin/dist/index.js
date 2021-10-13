"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
require("antd/dist/antd.css");
require("./index.less");
var HasarTazmin_validation_1 = require("./HasarTazmin.validation");
var FormItem_1 = require("antd/lib/form/FormItem");
var icons_1 = require("@ant-design/icons");
var Demo = function (props) {
    var TabPane = antd_1.Tabs.TabPane;
    var Option = antd_1.Select.Option;
    var _a = react_1["default"].useState(1), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(true), visible = _b[0], setVisible = _b[1];
    var _c = react_1.useState(false), visibleTc = _c[0], SetVisibleTc = _c[1];
    var _d = react_1.useState(false), visibleVk = _d[0], SetVisibleVk = _d[1];
    var _e = react_1.useState(false), visibleSsba = _e[0], SetVisibleSsba = _e[1];
    var _f = react_1.useState(false), visibleEmail = _f[0], SetVisibleEmail = _f[1];
    var _g = react_1.useState(false), visibleSms = _g[0], SetVisibleSms = _g[1];
    var _h = react_1["default"].useState('1'), activeTabKey = _h[0], setActiveTabKey = _h[1];
    var onChangeRadio = function (e) {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        if (e.target.value === 2) {
            setVisible(false);
        }
        else {
            setVisible(true);
        }
    };
    function onChangeTC(e) {
        console.log("checked = " + e.target.checked);
        if (e.target.checked == true) {
            SetVisibleTc(true);
        }
        else {
            SetVisibleTc(false);
        }
    }
    function onChangeVk(e) {
        console.log("checked = " + e.target.checked);
        if (e.target.checked === true) {
            SetVisibleVk(true);
        }
        else {
            SetVisibleVk(false);
        }
    }
    function onChangSsba(e) {
        console.log("checked = " + e.target.checked);
        if (e.target.checked === true) {
            SetVisibleSsba(true);
        }
        else {
            SetVisibleSsba(false);
        }
    }
    function onChangMail(e) {
        console.log("checked = " + e.target.checked);
        if (e.target.checked === true) {
            SetVisibleEmail(true);
        }
        else {
            SetVisibleEmail(false);
        }
    }
    function onChangSms(e) {
        console.log("checked = " + e.target.checked);
        if (e.target.checked === true) {
            SetVisibleSms(true);
        }
        else {
            SetVisibleSms(false);
        }
    }
    var changeTab = function (activeKey) {
        console.log(activeKey);
        setActiveTabKey(activeKey);
    };
    function Btnileri() {
        setActiveTabKey("2");
    }
    function Btnileritzm() {
        setActiveTabKey("3");
    }
    function BtnGeri() {
        setActiveTabKey("1");
    }
    function BtnGeritzm() {
        setActiveTabKey("2");
    }
    var onFinish = function (values) {
        console.log('Received values of form: ', values);
    };
    ////resimm
    function beforeUpload(file) {
        var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (isJpgOrPng === false) {
            return false;
        }
        else {
            return true;
        }
    }
    var formItemLayout = {
        labelCol: {
            lg: { span: 5 },
            xs: { span: 5 },
            sm: { span: 9 },
            md: { span: 7 }
        },
        wrapperCol: {
            lg: { span: 8 },
            xs: { span: 8 },
            sm: { span: 12 },
            md: { span: 12 }
        }
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(antd_1.Form, __assign({ ref: props.formRef, onFinish: onFinish }, formItemLayout, { layout: "horizontal" }),
            react_1["default"].createElement(antd_1.Card, { title: "Hasar Tazmin Formu Olu\u015Ftur", className: 'Genelcard' },
                react_1["default"].createElement(antd_1.Tabs, { defaultActiveKey: "1", onChange: changeTab, activeKey: activeTabKey, tabBarGutter: 50 },
                    react_1["default"].createElement(TabPane, { tab: "G\u00F6nderi Bilgileri", key: "1" },
                        react_1["default"].createElement(antd_1.Row, null,
                            react_1["default"].createElement(antd_1.Card, { size: "small", type: "inner", className: 'SorgulamaCard' },
                                react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Takip No " },
                                    react_1["default"].createElement(antd_1.Radio.Group, { onChange: onChangeRadio, value: value },
                                        react_1["default"].createElement(antd_1.Radio, { value: 1 }, "Biliniyor"),
                                        react_1["default"].createElement(antd_1.Radio, { value: 2 }, "Bilinmiyor"))),
                                visible ? (react_1["default"].createElement(antd_1.Form.Item, { label: "Takip No " },
                                    react_1["default"].createElement(antd_1.Input, { className: 'ClassInput', placeholder: "Kargo Takip Numaras\u0131" }),
                                    react_1["default"].createElement(antd_1.Input, { className: 'SorgulamaInputButton', type: 'button', value: "Getir" }))) : (''))),
                        react_1["default"].createElement(antd_1.Card, { size: "small", type: "inner", className: 'AltCard' },
                            visible ? ('') : (react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Kabul Fi\u015F No ", name: 'kargoKabulFisNo', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Input, { placeholder: "Kargo Kabul Fi\u015F No" }))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Evrak Olu\u015Fturma Tarihi", name: 'evrakOlusturmaTarihi', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.DatePicker, null)),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Evrak Seri S\u0131ra No", name: 'evrakSeriSiraNo', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Input, { type: "number", placeholder: "Evrak Seri S\u0131ra No" })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "G\u00F6nderici Kodu", name: 'gondericiKodu', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Select, { showSearch: true, placeholder: "Se\u00E7iniz", optionFilterProp: "children" },
                                    react_1["default"].createElement(Option, { value: "jack" }, "1000011"),
                                    react_1["default"].createElement(Option, { value: "lucy" }, "1000012"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "1000013"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "1000014"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "1000015"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "G\u00F6nderici", name: 'gondericiUnvan', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Input, { readOnly: true, placeholder: "G\u00F6nderen Cari Unvan" })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "\u00C7\u0131k\u0131\u015F \u015Eube Ad\u0131", name: 'cikisSubeAdi', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Select, { showSearch: true, placeholder: "Se\u00E7iniz", optionFilterProp: "children" },
                                    react_1["default"].createElement(Option, { value: "jack" }, "\u0130ncirli"),
                                    react_1["default"].createElement(Option, { value: "lucy" }, "Kad\u0131k\u00F6y"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "Ba\u011Fc\u0131lar"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Al\u0131c\u0131 Kodu", name: 'aliciKodu', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Select, { showSearch: true, placeholder: "Se\u00E7iniz", optionFilterProp: "children" },
                                    react_1["default"].createElement(Option, { value: "jack" }, "1000011"),
                                    react_1["default"].createElement(Option, { value: "lucy" }, "1000012"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "1000013"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "1000014"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "1000015"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Al\u0131c\u0131", name: 'aliciUnvan', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Input, { readOnly: true, placeholder: "Al\u0131c\u0131 Cari Unvan" })),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Var\u0131\u015F \u015Eube Ad\u0131", name: 'varisSubeAdi', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Select, { showSearch: true, placeholder: "Se\u00E7iniz", optionFilterProp: "children" },
                                    react_1["default"].createElement(Option, { value: "jack" }, "\u0130ncirli"),
                                    react_1["default"].createElement(Option, { value: "lucy" }, "Kad\u0131k\u00F6y"),
                                    react_1["default"].createElement(Option, { value: "tom" }, "Ba\u011Fc\u0131lar"))),
                            ' ',
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Kargo Tipi", name: 'kargoTipi', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Select, { placeholder: "L\u00FCtfen Kargo Tipini Se\u00E7iniz", allowClear: true },
                                    react_1["default"].createElement(Option, { value: "male" }, "Mi"),
                                    react_1["default"].createElement(Option, { value: "female" }, "Dosya"),
                                    react_1["default"].createElement(Option, { value: "other" }, "Paket"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Toplam Par\u00E7a Adedi", name: 'toplamParcaAdedi', rules: HasarTazmin_validation_1["default"].takipNo },
                                react_1["default"].createElement(antd_1.Input, { type: "number", min: 1, max: 1000, placeholder: "Toplam Par\u00E7a Adedi" })),
                            react_1["default"].createElement(FormItem_1["default"], null,
                                react_1["default"].createElement(antd_1.Button, { type: "default", className: 'btnileri', onClick: Btnileri }, "\u0130leri")))),
                    react_1["default"].createElement(TabPane, { tab: "Tazmin Bilgileri", key: "2" },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmin No", name: 'tazminno', rules: HasarTazmin_validation_1["default"].tazminNo },
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Tazmin No" })),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmin Talep Tarihi", name: 'tazmintaleptarihi', rules: HasarTazmin_validation_1["default"].tazminTalepTarihi },
                            react_1["default"].createElement(antd_1.DatePicker, null)),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmin Tipi", name: 'tazmintipi', rules: HasarTazmin_validation_1["default"].tazminTipi },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "L\u00FCtfen Tazmin Tipi Se\u00E7iniz", allowClear: true },
                                react_1["default"].createElement(Option, { value: "male" }, "Mi"),
                                react_1["default"].createElement(Option, { value: "female" }, "Dosya"),
                                react_1["default"].createElement(Option, { value: "other" }, "Paket"))),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u00D6deme \u015Eekli", name: 'odemesekli', rules: HasarTazmin_validation_1["default"].odemeSekli },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "L\u00FCtfen \u00D6deme \u015Eeklini Se\u00E7iniz", allowClear: true },
                                react_1["default"].createElement(Option, { value: "male" }, "Mi"),
                                react_1["default"].createElement(Option, { value: "female" }, "Dosya"),
                                react_1["default"].createElement(Option, { value: "other" }, "Paket"))),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmin M\u00FC\u015Fterisi", name: 'tazminmusterisi', rules: HasarTazmin_validation_1["default"].tazminMusterisi },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "L\u00FCtfen Tazmin M\u00FC\u015Fterisi Se\u00E7iniz", allowClear: true },
                                react_1["default"].createElement(Option, { value: "male" }, "Mi"),
                                react_1["default"].createElement(Option, { value: "female" }, "Dosya"),
                                react_1["default"].createElement(Option, { value: "other" }, "Paket"))),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmin M\u00FC\u015Fterisi Kodu", name: 'tazminmusterikodu', rules: HasarTazmin_validation_1["default"].tazminmusterikodu },
                            react_1["default"].createElement(antd_1.Input, { placeholder: "Tazmin M\u00FC\u015Fterisi Kodu" })),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "TC Kimlik No", name: 'tckimlikno', rules: HasarTazmin_validation_1["default"].tckimlikno },
                            react_1["default"].createElement(antd_1.Checkbox, { onChange: onChangeTC }),
                            visibleTc ? (react_1["default"].createElement(antd_1.Input, { placeholder: "TC Kimlik No" })) : ('')),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Vergi Kimlik No", name: 'vergino', rules: HasarTazmin_validation_1["default"].vergiKimlikNo },
                            react_1["default"].createElement(antd_1.Checkbox, { onChange: onChangeVk }),
                            visibleVk ? (react_1["default"].createElement(antd_1.Input, { placeholder: "Vergi Kimlik No" })) : ('')),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u00D6deme Birimi/B\u00F6lge", name: 'tazminmusterisi', rules: HasarTazmin_validation_1["default"].odemeBolge },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "L\u00FCtfen \u00D6deme Birimi/B\u00F6lge  Se\u00E7iniz", allowClear: true },
                                react_1["default"].createElement(Option, { value: "male" }, "Mi"),
                                react_1["default"].createElement(Option, { value: "female" }, "Dosya"),
                                react_1["default"].createElement(Option, { value: "other" }, "Paket"))),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmini Farkl\u0131 B\u00F6lgeye Ata", name: 'test' },
                            react_1["default"].createElement(antd_1.Checkbox, { onChange: onChangSsba })),
                        visibleSsba ?
                            (react_1["default"].createElement(antd_1.Form.Item, { label: "S\u00FCre\u00E7 Sahibi B\u00F6lgeye Ata" },
                                react_1["default"].createElement(antd_1.Select, { placeholder: "L\u00FCtfen \u00D6deme Birimi/B\u00F6lge  Se\u00E7iniz", allowClear: true },
                                    react_1["default"].createElement(Option, { value: "male" }, "Mi"),
                                    react_1["default"].createElement(Option, { value: "female" }, "Dosya"),
                                    react_1["default"].createElement(Option, { value: "other" }, "Paket"))))
                            :
                                (''),
                        react_1["default"].createElement(antd_1.Form.Item, { label: "M\u00FC\u015Fteri Bilgilendirmesi" },
                            react_1["default"].createElement(antd_1.Checkbox, { onChange: onChangMail }, "Email"),
                            visibleEmail ?
                                (react_1["default"].createElement(antd_1.Input, { placeholder: "Email Adresi Giriniz" }))
                                :
                                    (''),
                            react_1["default"].createElement(antd_1.Checkbox, { onChange: onChangSms }, "Sms"),
                            visibleSms ?
                                (react_1["default"].createElement(antd_1.Input, { placeholder: "(0)5XX XXX XX XX" }))
                                :
                                    ('')),
                        react_1["default"].createElement(FormItem_1["default"], null,
                            react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: BtnGeri, className: 'btngeri' }, "Geri"),
                            react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: Btnileritzm, className: 'btnileritzm' }, "\u0130leri"),
                            react_1["default"].createElement(antd_1.Button, { type: "ghost", htmlType: "submit", className: 'btnkaydet' }, "Kaydet"))),
                    react_1["default"].createElement(TabPane, { tab: "Tazmin Belgeleri", key: "3" },
                        react_1["default"].createElement(antd_1.Card, { size: "small", type: "inner", className: 'SorgulamaCard' },
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Tazmin Dilek\u00E7esi" },
                                react_1["default"].createElement(antd_1.Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", listType: "text", multiple: true, beforeUpload: beforeUpload },
                                    react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.UploadOutlined, null) }, "Y\u00FCkle"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Fatura" },
                                react_1["default"].createElement(antd_1.Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", listType: "text", multiple: true, beforeUpload: beforeUpload },
                                    react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.UploadOutlined, null) }, "Y\u00FCkle"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "Sevk \u0130rsaliyesi" },
                                react_1["default"].createElement(antd_1.Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", listType: "text", multiple: true, beforeUpload: beforeUpload },
                                    react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.UploadOutlined, null) }, "Y\u00FCkle"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "TC No/Vergi No" },
                                react_1["default"].createElement(antd_1.Upload, { action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", listType: "text", multiple: true, beforeUpload: beforeUpload },
                                    react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.UploadOutlined, null) }, "Y\u00FCkle"))),
                            react_1["default"].createElement(antd_1.Form.Item, { label: "A\u00E7\u0131lama", rules: HasarTazmin_validation_1["default"].tazminNo },
                                react_1["default"].createElement(antd_1.Input.TextArea, null)),
                            react_1["default"].createElement(FormItem_1["default"], null,
                                react_1["default"].createElement(antd_1.Button, { type: "primary", onClick: BtnGeritzm, className: 'btngeri' }, "Geri"),
                                react_1["default"].createElement(antd_1.Button, { type: "ghost", htmlType: "submit", className: 'btnkaydet' }, "Kaydet")))))))));
};
exports["default"] = Demo;
