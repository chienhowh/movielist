(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-list-specific-type-specific-type-module"],{

/***/ "./src/app/movie-list/specific-type/specific-type-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/movie-list/specific-type/specific-type-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SpecificTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificTypeRoutingModule", function() { return SpecificTypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _specific_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specific-type.component */ "./src/app/movie-list/specific-type/specific-type.component.ts");





const routes = [{ path: '', component: _specific_type_component__WEBPACK_IMPORTED_MODULE_2__["SpecificTypeComponent"] }];
class SpecificTypeRoutingModule {
}
SpecificTypeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpecificTypeRoutingModule });
SpecificTypeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SpecificTypeRoutingModule_Factory(t) { return new (t || SpecificTypeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpecificTypeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecificTypeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/movie-list/specific-type/specific-type.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/movie-list/specific-type/specific-type.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpecificTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificTypeComponent", function() { return SpecificTypeComponent; });
/* harmony import */ var _core_consts_device_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/consts/device.const */ "./src/app/core/consts/device.const.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/consts/global-constants.const */ "./src/app/core/consts/global-constants.const.ts");
/* harmony import */ var src_app_core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/consts/routing-path.const */ "./src/app/core/consts/routing-path.const.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/services/movie-request.service */ "./src/app/core/services/movie-request.service.ts");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-collapse.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/slider */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-slider.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/back-top */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-back-top.js");
/* harmony import */ var _shared_components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/vertical-card/vertical-card.component */ "./src/app/shared/components/vertical-card/vertical-card.component.ts");
/* harmony import */ var _shared_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/movie-card/movie-card.component */ "./src/app/shared/components/movie-card/movie-card.component.ts");


















