"use strict";
exports.__esModule = true;
exports.MediaQuery = void 0;
var react_responsive_1 = require("react-responsive");
exports.MediaQuery = {
    getScreenWidth: function () {
        var width = '';
        if (react_responsive_1.useMediaQuery({ query: '(min-width: 1224px)' })) {
            width = '100%';
        }
        if (react_responsive_1.useMediaQuery({ query: '(min-width: 1824px)' })) {
            width = '100%';
        }
        if (react_responsive_1.useMediaQuery({ query: '(max-width: 1224px)' })) {
            width = '100%';
        }
        if (react_responsive_1.useMediaQuery({ query: '(orientation: portrait)' })) {
            width = '100%';
        }
        if (react_responsive_1.useMediaQuery({ query: '(min-resolution: 2dppx)' })) {
            width = '100%';
        }
        return width;
    }
};
