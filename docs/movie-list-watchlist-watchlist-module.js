(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-list-watchlist-watchlist-module"],{

/***/ "./src/app/core/services/watchlist.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/watchlist.service.ts ***!
  \****************************************************/
/*! exports provided: WatchlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistService", function() { return WatchlistService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var _movie_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-request.service */ "./src/app/core/services/movie-request.service.ts");





class WatchlistService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    /** 取得ＤＢ所有電影紀錄 */
    getWatchLists(endpoint) {
        return this.requestService.fbRequest(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET, endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => Object.values(res)));
    }
    /**
     * 從DB拿單筆電影
     */
    getWatchById(id) {
        return this.requestService.dbRequest(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET, src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].WATCHLIST + '/' + id);
    }
}
WatchlistService.ɵfac = function WatchlistService_Factory(t) { return new (t || WatchlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_movie_request_service__WEBPACK_IMPORTED_MODULE_3__["MovieRequestService"])); };
WatchlistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WatchlistService, factory: WatchlistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WatchlistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _movie_request_service__WEBPACK_IMPORTED_MODULE_3__["MovieRequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/content/comment/comment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/movie-list/watchlist/content/comment/comment.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums/list-type.enum */ "./src/app/core/enums/list-type.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_funcs_verify_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/funcs/verify-form */ "./src/app/core/funcs/verify-form.ts");
/* harmony import */ var src_app_movie_list_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/movie-list/homepage/shared/detail.service */ "./src/app/movie-list/homepage/shared/detail.service.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
















function CommentComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u78BA\u8A8D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentComponent_div_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.modalRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u53D6\u6D88 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CommentComponent {
    constructor(fb, detailService, modalRef) {
        this.fb = fb;
        this.detailService = detailService;
        this.modalRef = modalRef;
        this.EitherWatch = src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["EitherWatch"];
        this.validateForm = this.fb.group({
            watchedDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.detailService.readListById(this.movie.id, src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["ListType"].WATCHLIST).subscribe(res => {
            this.movieFb = res;
            if (this.type === src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_0__["EitherWatch"].BEENWATCHED) {
                this.validateForm.patchValue(res);
                this.validateForm.disable();
            }
        });
    }
    /**
     * 更新電影狀態
     * @id
     */
    submitForm() {
        if (Object(_core_funcs_verify_form__WEBPACK_IMPORTED_MODULE_3__["verifyForm"])(this.validateForm)) {
            return;
        }
        const value = this.validateForm.value;
        this.detailService.patchMovie(this.movie.id, Object.assign({ beenWatched: true }, value)).subscribe(() => this.modalRef.triggerOk());
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_movie_list_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { movie: "movie", type: "type" }, decls: 17, vars: 7, consts: [[1, "text-center"], ["nz-form", "", 1, "form", 3, "formGroup"], [1, "row"], [1, "col-12"], ["nzRequired", "", 3, "nzSpan"], ["nzErrorTip", "\u8ACB\u9078\u64C7\u89C0\u770B\u65E5\u671F!", 3, "nzSpan"], ["formControlName", "watchedDate", 2, "width", "100%", "max-width", "400px"], ["nzErrorTip", "\u5BEB\u4E9B\u5FC3\u5F97\u5427!", 3, "nzSpan"], ["rows", "4", "nz-input", "", "formControlName", "comment", 2, "width", "100%", "max-width", "400px"], ["class", "text-center", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 3, "click"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u89C0\u5F71\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nz-date-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u89C0\u5F71\u5FC3\u5F97");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CommentComponent_div_16_Template, 5, 0, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type === ctx.EitherWatch.NOTWATCHED);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormControlComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3Qvd2F0Y2hsaXN0L2NvbnRlbnQvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_movie_list_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetailService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalRef"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/content/either-watch/either-watch.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/movie-list/watchlist/content/either-watch/either-watch.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EitherWatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EitherWatchComponent", function() { return EitherWatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/enums/list-type.enum */ "./src/app/core/enums/list-type.enum.ts");
/* harmony import */ var src_app_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/watchlist.service */ "./src/app/core/services/watchlist.service.ts");
/* harmony import */ var src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-info/movie-info.component */ "./src/app/movie-list/watchlist/content/either-watch/movie-info/movie-info.component.ts");











function EitherWatchComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-movie-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refreshList", function EitherWatchComponent_ng_container_3_ng_container_2_Template_app_movie_info_refreshList_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.refreshList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r4)("type", ctx_r3.type);
} }
function EitherWatchComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EitherWatchComponent_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayList);
} }
function EitherWatchComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u67E5\u7121\u8CC7\u6599");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EitherWatchComponent {
    constructor(watchlistService, mvReqSvc, route) {
        this.watchlistService = watchlistService;
        this.mvReqSvc = mvReqSvc;
        this.route = route;
        this.API_POSTER = src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__["API_POSTER"];
        this.displayList = [];
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(res => {
            this.endpoint = res.endpoint;
            this.name = res.name;
            this.type = +res.type; // 要把query param轉回數字
            this.displayList = [];
            this.getWatchList();
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.unsubscribe();
    }
    getWatchList() {
        this.watchlistService.getWatchLists(this.endpoint).subscribe(res => {
            let seachMovies = [];
            if (+this.type === src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_4__["EitherWatch"].BEENWATCHED) {
                seachMovies = res.filter(m => m.beenWatched);
            }
            else {
                seachMovies = res.filter(m => !m.beenWatched);
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(seachMovies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((mv) => this.searchMovieById(mv.id))).subscribe(list => {
                this.displayList.push(list);
            });
        });
    }
    /**
     * 用ID 摳詳細資訊
     */
    searchMovieById(id) {
        return this.mvReqSvc.request(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__["API"].GET, `${src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__["API"].MOVIE}/${id}`);
    }
    /**
     * 新增 or 查看評語
     */
    // onPositiveClick(movie: IWatchedMovie, type: string): void {
    //   this.modalService.create({
    //     nzContent: CommentComponent,
    //     nzComponentParams: { movie, type },
    //     nzFooter: null,
    //     nzBodyStyle: { padding: '24px' },
    //     nzOnOk: () => {
    //       this.getWatchList();
    //     }
    //   });
    // }
    refreshList() {
        this.displayList = [];
        this.getWatchList();
    }
}
EitherWatchComponent.ɵfac = function EitherWatchComponent_Factory(t) { return new (t || EitherWatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__["WatchlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_6__["MovieRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
EitherWatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EitherWatchComponent, selectors: [["app-either-watch"]], decls: 6, vars: 3, consts: [[1, "card-container", "container-xl"], [1, "font-weight-bold", "subject"], [4, "ngIf", "ngIfElse"], ["noData", ""], [1, "row", "list-box", "no-gutters"], [4, "ngFor", "ngForOf"], [1, "col-10", "my-3"], [3, "movie", "type", "refreshList"], [1, "text-center", "py-3"]], template: function EitherWatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EitherWatchComponent_ng_container_3_Template, 3, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EitherWatchComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayList.length !== 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_9__["MovieInfoComponent"]], styles: [".subject[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n  margin-bottom: 0;\n}\n\n.list-box[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC93YXRjaGxpc3QvY29udGVudC9laXRoZXItd2F0Y2gvZWl0aGVyLXdhdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtbGlzdC93YXRjaGxpc3QvY29udGVudC9laXRoZXItd2F0Y2gvZWl0aGVyLXdhdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3R7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtYm94IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EitherWatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-either-watch',
                templateUrl: './either-watch.component.html',
                styleUrls: ['./either-watch.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_5__["WatchlistService"] }, { type: src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_6__["MovieRequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/content/either-watch/movie-info/movie-info.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/movie-list/watchlist/content/either-watch/movie-info/movie-info.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MovieInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieInfoComponent", function() { return MovieInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums/list-type.enum */ "./src/app/core/enums/list-type.enum.ts");
/* harmony import */ var src_app_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/movie-list/homepage/movie-detail/movie-detail.component */ "./src/app/movie-list/homepage/movie-detail/movie-detail.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../comment/comment.component */ "./src/app/movie-list/watchlist/content/comment/comment.component.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var src_app_movie_list_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/movie-list/homepage/shared/detail.service */ "./src/app/movie-list/homepage/shared/detail.service.ts");
/* harmony import */ var _core_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../core/services/message.service */ "./src/app/core/services/message.service.ts");
/* harmony import */ var _shared_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/rate-icon/rate-icon.component */ "./src/app/shared/rate-icon/rate-icon.component.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















const _c0 = function (a0) { return { "add-favorite": a0 }; };
class MovieInfoComponent {
    constructor(modalSvc, detailSvc, msgSvc) {
        this.modalSvc = modalSvc;
        this.detailSvc = detailSvc;
        this.msgSvc = msgSvc;
        this.refreshList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 海報網址
        this.API_POSTER = src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_1__["API_POSTER"];
        this.inFavorite = false;
    }
    ngOnInit() {
        this.detailSvc.readListById(this.movie.id, src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].FAVORITE).subscribe(res => this.inFavorite = !!res);
    }
    /**
     * 跳出顯示電影詳情視窗
     *
     */
    onWatchDetail(info) {
        this.modalSvc.create({
            nzContent: src_app_movie_list_homepage_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"],
            nzComponentParams: {
                info
            },
            nzFooter: null,
            nzBodyStyle: { padding: '24px' },
        });
    }
    imgError(event) {
        event.target.src = 'assets/not-found.jpeg';
        event.target.style['object-fit'] = 'contain';
    }
    /**
     * 新增 or 查看評語
     */
    onPositiveClick(movie, type) {
        this.modalSvc.create({
            nzContent: _comment_comment_component__WEBPACK_IMPORTED_MODULE_4__["CommentComponent"],
            nzComponentParams: { movie, type },
            nzFooter: null,
            nzBodyStyle: { padding: '24px' },
            nzOnOk: () => {
                this.refreshList.emit();
            }
        });
    }
    /**
     * 加到最愛
     */
    handleAdd() {
        const sendData = {
            title: this.movie.title,
            addTime: new Date().valueOf(),
            beenWatched: false,
            id: this.movie.id
        };
        if (this.inFavorite) {
            this.detailSvc.removeList(this.movie.id, src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].FAVORITE).subscribe(res => {
                this.inFavorite = false;
                this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
            });
        }
        else {
            this.detailSvc.addtoList(this.movie.id, src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].FAVORITE, sendData).subscribe(res => {
                this.inFavorite = true;
                this.msgSvc.handleAddAction('我的最愛', this.inFavorite);
            });
        }
    }
    removeFromList(movie) {
        this.detailSvc.removeList(movie.id, src_app_core_enums_list_type_enum__WEBPACK_IMPORTED_MODULE_2__["ListType"].WATCHLIST).subscribe(() => {
            this.msgSvc.handleAddAction('我的最愛', false);
            this.refreshList.emit();
        });
    }
}
MovieInfoComponent.ɵfac = function MovieInfoComponent_Factory(t) { return new (t || MovieInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_movie_list_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_6__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"])); };
MovieInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieInfoComponent, selectors: [["app-movie-info"]], inputs: { movie: "movie", type: "type" }, outputs: { refreshList: "refreshList" }, decls: 43, vars: 9, consts: [[1, "card-box"], [1, "d-flex", "h-100"], [1, "img-box"], ["alt", "", 3, "src", "error"], [1, "overview-box", "p-3"], [1, "row", "align-items-center"], [1, "col-auto"], [1, "rate-box"], [3, "rate"], [1, "col", "pl-0"], [1, "mb-2", "fc-light"], [1, "overview"], ["overview", ""], [1, "btn-groups"], [1, "d-flex", "mb-0", "mt-3"], [3, "click"], ["nz-button", "", "nzType", "primary", "nzShape", "circle"], ["nz-icon", "", "nzType", "comment", "nzTheme", "outline"], [1, "d-none", "d-md-inline"], ["nz-icon", "", "nzType", "heart", 3, "nzTheme", "ngClass"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"]], template: function MovieInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function MovieInfoComponent_Template_img_error_3_listener($event) { return ctx.imgError($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieInfoComponent_Template_a_click_20_listener() { return ctx.onPositiveClick(ctx.movie, ctx.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u6211\u7684\u8A55\u8AD6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieInfoComponent_Template_a_click_26_listener() { return ctx.handleAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u6211\u7684\u6700\u611B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u65B0\u7A31\u81F3\u6E05\u55AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieInfoComponent_Template_a_click_38_listener() { return ctx.removeFromList(ctx.movie); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u79FB\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTheme", ctx.inFavorite ? "fill" : "outline")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.inFavorite));
    } }, directives: [_shared_rate_icon_rate_icon_component__WEBPACK_IMPORTED_MODULE_8__["RateIconComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]], styles: [".card-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 180px;\n  border: 1px solid #aaa;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.img-box[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 93px;\n  min-width: 93px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.overview-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.overview[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 0;\n}\n\n@media screen and (min-width: 576px) {\n  li[_ngcontent-%COMP%] {\n    padding: 0 7px;\n  }\n}\n\nli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC93YXRjaGxpc3QvY29udGVudC9laXRoZXItd2F0Y2gvbW92aWUtaW5mby9tb3ZpZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUVFO0VBSEY7SUFJSSxjQUFBO0VBQ0Y7QUFDRjs7QUFBRTtFQUNFLGlCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1saXN0L3dhdGNobGlzdC9jb250ZW50L2VpdGhlci13YXRjaC9tb3ZpZS1pbmZvL21vdmllLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib3gge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTAlKTtcbn1cblxuLmltZy1ib3gge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogOTNweDtcbiAgbWluLXdpZHRoOiA5M3B4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm92ZXJ2aWV3LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm92ZXJ2aWV3IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbn1cblxuXG5cbmxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIHBhZGRpbmc6IDAgN3B4O1xuICB9XG4gIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-info',
                templateUrl: './movie-info.component.html',
                styleUrls: ['./movie-info.component.scss']
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }, { type: src_app_movie_list_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_6__["DetailService"] }, { type: _core_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], refreshList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/content/favorite-list/favorite-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/movie-list/watchlist/content/favorite-list/favorite-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FavoriteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListComponent", function() { return FavoriteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var src_app_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/watchlist.service */ "./src/app/core/services/watchlist.service.ts");
/* harmony import */ var src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/movie-card/movie-card.component */ "./src/app/shared/components/movie-card/movie-card.component.ts");










function FavoriteListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-movie-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refreshList", function FavoriteListComponent_ng_container_4_Template_app_movie_card_refreshList_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getWatchList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movie", movie_r2);
} }
function FavoriteListComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class FavoriteListComponent {
    constructor(watchlistSvc, mvReqSvc, route) {
        this.watchlistSvc = watchlistSvc;
        this.mvReqSvc = mvReqSvc;
        this.route = route;
        this.displayList = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(res => {
            this.endpoint = res.endpoint;
            this.customId = res.id;
            if (this.customId) {
                this.requestUrl = `${res.endpoint}/${res.id}`;
            }
            else {
                this.requestUrl = res.endpoint;
            }
            this.getWatchList();
        });
    }
    getWatchList() {
        this.displayList = [];
        this.watchlistSvc.getWatchLists(this.requestUrl).subscribe(res => {
            // 客制清單
            if (this.customId) {
                this.title = res[3];
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(res[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((id) => this.searchMovieById(id))).subscribe(list => {
                    this.displayList.push(list);
                });
            }
            else {
                this.title = '我的最愛';
                // my favorite
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((mv) => this.searchMovieById(mv.id))).subscribe(list => {
                    this.displayList.push(list);
                });
            }
        });
    }
    /**
     * 用ID 摳詳細資訊
     */
    searchMovieById(id) {
        return this.mvReqSvc.request(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__["API"].GET, `${src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_3__["API"].MOVIE}/${id}`);
    }
}
FavoriteListComponent.ɵfac = function FavoriteListComponent_Factory(t) { return new (t || FavoriteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_4__["WatchlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__["MovieRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
FavoriteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteListComponent, selectors: [["app-favorite-list"]], decls: 6, vars: 3, consts: [[1, "container-xl"], [1, "font-weight-bold", "subject"], [1, "row", "justify-evenly", "no-gutters"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-10", "my-3", "col-lg-5"], [3, "movie", "refreshList"], [1, "col-10", "col-sm-5", 2, "opacity", "0"]], template: function FavoriteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoriteListComponent_ng_container_4_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavoriteListComponent_ng_container_5_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayList.length % 2 === 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_8__["MovieCardComponent"]], styles: [".subject[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 12px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC93YXRjaGxpc3QvY29udGVudC9mYXZvcml0ZS1saXN0L2Zhdm9yaXRlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3Qvd2F0Y2hsaXN0L2NvbnRlbnQvZmF2b3JpdGUtbGlzdC9mYXZvcml0ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorite-list',
                templateUrl: './favorite-list.component.html',
                styleUrls: ['./favorite-list.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_4__["WatchlistService"] }, { type: src_app_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__["MovieRequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/watchlist-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/movie-list/watchlist/watchlist-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: WatchlistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistRoutingModule", function() { return WatchlistRoutingModule; });
/* harmony import */ var _content_favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/favorite-list/favorite-list.component */ "./src/app/movie-list/watchlist/content/favorite-list/favorite-list.component.ts");
/* harmony import */ var _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/consts/routing-path.const */ "./src/app/core/consts/routing-path.const.ts");
/* harmony import */ var _content_either_watch_either_watch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/either-watch/either-watch.component */ "./src/app/movie-list/watchlist/content/either-watch/either-watch.component.ts");
/* harmony import */ var _watchlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watchlist.component */ "./src/app/movie-list/watchlist/watchlist.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








const routes = [
    { path: _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].EITHER_WATCH, component: _content_either_watch_either_watch_component__WEBPACK_IMPORTED_MODULE_2__["EitherWatchComponent"] },
    { path: _core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].FAVORITE_LIST, component: _content_favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteListComponent"] },
    { path: '', component: _watchlist_component__WEBPACK_IMPORTED_MODULE_3__["WatchlistComponent"] },
];
class WatchlistRoutingModule {
}
WatchlistRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WatchlistRoutingModule });
WatchlistRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function WatchlistRoutingModule_Factory(t) { return new (t || WatchlistRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WatchlistRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](WatchlistRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/watchlist.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/movie-list/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WatchlistComponent {
    constructor() { }
    ngOnInit() {
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 1, vars: 0, template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@charset \"UTF-8\";\n\n.list-box[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2N1c3RvbS1kZXNpZ24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBREVBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3Qvd2F0Y2hsaXN0L3dhdGNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jdXN0b20tZGVzaWduLnNjc3NcIjtcblxuLmxpc3QtYm94IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi8vIC50aXRsZSB7XG4vLyAgIHBhZGRpbmc6IDRweCAxMnB4O1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyB9XG4vLyAudGl0bGU6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuLy8gfVxuXG4vLyAuY2xvc2Uge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB0b3A6IDA7XG4vLyAgIHBhZGRpbmc6IDBweCAxMnB4O1xuLy8gfVxuXG4vLyB0YWIgc3RhcnRcbi8vIDpob3N0IHtcbi8vICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgcGFkZGluZzogMjRweDtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIC5jYXJkLWNvbnRhaW5lciA6Om5nLWRlZXAgcCB7XG4vLyAgIG1hcmdpbjogMDtcbi8vIH1cbi8vIC5jYXJkLWNvbnRhaW5lciA6Om5nLWRlZXAgPiAuYW50LXRhYnMtY2FyZCAuYW50LXRhYnMtY29udGVudCB7XG4vLyAgIG1hcmdpbi10b3A6IC0xNnB4O1xuLy8gfVxuLy8gLmNhcmQtY29udGFpbmVyIDo6bmctZGVlcCA+IC5hbnQtdGFicy1jYXJkIC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUge1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICBwYWRkaW5nOiAxNnB4O1xuLy8gfVxuLy8gLmNhcmQtY29udGFpbmVyIDo6bmctZGVlcCA+IC5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLW5hdjo6YmVmb3JlIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cbi8vIC5jYXJkLWNvbnRhaW5lciA6Om5nLWRlZXAgPiAuYW50LXRhYnMtY2FyZCAuYW50LXRhYnMtdGFiIHtcbi8vICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyB9XG4vLyAuY2FyZC1jb250YWluZXIgOjpuZy1kZWVwID4gLmFudC10YWJzLWNhcmQgLmFudC10YWJzLXRhYi1hY3RpdmUge1xuLy8gICBib3JkZXItY29sb3I6ICNmZmY7XG4vLyAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyB9XG5cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4kY29sb3Itb3JhbmdlOiAjZmY5ZjAwO1xuJGNvbG9yLWdyZWVuOiAjNGNjNzkwO1xuJGNvbG9yLXJlZDogI2VlMTExMTtcbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNiODhlNjU7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICM5NWE3OGQ7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICNkMWQxYzE7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2JkODk3ZTtcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjZTQ1NzJlO1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2VlZDdlZDtcblxuLy8g5re654GwXG4kY29sb3ItbGlnaHQtZ3JheTogI2Y3ZjdmNztcbiRjb2xvci1ncmF5OiAjNjY2O1xuXG4vLyBpY29uIHN0YXJ0XG4kY29sb3ItZmF2b3JpdGU6cmdiKDIyMSw4NiwxNzgpO1xuJGNvbG9yLXdhdGNobGlzdDpyZ2IoMTg5LDYyLDU3KTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watchlist',
                templateUrl: './watchlist.component.html',
                styleUrls: ['./watchlist.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/watchlist.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-list/watchlist/watchlist.module.ts ***!
  \**********************************************************/
/*! exports provided: WatchlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistModule", function() { return WatchlistModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _watchlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchlist.component */ "./src/app/movie-list/watchlist/watchlist.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./watchlist-routing.module */ "./src/app/movie-list/watchlist/watchlist-routing.module.ts");
/* harmony import */ var _content_comment_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/comment/comment.component */ "./src/app/movie-list/watchlist/content/comment/comment.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _content_either_watch_either_watch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/either-watch/either-watch.component */ "./src/app/movie-list/watchlist/content/either-watch/either-watch.component.ts");
/* harmony import */ var _content_either_watch_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/either-watch/movie-info/movie-info.component */ "./src/app/movie-list/watchlist/content/either-watch/movie-info/movie-info.component.ts");
/* harmony import */ var _content_favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/favorite-list/favorite-list.component */ "./src/app/movie-list/watchlist/content/favorite-list/favorite-list.component.ts");











class WatchlistModule {
}
WatchlistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WatchlistModule });
WatchlistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WatchlistModule_Factory(t) { return new (t || WatchlistModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_4__["WatchlistRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WatchlistModule, { declarations: [_watchlist_component__WEBPACK_IMPORTED_MODULE_1__["WatchlistComponent"],
        _content_comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"],
        _content_either_watch_either_watch_component__WEBPACK_IMPORTED_MODULE_7__["EitherWatchComponent"],
        _content_either_watch_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_8__["MovieInfoComponent"],
        _content_favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_9__["FavoriteListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_4__["WatchlistRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WatchlistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _watchlist_component__WEBPACK_IMPORTED_MODULE_1__["WatchlistComponent"],
                    _content_comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"],
                    _content_either_watch_either_watch_component__WEBPACK_IMPORTED_MODULE_7__["EitherWatchComponent"],
                    _content_either_watch_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_8__["MovieInfoComponent"],
                    _content_favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_9__["FavoriteListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_4__["WatchlistRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=movie-list-watchlist-watchlist-module.js.map