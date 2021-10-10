(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/consts/routing-path.const */ "./src/app/core/consts/routing-path.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].WATCHLIST, loadChildren: () => __webpack_require__.e(/*! import() | movie-list-watchlist-watchlist-module */ "movie-list-watchlist-watchlist-module").then(__webpack_require__.bind(null, /*! ./movie-list/watchlist/watchlist.module */ "./src/app/movie-list/watchlist/watchlist.module.ts")).then(m => m.WatchlistModule) },
    { path: _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].HOME, loadChildren: () => __webpack_require__.e(/*! import() | movie-list-homepage-homepage-module */ "movie-list-homepage-homepage-module").then(__webpack_require__.bind(null, /*! ./movie-list/homepage/homepage.module */ "./src/app/movie-list/homepage/homepage.module.ts")).then(m => m.HomepageModule) },
    {
        path: _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].SPECIFIC_TYPE, loadChildren: () => __webpack_require__.e(/*! import() | movie-list-specific-type-specific-type-module */ "movie-list-specific-type-specific-type-module").then(__webpack_require__.bind(null, /*! ./movie-list/specific-type/specific-type.module */ "./src/app/movie-list/specific-type/specific-type.module.ts")).then(m => m.SpecificTypeModule)
    },
    { path: '', redirectTo: _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].HOME, pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var _core_consts_device_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/consts/device.const */ "./src/app/core/consts/device.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/consts/routing-path.const */ "./src/app/core/consts/routing-path.const.ts");
/* harmony import */ var _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/enums/list-type.enum */ "./src/app/core/enums/list-type.enum.ts");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _movie_list_homepage_shared_new_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-list/homepage/shared/new-list.service */ "./src/app/movie-list/homepage/shared/new-list.service.ts");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-drawer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















