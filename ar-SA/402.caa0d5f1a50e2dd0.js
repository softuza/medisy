"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[402],{

/***/ 8738:
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 7093);
/* harmony import */ var _shared_modules_card_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/modules/card/components/card/card.component */ 8909);




function SettingsComponent_app_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-card", 6)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("card", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.content);
} }
function SettingsComponent_app_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-card", 6)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("card", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.content);
} }
class SettingsComponent {
    constructor() {
        this.labSettings = [
            {
                url: "/analysis-management/analysis-types",
                icon: "science",
                subtitle: "\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u062A\u062D\u0627\u0644\u064A\u0644",
                content: "ادارة انماط التحاليل",
            },
            {
                url: "/laboratory-management/value-references",
                icon: "compare_arrows",
                subtitle: "القيم المرجعية",
                content: "ادارة القيم المرجعية للاختبارات",
            },
        ];
        this.generalSettings = [
            {
                url: "/laboratory-management/emails",
                icon: "email",
                subtitle: "البريد الالكتروني",
                content: "ادارة البريد الالكتروني للمخبر",
            },
            {
                url: "/laboratory-management/phones",
                icon: "phone",
                subtitle: "الهواتف",
                content: "ادارة ارقام هواتف المخبر",
            },
        ];
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 11, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7985496157084321053$$SRC_APP_MODULES_SETTINGS_SETTINGS_COMPONENT_TS_1 = goog.getMsg("Laboratory Settings");
        i18n_0 = MSG_EXTERNAL_7985496157084321053$$SRC_APP_MODULES_SETTINGS_SETTINGS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u0627\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062E\u0628\u0631";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_432834967329800065$$SRC_APP_MODULES_SETTINGS_SETTINGS_COMPONENT_TS_3 = goog.getMsg("General Settings");
        i18n_2 = MSG_EXTERNAL_432834967329800065$$SRC_APP_MODULES_SETTINGS_SETTINGS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629";
    } return [[1, "header-main"], [1, "title"], i18n_0, ["fxLayout", "row", "fxLayout.lt-md", "column wrap", "fxLayoutGap", "16px grid", 1, "tailwind-pb-4"], ["fxFlex", "25%", 3, "card", 4, "ngFor", "ngForOf"], i18n_2, ["fxFlex", "25%", 3, "card"], ["title", ""]]; }, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SettingsComponent_app_card_5_Template, 3, 2, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0)(7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SettingsComponent_app_card_10_Template, 3, 2, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.labSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.generalSettings);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _shared_modules_card_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent] });


/***/ }),

/***/ 3402:
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 3626);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ 8738);
/* harmony import */ var src_app_shared_modules_counter_counter_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/counter/counter.module */ 6625);
/* harmony import */ var src_app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/card/card.module */ 3196);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.routing.module */ 1462);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 4834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);










class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__.SettingsRoutingModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        src_app_shared_modules_counter_counter_module__WEBPACK_IMPORTED_MODULE_1__.CounterModule,
        src_app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__.SettingsRoutingModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        src_app_shared_modules_counter_counter_module__WEBPACK_IMPORTED_MODULE_1__.CounterModule,
        src_app_shared_modules_card_card_module__WEBPACK_IMPORTED_MODULE_2__.CardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule] }); })();


/***/ }),

/***/ 1462:
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings.routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ 8738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);




const routes = [{ path: "", component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent }];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);