const _c0 = ["specific"];
function SpecificTypeComponent_nz_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 21);
} if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", opt_r7.value)("nzLabel", opt_r7.text);
} }
function SpecificTypeComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpecificTypeComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.selectGenre(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r2.setOfCheckedGenre.has(item_r8.id) ? "primary" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
function SpecificTypeComponent_ng_container_38_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-vertical-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movie", movie_r12);
} }
function SpecificTypeComponent_ng_container_38_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-movie-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movie", movie_r12);
} }
function SpecificTypeComponent_ng_container_38_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpecificTypeComponent_ng_container_38_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpecificTypeComponent_ng_container_38_ng_container_2_ng_container_2_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.device === ctx_r11.DEVICE.PAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.device === ctx_r11.DEVICE.MOBILE);
} }
function SpecificTypeComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpecificTypeComponent_ng_container_38_ng_container_2_Template, 3, 2, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.displayList);
} }
function SpecificTypeComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\u67E5\u7121\u8CC7\u6599");
} }
function SpecificTypeComponent_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpecificTypeComponent_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onSubmit(ctx_r17.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u8F09\u5165\u66F4\u591A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "large");
} }
class SpecificTypeComponent {
    constructor(fb, mvReqSvc, sharedSvc) {
        this.fb = fb;
        this.mvReqSvc = mvReqSvc;
        this.sharedSvc = sharedSvc;
        this.DEVICE = _core_consts_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"];
        this.currentPage = 1;
        this.validateForm = this.fb.group({
            sort_by: [],
            // 'release_date.gte': [],
            // 'release_date.lte': [],
            rateSlider: [[0, 10]],
            runtimeSlider: [[0, 400]]
        });
        this.displayList = [];
        this.genresList = [];
        this.setOfCheckedGenre = new Set();
        /** 是否開放滑動增加 */
        this.isScrollMore = false;
        /** 滑動頁是否載入完成 */
        this.loaded = false;
        this.rateMarks = {
            0: '0',
            5: '5',
            10: '10'
        };
        this.runtimeMarks = {
            0: '0',
            100: '100',
            200: '200',
            300: '300',
            400: '400'
        };
        this.sortOpts = [
            { text: '按人氣升序', value: 'popularity.asc' },
            { text: '按人氣降序', value: 'popularity.desc' },
            { text: '按日期升序', value: 'primary_release_date.asc' },
            { text: '按日期降序', value: 'primary_release_date.desc' },
            { text: '按評分降序', value: 'vote_average.asc' },
            { text: '按評分降序', value: 'vote_average.desc' },
        ];
    }
    onScroll($event) {
        const clientHeight = $event.target.documentElement.clientHeight;
        const scrollTop = $event.target.documentElement.scrollTop;
        const scrollHeight = $event.target.documentElement.scrollHeight;
        if (this.isScrollMore && this.loaded) {
            if (scrollHeight - scrollTop - clientHeight < clientHeight * 0.3) {
                this.loaded = false;
                this.onSubmit(this.currentPage + 1);
            }
        }
    }
    ngOnInit() {
        this.device = this.sharedSvc.UserDeviceSubject;
        this.log(this.device);
        this.genresList = JSON.parse(localStorage.getItem(src_app_core_consts_routing_path_const__WEBPACK_IMPORTED_MODULE_3__["LOCALSTORAGE_KEY"].GENRES));
        this.onSubmit(1);
    }
    onSubmit(page) {
        const formValue = this.validateForm.value;
        this.currentPage = page;
        // console.log(typeof formValue['release_date.lte']);
        // console.log(this.validateForm['release_date_str']);
        // const reqBody = Object.keys(formValue).filter(f => !!formValue[f]).reduce((p, c) => ({ ...p, [c]: formValue[c] }), {});
        const reqBody = {};
        reqBody['vote_average.gte'] = formValue.rateSlider[0];
        reqBody['vote_average.lte'] = formValue.rateSlider[1];
        reqBody['with_runtime.gte'] = formValue.runtimeSlider[0];
        reqBody['with_runtime.lte'] = formValue.runtimeSlider[1];
        reqBody['with_genres'] = [...this.setOfCheckedGenre].join(',');
        reqBody['page'] = page;
        if (this.validateForm.get('sort_by').value) {
            reqBody['sort_by'] = this.validateForm.get('sort_by').value;
        }
        this.getMovies(page, reqBody);
    }
    // TODO:選項跟日期讀不到
    getMovies(page, reqBody) {
        if (page === 1) {
            this.isScrollMore = false;
            this.loaded = false;
            this.mvReqSvc.request(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET, src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].DISCOVER, reqBody).subscribe((res) => {
                this.displayList = res.results;
            });
        }
        else {
            // 第二頁開始變滾動
            this.isScrollMore = true;
            this.mvReqSvc.request(src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].GET, src_app_core_consts_global_constants_const__WEBPACK_IMPORTED_MODULE_2__["API"].DISCOVER, reqBody).subscribe((res) => {
                this.displayList = this.displayList.concat(res.results);
                this.loaded = true;
            });
        }
    }
    selectGenre(id) {
        this.setOfCheckedGenre.has(id) ? this.setOfCheckedGenre.delete(id) : this.setOfCheckedGenre.add(id);
    }
    formatter(value) {
        return `value`;
    }
    log(e) {
        console.log(e);
    }
}
SpecificTypeComponent.ɵfac = function SpecificTypeComponent_Factory(t) { return new (t || SpecificTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__["MovieRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"])); };
SpecificTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpecificTypeComponent, selectors: [["app-specific-type"]], viewQuery: function SpecificTypeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.specific = _t.first);
    } }, hostBindings: function SpecificTypeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function SpecificTypeComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 43, vars: 18, consts: [[1, "container-xl"], [1, "row", "specific-box"], ["specific", ""], [1, "col-12", "col-md-3"], [1, "font-weight-bold"], [3, "formGroup", "ngSubmit"], ["nzExpandIconPosition", "right"], [3, "nzHeader"], [1, "form-label"], ["formControlName", "sort_by", "nzPlaceHolder", "\u8ACB\u9078\u64C7\u6392\u5E8F", 1, "w-100"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "type", "button", "nzShape", "round", "class", "genre-btn", 3, "nzType", "click", 4, "ngFor", "ngForOf"], ["formControlName", "rateSlider", "nzRange", "", 3, "nzMarks", "nzMin", "nzMax", "nzStep"], ["formControlName", "runtimeSlider", "nzRange", "", 3, "nzMarks", "nzMin", "nzMax", "nzStep", "ngModelChange"], ["nz-button", "", "nzType", "primary", "nzShape", "round", 1, "w-100", 3, "nzSize"], [1, "col-12", "col-md-9"], [1, "list-box"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["nz-button", "", "nzType", "primary", "nzShape", "round", "class", "w-100", 3, "nzSize", "click", 4, "ngIf"], [3, "nzVisibilityHeight"], [3, "nzValue", "nzLabel"], ["nz-button", "", "type", "button", "nzShape", "round", 1, "genre-btn", 3, "nzType", "click"], [1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "my-3", "col-cus"], [3, "movie"], [1, "my-3", "col-12"], ["nz-button", "", "nzType", "primary", "nzShape", "round", 1, "w-100", 3, "nzSize", "click"]], template: function SpecificTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u63A2\u7D22\u96FB\u5F71");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SpecificTypeComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-collapse", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-collapse-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u6392\u5E8F\u7D50\u679C\u4F9D\u64DA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SpecificTypeComponent_nz_option_14_Template, 1, 2, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-collapse", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-collapse-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SpecificTypeComponent_button_21_Template, 2, 2, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u4F7F\u7528\u8005\u8A55\u5206");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "nz-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u7247\u9577");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-slider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SpecificTypeComponent_Template_nz_slider_ngModelChange_33_listener($event) { return ctx.log($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " \u641C\u5C0B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SpecificTypeComponent_ng_container_38_Template, 3, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SpecificTypeComponent_ng_template_39_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SpecificTypeComponent_button_41_Template, 2, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "nz-back-top", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeader", "\u6392\u5E8F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeader", "\u7BE9\u9078");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.genresList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMarks", ctx.rateMarks)("nzMin", 0)("nzMax", 10)("nzStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMarks", ctx.runtimeMarks)("nzMin", 0)("nzMax", 400)("nzStep", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayList.length !== 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isScrollMore && ctx.displayList.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisibilityHeight", 1000);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_7__["NzCollapsePanelComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_10__["NzSliderComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_14__["NzBackTopComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzOptionComponent"], _shared_components_vertical_card_vertical_card_component__WEBPACK_IMPORTED_MODULE_15__["VerticalCardComponent"], _shared_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_16__["MovieCardComponent"]], styles: [".specific-box[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n@media screen and (min-width: 576px) {\n  .specific-box[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\nnz-collapse[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n.genre-btn[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  margin-right: 6px;\n}\n.col-cus[_ngcontent-%COMP%] {\n  flex: 0 0 33.33%;\n  max-width: 33.33%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n@media screen and (min-width: 1024px) {\n  .col-cus[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n}\n@media screen and (min-width: 1140px) {\n  .col-cus[_ngcontent-%COMP%] {\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtbGlzdC9zcGVjaWZpYy10eXBlL3NwZWNpZmljLXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7QUFBRTtFQUZGO0lBR0ksa0JBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSxtQkFBQTtBQUdGO0FBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUdGO0FBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdGO0FBRkU7RUFQRjtJQVFJLGFBQUE7SUFDQSxjQUFBO0VBS0Y7QUFDRjtBQUpFO0VBWEY7SUFZSSxhQUFBO0lBQ0EsY0FBQTtFQU9GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1saXN0L3NwZWNpZmljLXR5cGUvc3BlY2lmaWMtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWZpYy1ib3gge1xuICBwYWRkaW5nOiAyMHB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgfVxufVxuXG5uei1jb2xsYXBzZSB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5nZW5yZS1idG4ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uY29sLWN1cyB7XG4gIGZsZXg6IDAgMCAzMy4zMyU7XG4gIG1heC13aWR0aDogMzMuMzMlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE0MHB4KSB7XG4gICAgZmxleDogMCAwIDIwJTtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpecificTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-specific-type',
                templateUrl: './specific-type.component.html',
                styleUrls: ['./specific-type.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _core_services_movie_request_service__WEBPACK_IMPORTED_MODULE_5__["MovieRequestService"] }, { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }]; }, { specific: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['specific']
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/movie-list/specific-type/specific-type.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/movie-list/specific-type/specific-type.module.ts ***!
  \******************************************************************/
/*! exports provided: SpecificTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificTypeModule", function() { return SpecificTypeModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _specific_type_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specific-type-routing.module */ "./src/app/movie-list/specific-type/specific-type-routing.module.ts");
/* harmony import */ var _specific_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specific-type.component */ "./src/app/movie-list/specific-type/specific-type.component.ts");







class SpecificTypeModule {
}
SpecificTypeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SpecificTypeModule });
SpecificTypeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SpecificTypeModule_Factory(t) { return new (t || SpecificTypeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _specific_type_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpecificTypeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpecificTypeModule, { declarations: [_specific_type_component__WEBPACK_IMPORTED_MODULE_5__["SpecificTypeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _specific_type_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpecificTypeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SpecificTypeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _specific_type_component__WEBPACK_IMPORTED_MODULE_5__["SpecificTypeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _specific_type_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpecificTypeRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=movie-list-specific-type-specific-type-module.js.map