"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.routers = exports.appRouters = exports.userRouter = void 0;
var index_1 = require("./../Loadable/index");
var icons_1 = require("@ant-design/icons");
exports.userRouter = [
    { path: '/user', name: 'User', title: 'User', component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../components/Layout/UserLayout'); }); }), isLayout: true, showInMenu: false },
    { path: '/user/login', name: 'LogIn', title: 'LogIn', component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Login'); }); }), showInMenu: false },
];
exports.appRouters = [
    { path: '/', exact: true, permission: '', title: 'Home', name: 'Home', showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../components/Layout/AppLayout'); }); }), isLayout: true },
    { path: '/dashboard', permission: 'items.dashboard.menu.view', title: 'Dashboard', name: 'Dashboard', icon: icons_1.HomeOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Dashboard'); }); }) },
    { path: '/khierarchy', permission: 'items.hierarchy.menu.view', title: 'Hierarchy', name: 'Hierarchy', icon: icons_1.PartitionOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Hierarchy'); }); }) },
    { path: '/ksube/:id', permission: 'pages.kbranch_detail', title: 'KSube', name: 'KSube', icon: icons_1.TableOutlined, showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KSube'); }); }) },
    { path: '/ksube/:id', permission: 'kbolge.branches', title: 'KSube', name: 'KSube', icon: icons_1.TableOutlined, showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KSube'); }); }) },
    { path: '/ksubedetay', permission: 'items.branch.menu.view', title: 'KSube', name: 'KSube', icon: icons_1.TableOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KSubeDetay'); }); }) },
    { path: '/ksubedetay/:id', permission: 'items.branch.menu.view', title: 'KSubeDetay', name: 'KSubeDetay', icon: icons_1.TableOutlined, showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KSubeDetay'); }); }) },
    { path: '/ksubedetay/:id', permission: 'items.branch.menu.view', title: 'KSube', name: 'KSube', icon: icons_1.TableOutlined, showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KSubeDetay'); }); }) },
    { path: '/bolgemudurluk', permission: 'items.kareas.menu.view', title: 'KBolge', name: 'KBolge', icon: icons_1.TableOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KBolge'); }); }) },
    { path: '/users', permission: 'items.user.menu.view', title: 'Users', name: 'Users', icon: icons_1.UsergroupAddOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Users'); }); }) },
    { path: '/roles', permission: 'items.role.menu.view', title: 'Roles', name: 'Roles', icon: icons_1.TagsOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Roles'); }); }) },
    { path: '/tenants', permission: 'tenants', title: 'Tenants', name: 'Tenants', icon: icons_1.AppstoreOutlined, showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Tenants'); }); }) },
    { path: '/home', permission: 'items.home.menu.view', title: 'Home', name: 'Home', icon: icons_1.UserOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Home'); }); }) },
    { path: '/logout', permission: '', title: 'Logout', name: 'Logout', showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../components/Logout'); }); }) },
    { path: '/exception?:type', permission: '', title: 'Exception', name: 'Exception', showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/Exception'); }); }) },
    { path: '/knormrequestdetail/:id', permission: 'kNormRequestDetail', title: 'KNormRequestDetail', name: 'KNormRequestDetail', icon: icons_1.UserOutlined, showInMenu: false, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/KNormRequestDetail'); }); }) },
    { path: '/hasartazmin', permission: 'items.damage.menu.view', title: 'Hasar Tazmin', name: 'HasarTazmin', icon: icons_1.AimOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/HasarTazmin'); }); }) },
    { path: '/hasartazminsorgulama', permission: 'items.damage.search.menu.view', title: 'Hasar Tazmin Sorgulama', name: 'HasarTazminSorgulama', icon: icons_1.AimOutlined, showInMenu: true, component: index_1["default"](function () { return Promise.resolve().then(function () { return require('../../scenes/HasarTazminList'); }); }) },
];
exports.routers = __spreadArrays(exports.userRouter, exports.appRouters);
