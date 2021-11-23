"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable */
var react_1 = require("react");
require("./index.less");
var antd_1 = require("antd");
var mockData = [
    { key: '0', title: 'Title 0', description: 'Sample Description 0' },
    { key: '1', title: 'Title 1', description: 'Sample Description 1' },
    { key: '2', title: 'Title 2', description: 'Sample Description 2' },
    { key: '3', title: 'Title 3', description: 'Sample Description 3' },
    { key: '4', title: 'Title 4', description: 'Sample Description 4' },
    { key: '5', title: 'Title 5', description: 'Sample Description 5' },
];
function HiearchyTransfer() {
    // Hedef keyi ayarlamak için
    var _a = react_1.useState(mockData), targetKeys = _a[0], setTargetKeys = _a[1];
    // Seçilen keyleri tutmak için
    var _b = react_1.useState([]), selectedKeys = _b[0], setSelectedKeys = _b[1];
    return (
    // https://motion.ant.design/exhibition/demo/list-sort
    react_1["default"].createElement(antd_1.Transfer, { dataSource: mockData, titles: ['Kaynak', 'Hedef'], render: function (item) { return item.title; }, selectedKeys: selectedKeys, targetKeys: targetKeys, onChange: function (nextTargetKeys) { setTargetKeys(nextTargetKeys); }, onSelectChange: function (sourceSelectedKeys, targetSelectedKeys) {
            setSelectedKeys(__spreadArrays(sourceSelectedKeys, targetSelectedKeys));
        } }));
}
exports["default"] = HiearchyTransfer;
