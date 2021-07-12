(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~movie-list-homepage-homepage-module~movie-list-watchlist-watchlist-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
class MediaMatcher {
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
MediaMatcher.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }]; }, null); })();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: () => { },
        removeListener: () => { }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
class BreakpointObserver {
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(value));
        return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(value));
        const observables = queries.map(query => this._registerQuery(query).observable);
        let stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
        return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(breakpointStates => {
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(({ matches, query }) => {
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
            });
            return response;
        }));
    }
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            const handler = (e) => this._zone.run(() => observer.next(e));
            mql.addListener(handler);
            return () => {
                mql.removeListener(handler);
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ matches }) => ({ query, matches })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(query => query.split(','))
        .reduce((a1, a2) => a1.concat(a2))
        .map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-polyfill.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-polyfill.js ***!
  \*****************************************************************************************/
/*! exports provided: cancelRequestAnimationFrame, reqAnimFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelRequestAnimationFrame", function() { return cancelRequestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqAnimFrame", function() { return reqAnimFrame; });
// tslint:disable: typedef no-invalid-this
const availablePrefixes = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    let lastTime = 0;
    return function (callback) {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        const id = setTimeout(() => {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => 0;
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    const prefix = availablePrefixes.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix ? window[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    const prefix = availablePrefixes.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
    return prefix
        ? (window[`${prefix}CancelAnimationFrame`] || window[`${prefix}CancelRequestAnimationFrame`])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
const reqAnimFrame = getRequestAnimationFrame();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-core-polyfill.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js ***!
  \*****************************************************************************************/
/*! exports provided: NzBreakpointEnum, NzBreakpointService, NzDragService, NzResizeService, NzScrollService, NzSingletonService, gridResponsiveMap, siderResponsiveMap, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreakpointEnum", function() { return NzBreakpointEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreakpointService", function() { return NzBreakpointService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDragService", function() { return NzDragService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResizeService", function() { return NzResizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzScrollService", function() { return NzScrollService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSingletonService", function() { return NzSingletonService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridResponsiveMap", function() { return gridResponsiveMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siderResponsiveMap", function() { return siderResponsiveMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_core_environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/environments */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-environments.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-polyfill.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");









/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */


const NOOP = () => { };
const ɵ0 = NOOP;
class NzResizeService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.listeners = 0;
        this.disposeHandle = NOOP;
        this.handler = () => {
            this.ngZone.run(() => {
                this.resizeSource$.next();
            });
        };
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    subscribe() {
        this.registerListener();
        return this.resizeSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.unregisterListener()));
    }
    unsubscribe() {
        this.unregisterListener();
    }
    registerListener() {
        if (this.listeners === 0) {
            this.ngZone.runOutsideAngular(() => {
                this.disposeHandle = this.renderer.listen('window', 'resize', this.handler);
            });
        }
        this.listeners += 1;
    }
    unregisterListener() {
        this.listeners -= 1;
        if (this.listeners === 0) {
            this.disposeHandle();
            this.disposeHandle = NOOP;
        }
    }
}
NzResizeService.ɵfac = function NzResizeService_Factory(t) { return new (t || NzResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
NzResizeService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzResizeService_Factory() { return new NzResizeService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); }, token: NzResizeService, providedIn: "root" });
NzResizeService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * When running in test, singletons should not be destroyed. So we keep references of singletons
 * in this global variable.
 */
const testSingleRegistry = new Map();
/**
 * Some singletons should have life cycle that is same to Angular's. This service make sure that
 * those singletons get destroyed in HMR.
 */
class NzSingletonService {
    constructor() {
        /**
         * This registry is used to register singleton in dev mode.
         * So that singletons get destroyed when hot module reload happens.
         *
         * This works in prod mode too but with no specific effect.
         */
        this._singletonRegistry = new Map();
    }
    get singletonRegistry() {
        return ng_zorro_antd_core_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].isTestMode ? testSingleRegistry : this._singletonRegistry;
    }
    registerSingletonWithKey(key, target) {
        const alreadyHave = this.singletonRegistry.has(key);
        const item = alreadyHave ? this.singletonRegistry.get(key) : this.withNewTarget(target);
        if (!alreadyHave) {
            this.singletonRegistry.set(key, item);
        }
    }
    getSingletonWithKey(key) {
        return this.singletonRegistry.has(key) ? this.singletonRegistry.get(key).target : null;
    }
    withNewTarget(target) {
        return {
            target
        };
    }
}
NzSingletonService.ɵfac = function NzSingletonService_Factory(t) { return new (t || NzSingletonService)(); };
NzSingletonService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzSingletonService_Factory() { return new NzSingletonService(); }, token: NzSingletonService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSingletonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function getPagePosition(event) {
    const e = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["getEventPosition"])(event);
    return {
        x: e.pageX,
        y: e.pageY
    };
}
/**
 * This module provide a global dragging service to other components.
 */
