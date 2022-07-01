"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[908],{

/***/ 8190:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sample-management/samples/components/filter/filter.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/dialog.component */ 3869);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4850);
/* harmony import */ var src_app_shared_services_sample_management_sample_type_sample_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/sample-management/sample-type/sample-type.service */ 7963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 7093);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 7322);
/* harmony import */ var _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/modules/alert/components/alert/alert.component */ 5006);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 4107);















function FilterComponent_app_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-alert", 10);
} if (rf & 2) {
    const alert_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alert", alert_r2);
} }
function FilterComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);
} }
class FilterComponent extends src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent {
    /**
     * Constructor
     * @param fb
     * @param dialog
     * @param data
     */
    constructor(fb, dialog, sampleTypeService, data) {
        super(dialog, fb.group({
            sampleTypeId: [data.sampleTypeId],
        }));
        this.fb = fb;
        this.dialog = dialog;
        this.sampleTypeService = sampleTypeService;
        this.data = data;
        this.sampleTypes$ = null;
        this.getSampleTypes();
    }
    /**
     * Get sample types
     */
    getSampleTypes() {
        this.sampleTypes$ = this.sampleTypeService
            .getSampleTypes({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((x) => x.items));
    }
    /**
     * Submit
     */
    handleSubmit() {
        this.close(this.form.value);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_sample_management_sample_type_sample_type_service__WEBPACK_IMPORTED_MODULE_1__.SampleTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-laboratory-management-samples-filter"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([src_app_shared_services_sample_management_sample_type_sample_type_service__WEBPACK_IMPORTED_MODULE_1__.SampleTypeService]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 10, consts: [["mat-dialog-title", ""], [3, "alert", 4, "ngIf"], [3, "formGroup"], ["fxLayout", "row", "fxLayout.lt-md", "column wrap", "fxLayoutGap", "8px"], ["fxFlex", "1 1 100%"], ["formControlName", "sampleTypeId", "placeholder", "\u0646\u0648\u0639 \u0627\u0644\u0639\u064A\u0646\u0629"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mat-dialog-actions-end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "alert"], [3, "value"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FilterComponent_app_alert_2_Template, 1, 1, "app-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 2)(6, "div", 3)(7, "mat-form-field", 4)(8, "mat-select", 5)(9, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FilterComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-dialog-actions", 7)(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_14_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " \u062D\u0641\u0638 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, ctx.alert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 6, ctx.sampleTypes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 8, ctx.indicator$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 6085:
/*!************************************************************************!*\
  !*** ./src/app/modules/sample-management/samples/samples.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplesComponent": () => (/* binding */ SamplesComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/operators/operators */ 5701);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2986);
/* harmony import */ var src_app_shared_components_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/table.component */ 675);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter/filter.component */ 8190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var src_app_shared_services_sample_management_samples_samples_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/sample-management/samples/samples.service */ 8636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 8279);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 6087);
/* harmony import */ var _shared_modules_table_components_selection_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/modules/table/components/selection/selection.component */ 9779);
/* harmony import */ var _shared_modules_table_components_state_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/table/components/state/state.component */ 9293);
/* harmony import */ var _shared_modules_search_bar_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/search-bar/components/search-bar/search-bar.component */ 3998);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7446);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 4847);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ 7544);



















