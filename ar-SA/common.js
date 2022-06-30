"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["common"],{

/***/ 4672:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/services/analysis-management/analysis-type/analysis-type.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalysisTypeService": () => (/* binding */ AnalysisTypeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
//# sourceMappingURL=common.js.map