const _c0 = function (a0, a1, a2) { return { name: a0, endpoint: a1, type: a2 }; };
function AppComponent_ng_container_7_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_7_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.drawerVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r4.ROUTING_PATH.WATCHLIST + "/" + ctx_r4.ROUTING_PATH.EITHER_WATCH)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c0, item_r6.name, item_r6.endpoint, item_r6.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
} }
const _c1 = function (a0, a1) { return { id: a0, endpoint: a1 }; };
function AppComponent_ng_container_7_ng_container_17_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_7_ng_container_17_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r12.drawerVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r10.ROUTING_PATH.WATCHLIST + "/" + ctx_r10.ROUTING_PATH.FAVORITE_LIST)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c1, item_r11.id, ctx_r10.API.ADDLIST));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r11.subject, " ");
} }
function AppComponent_ng_container_7_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_7_ng_container_17_li_1_Template, 3, 6, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const customDropList_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", customDropList_r9);
} }
function AppComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_7_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.drawerVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u9996\u9801");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_7_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.drawerVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u63A2\u7D22");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_container_7_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.drawerVisible = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u6211\u7684\u6700\u611B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_ng_container_7_li_11_Template, 3, 7, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u6E05\u55AE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_ng_container_7_ng_container_17_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r0.ROUTING_PATH.SPECIFIC_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.collectionDropList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 3, ctx_r0.customDropList$));
} }
function AppComponent_ng_container_24_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r19.ROUTING_PATH.WATCHLIST + "/" + ctx_r19.ROUTING_PATH.FAVORITE_LIST)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c1, item_r20.id, ctx_r19.API.ADDLIST));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r20.subject, " ");
} }
function AppComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_container_24_li_1_Template, 2, 6, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const customDropList_r18 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", customDropList_r18);
} }
function AppComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx_r3.ROUTING_PATH.WATCHLIST + "/" + ctx_r3.ROUTING_PATH.EITHER_WATCH)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c0, item_r21.name, item_r21.endpoint, item_r21.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r21.name, " ");
} }
const _c2 = function () { return { "font-weight": "600", "font-size": " 1.3em", padding: "16px" }; };
const _c3 = function (a0) { return { endpoint: a0 }; };
class AppComponent {
    constructor(sharedService, authSvc, newListSvc) {
        this.sharedService = sharedService;
        this.authSvc = authSvc;
        this.newListSvc = newListSvc;
        this.title = 'movielist';
        // movieDropList: IDropDown[] = [
        //   { name: '熱門', type: 'aaa' },
        //   { name: '上映中', type: 'bbb' },
        //   { name: '即將上映', type: '' },
        //   { name: '評分最高', type: '' },
        // ];
        this.collectionDropList = [
            { name: '待播清單', endpoint: src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].WATCHLIST, type: _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_4__["EitherWatch"].NOTWATCHED },
            { name: '已經觀看', endpoint: src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].WATCHLIST, type: _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_4__["EitherWatch"].BEENWATCHED },
        ];
        this.drawerVisible = false;
    }
    get ROUTING_PATH() {
        return _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_3__["ROUTING_PATH"];
    }
    get API() {
        return src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"];
    }
    ngOnInit() {
        this.initUserDevice(document.documentElement.offsetWidth);
        this.customDropList$ = this.newListSvc.getList();
    }
    login() {
        // this.authSvc.loginForUser().then(()=>console.log(this.authSvc.user) );
        this.authSvc.loginWithGoogle();
    }
    initUserDevice(size) {
        if (size >= 768) {
            this.sharedService.UserDeviceSubject = _core_consts_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].PAD;
            // 手機版
        }
        else if (size > 0 && size < 768) {
            this.sharedService.UserDeviceSubject = _core_consts_device_const__WEBPACK_IMPORTED_MODULE_1__["DEVICE"].MOBILE;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_movie_list_homepage_shared_new_list_service__WEBPACK_IMPORTED_MODULE_7__["NewListService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 74, vars: 14, consts: [[1, "web-box"], [1, "nav-bar", "position-relative"], [1, "header", "row", "align-items-center"], [1, "mobile", "col-4"], [1, "d-flex", 3, "click"], ["nz-icon", "", "nzType", "menu"], ["nzPlacement", "left", 3, "nzClosable", "nzVisible", "nzBodyStyle", "nzOnClose"], [4, "nzDrawerContent"], [1, "col-4", "col-sm-auto"], ["routerLink", "/home", 1, "px-3", "logo"], ["src", "assets/logo1.jpg", "height", "30", "alt", ""], [1, "laptop"], [1, "d-flex", "m-0", "align-items-center"], [3, "routerLink"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["listMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-submenu", "", "nzTitle", "\u6211\u7684\u6E05\u55AE"], [4, "ngIf"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], ["nz-menu-item", "", 4, "ngFor", "ngForOf"], [1, "col-4", "ml-auto", "pr-3"], [1, "d-flex", "m-0", "align-items-center", "justify-content-end"], [3, "click"], [1, "mb-3"], [1, "footer"], [1, "row", "foot-nav", "no-gutters"], [1, "col", "col-sm-4", "text-center", "mr-3"], ["src", "https://picsum.photos/150/225?random=2", "alt", ""], [1, "row", "col"], [1, "col"], ["href", "https://www.flaticon.com/authors/iconixar", "title", "iconixar"], [1, "mobile-drawer"], ["routerLink", "/home", 3, "click"], [3, "routerLink", "click"], ["routerLink", "/watchlist", 3, "click"], [4, "ngFor", "ngForOf"], [2, "color", "rgba(0, 0, 0, 0.45)"], [1, "m-1"], [3, "routerLink", "queryParams", "click"], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["nz-menu-item", ""], [3, "routerLink", "queryParams"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() { return ctx.drawerVisible = !ctx.drawerVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-drawer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function AppComponent_Template_nz_drawer_nzOnClose_6_listener() { return ctx.drawerVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 19, 5, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u63A2\u7D22");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u6E05\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "nz-dropdown-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AppComponent_ng_container_24_Template, 2, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u6211\u7684\u6700\u611B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AppComponent_li_28_Template, 3, 7, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_32_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nav", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u95DC\u65BC\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u95DC\u65BC\u96FB\u5F71\u6E05\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u806F\u7D61\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Icons made by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u53C3\u8207\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\u8CA2\u737B\u6307\u5357");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u65B0\u589E\u96FB\u5F71");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u793E\u7FA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u6307\u5357");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "\u8A0E\u8AD6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzClosable", false)("nzVisible", ctx.drawerVisible)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.ROUTING_PATH.SPECIFIC_TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 9, ctx.customDropList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.ROUTING_PATH.WATCHLIST + "/" + ctx.ROUTING_PATH.FAVORITE_LIST)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c3, ctx.API.FAVORITE));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.collectionDropList);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_10__["NzDrawerComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_10__["NzDrawerContentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzSubMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n\n.header[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  margin: 0 auto;\n}\n.web-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n}\n.nav-bar[_ngcontent-%COMP%] {\n  background-color: #b88e65;\n}\n.nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 50px;\n}\n.menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.laptop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.symbol[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background-color: white;\n  border-radius: 16px;\n}\n.symbol[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@media screen and (max-width: 575px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding: 0 8px;\n  }\n  .mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n  }\n\n  .laptop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .symbol[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    position: relative;\n    left: -15px;\n    margin: 0 auto;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: #555;\n  color: #fff;\n}\n.foot-nav[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  padding: 30px;\n}\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: white;\n}\nh5[_ngcontent-%COMP%] {\n  white-space: pre;\n  color: white;\n  font-weight: 600;\n}\n.hamburger[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.mobile-drawer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.mobile-drawer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b88e65;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2N1c3RvbS1kZXNpZ24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSx5QkNSYztBRFNoQjtBQUFFO0VBQ0UscUJBQUE7QUFFSjtBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7QUFFSjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxpQkFBQTtBQUVKO0FBRUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUFDRjtFQUFFO0lBQ0UsWUFBQTtFQUVKOztFQUNBO0lBQ0Usd0JBQUE7RUFFRjs7RUFBQTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtFQUdGOztFQURBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQUlGO0FBQ0Y7QUFEQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBR0Y7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0FBR0Y7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLFlBQUE7QUFHRjtBQUNFO0VBQ0Usa0JBQUE7QUFFSjtBQUFFO0VBQ0UsY0NuR1k7QURxR2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2N1c3RvbS1kZXNpZ24uc2Nzc1wiO1xuXG4uaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ud2ViLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5tZW51IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaSB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgfVxufVxuXG4ubW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxhcHRvcCBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5zeW1ib2wge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG4gIC5sYXB0b3Age1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuc3ltYm9sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5sb2dvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9vdC1uYXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxubGkgPiBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oNSB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhhbWJ1cmdlciBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubW9iaWxlLWRyYXdlciB7XG4gIGxpe1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICBhIHtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gIH1cbn1cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4kY29sb3Itb3JhbmdlOiAjZmY5ZjAwO1xuJGNvbG9yLWdyZWVuOiAjNGNjNzkwO1xuJGNvbG9yLXJlZDogI2VlMTExMTtcbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNiODhlNjU7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICM5NWE3OGQ7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICNkMWQxYzE7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2JkODk3ZTtcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjZTQ1NzJlO1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2VlZDdlZDtcblxuLy8g5re654GwXG4kY29sb3ItbGlnaHQtZ3JheTogI2Y3ZjdmNztcbiRjb2xvci1ncmF5OiAjNjY2O1xuXG4vLyBpY29uIHN0YXJ0XG4kY29sb3ItZmF2b3JpdGU6cmdiKDIyMSw4NiwxNzgpO1xuJGNvbG9yLXdhdGNobGlzdDpyZ2IoMTg5LDYyLDU3KTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _movie_list_homepage_shared_new_list_service__WEBPACK_IMPORTED_MODULE_7__["NewListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-list/homepage/movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_15___default.a);
const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["AccountBookOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["HeartFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["HeartOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["MenuOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["CloseOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["DashOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["UnorderedListOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["BookOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["PlusOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["ToTopOutline"],
    _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["BookFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_9__["CommentOutline"]];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["zh_TW"] },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"](src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].GAPI_CLIENT_ID)
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__["NzDropDownModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"].forRoot(icons),
            angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["SocialLoginModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__["NzDropDownModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["SocialLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_13__["NzDropDownModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"].forRoot(icons),
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["SocialLoginModule"],
                ],
                providers: [
                    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["zh_TW"] },
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_16__["GoogleLoginProvider"](src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].GAPI_CLIENT_ID)
                                }
                            ]
                        },
                    }
                ],
                entryComponents: [_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");




// declare var gapi : any;
class AuthService {
    constructor(zone, socialAuthService) {
        this.zone = zone;
        this.socialAuthService = socialAuthService;
        this.isLoggedin = false;
        // this.load()
        //   .then(() => this.init())
        //   .then(auth => {
        //     this.auth = auth;
        //   });
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = (user != null);
            console.log(this.socialUser);
        });
    }
    loginWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
    }
    logOut() {
        this.socialAuthService.signOut();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/consts/device.const.ts":
/*!*********************************************!*\
  !*** ./src/app/core/consts/device.const.ts ***!
  \*********************************************/
/*! exports provided: DEVICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE", function() { return DEVICE; });
var DEVICE;
(function (DEVICE) {
    DEVICE[DEVICE["PAD"] = 0] = "PAD";
    DEVICE[DEVICE["MOBILE"] = 1] = "MOBILE";
})(DEVICE || (DEVICE = {}));


/***/ }),