function SamplesComponent_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 22)(1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SamplesComponent_mat_header_cell_18_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event ? ctx_r13.masterToggle() : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected());
} }
function SamplesComponent_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 22)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplesComponent_mat_cell_19_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function SamplesComponent_mat_cell_19_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const row_r15 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event ? ctx_r17.selection.toggle(row_r15) : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r15));
} }
function SamplesComponent_mat_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell")(1, "div")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", ctx_r2.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@detailExpand", element_r19 === ctx_r2.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r19.description, " ");
} }
function SamplesComponent_mat_header_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SamplesComponent_mat_cell_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r20.id, " ");
} }
function SamplesComponent_mat_header_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " \u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SamplesComponent_mat_cell_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell")(1, "div", 26)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r21.name, " ");
} }
function SamplesComponent_mat_header_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-cell", 22);
} }
function SamplesComponent_mat_cell_30_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplesComponent_mat_cell_30_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const element_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.expandedElement = ctx_r25.expandedElement === element_r22 ? null : element_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r23.expandedElement === element_r22 ? "expand_less" : "expand_more");
} }
function SamplesComponent_mat_cell_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SamplesComponent_mat_cell_30_button_1_Template, 3, 1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 29)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-menu", null, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r24);
} }
function SamplesComponent_mat_header_row_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-header-row");
} }
function SamplesComponent_mat_row_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-row");
} }
function SamplesComponent_app_table_state_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-table-state", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, ctx_r11.indicator$));
} }
const _c0 = function () { return [10, 25, 50, 100]; };
function SamplesComponent_mat_paginator_34_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-paginator", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function SamplesComponent_mat_paginator_34_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.onPageChange($event.pageIndex, $event.pageSize)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx_r12.count)("pageSize", ctx_r12.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0));
} }
class SamplesComponent extends src_app_shared_components_table_component__WEBPACK_IMPORTED_MODULE_1__.TableComponent {
    /**
     * Constructor
     * @param dialog
     * @param sampleService
     */
    constructor(dialog, sampleService) {
        super();
        this.dialog = dialog;
        this.sampleService = sampleService;
        this.displayedColumns = ["menu"];
        this.filter = {};
        this.get();
    }
    /**
     * Open filter component
     */
    openFilterComponent() {
        const ref = this.dialog.open(_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__.FilterComponent, {
            autoFocus: true,
            width: "480px",
            data: this.filter,
        });
        ref
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe((filter) => {
            if (filter) {
                this.filter = filter;
                this.get();
            }
        });
    }
    /**
     * Get
     */
    get() {
        const input = {
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            sortBy: this.sortBy,
            sortDescending: this.sortDescending,
        };
        if (this.filter.sampleTypeId) {
            input.sampleTypeId = this.filter.sampleTypeId;
        }
        this.sampleService
            .getSamples(input)
            .pipe((0,src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_0__.indicate)(this.indicator$))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe((res) => {
            this.set(res.count, res.items);
        });
    }
}
SamplesComponent.ɵfac = function SamplesComponent_Factory(t) { return new (t || SamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_sample_management_samples_samples_service__WEBPACK_IMPORTED_MODULE_3__.SampleService)); };
SamplesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SamplesComponent, selectors: [["app-sample-management-samples"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 11, consts: [[1, "header-basic"], [1, "title"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "matBadgeSize", "small", 3, "matBadge", "click"], [3, "visible", "changed", "closed"], [3, "visible"], ["multiTemplateDataRows", "", "matSort", "", "matSortDisableClear", "", "matSortDirection", "desc", 3, "dataSource", "matSortActive", "matSortChange"], ["matColumnDef", "select"], ["class", "table-column-small", 4, "matHeaderCellDef"], ["class", "table-column-small", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], [4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "name"], ["matColumnDef", "menu"], ["class", "table-column-small table-column-end", 4, "matCellDef"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [3, "loading", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "table-column-small"], [3, "checked", "indeterminate", "change"], [3, "checked", "click", "change"], ["mat-sort-header", ""], [1, "table-cell-stacked"], [1, "table-column-small", "table-column-end"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["itemMenu", "matMenu"], [3, "loading"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function SamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u0627\u0644\u0639\u064A\u0646\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplesComponent_Template_button_click_5_listener() { return ctx.search = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplesComponent_Template_button_click_8_listener() { return ctx.openFilterComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "app-search-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changed", function SamplesComponent_Template_app_search_bar_changed_11_listener($event) { return ctx.onSearch($event); })("closed", function SamplesComponent_Template_app_search_bar_closed_11_listener() { return ctx.onSearchClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "app-table-selection", 6)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("matSortChange", function SamplesComponent_Template_mat_table_matSortChange_16_listener($event) { return ctx.onSort($event.active, $event.direction); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SamplesComponent_mat_header_cell_18_Template, 2, 2, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, SamplesComponent_mat_cell_19_Template, 2, 1, "mat-cell", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SamplesComponent_mat_cell_21_Template, 4, 3, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, SamplesComponent_mat_header_cell_23_Template, 2, 0, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, SamplesComponent_mat_cell_24_Template, 2, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, SamplesComponent_mat_header_cell_26_Template, 2, 0, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, SamplesComponent_mat_cell_27_Template, 5, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, SamplesComponent_mat_header_cell_29_Template, 1, 0, "mat-header-cell", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, SamplesComponent_mat_cell_30_Template, 7, 2, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, SamplesComponent_mat_header_row_31_Template, 1, 0, "mat-header-row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, SamplesComponent_mat_row_32_Template, 1, 0, "mat-row", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, SamplesComponent_app_table_state_33_Template, 2, 3, "app-table-state", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, SamplesComponent_mat_paginator_34_Template, 1, 4, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matBadge", ctx.getFilterCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.selection.selected.length, " selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matSortActive", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.count === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.count > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _shared_modules_table_components_selection_selection_component__WEBPACK_IMPORTED_MODULE_4__.TableSelectionComponent, _shared_modules_table_components_state_state_component__WEBPACK_IMPORTED_MODULE_5__.TableStateComponent, _shared_modules_search_bar_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_6__.SearchBarComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".test[_ngcontent-%COMP%] {\n  width: 400px;\n}"] });


/***/ }),

/***/ 7908:
/*!*********************************************************************!*\
  !*** ./src/app/modules/sample-management/samples/samples.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplesModule": () => (/* binding */ SamplesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 3626);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8833);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 5245);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 7423);
/* harmony import */ var src_app_shared_modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modules/alert/alert.module */ 6114);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 8966);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 1079);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 8279);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 6087);
/* harmony import */ var src_app_shared_modules_table_table_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/table/table.module */ 1575);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7446);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 4107);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ 5615);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 2181);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 7238);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 4623);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 4847);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 1729);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 773);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 9224);
/* harmony import */ var _samples_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./samples.routing.module */ 4603);
/* harmony import */ var _samples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./samples.component */ 6085);
/* harmony import */ var src_app_shared_services_sample_management_samples_samples_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/sample-management/samples/samples.service */ 8636);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/filter/filter.component */ 8190);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ 7544);
/* harmony import */ var src_app_shared_modules_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/search-bar/search-bar.module */ 6368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);





























