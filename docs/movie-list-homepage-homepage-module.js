(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-list-homepage-homepage-module"],{

/***/ "./src/app/core/pipes/genre.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/core/pipes/genre.pipe.ts ***!
  \******************************************/
/*! exports provided: GenrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenrePipe", function() { return GenrePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GenrePipe {
    constructor() {
        this.genreLists = JSON.parse(sessionStorage.getItem('genres'));
    }
    transform(genresNum, ...args) {
        const genreTypes = this.genreLists.filter(genre => genresNum.includes(genre.id));
        return genreTypes.map(genre => genre.name);
    }
}
GenrePipe.ɵfac = function GenrePipe_Factory(t) { return new (t || GenrePipe)(); };
GenrePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "genre", type: GenrePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenrePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'genre'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipes/sanitize-url.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/core/pipes/sanitize-url.pipe.ts ***!
  \*************************************************/
/*! exports provided: SanitizeURLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeURLPipe", function() { return SanitizeURLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SanitizeURLPipe {
    constructor(sanitize) {
        this.sanitize = sanitize;
    }
    transform(url, args) {
        return this.sanitize.bypassSecurityTrustUrl(`${url}`);
    }
}
SanitizeURLPipe.ɵfac = function SanitizeURLPipe_Factory(t) { return new (t || SanitizeURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SanitizeURLPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sanitizeURL", type: SanitizeURLPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanitizeURLPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sanitizeURL'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pipes/text-ellipsis.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/core/pipes/text-ellipsis.pipe.ts ***!
  \**************************************************/
/*! exports provided: TextEllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEllipsisPipe", function() { return TextEllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TextEllipsisPipe {
    transform(value, length) {
        const ellipsisLength = length || 200;
        if (value.length > ellipsisLength) {
            return value.substring(0, ellipsisLength - 1) + '...';
        }
        return value;
    }
}
TextEllipsisPipe.ɵfac = function TextEllipsisPipe_Factory(t) { return new (t || TextEllipsisPipe)(); };
TextEllipsisPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "textEllipsis", type: TextEllipsisPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextEllipsisPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'textEllipsis'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/model/page.ts":
/*!*******************************!*\
  !*** ./src/app/model/page.ts ***!
  \*******************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
class Page {
    constructor(paging = 1, length = 10) {
        this.paging = paging;
        this.total_results = length;
    }
}


/***/ }),

/***/ "./src/app/movie-list/homepage/carousel/carousel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/movie-list/homepage/carousel/carousel.component.ts ***!
  \********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts/global-constants.const */ "./src/app/movie-list/consts/global-constants.const.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-responsive-carousel */ "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
/* harmony import */ var _shared_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/rate-icon/rate-icon.component */ "./src/app/shared/rate-icon/rate-icon.component.ts");










