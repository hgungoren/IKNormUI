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
var icons_1 = require("@ant-design/icons");
var KBolgeNormTable = /** @class */ (function (_super) {
    __extends(KBolgeNormTable, _super);
    function KBolgeNormTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { totalSizeTable: 0, filterTable: { offset: 0, limit: 5, current: 0 } };
        _this.handlePaginationTable = function (pagination) {
            var filterTable = _this.state.filterTable;
            var pageSize = pagination.pageSize, current = pagination.current;
            _this.setState({
                filterTable: __assign(__assign({}, filterTable), { current: current, limit: pageSize })
            });
        };
        return _this;
    }
    KBolgeNormTable.prototype.render = function () {
        var _a = this.props, kSubeNormDelete = _a.kSubeNormDelete, kSubeNormEdit = _a.kSubeNormEdit;
        var _b = this.state, filterTable = _b.filterTable, totalSizeTable = _b.totalSizeTable;
        var tablePaginationTable = {
            pageSize: filterTable.limit,
            current: filterTable.current || 1,
            total: totalSizeTable,
            locale: { items_per_page: abpUtility_1.L('page') },
            pageSizeOptions: ["5", "10", "20", "30", "50", "100"],
            showSizeChanger: true
        };
        var columns = [
            { title: abpUtility_1.L('Position'), dataIndex: 'position', key: 'position', width: 150, render: function (text) { return react_1["default"].createElement("div", null, text); } },
            { title: abpUtility_1.L('NormCount'), dataIndex: 'normCount', key: 'normCount', width: 50, render: function (text) { return react_1["default"].createElement("div", null, text); } },
            { title: abpUtility_1.L('EmployeeCount'), dataIndex: 'employeeCount', key: 'employeeCount', width: 50, render: function (text) { return react_1["default"].createElement("div", null, text); } },
            {
                title: abpUtility_1.L('CreationTime'), dataIndex: 'creationTime', key: 'creationTime', width: 100,
                render: function (text) { return react_1["default"].createElement("div", null, react_1["default"].createElement("div", null, new Date(text).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                }))); }
            },
            // {
            //     title: L('ModifiedTime'), dataIndex: 'lastModificationTime', key: 'lastModificationTime', width: 100, render: (text: Date) => <div>  {
            //         <div>
            //             {
            //                 text !== undefined && new Date(text).toLocaleDateString("tr-TR", {
            //                     year: "numeric",
            //                     month: "long",
            //                     day: "2-digit",
            //                     hour: "2-digit",
            //                     minute: "2-digit"
            //                 })
            //             }
            //         </div>
            //     }</div>
            // },
            {
                title: abpUtility_1.L('Actions'),
                width: 30,
                render: function (text, item) { return (react_1["default"].createElement("div", null,
                    abpUtility_1.isGranted('kbolge.norm.edit') && react_1["default"].createElement(react_1["default"].Fragment, null,
                        "   ",
                        react_1["default"].createElement(antd_2.Tooltip, { placement: "topRight", title: abpUtility_1.L('Edit') },
                            react_1["default"].createElement(antd_1.Button, { style: {
                                    backgroundColor: '#faad14',
                                    borderColor: '#faad14', color: 'white'
                                }, onClick: function () { return kSubeNormEdit({ id: item.id }); }, icon: react_1["default"].createElement(icons_1.EditOutlined, null) }))),
                    abpUtility_1.isGranted('kbolge.norm.delete') && react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(antd_2.Tooltip, { placement: "topLeft", title: abpUtility_1.L('Delete') },
                            react_1["default"].createElement(antd_1.Button, { style: { marginLeft: 3 }, type: "primary", onClick: function () { return kSubeNormDelete({ id: item.id }); }, danger: true, icon: react_1["default"].createElement(icons_1.DeleteOutlined, null) })),
                        " "))); }
            },
        ];
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            abpUtility_1.isGranted('kbolge.norm.view') &&
                react_1["default"].createElement(antd_2.Table, { locale: { emptyText: abpUtility_1.L('NoData') }, rowKey: function (record) { return record.id.toString(); }, bordered: false, columns: columns, loading: this.props.normList === undefined ? true : false, dataSource: this.props.normList === undefined ? [] : this.props.normList, onChange: this.handlePaginationTable, pagination: tablePaginationTable }),
            console.log(this.props.normList)));
    };
    return KBolgeNormTable;
}(react_1["default"].Component));
exports["default"] = KBolgeNormTable;