class SamplesModule {
}
SamplesModule.ɵfac = function SamplesModule_Factory(t) { return new (t || SamplesModule)(); };
SamplesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SamplesModule });
SamplesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [src_app_shared_services_sample_management_samples_samples_service__WEBPACK_IMPORTED_MODULE_4__.SampleService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _samples_routing_module__WEBPACK_IMPORTED_MODULE_2__.SamplesRoutingModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        src_app_shared_modules_table_table_module__WEBPACK_IMPORTED_MODULE_1__.TableModule,
        src_app_shared_modules_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__.SearchBarModule,
        src_app_shared_modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadgeModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SamplesModule, { declarations: [_samples_component__WEBPACK_IMPORTED_MODULE_3__.SamplesComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_5__.FilterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _samples_routing_module__WEBPACK_IMPORTED_MODULE_2__.SamplesRoutingModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        src_app_shared_modules_table_table_module__WEBPACK_IMPORTED_MODULE_1__.TableModule,
        src_app_shared_modules_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_6__.SearchBarModule,
        src_app_shared_modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadgeModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 4603:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/sample-management/samples/samples.routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplesRoutingModule": () => (/* binding */ SamplesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _samples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples.component */ 6085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);




const routes = [{ path: "", component: _samples_component__WEBPACK_IMPORTED_MODULE_0__.SamplesComponent }];
class SamplesRoutingModule {
}
SamplesRoutingModule.ɵfac = function SamplesRoutingModule_Factory(t) { return new (t || SamplesRoutingModule)(); };
SamplesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SamplesRoutingModule });
SamplesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SamplesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7963:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/sample-management/sample-type/sample-type.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleTypeService": () => (/* binding */ SampleTypeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);



/**
 * SampleType Service
 */
class SampleTypeService {
    constructor(http) {
        this.http = http;
        this.path = `v1/sample-management/sample-Types`;
    }
    /**
     * Get SampleTypes
     */
    getSampleTypes(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
}
SampleTypeService.ɵfac = function SampleTypeService_Factory(t) { return new (t || SampleTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SampleTypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SampleTypeService, factory: SampleTypeService.ɵfac });


/***/ }),

/***/ 8636:
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/sample-management/samples/samples.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleService": () => (/* binding */ SampleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);



/**
 * Anlysis Service
 */
class SampleService {
    constructor(http) {
        this.http = http;
        this.path = `v1/sample-management/samples`;
    }
    /**
     * Get samples
     */
    getSamples(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
    /**
     * Get samples count
     */
    getSamplesCount(input) {
        return this.http.get(`${this.path}/count`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
    /**
     * Get Sample
     */
    getSample(SampleId) {
        return this.http.get(`${this.path}/${SampleId}`);
    }
    /**
     * Create Sample
     */
    createSample(input) {
        return this.http.post(`${this.path}`, input);
    }
}
SampleService.ɵfac = function SampleService_Factory(t) { return new (t || SampleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SampleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SampleService, factory: SampleService.ɵfac });


/***/ })

}]);