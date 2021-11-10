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
var App_1 = require("./App");
// import moment from 'moment';
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
    // abp.clock.provider = Utils.getCurrentClockProvider(data.data.result.clock.provider);
    // moment.locale(abp.localization.currentLanguage.name);
    // if (abp.clock.provider.supportsMultipleTimezone) {
    //   moment.tz.setDefault(abp.timing.timeZoneInfo.iana.timeZoneId);
    // }
    var stores = storeInitializer_1["default"]();
    // const init = async () => {
    //   try {
    //     moment.locale('tr', {
    //       months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_',),
    //       monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_',),
    //       weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_',),
    //       weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    //       weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    //       longDateFormat: {
    //         LT: 'HH:mm',
    //         LTS: 'HH:mm:ss',
    //         L: 'DD.MM.YYYY',
    //         LL: 'D MMMM YYYY',
    //         LLL: 'D MMMM YYYY HH:mm',
    //         LLLL: 'dddd, D MMMM YYYY HH:mm',
    //       },
    //       calendar: {
    //         sameDay: '[bugün saat] LT',
    //         nextDay: '[yarın saat] LT',
    //         nextWeek: '[gelecek] dddd [saat] LT',
    //         lastDay: '[dün] LT',
    //         lastWeek: '[geçen] dddd [saat] LT',
    //         sameElse: 'L',
    //       },
    //       relativeTime: {
    //         future: '%s sonra',
    //         past: '%s önce',
    //         s: 'birkaç saniye',
    //         ss: '%d saniye',
    //         m: 'bir dakika',
    //         mm: '%d dakika',
    //         h: 'bir saat',
    //         hh: '%d saat',
    //         d: 'bir gün',
    //         dd: '%d gün',
    //         M: 'bir ay',
    //         MM: '%d ay',
    //         y: 'bir yıl',
    //         yy: '%d yıl',
    //       },
    //       // ordinal: function (number, token):string  {
    //       //   switch (token) {
    //       //     case 'd':
    //       //     case 'D':
    //       //     case 'Do':
    //       //     case 'DD':
    //       //       return number;
    //       //     default:
    //       //       if (number === 0) {
    //       //         // special case for zero
    //       //         return number + "'ıncı";
    //       //       }
    //       //       var a = number % 10,
    //       //         b = (number % 100) - a,
    //       //         c = number >= 100 ? 100 : null;
    //       //       return (number + (suffixes[a] || suffixes[b] || suffixes[c]));
    //       //   }
    //       // },
    //       week: {
    //         dow: 1, // Monday is the first day of the week.
    //         doy: 7, // The week that contains Jan 7th is the first week of the year.
    //       },
    //     });
    //   } catch (err) { }
    // }
    ReactDOM.render(React.createElement(mobx_react_1.Provider, __assign({}, stores),
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(App_1["default"], null))), document.getElementById('root'));
    // if (abp.localization.currentCulture.name === 'tr') {    init(); }
    registerServiceWorker_1["default"]();
});
