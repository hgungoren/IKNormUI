"use strict";
exports.__esModule = true;
exports.MediaQuery = void 0;
var react_responsive_1 = require("react-responsive");
function MediaQuery() {
    var isDesktopOrLaptop = react_responsive_1.useMediaQuery({ query: '(min-width: 1224px)' });
    var isBigScreen = react_responsive_1.useMediaQuery({ query: '(min-width: 1824px)' });
    var isTabletOrMobile = react_responsive_1.useMediaQuery({ query: '(max-width: 1224px)' });
    var isPortrait = react_responsive_1.useMediaQuery({ query: '(orientation: portrait)' });
    var isRetina = react_responsive_1.useMediaQuery({ query: '(min-resolution: 2dppx)' });
    var width = '';
    if (isDesktopOrLaptop) {
        width = '100%';
    }
    if (isBigScreen) {
        width = '100%';
    }
    if (isTabletOrMobile) {
        width = '100%';
    }
    if (isPortrait) {
        width = '100%';
    }
    if (isRetina) {
        width = '100%';
    }
    return width;
}
exports.MediaQuery = MediaQuery;
