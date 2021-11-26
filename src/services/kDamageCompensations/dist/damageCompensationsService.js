"use strict";
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
var httpService_1 = require("../httpService");
var KDamageCompensationService = /** @class */ (function () {
    function KDamageCompensationService() {
    }
    KDamageCompensationService.prototype.create = function (createDamageInput) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].post('iknorm/DamageCompensation/create', createDamageInput)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    KDamageCompensationService.prototype.getDamageComppensation = function (entityDto) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetById', { params: entityDto })];
                    case 1:
                        result = _a.sent();
                        //console.log('result=>',result)     
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    //cari listes
    KDamageCompensationService.prototype.getCariListDamageCompensation = function (entityDto) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetCariListAsynDamage', { params: entityDto })];
                    case 1:
                        result = _a.sent();
                        // console.log('services.result.data.result=>',result.data.result) 
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    ///sube listesi
    KDamageCompensationService.prototype.getSubeListDamageComppensation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetBranchsListDamage')];
                    case 1:
                        result = _a.sent();
                        //console.log('services.result.data.result=>',result.data.result) 
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    ///sube listesi
    KDamageCompensationService.prototype.getBolgeListDamageComppensation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetAreaListDamage')];
                    case 1:
                        result = _a.sent();
                        //console.log('services.result.data.result=>',result.data.result) 
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    //birim listesi
    KDamageCompensationService.prototype.getBirimListDamageComppensation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetBirimListAsynDamage')];
                    case 1:
                        result = _a.sent();
                        //  console.log('services.result.data.result=>',result.data.result) 
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    // Son id cekme 
    KDamageCompensationService.prototype.getDamageComppensationLastId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetDamageLastId')];
                    case 1:
                        result = _a.sent();
                        //  console.log('service',result)
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // tazmin listesi çekme 
    KDamageCompensationService.prototype.getAllDamageCompensationService = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetAllDamageCompensation')];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    //get damageCompensation ByID
    KDamageCompensationService.prototype.getDamageComppensationByIdService = function (entityDto) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetDamageCompenSationById', { params: entityDto })];
                    case 1:
                        result = _a.sent();
                        //console.log('result=>',result)     
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    /// update damage conpensatioın 
    KDamageCompensationService.prototype.updateDamage = function (updateDamage) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].put('iknorm/DamageCompensation/Update', updateDamage)];
                    case 1:
                        result = _a.sent();
                        // console.log('service=>',result)
                        return [2 /*return*/, result];
                }
            });
        });
    };
    //sorgulama ekranı filter
    KDamageCompensationService.prototype.getFilterDamageCompensationService = function (checktakipNo, checktazminID, search, start, finish) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].get('iknorm/DamageCompensation/GetDamageCompensationFilter?checktakipNo=' + checktakipNo + '&checktazminID=' + checktazminID + '&search=' + search + '&start=' + start + '&finish=' + finish + '')];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    //değerlendirme crate
    KDamageCompensationService.prototype.createDamageCompensationEvalutaion = function (damageCompensationEvalutainon) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpService_1["default"].post('/iknorm/DamageCompensationEvalutaion/Create', damageCompensationEvalutainon)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data.result];
                }
            });
        });
    };
    return KDamageCompensationService;
}());
exports["default"] = new KDamageCompensationService();
