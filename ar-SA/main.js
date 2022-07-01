var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"ar-SA"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val;if(n===0)return 0;if(n===1)return 1;if(n===2)return 2;if(n%100===Math.floor(n%100)&&n%100>=3&&n%100<=10)return 3;if(n%100===Math.floor(n%100)&&n%100>=11&&n%100<=99)return 4;return 5}global.ng.common.locales["ar-sa"]=["ar-SA",[["\u0635","\u0645"],u,u],[["\u0635","\u0645"],u,["\u0635\u0628\u0627\u062D\u064B\u0627","\u0645\u0633\u0627\u0621\u064B"]],[["\u062D","\u0646","\u062B","\u0631","\u062E","\u062C","\u0633"],["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0627\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"],u,["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"]],u,[["\u064A","\u0641","\u0645","\u0623","\u0648","\u0646","\u0644","\u063A","\u0633","\u0643","\u0628","\u062F"],["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],u],u,[["\u0642.\u0645","\u0645"],u,["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F","\u0645\u064A\u0644\u0627\u062F\u064A"]],0,[5,6],["d\u200F/M\u200F/y","dd\u200F/MM\u200F/y","d MMMM y","EEEE\u060C d MMMM y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} \u0641\u064A {0}",u],[".",",",";","\u066A","\u200E+","\u200E-","E","\xD7","\u2030","\u221E","\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"SAR","\u0631.\u0633.\u200F","\u0631\u064A\u0627\u0644 \u0633\u0639\u0648\u062F\u064A",{"AED":["\u062F.\u0625.\u200F"],"ARS":[u,"AR$"],"AUD":["AU$"],"BBD":[u,"BB$"],"BHD":["\u062F.\u0628.\u200F"],"BMD":[u,"BM$"],"BND":[u,"BN$"],"BSD":[u,"BS$"],"BYN":[u,"\u0440."],"BZD":[u,"BZ$"],"CAD":["CA$"],"CLP":[u,"CL$"],"CNY":["CN\xA5"],"COP":[u,"CO$"],"CUP":[u,"CU$"],"DOP":[u,"DO$"],"DZD":["\u062F.\u062C.\u200F"],"EGP":["\u062C.\u0645.\u200F","E\xA3"],"FJD":[u,"FJ$"],"GBP":["UK\xA3"],"GYD":[u,"GY$"],"HKD":["HK$"],"IQD":["\u062F.\u0639.\u200F"],"IRR":["\u0631.\u0625."],"JMD":[u,"JM$"],"JOD":["\u062F.\u0623.\u200F"],"JPY":["JP\xA5"],"KWD":["\u062F.\u0643.\u200F"],"KYD":[u,"KY$"],"LBP":["\u0644.\u0644.\u200F","L\xA3"],"LRD":[u,"$LR"],"LYD":["\u062F.\u0644.\u200F"],"MAD":["\u062F.\u0645.\u200F"],"MRU":["\u0623.\u0645."],"MXN":["MX$"],"NZD":["NZ$"],"OMR":["\u0631.\u0639.\u200F"],"PHP":[u,"\u20B1"],"QAR":["\u0631.\u0642.\u200F"],"SAR":["\u0631.\u0633.\u200F"],"SBD":[u,"SB$"],"SDD":["\u062F.\u0633.\u200F"],"SDG":["\u062C.\u0633."],"SRD":[u,"SR$"],"SYP":["\u0644.\u0633.\u200F","\xA3"],"THB":["\u0E3F"],"TND":["\u062F.\u062A.\u200F"],"TTD":[u,"TT$"],"TWD":["NT$"],"USD":["US$"],"UYU":[u,"UY$"],"YER":["\u0631.\u064A.\u200F"]},"rtl",plural,[[["\u0641\u062C\u0631\u064B\u0627","\u0635\u0628\u0627\u062D\u064B\u0627","\u0638\u0647\u0631\u064B\u0627","\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631","\u0645\u0633\u0627\u0621\u064B","\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644","\u0644\u064A\u0644\u0627\u064B"],["\u0641\u062C\u0631\u064B\u0627","\u0635","\u0638\u0647\u0631\u064B\u0627","\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631","\u0645\u0633\u0627\u0621\u064B","\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621","\u0644"],["\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D","\u0635\u0628\u0627\u062D\u064B\u0627","\u0638\u0647\u0631\u064B\u0627","\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631","\u0645\u0633\u0627\u0621\u064B","\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621","\u0644\u064A\u0644\u0627\u064B"]],[["\u0641\u062C\u0631\u064B\u0627","\u0635\u0628\u0627\u062D\u064B\u0627","\u0638\u0647\u0631\u064B\u0627","\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631","\u0645\u0633\u0627\u0621\u064B","\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644","\u0644\u064A\u0644\u0627\u064B"],["\u0641\u062C\u0631\u064B\u0627","\u0635","\u0638\u0647\u0631\u064B\u0627","\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631","\u0645\u0633\u0627\u0621\u064B","\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644","\u0644\u064A\u0644\u0627\u064B"],["\u0641\u062C\u0631\u064B\u0627","\u0635\u0628\u0627\u062D\u064B\u0627","\u0638\u0647\u0631\u064B\u0627","\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631","\u0645\u0633\u0627\u0621\u064B","\u0645\u0646\u062A\u0635\u0641 \u0627\u0644\u0644\u064A\u0644","\u0644\u064A\u0644\u0627\u064B"]],[["03:00","06:00"],["06:00","12:00"],["12:00","13:00"],["13:00","18:00"],["18:00","24:00"],["00:00","01:00"],["01:00","03:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    /**
     * Constructor
     */
    constructor(store) {
        this.store = store;
        this.store
            .select((state) => state.theme.dark)
            .subscribe((darkMode) => {
            document.body.className = darkMode ? "dark-theme" : "";
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing.module */ 6348);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/storage-plugin */ 1322);
/* harmony import */ var _store_loader_loader_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/loader/loader.state */ 7117);
/* harmony import */ var _store_sidebar_sidebar_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/sidebar/sidebar.state */ 2432);
/* harmony import */ var _store_header_header_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/header/header.state */ 6100);
/* harmony import */ var _store_theme_theme_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/theme/theme.state */ 5458);
/* harmony import */ var _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/auth/auth.state */ 3228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ 6256);
/* harmony import */ var src_app_shared_interceptors_base_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/interceptors/base.interceptor */ 4339);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/interceptors/auth.interceptor */ 7876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService,
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__.APP_BASE_HREF, useValue: "/medisy" },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.LOCALE_ID, useValue: "ar-SA" },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__.AuthInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS, useClass: src_app_shared_interceptors_base_interceptor__WEBPACK_IMPORTED_MODULE_11__.BaseInterceptor, multi: true },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _ngxs_store__WEBPACK_IMPORTED_MODULE_2__.NgxsModule.forRoot([_store_loader_loader_state__WEBPACK_IMPORTED_MODULE_4__.LoaderState, _store_sidebar_sidebar_state__WEBPACK_IMPORTED_MODULE_5__.SidebarState, _store_auth_auth_state__WEBPACK_IMPORTED_MODULE_8__.AuthState, _store_header_header_state__WEBPACK_IMPORTED_MODULE_6__.HeaderState, _store_theme_theme_state__WEBPACK_IMPORTED_MODULE_7__.ThemeState], { developmentMode: !src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.production }),
        _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsStoragePluginModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["ɵj"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsStoragePluginModule] }); })();


