"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_modules_laboratory-management_value-references_value-references_module_ts"],{

/***/ 3411:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/laboratory-management/value-references/components/create/create.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/dialog.component */ 3869);
/* harmony import */ var src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/operators/operators */ 5701);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var src_app_shared_services_analysis_management_test_type_test_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/analysis-management/test-type/test-type.service */ 5013);
/* harmony import */ var src_app_shared_services_laboratory_management_age_group_age_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/laboratory-management/age-group/age-group.service */ 3851);
/* harmony import */ var src_app_shared_services_common_types_data_unit_data_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/common-types/data-unit/data-unit.service */ 8352);
/* harmony import */ var src_app_shared_models_types_comparison_operator_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/types/comparison-operator.model */ 8604);
/* harmony import */ var src_app_shared_models_types_sex_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/types/sex.model */ 3734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/laboratory-management/laboratory-value-reference/laboratory-value-reference.service */ 8180);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/modules/alert/components/alert/alert.component */ 5006);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 1434);
























function CreateComponent_app_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-alert", 17);
} if (rf & 2) {
    const alert_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("alert", alert_r8);
} }
function CreateComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r9);
} }
function CreateComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "mat-form-field", 4)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-form-field", 4)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} }
function CreateComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6)(1, "mat-form-field", 4)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} }
function CreateComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r10.name);
} }
function CreateComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r11.name);
} }
function CreateComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r12);
} }
function CreateComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r13.name);
} }
class CreateComponent extends src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent {
    /**
     * Constructor
     * @param laboratoryValueReferenceService
     * @param testTypeService
     * @param ageGroupService
     * @param dataUnitService
     * @param fb
     * @param dialog
     */
    constructor(laboratoryValueReferenceService, testTypeService, ageGroupService, dataUnitService, fb, dialog) {
        super(dialog, fb.group({
            description: [null, []],
            testTypeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            comparisonOperator: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            sex: [null, []],
            ageGroupId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            dataUnit: [null, []],
            value: [null, []],
            start: [null, []],
            end: [null, []],
        }));
        this.laboratoryValueReferenceService = laboratoryValueReferenceService;
        this.testTypeService = testTypeService;
        this.ageGroupService = ageGroupService;
        this.dataUnitService = dataUnitService;
        this.fb = fb;
        this.dialog = dialog;
        this.testTypes$ = null;
        this.sexes = [];
        this.comparisonOperators = [];
        this.ageGroups$ = null;
        this.dataUnits$ = null;
        this.getTestTypes();
        this.getAgeGroups();
        this.getDataUnits();
        this.sexes = Object.values(src_app_shared_models_types_sex_model__WEBPACK_IMPORTED_MODULE_6__.Sex);
        this.comparisonOperators = Object.values(src_app_shared_models_types_comparison_operator_model__WEBPACK_IMPORTED_MODULE_5__.ComparisonOperator);
    }
    /**
     * Get test types
     */
    getTestTypes() {
        this.testTypes$ = this.testTypeService
            .getTestTypes({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((x) => x.items));
    }
    /**
     * Get data units
     */
    getDataUnits() {
        this.dataUnits$ = this.dataUnitService
            .getDataUnites({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((x) => x.items));
    }
    /**
     * Get age groups
     */
    getAgeGroups() {
        this.ageGroups$ = this.ageGroupService
            .getAgeGroups({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((x) => x.items));
    }
    /**
     * Is range
     * @returns
     */
    isRange() {
        var _a, _b;
        return (((_a = this.form.value.valueOperation) === null || _a === void 0 ? void 0 : _a.code) === "<>" ||
            ((_b = this.form.value.valueOperation) === null || _b === void 0 ? void 0 : _b.code) == "<==>");
    }
    /**
     * Submit
     */
    handleSubmit() {
        var _a;
        const value = this.form.value;
        this.laboratoryValueReferenceService
            .createValueReference({
            description: value.description,
            testTypeId: value.testTypeId,
            comparisonOperator: value.comparisonOperator,
            ageGroupId: value.ageGroupId,
            dataUnitId: (_a = value.dataUnit) === null || _a === void 0 ? void 0 : _a.id,
            sex: value.sex,
            start: value.start,
            end: value.end,
            value: value.value,
        })
            .pipe((0,src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_1__.indicate)(this.indicator$))
            .pipe((0,src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_1__.handleError)(this.alert$))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1))
            .subscribe((res) => {
            this.close(res);
        });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_7__.LaboratoryValueReferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_analysis_management_test_type_test_type_service__WEBPACK_IMPORTED_MODULE_2__.TestTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_laboratory_management_age_group_age_group_service__WEBPACK_IMPORTED_MODULE_3__.AgeGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_common_types_data_unit_data_unit_service__WEBPACK_IMPORTED_MODULE_4__.DataUnitService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef)); };
CreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-laboratory-management-value-references-create"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([src_app_shared_services_analysis_management_test_type_test_type_service__WEBPACK_IMPORTED_MODULE_2__.TestTypeService, src_app_shared_services_laboratory_management_age_group_age_group_service__WEBPACK_IMPORTED_MODULE_3__.AgeGroupService, src_app_shared_services_common_types_data_unit_data_unit_service__WEBPACK_IMPORTED_MODULE_4__.DataUnitService]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 42, vars: 20, consts: [["mat-dialog-title", ""], [3, "alert", 4, "ngIf"], [3, "formGroup"], ["fxLayout", "row"], ["fxFlex", "1 1 100%"], ["autocomplete", "off", "formControlName", "description", "matInput", "", "placeholder", "\u0627\u0644\u0648\u0635\u0641"], ["fxLayout", "row", "fxLayout.lt-md", "column wrap", "fxLayoutGap", "8px"], ["formControlName", "comparisonOperator", "placeholder", "\u0627\u0644\u0639\u0645\u0644\u064A\u0629"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.lt-md", "column wrap", "fxLayoutGap", "8px", 4, "ngIf"], ["formControlName", "dataUnit", "placeholder", "\u0627\u0644\u0648\u062D\u062F\u0629"], ["formControlName", "testTypeId", "placeholder", "\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631"], ["formControlName", "sexId", "placeholder", "\u0627\u0644\u062C\u0646\u0633"], ["formControlName", "ageGroupId", "placeholder", "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064A\u0629"], [1, "mat-dialog-actions-end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "alert"], [3, "value"], ["autocomplete", "off", "formControlName", "start", "matInput", "", "placeholder", "\u0627\u0644\u0628\u062F\u0627\u064A\u0629"], ["autocomplete", "off", "formControlName", "end", "matInput", "", "placeholder", "\u0627\u0644\u0646\u0647\u0627\u064A\u0629"], ["autocomplete", "off", "formControlName", "value", "matInput", "", "placeholder", "\u0627\u0644\u0642\u064A\u0645\u0629"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u0625\u0646\u0634\u0627\u0621");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CreateComponent_app_alert_2_Template, 1, 1, "app-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 2)(6, "div", 3)(7, "mat-form-field", 4)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 6)(11, "mat-form-field", 4)(12, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, CreateComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, CreateComponent_div_14_Template, 7, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CreateComponent_div_15_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 6)(17, "mat-form-field", 4)(18, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, CreateComponent_mat_option_19_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 6)(22, "mat-form-field", 4)(23, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, CreateComponent_mat_option_24_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 6)(27, "mat-form-field", 4)(28, "mat-select", 12)(29, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, CreateComponent_mat_option_31_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "mat-form-field", 4)(33, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, CreateComponent_mat_option_34_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "mat-dialog-actions", 14)(37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_37_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_39_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, " \u062D\u0641\u0638 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 10, ctx.alert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.comparisonOperators);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isRange());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isRange());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 12, ctx.dataUnits$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](25, 14, ctx.testTypes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.sexes);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](35, 16, ctx.ageGroups$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 18, ctx.indicator$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__.AlertComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 4841:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/laboratory-management/value-references/components/filter/filter.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/dialog.component */ 3869);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_shared_services_analysis_management_test_type_test_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/analysis-management/test-type/test-type.service */ 5013);
/* harmony import */ var src_app_shared_services_laboratory_management_age_group_age_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/laboratory-management/age-group/age-group.service */ 3851);
/* harmony import */ var src_app_shared_services_common_types_data_unit_data_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/common-types/data-unit/data-unit.service */ 8352);
/* harmony import */ var src_app_shared_models_types_comparison_operator_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/types/comparison-operator.model */ 8604);
/* harmony import */ var src_app_shared_models_types_sex_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/types/sex.model */ 3734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/modules/alert/components/alert/alert.component */ 5006);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 1434);





















