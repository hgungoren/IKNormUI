"use strict";
exports.__esModule = true;
exports.dateHelper = void 0;
var moment_1 = require("moment");
exports.dateHelper = {
    getMomentInstance: function (date, lang) { return moment_1["default"](date || new Date()).locale(lang); },
    getTodayDate: function (lang) { return moment_1["default"]().locale(lang).format('MM DD YYYY, h:mm:ss a'); },
    getMonthFirstDate: function (lang) { return moment_1["default"]().startOf('month').locale(lang).format('MM DD YYYY, h:mm:ss a'); },
    getTodayWidthDate: function (date, lang) { return moment_1["default"](date || new Date()).locale(lang).format('MM DD YYYY, h:mm:ss a'); },
    getMonthWidthFirstDate: function (date, lang) { return moment_1["default"](date || new Date()).startOf('month').locale(lang).format('MM DD YYYY, h:mm:ss a'); },
    getToday: function (date) { return moment_1["default"](date || new Date).startOf('day').toDate(); },
    getTodayRange: function (date) { return ({
        startDate: moment_1["default"](date || new Date()).startOf('day').toDate(),
        endDate: moment_1["default"](date || new Date()).endOf('day').toDate()
    }); },
    getMonthRange: function (date) { return ({
        startDate: moment_1["default"](date || new Date()).startOf('month').toDate(),
        endDate: moment_1["default"](date || new Date()).endOf('month').toDate()
    }); },
    getCurrentDay: function () {
        var currentDate = moment_1["default"](new Date());
        var weekDays = exports.dateHelper.getCurrentWeekWorkDay();
        var selectedCurrentDate = 0;
        for (var i = 0; i <= 4; i++) {
            var isCurrentDay = currentDate.isSame(weekDays[i], "day");
            if (isCurrentDay) {
                selectedCurrentDate = i;
            }
        }
        ;
        return [selectedCurrentDate];
    },
    getCurrentWeekWorkDay: function () {
        var currentDate = moment_1["default"]();
        var weekStart = currentDate.clone().startOf('week');
        var days = [];
        for (var i = 1; i <= 5; i++) {
            days.push(moment_1["default"](weekStart).add(i, 'days').toDate());
        }
        ;
        return days;
    }
};
