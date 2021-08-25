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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var antd_2 = require("antd");
var abpUtility_1 = require("../../../lib/abpUtility");
var createNorm_validation_1 = require("./createNorm.validation");
var KSubeNormForm = /** @class */ (function (_super) {
    __extends(KSubeNormForm, _super);
    function KSubeNormForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KSubeNormForm.prototype.render = function () {
        var formItemLayout = {
            labelCol: { xs: { span: 4 }, sm: { span: 4 }, md: { span: 4 }, lg: { span: 4 }, xl: { span: 4 }, xxl: { span: 4 } },
            wrapperCol: { xs: { span: 20 }, sm: { span: 20 }, md: { span: 20 }, lg: { span: 20 }, xl: { span: 20 }, xxl: { span: 20 } }
        };
        var Option = antd_2.Select.Option;
        var _a = this.props, kSubeNormCreate = _a.kSubeNormCreate, kPosizyonKontrol = _a.kPosizyonKontrol, subeObjId = _a.subeObjId, formRef = _a.formRef, positionSelect = _a.positionSelect;
        return (react_1["default"].createElement(react_1["default"].Fragment, null, (abpUtility_1.isGranted('ksubenorm.create') || abpUtility_1.isGranted('ksubenorm.edit')) && react_1["default"].createElement(antd_2.Form, { ref: formRef },
            react_1["default"].createElement(antd_2.Form.Item, { initialValue: subeObjId, name: 'subeObjId', rules: createNorm_validation_1["default"].subeObjId },
                react_1["default"].createElement(antd_2.Input, { style: { display: 'none' } })),
            react_1["default"].createElement(antd_2.Form.Item, __assign({ label: abpUtility_1.L('Position') }, formItemLayout, { name: 'pozisyon', rules: createNorm_validation_1["default"].pozisyon }),
                react_1["default"].createElement(antd_2.Select, { onSelect: kPosizyonKontrol }, positionSelect === undefined
                    ? []
                    : positionSelect.items.map(function (key) { return react_1["default"].createElement(Option, { key: key.adi, value: key.adi },
                        " ",
                        key.adi,
                        " "); }))),
            react_1["default"].createElement(antd_2.Form.Item, __assign({ label: abpUtility_1.L("NormCount") }, formItemLayout, { name: 'adet', rules: createNorm_validation_1["default"].adet }),
                react_1["default"].createElement(antd_2.InputNumber, { style: { minWidth: '100%' } })),
            react_1["default"].createElement(antd_2.Form.Item, null,
                react_1["default"].createElement(antd_1.Button, { style: { float: "right" }, type: "primary", onClick: kSubeNormCreate },
                    " ",
                    abpUtility_1.L('Save'),
                    " ")))));
    };
    return KSubeNormForm;
}(react_1["default"].Component));
exports["default"] = KSubeNormForm;