function FilterComponent_app_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-alert", 15);
} if (rf & 2) {
    const alert_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("alert", alert_r6);
} }
function FilterComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r7);
} }
function FilterComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r8.name);
} }
function FilterComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9.name);
} }
function FilterComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r10);
} }
function FilterComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r11.name);
} }
class FilterComponent extends src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent {
    /**
     * Constructor
     * @param testTypeService
     * @param ageGroupService
     * @param dataUnitService
     * @param fb
     * @param dialog
     * @param data
     */
    constructor(testTypeService, ageGroupService, dataUnitService, fb, dialog, data) {
        super(dialog, fb.group({
            ageGroupId: [data.ageGroupId],
            testTypeId: [data.testTypeId],
            comparisonOperator: [data.comparisonOperator],
            sex: [data.sex],
            dataUnitId: [data.dataUnitId],
        }));
        this.testTypeService = testTypeService;
        this.ageGroupService = ageGroupService;
        this.dataUnitService = dataUnitService;
        this.fb = fb;
        this.dialog = dialog;
        this.data = data;
        this.testTypes$ = null;
        this.sexes = [];
        this.comparisonOperators = [];
        this.ageGroups$ = null;
        this.dataUnits$ = null;
        this.getTestTypes();
        this.getAgeGroups();
        this.getDataUnits();
        this.sexes = Object.values(src_app_shared_models_types_sex_model__WEBPACK_IMPORTED_MODULE_5__.Sex);
        this.comparisonOperators = Object.values(src_app_shared_models_types_comparison_operator_model__WEBPACK_IMPORTED_MODULE_4__.ComparisonOperator);
    }
    /**
     * Get test types
     */
    getTestTypes() {
        this.testTypes$ = this.testTypeService
            .getTestTypes({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((x) => x.items));
    }
    /**
     * Get data units
     */
    getDataUnits() {
        this.dataUnits$ = this.dataUnitService
            .getDataUnites({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((x) => x.items));
    }
    /**
     * Get age groups
     */
    getAgeGroups() {
        this.ageGroups$ = this.ageGroupService
            .getAgeGroups({
            pageIndex: 1,
            pageSize: 50,
            sortBy: "Name",
            sortDescending: false,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((x) => x.items));
    }
    /**
     * Submit
     */
    handleSubmit() {
        this.close(this.form.value);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_analysis_management_test_type_test_type_service__WEBPACK_IMPORTED_MODULE_1__.TestTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_laboratory_management_age_group_age_group_service__WEBPACK_IMPORTED_MODULE_2__.AgeGroupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_common_types_data_unit_data_unit_service__WEBPACK_IMPORTED_MODULE_3__.DataUnitService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA)); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-laboratory-management-value-references-filter"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_shared_services_analysis_management_test_type_test_type_service__WEBPACK_IMPORTED_MODULE_1__.TestTypeService, src_app_shared_services_laboratory_management_age_group_age_group_service__WEBPACK_IMPORTED_MODULE_2__.AgeGroupService, src_app_shared_services_common_types_data_unit_data_unit_service__WEBPACK_IMPORTED_MODULE_3__.DataUnitService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 48, vars: 18, consts: [["mat-dialog-title", ""], [3, "alert", 4, "ngIf"], [3, "formGroup"], ["fxLayout", "row", "fxLayout.lt-md", "column wrap", "fxLayoutGap", "8px"], ["fxFlex", "1 1 100%"], ["formControlName", "comparisonOperator", "placeholder", "\u0627\u0644\u0639\u0645\u0644\u064A\u0629"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "dataUnitId", "placeholder", "\u0627\u0644\u0648\u062D\u062F\u0629"], ["formControlName", "testTypeId", "placeholder", "\u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631"], ["formControlName", "sex", "placeholder", "\u0627\u0644\u062C\u0646\u0633"], ["formControlName", "ageGroupId", "placeholder", "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064A\u0629"], [1, "mat-dialog-actions-start"], ["mat-button", "", 3, "click"], [1, "mat-dialog-actions-end"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "alert"], [3, "value"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0646\u062A\u0627\u0626\u062C");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FilterComponent_app_alert_2_Template, 1, 1, "app-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-dialog-content")(5, "form", 2)(6, "div", 3)(7, "mat-form-field", 4)(8, "mat-select", 5)(9, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, FilterComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 3)(13, "mat-form-field", 4)(14, "mat-select", 7)(15, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, FilterComponent_mat_option_17_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 3)(20, "mat-form-field", 4)(21, "mat-select", 8)(22, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, FilterComponent_mat_option_24_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 3)(27, "mat-form-field", 4)(28, "mat-select", 9)(29, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, FilterComponent_mat_option_31_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-form-field", 4)(33, "mat-select", 10)(34, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, FilterComponent_mat_option_36_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-dialog-actions")(39, "div", 11)(40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_40_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "\u0627\u0639\u0627\u062F\u0629 \u0636\u0628\u0637");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 13)(43, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_43_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_45_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " \u062D\u0641\u0638 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 8, ctx.alert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.comparisonOperators);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 10, ctx.dataUnits$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 12, ctx.testTypes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sexes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 14, ctx.ageGroups$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 16, ctx.indicator$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 5276:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/laboratory-management/value-references/components/value-reference/delete/value-reference-delete.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueReferenceDeleteComponent": () => (/* binding */ ValueReferenceDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/dialog.component */ 3869);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/operators/operators */ 5701);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/laboratory-management/laboratory-value-reference/laboratory-value-reference.service */ 8180);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/modules/alert/components/alert/alert.component */ 5006);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);