function CarouselComponent_carousel_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_carousel_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const movie_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onWatchDetail(movie_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-rate-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.API_POSTER.GET_POSTER + movie_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", movie_r5.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r5.title);
} }
function CarouselComponent_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_carousel_2_div_1_Template, 8, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieList_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 300)("cellWidth", 150)("cellsToScroll", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", movieList_r3);
} }
function CarouselComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Loading");
} }
class CarouselComponent {
    constructor(dialog, movieRequestService) {
        this.dialog = dialog;
        this.movieRequestService = movieRequestService;
        this.API_POSTER = _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_1__["API_POSTER"];
    }
    ngOnInit() {
        this.movieList$ = this.movieRequestService.request("get" /* GET */, `/movie/${this.searchApi}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => [...res.results]));
    }
    /**
     * 跳出顯示電影詳情視窗
     * 資料不完全所以movieDetail要再用id call一次
     */
    onWatchDetail(info) {
        const dialogRef = this.dialog.open(_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_2__["MovieDetailComponent"], {
            width: '500px', data: { info, callAgain: true }
        });
        dialogRef.afterClosed().subscribe(res => console.log('this diaglo was closed' + res));
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__["MovieRequestService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { searchTitle: "searchTitle", searchApi: "searchApi" }, decls: 6, vars: 5, consts: [[3, "height", "cellWidth", "cellsToScroll", 4, "ngIf", "ngIfElse"], ["Loading", ""], [3, "height", "cellWidth", "cellsToScroll"], ["class", "carousel-cell", 3, "click", 4, "ngFor", "ngForOf"], [1, "carousel-cell", 3, "click"], [1, "img-box"], ["alt", "", 3, "src"], [1, "info-box", "position-relative"], [1, "rate-box"], [3, "rate"], [1, "pt-3", "font-weight-bold"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_carousel_2_Template, 2, 4, "carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.movieList$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_8__["RateIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["carousel[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n\n.img-box[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n.rate-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhcm91c2VsIHtcbiAgei1pbmRleDogMztcbn1cblxuLmltZy1ib3gge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbmltZ3tcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucmF0ZS1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__["MovieRequestService"] }]; }, { searchTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchApi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/homepage-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/movie-list/homepage/homepage-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/movie-list/homepage/search-result/search-result.component.ts");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component */ "./src/app/movie-list/homepage/homepage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






const routes = [
    { path: '', component: _homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'search', component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_0__["SearchResultComponent"] }
];
class HomepageRoutingModule {
}
HomepageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomepageRoutingModule });
HomepageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function HomepageRoutingModule_Factory(t) { return new (t || HomepageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomepageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HomepageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movie-list/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/movie-list/homepage/carousel/carousel.component.ts");








class HomepageComponent {
    constructor(movieRequestService, router) {
        this.movieRequestService = movieRequestService;
        this.router = router;
        this.searchText = '';
    }
    ngOnInit() {
        this.getGenreList();
    }
    getGenreList() {
        this.movieRequestService.request("get" /* GET */, "/genre/movie/list" /* GENRE_LIST */).subscribe(res => {
            sessionStorage.setItem('genres', JSON.stringify([...res.genres]));
        });
    }
    searchMovie() {
        if (!this.searchText) {
            return;
        }
        this.router.navigate(['home', 'search'], { state: { query: this.searchText } });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_1__["MovieRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 15, vars: 9, consts: [[1, "container-xl"], [1, "search-box"], [1, "title"], [1, "search", "text-center"], ["matInput", "", "placeholder", "Search for a movie...", 1, "mr-1", "input", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "search-btn", 3, "click"], [3, "searchTitle", "searchApi"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Millions of movies, TV shows and people to discover. Explore now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomepageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_9_listener() { return ctx.searchMovie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchTitle", "Latest")("searchApi", "now_playing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchTitle", "Hottest")("searchApi", "top_rated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchTitle", "Popular")("searchApi", "popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchTitle", "Upcoming")("searchApi", "upcoming");
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"]], styles: ["@charset \"UTF-8\";\n\n.search-box[_ngcontent-%COMP%] {\n  background-color: #d7d0c8;\n}\n.title[_ngcontent-%COMP%] {\n  padding: 30px 40px;\n}\n.search[_ngcontent-%COMP%] {\n  padding: 0 30px 40px;\n  width: 100%;\n  position: relative;\n}\n.input[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 100%;\n  border-radius: 36px;\n  border: none;\n  padding: 0 20px;\n  margin: 0;\n}\n.search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 30px;\n  border-radius: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9jdXN0b20tZGVzaWduLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QURFQTtFQUNFLHlCQ0ljO0FESGhCO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jdXN0b20tZGVzaWduLnNjc3NcIjtcblxuLnNlYXJjaC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbn1cblxuLnRpdGxlIHtcbiAgcGFkZGluZzogMzBweCA0MHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgcGFkZGluZzogMCAzMHB4IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dCB7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xufVxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiRjb2xvci1vcmFuZ2U6ICNmZjlmMDA7XG4kY29sb3ItZ3JlZW46ICM0Y2M3OTA7XG4kY29sb3ItcmVkOiAjZWUxMTExO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2Q3ZDBjODtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzk1YTc4ZDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2M4YzZhZjtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjYmQ4OTdlO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICNlNDU3MmU7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNvbG9yLWdyYXk6ICM2NjY7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_1__["MovieRequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/homepage.module.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-list/homepage/homepage.module.ts ***!
  \********************************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var _core_pipes_text_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/pipes/text-ellipsis.pipe */ "./src/app/core/pipes/text-ellipsis.pipe.ts");
/* harmony import */ var _core_pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/pipes/genre.pipe */ "./src/app/core/pipes/genre.pipe.ts");
/* harmony import */ var _core_pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/pipes/sanitize-url.pipe */ "./src/app/core/pipes/sanitize-url.pipe.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage.component */ "./src/app/movie-list/homepage/homepage.component.ts");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage-routing.module */ "./src/app/movie-list/homepage/homepage-routing.module.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/movie-list/homepage/carousel/carousel.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/movie-list/homepage/search-result/search-result.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













class HomepageModule {
}
HomepageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomepageModule });
HomepageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function HomepageModule_Factory(t) { return new (t || HomepageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomepageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomepageModule, { declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
        _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailComponent"],
        _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultComponent"],
        _core_pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SanitizeURLPipe"],
        _core_pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_1__["GenrePipe"],
        _core_pipes_text_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_0__["TextEllipsisPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomepageRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HomepageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                    _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
                    _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailComponent"],
                    _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultComponent"],
                    _core_pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_2__["SanitizeURLPipe"],
                    _core_pipes_genre_pipe__WEBPACK_IMPORTED_MODULE_1__["GenrePipe"],
                    _core_pipes_text_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_0__["TextEllipsisPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _homepage_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomepageRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movie-list/homepage/search-result/search-result.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/movie-list/homepage/search-result/search-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../consts/global-constants.const */ "./src/app/movie-list/consts/global-constants.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/page */ "./src/app/model/page.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");










function SearchResultComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchResultComponent_ng_container_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const movie_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onWatchDetail(movie_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function SearchResultComponent_ng_container_0_Template_img_error_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.imgError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.API_POSTER.GET_POSTER + movie_r1.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r1.release_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", movie_r1.overview ? movie_r1.overview : "\u5C1A\u7121\u4ECB\u7D39", " ");
} }
class SearchResultComponent {
    constructor(dialog, router, movieRequestService) {
        this.dialog = dialog;
        this.router = router;
        this.movieRequestService = movieRequestService;
        // 海報網址
        this.API_POSTER = _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_0__["API_POSTER"];
        this.displayList = [];
        this.page = new _model_page__WEBPACK_IMPORTED_MODULE_2__["Page"]();
    }
    ngOnInit() {
        this.query = history.state.query;
        if (!this.query) {
            this.router.navigateByUrl('/');
        }
        this.searchQuery();
    }
    ngAfterViewInit() {
    }
    /**
     * 針對字串搜尋符合電影列表
     */
    searchQuery() {
        const sendData = { query: this.query, page: this.page.paging };
        console.log(this.query);
        this.movieRequestService.request("get" /* GET */, "/search/movie" /* SEARCH_MOVIE */, sendData).subscribe((res) => {
            const details = res.results;
            this.page.total_results = res.total_results;
            this.displayList = [];
            details.forEach(movie => {
                this.searchMovieById(movie);
            });
        });
    }
    /**
     * 用ID 摳詳細資訊
     */
    searchMovieById(movie) {
        this.movieRequestService.request("get" /* GET */, `${"/movie" /* MOVIE */}/${movie.id}`, { language: 'en-US' }).subscribe(detail => {
            this.displayList.push(detail);
        }, err => console.log('err:', err));
    }
    changePage(pageEvent) {
        this.page.paging = pageEvent.pageIndex;
        this.searchQuery();
        window.scrollTo({ top: 0 }); // 回到上層
    }
    /**
     * 跳出顯示電影詳情視窗
     *
     */
    onWatchDetail(info) {
        const dialogRef = this.dialog.open(_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"], {
            width: '500px', data: { info, callAgain: false }
        });
        dialogRef.afterClosed().subscribe(res => console.log('this diaglo was closed' + res));
    }
    imgError(event) {
        event.target.src = 'assets/not-found.jpeg';
        event.target.style.height = '180px';
    }
}
SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) { return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_6__["MovieRequestService"])); };
SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchResultComponent, selectors: [["app-search-result"]], decls: 2, vars: 4, consts: [[4, "ngFor", "ngForOf"], [1, "test", 3, "length", "pageIndex", "pageSize", "page"], [1, "card-box", 3, "click"], [1, "row", "no-gutters"], [1, "col-4"], [1, "img-box", "mx-auto"], ["alt", "", 3, "src", "error"], [1, "col-8", "overview-box", "p-2"], [1, "mb-2"], [1, "overview"], ["overview", ""]], template: function SearchResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchResultComponent_ng_container_0_Template, 14, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-paginator", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function SearchResultComponent_Template_mat_paginator_page_1_listener($event) { return ctx.changePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.page.total_results)("pageIndex", ctx.page.paging - 1)("pageSize", 20);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]], styles: ["@charset \"UTF-8\";\n\n.card-box[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 16px auto;\n  height: 200px;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  border-radius: 8px;\n}\nimg[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  object-fit: contain;\n}\n.overview-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 200px;\n}\n.overview[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9ob21lcGFnZS9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvY3VzdG9tLWRlc2lnbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixhQUFBO0FERUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3QvaG9tZXBhZ2Uvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2N1c3RvbS1kZXNpZ24uc2Nzc1wiO1xuXG4uY2FyZC1ib3gge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOjFweCBzb2xpZCAkY29sb3ItZGFyaztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5cblxuaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5vdmVydmlldy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDIwMHB4OyAvLyBoYXMgdG8gc2FtZSBhcyAuY2FyZC1ib3ggaGVpZ2h0XG59XG5cbi5vdmVydmlld3tcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbn1cblxuIiwiLyoqIOWfuuekjuWKn+iDveiJsuioreWumiAqL1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiRjb2xvci1vcmFuZ2U6ICNmZjlmMDA7XG4kY29sb3ItZ3JlZW46ICM0Y2M3OTA7XG4kY29sb3ItcmVkOiAjZWUxMTExO1xuLy8g5Li76KaB6ImyXG4kcHJpbWFyeS1jb2xvcjogI2Q3ZDBjODtcbi8vIOS4u+imgeiJsuiuiuW9olxuJHByaW1hcnktdmFyaWFudC1jb2xvcjogIzk1YTc4ZDtcbi8vIOasoeimgeiJslxuJHNlY29uZGFyeS1jb2xvcjogI2M4YzZhZjtcbi8vIOasoeimgeiJsuiuiuW9olxuJHNlY29uZGFyeS12YXJpYW50LWNvbG9yOiAjYmQ4OTdlO1xuLy8g56ys5LiJ6ImyXG4kdGhpcmQtY29sb3I6ICNlNDU3MmU7XG4vLyDnrKzkuInoibLororlvaJcbiR0aGlyZC12YXJpYW50LWNvbG9yOiAjZWVkN2VkO1xuXG4vLyDmt7rngbBcbiRjb2xvci1saWdodC1ncmF5OiAjZjdmN2Y3O1xuJGNvbG9yLWdyYXk6ICM2NjY7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search-result',
                templateUrl: './search-result.component.html',
                styleUrls: ['./search-result.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_6__["MovieRequestService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=movie-list-homepage-homepage-module.js.map