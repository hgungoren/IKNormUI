"use strict";
exports.__esModule = true;
var react_1 = require("react");
function DateCard(_a) {
    var date = _a.date;
    return (react_1["default"].createElement("p", { className: 'step-time' }, date !== null && new Date(date)
        .toLocaleDateString(abp.localization.currentLanguage.name, {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    })));
}
exports["default"] = DateCard;
