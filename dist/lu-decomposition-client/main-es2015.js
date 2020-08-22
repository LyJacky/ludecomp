(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lu-decomposition/lu-decomposition.component */ "./src/app/lu-decomposition/lu-decomposition.component.ts");



class AppComponent {
    constructor() {
        this.title = 'lu-decomposition-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lu-decomposition");
    } }, directives: [_lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_1__["LuDecompositionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lu-decomposition/lu-decomposition.component */ "./src/app/lu-decomposition/lu-decomposition.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_4__["LuDecompositionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_4__["LuDecompositionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/lu-decomposition/lu-decomposition.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lu-decomposition/lu-decomposition.component.ts ***!
  \****************************************************************/
/*! exports provided: MatrixFraction, MatrixNumber, LuDecompositionComponent, Fractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixFraction", function() { return MatrixFraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixNumber", function() { return MatrixNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuDecompositionComponent", function() { return LuDecompositionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fractions", function() { return Fractions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_lu_decomp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/lu-decomp-service */ "./src/app/service/lu-decomp-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LuDecompositionComponent_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LuDecompositionComponent_tr_4_td_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const idxCol_r16 = ctx.index; const idxLine_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r17.data.data[idxLine_r13][idxCol_r16] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idxCol_r16 = ctx.index;
    const idxLine_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.data.data[idxLine_r13][idxCol_r16]);
} }
function LuDecompositionComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_tr_4_td_1_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r12 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", line_r12)("ngForTrackBy", ctx_r0.indexTrackerCol);
} }
function LuDecompositionComponent_div_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { item: a0 }; };
function LuDecompositionComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r21));
} }
function LuDecompositionComponent_div_9_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LuDecompositionComponent_div_9_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r21));
} }
function LuDecompositionComponent_div_9_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LuDecompositionComponent_div_9_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r21));
} }
function LuDecompositionComponent_div_9_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LuDecompositionComponent_div_9_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r21));
} }
function LuDecompositionComponent_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LuDecompositionComponent_div_9_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuDecompositionComponent_div_9_ng_container_2_ng_container_3_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.isMatrix());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.isFractions());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.isNumber());
} }
function LuDecompositionComponent_div_9_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LuDecompositionComponent_div_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r21));
} }
function LuDecompositionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_9_ng_container_1_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LuDecompositionComponent_div_9_ng_container_2_Template, 4, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuDecompositionComponent_div_9_ng_container_3_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.action == "RequestParamForInfCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.action == "DisplayStep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.action == "StopNoSolution");
} }
function LuDecompositionComponent_ng_template_10_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuDecompositionComponent_ng_template_10_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.changeInputParameter(item_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LuDecompositionComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LuDecompositionComponent_ng_template_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r39 = ctx.item; return item_r39.inputParameter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LuDecompositionComponent_ng_template_10_button_4_Template, 2, 0, "button", 12);
} if (rf & 2) {
    const item_r39 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r39.msg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r39.inputParameter)("disabled", item_r39.inputParameterSubmited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r39.inputParameterSubmited && item_r39.inputParameter);
} }
function LuDecompositionComponent_ng_template_12_tr_3_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const idxCol_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const idxLine_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", item_r46.value.data[idxLine_r49][idxCol_r52].denominator, " ");
} }
function LuDecompositionComponent_ng_template_12_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LuDecompositionComponent_ng_template_12_tr_3_td_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idxCol_r52 = ctx.index;
    const idxLine_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r46.value.data[idxLine_r49][idxCol_r52].numerator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r46.value.data[idxLine_r49][idxCol_r52].denominator != 1);
} }
function LuDecompositionComponent_ng_template_12_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_ng_template_12_tr_3_td_1_Template, 3, 2, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", line_r48);
} }
function LuDecompositionComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuDecompositionComponent_ng_template_12_tr_3_Template, 2, 1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r46.msg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r46.value.data);
} }
function LuDecompositionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r59.msg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r59.value, " ");
} }
function LuDecompositionComponent_ng_template_16_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", item_r60.value.denominator, " ");
} }
function LuDecompositionComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LuDecompositionComponent_ng_template_16_ng_container_4_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r60.msg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r60.value.numerator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r60.value.denominator != 1);
} }
function LuDecompositionComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r63.msg, " ");
} }
class MatrixFraction {
    constructor(data, dim) {
        this.data = data;
        this.dim = dim;
    }
    clone() {
        const res = [];
        for (let i = 0; i < this.dim; i++) {
            res.push([]);
            for (let j = 0; j < this.dim; j++) {
                res[i].push(this.data[i][j].clone());
            }
        }
        return new MatrixFraction(res, this.dim);
    }
}
class MatrixNumber {
    constructor(data, dim) {
        this.data = data;
        this.dim = dim;
    }
}
class LuDecompositionComponent {
    constructor() {
        this.dimension = 3;
        this.data = new MatrixNumber([], 0);
        this.results = [];
    }
    ngOnInit() {
        this.changeDimension();
        this.testData();
    }
    changeDimension() {
        this.data.data = [];
        for (let i = 0; i < this.dimension; i++) {
            const line = [];
            for (let col = 0; col < this.dimension; col++) {
                line.push(0);
            }
            this.data.data.push(line);
        }
    }
    testData() {
        this.data.data = [
            [20, 5, 9],
            [16, 4, 7],
            [4, 1, 3]
        ];
    }
    computeMat() {
        this.results = [];
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.luDecompService = new _service_lu_decomp_service__WEBPACK_IMPORTED_MODULE_1__["LuDecompService"](this.dimension, this.data);
        this.sub = this.luDecompService.event.subscribe(eventData => {
            console.log(eventData);
            this.results.push(new _service_lu_decomp_service__WEBPACK_IMPORTED_MODULE_1__["DisplayItem"](eventData));
        });
        this.luDecompService.compute();
    }
    changeInputParameter(item) {
        item.inputParameterSubmited = true;
        this.luDecompService.addParameter(item.inputParameter);
        const value = item.value;
        this.luDecompService.compute(value);
    }
    indexTrackerLin(index, value) {
        return index;
    }
    indexTrackerCol(index, value) {
        return index;
    }
}
LuDecompositionComponent.ɵfac = function LuDecompositionComponent_Factory(t) { return new (t || LuDecompositionComponent)(); };
LuDecompositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuDecompositionComponent, selectors: [["app-lu-decomposition"]], decls: 20, vars: 4, consts: [["type", "number", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], [4, "ngFor", "ngForOf"], ["askParameter", ""], ["displayMatrix", ""], ["displayNumber", ""], ["displayFractions", ""], ["noSolution", ""], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "number", 3, "ngModel", "disabled", "ngModelChange"], [3, "click", 4, "ngIf"]], template: function LuDecompositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LuDecompositionComponent_Template_input_ngModelChange_1_listener($event) { return ctx.dimension = $event; })("ngModelChange", function LuDecompositionComponent_Template_input_ngModelChange_1_listener() { return ctx.changeDimension(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LuDecompositionComponent_tr_4_Template, 2, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuDecompositionComponent_Template_button_click_5_listener() { return ctx.computeMat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Compute\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LuDecompositionComponent_div_9_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LuDecompositionComponent_ng_template_10_Template, 5, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LuDecompositionComponent_ng_template_12_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LuDecompositionComponent_ng_template_14_Template, 4, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LuDecompositionComponent_ng_template_16_Template, 5, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LuDecompositionComponent_ng_template_18_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dimension);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.data)("ngForTrackBy", ctx.indexTrackerLin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  width: 40px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNreS9EZXNrdG9wL3dvcmtzL2dpdC90ZXN0L2NsaWVudC9zcmMvYXBwL2x1LWRlY29tcG9zaXRpb24vbHUtZGVjb21wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbHUtZGVjb21wb3NpdGlvbi9sdS1kZWNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjtBREFFO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbHUtZGVjb21wb3NpdGlvbi9sdS1kZWNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuIiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGFibGUgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuDecompositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lu-decomposition',
                templateUrl: './lu-decomposition.component.html',
                styleUrls: ['./lu-decomposition.component.scss']
            }]
    }], function () { return []; }, null); })();
