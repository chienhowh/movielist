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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: 'watchlist', loadChildren: () => __webpack_require__.e(/*! import() | movie-list-watchlist-watchlist-module */ "movie-list-watchlist-watchlist-module").then(__webpack_require__.bind(null, /*! ./movie-list/watchlist/watchlist.module */ "./src/app/movie-list/watchlist/watchlist.module.ts")).then(m => m.WatchlistModule) },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | movie-list-homepage-homepage-module */ "movie-list-homepage-homepage-module").then(__webpack_require__.bind(null, /*! ./movie-list/homepage/homepage.module */ "./src/app/movie-list/homepage/homepage.module.ts")).then(m => m.HomepageModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _movie_list_consts_device_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-list/consts/device.const */ "./src/app/movie-list/consts/device.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AppComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.title = 'movielist';
    }
    ngOnInit() {
        this.initUserDevice(document.documentElement.offsetWidth);
    }
    initUserDevice(size) {
        if (size >= 1024) {
            this.sharedService.setUserDeviceSubject = _movie_list_consts_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"].PAD;
            // 手機版
        }
        else if (size > 0 && size < 1024) {
            this.sharedService.setUserDeviceSubject = _movie_list_consts_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"].MOBILE;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 69, vars: 1, consts: [[1, "web-box"], [1, "nav-bar", "position-relative"], [1, "header", "d-flex", "align-items-center"], [1, "mobile"], ["nz-dropdown", "", "nzTrigger", "click", 1, "d-flex", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "menu"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", "", 1, "hamburger"], ["nz-menu-item", ""], ["routerLink", "/home"], ["routerLink", "/watchlist"], ["routerLink", "/home", 1, "px-3"], [1, "symbol"], ["src", "assets/movie.png", "alt", "", "height", "30"], [2, "color", "red"], [2, "color", "blue"], [1, "d-flex", "m-0", "align-items-center", "laptop"], [1, "mb-3"], [1, "footer"], [1, "row", "foot-nav", "no-gutters"], [1, "col", "col-sm-4", "text-center", "mr-3"], ["src", "https://picsum.photos/150/225?random=2", "alt", ""], [1, "row", "col"], [1, "col"], ["href", "https://www.flaticon.com/authors/iconixar", "title", "iconixar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-dropdown-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u9996\u9801");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u6211\u7684\u6700\u611B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u9996\u9801");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u6211\u7684\u6700\u611B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nav", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u95DC\u65BC\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u95DC\u65BC\u96FB\u5F71\u6E05\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u806F\u7D61\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Icons made by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u53C3\u8207\u6211\u5011");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u8CA2\u737B\u6307\u5357");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u65B0\u589E\u96FB\u5F71");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u793E\u7FA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u6307\u5357");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u8A0E\u8AD6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownMenu", _r0);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__["NzDropDownDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_3__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["@charset \"UTF-8\";\n\n.web-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n}\n.nav-bar[_ngcontent-%COMP%] {\n  background-color: #b88e65;\n}\n.nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 50px;\n}\n.menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n.mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.laptop[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n.symbol[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background-color: white;\n  border-radius: 16px;\n}\n.symbol[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@media screen and (max-width: 576px) {\n  .mobile[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding: 0 8px;\n  }\n  .mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n  }\n\n  .laptop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .symbol[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  background-color: #555;\n  color: #fff;\n}\n.foot-nav[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  padding: 30px;\n}\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: white;\n}\nh5[_ngcontent-%COMP%] {\n  white-space: pre;\n  color: white;\n  font-weight: 600;\n}\n.hamburger[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2N1c3RvbS1kZXNpZ24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBRENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNFLHlCQ0ZjO0FESWhCO0FBREU7RUFDRSxxQkFBQTtBQUdKO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUVGO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUVGO0FBREU7RUFDRSxnQkFBQTtBQUdKO0FBQ0E7RUFDRSxhQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFERTtFQUNFLGlCQUFBO0FBR0o7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQUVGO0VBREU7SUFDRSxZQUFBO0VBR0o7O0VBQUE7SUFDRSx3QkFBQTtFQUdGOztFQURBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO0VBSUY7QUFDRjtBQURBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFHRjtBQUFBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0FBR0Y7QUFBQTtFQUNFLFlBQUE7QUFHRjtBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUFBO0VBQ0UsWUFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL2N1c3RvbS1kZXNpZ24uc2Nzc1wiO1xuLndlYi1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubWVudSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGkge1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gIH1cbn1cblxuLm1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYXB0b3AgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4uc3ltYm9sIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuICAubGFwdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN5bWJvbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290LW5hdiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5saSA+IGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmg1IHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGFtYnVyZ2VyIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCIvKiog5Z+656SO5Yqf6IO96Imy6Kit5a6aICovXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItZGFyazogcmdiYSgwLCAwLCAwLCAwLjgpO1xuJGNvbG9yLW9yYW5nZTogI2ZmOWYwMDtcbiRjb2xvci1ncmVlbjogIzRjYzc5MDtcbiRjb2xvci1yZWQ6ICNlZTExMTE7XG4vLyDkuLvopoHoibJcbiRwcmltYXJ5LWNvbG9yOiAjYjg4ZTY1O1xuLy8g5Li76KaB6Imy6K6K5b2iXG4kcHJpbWFyeS12YXJpYW50LWNvbG9yOiAjOTVhNzhkO1xuLy8g5qyh6KaB6ImyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZDFkMWMxO1xuLy8g5qyh6KaB6Imy6K6K5b2iXG4kc2Vjb25kYXJ5LXZhcmlhbnQtY29sb3I6ICNiZDg5N2U7XG4vLyDnrKzkuInoibJcbiR0aGlyZC1jb2xvcjogI2U0NTcyZTtcbi8vIOesrOS4ieiJsuiuiuW9olxuJHRoaXJkLXZhcmlhbnQtY29sb3I6ICNlZWQ3ZWQ7XG5cbi8vIOa3uueBsFxuJGNvbG9yLWxpZ2h0LWdyYXk6ICNmN2Y3Zjc7XG4kY29sb3ItZ3JheTogIzY2NjtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-list/homepage/movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_14__);

















Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_14___default.a);
const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["AccountBookOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["HeartFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["HeartOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["MenuOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__["CloseOutline"]];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["zh_TW"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"].forRoot(icons)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__["NzDropDownModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"].forRoot(icons)
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["zh_TW"] }],
                entryComponents: [_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _movie_list_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../movie-list/consts/global-constants.const */ "./src/app/movie-list/consts/global-constants.const.ts");
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
        if (method === "post" /* POST */) {
            return;
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].DEFAULT_IP + url + "?api_key=bc0a486e34f46f2e1df814d9d7d35008" /* KEY */, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
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
            case "get" /* GET */:
                return this.http.get(sendUrl, { params, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case "post" /* POST */:
                return this.http.post(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case "patch" /* PATCH */:
                return this.http.patch(sendUrl, params, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
            case "delete" /* DELETE */:
                return this.http.delete(sendUrl, { params, headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        }
    }
    requestPoster(posterPath, width = '200') {
        return this.http.get(`${_movie_list_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_4__["API_POSTER"].GET_POSTER}/w${width}/${posterPath}`);
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

/***/ "./src/app/movie-list/consts/device.const.ts":
/*!***************************************************!*\
  !*** ./src/app/movie-list/consts/device.const.ts ***!
  \***************************************************/
/*! exports provided: DEVICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE", function() { return DEVICE; });
const DEVICE = {
    PAD: 'PAD',
    MOBILE: 'MOBILE'
};


/***/ }),

/***/ "./src/app/movie-list/consts/global-constants.const.ts":
/*!*************************************************************!*\
  !*** ./src/app/movie-list/consts/global-constants.const.ts ***!
  \*************************************************************/
/*! exports provided: API_POSTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_POSTER", function() { return API_POSTER; });
var API_POSTER;
(function (API_POSTER) {
    API_POSTER["GET_POSTER"] = "https://image.tmdb.org/t/p/w200";
})(API_POSTER || (API_POSTER = {}));


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
/* harmony import */ var _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../consts/global-constants.const */ "./src/app/movie-list/consts/global-constants.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chinese_conv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chinese-conv */ "./node_modules/chinese-conv/dist/index.js");
/* harmony import */ var chinese_conv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chinese_conv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/detail.service */ "./src/app/movie-list/homepage/shared/detail.service.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");











function MovieDetailComponent_ng_container_0_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieDetailComponent_ng_container_0_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.addList(ctx_r4.displayList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u79FB\u51FA\u6E05\u55AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_ng_container_0_ng_template_39_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieDetailComponent_ng_container_0_ng_template_39_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.addList(ctx_r7.displayList); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u52A0\u5165\u6E05\u55AE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieDetailComponent_ng_container_0_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieDetailComponent_ng_container_0_ng_template_39_button_0_Template, 3, 0, "button", 17);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isInList);
} }
function MovieDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function MovieDetailComponent_ng_container_0_Template_img_error_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.imgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u985E\u578B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u4E0A\u6620\u65E5\u671F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u8A55\u5206:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u7247\u9577:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u96FB\u5F71\u4ECB\u7D39:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, MovieDetailComponent_ng_container_0_button_38_Template, 3, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, MovieDetailComponent_ng_container_0_ng_template_39_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.displayList.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.API_POSTER.GET_POSTER + ctx_r0.displayList.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getMovieGenres(ctx_r0.displayList.genres));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.displayList.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.displayList.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.displayList.runtime, "\u5206");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.displayList.overview ? ctx_r0.displayList.overview : "\u5C1A\u7121\u4ECB\u7D39", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isInList)("ngIfElse", _r2);
} }
class MovieDetailComponent {
    constructor(detailService, modalRef) {
        this.detailService = detailService;
        this.modalRef = modalRef;
        this.API_POSTER = _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API_POSTER"];
        this.isInList = false;
        this.listMap = [
            { header: '類型', key: 'genres' },
            { header: '上映日期', key: 'release_date' },
            { header: '評分', key: 'vote_average' },
            { header: '片長', key: 'runtime' },
        ];
    }
    ngOnInit() {
        this.movieId = this.info.id;
        if (this.callAgain) {
            this.getDetailById(this.movieId);
        }
        else {
            this.displayList = this.info;
            this.searchInList(this.movieId);
        }
    }
    getDetailById(id) {
        this.detailService.getMovieDetail(id).subscribe(res => {
            this.displayList = res;
        });
        this.searchInList(id);
    }
    /** click icon to addlist */
    addList(detail) {
        const { title, id } = detail;
        const sendData = { id, title };
        if (this.isInList) {
            this.detailService.removeList(id).subscribe((res) => {
                if (res.errors) {
                    return;
                }
                this.isInList = false;
            });
        }
        else {
            // 不在list，我們新增
            this.detailService.addtoList(sendData).subscribe((res) => {
                if (res.errors) {
                    return;
                }
                this.isInList = true;
            });
        }
    }
    /** 看電影是否已在清單裡 */
    searchInList(id) {
        this.detailService.readListById(id).subscribe(res => {
            // 回空值，代表不在名單
            this.isInList = res ? true : false;
        });
    }
    getMovieGenres(genres) {
        return genres.map(genre => Object(chinese_conv__WEBPACK_IMPORTED_MODULE_2__["tify"])(genre.name));
    }
    imgError(event) {
        event.target.src = 'assets/not-found.jpeg';
        event.target.style['object-fit'] = 'contain';
        event.target.style['width'] = '100%';
    }
}
MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) { return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"])); };
MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieDetailComponent, selectors: [["app-movie-detail"]], inputs: { info: "info", callAgain: "callAgain" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-center", "font-weight-bold", "mb-2"], [1, "row"], [1, "col-md-6", "col-12"], [1, "img-box", "mobile-center"], [3, "src", "error"], [1, "col-md-6", "col-12", "pt-3"], [1, "list-box"], [1, "header"], [1, "content"], [1, "col-12", "my-2"], [1, "col-12", "overview"], [1, "py-3"], ["nz-button", "", "nzType", "primary", "class", "d-flex align-items-center", 3, "click", 4, "ngIf", "ngIfElse"], ["noInList", ""], ["nz-button", "", "nzType", "primary", 1, "d-flex", "align-items-center", 3, "click"], ["nz-icon", "", "nzType", "heart", "nzTheme", "fill"], ["nz-button", "", "nzType", "primary", "class", "d-flex align-items-center", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "heart", "nzTheme", "outline"]], template: function MovieDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieDetailComponent_ng_container_0_Template, 41, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"]], styles: [".genre[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n  display: block;\n}\n\n.list-box[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.list-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  min-width: 40px;\n}\n\n.list-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.over-view[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbnJlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi5saXN0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5oZWFkZXJ7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICB9XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgfVxufVxuXG4ub3Zlci12aWV3e1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-movie-detail',
                templateUrl: './movie-detail.component.html',
                styleUrls: ['./movie-detail.component.scss']
            }]
    }], function () { return [{ type: _shared_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }]; }, { info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], callAgain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");



