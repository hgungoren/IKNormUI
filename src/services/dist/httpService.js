"use strict";
exports.__esModule = true;
var appconst_1 = require("./../lib/appconst");
var abpUtility_1 = require("../lib/abpUtility");
var antd_1 = require("antd");
var axios_1 = require("axios");
var qs = require('qs');
var http = axios_1["default"].create({
    baseURL: appconst_1["default"].remoteServiceBaseUrl,
    timeout: 30000,
    paramsSerializer: function (params) {
        return qs.stringify(params, {
            encode: false
        });
    }
});
http.interceptors.request.use(function (config) {
    if (!!abp.auth.getToken()) {
        config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken();
    }
    config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
    config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();
    return config;
}, function (error) {
    return Promise.reject(error);
});
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
        antd_1.Modal.error({
            title: abpUtility_1.L(error.response.data.error.message),
            content: abpUtility_1.L(error.response.data.error.details)
        });
    }
    else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
        antd_1.Modal.error({
            title: abpUtility_1.L('LoginFailed'),
            content: abpUtility_1.L(error.response.data.error.message)
        });
    }
    else if (!error.response) {
        antd_1.Modal.error({ content: abpUtility_1.L('UnknownError') });
    }
    setTimeout(function () { }, 1000);
    return Promise.reject(error);
});
exports["default"] = http;