function ValueReferenceDeleteComponent_app_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-alert", 9);
} if (rf & 2) {
    const alert_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alert", alert_r1);
} }
class ValueReferenceDeleteComponent extends src_app_shared_components_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent {
    /**
     * Constructor
     * @param laboratoryValueReferenceService
     * @param dialog
     * @param data
     */
    constructor(laboratoryValueReferenceService, dialog, data) {
        super(dialog, new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({}));
        this.laboratoryValueReferenceService = laboratoryValueReferenceService;
        this.dialog = dialog;
        this.data = data;
    }
    /**
     * Submit
     */
    handleSubmit() {
        this.laboratoryValueReferenceService
            .deleteValueReference(this.data)
            .pipe((0,src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_1__.indicate)(this.indicator$))
            .pipe((0,src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_1__.handleError)(this.alert$))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1))
            .subscribe(() => {
            this.close(this.data);
        });
    }
}
ValueReferenceDeleteComponent.ɵfac = function ValueReferenceDeleteComponent_Factory(t) { return new (t || ValueReferenceDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_2__.LaboratoryValueReferenceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
ValueReferenceDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ValueReferenceDeleteComponent, selectors: [["app-laboratory-management-value-references-value-reference-delete"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7022070615528435141$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_1 = goog.getMsg("Delete");
        i18n_0 = MSG_EXTERNAL_7022070615528435141$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = "\u062D\u0630\u0641";
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1166238864271425802$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_3 = goog.getMsg("Are you sure to delete the selected element?");
        i18n_2 = MSG_EXTERNAL_1166238864271425802$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = "\u0647\u0644 \u0627\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0635\u0631\u061F";
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7819314041543176992$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_5 = goog.getMsg("Close");
        i18n_4 = MSG_EXTERNAL_7819314041543176992$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = "\u0625\u063A\u0644\u0627\u0642";
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2930698867249592931$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_7 = goog.getMsg(" Delete ");
        i18n_6 = MSG_EXTERNAL_2930698867249592931$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_COMPONENTS_VALUE_REFERENCE_DELETE_VALUE_REFERENCE_DELETE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = "\u062D\u0630\u0641";
    } return [["mat-dialog-title", ""], i18n_0, [3, "alert", 4, "ngIf"], i18n_2, [1, "mat-dialog-actions-end"], ["mat-button", "", 3, "click"], i18n_4, ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], i18n_6, [3, "alert"]]; }, template: function ValueReferenceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ValueReferenceDeleteComponent_app_alert_2_Template, 1, 1, "app-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-dialog-content")(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-dialog-actions", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ValueReferenceDeleteComponent_Template_button_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ValueReferenceDeleteComponent_Template_button_click_10_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx.alert$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 4, ctx.indicator$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _shared_modules_alert_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 7175:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/laboratory-management/value-references/value-references.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryValueReferencesComponent": () => (/* binding */ LaboratoryValueReferencesComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/operators/operators */ 5701);
/* harmony import */ var src_app_shared_components_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/table.component */ 675);
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/create.component */ 3411);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter/filter.component */ 4841);
/* harmony import */ var _components_value_reference_delete_value_reference_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/value-reference/delete/value-reference-delete.component */ 5276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/laboratory-management/laboratory-value-reference/laboratory-value-reference.service */ 8180);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _shared_modules_table_components_selection_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modules/table/components/selection/selection.component */ 9779);
/* harmony import */ var _shared_modules_table_components_state_state_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/modules/table/components/state/state.component */ 9293);
/* harmony import */ var _shared_modules_search_bar_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/search-bar/components/search-bar/search-bar.component */ 3998);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ 178);





















function LaboratoryValueReferencesComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 32)(1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function LaboratoryValueReferencesComponent_mat_header_cell_28_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event ? ctx_r26.masterToggle() : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
} }
function LaboratoryValueReferencesComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 32)(1, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LaboratoryValueReferencesComponent_mat_cell_29_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function LaboratoryValueReferencesComponent_mat_cell_29_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31); const row_r28 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event ? ctx_r30.selection.toggle(row_r28) : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r28));
} }
function LaboratoryValueReferencesComponent_mat_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell")(1, "div")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("colspan", ctx_r3.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@detailExpand", element_r32 === ctx_r3.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r32.description, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " #");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r33.id, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0627\u0644\u0648\u0635\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell")(1, "div", 36)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r34.description, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u0634\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 1, element_r35.createdAt, "medium"), " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0646\u0645\u0637 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r36.testType == null ? null : element_r36.testType.name, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0639\u0645\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r37.ageGroup == null ? null : element_r37.ageGroup.name, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r38.sex, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0627\u0644\u0648\u062D\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r39.dataUnit == null ? null : element_r39.dataUnit.name, " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " \u0627\u0644\u0642\u064A\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function LaboratoryValueReferencesComponent_mat_cell_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r19.displayValues(element_r40), " ");
} }
function LaboratoryValueReferencesComponent_mat_header_cell_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-cell", 32);
} }
function LaboratoryValueReferencesComponent_mat_cell_58_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-cell", 38)(1, "button", 5)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-menu", null, 39)(6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LaboratoryValueReferencesComponent_mat_cell_58_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44); const element_r41 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.openValueReferenceDeleteComponent(element_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u062D\u0630\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r42);
} }
function LaboratoryValueReferencesComponent_mat_header_row_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-header-row");
} }
function LaboratoryValueReferencesComponent_mat_row_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-row");
} }
function LaboratoryValueReferencesComponent_app_table_state_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-table-state", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 1, ctx_r24.indicator$));
} }
const _c2 = function () { return [10, 25, 50, 100]; };
function LaboratoryValueReferencesComponent_mat_paginator_62_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function LaboratoryValueReferencesComponent_mat_paginator_62_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.onPageChange($event.pageIndex, $event.pageSize)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", ctx_r25.count)("pageSize", ctx_r25.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c2));
} }
class LaboratoryValueReferencesComponent extends src_app_shared_components_table_component__WEBPACK_IMPORTED_MODULE_1__.TableComponent {
    /**
     * Constructor
     * @param dialog
     * @param laboratoryValueReferenceService
     */
    constructor(dialog, laboratoryValueReferenceService) {
        super();
        this.dialog = dialog;
        this.laboratoryValueReferenceService = laboratoryValueReferenceService;
        this.displayedColumns = [
            "TestType",
            "AgeGroup",
            "Sex",
            "DataUnit",
            "Data",
            "menu",
        ];
        this.filter = {};
        this.get();
    }
    /**
     * Open create component
     */
    openCreateComponent() {
        const ref = this.dialog.open(_components_create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent, {
            autoFocus: true,
            width: "480px",
        });
        ref
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))
            .subscribe((res) => {
            if (res) {
                this.add(res);
            }
        });
    }
    /**
     * Open filter component
     */
    openFilterComponent() {
        const ref = this.dialog.open(_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_3__.FilterComponent, {
            autoFocus: true,
            width: "480px",
            data: this.filter,
        });
        ref
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))
            .subscribe((filter) => {
            if (filter) {
                this.filter = filter;
                this.get();
            }
        });
    }
    /**
     * Open ValueReference delete component
     */
    openValueReferenceDeleteComponent(item) {
        const ref = this.dialog.open(_components_value_reference_delete_value_reference_delete_component__WEBPACK_IMPORTED_MODULE_4__.ValueReferenceDeleteComponent, {
            autoFocus: true,
            width: "480px",
            data: item.id,
        });
        ref
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))
            .subscribe((res) => {
            if (res) {
                this.delete(res);
            }
        });
    }
    /**
     * Display values
     * @param item
     * @returns
     */
    displayValues(item) {
        if (item.value) {
            return item.value;
        }
        return `${item.start} - ${item.end}`;
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
            description: this.filterValue,
        };
        if (this.filter.comparisonOperator) {
            input.comparisonOperator = this.filter.comparisonOperator;
        }
        if (this.filter.ageGroupId) {
            input.ageGroupId = this.filter.ageGroupId;
        }
        if (this.filter.dataUnitId) {
            input.dataUnitId = this.filter.dataUnitId;
        }
        if (this.filter.sex) {
            input.sex = this.filter.sex;
        }
        if (this.filter.testTypeId) {
            input.testTypeId = this.filter.testTypeId;
        }
        this.laboratoryValueReferenceService
            .getValueReferences(input)
            .pipe((0,src_app_shared_operators_operators__WEBPACK_IMPORTED_MODULE_0__.indicate)(this.indicator$))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))
            .subscribe((res) => {
            this.set(res.count, res.items);
        });
    }
}
LaboratoryValueReferencesComponent.ɵfac = function LaboratoryValueReferencesComponent_Factory(t) { return new (t || LaboratoryValueReferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_5__.LaboratoryValueReferenceService)); };
LaboratoryValueReferencesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LaboratoryValueReferencesComponent, selectors: [["app-laboratory-management-value-references"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 63, vars: 12, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2742532852742169962$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_VALUE_REFERENCES_COMPONENT_TS__1 = goog.getMsg("Sex");
        i18n_0 = MSG_EXTERNAL_2742532852742169962$$SRC_APP_MODULES_LABORATORY_MANAGEMENT_VALUE_REFERENCES_VALUE_REFERENCES_COMPONENT_TS__1;
    }
    else {
        i18n_0 = "\u0627\u0644\u062C\u0646\u0633";
    } return [[1, "header-basic"], [1, "title"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "matBadgeSize", "small", 3, "matBadge", "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "visible", "changed", "closed"], [3, "visible"], ["multiTemplateDataRows", "", "matSort", "", "matSortDisableClear", "", "matSortDirection", "desc", 3, "dataSource", "matSortActive", "matSortChange"], ["matColumnDef", "select"], ["class", "table-column-small", 4, "matHeaderCellDef"], ["class", "table-column-small", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], [4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "Description"], ["matColumnDef", "CreatedAt"], ["matColumnDef", "TestType"], ["matColumnDef", "AgeGroup"], ["matColumnDef", "Sex"], ["matColumnDef", "DataUnit"], ["matColumnDef", "Data"], [4, "matHeaderCellDef"], ["matColumnDef", "menu"], ["class", "table-column-small table-column-end", 4, "matCellDef"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [3, "loading", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "table-column-small"], [3, "checked", "indeterminate", "change"], [3, "checked", "click", "change"], ["mat-sort-header", ""], [1, "table-cell-stacked"], i18n_0, [1, "table-column-small", "table-column-end"], ["itemMenu", "matMenu"], ["color", "warn"], [3, "loading"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"]]; }, template: function LaboratoryValueReferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LaboratoryValueReferencesComponent_Template_button_click_5_listener() { return ctx.search = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LaboratoryValueReferencesComponent_Template_button_click_8_listener() { return ctx.openFilterComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 5)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-menu", null, 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LaboratoryValueReferencesComponent_Template_button_click_16_listener() { return ctx.openCreateComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\u0625\u0636\u0627\u0641\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "app-search-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changed", function LaboratoryValueReferencesComponent_Template_app_search_bar_changed_21_listener($event) { return ctx.onSearch($event); })("closed", function LaboratoryValueReferencesComponent_Template_app_search_bar_closed_21_listener() { return ctx.onSearchClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "app-table-selection", 9)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("matSortChange", function LaboratoryValueReferencesComponent_Template_mat_table_matSortChange_26_listener($event) { return ctx.onSort($event.active, $event.direction); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](27, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, LaboratoryValueReferencesComponent_mat_header_cell_28_Template, 2, 2, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, LaboratoryValueReferencesComponent_mat_cell_29_Template, 2, 1, "mat-cell", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](30, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, LaboratoryValueReferencesComponent_mat_cell_31_Template, 4, 3, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](32, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, LaboratoryValueReferencesComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, LaboratoryValueReferencesComponent_mat_cell_34_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](35, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, LaboratoryValueReferencesComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, LaboratoryValueReferencesComponent_mat_cell_37_Template, 5, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](38, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, LaboratoryValueReferencesComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, LaboratoryValueReferencesComponent_mat_cell_40_Template, 3, 4, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](41, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](42, LaboratoryValueReferencesComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](43, LaboratoryValueReferencesComponent_mat_cell_43_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](44, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, LaboratoryValueReferencesComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, LaboratoryValueReferencesComponent_mat_cell_46_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](47, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, LaboratoryValueReferencesComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, LaboratoryValueReferencesComponent_mat_cell_49_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](50, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, LaboratoryValueReferencesComponent_mat_header_cell_51_Template, 2, 0, "mat-header-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, LaboratoryValueReferencesComponent_mat_cell_52_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](53, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, LaboratoryValueReferencesComponent_mat_header_cell_54_Template, 2, 0, "mat-header-cell", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, LaboratoryValueReferencesComponent_mat_cell_55_Template, 2, 1, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](56, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, LaboratoryValueReferencesComponent_mat_header_cell_57_Template, 1, 0, "mat-header-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, LaboratoryValueReferencesComponent_mat_cell_58_Template, 11, 1, "mat-cell", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, LaboratoryValueReferencesComponent_mat_header_row_59_Template, 1, 0, "mat-header-row", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, LaboratoryValueReferencesComponent_mat_row_60_Template, 1, 0, "mat-row", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, LaboratoryValueReferencesComponent_app_table_state_61_Template, 2, 3, "app-table-state", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, LaboratoryValueReferencesComponent_mat_paginator_62_Template, 1, 4, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matBadge", ctx.getFilterCount());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx.selection.selected.length, " selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matSortActive", ctx.sortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.count === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.count > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _shared_modules_table_components_selection_selection_component__WEBPACK_IMPORTED_MODULE_6__.TableSelectionComponent, _shared_modules_table_components_state_state_component__WEBPACK_IMPORTED_MODULE_7__.TableStateComponent, _shared_modules_search_bar_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__.SearchBarComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__.MatBadge, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 5933:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/laboratory-management/value-references/value-references.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryValueReferencesModule": () => (/* binding */ LaboratoryValueReferencesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var src_app_shared_modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/modules/alert/alert.module */ 6114);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var src_app_shared_modules_table_table_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/table/table.module */ 1575);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _value_references_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./value-references.routing.module */ 5406);