/***/ "./src/app/core/consts/global-constants.const.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/consts/global-constants.const.ts ***!
  \*******************************************************/
/*! exports provided: API, API_POSTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_POSTER", function() { return API_POSTER; });
const API = {
    POST: 'post',
    GET: 'get',
    DELETE: 'delete',
    PATCH: 'patch',
    PUT: 'put',
    KEY: '?api_key=bc0a486e34f46f2e1df814d9d7d35008',
    /** TMDB start */
    MOVIE: '/movie',
    // 關鍵字搜尋
    SEARCH_MOVIE: '/search/movie',
    /** 按類搜索 */
    DISCOVER: '/discover/movie',
    // 分類列表
    GENRE_LIST: '/genre/movie/list',
    POPULAR: '/movie/popular',
    UPCOMING: '/movie/upcoming',
    TOP_RATED: '/movie/top_rated',
    NOW_PLAYING: '/movie/now_playing',
    GET_BY_ID: '/movie',
    // DB start
    WATCHLIST: '/watchlist',
    FAVORITE: '/favorite',
    ADDLIST: '/customlist',
    /** 已經觀看 */
    BEENWATCHED: '/watched'
};
var API_POSTER;
(function (API_POSTER) {
    API_POSTER["GET_POSTER"] = "https://image.tmdb.org/t/p/w200";
})(API_POSTER || (API_POSTER = {}));


/***/ }),

/***/ "./src/app/core/consts/routing-path.const.ts":
/*!***************************************************!*\
  !*** ./src/app/core/consts/routing-path.const.ts ***!
  \***************************************************/
/*! exports provided: ROUTING_PATH, LOCALSTORAGE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_PATH", function() { return ROUTING_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALSTORAGE_KEY", function() { return LOCALSTORAGE_KEY; });
const ROUTING_PATH = {
    HOME: 'home',
    WATCHLIST: 'watchlist',
    /** 新增清單 */
    LIST_ADDING: 'listadd',
    /** 客製表單 */
    CUSTOM_LIST: 'cutomlist',
    /** 電影類別 */
    SPECIFIC_TYPE: 'specific-type',
    /** 我的最愛 */
    FAVORITE_LIST: 'favoritelist',
    /** 待播 or 已看清單 */
    EITHER_WATCH: 'eitherwatch'
};
const LOCALSTORAGE_KEY = {
    GENRES: 'genres'
};


/***/ }),

/***/ "./src/app/core/enums/list-type.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/core/enums/list-type.enum.ts ***!
  \**********************************************/
/*! exports provided: ListType, EitherWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListType", function() { return ListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EitherWatch", function() { return EitherWatch; });
var ListType;
(function (ListType) {
    /** 待看＆＆已看清單 */
    ListType[ListType["WATCHLIST"] = 0] = "WATCHLIST";
    ListType[ListType["FAVORITE"] = 1] = "FAVORITE";
    ListType[ListType["ADDLIST"] = 2] = "ADDLIST";
})(ListType || (ListType = {}));
var EitherWatch;
(function (EitherWatch) {
    EitherWatch[EitherWatch["BEENWATCHED"] = 0] = "BEENWATCHED";
    EitherWatch[EitherWatch["NOTWATCHED"] = 1] = "NOTWATCHED";
})(EitherWatch || (EitherWatch = {}));


/***/ }),

/***/ "./src/app/core/funcs/verify-form.ts":
/*!*******************************************!*\
  !*** ./src/app/core/funcs/verify-form.ts ***!
  \*******************************************/
/*! exports provided: verifyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyForm", function() { return verifyForm; });
/**
 * 驗證表單
 * @returns boolean 不合格表單:true
 */
function verifyForm(form) {
    const formControls = form.controls;
    for (const i in formControls) {
        if (formControls.hasOwnProperty(i)) {
            formControls[i].markAsDirty();
            formControls[i].updateValueAndValidity();
        }
    }
    return form.invalid;
}


/***/ }),

/***/ "./src/app/core/services/message.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/message.service.ts ***!
  \**************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");