/***/ }),

/***/ 6348:
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: "auth/login",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-src_app_shared_modules_alert_alert_module_ts-node_modules_angular_material_fesm2015_i-7f5e41"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs-node_modules_angular_flex-layout_fesm-ef1d12"), __webpack_require__.e("src_app_modules_auth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/login/login.module */ 2705)).then((m) => m.LoginModule),
    },
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2015_scrolling_mjs-node_modules_angular_flex-layout_fesm-ef1d12"), __webpack_require__.e("src_app_modules_layout_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/layout/layout.module */ 9721)).then((m) => m.LayoutModule),
    },
    {
        path: "**",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_static_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/static/not-found/not-found.module */ 9749)).then((m) => m.NotFoundModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
            enableTracing: true,
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 7876:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/auth/auth.state */ 3228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/auth/auth.actions */ 9810);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ 6256);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);








class AuthInterceptor {
    constructor(store, authService, router) {
        this.store = store;
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        if (!this.isApiUrl(req.url)) {
            return next.handle(req);
        }
        // check token
        if (this.isExpired(this.store.selectSnapshot(src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.expireAt))) {
            return this.refreshToken()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((token) => {
                this.store.dispatch(new src_app_store_auth_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LoginAction({ token }));
                return next.handle(this.addTokenToRequest(req));
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
                this.router.navigate(["/auth/login"]);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err);
            }));
        }
        return next.handle(this.addTokenToRequest(req));
    }
    addTokenToRequest(req) {
        const headers = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Authorization: "",
        };
        const accessToken = this.store.selectSnapshot(src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.accessToken);
        if (accessToken) {
            headers.Authorization = `Bearer ${accessToken}`;
        }
        return req.clone({
            setHeaders: headers,
        });
    }
    /**
     * Check if requested link is API
     */
    isApiUrl(url) {
        const isTokenUrl = url.endsWith("/token");
        return !isTokenUrl;
    }
    /**
     * Refresh token
     */
    refreshToken() {
        const refreshToken = this.store.selectSnapshot(src_app_store_auth_auth_state__WEBPACK_IMPORTED_MODULE_0__.AuthState.refreshToken);
        return this.authService.token({
            grantType: "refresh_token",
            responseType: "token id_token",
            refreshToken,
        });
    }
    /**
     * Check token if expired
     */
    isExpired(expireAt) {
        if (!expireAt) {
            return true;
        }
        expireAt = typeof expireAt === "string" ? new Date(expireAt) : expireAt;
        const now = new Date();
        return (expireAt.getTime() - now.getTime()) / 1000 < 10;
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 4339:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/base.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseInterceptor": () => (/* binding */ BaseInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class BaseInterceptor {
    constructor() { }
    intercept(req, next) {
        return next.handle(req.clone({
            url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApi}${req.url}`,
        }));
    }
}
BaseInterceptor.ɵfac = function BaseInterceptor_Factory(t) { return new (t || BaseInterceptor)(); };
BaseInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseInterceptor, factory: BaseInterceptor.ɵfac });


/***/ }),

/***/ 6256:
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


/**
 * Authentication Service
 * It provides methods to login, logout
 */
class AuthService {
    constructor(http) {
        this.http = http;
        this.path = "";
    }
    /**
     * Get token
     */
    token(input) {
        return this.http.post(`${this.path}resource-owner/token`, input);
    }
    /**
     * Logout
     */
    logout() {
        const httpOptions = {
            withCredentials: true,
        };
        return this.http.put(`${this.path}/logout`, {}, httpOptions);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ 9810:
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAction": () => (/* binding */ LoginAction),
/* harmony export */   "LogoutAction": () => (/* binding */ LogoutAction)
/* harmony export */ });
class LoginAction {
    constructor(payload) {
        this.payload = payload;
    }
}
LoginAction.type = "[Auth] Login";
class LogoutAction {
}
LogoutAction.type = "[Auth] Logout";


/***/ }),

/***/ 3228:
/*!******************************************!*\
  !*** ./src/app/store/auth/auth.state.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthState": () => (/* binding */ AuthState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 9810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthState = class AuthState {
    /**
     * Constructor
     */
    constructor() { }
    static isAuthenticated(state) {
        return state.accessToken !== undefined;
    }
    static accessToken(state) {
        return state.accessToken;
    }
    static refreshToken(state) {
        return state.refreshToken;
    }
    static expireAt(state) {
        return state.expireAt;
    }
    login({ patchState }, { payload: { token } }) {
        const expireAt = new Date();
        expireAt.setSeconds(expireAt.getSeconds() + token.expiresIn);
        patchState({
            accessToken: token.accessToken,
            expireAt,
            refreshToken: token.refreshToken,
        });
    }
    logout({ setState }) {
        setState({
            accessToken: undefined,
        });
    }
};
AuthState.ɵfac = function AuthState_Factory(t) { return new (t || AuthState)(); };
AuthState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthState, factory: AuthState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LoginAction)
], AuthState.prototype, "login", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.LogoutAction)
], AuthState.prototype, "logout", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], AuthState, "isAuthenticated", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], AuthState, "accessToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], AuthState, "refreshToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], AuthState, "expireAt", null);
AuthState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: "auth",
    })
], AuthState);



/***/ }),

/***/ 9421:
/*!************************************************!*\
  !*** ./src/app/store/header/header.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderUpdateAction": () => (/* binding */ HeaderUpdateAction)
/* harmony export */ });
class HeaderUpdateAction {
    constructor(payload) {
        this.payload = payload;
    }
}
HeaderUpdateAction.type = "[Header] Update";


/***/ }),

/***/ 6100:
/*!**********************************************!*\
  !*** ./src/app/store/header/header.state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderState": () => (/* binding */ HeaderState),
/* harmony export */   "HeaderStateModel": () => (/* binding */ HeaderStateModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _header_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.actions */ 9421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class HeaderStateModel {
    constructor() {
        this.title = "Dashboard";
    }
}
let HeaderState = class HeaderState {
    static title(state) {
        return state.title;
    }
    headerUpdateAction(ctx, { payload: { title } }) {
        if (title === undefined) {
            return;
        }
        ctx.setState({ title });
    }
};
HeaderState.ɵfac = function HeaderState_Factory(t) { return new (t || HeaderState)(); };
HeaderState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HeaderState, factory: HeaderState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_header_actions__WEBPACK_IMPORTED_MODULE_1__.HeaderUpdateAction)
], HeaderState.prototype, "headerUpdateAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], HeaderState, "title", null);
HeaderState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: "header",
        defaults: {
            title: "Dashboard",
        },
    })
], HeaderState);



/***/ }),

/***/ 3663:
/*!************************************************!*\
  !*** ./src/app/store/loader/loader.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideLoaderAction": () => (/* binding */ HideLoaderAction),
/* harmony export */   "ShowLoaderAction": () => (/* binding */ ShowLoaderAction)
/* harmony export */ });
class ShowLoaderAction {
}
ShowLoaderAction.type = "[Loader] Show loader action";
class HideLoaderAction {
}
HideLoaderAction.type = "[Loader] Hide loader action";


/***/ }),

/***/ 7117:
/*!**********************************************!*\
  !*** ./src/app/store/loader/loader.state.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderState": () => (/* binding */ LoaderState),
/* harmony export */   "LoaderStateModel": () => (/* binding */ LoaderStateModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _loader_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.actions */ 3663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class LoaderStateModel {
    constructor() {
        this.status = false;
    }
}
let LoaderState = class LoaderState {
    static status(state) {
        return state.status;
    }
    showLoaderAction(ctx) {
        const state = ctx.getState();
        if (state.status) {
            return;
        }
        ctx.setState({ status: true });
    }
    hideLoaderAction(ctx) {
        const state = ctx.getState();
        if (!state.status) {
            return;
        }
        ctx.setState({ status: false });
    }
};
LoaderState.ɵfac = function LoaderState_Factory(t) { return new (t || LoaderState)(); };
LoaderState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoaderState, factory: LoaderState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_loader_actions__WEBPACK_IMPORTED_MODULE_1__.ShowLoaderAction)
], LoaderState.prototype, "showLoaderAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_loader_actions__WEBPACK_IMPORTED_MODULE_1__.HideLoaderAction)
], LoaderState.prototype, "hideLoaderAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], LoaderState, "status", null);
LoaderState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: "loader",
        defaults: {
            status: false,
        },
    })
], LoaderState);



/***/ }),

/***/ 8291:
/*!**************************************************!*\
  !*** ./src/app/store/sidebar/sidebar.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideSidebarAction": () => (/* binding */ HideSidebarAction),
/* harmony export */   "ShowSidebarAction": () => (/* binding */ ShowSidebarAction),
/* harmony export */   "ToggleSidebarAction": () => (/* binding */ ToggleSidebarAction)
/* harmony export */ });
class ShowSidebarAction {
}
ShowSidebarAction.type = "[Sidebar] Show sidebar action";
class HideSidebarAction {
}
HideSidebarAction.type = "[Sidebar] Hide sidebar action";
class ToggleSidebarAction {
}
ToggleSidebarAction.type = "[Sidebar] Toggle sidebar action";


/***/ }),

/***/ 2432:
/*!************************************************!*\
  !*** ./src/app/store/sidebar/sidebar.state.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarState": () => (/* binding */ SidebarState),
/* harmony export */   "SidebarStateModel": () => (/* binding */ SidebarStateModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _sidebar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.actions */ 8291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class SidebarStateModel {
    constructor() {
        this.status = true;
    }
}
let SidebarState = class SidebarState {
    static status(state) {
        return state.status;
    }
    showSidebarAction(ctx) {
        ctx.setState({ status: true });
    }
    hideSidebarAction(ctx) {
        ctx.setState({ status: false });
    }
    toggleSidebarAction(ctx) {
        const state = ctx.getState();
        ctx.setState({ status: !state.status });
    }
};
SidebarState.ɵfac = function SidebarState_Factory(t) { return new (t || SidebarState)(); };
SidebarState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SidebarState, factory: SidebarState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_sidebar_actions__WEBPACK_IMPORTED_MODULE_1__.ShowSidebarAction)
], SidebarState.prototype, "showSidebarAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_sidebar_actions__WEBPACK_IMPORTED_MODULE_1__.HideSidebarAction)
], SidebarState.prototype, "hideSidebarAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_sidebar_actions__WEBPACK_IMPORTED_MODULE_1__.ToggleSidebarAction)
], SidebarState.prototype, "toggleSidebarAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], SidebarState, "status", null);
SidebarState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: "sidebar",
        defaults: {
            status: true,
        },
    })
], SidebarState);



/***/ }),

/***/ 3777:
/*!**********************************************!*\
  !*** ./src/app/store/theme/theme.actions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkThemeAction": () => (/* binding */ DarkThemeAction),
/* harmony export */   "LightThemeAction": () => (/* binding */ LightThemeAction),
/* harmony export */   "ToggleThemeAction": () => (/* binding */ ToggleThemeAction)
/* harmony export */ });
class LightThemeAction {
}
LightThemeAction.type = "[Theme] Light theme action";
class DarkThemeAction {
}
DarkThemeAction.type = "[Theme] Dark theme action";
class ToggleThemeAction {
}
ToggleThemeAction.type = "[Theme] Toggle theme action";


/***/ }),

/***/ 5458:
/*!********************************************!*\
  !*** ./src/app/store/theme/theme.state.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeState": () => (/* binding */ ThemeState),
/* harmony export */   "ThemeStateModel": () => (/* binding */ ThemeStateModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _theme_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.actions */ 3777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ThemeStateModel {
    constructor() {
        this.dark = true;
    }
}
let ThemeState = class ThemeState {
    lightThemeAction(ctx) {
        ctx.setState({ dark: false });
    }
    darkThemeAction(ctx) {
        ctx.setState({ dark: true });
    }
    toggleThemeAction(ctx) {
        const state = ctx.getState();
        ctx.setState({ dark: !state.dark });
    }
};
ThemeState.ɵfac = function ThemeState_Factory(t) { return new (t || ThemeState)(); };
ThemeState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ThemeState, factory: ThemeState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_theme_actions__WEBPACK_IMPORTED_MODULE_1__.LightThemeAction)
], ThemeState.prototype, "lightThemeAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_theme_actions__WEBPACK_IMPORTED_MODULE_1__.DarkThemeAction)
], ThemeState.prototype, "darkThemeAction", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_theme_actions__WEBPACK_IMPORTED_MODULE_1__.ToggleThemeAction)
], ThemeState.prototype, "toggleThemeAction", null);
ThemeState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: "theme",
        defaults: {
            dark: false,
        },
    })
], ThemeState);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseApi: "https://api.medisy.softuza.com/",
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map