class Fractions {
    constructor(num, denom) {
        this.numerator = num;
        this.denominator = denom;
    }
    static reduce(test) {
        // test is the fraction// do the 0 case
        for (let i = Math.abs(test.denominator); i >= 1; i--) {
            if (test.numerator % i === 0 && test.denominator % i === 0) {
                test.numerator = test.numerator / i;
                test.denominator = test.denominator / i;
                break;
            }
        }
        if (test.denominator < 0) {
            test.numerator = test.numerator * -1;
            test.denominator = test.denominator * -1;
        }
        return test;
    }
    // from fracitons to that is the typescript conversion
    static _addingNoChange(test, addFrac) {
        let temp1;
        let temp2;
        const result = new Fractions(0, 1); // not sure if right
        if (test.denominator === addFrac.denominator) {
            result.numerator = test.numerator + addFrac.numerator;
            result.denominator = test.denominator;
        }
        else {
            temp1 = test.denominator;
            temp2 = addFrac.denominator;
            test.denominator = temp1 * temp2;
            addFrac.denominator = temp1 * temp2;
            test.numerator = temp2 * test.numerator;
            addFrac.numerator = temp1 * addFrac.numerator;
            test.numerator = test.numerator + addFrac.numerator;
            result.numerator = test.numerator;
            result.denominator = test.denominator;
        }
        Fractions.reduce(result);
        return result;
    }
    static _subtracting(test, subFrac) {
        let temp;
        let temp2;
        if (test.denominator === subFrac.denominator) {
            test.numerator = test.numerator - subFrac.numerator;
        }
        else {
            temp = test.denominator;
            temp2 = subFrac.denominator;
            test.denominator = temp * temp2;
            subFrac.denominator = temp * temp2;
            test.numerator = temp2 * test.numerator;
            subFrac.numerator = temp * subFrac.numerator;
            test.numerator = test.numerator - subFrac.numerator;
        }
        Fractions.reduce(test);
        return test;
    }
    static _multiplyingNoChange(test, multFrac) {
        const results = new Fractions(0, 1);
        results.numerator = test.numerator * multFrac.numerator;
        results.denominator = test.denominator * multFrac.denominator;
        Fractions.reduce(results);
        return results;
    }
    static _divisionNoChange(test, divFrac) {
        const result = new Fractions(0, 1);
        result.numerator = test.numerator * divFrac.denominator;
        result.denominator = test.denominator * divFrac.numerator;
        Fractions.reduce(result);
        return result;
    }
    divisionNoChange(divFrac) {
        return Fractions._divisionNoChange(this, divFrac);
    }
    multiplyingNoChange(multFrac) {
        return Fractions._multiplyingNoChange(this, multFrac);
    }
    subtracting(subFrac) {
        return Fractions._subtracting(this, subFrac);
    }
    addingNoChange(addFrac) {
        return Fractions._addingNoChange(this, addFrac);
    }
    clone() {
        return new Fractions(this.numerator, this.denominator);
    }
}