class MessageService {
    constructor(nzMsgSvc) {
        this.nzMsgSvc = nzMsgSvc;
    }
    /**
     * 加入清單提示訊息
     * @param type 加入清單名稱
     * @param added true==已加入
     */
    handleAddAction(type, added) {
        added ?
            this.nzMsgSvc.success(`已加入${type}`) :
            this.nzMsgSvc.warning(`已移出${type}`);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/movie-request.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/movie-request.service.ts ***!
  \********************************************************/
/*! exports provided: MovieRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRequestService", function() { return MovieRequestService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








class MovieRequestService {
    constructor(http) {
        this.http = http;
        // 為了debug用
        this.handleError = (error) => {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
            }
            // return an observable with a user-facing error message
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        };
    }
    /**
     *
     * @param querys 搜索條件
     */
    request(method, url, sendData) {
        const params = Object.assign(Object.assign({}, sendData), { language: 'zh-TW' });
        if (method === _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].POST) {
            return;
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].DEFAULT_IP + url + _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].KEY, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    /**
     * call database
     * @param querys 搜索條件
     */
    dbRequest(method, url, sendData) {
        const headers = this.getHTTPHeaders();
        const params = Object.assign({}, sendData);
        const sendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].DB_IP + url;
        switch (method) {
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].GET:
                return this.http.get(sendUrl, { params, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].POST:
                return this.http.post(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].PATCH:
                return this.http.patch(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].DELETE:
                return this.http.delete(sendUrl, { params, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
    }
    /** 拿海報 */
    requestPoster(posterPath, width = '200') {
        return this.http.get(`${_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API_POSTER"].GET_POSTER}/w${width}/${posterPath}`);
    }
    /**
     * call firebase
     */
    fbRequest(method, url, sendData) {
        const headers = this.getHTTPHeaders();
        const params = Object.assign({}, sendData);
        const sendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].FB_IP + url + '.json';
        switch (method) {
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].GET:
                return this.http.get(sendUrl, { params, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].POST:
                return this.http.post(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].PUT:
                return this.http.put(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].PATCH:
                return this.http.patch(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API"].DELETE:
                return this.http.delete(sendUrl, { params, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
    }
    getHTTPHeaders() {
        const result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        });
        return result;
    }
}
MovieRequestService.ɵfac = function MovieRequestService_Factory(t) { return new (t || MovieRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MovieRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MovieRequestService, factory: MovieRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MovieRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/list-adding/list-adding.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/movie-list/homepage/list-adding/list-adding.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListAddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAddingComponent", function() { return ListAddingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_funcs_verify_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/funcs/verify-form */ "./src/app/core/funcs/verify-form.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _shared_new_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/new-list.service */ "./src/app/movie-list/homepage/shared/new-list.service.ts");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");















class ListAddingComponent {
    constructor(fb, modalRef, newListSvc, nzMsgSvc) {
        this.fb = fb;
        this.modalRef = modalRef;
        this.newListSvc = newListSvc;
        this.nzMsgSvc = nzMsgSvc;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.validateForm = this.fb.group({
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            desc: [''],
        });
    }
    submitForm() {
        if (Object(_core_funcs_verify_form__WEBPACK_IMPORTED_MODULE_2__["verifyForm"])(this.validateForm)) {
            return;
        }
        const id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
        const requestBody = this.validateForm.value;
        requestBody.collections = [];
        requestBody.id = id;
        this.newListSvc.newList(id, requestBody).subscribe(() => {
            this.nzMsgSvc.success(`新增${this.validateForm.get('subject').value}`);
            this.modalRef.triggerOk();
        });
    }
}
ListAddingComponent.ɵfac = function ListAddingComponent_Factory(t) { return new (t || ListAddingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_new_list_service__WEBPACK_IMPORTED_MODULE_5__["NewListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"])); };
ListAddingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListAddingComponent, selectors: [["app-list-adding"]], decls: 18, vars: 1, consts: [[1, "text-center", "font-weight-bold", "mb-3"], ["nz-form", "", 3, "formGroup"], ["nzErrorTip", "\u8ACB\u8F38\u5165\u6E05\u55AE\u540D\u7A31!"], ["type", "text", "nz-input", "", "formControlName", "subject", "placeholder", "\u6E05\u55AE\u540D\u7A31"], ["rows", "3", "nz-input", "", "formControlName", "desc"], [1, "text-center"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"]], template: function ListAddingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u5EFA\u7ACB\u65B0\u6E05\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListAddingComponent_Template_button_click_14_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u78BA\u8A8D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListAddingComponent_Template_button_click_16_listener() { return ctx.modalRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u53D6\u6D88 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3QvaG9tZXBhZ2UvbGlzdC1hZGRpbmcvbGlzdC1hZGRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListAddingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list-adding',
                templateUrl: './list-adding.component.html',
                styleUrls: ['./list-adding.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }, { type: _shared_new_list_service__WEBPACK_IMPORTED_MODULE_5__["NewListService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var _list_adding_list_adding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../list-adding/list-adding.component */ "./src/app/movie-list/homepage/list-adding/list-adding.component.ts");
/* harmony import */ var _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/consts/routing-path.const */ "./src/app/core/consts/routing-path.const.ts");
/* harmony import */ var _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/enums/list-type.enum */ "./src/app/core/enums/list-type.enum.ts");
/* harmony import */ var _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chinese_conv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chinese-conv */ "./node_modules/chinese-conv/dist/index.js");
/* harmony import */ var chinese_conv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chinese_conv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../shared/detail.service */ "./src/app/movie-list/homepage/shared/detail.service.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/services/message.service */ "./src/app/core/services/message.service.ts");
/* harmony import */ var _shared_new_list_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../shared/new-list.service */ "./src/app/movie-list/homepage/shared/new-list.service.ts");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





















function MovieDetailComponent_ng_container_0_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function MovieDetailComponent_ng_container_0_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function MovieDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function MovieDetailComponent_ng_container_0_Template_img_error_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.imgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u985E\u578B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u4E0A\u6620\u65E5\u671F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u8A55\u5206:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u7247\u9577:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, MovieDetailComponent_ng_container_0_ng_container_33_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u96FB\u5F71\u4ECB\u7D39:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, MovieDetailComponent_ng_container_0_ng_container_40_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.displayList.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r0.API_POSTER.GET_POSTER + ctx_r0.displayList.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.displayList.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.displayList.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.displayList.runtime, "\u5206");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.displayList.overview ? ctx_r0.displayList.overview : "\u5C1A\u7121\u4ECB\u7D39", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1);
} }
function MovieDetailComponent_ng_template_1_nz_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 29);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLabel", item_r9.subject)("nzValue", item_r9);
} }
const _c0 = function (a0) { return { "add-favorite": a0 }; };
const _c1 = function (a0) { return { "add-watchlist": a0 }; };
function MovieDetailComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_ng_template_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.openNewList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " \u5EFA\u7ACB\u65B0\u6E05\u55AE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MovieDetailComponent_ng_template_1_Template_nz_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.selectedValue = $event; })("ngModelChange", function MovieDetailComponent_ng_template_1_Template_nz_select_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.addToCustom($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MovieDetailComponent_ng_template_1_nz_option_11_Template, 1, 2, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_ng_template_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.handleAdd(ctx_r14.ListType.FAVORITE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MovieDetailComponent_ng_template_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.handleAdd(ctx_r15.ListType.WATCHLIST); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDropdownMenu", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.customList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTheme", ctx_r2.inFavorite ? "fill" : "outline")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx_r2.inFavorite));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTheme", ctx_r2.inWatchlist ? "fill" : "outline")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c1, ctx_r2.inWatchlist));
} }
class MovieDetailComponent {
    constructor(detailService, modalRef, msgSvc, nzModal, newListSvc, nzMsgSvc) {
        this.detailService = detailService;
        this.modalRef = modalRef;
        this.msgSvc = msgSvc;
        this.nzModal = nzModal;
        this.newListSvc = newListSvc;
        this.nzMsgSvc = nzMsgSvc;
        this.API_POSTER = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__["API_POSTER"];
        /** 清單類別 */
        this.ListType = _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"];
        this.inFavorite = false;
        /** 待播清單 */
        this.inWatchlist = false;
        this.genres = [];
        this.listMap = [
            { header: '類型', key: 'genres' },
            { header: '上映日期', key: 'release_date' },
            { header: '評分', key: 'vote_average' },
            { header: '片長', key: 'runtime' },
        ];
        /** 客制清單 */
        this.customList = [];
    }
    get ROUTING_PATH() {
        return _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"];
    }
    ngOnInit() {
        this.movieId = this.info.id;
        this.getDetailById(this.movieId);
        this.getCustomList();
    }
    getDetailById(id) {
        this.detailService.getMovieDetail(id).subscribe((res) => {
            this.displayList = res;
            this.genres = this.getMovieGenres(res.genres);
        });
        this.searchInList(id);
    }
    handleAdd(type) {
        const sendData = {
            title: this.displayList.title,
            addTime: new Date().valueOf(),
            beenWatched: false
        };
        switch (type) {
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].WATCHLIST:
                if (this.inWatchlist) {
                    this.detailService.removeList(this.movieId, type).subscribe(res => {
                        this.inWatchlist = false;
                        this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
                    });
                }
                else {
                    this.detailService.addtoList(this.movieId, type, sendData).subscribe(res => {
                        this.inWatchlist = true;
                        this.msgSvc.handleAddAction('待播清單', this.inWatchlist);
                    });
                }
                break;
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].FAVORITE:
                if (this.inFavorite) {
                    this.detailService.removeList(this.movieId, type).subscribe(res => {
                        this.inFavorite = false;
                        this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
                    });
                }
                else {
                    this.detailService.addtoList(this.movieId, type, sendData).subscribe(res => {
                        this.inFavorite = true;
                        this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
                    });
                }
        }
    }
    /** 取得所有客制清單 */
    getCustomList() {
        this.newListSvc.getList().subscribe(res => this.customList = res);
    }
    /** 加到客製清單 */
    addToCustom(listInfo) {
        if (!listInfo) {
            return;
        }
        // 新的清單，完全沒值
        if (!listInfo.collections) {
            listInfo.collections = [this.movieId];
            this.newListSvc.addMovie(listInfo.id, listInfo).subscribe(() => {
                this.nzMsgSvc.success(`已加入${listInfo.subject}`);
            });
        }
        else {
            const collections = listInfo.collections;
            if (collections.includes(this.movieId)) {
                this.nzMsgSvc.info(`已在${listInfo.subject}`);
                return;
            }
            else {
                collections.push(this.movieId);
            }
            this.newListSvc.addMovie(listInfo.id, listInfo).subscribe(() => {
                this.nzMsgSvc.success(`已加入${listInfo.subject}`);
            });
        }
    }
    /** 看電影是否有在清單 */
    searchInList(id) {
        // 已經看過則不在待播清單(會存到已觀看)
        this.searchWatchlist(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(m => { var _a; return (_a = m === null || m === void 0 ? void 0 : m.beenWatched) !== null && _a !== void 0 ? _a : true; })).subscribe(res => this.inWatchlist = !res);
        this.searchFavorite(id).subscribe(res => this.inFavorite = !!res);
    }
    searchWatchlist(id) {
        return this.detailService.readListById(id, _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].WATCHLIST);
    }
    searchFavorite(id) {
        return this.detailService.readListById(id, _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].FAVORITE);
    }
    getMovieGenres(genres) {
        return genres.map(genre => Object(chinese_conv__WEBPACK_IMPORTED_MODULE_5__["tify"])(genre.name));
    }
    imgError(event) {
        event.target.src = 'assets/not-found.jpeg';
        event.target.style['object-fit'] = 'contain';
        event.target.style['width'] = '100%';
    }
    openNewList() {
        this.nzModal.create({
            nzContent: _list_adding_list_adding_component__WEBPACK_IMPORTED_MODULE_0__["ListAddingComponent"],
            nzFooter: null,
            nzBodyStyle: { padding: '24px' },
            nzOnOk: () => { this.getCustomList(); }
        });
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_detail_service__WEBPACK_IMPORTED_MODULE_7__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_new_list_service__WEBPACK_IMPORTED_MODULE_10__["NewListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageService"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], inputs: { info: "info" }, decls: 3, vars: 1, consts: [[4, "ngIf"], ["btns", ""], [1, "text-center", "font-weight-bold", "mb-3"], [1, "row"], [1, "col-md-6", "col-12"], [1, "img-box", "text-center"], [3, "src", "error"], [1, "col-md-6", "col-12", "pt-3"], [1, "list-box"], [1, "header"], [1, "content"], [1, "py-3", "d-md-block", "d-none"], [4, "ngTemplateOutlet"], [1, "col-12", "mb-2", "my-sm-2", 2, "font-size", "18px"], [1, "col-12", "overview"], [1, "py-3", "d-block", "d-md-none"], [1, "btn-groups"], ["nz-button", "", "nz-dropdown", "", "nzTrigger", "click", "nzType", "primary", "nzSize", "large", "nzShape", "circle", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "unordered-list", "nzTheme", "outline"], ["menu", "nzDropdownMenu"], [1, "new-list-dropdown"], [1, "mb-2"], [1, "new-list-btn", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline", 1, "align-middle"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "\u65B0\u589E\u81F3\u6E05\u55AE", 1, "w-100", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "nzShape", "circle", 3, "click"], ["nz-icon", "", "nzType", "heart", 3, "nzTheme", "ngClass"], ["nz-icon", "", "nzType", "book", 3, "nzTheme", "ngClass"], [3, "nzLabel", "nzValue"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MovieDetailComponent_ng_container_0_Template, 41, 9, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MovieDetailComponent_ng_template_1_Template, 16, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropdownButtonDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__["NzDropdownMenuComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__["NzOptionComponent"]], styles: ["@charset \"UTF-8\";\n\n.genre[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n  display: block;\n}\n.list-box[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  min-width: 40px;\n}\n.list-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.overview[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n@media screen and (max-width: 575px) {\n  hr[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n  }\n}\n.btn-groups[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.new-list-dropdown[_ngcontent-%COMP%] {\n  width: 180px;\n  padding: 16px;\n  background-color: #f7f7f7;\n}\n.new-list-btn[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2N1c3RvbS1kZXNpZ24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBREVBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsMkJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQUU7RUFDRSxpQkFBQTtBQUVKO0FBRUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBR0U7RUFERjtJQUVJLGdCQUFBO0VBQ0Y7QUFDRjtBQUVFO0VBQ0Usa0JBQUE7QUFDSjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkN0QmlCO0FEc0JuQjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2N1c3RvbS1kZXNpZ24uc2Nzc1wiO1xuXG4uZ2VucmUge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5saXN0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5oZWFkZXIge1xuICAgIG1pbi13aWR0aDogNDBweDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbn1cblxuLm92ZXJ2aWV3IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbn1cblxuaHIge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbn1cbi5idG4tZ3JvdXBzIHtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLm5ldy1saXN0LWRyb3Bkb3duIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JheTtcbn1cblxuLm5ldy1saXN0LWJ0biB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiRjb2xvci1vcmFuZ2U6ICNmZjlmMDA7XG4kY29sb3ItZ3JlZW46ICM0Y2M3OTA7XG4kY29sb3ItcmVkOiAjZWUxMTExO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2I4OGU2NTtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzk1YTc4ZDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2QxZDFjMTtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjYmQ4OTdlO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICNlNDU3MmU7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNvbG9yLWdyYXk6ICM2NjY7XG5cbi8vIGljb24gc3RhcnRcbiRjb2xvci1mYXZvcml0ZTpyZ2IoMjIxLDg2LDE3OCk7XG4kY29sb3Itd2F0Y2hsaXN0OnJnYigxODksNjIsNTcpO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss']
            }]
    }], function () { return [{ type: _shared_detail_service__WEBPACK_IMPORTED_MODULE_7__["DetailService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalRef"] }, { type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"] }, { type: _shared_new_list_service__WEBPACK_IMPORTED_MODULE_10__["NewListService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__["NzMessageService"] }]; }, { info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/shared/detail.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/movie-list/homepage/shared/detail.service.ts ***!
  \**************************************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../core/enums/list-type.enum */ "./src/app/core/enums/list-type.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");





