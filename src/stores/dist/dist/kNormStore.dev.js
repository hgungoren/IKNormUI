"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

exports.__esModule = true; // import { GetKNormCount } from './../services/kNorm/dto/getKNormCount';

var mobx_1 = require("mobx");

var kNormService_1 = require("../services/kNorm/kNormService");

var talepTuru_1 = require("../services/kNorm/dto/talepTuru");

var normStatus_1 = require("../services/kNorm/dto/normStatus");

var KNormStore =
/** @class */
function () {
  function KNormStore() {}

  KNormStore.prototype.getMaxAllCount = function (pagedFilterAndSortedRequest) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(pagedFilterAndSortedRequest.type === "sube")) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , kNormService_1["default"].getAllSubeCount(pagedFilterAndSortedRequest)];

          case 1:
            result = _a.sent();
            return [3
            /*break*/
            , 6];

          case 2:
            if (!(pagedFilterAndSortedRequest.type === "subedetail")) return [3
            /*break*/
            , 4];
            return [4
            /*yield*/
            , kNormService_1["default"].getAllSubeDetailCount(pagedFilterAndSortedRequest)];

          case 3:
            result = _a.sent();
            return [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , kNormService_1["default"].getAllBolgeCount(pagedFilterAndSortedRequest)];

          case 5:
            result = _a.sent();
            _a.label = 6;

          case 6:
            this.getPendingNormFillRequestCountArray = result.filter(function (x) {
              return talepTuru_1["default"][x.turu] === talepTuru_1["default"].Norm_Doldurma;
            });
            this.getTotalNormFillingRequestCount = this.getPendingNormFillRequestCountArray.length;
            this.getPendingNormFillRequestCount = this.getPendingNormFillRequestCountArray.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Beklemede;
            }).length;
            this.getAcceptedNormFillRequestCount = this.getPendingNormFillRequestCountArray.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Onaylandi;
            }).length;
            this.getCanceledNormFillRequestCount = this.getPendingNormFillRequestCountArray.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Iptal;
            }).length;
            this.getTotalNormUpdateRequestCountArray = result.filter(function (x) {
              return talepTuru_1["default"][x.turu] === talepTuru_1["default"].Norm_Arttir || talepTuru_1["default"][x.turu] === talepTuru_1["default"].Norm_Kaydir;
            });
            this.getTotalNormUpdateRequestCount = this.getTotalNormUpdateRequestCountArray.length;
            this.getPendingNormUpdateRequestCount = this.getTotalNormUpdateRequestCountArray.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Beklemede;
            }).length;
            this.getAcceptedNormUpdateRequestCount = this.getTotalNormUpdateRequestCountArray.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Onaylandi;
            }).length;
            this.getCanceledNormUpdateRequestCount = this.getTotalNormUpdateRequestCountArray.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Iptal;
            }).length;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  KNormStore.prototype.getMaxAll = function (pagedFilterAndSortedRequest) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(pagedFilterAndSortedRequest.type === "sube")) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , kNormService_1["default"].getAllSube(pagedFilterAndSortedRequest)];

          case 1:
            result = _a.sent();
            return [3
            /*break*/
            , 6];

          case 2:
            if (!(pagedFilterAndSortedRequest.type === "subedetail")) return [3
            /*break*/
            , 4];
            return [4
            /*yield*/
            , kNormService_1["default"].getAllSubeDetail(pagedFilterAndSortedRequest)];

          case 3:
            result = _a.sent();
            return [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , kNormService_1["default"].getAllBolge(pagedFilterAndSortedRequest)];

          case 5:
            result = _a.sent();
            _a.label = 6;

          case 6:
            this.getTotalNormFillingRequest = result.items.filter(function (x) {
              return talepTuru_1["default"][x.turu] === talepTuru_1["default"].Norm_Doldurma;
            });
            this.getPendingNormFillRequest = this.getTotalNormFillingRequest.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Beklemede;
            });
            this.getAcceptedNormFillRequest = this.getTotalNormFillingRequest.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Onaylandi;
            });
            this.getCanceledNormFillRequest = this.getTotalNormFillingRequest.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Iptal;
            });
            this.getTotalNormUpdateRequest = result.items.filter(function (x) {
              return talepTuru_1["default"][x.turu] === talepTuru_1["default"].Norm_Arttir || talepTuru_1["default"][x.turu] === talepTuru_1["default"].Norm_Kaydir;
            });
            this.getPendingNormUpdateRequest = this.getTotalNormUpdateRequest.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Beklemede;
            });
            this.getAcceptedNormUpdateRequest = this.getTotalNormUpdateRequest.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Onaylandi;
            });
            this.getCanceledNormUpdateRequest = this.getTotalNormUpdateRequest.filter(function (x) {
              return normStatus_1["default"][x.normStatusValue] === normStatus_1["default"].Iptal;
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  KNormStore.prototype.getAll = function (pagedFilterAndSortedRequest) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(pagedFilterAndSortedRequest.type === "sube")) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , kNormService_1["default"].getAllSube(pagedFilterAndSortedRequest)];

          case 1:
            result = _a.sent();
            return [3
            /*break*/
            , 6];

          case 2:
            if (!(pagedFilterAndSortedRequest.type === "subedetail")) return [3
            /*break*/
            , 4];
            return [4
            /*yield*/
            , kNormService_1["default"].getAllSubeDetail(pagedFilterAndSortedRequest)];

          case 3:
            result = _a.sent();
            console.log(result);
            console.log(pagedFilterAndSortedRequest);
            return [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , kNormService_1["default"].getAllBolge(pagedFilterAndSortedRequest)];

          case 5:
            result = _a.sent();
            _a.label = 6;

          case 6:
            this.kNorms = result;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  KNormStore.prototype.get = function (entityDto) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , kNormService_1["default"].get(entityDto)];

          case 1:
            result = _a.sent();
            this.editKNorm = result;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  KNormStore.prototype.getById = function (entityDto) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , kNormService_1["default"].getById(entityDto)];

          case 1:
            result = _a.sent();
            this.editKNorm = result;
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  KNormStore.prototype.create = function (createKNormInput) {
    return __awaiter(this, void 0, void 0, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , kNormService_1["default"].create(createKNormInput)];

          case 1:
            result = _a.sent();
            this.kNorms.items.push(result);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  KNormStore.prototype.setStatusAsync = function (createKNormInput) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , kNormService_1["default"].setStatusAsync(createKNormInput)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  __decorate([mobx_1.observable], KNormStore.prototype, "kNorms");

  __decorate([mobx_1.observable], KNormStore.prototype, "editKNorm");

  __decorate([mobx_1.observable], KNormStore.prototype, "getPendingNormFillRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getTotalNormFillingRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getAcceptedNormFillRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getCanceledNormFillRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getTotalNormUpdateRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getPendingNormUpdateRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getAcceptedNormUpdateRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getCanceledNormUpdateRequest");

  __decorate([mobx_1.observable], KNormStore.prototype, "getPendingNormFillRequestCountArray");

  __decorate([mobx_1.observable], KNormStore.prototype, "getPendingNormFillRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getTotalNormFillingRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getAcceptedNormFillRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getCanceledNormFillRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getTotalNormUpdateRequestCountArray");

  __decorate([mobx_1.observable], KNormStore.prototype, "getTotalNormUpdateRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getPendingNormUpdateRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getAcceptedNormUpdateRequestCount");

  __decorate([mobx_1.observable], KNormStore.prototype, "getCanceledNormUpdateRequestCount");

  __decorate([mobx_1.action], KNormStore.prototype, "getMaxAllCount");

  __decorate([mobx_1.action], KNormStore.prototype, "getMaxAll");

  __decorate([mobx_1.action], KNormStore.prototype, "getAll");

  __decorate([mobx_1.action], KNormStore.prototype, "get");

  __decorate([mobx_1.action], KNormStore.prototype, "getById");

  __decorate([mobx_1.action], KNormStore.prototype, "create");

  __decorate([mobx_1.action], KNormStore.prototype, "setStatusAsync");

  return KNormStore;
}();

exports["default"] = KNormStore;