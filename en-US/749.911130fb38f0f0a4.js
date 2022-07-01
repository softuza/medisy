"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[749],{

/***/ 3273:
/*!*****************************************************************!*\
  !*** ./src/app/modules/static/not-found/not-found.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

class NotFoundComponent {
    constructor() { }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 10, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7176702263085965201$$SRC_APP_MODULES_STATIC_NOT_FOUND_NOT_FOUND_COMPONENT_TS_1 = goog.getMsg(" Sorry we couldn't find this page. ");
        i18n_0 = MSG_EXTERNAL_7176702263085965201$$SRC_APP_MODULES_STATIC_NOT_FOUND_NOT_FOUND_COMPONENT_TS_1;
    }
    else {
        i18n_0 = " Sorry we couldn't find this page. ";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4675046288682535799$$SRC_APP_MODULES_STATIC_NOT_FOUND_NOT_FOUND_COMPONENT_TS_3 = goog.getMsg(" But don't worry, you can find plenty of other things on our homepage. ");
        i18n_2 = MSG_EXTERNAL_4675046288682535799$$SRC_APP_MODULES_STATIC_NOT_FOUND_NOT_FOUND_COMPONENT_TS_3;
    }
    else {
        i18n_2 = " But don't worry, you can find plenty of other things on our homepage. ";
    } return [[1, "tailwind-h-screen", "w-screen", "tailwind-bg-gray-100", "tailwind-flex", "tailwind-items-center"], [1, "tailwind-container", "tailwind-flex", "tailwind-flex-col", "tailwind-md:flex-row", "tailwind-items-center", "tailwind-justify-center", "tailwind-px-5", "tailwind-text-gray-700"], [1, "tailwind-max-w-md", "tailwind-left-jump"], [1, "tailwind-text-5xl", "tailwind-font-dark", "tailwind-font-bold"], [1, "tailwind-text-2xl", "tailwind-md:text-3xl", "tailwind-font-light", "tailwind-leading-normal"], i18n_0, [1, "tailwind-mb-8"], i18n_2, [1, "tailwind-max-w-lg"]]; }, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["[_nghost-%COMP%] {\n  background: #fafafa;\n}\n\n.not-found-header[_ngcontent-%COMP%] {\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-rendering: optimizeLegibility;\n  font-size: 128px;\n}\n\n.not-found-message[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.not-found-link[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.left-jump[_ngcontent-%COMP%] {\n  margin: 2%;\n}"] });


/***/ }),

/***/ 9749:
/*!**************************************************************!*\
  !*** ./src/app/modules/static/not-found/not-found.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundModule": () => (/* binding */ NotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ 3273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);





class NotFoundModule {
}
NotFoundModule.ɵfac = function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); };
NotFoundModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotFoundModule });
NotFoundModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([{ path: "", component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent }])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);