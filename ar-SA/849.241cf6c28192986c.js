"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[849],{

/***/ 6164:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/types/email-type.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailType": () => (/* binding */ EmailType)
/* harmony export */ });
/**
 * EmailType
 */
var EmailType;
(function (EmailType) {
    EmailType["Private"] = "Private";
    EmailType["Public"] = "Public";
    EmailType["Work"] = "Work";
})(EmailType || (EmailType = {}));


/***/ }),

/***/ 8518:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/types/phone-type.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneType": () => (/* binding */ PhoneType)
/* harmony export */ });
/**
 * PhoneType
 */
var PhoneType;
(function (PhoneType) {
    PhoneType["Home"] = "Home";
    PhoneType["Mobile"] = "Mobile";
    PhoneType["Work"] = "Work";
})(PhoneType || (PhoneType = {}));


/***/ }),

/***/ 7053:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/type-i18n/components/email-type-i18n.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTypeI18nComponent": () => (/* binding */ EmailTypeI18nComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_types_email_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/types/email-type.model */ 6164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);



function EmailTypeI18nComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function EmailTypeI18nComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function EmailTypeI18nComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function EmailTypeI18nComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class EmailTypeI18nComponent {
    constructor() {
        this.type = src_app_shared_models_types_email_type_model__WEBPACK_IMPORTED_MODULE_0__.EmailType;
    }
}
EmailTypeI18nComponent.ɵfac = function EmailTypeI18nComponent_Factory(t) { return new (t || EmailTypeI18nComponent)(); };
EmailTypeI18nComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmailTypeI18nComponent, selectors: [["app-email-type-i18n"]], inputs: { key: "key" }, decls: 5, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3686284950598311784$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__1 = goog.getMsg("Private");
        i18n_0 = MSG_EXTERNAL_3686284950598311784$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "\u062E\u0627\u0635";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5491084532551383168$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__3 = goog.getMsg("Work");
        i18n_2 = MSG_EXTERNAL_5491084532551383168$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "\u0627\u0644\u0639\u0645\u0644";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8928816882866356838$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__5 = goog.getMsg("Public");
        i18n_4 = MSG_EXTERNAL_8928816882866356838$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "\u0639\u0627\u0645";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2707675880949743108$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__7 = goog.getMsg("Not Defined");
        i18n_6 = MSG_EXTERNAL_2707675880949743108$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_EMAIL_TYPE_I18N_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
    } return [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], i18n_0, i18n_2, i18n_4, i18n_6]; }, template: function EmailTypeI18nComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmailTypeI18nComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmailTypeI18nComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmailTypeI18nComponent_ng_container_3_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmailTypeI18nComponent_ng_container_4_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.type.Private);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.type.Work);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.type.Public);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault], encapsulation: 2 });


/***/ }),

/***/ 2121:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/type-i18n/components/phone-type-i18n.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneTypeI18nComponent": () => (/* binding */ PhoneTypeI18nComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_types_phone_type_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/types/phone-type.model */ 8518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);



function PhoneTypeI18nComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function PhoneTypeI18nComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function PhoneTypeI18nComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function PhoneTypeI18nComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class PhoneTypeI18nComponent {
    constructor() {
        this.type = src_app_shared_models_types_phone_type_model__WEBPACK_IMPORTED_MODULE_0__.PhoneType;
    }
}
PhoneTypeI18nComponent.ɵfac = function PhoneTypeI18nComponent_Factory(t) { return new (t || PhoneTypeI18nComponent)(); };
PhoneTypeI18nComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhoneTypeI18nComponent, selectors: [["app-phone-type-i18n"]], inputs: { key: "key" }, decls: 5, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2821179408673282599$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__1 = goog.getMsg("Home");
        i18n_0 = MSG_EXTERNAL_2821179408673282599$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "\u0627\u0644\u0645\u0646\u0632\u0644";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5491084532551383168$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__3 = goog.getMsg("Work");
        i18n_2 = MSG_EXTERNAL_5491084532551383168$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__3;
    }
    else {
        i18n_2 = "\u0627\u0644\u0639\u0645\u0644";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1002165214775409029$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__5 = goog.getMsg("Mobile");
        i18n_4 = MSG_EXTERNAL_1002165214775409029$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__5;
    }
    else {
        i18n_4 = "\u0627\u0644\u062C\u0648\u0627\u0644";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2707675880949743108$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__7 = goog.getMsg("Not Defined");
        i18n_6 = MSG_EXTERNAL_2707675880949743108$$SRC_APP_SHARED_MODULES_TYPE_I18N_COMPONENTS_PHONE_TYPE_I18N_COMPONENT_TS__7;
    }
    else {
        i18n_6 = "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
    } return [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], i18n_0, i18n_2, i18n_4, i18n_6]; }, template: function PhoneTypeI18nComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PhoneTypeI18nComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PhoneTypeI18nComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PhoneTypeI18nComponent_ng_container_3_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PhoneTypeI18nComponent_ng_container_4_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.type.Home);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.type.Work);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.type.Mobile);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault], encapsulation: 2 });


/***/ }),

/***/ 6849:
/*!**************************************************************!*\
  !*** ./src/app/shared/modules/type-i18n/type-i18n.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeI18nModule": () => (/* binding */ TypeI18nModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _components_email_type_i18n_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/email-type-i18n.component */ 7053);
/* harmony import */ var _components_phone_type_i18n_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/phone-type-i18n.component */ 2121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);




class TypeI18nModule {
}
TypeI18nModule.ɵfac = function TypeI18nModule_Factory(t) { return new (t || TypeI18nModule)(); };
TypeI18nModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TypeI18nModule });
TypeI18nModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TypeI18nModule, { declarations: [_components_phone_type_i18n_component__WEBPACK_IMPORTED_MODULE_1__.PhoneTypeI18nComponent, _components_email_type_i18n_component__WEBPACK_IMPORTED_MODULE_0__.EmailTypeI18nComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_components_phone_type_i18n_component__WEBPACK_IMPORTED_MODULE_1__.PhoneTypeI18nComponent, _components_email_type_i18n_component__WEBPACK_IMPORTED_MODULE_0__.EmailTypeI18nComponent] }); })();


/***/ })

}]);