class NzDragService {
    constructor(rendererFactory2) {
        this.draggingThreshold = 5;
        this.currentDraggingSequence = null;
        this.currentStartingPoint = null;
        this.handleRegistry = new Set();
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    requestDraggingSequence(event) {
        if (!this.handleRegistry.size) {
            this.registerDraggingHandler(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isTouchEvent"])(event));
        }
        // Complete last dragging sequence if a new target is dragged.
        if (this.currentDraggingSequence) {
            this.currentDraggingSequence.complete();
        }
        this.currentStartingPoint = getPagePosition(event);
        this.currentDraggingSequence = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return this.currentDraggingSequence.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((e) => {
            return {
                x: e.pageX - this.currentStartingPoint.x,
                y: e.pageY - this.currentStartingPoint.y
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((e) => Math.abs(e.x) > this.draggingThreshold || Math.abs(e.y) > this.draggingThreshold), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.teardownDraggingSequence()));
    }
    registerDraggingHandler(isTouch) {
        if (isTouch) {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchmove', (e) => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e.touches[0] || e.changedTouches[0]);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'touchend', () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                })
            });
        }
        else {
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mousemove', e => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.next(e);
                    }
                })
            });
            this.handleRegistry.add({
                teardown: this.renderer.listen('document', 'mouseup', () => {
                    if (this.currentDraggingSequence) {
                        this.currentDraggingSequence.complete();
                    }
                })
            });
        }
    }
    teardownDraggingSequence() {
        this.currentDraggingSequence = null;
    }
}
NzDragService.ɵfac = function NzDragService_Factory(t) { return new (t || NzDragService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
NzDragService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzDragService_Factory() { return new NzDragService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); }, token: NzDragService, providedIn: "root" });
NzDragService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDragService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function easeInOutCubic(t, b, c, d) {
    const cc = c - b;
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
class NzScrollService {
    constructor(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            el.scrollTop = topValue;
        }
    }
    /** Get position of `el` against window. */
    getOffset(el) {
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            const doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(target, top = true) {
        if (typeof window === 'undefined') {
            return 0;
        }
        const method = top ? 'scrollTop' : 'scrollLeft';
        let result = 0;
        if (this.isWindow(target)) {
            result = target[top ? 'pageYOffset' : 'pageXOffset'];
        }
        else if (target instanceof Document) {
            result = target.documentElement[method];
        }
        else if (target) {
            result = target[method];
        }
        if (target && !this.isWindow(target) && typeof result !== 'number') {
            result = (target.ownerDocument || target).documentElement[method];
        }
        return result;
    }
    isWindow(obj) {
        return obj !== null && obj !== undefined && obj === obj.window;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param y Scroll to `top`, 0 by default
     */
    scrollTo(containerEl, y = 0, options = {}) {
        const target = containerEl ? containerEl : window;
        const scrollTop = this.getScroll(target);
        const startTime = Date.now();
        const { easing, callback, duration = 450 } = options;
        const frameFunc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            const nextScrollTop = (easing || easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);
            if (this.isWindow(target)) {
                target.scrollTo(window.pageXOffset, nextScrollTop);
            }
            else if (target instanceof HTMLDocument || target.constructor.name === 'HTMLDocument') {
                target.documentElement.scrollTop = nextScrollTop;
            }
            else {
                target.scrollTop = nextScrollTop;
            }
            if (time < duration) {
                Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_6__["reqAnimFrame"])(frameFunc);
            }
            else if (typeof callback === 'function') {
                callback();
            }
        };
        Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_6__["reqAnimFrame"])(frameFunc);
    }
}
NzScrollService.ɵfac = function NzScrollService_Factory(t) { return new (t || NzScrollService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); };
NzScrollService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzScrollService_Factory() { return new NzScrollService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: NzScrollService, providedIn: "root" });
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzBreakpointEnum;
(function (NzBreakpointEnum) {
    NzBreakpointEnum["xxl"] = "xxl";
    NzBreakpointEnum["xl"] = "xl";
    NzBreakpointEnum["lg"] = "lg";
    NzBreakpointEnum["md"] = "md";
    NzBreakpointEnum["sm"] = "sm";
    NzBreakpointEnum["xs"] = "xs";
})(NzBreakpointEnum || (NzBreakpointEnum = {}));
const gridResponsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
const siderResponsiveMap = {
    xs: '(max-width: 479.98px)',
    sm: '(max-width: 575.98px)',
    md: '(max-width: 767.98px)',
    lg: '(max-width: 991.98px)',
    xl: '(max-width: 1199.98px)',
    xxl: '(max-width: 1599.98px)'
};
class NzBreakpointService {
    constructor(resizeService, mediaMatcher) {
        this.resizeService = resizeService;
        this.mediaMatcher = mediaMatcher;
        this.resizeService.subscribe().subscribe(() => { });
    }
    subscribe(breakpointMap, fullMap) {
        if (fullMap) {
            const get = () => this.matchMedia(breakpointMap, true);
            return this.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(get), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(get()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])((x, y) => x[0] === y[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x[1]));
        }
        else {
            const get = () => this.matchMedia(breakpointMap);
            return this.resizeService.subscribe().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(get), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(get()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        }
    }
    matchMedia(breakpointMap, fullMap) {
        let bp = NzBreakpointEnum.md;
        const breakpointBooleanMap = {};
        Object.keys(breakpointMap).map(breakpoint => {
            const castBP = breakpoint;
            const matched = this.mediaMatcher.matchMedia(gridResponsiveMap[castBP]).matches;
            breakpointBooleanMap[breakpoint] = matched;
            if (matched) {
                bp = castBP;
            }
        });
        if (fullMap) {
            return [bp, breakpointBooleanMap];
        }
        else {
            return bp;
        }
    }
}
NzBreakpointService.ɵfac = function NzBreakpointService_Factory(t) { return new (t || NzBreakpointService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzResizeService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["MediaMatcher"])); };
NzBreakpointService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzBreakpointService_Factory() { return new NzBreakpointService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NzResizeService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["MediaMatcher"])); }, token: NzBreakpointService, providedIn: "root" });
NzBreakpointService.ctorParameters = () => [
    { type: NzResizeService },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["MediaMatcher"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreakpointService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: NzResizeService }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["MediaMatcher"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-core-services.js.map

/***/ })

}]);
//# sourceMappingURL=default~movie-list-homepage-homepage-module~movie-list-watchlist-watchlist-module.js.map