"use strict";
exports.__esModule = true;
var react_1 = require("react");
function useOnScreen(ref) {
    var _a = react_1.useState(false), isIntersecting = _a[0], setIntersecting = _a[1];
    var observer = new IntersectionObserver(function (_a) {
        var entry = _a[0];
        return setIntersecting(entry.isIntersecting);
    });
    react_1.useEffect(function () {
        observer.observe(ref.current);
        return function () { observer.disconnect(); };
    }, []);
    return isIntersecting;
}
exports["default"] = useOnScreen;
