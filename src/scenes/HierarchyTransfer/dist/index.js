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
/* eslint-disable */
var antd_1 = require("antd");
var row_1 = require("antd/lib/row");
var react_1 = require("react");
var AppComponentBase_1 = require("../../components/AppComponentBase");
var HiearchyTransfer_1 = require("./components/HiearchyTransfer");
var HiearchySortable_1 = require("./components/HiearchySortable");
var Transfer = /** @class */ (function (_super) {
    __extends(Transfer, _super);
    function Transfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transfer.prototype.render = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(row_1["default"], { gutter: [16, 16] },
                react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 }, sm: { span: 12, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 }, xl: { span: 12, offset: 0 }, xxl: { span: 12, offset: 0 } },
                    react_1["default"].createElement(antd_1.Card, { hoverable: true },
                        react_1["default"].createElement(HiearchyTransfer_1["default"], null))),
                react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 }, sm: { span: 12, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 }, xl: { span: 12, offset: 0 }, xxl: { span: 12, offset: 0 } },
                    react_1["default"].createElement(antd_1.Card, { hoverable: true },
                        react_1["default"].createElement(HiearchySortable_1["default"], null))))));
    };
    return Transfer;
}(AppComponentBase_1["default"]));
exports["default"] = Transfer;
