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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var abpUtility_1 = require("../../lib/abpUtility");
var react_router_dom_1 = require("react-router-dom");
var ProtectedRoute = function (_a) {
    var sessionStore = _a.sessionStore, path = _a.path, Component = _a.component, permission = _a.permission, render = _a.render, rest = __rest(_a, ["sessionStore", "path", "component", "permission", "render"]);
    return (React.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            if (!abp.session.userId)
                return (React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/user/login', state: { from: props.location } } }));
            if (permission && !abpUtility_1.isGranted(permission)) {
                return (React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/exception?type=401', state: { from: props.location } } }));
            }
            return Component ? React.createElement(Component, __assign({}, props)) : render(props);
        } })));
};
exports["default"] = ProtectedRoute;
