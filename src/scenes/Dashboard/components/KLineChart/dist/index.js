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
require("./index.less");
var react_1 = require("react");
var abpUtility_1 = require("../../../../lib/abpUtility");
var recharts_1 = require("recharts");
var KLineChart = /** @class */ (function (_super) {
    __extends(KLineChart, _super);
    function KLineChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KLineChart.prototype.render = function () {
        var data = this.props.data;
        return (react_1["default"].createElement("div", { style: { width: '100%', height: 300 } },
            react_1["default"].createElement(recharts_1.ResponsiveContainer, null,
                react_1["default"].createElement(recharts_1.LineChart, { width: 500, height: 300, data: data, margin: { top: 5, right: 30, left: 20, bottom: 5 } },
                    react_1["default"].createElement(recharts_1.XAxis, { dataKey: "name" }),
                    react_1["default"].createElement(recharts_1.YAxis, null),
                    react_1["default"].createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                    react_1["default"].createElement(recharts_1.Tooltip, null),
                    react_1["default"].createElement(recharts_1.Legend, null),
                    react_1["default"].createElement(recharts_1.Line, { type: "monotone", dataKey: abpUtility_1.L('ChartRequest'), stroke: "rgb(83, 29, 171)", strokeWidth: 2, activeDot: { r: 12 } }),
                    react_1["default"].createElement(recharts_1.Line, { type: "monotone", dataKey: abpUtility_1.L('ChartWaiting'), stroke: "rgb(250, 173, 20)", strokeWidth: 2 }),
                    react_1["default"].createElement(recharts_1.Line, { type: "monotone", dataKey: abpUtility_1.L('ChartApproved'), stroke: "rgb(29, 165, 122)", strokeWidth: 2 }),
                    react_1["default"].createElement(recharts_1.Line, { type: "monotone", dataKey: abpUtility_1.L('ChartCancel'), stroke: "rgb(250, 84, 28)", strokeWidth: 2 })))));
    };
    return KLineChart;
}(react_1.PureComponent));
exports["default"] = KLineChart;
