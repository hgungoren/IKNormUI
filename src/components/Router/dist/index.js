"use strict";
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
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var ProtectedRoute_1 = require("./ProtectedRoute");
var utils_1 = require("../../utils/utils");
var Router = function () {
    var UserLayout = utils_1["default"].getRoute('/user').component;
    var AppLayout = utils_1["default"].getRoute('/').component;
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/user", render: function (props) { return React.createElement(UserLayout, __assign({}, props)); } }),
        React.createElement(ProtectedRoute_1["default"], { path: "/", render: function (props) { return React.createElement(AppLayout, __assign({}, props, { exact: true })); } })));
};
exports["default"] = Router;