/* harmony import */ var _value_references_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./value-references.component */ 7175);
/* harmony import */ var src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/laboratory-management/laboratory-value-reference/laboratory-value-reference.service */ 8180);
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create/create.component */ 3411);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filter/filter.component */ 4841);
/* harmony import */ var _components_value_reference_delete_value_reference_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/value-reference/delete/value-reference-delete.component */ 5276);
/* harmony import */ var src_app_shared_modules_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/search-bar/search-bar.module */ 7775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);































class LaboratoryValueReferencesModule {
}
LaboratoryValueReferencesModule.ɵfac = function LaboratoryValueReferencesModule_Factory(t) { return new (t || LaboratoryValueReferencesModule)(); };
LaboratoryValueReferencesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LaboratoryValueReferencesModule });
LaboratoryValueReferencesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [src_app_shared_services_laboratory_management_laboratory_value_reference_laboratory_value_reference_service__WEBPACK_IMPORTED_MODULE_4__.LaboratoryValueReferenceService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _value_references_routing_module__WEBPACK_IMPORTED_MODULE_2__.LaboratoryValueReferencesRoutingModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        src_app_shared_modules_table_table_module__WEBPACK_IMPORTED_MODULE_1__.TableModule,
        src_app_shared_modules_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_8__.SearchBarModule,
        src_app_shared_modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadgeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LaboratoryValueReferencesModule, { declarations: [_value_references_component__WEBPACK_IMPORTED_MODULE_3__.LaboratoryValueReferencesComponent,
        _components_create_create_component__WEBPACK_IMPORTED_MODULE_5__.CreateComponent,
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent,
        _components_value_reference_delete_value_reference_delete_component__WEBPACK_IMPORTED_MODULE_7__.ValueReferenceDeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _value_references_routing_module__WEBPACK_IMPORTED_MODULE_2__.LaboratoryValueReferencesRoutingModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        src_app_shared_modules_table_table_module__WEBPACK_IMPORTED_MODULE_1__.TableModule,
        src_app_shared_modules_search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_8__.SearchBarModule,
        src_app_shared_modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_0__.AlertModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__.MatStepperModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__.MatBadgeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatNativeDateModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 5406:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/laboratory-management/value-references/value-references.routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryValueReferencesRoutingModule": () => (/* binding */ LaboratoryValueReferencesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _value_references_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value-references.component */ 7175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: "", component: _value_references_component__WEBPACK_IMPORTED_MODULE_0__.LaboratoryValueReferencesComponent },
];
class LaboratoryValueReferencesRoutingModule {
}
LaboratoryValueReferencesRoutingModule.ɵfac = function LaboratoryValueReferencesRoutingModule_Factory(t) { return new (t || LaboratoryValueReferencesRoutingModule)(); };
LaboratoryValueReferencesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LaboratoryValueReferencesRoutingModule });
LaboratoryValueReferencesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LaboratoryValueReferencesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8604:
/*!******************************************************************!*\
  !*** ./src/app/shared/models/types/comparison-operator.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonOperator": () => (/* binding */ ComparisonOperator)