/***/ }),

/***/ "./src/app/service/lu-decomp-service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/lu-decomp-service.ts ***!
  \**********************************************/
/*! exports provided: DisplayItem, LuDecompService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayItem", function() { return DisplayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuDecompService", function() { return LuDecompService; });
/* harmony import */ var _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lu-decomposition/lu-decomposition.component */ "./src/app/lu-decomposition/lu-decomposition.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DisplayItem {
    constructor(value) {
        this.inputParameterSubmited = false;
        this.action = value.action;
        this.msg = value.msg;
        if (value.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"]) {
            this.value = value.value.clone();
        }
        else if (value.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"]) {
            this.value = value.value.clone();
        }
        else {
            this.value = value.value;
        }
    }
    isMatrix() {
        return this.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"];
    }
    isFractions() {
        return this.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"];
    }
    isNumber() {
        return typeof this.value === 'number';
    }
}
class LuDecompService {
    constructor(dim, input) {
        this.dim = dim;
        this.input = input;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fractionZero = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](0, 1);
        this.parameters = [];
        this.index = 0;
        this.lin = 0;
        this.col = 0;
        this.fractionZero = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](0, 1);
        this.fractionInput = this.initDoubleArray(dim);
        this.fractionLower = this.initDoubleArray(dim);
        this.fractionProduct = this.initDoubleArray(dim);
        this.fractionCopy = this.initArray(dim); // takes one row from the row to perform gaussian
        this.parameters = [];
        this.index = 0;
        this.fractionInput = this.convert(this.dim, this.fractionInput, this.input.data);
        // made fraction form of array c
        this.event.emit({
            action: 'DisplayStep',
            msg: 'Fraction Upper',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionInput, this.dim)
        });
        const lower = this.initDoubleArray(this.dim, 0);
        for (let i = 0; i < dim; i++) {
            lower[i][i] = 1;
        }
        this.fractionLower = this.convert(this.dim, this.fractionLower, lower); // making lower fraction
        this.multiplier = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](1, 1);
    }
    copyArray(dim, arr1, arrcopy, numrow) {
        for (let i = 0; i < dim; i++) {
            arrcopy[i] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](arr1[numrow][i].numerator, arr1[numrow][i].denominator);
        }
        return arrcopy;
    }
    convert(arrsize, test, numbers) {
        // make this do teh entire array and return an array
        let num2;
        let text = '';
        for (let i = 0; i < arrsize; i++) {
            for (let j = 0; j < arrsize; j++) {
                if (numbers[i][j] % 1 !== 0) {
                    text = Math.abs(numbers[i][j]) + '';
                    const integerPlaces = text.indexOf('.');
                    const decimalPlaces = text.length - integerPlaces - 1;
                    numbers[i][j] = numbers[i][j] * (Math.pow(10, decimalPlaces));
                    num2 = Math.pow(10, decimalPlaces);
                    test[i][j] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](numbers[i][j], num2);
                    _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"].reduce(test[i][j]);
                }
                else {
                    test[i][j] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](numbers[i][j], 1);
                }
            }
        }
        return test;
    }
    multiplyTwoMatrix(dim, lower, upper, test) {
        let testing = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](0, 1);
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                test[i][j] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](0, 1);
                for (let k = 0; k < dim; k++) {
                    testing = lower[i][k].multiplyingNoChange(upper[k][j]);
                    test[i][j] = test[i][j].addingNoChange(testing);
                }
            }
        }
        return test;
    }
    addParameter(p) {
        this.parameters.push(p);
    }
    compute(oldColPosition = 1) {
        // adjusting A(1,1), A(2,1) in the matrix L and U using gaussian
        for (; this.lin < (this.dim - 1); this.lin++) { // a represents column
            for (this.col = oldColPosition; this.col < (this.dim - this.lin); this.col++) {
                if (this.fractionInput[this.lin][this.lin].numerator !== this.fractionZero.numerator) {
                    this.multiplier = this.fractionInput[this.col + this.lin][this.lin]
                        .divisionNoChange(this.fractionInput[this.lin][this.lin]);
                    this.event.emit({
                        action: 'DisplayStep',
                        msg: 'Multiplier',
                        value: this.multiplier
                    });
                    this.fractionLower[this.col + this.lin][this.lin] =
                        this.fractionLower[this.col + this.lin][this.lin].addingNoChange(this.multiplier);
                    this.event.emit({
                        action: 'DisplayStep',
                        msg: 'Fraction Lower',
                        value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionLower, this.dim)
                    });
                }
                else {
                    if (this.fractionInput[this.lin][this.lin].numerator === this.fractionZero.numerator
                        && this.fractionInput[this.col + this.lin][this.lin].numerator === this.fractionZero.numerator) {
                        // System.out.println("please pick a parameterCompute for the matrix since there is infinite solutions");
                        //  parameterCompute = input.nextInt();
                        if (this.parameters[this.index] === undefined) {
                            this.event.emit({
                                action: 'RequestParamForInfCase',
                                msg: 'Please Input Parameter',
                                value: this.col
                            });
                            return;
                        }
                        this.multiplier.numerator = this.parameters[this.index];
                        this.index++;
                        this.multiplier.denominator = 1;
                        this.event.emit({
                            action: 'DisplayStep',
                            msg: 'Multiplier',
                            value: this.multiplier
                        });
                        this.fractionLower[this.col + this.lin][this.lin] =
                            this.fractionLower[this.col + this.lin][this.lin].addingNoChange(this.multiplier);
                        this.event.emit({
                            action: 'DisplayStep',
                            msg: 'Fraction Lower',
                            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionLower, this.dim)
                        });
                    }
                    else {
                        if (this.fractionInput[this.lin][this.lin].numerator === this.fractionZero.numerator
                            && this.fractionInput[this.col + this.lin][this.lin].numerator !== this.fractionZero.numerator) {
                            this.event.emit({
                                action: 'StopNoSolution',
                                msg: '',
                                value: null
                            });
                            return;
                        }
                    }
                }
                this.copyArray(this.dim, this.fractionInput, this.fractionCopy, this.lin);
                for (let j = 0; j < this.dim; j++) {
                    this.fractionCopy[j] = this.fractionCopy[j].multiplyingNoChange(this.multiplier);
                    // copies all the number in the row into a copy matrix which will be used in gaussian elimnination
                }
                for (let j = this.lin; j < this.dim; j++) {
                    this.fractionInput[this.col + this.lin][j].subtracting(this.fractionCopy[j]);
                }
                this.event.emit({
                    action: 'DisplayStep',
                    msg: 'Fraction Upper',
                    value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionInput, this.dim)
                });
            }
            // if resuming a compute, after the the resume set the column to start at 1
            oldColPosition = 1;
        }
        this.event.emit({
            action: 'DisplayStep',
            msg: 'Fraction Upper Final',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionInput, this.dim)
        });
        this.event.emit({
            action: 'DisplayStep',
            msg: 'Fraction Lower Final',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionLower, this.dim)
        });
        this.multiplyTwoMatrix(this.dim, this.fractionLower, this.fractionInput, this.fractionProduct);
        this.event.emit({
            action: 'DisplayStep',
            msg: 'Fraction Lower x Upper',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionProduct, this.dim)
        });
    }
    initDoubleArray(dim, value = null) {
        const res = [];
        for (let i = 0; i < dim; i++) {
            res.push([]);
            for (let j = 0; j < dim; j++) {
                res[i].push(value);
            }
        }
        return res;
    }
    initArray(dim, value = null) {
        const res = [];
        for (let i = 0; i < dim; i++) {
            res.push(value);
        }
        return res;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jacky/Desktop/works/git/test/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map