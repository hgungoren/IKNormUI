"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var abpUtility_1 = require("../lib/abpUtility");

var router_config_1 = require("../components/Router/router.config");

var Utils =
/** @class */
function () {
  function Utils() {
    this.getPageTitle = function (pathname) {
      var route = router_config_1.routers.filter(function (route) {
        return route.path === pathname;
      });
      var localizedAppName = abpUtility_1.L('AppName');

      if (!route || route.length === 0) {
        return localizedAppName;
      }

      return abpUtility_1.L(route[0].title) + ' | ' + localizedAppName;
    };

    this.getRoute = function (path) {
      return router_config_1.routers.filter(function (route) {
        return route.path === path;
      })[0];
    };
  }

  Utils.prototype.loadScript = function (url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
  };

  Utils.prototype.extend = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var options,
        name,
        src,
        srcType,
        copy,
        copyIsArray,
        clone,
        target = args[0] || {},
        i = 1,
        length = args.length,
        deep = false;

    if (typeof target === 'boolean') {
      deep = target;
      target = args[i] || {};
      i++;
    }

    if (_typeof(target) !== 'object' && typeof target !== 'function') {
      target = {};
    }

    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      if ((options = args[i]) !== null) {
        for (name in options) {
          src = target[name];
          copy = options[name];

          if (target === copy) {
            continue;
          }

          srcType = Array.isArray(src) ? 'array' : _typeof(src);

          if (deep && copy && ((copyIsArray = Array.isArray(copy)) || _typeof(copy) === 'object')) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && srcType === 'array' ? src : [];
            } else {
              clone = src && srcType === 'object' ? src : {};
            }

            target[name] = this.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    return target;
  };

  Utils.prototype.setLocalization = function () {
    if (!abp.utils.getCookieValue('Abp.Localization.CultureName')) {
      var language = navigator.language;
      abp.utils.setCookieValue('Abp.Localization.CultureName', language, new Date(new Date().getTime() + 5 * 365 * 86400000), abp.appPath);
    }

    if (!abp.utils.getCookieValue('Abp.AuthToken')) {
      abp.utils.setCookieValue('Abp.AuthToken', '', new Date(new Date().getTime() + 5 * 365 * 86400000), abp.appPath);
    }
  };

  Utils.prototype.getCurrentClockProvider = function (currentProviderName) {
    if (currentProviderName === 'unspecifiedClockProvider') {
      return abp.timing.unspecifiedClockProvider;
    }

    if (currentProviderName === 'utcClockProvider') {
      return abp.timing.utcClockProvider;
    }

    return abp.timing.localClockProvider;
  };

  return Utils;
}();

exports["default"] = new Utils();