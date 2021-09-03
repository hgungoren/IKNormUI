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
exports.__esModule = true;
require("./index.css");
var App_1 = require("./App");
var moment_1 = require("moment");
var React = require("react");
var utils_1 = require("./utils/utils");
var ReactDOM = require("react-dom");
var mobx_react_1 = require("mobx-react");
var react_router_dom_1 = require("react-router-dom");
var storeInitializer_1 = require("./stores/storeInitializer");
var registerServiceWorker_1 = require("./registerServiceWorker");
var abpUserConfigurationService_1 = require("./services/abpUserConfigurationService");
utils_1["default"].setLocalization();
abpUserConfigurationService_1["default"].getAll().then(function (data) {
    utils_1["default"].extend(true, abp, data.data.result);
    abp.clock.provider = utils_1["default"].getCurrentClockProvider(data.data.result.clock.provider);
    moment_1["default"].locale(abp.localization.currentLanguage.name);
    if (abp.clock.provider.supportsMultipleTimezone) {
        moment_1["default"].tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
    }
    var stores = storeInitializer_1["default"]();
    var init = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                moment_1["default"].locale('tr', {
                    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
                    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
                    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
                    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
                    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        LTS: 'HH:mm:ss',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY HH:mm',
                        LLLL: 'dddd, D MMMM YYYY HH:mm'
                    },
                    calendar: {
                        sameDay: '[bugün saat] LT',
                        nextDay: '[yarın saat] LT',
                        nextWeek: '[gelecek] dddd [saat] LT',
                        lastDay: '[dün] LT',
                        lastWeek: '[geçen] dddd [saat] LT',
                        sameElse: 'L'
                    },
                    relativeTime: {
                        future: '%s sonra',
                        past: '%s önce',
                        s: 'birkaç saniye',
                        ss: '%d saniye',
                        m: 'bir dakika',
                        mm: '%d dakika',
                        h: 'bir saat',
                        hh: '%d saat',
                        d: 'bir gün',
                        dd: '%d gün',
                        M: 'bir ay',
                        MM: '%d ay',
                        y: 'bir yıl',
                        yy: '%d yıl'
                    },
                    // ordinal: function (number, token):string  {
                    //   switch (token) {
                    //     case 'd':
                    //     case 'D':
                    //     case 'Do':
                    //     case 'DD':
                    //       return number;
                    //     default:
                    //       if (number === 0) {
                    //         // special case for zero
                    //         return number + "'ıncı";
                    //       }
                    //       var a = number % 10,
                    //         b = (number % 100) - a,
                    //         c = number >= 100 ? 100 : null;
                    //       return (number + (suffixes[a] || suffixes[b] || suffixes[c]));
                    //   }
                    // },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                });
            }
            catch (err) { }
            return [2 /*return*/];
        });
    }); };
    ReactDOM.render(React.createElement(mobx_react_1.Provider, __assign({}, stores),
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(App_1["default"], null))), document.getElementById('root'));
    if (abp.localization.currentCulture.name === 'tr') {
        init();
    }
    registerServiceWorker_1["default"]();
});
