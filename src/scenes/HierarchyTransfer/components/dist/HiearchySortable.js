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
var react_1 = require("react");
require("./index.less");
// import Icon from 'antd/lib/icon';
var ListSort_1 = require("../../../lib/ListSort");
var prop_types_1 = require("prop-types");
var AppComponentBase_1 = require("../../../components/AppComponentBase");
var dataArray = [
    {
        icon: 'question-circle-o',
        color: '#FF5500',
        title: 'Senior Product Designer',
        text: 'Senior Product Designer'
    },
    {
        icon: 'plus-circle-o',
        color: '#5FC296',
        title: 'Senior Animator',
        text: 'Senior Animator'
    },
    {
        icon: 'check-circle-o',
        color: '#2DB7F5',
        title: 'Visual Designer',
        text: 'Visual Designer'
    },
    {
        icon: 'cross-circle-o',
        color: '#FFAA00',
        title: 'Computer Engineer',
        text: 'Computer Engineer'
    },
];
var HiearchySortable = /** @class */ (function (_super) {
    __extends(HiearchySortable, _super);
    function HiearchySortable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HiearchySortable.prototype.render = function () {
        var childrenToRender = dataArray.map(function (item, i) {
            var title = item.title, text = item.text;
            return (react_1["default"].createElement("div", { key: i, className: "list-sort-demo-text" },
                react_1["default"].createElement("div", { className: "list-sort-demo-icon" }),
                react_1["default"].createElement("div", { className: "list-sort-demo-text" },
                    react_1["default"].createElement("h1", null, title),
                    react_1["default"].createElement("p", null, text))));
        });
        return (react_1["default"].createElement("div", { className: "list-sort-demo-wrapper" },
            react_1["default"].createElement("div", { className: 'list-sort-demo' },
                react_1["default"].createElement(ListSort_1["default"], { dragClassName: "list-drag-selected", appearAnim: { animConfig: { marginTop: [5, 30], opacity: [1, 0] } } }, childrenToRender))));
    };
    HiearchySortable.propTypes = {
        className: prop_types_1["default"].string
    };
    HiearchySortable.defaultProps = {
        className: 'list-sort-demo'
    };
    return HiearchySortable;
}(AppComponentBase_1["default"]));
exports["default"] = HiearchySortable;
