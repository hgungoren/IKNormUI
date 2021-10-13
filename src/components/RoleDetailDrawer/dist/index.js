"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable  @typescript-eslint/no-unused-expressions*/
var react_1 = require("react");
var abpUtility_1 = require("../../lib/abpUtility");
var antd_1 = require("antd");
var RoleDetailDrawer = function (_a) {
    var visible = _a.visible, showOrHideDrawer = _a.showOrHideDrawer, permissions = _a.permissions, roleStore = _a.roleStore;
    var getChildItems = function (prefix, suffix, key) {
        var children = permissions.filter(function (y) { return y.name
            .startsWith(prefix + '.' + suffix); })
            .map(function (c, i) {
            var names = c.name.split('.');
            var name = names[names.length - 1];
            var _key = key + "-" + i;
            return {
                title: abpUtility_1.L(c.displayName.replace('[', '').replace(']', '')),
                key: _key,
                value: c.name,
                children: getChildItems('subitems' + '.' + suffix, name, _key)
            };
        });
        return children;
    };
    var _b = react_1.useState(['']), grantedPermissions = _b[0], setGrantedPermissions = _b[1];
    var options = __spreadArrays(new Set(permissions.filter(function (x) { return x.name.startsWith('pages'); }).map(function (x, y) {
        var name = x.name.split('.')[1];
        var key = "0-" + y;
        return {
            title: abpUtility_1.L(x.displayName),
            key: key,
            value: x.displayName,
            children: getChildItems('items', name, key)
        };
    })));
    var getSelectedItems = function () {
        var items = [];
        var d = options.map(function (x) { return x.children; });
        if (d.length > 0) {
            var dd = d.map(function (x) { return x.map(function (f) { return ({ key: f.key, title: f.title, value: f.value }); }); });
            var dfs = dd.filter(function (x) { return x.length > 0; }).map(function (x) { return x; });
            var permission = roleStore.roleEdit.grantedPermissionNames;
            for (var _i = 0, dfs_1 = dfs; _i < dfs_1.length; _i++) {
                var i = dfs_1[_i];
                for (var _a = 0, i_1 = i; _a < i_1.length; _a++) {
                    var k = i_1[_a];
                    if (permission.includes(k.value)) {
                        items.push(k);
                    }
                }
            }
        }
        return items;
    };
    var getItems = function () {
        var items = [];
        var d = options.map(function (x) { return x.children; });
        if (d.length > 0) {
            var dd = d.map(function (x) { return x.map(function (f) { return ({ key: f.key, title: f.title, value: f.value }); }); });
            var dfs = dd.filter(function (x) { return x.length > 0; }).map(function (x) { return x; });
            for (var _i = 0, dfs_2 = dfs; _i < dfs_2.length; _i++) {
                var i = dfs_2[_i];
                for (var _a = 0, i_2 = i; _a < i_2.length; _a++) {
                    var k = i_2[_a];
                    items.push(k);
                }
            }
        }
        return items;
    };
    var onCheck = function (selected) {
        var permissions = [];
        permissions = getItems().filter(function (x) { return selected.includes(x.key); }).map(function (x) { return x.value; });
        // let norms = [
        //     'subitems.dashboard.infobox.getpendingnormfillrequest',
        //     'subitems.dashboard.infobox.gettotalnormupdaterequest',
        //     'subitems.dashboard.infobox.getacceptednormfillrequest',
        //     'subitems.dashboard.infobox.gettotalnormfillingrequest',
        //     'subitems.dashboard.infobox.getcancelednormfillrequest',
        //     'subitems.dashboard.infobox.getpendingnormupdaterequest',
        //     'subitems.dashboard.infobox.getacceptednormupdaterequest',
        //     'subitems.dashboard.infobox.getcancelednormupdaterequest',
        // ];
        // if (permissions.filter((x) => norms.includes(x)).length > 0) {
        //     permissions = [...permissions, 'knorm.view']
        // }
        // let bolgeDetail = ['kbolge.detail'];
        // if (permissions.filter((x) => bolgeDetail.includes(x)).length > 0) {
        //     permissions = [...permissions, 'ksube.detail']
        // }
        // let bolgeList = ['kbolge.branches'];
        // if (permissions.filter((x) => bolgeList.includes(x)).length > 0) {
        //     permissions = [...permissions, 'ksube.view']
        // }
        console.log(permissions);
        setGrantedPermissions(permissions);
    };
    var handleSubmit = function () {
        var role = roleStore.roleEdit.role;
        role.grantedPermissions = grantedPermissions;
        roleStore.update(role);
        setTimeout(function () { showOrHideDrawer(); }, 500);
    };
    var onSelect = function (x) {
    };
    var content = function () {
        return react_1["default"].createElement(antd_1.Tree, { checkable: true, defaultExpandedKeys: getSelectedItems().map(function (x) { return x.key; }), defaultSelectedKeys: getSelectedItems().map(function (x) { return x.key; }), defaultCheckedKeys: getSelectedItems().map(function (x) { return x.key; }), onCheck: function (x) { return onCheck(x); }, onSelect: onSelect, treeData: options });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Drawer, { width: 1000, footer: react_1["default"].createElement(antd_1.Row, { align: "middle" },
                react_1["default"].createElement(antd_1.Col, { span: 4 },
                    react_1["default"].createElement(antd_1.Button, { form: 'roleForm', key: "submit", htmlType: "submit", type: "primary", onClick: handleSubmit },
                        " ",
                        abpUtility_1.L('Save'),
                        " "))), title: abpUtility_1.L('UserRoleDetail'), visible: visible, onClose: showOrHideDrawer, destroyOnClose: true }, content())));
};
exports["default"] = RoleDetailDrawer;
