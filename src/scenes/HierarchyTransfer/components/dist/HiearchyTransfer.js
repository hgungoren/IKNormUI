"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable */
require("./index.less");
var abpUtility_1 = require("../../../lib/abpUtility");
var antd_1 = require("antd");
var react_1 = require("react");
function HiearchyTransfer(Props) {
    var formRef = react_1["default"].createRef();
    var kHierarchyStore = Props.kHierarchyStore, sourceTitle = Props.sourceTitle, targetTitle = Props.targetTitle;
    var _a = react_1.useState([]), unitsItems = _a[0], setUnitsItems = _a[1];
    var _b = react_1.useState([]), positionsItems = _b[0], setPositionsItems = _b[1];
    var _c = react_1.useState([]), nodesItems = _c[0], setNodesItems = _c[1];
    var _d = react_1.useState([{ unitsItems: unitsItems }]), targetKeys = _d[0], setTargetKeys = _d[1];
    var _e = react_1.useState([]), selectedKeys = _e[0], setSelectedKeys = _e[1];
    var Option = antd_1.Select.Option;
    function getUnits() {
        return __awaiter(this, void 0, void 0, function () {
            var result, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, kHierarchyStore.getUnit()];
                    case 1:
                        result = _a.sent();
                        items = result.items.map(function (item) { return react_1["default"].createElement(Option, { key: "unit_" + item.id, value: item.id }, item.name); });
                        setUnitsItems(items);
                        return [2 /*return*/, result];
                }
            });
        });
    }
    function onUnitChange(value) {
        var _a, _b;
        setNodesItems([]);
        (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.resetFields(['position']);
        var positions = (_b = kHierarchyStore.units.items.find(function (item) { return item.id === value; })) === null || _b === void 0 ? void 0 : _b.positions;
        setPositionsItems(positions || []);
    }
    function onPositionChange(value) {
        var _a;
        var nodes = (_a = positionsItems.find(function (item) { return item.id === value; })) === null || _a === void 0 ? void 0 : _a.nodes;
        if (nodes !== undefined) {
            var nodeList = nodes.map(function (item) { return ({
                key: "" + item.id,
                title: item.title,
                description: 'Sample Description 5'
            }); });
            setNodesItems(nodeList || []);
        }
    }
    function onBlur() {
        console.log('blur');
    }
    function onFocus() {
        console.log('focus');
    }
    function onSearch(val) {
        console.log('search:', val);
    }
    react_1.useEffect(function () {
        getUnits();
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Form, { name: "basic", labelCol: { span: 8 }, wrapperCol: { span: 16 }, initialValues: { remember: true }, 
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete: "off", ref: formRef },
            react_1["default"].createElement(antd_1.Row, { gutter: [16, 16] },
                react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 }, sm: { span: 12, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 }, xl: { span: 12, offset: 0 }, xxl: { span: 12, offset: 0 } },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "unit" },
                        react_1["default"].createElement(antd_1.Select, { showSearch: true, style: { width: '290px' }, placeholder: abpUtility_1.L('PleaseSelect'), optionFilterProp: "children", onChange: onUnitChange, onFocus: onFocus, onBlur: onBlur, onSearch: onSearch }, unitsItems))),
                react_1["default"].createElement(antd_1.Col, { xs: { span: 12, offset: 0 }, sm: { span: 12, offset: 0 }, md: { span: 12, offset: 0 }, lg: { span: 12, offset: 0 }, xl: { span: 12, offset: 0 }, xxl: { span: 12, offset: 0 } },
                    " ",
                    react_1["default"].createElement(antd_1.Form.Item, { name: "position" },
                        react_1["default"].createElement(antd_1.Select, { showSearch: true, style: { width: '290px' }, placeholder: abpUtility_1.L('PleaseSelect'), optionFilterProp: "children", onChange: onPositionChange, onFocus: onFocus, onBlur: onBlur, onSearch: onSearch }, positionsItems !== undefined && positionsItems.map(function (item) { return react_1["default"].createElement(Option, { key: "position_" + item.id, value: item.id }, item.name); }))))),
            react_1["default"].createElement(antd_1.Row, null,
                react_1["default"].createElement(antd_1.Col, { span: 24 },
                    react_1["default"].createElement(antd_1.Form.Item, { name: "title" },
                        react_1["default"].createElement(antd_1.Transfer
                        // locale={{  L('NoData') }}
                        , { 
                            // locale={{  L('NoData') }}
                            dataSource: nodesItems, titles: [sourceTitle, targetTitle], render: function (item) { return "" + item.title; }, selectedKeys: selectedKeys, targetKeys: targetKeys, onChange: function (nextTargetKeys) {
                                setTargetKeys(nextTargetKeys);
                            }, onSelectChange: function (sourceSelectedKeys, targetSelectedKeys) {
                                setSelectedKeys(__spreadArrays(sourceSelectedKeys, targetSelectedKeys));
                            } })))))));
}
exports["default"] = HiearchyTransfer;
