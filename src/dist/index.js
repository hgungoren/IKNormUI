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
require("./index.css");
var React = require("react");
var ReactDOM = require("react-dom");
require("moment-timezone");
var moment_1 = require("moment");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_1 = require("mobx-react");
var utils_1 = require("./utils/utils");
var abpUserConfigurationService_1 = require("./services/abpUserConfigurationService");
var storeInitializer_1 = require("./stores/storeInitializer");
var registerServiceWorker_1 = require("./registerServiceWorker");
utils_1["default"].setLocalization();
abpUserConfigurationService_1["default"].getAll().then(function (data) {
    utils_1["default"].extend(true, abp, data.data.result);
    abp.clock.provider = utils_1["default"].getCurrentClockProvider(data.data.result.clock.provider);
    moment_1["default"].locale(abp.localization.currentLanguage.name);
    if (abp.clock.provider.supportsMultipleTimezone) {
        moment_1["default"].tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
    }
    var stores = storeInitializer_1["default"]();
    ReactDOM.render(React.createElement(mobx_react_1.Provider, __assign({}, stores),
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(App_1["default"], null))), document.getElementById('root'));
    registerServiceWorker_1["default"]();
});
