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
require("./index.less");
var React = require("react");
var abpUtility_1 = require("../../lib/abpUtility");
var createNormForm_validation_1 = require("./createNormForm.validation");
var icons_1 = require("@ant-design/icons");
var talepTuru_1 = require("../../services/kNorm/dto/talepTuru");
var talepNedeni_1 = require("../../services/kNorm/dto/talepNedeni");
var antd_1 = require("antd");
var TabPane = antd_1.Tabs.TabPane;
var TextArea = antd_1.Input.TextArea;
var Option = antd_1.Select.Option;
var CreateNormForm = /** @class */ (function (_super) {
    __extends(CreateNormForm, _super);
    function CreateNormForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            confirmDirty: false,
            defaultActiveKey: {
                "name": "Next",
                "pane": "PositionSelect",
                "visible": false
            },
            employeeVisible: true,
            positionVisible: true,
            newPositionVisible: true,
            normRequestReasonVisible: true,
            descriptionVisible: true,
            talepTuru: '',
            buttonVisible: false
        };
        _this.changeActiveTab = function () {
            var form = _this.props.formRef.current;
            form.validateFields().then(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.setState({
                        defaultActiveKey: {
                            "name": this.state.defaultActiveKey.name === "Back" ? "Next" : "Back",
                            "pane": this.state.defaultActiveKey.pane === "AuthoritiesHierarchy" ? "PositionSelect" : "AuthoritiesHierarchy",
                            "visible": this.state.defaultActiveKey.name === "Next" ? true : false
                        }
                    });
                    return [2 /*return*/];
                });
            }); });
        };
        _this.visibleEmployee = function (param) {
            if (param === "Ayrilma") {
                _this.setState({ employeeVisible: !_this.state.employeeVisible });
            }
            else
                _this.setState({ employeeVisible: true });
        };
        _this.CreateNorm = function () {
            _this.setState({
                defaultActiveKey: _this.props.createFormState,
                employeeVisible: true,
                positionVisible: true,
                newPositionVisible: true,
                normRequestReasonVisible: true,
                descriptionVisible: true,
                talepTuru: '',
                buttonVisible: false,
                confirmDirty: false
            });
        };
        _this.resetForm = function () {
            var form = _this.props.formRef.current;
            _this.setState({
                confirmDirty: false,
                defaultActiveKey: {
                    "name": "Next",
                    "pane": "PositionSelect",
                    "visible": false
                },
                employeeVisible: true,
                positionVisible: true,
                newPositionVisible: true,
                normRequestReasonVisible: true,
                descriptionVisible: true,
                talepTuru: '',
                buttonVisible: false
            });
            form === null || form === void 0 ? void 0 : form.resetFields();
        };
        _this.visibleChangeFormItems = function (param) {
            var form = _this.props.formRef.current;
            form.resetFields(['Pozisyon', 'Aciklama', 'TalepNedeni', 'PersonelId', 'YeniPozisyon']);
            _this.setState({
                positionVisible: true,
                normRequestReasonVisible: true,
                descriptionVisible: true,
                newPositionVisible: true,
                buttonVisible: false
            });
            if (param === 'Norm_Doldurma') {
                _this.setState({
                    positionVisible: false,
                    normRequestReasonVisible: false,
                    descriptionVisible: false,
                    newPositionVisible: true,
                    talepTuru: ''
                });
            }
            else if (param === 'Norm_Arttir') {
                _this.setState({
                    positionVisible: false,
                    normRequestReasonVisible: false,
                    descriptionVisible: false,
                    newPositionVisible: true,
                    talepTuru: param,
                    employeeVisible: true
                });
            }
            else if (param === 'Norm_Kaydir') {
                _this.setState({
                    positionVisible: false,
                    newPositionVisible: false,
                    descriptionVisible: false,
                    normRequestReasonVisible: true,
                    talepTuru: '',
                    employeeVisible: true
                });
            }
            else { }
        };
        return _this;
    }
    CreateNormForm.prototype.render = function () {
        var _this = this;
        var formItemLayout = {
            labelCol: {
                xs: { span: 6 },
                sm: { span: 6 },
                md: { span: 6 },
                lg: { span: 6 },
                xl: { span: 6 },
                xxl: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 18 },
                md: { span: 18 },
                lg: { span: 18 },
                xl: { span: 18 },
                xxl: { span: 18 }
            }
        };
        var _a = this.props, tip = _a.tip, visible = _a.visible, onCancel = _a.onCancel, employees = _a.employees, position = _a.position, onCreateNorm = _a.onCreateNorm, subeId = _a.subeId, normCount = _a.normCount, hierarchy = _a.hierarchy, bagliOlduguSubeId = _a.bagliOlduguSubeId;
        return (React.createElement(antd_1.Modal, { footer: [
                !this.state.buttonVisible && (React.createElement(antd_1.Button, { key: "next", onClick: this.changeActiveTab }, abpUtility_1.L(this.state.defaultActiveKey.name))),
                (this.state.defaultActiveKey.pane === "AuthoritiesHierarchy" && !this.state.buttonVisible) && (React.createElement(antd_1.Button, { onClick: function () { onCreateNorm(), _this.CreateNorm(); }, className: 'right', type: "primary" }, abpUtility_1.L('Send')))
            ], onCancel: function () { onCancel(); _this.resetForm(); }, width: '50%', visible: visible, cancelText: abpUtility_1.L('Cancel'), okText: abpUtility_1.L('OK'), title: abpUtility_1.L('Position'), destroyOnClose: true },
            React.createElement(antd_1.Form, { ref: this.props.formRef },
                React.createElement(antd_1.Tabs, { defaultActiveKey: this.state.defaultActiveKey.pane, size: 'small', tabBarGutter: 64, activeKey: this.state.defaultActiveKey.pane },
                    React.createElement(TabPane, { tab: abpUtility_1.L('PositionSelect'), key: 'PositionSelect', className: 'ant-tab-form' },
                        React.createElement(antd_1.Form.Item, { className: 'hidden-form-item', initialValue: subeId, name: 'subeObjId' },
                            React.createElement(antd_1.Input, { style: { display: 'none' } })),
                        React.createElement(antd_1.Form.Item, { className: 'hidden-form-item', initialValue: bagliOlduguSubeId, name: 'bagliOlduguSubeObjId' },
                            React.createElement(antd_1.Input, { style: { display: 'none' } })),
                        React.createElement(antd_1.Form.Item, { className: 'hidden-form-item', initialValue: tip, name: 'tip', rules: createNormForm_validation_1["default"].tip },
                            React.createElement(antd_1.Input, { style: { display: 'none' } })),
                        React.createElement(antd_1.Form.Item, __assign({ className: 'mt-5', label: abpUtility_1.L('RequestType') }, formItemLayout, { name: 'TalepTuru', rules: createNormForm_validation_1["default"].requestType }),
                            React.createElement(antd_1.Select, { placeholder: abpUtility_1.L('PleaseSelect'), onChange: this.visibleChangeFormItems }, Object.keys(talepTuru_1["default"]).map(function (value, index) { return React.createElement(Option, { key: index, value: value },
                                " ",
                                talepTuru_1["default"][value],
                                "  "); }))),
                        !this.state.positionVisible && (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Position') }, formItemLayout, { name: 'Pozisyon', rules: createNormForm_validation_1["default"].position }),
                            React.createElement(antd_1.Select, { notFoundContent: { emptyText: abpUtility_1.L('NoSelectData') }, placeholder: abpUtility_1.L('PleaseSelect') }, position === undefined
                                ? []
                                : position.items.map(function (value, index) { return React.createElement(Option, { key: index, value: value.adi },
                                    " ",
                                    value.adi,
                                    " "); })))),
                        !this.state.newPositionVisible && (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('NewPosition') }, formItemLayout, { name: 'YeniPozisyon', rules: createNormForm_validation_1["default"].newPosition }),
                            React.createElement(antd_1.Select, { placeholder: abpUtility_1.L('PleaseSelect') }, position === undefined
                                ? []
                                : position.items.map(function (value, index) { return React.createElement(Option, { key: index, value: value.adi },
                                    " ",
                                    value.adi,
                                    " "); })))),
                        !this.state.normRequestReasonVisible && (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('NormRequestReason') }, formItemLayout, { name: 'TalepNedeni', rules: createNormForm_validation_1["default"].requestReason }),
                            React.createElement(antd_1.Select, { placeholder: abpUtility_1.L('PleaseSelect'), onChange: this.visibleEmployee }, Object.keys(talepNedeni_1["default"]).map(function (value, index) { return React.createElement(React.Fragment, null, employees != undefined && normCount <= employees.items.length && value !== 'Ayrilma' ? '' : React.createElement(Option, { key: index, value: value },
                                " ",
                                talepNedeni_1["default"][value],
                                " ")); })))),
                        !this.state.employeeVisible && (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Employee') }, formItemLayout, { name: 'PersonelId', rules: createNormForm_validation_1["default"].employeeId }),
                            React.createElement(antd_1.Select, { placeholder: abpUtility_1.L('PleaseSelect') }, employees != undefined && employees.items.map(function (value, index) { return React.createElement(Option, { key: index, value: value.objId },
                                " ",
                                value.ad,
                                " ",
                                value.soyad,
                                " "); })))),
                        !this.state.descriptionVisible && (React.createElement(antd_1.Form.Item, __assign({ label: abpUtility_1.L('Description') }, formItemLayout, { name: 'Aciklama', rules: createNormForm_validation_1["default"].description }),
                            React.createElement(TextArea, { rows: 8 })))),
                    React.createElement(TabPane, { className: 'form-tabPane', tab: abpUtility_1.L('AuthoritiesHierarchy'), key: 'AuthoritiesHierarchy', forceRender: true }, React.createElement(antd_1.Timeline, { className: 'form-timeline' }, hierarchy !== undefined && hierarchy.map(function (value, index) { return React.createElement("div", { key: index },
                        React.createElement(antd_1.Timeline.Item, { className: 'form-timeline-item', dot: React.createElement(icons_1.MailOutlined, { className: 'form-icon form-success' }) },
                            React.createElement(antd_1.Row, null,
                                React.createElement(antd_1.Col, { xs: { span: 8, offset: 0 }, sm: { span: 8, offset: 0 }, md: { span: 8, offset: 0 }, lg: { span: 8, offset: 0 }, xl: { span: 8, offset: 0 }, xxl: { span: 8, offset: 0 } },
                                    "            ",
                                    value.title,
                                    "            "),
                                React.createElement(antd_1.Col, { xs: { span: 3, offset: 0 }, sm: { span: 3, offset: 0 }, md: { span: 3, offset: 0 }, lg: { span: 3, offset: 0 }, xl: { span: 3, offset: 0 }, xxl: { span: 3, offset: 0 } },
                                    "            ",
                                    value.firstName,
                                    "        "),
                                React.createElement(antd_1.Col, { xs: { span: 3, offset: 0 }, sm: { span: 3, offset: 0 }, md: { span: 3, offset: 0 }, lg: { span: 3, offset: 0 }, xl: { span: 3, offset: 0 }, xxl: { span: 3, offset: 0 } },
                                    "            ",
                                    value.lastName,
                                    "         "),
                                React.createElement(antd_1.Col, { xs: { span: 8, offset: 0 }, sm: { span: 8, offset: 0 }, md: { span: 8, offset: 0 }, lg: { span: 8, offset: 0 }, xl: { span: 8, offset: 0 }, xxl: { span: 8, offset: 0 } },
                                    "   ",
                                    React.createElement("strong", null,
                                        " ",
                                        value.mail,
                                        " "),
                                    "   ")))); })))))));
    };
    return CreateNormForm;
}(React.Component));
exports["default"] = CreateNormForm;