class DetailService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    /**
     * 取得電影明細
     */
    getMovieDetail(id) {
        return this.requestService.request(_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET, `${_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET_BY_ID}/${id}`);
    }
    // DB start
    /**
     * 加入後端待播清單
     * @param id movidId
     * @param listType ListType enum
     */
    addtoList(id, listType, data) {
        let url = '';
        data.id = id;
        switch (listType) {
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].FAVORITE:
                url = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].FAVORITE;
                break;
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].WATCHLIST:
                url = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].WATCHLIST;
                break;
            default:
                console.log('error type');
                return;
        }
        // return this.requestService.dbRequest(API.POST, API.WATCHLIST, movie);
        return this.requestService.fbRequest(_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].PUT, url + '/' + id, data);
    }
    /**
     * remove movie from list
     */
    removeList(id, listType) {
        let url = '';
        switch (listType) {
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].FAVORITE:
                url = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].FAVORITE;
                break;
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].WATCHLIST:
                url = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].WATCHLIST;
                break;
            default:
                console.log('error type');
                return;
        }
        return this.requestService.fbRequest(_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].DELETE, url + '/' + id);
    }
    /**
     * 從DB拿單筆電影
     * @param id movieid
     * @param listType watchlist, favorite
     */
    readListById(id, listType) {
        let url = '';
        switch (listType) {
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].FAVORITE:
                url = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].FAVORITE;
                break;
            case _core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].WATCHLIST:
                url = _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].WATCHLIST;
                break;
            default:
                console.log('error type');
                return;
        }
        return this.requestService.fbRequest(_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET, url + '/' + id);
    }
    /**
     * 修改電影內容
     * @id 電影編號
     * @patchData 資料
     */
    patchMovie(id, patchData) {
        return this.requestService.fbRequest(_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].PATCH, _core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].WATCHLIST + '/' + id, patchData);
    }
}
DetailService.ɵfac = function DetailService_Factory(t) { return new (t || DetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_3__["MovieRequestService"])); };
DetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DetailService, factory: DetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_3__["MovieRequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/shared/new-list.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/movie-list/homepage/shared/new-list.service.ts ***!
  \****************************************************************/
/*! exports provided: NewListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListService", function() { return NewListService; });
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");





class NewListService {
    constructor(requestSvc) {
        this.requestSvc = requestSvc;
    }
    /**
     * 新增自訂清單
     */
    newList(id, data) {
        return this.requestSvc.fbRequest(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].PUT, src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].ADDLIST + '/' + id, data);
    }
    /** 取得所有客制清單 */
    getList() {
        return this.requestSvc.fbRequest(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].GET, src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].ADDLIST).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => Object.values(res)));
    }
    /**
     * 新增電影至清單
     * @param listId 清單的id
     * @param movieId 電影id
     */
    addMovie(listId, data) {
        return this.requestSvc.fbRequest(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].PATCH, `${src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API"].ADDLIST}/${listId}`, data);
    }
}
NewListService.ɵfac = function NewListService_Factory(t) { return new (t || NewListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_3__["MovieRequestService"])); };
NewListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewListService, factory: NewListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_3__["MovieRequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/movie-card/movie-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/movie-card/movie-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/movie-list/homepage/movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rate-icon/rate-icon.component */ "./src/app/shared/rate-icon/rate-icon.component.ts");







class MovieCardComponent {
    constructor(modalSvc) {
        this.modalSvc = modalSvc;
        this.refreshList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 海報網址
        this.API_POSTER = src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API_POSTER"];
    }
    ngOnInit() {
    }
    /**
     * 跳出顯示電影詳情視窗
     *
     */
    onWatchDetail(info) {
        const modal = this.modalSvc.create({
            nzContent: src_app_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailComponent"],
            nzComponentParams: {
                info
            },
            nzFooter: null,
            nzBodyStyle: { padding: '24px' },
        });
        modal.afterClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(() => this.refreshList.emit());
    }
    imgError(event) {
        event.target.src = 'assets/not-found.jpeg';
        event.target.style['object-fit'] = 'contain';
    }
}
MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) { return new (t || MovieCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"])); };
MovieCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCardComponent, selectors: [["app-movie-card"]], inputs: { movie: "movie" }, outputs: { refreshList: "refreshList" }, decls: 17, vars: 5, consts: [[1, "card-box"], [1, "d-flex", 3, "click"], [1, "img-box"], ["alt", "", 3, "src", "error"], [1, "overview-box", "p-3"], [1, "row", "align-items-center"], [1, "col-auto"], [1, "rate-box"], [3, "rate"], [1, "col", "pl-0"], [1, "mb-2", "fc-light"], [1, "overview"], ["overview", ""]], template: function MovieCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieCardComponent_Template_div_click_1_listener() { return ctx.onWatchDetail(ctx.movie); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function MovieCardComponent_Template_img_error_3_listener($event) { return ctx.imgError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-rate-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.API_POSTER.GET_POSTER + ctx.movie.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.movie.vote_average);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.release_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.movie.overview ? ctx.movie.overview : "\u5C1A\u7121\u4ECB\u7D39", " ");
    } }, directives: [_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_5__["RateIconComponent"]], styles: [".card-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 140px;\n  border: 1px solid #aaa;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.img-box[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 93px;\n  min-width: 93px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 100%;\n  object-fit: cover;\n}\n\n.overview-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.overview[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbW92aWUtY2FyZC9tb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vdmllLWNhcmQvbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJveCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxMCUpO1xufVxuXG4uaW1nLWJveCB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA5M3B4O1xuICBtaW4td2lkdGg6IDkzcHg7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm92ZXJ2aWV3LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm92ZXJ2aWV3IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-card',
                templateUrl: './movie-card.component.html',
                styleUrls: ['./movie-card.component.scss']
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refreshList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/vertical-card/vertical-card.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/vertical-card/vertical-card.component.ts ***!
  \****************************************************************************/
/*! exports provided: VerticalCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalCardComponent", function() { return VerticalCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/movie-list/homepage/movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rate-icon/rate-icon.component */ "./src/app/shared/rate-icon/rate-icon.component.ts");






