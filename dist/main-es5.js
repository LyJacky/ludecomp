function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lu-decomposition/lu-decomposition.component */
    "./src/app/lu-decomposition/lu-decomposition.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'lu-decomposition-client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lu-decomposition");
        }
      },
      directives: [_lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_1__["LuDecompositionComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lu-decomposition/lu-decomposition.component */
    "./src/app/lu-decomposition/lu-decomposition.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_4__["LuDecompositionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_4__["LuDecompositionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lu-decomposition/lu-decomposition.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lu-decomposition/lu-decomposition.component.ts ***!
    \****************************************************************/

  /*! exports provided: MatrixFraction, MatrixNumber, MatrixString, LuDecompositionComponent, Fractions */

  /***/
  function srcAppLuDecompositionLuDecompositionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatrixFraction", function () {
      return MatrixFraction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatrixNumber", function () {
      return MatrixNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatrixString", function () {
      return MatrixString;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LuDecompositionComponent", function () {
      return LuDecompositionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fractions", function () {
      return Fractions;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_lu_decomp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/lu-decomp-service */
    "./src/app/service/lu-decomp-service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LuDecompositionComponent_tr_8_td_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LuDecompositionComponent_tr_8_td_1_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var idxCol_r18 = ctx.index;

          var idxLine_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.data.data[idxLine_r15][idxCol_r18] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idxCol_r18 = ctx.index;

        var idxLine_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.data.data[idxLine_r15][idxCol_r18]);
      }
    }

    function LuDecompositionComponent_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_tr_8_td_1_Template, 2, 1, "td", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r14 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", line_r14)("ngForTrackBy", ctx_r0.indexTrackerCol);
      }
    }

    function LuDecompositionComponent_div_13_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        item: a0
      };
    };

    function LuDecompositionComponent_div_13_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r23));
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r23));
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r23));
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r23));
      }
    }

    function LuDecompositionComponent_div_13_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_2_ng_container_1_Template, 2, 4, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LuDecompositionComponent_div_13_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuDecompositionComponent_div_13_ng_container_2_ng_container_3_Template, 2, 4, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r23.isMatrix());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r23.isFractions());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r23.isNumber());
      }
    }

    function LuDecompositionComponent_div_13_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function LuDecompositionComponent_div_13_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r23));
      }
    }

    function LuDecompositionComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_div_13_ng_container_1_Template, 2, 4, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LuDecompositionComponent_div_13_ng_container_2_Template, 4, 3, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuDecompositionComponent_div_13_ng_container_3_Template, 2, 4, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r23.action == "RequestParamForInfCase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r23.action == "DisplaySolution");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r23.action == "StopNoSolution");
      }
    }

    function LuDecompositionComponent_ng_template_14_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function LuDecompositionComponent_ng_template_14_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuDecompositionComponent_ng_template_14_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var item_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.changeInputParameter(item_r41);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LuDecompositionComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LuDecompositionComponent_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LuDecompositionComponent_ng_template_14_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var item_r41 = ctx.item;
          return item_r41.inputParameter = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LuDecompositionComponent_ng_template_14_button_5_Template, 2, 0, "button", 13);
      }

      if (rf & 2) {
        var item_r41 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r41.requestMat));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r41.msg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r41.inputParameter)("disabled", item_r41.inputParameterSubmited);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r41.inputParameterSubmited && (item_r41.inputParameter || item_r41.inputParameter == 0));
      }
    }

    function LuDecompositionComponent_ng_template_16_tr_3_td_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var idxCol_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var idxLine_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", item_r49.value.data[idxLine_r52][idxCol_r55].denominator, " ");
      }
    }

    function LuDecompositionComponent_ng_template_16_tr_3_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LuDecompositionComponent_ng_template_16_tr_3_td_1_ng_container_2_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idxCol_r55 = ctx.index;

        var idxLine_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r49.value.data[idxLine_r52][idxCol_r55].numerator, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r49.value.data[idxLine_r52][idxCol_r55].denominator != 1);
      }
    }

    function LuDecompositionComponent_ng_template_16_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_ng_template_16_tr_3_td_1_Template, 3, 2, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", line_r51);
      }
    }

    function LuDecompositionComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuDecompositionComponent_ng_template_16_tr_3_Template, 2, 1, "tr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r49 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r49.action, " - ", item_r49.msg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r49.value.data);
      }
    }

    function LuDecompositionComponent_ng_template_18_tr_1_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idxCol_r68 = ctx.index;

        var idxLine_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var item_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r62.data[idxLine_r65][idxCol_r68], " ");
      }
    }

    function LuDecompositionComponent_ng_template_18_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_ng_template_18_tr_1_td_1_Template, 2, 1, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", line_r64);
      }
    }

    function LuDecompositionComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LuDecompositionComponent_ng_template_18_tr_1_Template, 2, 1, "tr", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r62 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r62.data);
      }
    }

    function LuDecompositionComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r71 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r71.msg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r71.value, " ");
      }
    }

    function LuDecompositionComponent_ng_template_22_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" / ", item_r72.value.denominator, " ");
      }
    }

    function LuDecompositionComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LuDecompositionComponent_ng_template_22_ng_container_4_Template, 2, 1, "ng-container", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r72 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r72.msg, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r72.value.numerator, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r72.value.denominator != 1);
      }
    }

    function LuDecompositionComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r75 = ctx.item;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r75.msg, " ");
      }
    }

    var MatrixFraction = /*#__PURE__*/function () {
      function MatrixFraction(data, dim) {
        _classCallCheck(this, MatrixFraction);

        this.data = data;
        this.dim = dim;
      }

      _createClass(MatrixFraction, [{
        key: "clone",
        value: function clone() {
          var res = [];

          for (var i = 0; i < this.dim; i++) {
            res.push([]);

            for (var j = 0; j < this.dim; j++) {
              res[i].push(this.data[i][j].clone());
            }
          }

          return new MatrixFraction(res, this.dim);
        }
      }]);

      return MatrixFraction;
    }();

    var MatrixNumber = function MatrixNumber(data, dim) {
      _classCallCheck(this, MatrixNumber);

      this.data = data;
      this.dim = dim;
    };

    var MatrixString = function MatrixString(data, dim) {
      _classCallCheck(this, MatrixString);

      this.data = data;
      this.dim = dim;
    };

    var LuDecompositionComponent = /*#__PURE__*/function () {
      function LuDecompositionComponent() {
        _classCallCheck(this, LuDecompositionComponent);

        this.dimension = 3;
        this.data = new MatrixNumber([], 0);
        this.results = [];
      }

      _createClass(LuDecompositionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changeDimension();
          this.testData();
        }
      }, {
        key: "changeDimension",
        value: function changeDimension() {
          this.data.data = [];

          for (var i = 0; i < this.dimension; i++) {
            var line = [];

            for (var col = 0; col < this.dimension; col++) {
              line.push(0);
            }

            this.data.data.push(line);
          }
        }
      }, {
        key: "testData",
        value: function testData() {
          this.data.data = [[20, 5, 9], [16, 4, 7], [4, 1, 3]];
        }
      }, {
        key: "computeMat",
        value: function computeMat() {
          var _this = this;

          this.results = [];

          if (this.sub) {
            this.sub.unsubscribe();
          }

          this.luDecompService = new _service_lu_decomp_service__WEBPACK_IMPORTED_MODULE_1__["LuDecompService"](this.dimension, this.data);
          this.sub = this.luDecompService.event.subscribe(function (eventData) {
            console.log(eventData);

            _this.results.push(new _service_lu_decomp_service__WEBPACK_IMPORTED_MODULE_1__["DisplayItem"](eventData));
          });
          this.luDecompService.compute();
        }
      }, {
        key: "changeInputParameter",
        value: function changeInputParameter(item) {
          item.inputParameterSubmited = true;
          this.luDecompService.addParameter(item.inputParameter);
          var value = item.value;
          this.luDecompService.compute(value);
        }
      }, {
        key: "indexTrackerLin",
        value: function indexTrackerLin(index, value) {
          return index;
        }
      }, {
        key: "indexTrackerCol",
        value: function indexTrackerCol(index, value) {
          return index;
        }
      }]);

      return LuDecompositionComponent;
    }();

    LuDecompositionComponent.ɵfac = function LuDecompositionComponent_Factory(t) {
      return new (t || LuDecompositionComponent)();
    };

    LuDecompositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LuDecompositionComponent,
      selectors: [["app-lu-decomposition"]],
      decls: 26,
      vars: 4,
      consts: [["type", "number", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], [4, "ngFor", "ngForOf"], ["askParameter", ""], ["displayMatrix", ""], ["displayStringMatrix", ""], ["displayNumber", ""], ["displayFractions", ""], ["noSolution", ""], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "number", 3, "ngModel", "disabled", "ngModelChange"], [3, "click", 4, "ngIf"]],
      template: function LuDecompositionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter the value n in an nxn matrix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LuDecompositionComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.dimension = $event;
          })("ngModelChange", function LuDecompositionComponent_Template_input_ngModelChange_3_listener() {
            return ctx.changeDimension();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter the matrix");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LuDecompositionComponent_tr_8_Template, 2, 2, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuDecompositionComponent_Template_button_click_9_listener() {
            return ctx.computeMat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Compute\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LuDecompositionComponent_div_13_Template, 4, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LuDecompositionComponent_ng_template_14_Template, 6, 8, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LuDecompositionComponent_ng_template_16_Template, 4, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LuDecompositionComponent_ng_template_18_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LuDecompositionComponent_ng_template_20_Template, 4, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LuDecompositionComponent_ng_template_22_Template, 5, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LuDecompositionComponent_ng_template_24_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dimension);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.data)("ngForTrackBy", ctx.indexTrackerLin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
      styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  width: 100px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNreS9EZXNrdG9wL3dvcmtzL2dpdC90ZXN0L2NsaWVudC9zcmMvYXBwL2x1LWRlY29tcG9zaXRpb24vbHUtZGVjb21wb3NpdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbHUtZGVjb21wb3NpdGlvbi9sdS1kZWNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjtBREFFO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbHUtZGVjb21wb3NpdGlvbi9sdS1kZWNvbXBvc2l0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbiIsInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbnRhYmxlIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LuDecompositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lu-decomposition',
          templateUrl: './lu-decomposition.component.html',
          styleUrls: ['./lu-decomposition.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var Fractions = /*#__PURE__*/function () {
      function Fractions(num, denom) {
        _classCallCheck(this, Fractions);

        this.numerator = num;
        this.denominator = denom;
      }

      _createClass(Fractions, [{
        key: "divisionNoChange",
        value: function divisionNoChange(divFrac) {
          return Fractions._divisionNoChange(this, divFrac);
        }
      }, {
        key: "multiplyingNoChange",
        value: function multiplyingNoChange(multFrac) {
          return Fractions._multiplyingNoChange(this, multFrac);
        }
      }, {
        key: "subtracting",
        value: function subtracting(subFrac) {
          return Fractions._subtracting(this, subFrac);
        }
      }, {
        key: "addingNoChange",
        value: function addingNoChange(addFrac) {
          return Fractions._addingNoChange(this, addFrac);
        }
      }, {
        key: "clone",
        value: function clone() {
          return new Fractions(this.numerator, this.denominator);
        }
      }], [{
        key: "reduce",
        value: function reduce(test) {
          // test is the fraction// do the 0 case
          for (var i = Math.abs(test.denominator); i >= 1; i--) {
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
        } // from fracitons to that is the typescript conversion

      }, {
        key: "_addingNoChange",
        value: function _addingNoChange(test, addFrac) {
          var temp1;
          var temp2;
          var result = new Fractions(0, 1); // not sure if right

          if (test.denominator === addFrac.denominator) {
            result.numerator = test.numerator + addFrac.numerator;
            result.denominator = test.denominator;
          } else {
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
      }, {
        key: "_subtracting",
        value: function _subtracting(test, subFrac) {
          var temp;
          var temp2;

          if (test.denominator === subFrac.denominator) {
            test.numerator = test.numerator - subFrac.numerator;
          } else {
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
      }, {
        key: "_multiplyingNoChange",
        value: function _multiplyingNoChange(test, multFrac) {
          var results = new Fractions(0, 1);
          results.numerator = test.numerator * multFrac.numerator;
          results.denominator = test.denominator * multFrac.denominator;
          Fractions.reduce(results);
          return results;
        }
      }, {
        key: "_divisionNoChange",
        value: function _divisionNoChange(test, divFrac) {
          var result = new Fractions(0, 1);
          result.numerator = test.numerator * divFrac.denominator;
          result.denominator = test.denominator * divFrac.numerator;
          Fractions.reduce(result);
          return result;
        }
      }]);

      return Fractions;
    }();
    /***/

  },

  /***/
  "./src/app/service/lu-decomp-service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/lu-decomp-service.ts ***!
    \**********************************************/

  /*! exports provided: DisplayItem, LuDecompService */

  /***/
  function srcAppServiceLuDecompServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayItem", function () {
      return DisplayItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LuDecompService", function () {
      return LuDecompService;
    });
    /* harmony import */


    var _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../lu-decomposition/lu-decomposition.component */
    "./src/app/lu-decomposition/lu-decomposition.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisplayItem = /*#__PURE__*/function () {
      function DisplayItem(value) {
        _classCallCheck(this, DisplayItem);

        this.inputParameterSubmited = false;
        this.requestMat = null;
        this.action = value.action;
        this.msg = value.msg;

        if (value.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"]) {
          this.value = value.value.clone();
        } else if (value.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"]) {
          this.value = value.value.clone();
        } else {
          this.value = value.value;
        }

        this.requestMat = value.requestMat;
      }

      _createClass(DisplayItem, [{
        key: "isMatrix",
        value: function isMatrix() {
          return this.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"];
        }
      }, {
        key: "isFractions",
        value: function isFractions() {
          return this.value instanceof _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"];
        }
      }, {
        key: "isNumber",
        value: function isNumber() {
          return typeof this.value === 'number';
        }
      }]);

      return DisplayItem;
    }();

    var LuDecompService = /*#__PURE__*/function () {
      function LuDecompService(dim, input) {
        _classCallCheck(this, LuDecompService);

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
        this.fractionInput = this.convert(this.dim, this.fractionInput, this.input.data); // made fraction form of array c

        this.event.emit({
          action: 'DisplayStep',
          msg: ' Upper',
          value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionInput, this.dim)
        });
        var lower = this.initDoubleArray(this.dim, 0);

        for (var i = 0; i < dim; i++) {
          lower[i][i] = 1;
        }

        this.fractionLower = this.convert(this.dim, this.fractionLower, lower); // making lower fraction

        this.multiplier = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](1, 1);
      }

      _createClass(LuDecompService, [{
        key: "copyArray",
        value: function copyArray(dim, arr1, arrcopy, numrow) {
          for (var i = 0; i < dim; i++) {
            arrcopy[i] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](arr1[numrow][i].numerator, arr1[numrow][i].denominator);
          }

          return arrcopy;
        }
      }, {
        key: "convert",
        value: function convert(arrsize, test, numbers) {
          // make this do teh entire array and return an array
          var num2;
          var text = '';

          for (var i = 0; i < arrsize; i++) {
            for (var j = 0; j < arrsize; j++) {
              if (numbers[i][j] % 1 !== 0) {
                text = Math.abs(numbers[i][j]) + '';
                var integerPlaces = text.indexOf('.');
                var decimalPlaces = text.length - integerPlaces - 1;
                numbers[i][j] = numbers[i][j] * Math.pow(10, decimalPlaces);
                num2 = Math.pow(10, decimalPlaces);
                test[i][j] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](numbers[i][j], num2);

                _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"].reduce(test[i][j]);
              } else {
                test[i][j] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](numbers[i][j], 1);
              }
            }
          }

          return test;
        }
      }, {
        key: "multiplyTwoMatrix",
        value: function multiplyTwoMatrix(dim, lower, upper, test) {
          var testing = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](0, 1);

          for (var i = 0; i < dim; i++) {
            for (var j = 0; j < dim; j++) {
              test[i][j] = new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["Fractions"](0, 1);

              for (var k = 0; k < dim; k++) {
                testing = lower[i][k].multiplyingNoChange(upper[k][j]);
                test[i][j] = test[i][j].addingNoChange(testing);
              }
            }
          }

          return test;
        }
      }, {
        key: "addParameter",
        value: function addParameter(p) {
          this.parameters.push(p);
        }
      }, {
        key: "infiniteString",
        value: function infiniteString(xPos, yPos, fractionLower, infiniteSolString) {
          for (var i = 0; i < this.dim; i++) {
            for (var j = 0; j < this.dim; j++) {
              if (xPos === j && yPos === i) {
                infiniteSolString.data[i][j] = 't';
              } else {
                var fractionStr = fractionLower[i][j].numerator + ' / ' + fractionLower[i][j].denominator;

                if (fractionLower[i][j].denominator === 1) {
                  fractionStr = fractionLower[i][j].numerator;
                }

                infiniteSolString.data[i][j] = fractionStr;
              }
            }
          }

          return infiniteSolString;
        }
      }, {
        key: "compute",
        value: function compute() {
          var oldColPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          // adjusting A(1,1), A(2,1) in the matrix L and U using gaussian
          for (; this.lin < this.dim - 1; this.lin++) {
            // a represents column
            for (this.col = oldColPosition; this.col < this.dim - this.lin; this.col++) {
              if (this.fractionInput[this.lin][this.lin].numerator !== this.fractionZero.numerator) {
                this.multiplier = this.fractionInput[this.col + this.lin][this.lin].divisionNoChange(this.fractionInput[this.lin][this.lin]);
                this.event.emit({
                  action: 'DisplayStep',
                  msg: 'Multiplier',
                  value: this.multiplier
                });
                this.fractionLower[this.col + this.lin][this.lin] = this.fractionLower[this.col + this.lin][this.lin].addingNoChange(this.multiplier);
                this.event.emit({
                  action: 'DisplayStep',
                  msg: ' Lower',
                  value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionLower, this.dim)
                });
              } else {
                if (this.fractionInput[this.lin][this.lin].numerator === this.fractionZero.numerator && this.fractionInput[this.col + this.lin][this.lin].numerator === this.fractionZero.numerator) {
                  // System.out.println("please pick a parameterCompute for the matrix since there is infinite solutions");
                  //  parameterCompute = input.nextInt();
                  if (this.parameters[this.index] === undefined) {
                    var mat = this.infiniteString(this.lin, this.col + this.lin, this.fractionLower, new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixString"](this.initDoubleArray(this.dim), this.dim));
                    this.event.emit({
                      action: 'RequestParamForInfCase',
                      msg: 'Please Input Parameter t ',
                      value: this.col,
                      requestMat: mat
                    });
                    return;
                  }

                  this.multiplier.numerator = this.parameters[this.index];
                  this.index++;
                  this.multiplier.denominator = 1;
                  this.fractionLower[this.col + this.lin][this.lin] = this.fractionLower[this.col + this.lin][this.lin].addingNoChange(this.multiplier);
                  this.event.emit({
                    action: 'DisplayStep',
                    msg: 'Multiplier',
                    value: this.multiplier
                  });
                } else {
                  if (this.fractionInput[this.lin][this.lin].numerator === this.fractionZero.numerator && this.fractionInput[this.col + this.lin][this.lin].numerator !== this.fractionZero.numerator) {
                    this.event.emit({
                      action: 'StopNoSolution',
                      msg: 'No LU decomposition',
                      value: null
                    });
                    return;
                  }
                }
              }

              this.copyArray(this.dim, this.fractionInput, this.fractionCopy, this.lin);

              for (var j = 0; j < this.dim; j++) {
                this.fractionCopy[j] = this.fractionCopy[j].multiplyingNoChange(this.multiplier); // copies all the number in the row into a copy matrix which will be used in gaussian elimnination
              }

              for (var _j = this.lin; _j < this.dim; _j++) {
                this.fractionInput[this.col + this.lin][_j].subtracting(this.fractionCopy[_j]);
              }
            } // if resuming a compute, after the the resume set the column to start at 1


            oldColPosition = 1;
          }

          this.event.emit({
            action: 'DisplaySolution',
            msg: ' Lower Final',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionLower, this.dim)
          });
          this.event.emit({
            action: 'DisplaySolution',
            msg: ' Upper Final',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionInput, this.dim)
          });
          this.multiplyTwoMatrix(this.dim, this.fractionLower, this.fractionInput, this.fractionProduct);
          this.event.emit({
            action: 'DisplaySolution',
            msg: ' Lower x Upper',
            value: new _lu_decomposition_lu_decomposition_component__WEBPACK_IMPORTED_MODULE_0__["MatrixFraction"](this.fractionProduct, this.dim)
          });
        }
      }, {
        key: "initDoubleArray",
        value: function initDoubleArray(dim) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var res = [];

          for (var i = 0; i < dim; i++) {
            res.push([]);

            for (var j = 0; j < dim; j++) {
              res[i].push(value);
            }
          }

          return res;
        }
      }, {
        key: "initArray",
        value: function initArray(dim) {
          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var res = [];

          for (var i = 0; i < dim; i++) {
            res.push(value);
          }

          return res;
        }
      }]);

      return LuDecompService;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jacky/Desktop/works/git/test/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map