"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[592],{

/***/ 3196:
/*!****************************************************!*\
  !*** ./src/app/shared/modules/card/card.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardModule": () => (/* binding */ CardModule)
/* harmony export */ });
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card/card.component */ 8909);
/* harmony import */ var _counter_counter_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counter/counter.module */ 6625);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ 5899);
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.module */ 9362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);








class CardModule {
}
CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
CardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CardModule });
CardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _counter_counter_module__WEBPACK_IMPORTED_MODULE_1__.CounterModule,
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__.IconModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CardModule, { declarations: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _counter_counter_module__WEBPACK_IMPORTED_MODULE_1__.CounterModule,
        _icon_icon_module__WEBPACK_IMPORTED_MODULE_2__.IconModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__.MatProgressBarModule], exports: [_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent] }); })();


/***/ }),

/***/ 8909:
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/card/components/card/card.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icon/components/icon/icon.component */ 8155);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 5899);






function CardComponent_app_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-icon", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.card == null ? null : ctx_r0.card.icon);
} }
function CardComponent_mat_progress_bar_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 5);
} }
const _c0 = [[["", "title", ""]], [["", "content", ""]], [["", "footer", ""]]];
const _c1 = ["[title]", "[content]", "[footer]"];
class CardComponent {
    constructor(router) {
        this.router = router;
    }
    /**
     * Navigate
     */
    navigate() {
        if (this.card && this.card.url) {
            this.router.navigate([this.card.url]);
        }
    }
    /**
     * Has icon
     * @returns
     */
    hasIcon() {
        var _a;
        return ((_a = this.card) === null || _a === void 0 ? void 0 : _a.icon) !== undefined;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card" }, ngContentSelectors: _c1, decls: 13, vars: 3, consts: [[2, "cursor", "pointer", 3, "click"], [1, "spacer"], [3, "icon", 4, "ngIf"], ["mode", "indeterminate", 4, "ngIf"], [3, "icon"], ["mode", "indeterminate"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_mat_card_click_0_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header")(2, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CardComponent_app_icon_7_Template, 1, 1, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CardComponent_mat_progress_bar_12_Template, 1, 0, "mat-progress-bar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.card == null ? null : ctx.card.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasIcon());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.card == null ? null : ctx.card.loading) === true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardFooter, _icon_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after {\n  content: attr(data-icon);\n}"] });


/***/ }),

/***/ 2413:
/*!********************************************************************************!*\
  !*** ./src/app/shared/modules/counter/components/counter/counter.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

const _c0 = ["*"];
class CounterComponent {
    constructor() {
        this.start = 0;
        this.decimal = 0;
        this.duration = 800;
        this.currentValue = 0;
        this.timer = null;
        this.oldValue = 0;
    }
    set value(value) {
        if (!value) {
            return;
        }
        this.animate(this.oldValue, value);
        this.oldValue = value;
    }
    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    animate(start, end) {
        const range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        const minTimer = 50;
        // calc step time to show all intermediate values
        let stepTime = Math.abs(Math.floor(this.duration / range));
        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
        // get current time and calculate desired end time
        const startTime = new Date().getTime();
        const endTime = startTime + this.duration;
        const run = () => {
            const now = new Date().getTime();
            const remaining = Math.max((endTime - now) / this.duration, 0);
            const val = Math.round(end - remaining * range);
            this.currentValue = val;
            if (Math.round(val) === Math.round(end)) {
                clearInterval(this.timer);
            }
        };
        this.timer = setInterval(run, stepTime);
        run();
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter"]], inputs: { value: "value" }, ngContentSelectors: _c0, decls: 3, vars: 1, template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentValue, " ");
    } }, encapsulation: 2 });


/***/ }),

/***/ 6625:
/*!**********************************************************!*\
  !*** ./src/app/shared/modules/counter/counter.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterModule": () => (/* binding */ CounterModule)
/* harmony export */ });
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/counter/counter.component */ 2413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);


class CounterModule {
}
CounterModule.ɵfac = function CounterModule_Factory(t) { return new (t || CounterModule)(); };
CounterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CounterModule });
CounterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CounterModule, { declarations: [_components_counter_counter_component__WEBPACK_IMPORTED_MODULE_0__.CounterComponent], exports: [_components_counter_counter_component__WEBPACK_IMPORTED_MODULE_0__.CounterComponent] }); })();


/***/ }),

/***/ 8155:
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/icon/components/icon/icon.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconComponent": () => (/* binding */ IconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4202);


class IconComponent {
    constructor(router) {
        this.router = router;
    }
    /**
     * Has icon
     * @returns
     */
    hasIcon() {
        return this.icon !== undefined;
    }
    /**
     * Get icon
     * @returns
     */
    getIcon() {
        var _a;
        if (typeof this.icon === "string") {
            return this.icon;
        }
        else {
            return (_a = this.icon) === null || _a === void 0 ? void 0 : _a.name;
        }
    }
    /**
     * Get class
     * @returns
     */
    getClass() {
        var _a, _b;
        if (typeof this.icon === "string") {
            return "material-icons";
        }
        if (((_a = this.icon) === null || _a === void 0 ? void 0 : _a.class) === undefined) {
            return "material-icons";
        }
        return (_b = this.icon) === null || _b === void 0 ? void 0 : _b.class;
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
IconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { icon: "icon" }, decls: 1, vars: 2, consts: [[3, "className"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "em", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.getClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-icon", ctx.getIcon());
    } }, styles: [".material-icons[_ngcontent-%COMP%]:after, .fas[_ngcontent-%COMP%]:after {\n  content: attr(data-icon);\n}"] });


/***/ }),

/***/ 9362:
/*!****************************************************!*\
  !*** ./src/app/shared/modules/icon/icon.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconModule": () => (/* binding */ IconModule)
/* harmony export */ });
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/icon/icon.component */ 8155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);



class IconModule {
}
IconModule.ɵfac = function IconModule_Factory(t) { return new (t || IconModule)(); };
IconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconModule });
IconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconModule, { declarations: [_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_0__.IconComponent] }); })();


/***/ }),

/***/ 4672:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/services/analysis-management/analysis-type/analysis-type.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisTypeService": () => (/* binding */ AnalysisTypeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);



/**
 * AnalysisType Service
 */
class AnalysisTypeService {
    constructor(http) {
        this.http = http;
        this.path = `v1/analysis-management/analysis-types`;
    }
    /**
     * Get analysis types
     */
    getAnalysisTypes(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
    /**
     * Create AnalysisType
     */
    createAnalysisType(input) {
        return this.http.post(`${this.path}`, input);
    }
    /**
     * Delete analysis type
     * @param analysisTypeId
     * @returns
     */
    deleteAnalysisType(analysisTypeId) {
        return this.http.delete(`${this.path}/${analysisTypeId}`);
    }
}
AnalysisTypeService.ɵfac = function AnalysisTypeService_Factory(t) { return new (t || AnalysisTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
AnalysisTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnalysisTypeService, factory: AnalysisTypeService.ɵfac });


/***/ }),

/***/ 5013:
/*!************************************************************************************!*\
  !*** ./src/app/shared/services/analysis-management/test-type/test-type.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestTypeService": () => (/* binding */ TestTypeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);



/**
 * TestType Service
 */
class TestTypeService {
    constructor(http) {
        this.http = http;
        this.path = `v1/analysis-management/test-types`;
    }
    /**
     * Get Test types
     */
    getTestTypes(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
}
TestTypeService.ɵfac = function TestTypeService_Factory(t) { return new (t || TestTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TestTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TestTypeService, factory: TestTypeService.ɵfac });


/***/ })

}]);