class VerticalCardComponent {
    constructor(modalSvc) {
        this.modalSvc = modalSvc;
        this.API_POSTER = src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API_POSTER"];
    }
    ngOnInit() {
    }
    /**
     * 跳出顯示電影詳情視窗
     * 資料不完全所以movieDetail要再用id call一次
     */
    onWatchDetail(info) {
        this.modalSvc.create({
            nzContent: src_app_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailComponent"],
            nzComponentParams: {
                info
            },
            nzFooter: null,
            nzBodyStyle: { padding: '24px' },
        });
    }
}
VerticalCardComponent.ɵfac = function VerticalCardComponent_Factory(t) { return new (t || VerticalCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"])); };
VerticalCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalCardComponent, selectors: [["app-vertical-card"]], inputs: { movie: "movie" }, decls: 11, vars: 4, consts: [[1, "carousel-cell", 3, "click"], [1, "img-box", "position-relative"], ["alt", "", 3, "src"], [1, "info-box", "position-relative"], [1, "rate-box"], [3, "rate"], [1, "pl-2"], [1, "pt-3", "font-weight-bold", "mb-0"], [1, "fc-light"]], template: function VerticalCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalCardComponent_Template_div_click_0_listener() { return ctx.onWatchDetail(ctx.movie); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-rate-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.API_POSTER.GET_POSTER + ctx.movie.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.movie.vote_average);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.release_date);
    } }, directives: [_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_4__["RateIconComponent"]], styles: [".rate-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: 8px;\n}\n\n.img-box[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n\n.options-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 24px;\n  text-align: center;\n  height: 24px;\n  border-radius: 50%;\n  background-color: rgba(190, 190, 184, 0.6);\n  cursor: pointer;\n}\n\n.options-box[_ngcontent-%COMP%]:hover {\n  background-color: #01b4e5;\n}\n\n.options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n}\n\ni[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmVydGljYWwtY2FyZC92ZXJ0aWNhbC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUNFO0VBQ0UseUJBQUE7QUFDSjs7QUFJRTtFQUNFLGlCQUFBO0FBREo7O0FBS0E7RUFDRSxpQ0FBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdmVydGljYWwtY2FyZC92ZXJ0aWNhbC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhdGUtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiA4cHg7XG59XG5cbi5pbWctYm94IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vLyBvcHRpb25zIHN0YXJ0XG4ub3B0aW9ucy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICByaWdodDogOHB4O1xuICB3aWR0aDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTAsIDE5MCwgMTg0LCAwLjYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxODAsIDIyOSk7XG4gIH1cbn1cblxuLm9wdGlvbnMge1xuICBsaSB7XG4gICAgcGFkZGluZzogNnB4IDIwcHg7XG4gIH1cbn1cblxuaSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cbi8vIG9wdGlvbnMgZW5kXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vertical-card',
                templateUrl: './vertical-card.component.html',
                styleUrls: ['./vertical-card.component.scss']
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/rate-icon/rate-icon.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/rate-icon/rate-icon.component.ts ***!
  \*********************************************************/
/*! exports provided: RateIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateIconComponent", function() { return RateIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class RateIconComponent {
    constructor() { }
    ngOnInit() {
        this.circleRate = +this.rate;
        if (+this.rate >= 7) {
            this.circleColor = 'green';
        }
        else if (+this.rate >= 4) {
            this.circleColor = 'orange';
        }
        else {
            this.circleColor = 'red';
        }
    }
}
RateIconComponent.ɵfac = function RateIconComponent_Factory(t) { return new (t || RateIconComponent)(); };
RateIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateIconComponent, selectors: [["app-rate-icon"]], inputs: { rate: "rate" }, decls: 6, vars: 7, consts: [["viewBox", "0 0 36 36", 1, "circular-chart", 3, "ngClass"], ["d", "M18 2.0845\n      a 15.9155 15.9155 0 0 1 0 31.831\n      a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["d", "M18 2.0845\n      a 15.9155 15.9155 0 0 1 0 31.831\n      a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["x", "18", "y", "22.35", 1, "percentage"]], template: function RateIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.circleColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pathLength", 10)("stroke-dasharray", ctx.circleRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, ctx.rate, "1.1"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["@charset \"UTF-8\";\n\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #eee;\n  stroke-width: 3.8;\n}\n.circle[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.circular-chart.green[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #4cc790;\n}\n.circular-chart.red[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #ee1111;\n}\n.circular-chart.orange[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #ff9f00;\n}\n.percentage[_ngcontent-%COMP%] {\n  fill: #666;\n  text-anchor: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGUtaWNvbi9yYXRlLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvY3VzdG9tLWRlc2lnbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FESUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLFVDVlk7RURXWixpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSx1QkFBQTtFQURGO0FBQ0Y7QUFLRTtFQUNFLGVBdkJXO0FBb0JmO0FBRUU7RUFDRSxlQXZCVztBQXdCZjtBQUZFO0VBQ0UsZUF2Qlc7QUE0QmY7QUFEQTtFQUNFLFVDVFc7RURVWCxtQkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JhdGUtaWNvbi9yYXRlLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jdXN0b20tZGVzaWduLnNjc3MnO1xuXG4kc3Ryb2tlLWNvbG9yOiBcImdyZWVuXCIgJGNvbG9yLWdyZWVuLFwicmVkXCIgJGNvbG9yLXJlZCwgXCJvcmFuZ2VcIiAkY29sb3Itb3JhbmdlO1xuXG4uY2lyY2xlLWJnIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjZWVlO1xuICBzdHJva2Utd2lkdGg6IDMuODtcbn1cblxuLmNpcmNsZSB7XG4gIGZpbGw6ICRjb2xvci13aGl0ZTtcbiAgc3Ryb2tlLXdpZHRoOiAyLjg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcbiAgfVxufVxuXG5AZWFjaCAkc3Ryb2tlLCAkY29sb3IgaW4gJHN0cm9rZS1jb2xvciB7XG4gIC5jaXJjdWxhci1jaGFydC4jeyRzdHJva2V9IC5jaXJjbGV7XG4gICAgc3Ryb2tlOiRjb2xvcjtcbiAgfVxufVxuXG4ucGVyY2VudGFnZSB7XG4gIGZpbGw6ICRjb2xvci1ncmF5O1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiRjb2xvci1vcmFuZ2U6ICNmZjlmMDA7XG4kY29sb3ItZ3JlZW46ICM0Y2M3OTA7XG4kY29sb3ItcmVkOiAjZWUxMTExO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2I4OGU2NTtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzk1YTc4ZDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2QxZDFjMTtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjYmQ4OTdlO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICNlNDU3MmU7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNvbG9yLWdyYXk6ICM2NjY7XG5cbi8vIGljb24gc3RhcnRcbiRjb2xvci1mYXZvcml0ZTpyZ2IoMjIxLDg2LDE3OCk7XG4kY29sb3Itd2F0Y2hsaXN0OnJnYigxODksNjIsNTcpO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rate-icon',
                templateUrl: './rate-icon.component.html',
                styleUrls: ['./rate-icon.component.scss']
            }]
    }], function () { return []; }, { rate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-icon/rate-icon.component */ "./src/app/shared/rate-icon/rate-icon.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tree */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree.js");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-drawer.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-collapse.js");