/* harmony export */ });
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["Equal"] = "Equal";
    ComparisonOperator["GreaterThan"] = "GreaterThan";
    ComparisonOperator["GreaterThanOrEqual"] = "GreaterThanOrEqual";
    ComparisonOperator["LessThan"] = "LessThan";
    ComparisonOperator["LessThanOrEqual"] = "LessThanOrEqual";
    ComparisonOperator["Not"] = "Not";
    ComparisonOperator["RangeWithBoundaries"] = "RangeWithBoundaries";
    ComparisonOperator["RangeWithoutBoundaries"] = "RangeWithoutBoundaries";
})(ComparisonOperator || (ComparisonOperator = {}));


/***/ }),

/***/ 3734:
/*!**************************************************!*\
  !*** ./src/app/shared/models/types/sex.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sex": () => (/* binding */ Sex)
/* harmony export */ });
/**
 * Sex
 */
var Sex;
(function (Sex) {
    Sex["Male"] = "Male";
    Sex["Female"] = "Female";
})(Sex || (Sex = {}));


/***/ }),

/***/ 8352:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/services/common-types/data-unit/data-unit.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataUnitService": () => (/* binding */ DataUnitService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * DataUnit Service
 */
class DataUnitService {
    constructor(http) {
        this.http = http;
        this.path = `v1/common-types/data-units`;
    }
    /**
     * Get DataUnits
     */
    getDataUnites(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
}
DataUnitService.ɵfac = function DataUnitService_Factory(t) { return new (t || DataUnitService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
DataUnitService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataUnitService, factory: DataUnitService.ɵfac });


/***/ }),

