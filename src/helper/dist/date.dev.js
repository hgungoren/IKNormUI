"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateHelper = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dateHelper = {
  getMomentInstance: function getMomentInstance(date, lang) {
    return (0, _moment["default"])(date || new Date()).locale(lang);
  },
  getToday: function getToday(date) {
    return (0, _moment["default"])(date || new Date()).startOf('day').toDate();
  },
  getTodayRange: function getTodayRange(date) {
    return {
      startDate: (0, _moment["default"])(date || new Date()).startOf('day').toDate(),
      endDate: (0, _moment["default"])(date || new Date()).endOf('day').toDate()
    };
  },
  getMonthRange: function getMonthRange(date) {
    return {
      startDate: (0, _moment["default"])(date || new Date()).startOf('month').toDate(),
      endDate: (0, _moment["default"])(date || new Date()).endOf('month').toDate()
    };
  },
  getCurrentDay: function getCurrentDay() {
    var currentDate = (0, _moment["default"])(new Date());
    var weekDays = dateHelper.getCurrentWeekWorkDay();
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
  getCurrentWeekWorkDay: function getCurrentWeekWorkDay() {
    var currentDate = (0, _moment["default"])();
    var weekStart = currentDate.clone().startOf('week');
    var days = [];

    for (var i = 1; i <= 5; i++) {
      days.push((0, _moment["default"])(weekStart).add(i, 'days').toDate());
    }

    ;
    return days;
  }
};
exports.dateHelper = dateHelper;