/* harmony import */ var _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/movie-card/movie-card.component */ "./src/app/shared/components/movie-card/movie-card.component.ts");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/slider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-slider.js");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-back-top.js");
/* harmony import */ var _components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/vertical-card/vertical-card.component */ "./src/app/shared/components/vertical-card/vertical-card.component.ts");























class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__["NzTreeModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_17__["NzCollapseModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_19__["NzSliderModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_20__["NzBackTopModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"],
        _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__["MovieCardComponent"],
        _components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_21__["VerticalCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__["NzTreeModule"],
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_17__["NzCollapseModule"],
        ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_19__["NzSliderModule"],
        ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_20__["NzBackTopModule"],
        _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__["MovieCardComponent"],
        _components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_21__["VerticalCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"],
                    _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__["MovieCardComponent"],
                    _components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_21__["VerticalCardComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [
                    _rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"],
                    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabsModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
                    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__["NzTreeModule"],
                    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_13__["NzDrawerModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzToolTipModule"],
                    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__["NzSelectModule"],
                    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_17__["NzCollapseModule"],
                    ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_19__["NzSliderModule"],
                    ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_20__["NzBackTopModule"],
                    _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_18__["MovieCardComponent"],
                    _components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_21__["VerticalCardComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedService {
    constructor() { }
    /** PAD || MOBILE */
    set UserDeviceSubject(value) {
        this.device = value;
    }
    get UserDeviceSubject() {
        return this.device;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    DEFAULT_IP: 'https://api.themoviedb.org/3',
    DB_IP: 'https://movieback.duckdns.org',
    FB_IP: 'https://react-meetup-aff59-default-rtdb.asia-southeast1.firebasedatabase.app',
    GAPI_CLIENT_ID: '564087547062-3r0maars7kgpun3fonkjjpv616e88n95.apps.googleusercontent.com',
    firebaseConfig: {
        apiKey: 'AIzaSyDfXBFy3P1IPBncApDTKUBLHk6B9tiQwVQ',
        authDomain: 'movieback-25655.firebaseapp.com',
        projectId: 'movieback-25655',
        storageBucket: 'movieback-25655.appspot.com',
        messagingSenderId: '703003658373',
        appId: '1:703003658373:web:27acaf36f5d8a1082481ec',
        measurementId: 'G-05BMZ9HPWF'
    }
    // DB_IP: 'localhost:80'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    // papas fritas para todos
    window['ngRef'] = ref;
    // Otherwise, log the boot error
})
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Documents/GitHub/movielist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map