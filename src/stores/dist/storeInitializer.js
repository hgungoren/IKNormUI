"use strict";
exports.__esModule = true;
var roleStore_1 = require("./roleStore");
var userStore_1 = require("./userStore");
var kNormStore_1 = require("./kNormStore");
var kSubeStore_1 = require("./kSubeStore");
var kBolgeStore_1 = require("./kBolgeStore");
var tenantStore_1 = require("./tenantStore");
var sessionStore_1 = require("./sessionStore");
var accountStore_1 = require("./accountStore");
var kPersonelStore_1 = require("./kPersonelStore");
var kSubeNormStore_1 = require("./kSubeNormStore");
var kHierarchyStore_1 = require("./kHierarchyStore");
var kNormDetailStore_1 = require("./kNormDetailStore");
var notificationStore_1 = require("./notificationStore");
var authenticationStore_1 = require("./authenticationStore");
var kInkaLookUpTableStore_1 = require("./kInkaLookUpTableStore");
function initializeStores() {
    return {
        roleStore: new roleStore_1["default"](),
        userStore: new userStore_1["default"](),
        kNormStore: new kNormStore_1["default"](),
        kSubeStore: new kSubeStore_1["default"](),
        tenantStore: new tenantStore_1["default"](),
        kBolgeStore: new kBolgeStore_1["default"](),
        sessionStore: new sessionStore_1["default"](),
        accountStore: new accountStore_1["default"](),
        kPersonelStore: new kPersonelStore_1["default"](),
        kSubeNormStore: new kSubeNormStore_1["default"](),
        kHierarchyStore: new kHierarchyStore_1["default"](),
        kNormDetailStore: new kNormDetailStore_1["default"](),
        notificationStore: new notificationStore_1["default"](),
        authenticationStore: new authenticationStore_1["default"](),
        kInkaLookUpTableStore: new kInkaLookUpTableStore_1["default"]()
    };
}
exports["default"] = initializeStores;