class DetailService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    /**
     * 取得電影明細
     */
    getMovieDetail(id) {
        return this.requestService.request("get" /* GET */, `${"/movie" /* GET_BY_ID */}/${id}`);
    }
    // DB start
    /**
     * 加入後端待播清單
     */
    addtoList(movie) {
        return this.requestService.dbRequest("post" /* POST */, "/watchlist" /* WATCHLIST */, movie);
    }
    /**
     * remove movie from list
     */
    removeList(id) {
        return this.requestService.dbRequest("delete" /* DELETE */, "/watchlist" /* WATCHLIST */ + '/' + id);
    }
    /**
     * 從DB拿單筆電影
     */
    readListById(id) {
        return this.requestService.dbRequest("get" /* GET */, "/watchlist" /* WATCHLIST */ + '/' + id);
    }
    /**
     * 修改電影內容
     * @id 電影編號
     * @patchData 資料
     */
    patchMovie(id, patchData) {
        return this.requestService.dbRequest("patch" /* PATCH */, "/watchlist" /* WATCHLIST */ + '/' + id, patchData);
    }
}
DetailService.ɵfac = function DetailService_Factory(t) { return new (t || DetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_1__["MovieRequestService"])); };
DetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailService, factory: DetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_1__["MovieRequestService"] }]; }, null); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["@charset \"UTF-8\";\n\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #eee;\n  stroke-width: 3.8;\n}\n.circle[_ngcontent-%COMP%] {\n  fill: #fff;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n.circular-chart.green[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #4cc790;\n}\n.circular-chart.red[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #ee1111;\n}\n.circular-chart.orange[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  stroke: #ff9f00;\n}\n.percentage[_ngcontent-%COMP%] {\n  fill: #666;\n  text-anchor: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGUtaWNvbi9yYXRlLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvY3VzdG9tLWRlc2lnbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FESUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLFVDVlk7RURXWixpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSx1QkFBQTtFQURGO0FBQ0Y7QUFLRTtFQUNFLGVBdkJXO0FBb0JmO0FBRUU7RUFDRSxlQXZCVztBQXdCZjtBQUZFO0VBQ0UsZUF2Qlc7QUE0QmY7QUFEQTtFQUNFLFVDVFc7RURVWCxtQkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JhdGUtaWNvbi9yYXRlLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9jdXN0b20tZGVzaWduLnNjc3MnO1xuXG4kc3Ryb2tlLWNvbG9yOiBcImdyZWVuXCIgJGNvbG9yLWdyZWVuLFwicmVkXCIgJGNvbG9yLXJlZCwgXCJvcmFuZ2VcIiAkY29sb3Itb3JhbmdlO1xuXG4uY2lyY2xlLWJnIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjZWVlO1xuICBzdHJva2Utd2lkdGg6IDMuODtcbn1cblxuLmNpcmNsZSB7XG4gIGZpbGw6ICRjb2xvci13aGl0ZTtcbiAgc3Ryb2tlLXdpZHRoOiAyLjg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwIDEwMDtcbiAgfVxufVxuXG5AZWFjaCAkc3Ryb2tlLCAkY29sb3IgaW4gJHN0cm9rZS1jb2xvciB7XG4gIC5jaXJjdWxhci1jaGFydC4jeyRzdHJva2V9IC5jaXJjbGV7XG4gICAgc3Ryb2tlOiRjb2xvcjtcbiAgfVxufVxuXG4ucGVyY2VudGFnZSB7XG4gIGZpbGw6ICRjb2xvci1ncmF5O1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiRjb2xvci1vcmFuZ2U6ICNmZjlmMDA7XG4kY29sb3ItZ3JlZW46ICM0Y2M3OTA7XG4kY29sb3ItcmVkOiAjZWUxMTExO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2I4OGU2NTtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzk1YTc4ZDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2QxZDFjMTtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjYmQ4OTdlO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICNlNDU3MmU7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNvbG9yLWdyYXk6ICM2NjY7XG4iXX0= */"] });
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
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__["NzTreeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabsModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__["NzFormModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_11__["NzDropDownModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__["NzTreeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_0__["RateIconComponent"]
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
                    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_12__["NzTreeModule"]
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
    constructor() {
        this.device = '';
    }
    set setUserDeviceSubject(value) {
        this.device = value;
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
    DB_IP: 'https://movieback.duckdns.org'
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