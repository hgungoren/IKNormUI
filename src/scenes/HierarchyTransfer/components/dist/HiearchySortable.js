"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
/* eslint-disable */
require("./index.less");
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var ListSort_1 = require("../../../lib/ListSort");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../../stores/storeIdentifier");
var AppComponentBase_1 = require("../../../components/AppComponentBase");
var dataArray = [
    {
        icon: 'question-circle-o',
        color: '#FF5500',
        title: 'Senior Product Designer',
        text: 'Senior Product Designer'
    },
    {
        icon: 'plus-circle-o',
        color: '#5FC296',
        title: 'Senior Animator',
        text: 'Senior Animator'
    },
    {
        icon: 'check-circle-o',
        color: '#2DB7F5',
        title: 'Visual Designer',
        text: 'Visual Designer'
    },
    {
        icon: 'cross-circle-o',
        color: '#FFAA00',
        title: 'Computer Engineer',
        text: 'Computer Engineer'
    },
];
var HiearchySortable = /** @class */ (function (_super) {
    __extends(HiearchySortable, _super);
    function HiearchySortable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getNodes = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.kHierarchyStore.getNodes({
                            keys: this.props.keys,
                            maxResultCount: 1000000,
                            skipCount: 0
                        })];
                    case 1:
                        _a.sent();
                        console.log('getNodes Keys -> ', this.props.kHierarchyStore.nodes);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.componentDidMount = function () {
            _this.getNodes();
        };
        return _this;
    }
    HiearchySortable.prototype.render = function () {
        var childrenToRender = dataArray.map(function (item, i) {
            var title = item.title, text = item.text;
            return (react_1["default"].createElement("div", { key: i, className: "list-sort-demo-text" },
                react_1["default"].createElement("div", { className: "list-sort-demo-icon" }),
                react_1["default"].createElement("div", { className: "list-sort-demo-text" },
                    react_1["default"].createElement("h1", null, title),
                    react_1["default"].createElement("p", null, text))));
        });
        return (react_1["default"].createElement("div", { className: "list-sort-demo-wrapper" },
            react_1["default"].createElement("div", { className: 'list-sort-demo' },
                react_1["default"].createElement(ListSort_1["default"], { dragClassName: "list-drag-selected", appearAnim: { animConfig: { marginTop: [5, 30], opacity: [1, 0] } } }, childrenToRender))));
    };
    HiearchySortable.propTypes = {
        className: prop_types_1["default"].string
    };
    HiearchySortable.defaultProps = {
        className: 'list-sort-demo'
    };
    HiearchySortable = __decorate([
        mobx_react_1.inject(storeIdentifier_1["default"].KHierarchyStore),
        mobx_react_1.observer
    ], HiearchySortable);
    return HiearchySortable;
}(AppComponentBase_1["default"]));
exports["default"] = HiearchySortable;
