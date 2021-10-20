"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-expressions*/
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
        var permissions = [];
        var childItems = options.map(function (x) { return x.children; });
        if (childItems.length > 0) {
            var selectedChildItems = childItems.map(function (x) { return x.map(function (f) { return ({
                key: f.key,
                title: f.title,
                value: f.value,
                children: f.children
            }); }); });
            var permission = roleStore.roleEdit.grantedPermissionNames;
            for (var _i = 0, selectedChildItems_1 = selectedChildItems; _i < selectedChildItems_1.length; _i++) {
                var item = selectedChildItems_1[_i];
                for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
                    var property = item_1[_a];
                    if (permission.includes(property.value)) {
                        permissions.push(property);
                    }
                    for (var _b = 0, _c = property.children; _b < _c.length; _b++) {
                        var subProperty = _c[_b];
                        if (permission.includes(subProperty.value)) {
                            permissions.push(subProperty);
                        }
                    }
                }
            }
        }
        return permissions;
    };
    var getItems = function () {
        var permissions = [];
        var childItems = options.map(function (x) { return x.children; });
        if (childItems.length > 0) {
            var selectedChildItems = childItems.map(function (x) { return x.map(function (f) { return ({ key: f.key, title: f.title, value: f.value, children: f.children }); }); });
            var currentItems = selectedChildItems.filter(function (x) { return x.length > 0; }).map(function (x) { return x; });
            for (var _i = 0, currentItems_1 = currentItems; _i < currentItems_1.length; _i++) {
                var item = currentItems_1[_i];
                for (var _a = 0, item_2 = item; _a < item_2.length; _a++) {
                    var property = item_2[_a];
                    for (var _b = 0, _c = property.children; _b < _c.length; _b++) {
                        var subItem = _c[_b];
                        permissions.push(subItem);
                    }
                    permissions.push(property);
                }
            }
        }
        return permissions;
    };
    var onCheck = function (selected) {
        var permissions = [];
        permissions = getItems().filter(function (x) { return selected.includes(x.key); }).map(function (x) { return x.value; });
        setGrantedPermissions(permissions);
    };
    var handleSubmit = function () {
        var role = roleStore.roleEdit.role;
        role.grantedPermissions = grantedPermissions;
        roleStore.update(role);
        setTimeout(function () { showOrHideDrawer(); }, 500);
    };
    var onSelect = function (x) { };
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