/***/ 3851:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/services/laboratory-management/age-group/age-group.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgeGroupService": () => (/* binding */ AgeGroupService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * AgeGroup Service
 */
class AgeGroupService {
    constructor(http) {
        this.http = http;
        this.path = `laboratory-management/v1/age-groups`;
    }
    /**
     * Get Test types
     */
    getAgeGroups(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
}
AgeGroupService.ɵfac = function AgeGroupService_Factory(t) { return new (t || AgeGroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
AgeGroupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AgeGroupService, factory: AgeGroupService.ɵfac });


/***/ }),

/***/ 8180:
/*!************************************************************************************************************************!*\
  !*** ./src/app/shared/services/laboratory-management/laboratory-value-reference/laboratory-value-reference.service.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaboratoryValueReferenceService": () => (/* binding */ LaboratoryValueReferenceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * LaboratoryValueReference Service
 */
class LaboratoryValueReferenceService {
    constructor(http) {
        this.http = http;
        this.path = `laboratory-management/v1/value-references`;
    }
    /**
     * Get ValueReferences
     */
    getValueReferences(input) {
        return this.http.get(`${this.path}`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({ fromObject: input }),
        });
    }
    /**
     * Create ValueReference
     */
    createValueReference(input) {
        return this.http.post(`${this.path}`, input);
    }
    /**
     * Delete ValueReference
     */
    deleteValueReference(laboratoryValueReferenceId) {
        return this.http.delete(`${this.path}/${laboratoryValueReferenceId}`);
    }
}
LaboratoryValueReferenceService.ɵfac = function LaboratoryValueReferenceService_Factory(t) { return new (t || LaboratoryValueReferenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
LaboratoryValueReferenceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LaboratoryValueReferenceService, factory: LaboratoryValueReferenceService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_laboratory-management_value-references_value-references_module_ts.js.map