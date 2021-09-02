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
exports.__esModule = true;
var React = require("react");
var antd_1 = require("antd");
var abpUtility_1 = require("../../../lib/abpUtility");
var kBolgeNormForm_1 = require("./kBolgeNormForm");
var kBolgeNormTable_1 = require("./kBolgeNormTable");
var CreateKBolgeNorm = /** @class */ (function (_super) {
    __extends(CreateKBolgeNorm, _super);
    function CreateKBolgeNorm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { id: '0', adet: 0, userId: '0', pozisyon: '', confirmDirty: false };
        return _this;
    }
    CreateKBolgeNorm.prototype.render = function () {
        var _a = this.props, visible = _a.visible, formRef = _a.formRef, onCancel = _a.onCancel, subeObjId = _a.subeObjId, kSubeNormEdit = _a.kSubeNormEdit, positionSelect = _a.positionSelect, kSubeNormStore = _a.kSubeNormStore, kSubeNormCreate = _a.kSubeNormCreate, kSubeNormDelete = _a.kSubeNormDelete, normList = _a.normList;
        return (React.createElement(React.Fragment, null,
            React.createElement(antd_1.Modal, { footer: [
                    React.createElement(antd_1.Button, { onClick: onCancel, type: "primary", danger: true, key: "1" }, abpUtility_1.L('Close'))
                ], width: '60%', visible: visible, title: abpUtility_1.L('NormInsertOperation'), onCancel: onCancel, destroyOnClose: true },
                React.createElement(kBolgeNormForm_1["default"], { formRef: formRef, subeObjId: subeObjId, positionSelect: positionSelect, kSubeNormStore: kSubeNormStore, kSubeNormCreate: kSubeNormCreate, kPosizyonKontrol: this.props.kPosizyonKontrol }),
                React.createElement(kBolgeNormTable_1["default"], { normList: normList, kSubeNormEdit: kSubeNormEdit, kSubeNormDelete: kSubeNormDelete }))));
    };
    return CreateKBolgeNorm;
}(React.Component));
exports["default"] = CreateKBolgeNorm;
