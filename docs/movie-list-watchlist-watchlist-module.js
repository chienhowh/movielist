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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _movie_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-request.service */ "./src/app/core/services/movie-request.service.ts");



class WatchlistService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    /** 取得ＤＢ所有電影紀錄 */
    getWatchLists() {
        return this.requestService.dbRequest("get" /* GET */, "/watchlist" /* WATCHLIST */);
    }
    /**
    * 從DB拿單筆電影
    */
    getWatchById(id) {
        return this.requestService.dbRequest("get" /* GET */, "/watchlist" /* WATCHLIST */ + '/' + id);
    }
}
WatchlistService.ɵfac = function WatchlistService_Factory(t) { return new (t || WatchlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_movie_request_service__WEBPACK_IMPORTED_MODULE_1__["MovieRequestService"])); };
WatchlistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WatchlistService, factory: WatchlistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchlistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _movie_request_service__WEBPACK_IMPORTED_MODULE_1__["MovieRequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/movie-list/watchlist/comment/comment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/movie-list/watchlist/comment/comment.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../homepage/shared/detail.service */ "./src/app/movie-list/homepage/shared/detail.service.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");













const _c0 = function () { return { minRows: 4, maxRows: 8 }; };
class CommentComponent {
    constructor(fb, detailService, modalRef) {
        this.fb = fb;
        this.detailService = detailService;
        this.modalRef = modalRef;
        this.validateForm = this.fb.group({
            watchedDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        if (this.type === "read" /* READ */) {
            this.validateForm.patchValue(Object.assign({}, this.movie));
            this.validateForm.disable();
        }
    }
    /**
     * 更新電影狀態
     * @id
     */
    submitForm() {
        const formControls = this.validateForm.controls;
        for (const i in formControls) {
            if (formControls.hasOwnProperty(i)) {
                formControls[i].markAsDirty();
                formControls[i].updateValueAndValidity();
            }
        }
        console.log(this.validateForm);
        if (this.validateForm.invalid) {
            return;
        }
        if (this.type === "read" /* READ */) {
            this.modalRef.triggerOk();
        }
        const value = this.validateForm.value;
        this.detailService.patchMovie(this.movie.id, Object.assign({ beenWatched: true }, value)).subscribe(() => this.modalRef.triggerOk());
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { movie: "movie", type: "type" }, decls: 21, vars: 8, consts: [[1, "text-center"], ["nz-form", "", 1, "form", 3, "formGroup"], [1, "row"], [1, "col-12"], ["nzRequired", "", 3, "nzSpan"], ["nzErrorTip", "\u8ACB\u9078\u64C7\u89C0\u770B\u65E5\u671F!", 3, "nzSpan"], ["formControlName", "watchedDate", 2, "width", "100%", "max-width", "400px"], ["nzErrorTip", "\u5BEB\u4E9B\u5FC3\u5F97\u5427!", 3, "nzSpan"], ["nz-input", "", "formControlName", "comment", 2, "width", "100%", "max-width", "400px", 3, "nzAutosize"], ["nz-button", "", "nzType", "primary", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 3, "click"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u89C0\u5F71\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-date-picker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u89C0\u5F71\u5FC3\u5F97");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_button_click_17_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u78BA\u8A8D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_button_click_19_listener() { return ctx.modalRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u53D6\u6D88 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_6__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzAutosizeDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3Qvd2F0Y2hsaXN0L2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _watchlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchlist.component */ "./src/app/movie-list/watchlist/watchlist.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





const routes = [
    { path: '', component: _watchlist_component__WEBPACK_IMPORTED_MODULE_0__["WatchlistComponent"] }
];
class WatchlistRoutingModule {
}
WatchlistRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WatchlistRoutingModule });
WatchlistRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WatchlistRoutingModule_Factory(t) { return new (t || WatchlistRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WatchlistRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WatchlistRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/movie-list/watchlist/comment/comment.component.ts");
/* harmony import */ var _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../consts/global-constants.const */ "./src/app/movie-list/consts/global-constants.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/watchlist.service */ "./src/app/core/services/watchlist.service.ts");
/* harmony import */ var _homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../homepage/shared/detail.service */ "./src/app/movie-list/homepage/shared/detail.service.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tree */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tree.js");










function WatchlistComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-tree", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzClick", function WatchlistComponent_ng_container_2_Template_nz_tree_nzClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.nzEvent($event, tab_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", tab_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx_r0.displayList[tab_r1.list]);
} }
class WatchlistComponent {
    constructor(watchlistService, detailService, modalService) {
        this.watchlistService = watchlistService;
        this.detailService = detailService;
        this.modalService = modalService;
        this.API_POSTER = _consts_global_constants_const__WEBPACK_IMPORTED_MODULE_1__["API_POSTER"];
        /**
         * 待播清單
         */
        this.displayList = {
            unWatchedList: [],
            watchedList: []
        };
        this.tabList = [
            { title: '尚未觀看', list: 'unWatchedList', type: "new" /* NEW */ },
            { title: '已經觀看', list: 'watchedList', type: "read" /* READ */ }
        ];
    }
    ngOnInit() {
        this.getWatchList();
    }
    getWatchList() {
        this.watchlistService.getWatchLists().subscribe(res => {
            // 先轉treenode
            const treeNodes = res.map((movie) => (Object.assign(Object.assign({}, movie), { key: movie.id, isLeaf: true })));
            this.displayList.watchedList = treeNodes.filter(movie => movie.beenWatched);
            this.displayList.unWatchedList = treeNodes.filter(movie => !movie.beenWatched);
        });
    }
    onPositiveClick(movie, type) {
        this.modalService.create({
            nzContent: _comment_comment_component__WEBPACK_IMPORTED_MODULE_0__["CommentComponent"],
            nzComponentParams: { movie, type },
            nzFooter: null,
            nzBodyStyle: { padding: '24px' },
            nzOnOk: () => {
                this.getWatchList();
            }
        });
    }
    removeList(id, event) {
        event.stopPropagation();
        this.detailService.removeList(id).subscribe(() => this.getWatchList());
    }
    nzEvent(event, type) {
        // 電影資料
        const movie = event.node.origin;
        this.onPositiveClick(movie, type);
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_3__["WatchlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalService"])); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 3, vars: 1, consts: [[1, "card-container"], ["nzType", "card"], [4, "ngFor", "ngForOf"], [3, "nzTitle"], ["nzDraggable", "", 3, "nzData", "nzClick"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WatchlistComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tabList);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_6__["NzTabComponent"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_8__["NzTreeComponent"]], styles: ["@charset \"UTF-8\";\n\n.title[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  position: relative;\n}\n.title[_ngcontent-%COMP%]:hover {\n  background-color: #d1d1c1;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 0px 12px;\n}\n[_nghost-%COMP%] {\n  background: #f5f5f5;\n  overflow: hidden;\n  padding: 24px;\n  display: block;\n}\n.card-container[_ngcontent-%COMP%]     p {\n  margin: 0;\n}\n.card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-content {\n  margin-top: -16px;\n}\n.card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {\n  background: #fff;\n  padding: 16px;\n}\n.card-container[_ngcontent-%COMP%]     > .ant-tabs-card > .ant-tabs-nav::before {\n  display: none;\n}\n.card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-tab {\n  border-color: transparent;\n  background: transparent;\n}\n.card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-tab-active {\n  border-color: #fff;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2N1c3RvbS1kZXNpZ24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0E7RUFDRSx5QkNJZ0I7QURGbEI7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtBQUVGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjtBQUVBO0VBQ0UsU0FBQTtBQUNGO0FBQ0E7RUFDRSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFHRjtBQURBO0VBQ0UsYUFBQTtBQUlGO0FBRkE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3Qvd2F0Y2hsaXN0L3dhdGNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9jdXN0b20tZGVzaWduLnNjc3NcIjtcblxuLnRpdGxlIHtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aXRsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMHB4IDEycHg7XG59XG5cbi8vIHRhYiBzdGFydFxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtY29udGFpbmVyIDo6bmctZGVlcCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtY29udGFpbmVyIDo6bmctZGVlcCA+IC5hbnQtdGFicy1jYXJkIC5hbnQtdGFicy1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG59XG4uY2FyZC1jb250YWluZXIgOjpuZy1kZWVwID4gLmFudC10YWJzLWNhcmQgLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY2FyZC1jb250YWluZXIgOjpuZy1kZWVwID4gLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtbmF2OjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhcmQtY29udGFpbmVyIDo6bmctZGVlcCA+IC5hbnQtdGFicy1jYXJkIC5hbnQtdGFicy10YWIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jYXJkLWNvbnRhaW5lciA6Om5nLWRlZXAgPiAuYW50LXRhYnMtY2FyZCAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiIsIi8qKiDln7rnpI7lip/og73oibLoqK3lrpogKi9cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4kY29sb3Itb3JhbmdlOiAjZmY5ZjAwO1xuJGNvbG9yLWdyZWVuOiAjNGNjNzkwO1xuJGNvbG9yLXJlZDogI2VlMTExMTtcbi8vIOS4u+imgeiJslxuJHByaW1hcnktY29sb3I6ICNiODhlNjU7XG4vLyDkuLvopoHoibLororlvaJcbiRwcmltYXJ5LXZhcmlhbnQtY29sb3I6ICM5NWE3OGQ7XG4vLyDmrKHopoHoibJcbiRzZWNvbmRhcnktY29sb3I6ICNkMWQxYzE7XG4vLyDmrKHopoHoibLororlvaJcbiRzZWNvbmRhcnktdmFyaWFudC1jb2xvcjogI2JkODk3ZTtcbi8vIOesrOS4ieiJslxuJHRoaXJkLWNvbG9yOiAjZTQ1NzJlO1xuLy8g56ys5LiJ6Imy6K6K5b2iXG4kdGhpcmQtdmFyaWFudC1jb2xvcjogI2VlZDdlZDtcblxuLy8g5re654GwXG4kY29sb3ItbGlnaHQtZ3JheTogI2Y3ZjdmNztcbiRjb2xvci1ncmF5OiAjNjY2O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WatchlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-watchlist',
                templateUrl: './watchlist.component.html',
                styleUrls: ['./watchlist.component.scss']
            }]
    }], function () { return [{ type: _core_services_watchlist_service__WEBPACK_IMPORTED_MODULE_3__["WatchlistService"] }, { type: _homepage_shared_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetailService"] }, { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }]; }, null); })();


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
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/movie-list/watchlist/comment/comment.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








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
        _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _watchlist_routing_module__WEBPACK_IMPORTED_MODULE_4__["WatchlistRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WatchlistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _watchlist_component__WEBPACK_IMPORTED_MODULE_1__["WatchlistComponent"],
                    _comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"],
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