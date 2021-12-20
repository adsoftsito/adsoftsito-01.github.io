(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-admin-layout-admin-layout-module~layouts-home-layout-home-layout-module"],{

/***/ "/QLm":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "0MNC":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




var LayoutModule = function LayoutModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LayoutModule);
};

LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  }
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Global registry for all dynamically-created, injected media queries. */


var mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */

var mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */

var MediaMatcher = /*#__PURE__*/function () {
  function MediaMatcher(_platform) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MediaMatcher);

    this._platform = _platform;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
    // call it from a different scope.
    window.matchMedia.bind(window) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MediaMatcher, [{
    key: "matchMedia",
    value: function matchMedia(query) {
      if (this._platform.WEBKIT) {
        createEmptyStyleRule(query);
      }

      return this._matchMedia(query);
    }
  }]);

  return MediaMatcher;
}();

MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
  return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
};

MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function MediaMatcher_Factory() {
    return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
  },
  token: MediaMatcher,
  providedIn: "root"
});

MediaMatcher.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MediaMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
    }];
  }, null);
})();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */


function createEmptyStyleRule(query) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }

  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }

    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */


function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: function addListener() {},
    removeListener: function removeListener() {}
  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Utility for checking the matching state of @media queries. */


var BreakpointObserver = /*#__PURE__*/function () {
  function BreakpointObserver(_mediaMatcher, _zone) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BreakpointObserver);

    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    /**  A map of all media queries currently being listened for. */

    this._queries = new Map();
    /** A subject for all other observables to takeUntil based on. */

    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
  }
  /** Completes the active subject, signalling to all other observables to complete. */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BreakpointObserver, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroySubject.next();

      this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */

  }, {
    key: "isMatched",
    value: function isMatched(value) {
      var _this = this;

      var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceArray"])(value));
      return queries.some(function (mediaQuery) {
        return _this._registerQuery(mediaQuery).mql.matches;
      });
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */

  }, {
    key: "observe",
    value: function observe(value) {
      var _this2 = this;

      var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceArray"])(value));
      var observables = queries.map(function (query) {
        return _this2._registerQuery(query).observable;
      });
      var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

      stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(0)));
      return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (breakpointStates) {
        var response = {
          matches: false,
          breakpoints: {}
        };
        breakpointStates.forEach(function (_ref) {
          var matches = _ref.matches,
              query = _ref.query;
          response.matches = response.matches || matches;
          response.breakpoints[query] = matches;
        });
        return response;
      }));
    }
    /** Registers a specific query to be listened for. */

  }, {
    key: "_registerQuery",
    value: function _registerQuery(query) {
      var _this3 = this;

      // Only set up a new MediaQueryList if it is not already being listened for.
      if (this._queries.has(query)) {
        return this._queries.get(query);
      }

      var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.


      var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
        // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
        // back into the zone because matchMedia is only included in Zone.js by loading the
        // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
        // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
        // patches it.
        var handler = function handler(e) {
          return _this3._zone.run(function () {
            return observer.next(e);
          });
        };

        mql.addListener(handler);
        return function () {
          mql.removeListener(handler);
        };
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref2) {
        var matches = _ref2.matches;
        return {
          query: query,
          matches: matches
        };
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroySubject)); // Add the MediaQueryList to the set of queries.

      var output = {
        observable: queryObservable,
        mql: mql
      };

      this._queries.set(query, output);

      return output;
    }
  }]);

  return BreakpointObserver;
}();

BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
  return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
};

BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
  factory: function BreakpointObserver_Factory() {
    return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]));
  },
  token: BreakpointObserver,
  providedIn: "root"
});

BreakpointObserver.ctorParameters = function () {
  return [{
    type: MediaMatcher
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BreakpointObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MediaMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
    }];
  }, null);
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */


function splitQueries(queries) {
  return queries.map(function (query) {
    return query.split(',');
  }).reduce(function (a1, a2) {
    return a1.concat(a2);
  }).map(function (query) {
    return query.trim();
  });
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name


var Breakpoints = {
  XSmall: '(max-width: 599.99px)',
  Small: '(min-width: 600px) and (max-width: 959.99px)',
  Medium: '(min-width: 960px) and (max-width: 1279.99px)',
  Large: '(min-width: 1280px) and (max-width: 1919.99px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ "1arE":
/*!**************************************************!*\
  !*** ./src/services/graphql.products.service.ts ***!
  \**************************************************/
/*! exports provided: GraphqlProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlProductsService", function() { return GraphqlProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Component, OnInit, OnDestroy } from '@angular/core';

//import { StorageService } from "./storage.service";
var TOKENAUTH = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation TokenAuth($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"], ["\n  mutation TokenAuth($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"])));
var LINKS = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query Links {\n    links {\n      id\n      url\n      description\n      precio\n      postedBy {\n        username\n      }\n    }\n  }\n"], ["\n  query Links {\n    links {\n      id\n      url\n      description\n      precio\n      postedBy {\n        username\n      }\n    }\n  }\n"])));
var LINKSPARAM = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query Links($nombre: String!) {\n    links(nombre: $nombre) {\n      id\n      url\n      description\n      precio\n      postedBy {\n        username\n      }\n    }\n  }\n"], ["\n  query Links($nombre: String!) {\n    links(nombre: $nombre) {\n      id\n      url\n      description\n      precio\n      postedBy {\n        username\n      }\n    }\n  }\n"])));
// 'idprod', 'codigosat', 'noidentificacion', 'claveunidad', 'descuento', 'trasladoiva', 'retiva', and 'ieps'
var CREATELINK = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  mutation CreateLink($url: String!, $description: String!, $precio: Float!) {\n    createLink(url: $url, description: $description, precio: $precio, idprod:\"\", codigosat: \"\", noidentificacion: \"\", claveunidad: \"\", descuento: 0.00, trasladoiva: 0.00, retiva: 0.00, ieps: 0.00) {\n      id\n      url\n      description\n      precio\n   }\n  }\n  "], ["\n  mutation CreateLink($url: String!, $description: String!, $precio: Float!) {\n    createLink(url: $url, description: $description, precio: $precio, idprod:\"\", codigosat: \"\", noidentificacion: \"\", claveunidad: \"\", descuento: 0.00, trasladoiva: 0.00, retiva: 0.00, ieps: 0.00) {\n      id\n      url\n      description\n      precio\n   }\n  }\n  "])));
var GraphqlProductsService = /** @class */ (function () {
    function GraphqlProductsService(apollo) {
        this.apollo = apollo;
    }
    GraphqlProductsService.prototype.links = function (valor) {
        //alert(valor);
        if (valor == "-") {
            return this.apollo.watchQuery({
                query: LINKS
            });
        }
        else {
            //alert(valor);
            return this.apollo.watchQuery({
                query: LINKSPARAM,
                variables: {
                    nombre: valor
                },
            });
        }
    };
    GraphqlProductsService.prototype.createLink = function (mytoken, url, description, precio) {
        console.log("token auth = " + mytoken);
        return this.apollo.mutate({
            mutation: CREATELINK,
            variables: {
                url: url,
                description: description,
                precio: precio
            },
            context: {
                // example of setting the headers with context per operation
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'JWT ' + mytoken),
            },
        });
    };
    GraphqlProductsService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }
    ]; };
    GraphqlProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])
    ], GraphqlProductsService);
    return GraphqlProductsService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "3Buq":
/*!*******************************************!*\
  !*** ./src/app/icons/icons.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3Puv":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\"></div>\n");

/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL");
/* harmony import */ var _notifications_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.css */ "C+6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.ctorParameters = function () { return []; };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notifications',
            template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notifications_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "8+yc":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./icons.component.html */ "sqUA");
/* harmony import */ var _icons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons.component.css */ "3Buq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-icons',
            template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_icons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "A5z7":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js ***!
  \***********************************************************************/
/*! exports provided: MAT_CHIPS_DEFAULT_OPTIONS, MAT_CHIP_AVATAR, MAT_CHIP_REMOVE, MAT_CHIP_TRAILING_ICON, MatChip, MatChipAvatar, MatChipInput, MatChipList, MatChipListChange, MatChipRemove, MatChipSelectionChange, MatChipTrailingIcon, MatChipsModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_AVATAR", function() { return MAT_CHIP_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_REMOVE", function() { return MAT_CHIP_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIP_TRAILING_ICON", function() { return MAT_CHIP_TRAILING_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");




















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Event object emitted by MatChip when selected or deselected. */






var _c0 = ["*"];

var MatChipSelectionChange = function MatChipSelectionChange(
/** Reference to the chip that emitted the event. */
source,
/** Whether the chip that emitted the event is selected. */
selected) {
  var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipSelectionChange);

  this.source = source;
  this.selected = selected;
  this.isUserInput = isUserInput;
};
/**
 * Injection token that can be used to reference instances of `MatChipRemove`. It serves as
 * alternative token to the actual `MatChipRemove` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_CHIP_REMOVE = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatChipRemove');
/**
 * Injection token that can be used to reference instances of `MatChipAvatar`. It serves as
 * alternative token to the actual `MatChipAvatar` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var MAT_CHIP_AVATAR = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatChipAvatar');
/**
 * Injection token that can be used to reference instances of `MatChipTrailingIcon`. It serves as
 * alternative token to the actual `MatChipTrailingIcon` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var MAT_CHIP_TRAILING_ICON = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatChipTrailingIcon'); // Boilerplate for applying mixins to MatChip.

/** @docs-private */

var MatChipBase = function MatChipBase(_elementRef) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipBase);

  this._elementRef = _elementRef;
};

var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinDisableRipple"])(MatChipBase), 'primary'), -1);
/**
 * Dummy directive to add CSS class to chip avatar.
 * @docs-private
 */


var MatChipAvatar = function MatChipAvatar() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipAvatar);
};

MatChipAvatar.ɵfac = function MatChipAvatar_Factory(t) {
  return new (t || MatChipAvatar)();
};

MatChipAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatChipAvatar,
  selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]],
  hostAttrs: [1, "mat-chip-avatar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_CHIP_AVATAR,
    useExisting: MatChipAvatar
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChipAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-chip-avatar, [matChipAvatar]',
      host: {
        'class': 'mat-chip-avatar'
      },
      providers: [{
        provide: MAT_CHIP_AVATAR,
        useExisting: MatChipAvatar
      }]
    }]
  }], null, null);
})();
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * @docs-private
 */


var MatChipTrailingIcon = function MatChipTrailingIcon() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipTrailingIcon);
};

MatChipTrailingIcon.ɵfac = function MatChipTrailingIcon_Factory(t) {
  return new (t || MatChipTrailingIcon)();
};

MatChipTrailingIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatChipTrailingIcon,
  selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]],
  hostAttrs: [1, "mat-chip-trailing-icon"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_CHIP_TRAILING_ICON,
    useExisting: MatChipTrailingIcon
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChipTrailingIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
      host: {
        'class': 'mat-chip-trailing-icon'
      },
      providers: [{
        provide: MAT_CHIP_TRAILING_ICON,
        useExisting: MatChipTrailingIcon
      }]
    }]
  }], null, null);
})();
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */


var MatChip = /*#__PURE__*/function (_MatChipMixinBase2) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatChip, _MatChipMixinBase2);

  var _super = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatChip);

  function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, // @breaking-change 8.0.0 `animationMode` parameter to become required.
  animationMode, // @breaking-change 9.0.0 `_changeDetectorRef` parameter to become required.
  _changeDetectorRef, tabIndex, // @breaking-change 11.0.0 `_document` parameter to become required.
  _document) {
    var _this;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChip);

    _this = _super.call(this, _elementRef);
    _this._elementRef = _elementRef;
    _this._ngZone = _ngZone;
    _this._changeDetectorRef = _changeDetectorRef;
    /** Whether the chip has focus. */

    _this._hasFocus = false;
    /** Whether the chip list is selectable */

    _this.chipListSelectable = true;
    /** Whether the chip list is in multi-selection mode. */

    _this._chipListMultiple = false;
    /** Whether the chip list as a whole is disabled. */

    _this._chipListDisabled = false;
    _this._selected = false;
    _this._selectable = true;
    _this._disabled = false;
    _this._removable = true;
    /** Emits when the chip is focused. */

    _this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Emits when the chip is blured. */

    _this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Emitted when the chip is selected or deselected. */

    _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Emitted when the chip is destroyed. */

    _this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** Emitted when a chip is to be removed. */

    _this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();

    _this._addHostClassName(); // Dynamically create the ripple target, append it within the chip, and use it as the
    // chip's ripple target. Adding the class '.mat-chip-ripple' ensures that it will have
    // the proper styles.


    _this._chipRippleTarget = (_document || document).createElement('div');

    _this._chipRippleTarget.classList.add('mat-chip-ripple');

    _this._elementRef.nativeElement.appendChild(_this._chipRippleTarget);

    _this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["RippleRenderer"](Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), _ngZone, _this._chipRippleTarget, platform);

    _this._chipRipple.setupTriggerEvents(_elementRef);

    _this.rippleConfig = globalRippleOptions || {};
    _this._animationsDisabled = animationMode === 'NoopAnimations';
    _this.tabIndex = tabIndex != null ? parseInt(tabIndex) || -1 : -1;
    return _this;
  }
  /**
   * Whether ripples are disabled on interaction
   * @docs-private
   */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatChip, [{
    key: "_addHostClassName",
    value: function _addHostClassName() {
      var basicChipAttrName = 'mat-basic-chip';
      var element = this._elementRef.nativeElement;

      if (element.hasAttribute(basicChipAttrName) || element.tagName.toLowerCase() === basicChipAttrName) {
        element.classList.add(basicChipAttrName);
        return;
      } else {
        element.classList.add('mat-standard-chip');
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.destroyed.emit({
        chip: this
      });

      this._chipRipple._removeTriggerEvents();
    }
    /** Selects the chip. */

  }, {
    key: "select",
    value: function select() {
      if (!this._selected) {
        this._selected = true;

        this._dispatchSelectionChange();

        this._markForCheck();
      }
    }
    /** Deselects the chip. */

  }, {
    key: "deselect",
    value: function deselect() {
      if (this._selected) {
        this._selected = false;

        this._dispatchSelectionChange();

        this._markForCheck();
      }
    }
    /** Select this chip and emit selected event */

  }, {
    key: "selectViaInteraction",
    value: function selectViaInteraction() {
      if (!this._selected) {
        this._selected = true;

        this._dispatchSelectionChange(true);

        this._markForCheck();
      }
    }
    /** Toggles the current selected state of this chip. */

  }, {
    key: "toggleSelected",
    value: function toggleSelected() {
      var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this._selected = !this.selected;

      this._dispatchSelectionChange(isUserInput);

      this._markForCheck();

      return this.selected;
    }
    /** Allows for programmatic focusing of the chip. */

  }, {
    key: "focus",
    value: function focus() {
      if (!this._hasFocus) {
        this._elementRef.nativeElement.focus();

        this._onFocus.next({
          chip: this
        });
      }

      this._hasFocus = true;
    }
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */

  }, {
    key: "remove",
    value: function remove() {
      if (this.removable) {
        this.removed.emit({
          chip: this
        });
      }
    }
    /** Handles click events on the chip. */

  }, {
    key: "_handleClick",
    value: function _handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
      } else {
        event.stopPropagation();
      }
    }
    /** Handle custom key presses. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (this.disabled) {
        return;
      }

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DELETE"]:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["BACKSPACE"]:
          // If we are removable, remove the focused chip
          this.remove(); // Always prevent so page navigation does not occur

          event.preventDefault();
          break;

        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
          // If we are selectable, toggle the focused chip
          if (this.selectable) {
            this.toggleSelected(true);
          } // Always prevent space from scrolling the page since the list has focus


          event.preventDefault();
          break;
      }
    }
  }, {
    key: "_blur",
    value: function _blur() {
      var _this2 = this;

      // When animations are enabled, Angular may end up removing the chip from the DOM a little
      // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
      // that moves focus not the next item. To work around the issue, we defer marking the chip
      // as not focused until the next time the zone stabilizes.
      this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
        _this2._ngZone.run(function () {
          _this2._hasFocus = false;

          _this2._onBlur.next({
            chip: _this2
          });
        });
      });
    }
  }, {
    key: "_dispatchSelectionChange",
    value: function _dispatchSelectionChange() {
      var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.selectionChange.emit({
        source: this,
        isUserInput: isUserInput,
        selected: this._selected
      });
    }
  }, {
    key: "_markForCheck",
    value: function _markForCheck() {
      // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
      if (this._changeDetectorRef) {
        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "rippleDisabled",
    get: function get() {
      return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
    }
    /** Whether the chip is selected. */

  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    },
    set: function set(value) {
      var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);

      if (coercedValue !== this._selected) {
        this._selected = coercedValue;

        this._dispatchSelectionChange();
      }
    }
    /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */

  }, {
    key: "value",
    get: function get() {
      return this._value !== undefined ? this._value : this._elementRef.nativeElement.textContent;
    },
    set: function set(value) {
      this._value = value;
    }
    /**
     * Whether or not the chip is selectable. When a chip is not selectable,
     * changes to its selected state are always ignored. By default a chip is
     * selectable, and it becomes non-selectable if its parent chip list is
     * not selectable.
     */

  }, {
    key: "selectable",
    get: function get() {
      return this._selectable && this.chipListSelectable;
    },
    set: function set(value) {
      this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** Whether the chip is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this._chipListDisabled || this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /**
     * Determines whether or not the chip displays the remove styling and emits (removed) events.
     */

  }, {
    key: "removable",
    get: function get() {
      return this._removable;
    },
    set: function set(value) {
      this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** The ARIA selected applied to the chip. */

  }, {
    key: "ariaSelected",
    get: function get() {
      // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
      // it adds noise to NVDA users where "not selected" will be read out for each chip.
      return this.selectable && (this._chipListMultiple || this.selected) ? this.selected.toString() : null;
    }
  }]);

  return MatChip;
}(_MatChipMixinBase);

MatChip.ɵfac = function MatChip_Factory(t) {
  return new (t || MatChip)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], 8));
};

MatChip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatChip,
  selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
  contentQueries: function MatChip_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_AVATAR, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_TRAILING_ICON, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_CHIP_REMOVE, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
    }
  },
  hostAttrs: ["role", "option", 1, "mat-chip", "mat-focus-indicator"],
  hostVars: 14,
  hostBindings: function MatChip_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatChip_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      })("keydown", function MatChip_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatChip_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function MatChip_blur_HostBindingHandler() {
        return ctx._blur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString())("aria-selected", ctx.ariaSelected);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-chip-selected", ctx.selected)("mat-chip-with-avatar", ctx.avatar)("mat-chip-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mat-chip-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationsDisabled);
    }
  },
  inputs: {
    color: "color",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex",
    selected: "selected",
    value: "value",
    selectable: "selectable",
    disabled: "disabled",
    removable: "removable"
  },
  outputs: {
    selectionChange: "selectionChange",
    destroyed: "destroyed",
    removed: "removed"
  },
  exportAs: ["matChip"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]]
});

MatChip.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
    }]
  }];
};

MatChip.propDecorators = {
  avatar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MAT_CHIP_AVATAR]
  }],
  trailingIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MAT_CHIP_TRAILING_ICON]
  }],
  removeIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MAT_CHIP_REMOVE]
  }],
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  selectable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  removable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  selectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  destroyed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  removed: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
      inputs: ['color', 'disableRipple', 'tabIndex'],
      exportAs: 'matChip',
      host: {
        'class': 'mat-chip mat-focus-indicator',
        '[attr.tabindex]': 'disabled ? null : tabIndex',
        'role': 'option',
        '[class.mat-chip-selected]': 'selected',
        '[class.mat-chip-with-avatar]': 'avatar',
        '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
        '[class.mat-chip-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationsDisabled',
        '[attr.disabled]': 'disabled || null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-selected]': 'ariaSelected',
        '(click)': '_handleClick($event)',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': 'focus()',
        '(blur)': '_blur()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]
      }]
    }];
  }, {
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    removed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    selectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    removable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    avatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MAT_CHIP_AVATAR]
    }],
    trailingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MAT_CHIP_TRAILING_ICON]
    }],
    removeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MAT_CHIP_REMOVE]
    }]
  });
})();
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */


var MatChipRemove = /*#__PURE__*/function () {
  function MatChipRemove(_parentChip, // @breaking-change 11.0.0 `elementRef` parameter to be made required.
  elementRef) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipRemove);

    this._parentChip = _parentChip; // @breaking-change 11.0.0 Remove null check for `elementRef`.

    if (elementRef && elementRef.nativeElement.nodeName === 'BUTTON') {
      elementRef.nativeElement.setAttribute('type', 'button');
    }
  }
  /** Calls the parent chip's public `remove()` method if applicable. */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatChipRemove, [{
    key: "_handleClick",
    value: function _handleClick(event) {
      var parentChip = this._parentChip;

      if (parentChip.removable && !parentChip.disabled) {
        parentChip.remove();
      } // We need to stop event propagation because otherwise the event will bubble up to the
      // form field and cause the `onContainerClick` method to be invoked. This method would then
      // reset the focused chip that has been focused after chip removal. Usually the parent
      // the parent click listener of the `MatChip` would prevent propagation, but it can happen
      // that the chip is being removed before the event bubbles up.


      event.stopPropagation();
    }
  }]);

  return MatChipRemove;
}();

MatChipRemove.ɵfac = function MatChipRemove_Factory(t) {
  return new (t || MatChipRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MatChip), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]));
};

MatChipRemove.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatChipRemove,
  selectors: [["", "matChipRemove", ""]],
  hostAttrs: [1, "mat-chip-remove", "mat-chip-trailing-icon"],
  hostBindings: function MatChipRemove_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatChipRemove_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_CHIP_REMOVE,
    useExisting: MatChipRemove
  }])]
});

MatChipRemove.ctorParameters = function () {
  return [{
    type: MatChip
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChipRemove, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matChipRemove]',
      host: {
        'class': 'mat-chip-remove mat-chip-trailing-icon',
        '(click)': '_handleClick($event)'
      },
      providers: [{
        provide: MAT_CHIP_REMOVE,
        useExisting: MatChipRemove
      }]
    }]
  }], function () {
    return [{
      type: MatChip
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for the chips module. */


var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('mat-chips-default-options');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatChipList.

/** @docs-private */

var MatChipListBase = function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
/** @docs-private */
ngControl) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipListBase);

  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
};

var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"])(MatChipListBase); // Increasing integer for generating unique ids for chip-list components.


var nextUniqueId = 0;
/** Change event object that is emitted when the chip list value has changed. */

var MatChipListChange = function MatChipListChange(
/** Chip list that emitted the event. */
source,
/** Value of the chip list when the event was emitted. */
value) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipListChange);

  this.source = source;
  this.value = value;
};
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */


var MatChipList = /*#__PURE__*/function (_MatChipListMixinBase2) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatChipList, _MatChipListMixinBase2);

  var _super2 = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatChipList);

  function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher,
  /** @docs-private */
  ngControl) {
    var _this3;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipList);

    _this3 = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    _this3._elementRef = _elementRef;
    _this3._changeDetectorRef = _changeDetectorRef;
    _this3._dir = _dir;
    _this3.ngControl = ngControl;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this3.controlType = 'mat-chip-list';
    /**
     * When a chip is destroyed, we store the index of the destroyed chip until the chips
     * query list notifies about the update. This is necessary because we cannot determine an
     * appropriate chip that should receive focus until the array of chips updated completely.
     */

    _this3._lastDestroyedChipIndex = null;
    /** Subject that emits when the component has been destroyed. */

    _this3._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
    /** Uid of the chip list */

    _this3._uid = "mat-chip-list-".concat(nextUniqueId++);
    /** Tab index for the chip list. */

    _this3._tabIndex = 0;
    /**
     * User defined tab index.
     * When it is not null, use user defined tab index. Otherwise use _tabIndex
     */

    _this3._userTabIndex = null;
    /** Function when touched */

    _this3._onTouched = function () {};
    /** Function when changed */


    _this3._onChange = function () {};

    _this3._multiple = false;

    _this3._compareWith = function (o1, o2) {
      return o1 === o2;
    };

    _this3._required = false;
    _this3._disabled = false;
    /** Orientation of the chip list. */

    _this3.ariaOrientation = 'horizontal';
    _this3._selectable = true;
    /** Event emitted when the selected chip list value has been changed by the user. */

    _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /**
     * Event that emits whenever the raw value of the chip-list changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    _this3.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();

    if (_this3.ngControl) {
      _this3.ngControl.valueAccessor = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3);
    }

    return _this3;
  }
  /** The array of selected chips inside chip list. */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatChipList, [{
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this4 = this;

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusKeyManager"](this.chips).withWrap().withVerticalOrientation().withHomeAndEnd().withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');

      if (this._dir) {
        this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroyed)).subscribe(function (dir) {
          return _this4._keyManager.withHorizontalOrientation(dir);
        });
      }

      this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroyed)).subscribe(function () {
        _this4._allowFocusEscape();
      }); // When the list changes, re-subscribe


      this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroyed)).subscribe(function () {
        if (_this4.disabled) {
          // Since this happens after the content has been
          // checked, we need to defer it to the next tick.
          Promise.resolve().then(function () {
            _this4._syncChipsState();
          });
        }

        _this4._resetChips(); // Reset chips selected/deselected status


        _this4._initializeSelection(); // Check to see if we need to update our tab index


        _this4._updateTabIndex(); // Check to see if we have a destroyed chip and need to refocus


        _this4._updateFocusForDestroyedChips();

        _this4.stateChanges.next();
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_17__["SelectionModel"](this.multiple, undefined, false);
      this.stateChanges.next();
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();

        if (this.ngControl.disabled !== this._disabled) {
          this.disabled = !!this.ngControl.disabled;
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();

      this.stateChanges.complete();

      this._dropSubscriptions();
    }
    /** Associates an HTML input element with this chip list. */

  }, {
    key: "registerInput",
    value: function registerInput(inputElement) {
      this._chipInput = inputElement; // We use this attribute to match the chip list to its input in test harnesses.
      // Set the attribute directly here to avoid "changed after checked" errors.

      this._elementRef.nativeElement.setAttribute('data-mat-chip-input', inputElement.id);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",
    value: function setDescribedByIds(ids) {
      this._ariaDescribedby = ids.join(' ');
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if (this.chips) {
        this._setSelectionByValue(value, false);
      }
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    } // Implemented as part of ControlValueAccessor.

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick(event) {
      if (!this._originatesFromChip(event)) {
        this.focus();
      }
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */

  }, {
    key: "focus",
    value: function focus(options) {
      if (this.disabled) {
        return;
      } // TODO: ARIA says this should focus the first `selected` chip if any are selected.
      // Focus on first element if there's no chipInput inside chip-list


      if (this._chipInput && this._chipInput.focused) {// do nothing
      } else if (this.chips.length > 0) {
        this._keyManager.setFirstItemActive();

        this.stateChanges.next();
      } else {
        this._focusInput(options);

        this.stateChanges.next();
      }
    }
    /** Attempt to focus an input if we have one. */

  }, {
    key: "_focusInput",
    value: function _focusInput(options) {
      if (this._chipInput) {
        this._chipInput.focus(options);
      }
    }
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */

  }, {
    key: "_keydown",
    value: function _keydown(event) {
      var target = event.target; // If they are on an empty input and hit backspace, focus the last chip

      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["BACKSPACE"] && this._isInputEmpty(target)) {
        this._keyManager.setLastItemActive();

        event.preventDefault();
      } else if (target && target.classList.contains('mat-chip')) {
        this._keyManager.onKeydown(event);

        this.stateChanges.next();
      }
    }
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */

  }, {
    key: "_updateTabIndex",
    value: function _updateTabIndex() {
      // If we have 0 chips, we should not allow keyboard focus
      this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    }
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */

  }, {
    key: "_updateFocusForDestroyedChips",
    value: function _updateFocusForDestroyedChips() {
      // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
      if (this._lastDestroyedChipIndex != null) {
        if (this.chips.length) {
          var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);

          this._keyManager.setActiveItem(newChipIndex);
        } else {
          this.focus();
        }
      }

      this._lastDestroyedChipIndex = null;
    }
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */

  }, {
    key: "_isValidIndex",
    value: function _isValidIndex(index) {
      return index >= 0 && index < this.chips.length;
    }
  }, {
    key: "_isInputEmpty",
    value: function _isInputEmpty(element) {
      if (element && element.nodeName.toLowerCase() === 'input') {
        var input = element;
        return !input.value;
      }

      return false;
    }
  }, {
    key: "_setSelectionByValue",
    value: function _setSelectionByValue(value) {
      var _this5 = this;

      var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this._clearSelection();

      this.chips.forEach(function (chip) {
        return chip.deselect();
      });

      if (Array.isArray(value)) {
        value.forEach(function (currentValue) {
          return _this5._selectValue(currentValue, isUserInput);
        });

        this._sortValues();
      } else {
        var correspondingChip = this._selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
        // mode, because we don't know what chip the user interacted with last.


        if (correspondingChip) {
          if (isUserInput) {
            this._keyManager.setActiveItem(correspondingChip);
          }
        }
      }
    }
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */

  }, {
    key: "_selectValue",
    value: function _selectValue(value) {
      var _this6 = this;

      var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var correspondingChip = this.chips.find(function (chip) {
        return chip.value != null && _this6._compareWith(chip.value, value);
      });

      if (correspondingChip) {
        isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();

        this._selectionModel.select(correspondingChip);
      }

      return correspondingChip;
    }
  }, {
    key: "_initializeSelection",
    value: function _initializeSelection() {
      var _this7 = this;

      // Defer setting the value in order to avoid the "Expression
      // has changed after it was checked" errors from Angular.
      Promise.resolve().then(function () {
        if (_this7.ngControl || _this7._value) {
          _this7._setSelectionByValue(_this7.ngControl ? _this7.ngControl.value : _this7._value, false);

          _this7.stateChanges.next();
        }
      });
    }
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */

  }, {
    key: "_clearSelection",
    value: function _clearSelection(skip) {
      this._selectionModel.clear();

      this.chips.forEach(function (chip) {
        if (chip !== skip) {
          chip.deselect();
        }
      });
      this.stateChanges.next();
    }
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */

  }, {
    key: "_sortValues",
    value: function _sortValues() {
      var _this8 = this;

      if (this._multiple) {
        this._selectionModel.clear();

        this.chips.forEach(function (chip) {
          if (chip.selected) {
            _this8._selectionModel.select(chip);
          }
        });
        this.stateChanges.next();
      }
    }
    /** Emits change event to set the model value. */

  }, {
    key: "_propagateChanges",
    value: function _propagateChanges(fallbackValue) {
      var valueToEmit = null;

      if (Array.isArray(this.selected)) {
        valueToEmit = this.selected.map(function (chip) {
          return chip.value;
        });
      } else {
        valueToEmit = this.selected ? this.selected.value : fallbackValue;
      }

      this._value = valueToEmit;
      this.change.emit(new MatChipListChange(this, valueToEmit));
      this.valueChange.emit(valueToEmit);

      this._onChange(valueToEmit);

      this._changeDetectorRef.markForCheck();
    }
    /** When blurred, mark the field as touched when focus moved outside the chip list. */

  }, {
    key: "_blur",
    value: function _blur() {
      var _this9 = this;

      if (!this._hasFocusedChip()) {
        this._keyManager.setActiveItem(-1);
      }

      if (!this.disabled) {
        if (this._chipInput) {
          // If there's a chip input, we should check whether the focus moved to chip input.
          // If the focus is not moved to chip input, mark the field as touched. If the focus moved
          // to chip input, do nothing.
          // Timeout is needed to wait for the focus() event trigger on chip input.
          setTimeout(function () {
            if (!_this9.focused) {
              _this9._markAsTouched();
            }
          });
        } else {
          // If there's no chip input, then mark the field as touched.
          this._markAsTouched();
        }
      }
    }
    /** Mark the field as touched */

  }, {
    key: "_markAsTouched",
    value: function _markAsTouched() {
      this._onTouched();

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */

  }, {
    key: "_allowFocusEscape",
    value: function _allowFocusEscape() {
      var _this10 = this;

      if (this._tabIndex !== -1) {
        this._tabIndex = -1;
        setTimeout(function () {
          _this10._tabIndex = _this10._userTabIndex || 0;

          _this10._changeDetectorRef.markForCheck();
        });
      }
    }
  }, {
    key: "_resetChips",
    value: function _resetChips() {
      this._dropSubscriptions();

      this._listenToChipsFocus();

      this._listenToChipsSelection();

      this._listenToChipsRemoved();
    }
  }, {
    key: "_dropSubscriptions",
    value: function _dropSubscriptions() {
      if (this._chipFocusSubscription) {
        this._chipFocusSubscription.unsubscribe();

        this._chipFocusSubscription = null;
      }

      if (this._chipBlurSubscription) {
        this._chipBlurSubscription.unsubscribe();

        this._chipBlurSubscription = null;
      }

      if (this._chipSelectionSubscription) {
        this._chipSelectionSubscription.unsubscribe();

        this._chipSelectionSubscription = null;
      }

      if (this._chipRemoveSubscription) {
        this._chipRemoveSubscription.unsubscribe();

        this._chipRemoveSubscription = null;
      }
    }
    /** Listens to user-generated selection events on each chip. */

  }, {
    key: "_listenToChipsSelection",
    value: function _listenToChipsSelection() {
      var _this11 = this;

      this._chipSelectionSubscription = this.chipSelectionChanges.subscribe(function (event) {
        event.source.selected ? _this11._selectionModel.select(event.source) : _this11._selectionModel.deselect(event.source); // For single selection chip list, make sure the deselected value is unselected.

        if (!_this11.multiple) {
          _this11.chips.forEach(function (chip) {
            if (!_this11._selectionModel.isSelected(chip) && chip.selected) {
              chip.deselect();
            }
          });
        }

        if (event.isUserInput) {
          _this11._propagateChanges();
        }
      });
    }
    /** Listens to user-generated selection events on each chip. */

  }, {
    key: "_listenToChipsFocus",
    value: function _listenToChipsFocus() {
      var _this12 = this;

      this._chipFocusSubscription = this.chipFocusChanges.subscribe(function (event) {
        var chipIndex = _this12.chips.toArray().indexOf(event.chip);

        if (_this12._isValidIndex(chipIndex)) {
          _this12._keyManager.updateActiveItem(chipIndex);
        }

        _this12.stateChanges.next();
      });
      this._chipBlurSubscription = this.chipBlurChanges.subscribe(function () {
        _this12._blur();

        _this12.stateChanges.next();
      });
    }
  }, {
    key: "_listenToChipsRemoved",
    value: function _listenToChipsRemoved() {
      var _this13 = this;

      this._chipRemoveSubscription = this.chipRemoveChanges.subscribe(function (event) {
        var chip = event.chip;

        var chipIndex = _this13.chips.toArray().indexOf(event.chip); // In case the chip that will be removed is currently focused, we temporarily store
        // the index in order to be able to determine an appropriate sibling chip that will
        // receive focus.


        if (_this13._isValidIndex(chipIndex) && chip._hasFocus) {
          _this13._lastDestroyedChipIndex = chipIndex;
        }
      });
    }
    /** Checks whether an event comes from inside a chip element. */

  }, {
    key: "_originatesFromChip",
    value: function _originatesFromChip(event) {
      var currentElement = event.target;

      while (currentElement && currentElement !== this._elementRef.nativeElement) {
        if (currentElement.classList.contains('mat-chip')) {
          return true;
        }

        currentElement = currentElement.parentElement;
      }

      return false;
    }
    /** Checks whether any of the chips is focused. */

  }, {
    key: "_hasFocusedChip",
    value: function _hasFocusedChip() {
      return this.chips && this.chips.some(function (chip) {
        return chip._hasFocus;
      });
    }
    /** Syncs the list's state with the individual chips. */

  }, {
    key: "_syncChipsState",
    value: function _syncChipsState() {
      var _this14 = this;

      if (this.chips) {
        this.chips.forEach(function (chip) {
          chip._chipListDisabled = _this14._disabled;
          chip._chipListMultiple = _this14.multiple;
        });
      }
    }
  }, {
    key: "selected",
    get: function get() {
      return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The ARIA role applied to the chip list. */

  }, {
    key: "role",
    get: function get() {
      return this.empty ? null : 'listbox';
    }
    /** Whether the user should be allowed to select multiple chips. */

  }, {
    key: "multiple",
    get: function get() {
      return this._multiple;
    },
    set: function set(value) {
      this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);

      this._syncChipsState();
    }
    /**
     * A function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */

  }, {
    key: "compareWith",
    get: function get() {
      return this._compareWith;
    },
    set: function set(fn) {
      this._compareWith = fn;

      if (this._selectionModel) {
        // A different comparator means the selection could change.
        this._initializeSelection();
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.writeValue(value);
      this._value = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "id",
    get: function get() {
      return this._chipInput ? this._chipInput.id : this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
      this.stateChanges.next();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "placeholder",
    get: function get() {
      return this._chipInput ? this._chipInput.placeholder : this._placeholder;
    },
    set: function set(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    /** Whether any chips or the matChipInput inside of this chip-list has focus. */

  }, {
    key: "focused",
    get: function get() {
      return this._chipInput && this._chipInput.focused || this._hasFocusedChip();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "empty",
    get: function get() {
      return (!this._chipInput || this._chipInput.empty) && (!this.chips || this.chips.length === 0);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "shouldLabelFloat",
    get: function get() {
      return !this.empty || this.focused;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "disabled",
    get: function get() {
      return this.ngControl ? !!this.ngControl.disabled : this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);

      this._syncChipsState();
    }
    /**
     * Whether or not this chip list is selectable. When a chip list is not selectable,
     * the selected states for all the chips inside the chip list are always ignored.
     */

  }, {
    key: "selectable",
    get: function get() {
      return this._selectable;
    },
    set: function set(value) {
      var _this15 = this;

      this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);

      if (this.chips) {
        this.chips.forEach(function (chip) {
          return chip.chipListSelectable = _this15._selectable;
        });
      }
    }
  }, {
    key: "tabIndex",
    set: function set(value) {
      this._userTabIndex = value;
      this._tabIndex = value;
    }
    /** Combined stream of all of the child chips' selection change events. */

  }, {
    key: "chipSelectionChanges",
    get: function get() {
      return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.chips.map(function (chip) {
        return chip.selectionChange;
      })));
    }
    /** Combined stream of all of the child chips' focus change events. */

  }, {
    key: "chipFocusChanges",
    get: function get() {
      return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.chips.map(function (chip) {
        return chip._onFocus;
      })));
    }
    /** Combined stream of all of the child chips' blur change events. */

  }, {
    key: "chipBlurChanges",
    get: function get() {
      return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.chips.map(function (chip) {
        return chip._onBlur;
      })));
    }
    /** Combined stream of all of the child chips' remove change events. */

  }, {
    key: "chipRemoveChanges",
    get: function get() {
      return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.chips.map(function (chip) {
        return chip.destroyed;
      })));
    }
  }]);

  return MatChipList;
}(_MatChipListMixinBase);

MatChipList.ɵfac = function MatChipList_Factory(t) {
  return new (t || MatChipList)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"], 10));
};

MatChipList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatChipList,
  selectors: [["mat-chip-list"]],
  contentQueries: function MatChipList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatChip, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chips = _t);
    }
  },
  hostAttrs: [1, "mat-chip-list"],
  hostVars: 15,
  hostBindings: function MatChipList_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function MatChipList_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function MatChipList_blur_HostBindingHandler() {
        return ctx._blur();
      })("keydown", function MatChipList_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵhostProperty"]("id", ctx._uid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx._tabIndex)("aria-describedby", ctx._ariaDescribedby || null)("aria-required", ctx.role ? ctx.required : null)("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-multiselectable", ctx.multiple)("role", ctx.role)("aria-orientation", ctx.ariaOrientation);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-chip-list-disabled", ctx.disabled)("mat-chip-list-invalid", ctx.errorState)("mat-chip-list-required", ctx.required);
    }
  },
  inputs: {
    ariaOrientation: ["aria-orientation", "ariaOrientation"],
    multiple: "multiple",
    compareWith: "compareWith",
    value: "value",
    required: "required",
    placeholder: "placeholder",
    disabled: "disabled",
    selectable: "selectable",
    tabIndex: "tabIndex",
    errorStateMatcher: "errorStateMatcher"
  },
  outputs: {
    change: "change",
    valueChange: "valueChange"
  },
  exportAs: ["matChipList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldControl"],
    useExisting: MatChipList
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-chip-list-wrapper"]],
  template: function MatChipList_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
  },
  styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatChipList.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
    }]
  }];
};

MatChipList.propDecorators = {
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  ariaOrientation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['aria-orientation']
  }],
  selectable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  valueChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
  }],
  chips: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MatChip, {
      // We need to use `descendants: true`, because Ivy will no longer match
      // indirect descendants if it's left as false.
      descendants: true
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChipList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-chip-list',
      template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
      exportAs: 'matChipList',
      host: {
        '[attr.tabindex]': 'disabled ? null : _tabIndex',
        '[attr.aria-describedby]': '_ariaDescribedby || null',
        '[attr.aria-required]': 'role ? required : null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-multiselectable]': 'multiple',
        '[attr.role]': 'role',
        '[class.mat-chip-list-disabled]': 'disabled',
        '[class.mat-chip-list-invalid]': 'errorState',
        '[class.mat-chip-list-required]': 'required',
        '[attr.aria-orientation]': 'ariaOrientation',
        'class': 'mat-chip-list',
        '(focus)': 'focus()',
        '(blur)': '_blur()',
        '(keydown)': '_keydown($event)',
        '[id]': '_uid'
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldControl"],
        useExisting: MatChipList
      }],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-chip{position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0);border:none;-webkit-appearance:none;-moz-appearance:none}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:\"\";pointer-events:none;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:none}.mat-standard-chip:focus::after{opacity:.16}.cdk-high-contrast-active .mat-standard-chip{outline:solid 1px}.cdk-high-contrast-active .mat-standard-chip:focus{outline:dotted 2px}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit;overflow:hidden}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper input.mat-input-element,.mat-chip-list-wrapper .mat-standard-chip{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Self"]
      }]
    }];
  }, {
    ariaOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['aria-orientation']
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"]
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    selectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    chips: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MatChip, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids.


var nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */

var MatChipInput = /*#__PURE__*/function () {
  function MatChipInput(_elementRef, _defaultOptions) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipInput);

    this._elementRef = _elementRef;
    this._defaultOptions = _defaultOptions;
    /** Whether the control is focused. */

    this.focused = false;
    this._addOnBlur = false;
    /**
     * The list of key codes that will trigger a chipEnd event.
     *
     * Defaults to `[ENTER]`.
     */

    this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
    /** Emitted when a chip is to be added. */

    this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
    /** The input's placeholder text. */

    this.placeholder = '';
    /** Unique id for the input. */

    this.id = "mat-chip-list-input-".concat(nextUniqueId$1++);
    this._disabled = false;
    this._inputElement = this._elementRef.nativeElement;
  }
  /** Register input for chip list */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatChipInput, [{
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this._chipList.stateChanges.next();
    }
    /** Utility method to make host definition/tests more clear. */

  }, {
    key: "_keydown",
    value: function _keydown(event) {
      // Allow the user's focus to escape when they're tabbing forward. Note that we don't
      // want to do this when going backwards, because focus should go back to the first chip.
      if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event, 'shiftKey')) {
        this._chipList._allowFocusEscape();
      }

      this._emitChipEnd(event);
    }
    /** Checks to see if the blur should emit the (chipEnd) event. */

  }, {
    key: "_blur",
    value: function _blur() {
      if (this.addOnBlur) {
        this._emitChipEnd();
      }

      this.focused = false; // Blur the chip list if it is not focused

      if (!this._chipList.focused) {
        this._chipList._blur();
      }

      this._chipList.stateChanges.next();
    }
  }, {
    key: "_focus",
    value: function _focus() {
      this.focused = true;

      this._chipList.stateChanges.next();
    }
    /** Checks to see if the (chipEnd) event needs to be emitted. */

  }, {
    key: "_emitChipEnd",
    value: function _emitChipEnd(event) {
      if (!this._inputElement.value && !!event) {
        this._chipList._keydown(event);
      }

      if (!event || this._isSeparatorKey(event)) {
        this.chipEnd.emit({
          input: this._inputElement,
          value: this._inputElement.value
        });

        if (event) {
          event.preventDefault();
        }
      }
    }
  }, {
    key: "_onInput",
    value: function _onInput() {
      // Let chip list know whenever the value changes.
      this._chipList.stateChanges.next();
    }
    /** Focuses the input. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._inputElement.focus(options);
    }
    /** Checks whether a keycode is one of the configured separators. */

  }, {
    key: "_isSeparatorKey",
    value: function _isSeparatorKey(event) {
      return !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event) && new Set(this.separatorKeyCodes).has(event.keyCode);
    }
  }, {
    key: "chipList",
    set: function set(value) {
      if (value) {
        this._chipList = value;

        this._chipList.registerInput(this);
      }
    }
    /**
     * Whether or not the chipEnd event will be emitted when the input is blurred.
     */

  }, {
    key: "addOnBlur",
    get: function get() {
      return this._addOnBlur;
    },
    set: function set(value) {
      this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** Whether the input is disabled. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled || this._chipList && this._chipList.disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
    /** Whether the input is empty. */

  }, {
    key: "empty",
    get: function get() {
      return !this._inputElement.value;
    }
  }]);

  return MatChipInput;
}();

MatChipInput.ɵfac = function MatChipInput_Factory(t) {
  return new (t || MatChipInput)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_CHIPS_DEFAULT_OPTIONS));
};

MatChipInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatChipInput,
  selectors: [["input", "matChipInputFor", ""]],
  hostAttrs: [1, "mat-chip-input", "mat-input-element"],
  hostVars: 5,
  hostBindings: function MatChipInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function MatChipInput_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      })("blur", function MatChipInput_blur_HostBindingHandler() {
        return ctx._blur();
      })("focus", function MatChipInput_focus_HostBindingHandler() {
        return ctx._focus();
      })("input", function MatChipInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null)("aria-invalid", ctx._chipList && ctx._chipList.ngControl ? ctx._chipList.ngControl.invalid : null)("aria-required", ctx._chipList && ctx._chipList.required || null);
    }
  },
  inputs: {
    separatorKeyCodes: ["matChipInputSeparatorKeyCodes", "separatorKeyCodes"],
    placeholder: "placeholder",
    id: "id",
    chipList: ["matChipInputFor", "chipList"],
    addOnBlur: ["matChipInputAddOnBlur", "addOnBlur"],
    disabled: "disabled"
  },
  outputs: {
    chipEnd: "matChipInputTokenEnd"
  },
  exportAs: ["matChipInput", "matChipInputFor"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
});

MatChipInput.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_CHIPS_DEFAULT_OPTIONS]
    }]
  }];
};

MatChipInput.propDecorators = {
  chipList: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matChipInputFor']
  }],
  addOnBlur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matChipInputAddOnBlur']
  }],
  separatorKeyCodes: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
    args: ['matChipInputSeparatorKeyCodes']
  }],
  chipEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
    args: ['matChipInputTokenEnd']
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChipInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'input[matChipInputFor]',
      exportAs: 'matChipInput, matChipInputFor',
      host: {
        'class': 'mat-chip-input mat-input-element',
        '(keydown)': '_keydown($event)',
        '(blur)': '_blur()',
        '(focus)': '_focus()',
        '(input)': '_onInput()',
        '[id]': 'id',
        '[attr.disabled]': 'disabled || null',
        '[attr.placeholder]': 'placeholder || null',
        '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
        '[attr.aria-required]': '_chipList && _chipList.required || null'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_CHIPS_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    separatorKeyCodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matChipInputSeparatorKeyCodes']
    }],
    chipEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"],
      args: ['matChipInputTokenEnd']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    chipList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matChipInputFor']
    }],
    addOnBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"],
      args: ['matChipInputAddOnBlur']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var CHIP_DECLARATIONS = [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon];
var ɵ0 = {
  separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]]
};

var MatChipsModule = function MatChipsModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatChipsModule);
};

MatChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatChipsModule
});
MatChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatChipsModule_Factory(t) {
    return new (t || MatChipsModule)();
  },
  providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: ɵ0
  }]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatChipsModule, {
    declarations: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon],
    exports: [MatChipList, MatChip, MatChipInput, MatChipRemove, MatChipAvatar, MatChipTrailingIcon]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatChipsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      exports: CHIP_DECLARATIONS,
      declarations: CHIP_DECLARATIONS,
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: ɵ0
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "BrVi":
/*!**********************************!*\
  !*** ./src/models/productapi.ts ***!
  \**********************************/
/*! exports provided: ProductApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductApi", function() { return ProductApi; });
var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    return ProductApi;
}());



/***/ }),

/***/ "C+6a":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "EdFk":
/*!*******************************************************!*\
  !*** ./src/app/new-product/new-product.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by our friend\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "HF6d":
/*!*********************************************!*\
  !*** ./src/services/file-upload.service.ts ***!
  \*********************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploadService = /** @class */ (function () {
    function FileUploadService(db, storage) {
        this.db = db;
        this.storage = storage;
        this.basePath = '/uploads';
    }
    FileUploadService.prototype.pushFileToStorage = function (fileUpload) {
        var _this = this;
        var filePath = this.basePath + "/" + fileUpload.file.name;
        var storageRef = this.storage.ref(filePath);
        var uploadTask = this.storage.upload(filePath, fileUpload.file);
        uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            storageRef.getDownloadURL().subscribe(function (downloadURL) {
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                _this.saveFileData(fileUpload);
            });
        })).subscribe();
        return uploadTask.percentageChanges();
    };
    FileUploadService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath).push(fileUpload);
    };
    FileUploadService.prototype.getFiles = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    FileUploadService.prototype.deleteFile = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    FileUploadService.prototype.deleteFileDatabase = function (key) {
        return this.db.list(this.basePath).remove(key);
    };
    FileUploadService.prototype.deleteFileStorage = function (name) {
        var storageRef = this.storage.ref(this.basePath);
        storageRef.child(name).delete();
    };
    FileUploadService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }
    ]; };
    FileUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "NFeN":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
  \**********************************************************************/
/*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */




var _c0 = ["*"];

function getMatIconNameNotFoundError(iconName) {
  return Error("Unable to find icon with the name \"".concat(iconName, "\""));
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */


function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeUrlError(url) {
  return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */


var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, SvgIconConfig);

  this.url = url;
  this.svgText = svgText;
  this.options = options;
};
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */


var MatIconRegistry = /*#__PURE__*/function () {
  function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIconRegistry);

    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */

    this._svgIconConfigs = new Map();
    /**
     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
     * Multiple icon sets can be registered under the same namespace.
     */

    this._iconSetConfigs = new Map();
    /** Cache for icons loaded by direct URLs. */

    this._cachedIconsByUrl = new Map();
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

    this._inProgressUrlFetches = new Map();
    /** Map from font identifiers to their CSS class names. Used for icon fonts. */

    this._fontCssClassesByAlias = new Map();
    /**
     * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
     * The default 'material-icons' value assumes that the material icon font has been loaded as
     * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
     */

    this._defaultFontSetClass = 'material-icons';
    this._document = document;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatIconRegistry, [{
    key: "addSvgIcon",
    value: function addSvgIcon(iconName, url, options) {
      return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */

  }, {
    key: "addSvgIconLiteral",
    value: function addSvgIconLiteral(iconName, literal, options) {
      return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */

  }, {
    key: "addSvgIconInNamespace",
    value: function addSvgIconInNamespace(namespace, iconName, url, options) {
      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */

  }, {
    key: "addSvgIconLiteralInNamespace",
    value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
      var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].HTML, literal); // TODO: add an ngDevMode check


      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }

      return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */

  }, {
    key: "addSvgIconSet",
    value: function addSvgIconSet(url, options) {
      return this.addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */

  }, {
    key: "addSvgIconSetLiteral",
    value: function addSvgIconSetLiteral(literal, options) {
      return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */

  }, {
    key: "addSvgIconSetInNamespace",
    value: function addSvgIconSetInNamespace(namespace, url, options) {
      return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */

  }, {
    key: "addSvgIconSetLiteralInNamespace",
    value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
      var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].HTML, literal);

      if (!cleanLiteral) {
        throw getMatIconFailedToSanitizeLiteralError(literal);
      }

      return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */

  }, {
    key: "registerFontClassAlias",
    value: function registerFontClassAlias(alias) {
      var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

      this._fontCssClassesByAlias.set(alias, className);

      return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */

  }, {
    key: "classNameForFontAlias",
    value: function classNameForFontAlias(alias) {
      return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */

  }, {
    key: "setDefaultFontSetClass",
    value: function setDefaultFontSetClass(className) {
      this._defaultFontSetClass = className;
      return this;
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */

  }, {
    key: "getDefaultFontSetClass",
    value: function getDefaultFontSetClass() {
      return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */

  }, {
    key: "getSvgIconFromUrl",
    value: function getSvgIconFromUrl(safeUrl) {
      var _this = this;

      var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].RESOURCE_URL, safeUrl);

      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      }

      var cachedIcon = this._cachedIconsByUrl.get(url);

      if (cachedIcon) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(cloneSvg(cachedIcon));
      }

      return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (svg) {
        return _this._cachedIconsByUrl.set(url, svg);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (svg) {
        return cloneSvg(svg);
      }));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */

  }, {
    key: "getNamedSvgIcon",
    value: function getNamedSvgIcon(name) {
      var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      // Return (copy of) cached icon if possible.
      var key = iconKey(namespace, name);

      var config = this._svgIconConfigs.get(key);

      if (config) {
        return this._getSvgFromConfig(config);
      } // See if we have any icon sets registered for the namespace.


      var iconSetConfigs = this._iconSetConfigs.get(namespace);

      if (iconSetConfigs) {
        return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
      }

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(getMatIconNameNotFoundError(key));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._svgIconConfigs.clear();

      this._iconSetConfigs.clear();

      this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */

  }, {
    key: "_getSvgFromConfig",
    value: function _getSvgFromConfig(config) {
      if (config.svgText) {
        // We already have the SVG element for this icon, return a copy.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(cloneSvg(this._svgElementFromConfig(config)));
      } else {
        // Fetch the icon from the config's URL, cache it, and return a copy.
        return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (svg) {
          return cloneSvg(svg);
        }));
      }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */

  }, {
    key: "_getSvgFromIconSetConfigs",
    value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
      var _this2 = this;

      // For all the icon set SVG elements we've fetched, see if any contain an icon with the
      // requested name.
      var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

      if (namedIcon) {
        // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
        // time anyway, there's probably not much advantage compared to just always extracting
        // it from the icon set.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(namedIcon);
      } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
      // fetched, fetch them now and look for iconName in the results.


      var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
        return !iconSetConfig.svgText;
      }).map(function (iconSetConfig) {
        return _this2._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function (err) {
          var url = _this2._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
          // combined Observable won't necessarily fail.


          var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

          _this2._errorHandler.handleError(new Error(errorMessage));

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
        }));
      }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
      // cached SVG element (unless the request failed), and we can check again for the icon.

      return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
        var foundIcon = _this2._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


        if (!foundIcon) {
          throw getMatIconNameNotFoundError(name);
        }

        return foundIcon;
      }));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */

  }, {
    key: "_extractIconWithNameFromAnySet",
    value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
      // Iterate backwards, so icon sets added later have precedence.
      for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
        var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
        // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
        // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
        // some of the parsing.

        if (config.svgText && config.svgText.indexOf(iconName) > -1) {
          var svg = this._svgElementFromConfig(config);

          var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

          if (foundIcon) {
            return foundIcon;
          }
        }
      }

      return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */

  }, {
    key: "_loadSvgIconFromConfig",
    value: function _loadSvgIconFromConfig(config) {
      var _this3 = this;

      return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (svgText) {
        return config.svgText = svgText;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () {
        return _this3._svgElementFromConfig(config);
      }));
    }
    /**
     * Loads the content of the icon set URL specified in the
     * SvgIconConfig and attaches it to the config.
     */

  }, {
    key: "_loadSvgIconSetFromConfig",
    value: function _loadSvgIconSetFromConfig(config) {
      if (config.svgText) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
      }

      return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function (svgText) {
        return config.svgText = svgText;
      }));
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */

  }, {
    key: "_extractSvgIconFromSet",
    value: function _extractSvgIconFromSet(iconSet, iconName, options) {
      // Use the `id="iconName"` syntax in order to escape special
      // characters in the ID (versus using the #iconName syntax).
      var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

      if (!iconSource) {
        return null;
      } // Clone the element and remove the ID to prevent multiple elements from being added
      // to the page with the same ID.


      var iconElement = iconSource.cloneNode(true);
      iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
      // the content of a new <svg> node.

      if (iconElement.nodeName.toLowerCase() === 'svg') {
        return this._setSvgAttributes(iconElement, options);
      } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
      // that the same could be achieved by referring to it via <use href="#id">, however the <use>
      // tag is problematic on Firefox, because it needs to include the current page path.


      if (iconElement.nodeName.toLowerCase() === 'symbol') {
        return this._setSvgAttributes(this._toSvgElement(iconElement), options);
      } // createElement('SVG') doesn't work as expected; the DOM ends up with
      // the correct nodes, but the SVG content doesn't render. Instead we
      // have to create an empty SVG node using innerHTML and append its content.
      // Elements created using DOMParser.parseFromString have the same problem.
      // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


      var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


      svg.appendChild(iconElement);
      return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */

  }, {
    key: "_svgElementFromString",
    value: function _svgElementFromString(str) {
      var div = this._document.createElement('DIV');

      div.innerHTML = str;
      var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

      if (!svg) {
        throw Error('<svg> tag not found');
      }

      return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */

  }, {
    key: "_toSvgElement",
    value: function _toSvgElement(element) {
      var svg = this._svgElementFromString('<svg></svg>');

      var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

      for (var i = 0; i < attributes.length; i++) {
        var _attributes$i = attributes[i],
            name = _attributes$i.name,
            value = _attributes$i.value;

        if (name !== 'id') {
          svg.setAttribute(name, value);
        }
      }

      for (var _i = 0; _i < element.childNodes.length; _i++) {
        if (element.childNodes[_i].nodeType === this._document.ELEMENT_NODE) {
          svg.appendChild(element.childNodes[_i].cloneNode(true));
        }
      }

      return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */

  }, {
    key: "_setSvgAttributes",
    value: function _setSvgAttributes(svg, options) {
      svg.setAttribute('fit', '');
      svg.setAttribute('height', '100%');
      svg.setAttribute('width', '100%');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

      if (options && options.viewBox) {
        svg.setAttribute('viewBox', options.viewBox);
      }

      return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */

  }, {
    key: "_fetchIcon",
    value: function _fetchIcon(iconConfig) {
      var _this4 = this;

      var _a;

      var safeUrl = iconConfig.url,
          options = iconConfig.options;
      var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

      if (!this._httpClient) {
        throw getMatIconNoHttpProviderError();
      } // TODO: add an ngDevMode check


      if (safeUrl == null) {
        throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
      }

      var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_5__["SecurityContext"].RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


      if (!url) {
        throw getMatIconFailedToSanitizeUrlError(safeUrl);
      } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
      // already a request in progress for that URL. It's necessary to call share() on the
      // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


      var inProgressFetch = this._inProgressUrlFetches.get(url);

      if (inProgressFetch) {
        return inProgressFetch;
      }

      var req = this._httpClient.get(url, {
        responseType: 'text',
        withCredentials: withCredentials
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
        return _this4._inProgressUrlFetches.delete(url);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["share"])());

      this._inProgressUrlFetches.set(url, req);

      return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */

  }, {
    key: "_addSvgIconConfig",
    value: function _addSvgIconConfig(namespace, iconName, config) {
      this._svgIconConfigs.set(iconKey(namespace, iconName), config);

      return this;
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */

  }, {
    key: "_addSvgIconSetConfig",
    value: function _addSvgIconSetConfig(namespace, config) {
      var configNamespace = this._iconSetConfigs.get(namespace);

      if (configNamespace) {
        configNamespace.push(config);
      } else {
        this._iconSetConfigs.set(namespace, [config]);
      }

      return this;
    }
    /** Parses a config's text into an SVG element. */

  }, {
    key: "_svgElementFromConfig",
    value: function _svgElementFromConfig(config) {
      if (!config.svgElement) {
        var svg = this._svgElementFromString(config.svgText);

        this._setSvgAttributes(svg, config.options);

        config.svgElement = svg;
      }

      return config.svgElement;
    }
  }]);

  return MatIconRegistry;
}();

MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
  return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]));
};

MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"])({
  factory: function MatIconRegistry_Factory() {
    return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]));
  },
  token: MatIconRegistry,
  providedIn: "root"
});

MatIconRegistry.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatIconRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]
    }];
  }, null);
})();
/** @docs-private */


function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */


var ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_5__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"], [new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/** Clones an SVGElement while preserving type information. */

function cloneSvg(svg) {
  return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */


function iconKey(namespace, name) {
  return namespace + ':' + name;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.

/** @docs-private */


var MatIconBase = function MatIconBase(_elementRef) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIconBase);

  this._elementRef = _elementRef;
};

var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */


var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('mat-icon-location', {
  providedIn: 'root',
  factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */

function MAT_ICON_LOCATION_FACTORY() {
  var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]);

  var _location = _document ? _document.location : null;

  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: function getPathname() {
      return _location ? _location.pathname + _location.search : '';
    }
  };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

var ɵ0 = function ɵ0(attr) {
  return "[".concat(attr, "]");
};
/** Selector that can be used to find all elements that are using a `FuncIRI`. */


var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */

var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */

var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatIcon, _MatIconMixinBase2);

  var _super = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatIcon);

  function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
    var _this5;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIcon);

    _this5 = _super.call(this, elementRef);
    _this5._iconRegistry = _iconRegistry;
    _this5._location = _location;
    _this5._errorHandler = _errorHandler;
    _this5._inline = false;
    /** Subscription to the current in-progress SVG icon request. */

    _this5._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
    // the right thing to do for the majority of icon use-cases.

    if (!ariaHidden) {
      elementRef.nativeElement.setAttribute('aria-hidden', 'true');
    }

    return _this5;
  }
  /**
   * Whether the icon should be inlined, automatically sizing the icon to match the font size of
   * the element the icon is contained in.
   */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatIcon, [{
    key: "_splitIconName",

    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    value: function _splitIconName(iconName) {
      if (!iconName) {
        return ['', ''];
      }

      var parts = iconName.split(':');

      switch (parts.length) {
        case 1:
          return ['', parts[0]];
        // Use default namespace.

        case 2:
          return parts;

        default:
          throw Error("Invalid icon name: \"".concat(iconName, "\""));
        // TODO: add an ngDevMode check
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this6 = this;

      // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
      var svgIconChanges = changes['svgIcon'];
      this._svgNamespace = null;
      this._svgName = null;

      if (svgIconChanges) {
        this._currentIconFetch.unsubscribe();

        if (this.svgIcon) {
          var _this$_splitIconName = this._splitIconName(this.svgIcon),
              _this$_splitIconName2 = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$_splitIconName, 2),
              namespace = _this$_splitIconName2[0],
              iconName = _this$_splitIconName2[1];

          if (namespace) {
            this._svgNamespace = namespace;
          }

          if (iconName) {
            this._svgName = iconName;
          }

          this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function (svg) {
            return _this6._setSvgElement(svg);
          }, function (err) {
            var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

            _this6._errorHandler.handleError(new Error(errorMessage));
          });
        } else if (svgIconChanges.previousValue) {
          this._clearSvgElement();
        }
      }

      if (this._usingFontIcon()) {
        this._updateFontIconClasses();
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      // Update font classes because ngOnChanges won't be called if none of the inputs are present,
      // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
      if (this._usingFontIcon()) {
        this._updateFontIconClasses();
      }
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var cachedElements = this._elementsWithExternalReferences;

      if (cachedElements && cachedElements.size) {
        var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
        // the browser doesn't have an API that will let us react on link clicks and
        // we can't depend on the Angular router. The references need to be updated,
        // because while most browsers don't care whether the URL is correct after
        // the first render, Safari will break if the user navigates to a different
        // page and the SVG isn't re-rendered.


        if (newPath !== this._previousPath) {
          this._previousPath = newPath;

          this._prependPathToReferences(newPath);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._currentIconFetch.unsubscribe();

      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      }
    }
  }, {
    key: "_usingFontIcon",
    value: function _usingFontIcon() {
      return !this.svgIcon;
    }
  }, {
    key: "_setSvgElement",
    value: function _setSvgElement(svg) {
      this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
      // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
      // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


      var styleTags = svg.querySelectorAll('style');

      for (var i = 0; i < styleTags.length; i++) {
        styleTags[i].textContent += ' ';
      } // Note: we do this fix here, rather than the icon registry, because the
      // references have to point to the URL at the time that the icon was created.


      var path = this._location.getPathname();

      this._previousPath = path;

      this._cacheChildrenWithExternalReferences(svg);

      this._prependPathToReferences(path);

      this._elementRef.nativeElement.appendChild(svg);
    }
  }, {
    key: "_clearSvgElement",
    value: function _clearSvgElement() {
      var layoutElement = this._elementRef.nativeElement;
      var childCount = layoutElement.childNodes.length;

      if (this._elementsWithExternalReferences) {
        this._elementsWithExternalReferences.clear();
      } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
      // we can't use innerHTML, because IE will throw if the element has a data binding.


      while (childCount--) {
        var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
        // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

        if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
          layoutElement.removeChild(child);
        }
      }
    }
  }, {
    key: "_updateFontIconClasses",
    value: function _updateFontIconClasses() {
      if (!this._usingFontIcon()) {
        return;
      }

      var elem = this._elementRef.nativeElement;
      var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

      if (fontSetClass != this._previousFontSetClass) {
        if (this._previousFontSetClass) {
          elem.classList.remove(this._previousFontSetClass);
        }

        if (fontSetClass) {
          elem.classList.add(fontSetClass);
        }

        this._previousFontSetClass = fontSetClass;
      }

      if (this.fontIcon != this._previousFontIconClass) {
        if (this._previousFontIconClass) {
          elem.classList.remove(this._previousFontIconClass);
        }

        if (this.fontIcon) {
          elem.classList.add(this.fontIcon);
        }

        this._previousFontIconClass = this.fontIcon;
      }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */

  }, {
    key: "_cleanupFontValue",
    value: function _cleanupFontValue(value) {
      return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */

  }, {
    key: "_prependPathToReferences",
    value: function _prependPathToReferences(path) {
      var elements = this._elementsWithExternalReferences;

      if (elements) {
        elements.forEach(function (attrs, element) {
          attrs.forEach(function (attr) {
            element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
          });
        });
      }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */

  }, {
    key: "_cacheChildrenWithExternalReferences",
    value: function _cacheChildrenWithExternalReferences(element) {
      var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
      var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

      var _loop = function _loop(i) {
        funcIriAttributes.forEach(function (attr) {
          var elementWithReference = elementsWithFuncIri[i];
          var value = elementWithReference.getAttribute(attr);
          var match = value ? value.match(funcIriPattern) : null;

          if (match) {
            var attributes = elements.get(elementWithReference);

            if (!attributes) {
              attributes = [];
              elements.set(elementWithReference, attributes);
            }

            attributes.push({
              name: attr,
              value: match[1]
            });
          }
        });
      };

      for (var i = 0; i < elementsWithFuncIri.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "inline",
    get: function get() {
      return this._inline;
    },
    set: function set(inline) {
      this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(inline);
    }
    /** Font set that the icon is a part of. */

  }, {
    key: "fontSet",
    get: function get() {
      return this._fontSet;
    },
    set: function set(value) {
      this._fontSet = this._cleanupFontValue(value);
    }
    /** Name of an icon within a font set. */

  }, {
    key: "fontIcon",
    get: function get() {
      return this._fontIcon;
    },
    set: function set(value) {
      this._fontIcon = this._cleanupFontValue(value);
    }
  }]);

  return MatIcon;
}(_MatIconMixinBase);

MatIcon.ɵfac = function MatIcon_Factory(t) {
  return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]));
};

MatIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MatIcon,
  selectors: [["mat-icon"]],
  hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
  hostVars: 7,
  hostBindings: function MatIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    }
  },
  inputs: {
    color: "color",
    inline: "inline",
    fontSet: "fontSet",
    fontIcon: "fontIcon",
    svgIcon: "svgIcon"
  },
  exportAs: ["matIcon"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
    }
  },
  styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatIcon.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: MatIconRegistry
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Attribute"],
      args: ['aria-hidden']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_ICON_LOCATION]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]
  }];
};

MatIcon.propDecorators = {
  inline: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  svgIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  fontSet: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  fontIcon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      template: '<ng-content></ng-content>',
      selector: 'mat-icon',
      exportAs: 'matIcon',
      inputs: ['color'],
      host: {
        'role': 'img',
        'class': 'mat-icon notranslate',
        '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
        '[attr.data-mat-icon-name]': '_svgName || fontIcon',
        '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
        '[class.mat-icon-inline]': 'inline',
        '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }, {
      type: MatIconRegistry
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Attribute"],
        args: ['aria-hidden']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [MAT_ICON_LOCATION]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ErrorHandler"]
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    fontSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    fontIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    svgIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatIconModule = function MatIconModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatIconModule);
};

MatIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MatIconModule
});
MatIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  factory: function MatIconModule_Factory(t) {
    return new (t || MatIconModule)();
  },
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatIconModule, {
    declarations: function declarations() {
      return [MatIcon];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatIconModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
      exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
      declarations: [MatIcon]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "NL5l":
/*!***********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZ3JhZGUvdXBncmFkZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "O5tJ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tim-typo\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "PO8C":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Material Dashboard PRO Angular</h4>\n                        <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $59</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Qd8X":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title \">Simple Table</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-hover\">\n                              <thead class=\"\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td>\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td>\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td>\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td>\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td>\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td>\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Qu3c":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
  \*************************************************************************/
/*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "R0Ic");


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatTooltip.
 * @docs-private
 */









var matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0,
    transform: 'scale(0)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'scale(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0,
    transform: 'scale(0)',
    offset: 0
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0.5,
    transform: 'scale(0.99)',
    offset: 0.5
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0
  })))])
};
/** Time in ms to throttle repositioning after scroll events. */

var SCROLL_THROTTLE_MS = 20;
/** CSS class that will be attached to the overlay panel. */

var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/** Options used to bind passive event listeners. */

var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */

var LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */

function getMatTooltipInvalidPositionError(position) {
  return Error("Tooltip position \"".concat(position, "\" is invalid."));
}
/** Injection token that determines the scroll handling while a tooltip is visible. */


var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-tooltip-scroll-strategy');
/** @docs-private */

function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  };
}
/** @docs-private */


var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** Injection token to be used to override the default options for `matTooltip`. */

var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */


var MatTooltip = /*#__PURE__*/function () {
  function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions) {
    var _this = this;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatTooltip);

    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = 'below';
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    /** The default delay in ms before showing the tooltip after show is called */

    this.showDelay = this._defaultOptions.showDelay;
    /** The default delay in ms before hiding the tooltip after hide is called */

    this.hideDelay = this._defaultOptions.hideDelay;
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     */

    this.touchGestures = 'auto';
    this._message = '';
    /** Manually-bound passive event listeners. */

    this._passiveListeners = [];
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * Handles the keydown events on the host element.
     * Needs to be an arrow function so that we can use it in addEventListener.
     */

    this._handleKeydown = function (event) {
      if (_this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
        event.preventDefault();
        event.stopPropagation();

        _this._ngZone.run(function () {
          return _this.hide(0);
        });
      }
    };

    this._scrollStrategy = scrollStrategy;

    if (_defaultOptions) {
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }

      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
    }

    _ngZone.runOutsideAngular(function () {
      _elementRef.nativeElement.addEventListener('keydown', _this._handleKeydown);
    });
  }
  /** Allows the user to define the position of the tooltip relative to the parent element */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MatTooltip, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      // This needs to happen after view init so the initial values for all inputs have been set.
      this._viewInitialized = true;

      this._setupPointerEnterEventsIfNeeded();

      this._focusMonitor.monitor(this._elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
        // Note that the focus monitor runs outside the Angular zone.
        if (!origin) {
          _this2._ngZone.run(function () {
            return _this2.hide(0);
          });
        } else if (origin === 'keyboard') {
          _this2._ngZone.run(function () {
            return _this2.show();
          });
        }
      });
    }
    /**
     * Dispose the tooltip when destroyed.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var nativeElement = this._elementRef.nativeElement;
      clearTimeout(this._touchstartTimeout);

      if (this._overlayRef) {
        this._overlayRef.dispose();

        this._tooltipInstance = null;
      } // Clean up the event listeners set in the constructor


      nativeElement.removeEventListener('keydown', this._handleKeydown);

      this._passiveListeners.forEach(function (_ref) {
        var _ref2 = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            event = _ref2[0],
            listener = _ref2[1];

        nativeElement.removeEventListener(event, listener, passiveListenerOptions);
      });

      this._passiveListeners.length = 0;

      this._destroyed.next();

      this._destroyed.complete();

      this._ariaDescriber.removeDescription(nativeElement, this.message);

      this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */

  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

      if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
        return;
      }

      var overlayRef = this._createOverlay();

      this._detach();

      this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
      this._tooltipInstance = overlayRef.attach(this._portal).instance;

      this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this3._detach();
      });

      this._setTooltipClass(this._tooltipClass);

      this._updateTooltipMessage();

      this._tooltipInstance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */

  }, {
    key: "hide",
    value: function hide() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

      if (this._tooltipInstance) {
        this._tooltipInstance.hide(delay);
      }
    }
    /** Shows/hides the tooltip */

  }, {
    key: "toggle",
    value: function toggle() {
      this._isTooltipVisible() ? this.hide() : this.show();
    }
    /** Returns true if the tooltip is currently visible to the user */

  }, {
    key: "_isTooltipVisible",
    value: function _isTooltipVisible() {
      return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */

  }, {
    key: "_createOverlay",
    value: function _createOverlay() {
      var _this4 = this;

      if (this._overlayRef) {
        return this._overlayRef;
      }

      var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


      var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

      strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (change) {
        if (_this4._tooltipInstance) {
          if (change.scrollableViewProperties.isOverlayClipped && _this4._tooltipInstance.isVisible()) {
            // After position changes occur and the overlay is clipped by
            // a parent scrollable then close the tooltip.
            _this4._ngZone.run(function () {
              return _this4.hide(0);
            });
          }
        }
      });
      this._overlayRef = this._overlay.create({
        direction: this._dir,
        positionStrategy: strategy,
        panelClass: TOOLTIP_PANEL_CLASS,
        scrollStrategy: this._scrollStrategy()
      });

      this._updatePosition();

      this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this4._detach();
      });

      return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */

  }, {
    key: "_detach",
    value: function _detach() {
      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();
      }

      this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */

  }, {
    key: "_updatePosition",
    value: function _updatePosition() {
      var position = this._overlayRef.getConfig().positionStrategy;

      var origin = this._getOrigin();

      var overlay = this._getOverlayPosition();

      position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */

  }, {
    key: "_getOrigin",
    value: function _getOrigin() {
      var isLtr = !this._dir || this._dir.value == 'ltr';
      var position = this.position;
      var originPosition;

      if (position == 'above' || position == 'below') {
        originPosition = {
          originX: 'center',
          originY: position == 'above' ? 'top' : 'bottom'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        originPosition = {
          originX: 'start',
          originY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        originPosition = {
          originX: 'end',
          originY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }

      var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
          x = _this$_invertPosition.x,
          y = _this$_invertPosition.y;

      return {
        main: originPosition,
        fallback: {
          originX: x,
          originY: y
        }
      };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */

  }, {
    key: "_getOverlayPosition",
    value: function _getOverlayPosition() {
      var isLtr = !this._dir || this._dir.value == 'ltr';
      var position = this.position;
      var overlayPosition;

      if (position == 'above') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'bottom'
        };
      } else if (position == 'below') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'top'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        overlayPosition = {
          overlayX: 'end',
          overlayY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        overlayPosition = {
          overlayX: 'start',
          overlayY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }

      var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
          x = _this$_invertPosition2.x,
          y = _this$_invertPosition2.y;

      return {
        main: overlayPosition,
        fallback: {
          overlayX: x,
          overlayY: y
        }
      };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */

  }, {
    key: "_updateTooltipMessage",
    value: function _updateTooltipMessage() {
      var _this5 = this;

      // Must wait for the message to be painted to the tooltip so that the overlay can properly
      // calculate the correct positioning based on the size of the text.
      if (this._tooltipInstance) {
        this._tooltipInstance.message = this.message;

        this._tooltipInstance._markForCheck();

        this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
          if (_this5._tooltipInstance) {
            _this5._overlayRef.updatePosition();
          }
        });
      }
    }
    /** Updates the tooltip class */

  }, {
    key: "_setTooltipClass",
    value: function _setTooltipClass(tooltipClass) {
      if (this._tooltipInstance) {
        this._tooltipInstance.tooltipClass = tooltipClass;

        this._tooltipInstance._markForCheck();
      }
    }
    /** Inverts an overlay position. */

  }, {
    key: "_invertPosition",
    value: function _invertPosition(x, y) {
      if (this.position === 'above' || this.position === 'below') {
        if (y === 'top') {
          y = 'bottom';
        } else if (y === 'bottom') {
          y = 'top';
        }
      } else {
        if (x === 'end') {
          x = 'start';
        } else if (x === 'start') {
          x = 'end';
        }
      }

      return {
        x: x,
        y: y
      };
    }
    /** Binds the pointer events to the tooltip trigger. */

  }, {
    key: "_setupPointerEnterEventsIfNeeded",
    value: function _setupPointerEnterEventsIfNeeded() {
      var _this6 = this;

      // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
      if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
        return;
      } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
      // first tap from firing its click event or can cause the tooltip to open for clicks.


      if (this._platformSupportsMouseEvents()) {
        this._passiveListeners.push(['mouseenter', function () {
          _this6._setupPointerExitEventsIfNeeded();

          _this6.show();
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();

        this._passiveListeners.push(['touchstart', function () {
          // Note that it's important that we don't `preventDefault` here,
          // because it can prevent click events from firing on the element.
          _this6._setupPointerExitEventsIfNeeded();

          clearTimeout(_this6._touchstartTimeout);
          _this6._touchstartTimeout = setTimeout(function () {
            return _this6.show();
          }, LONGPRESS_DELAY);
        }]);
      }

      this._addListeners(this._passiveListeners);
    }
  }, {
    key: "_setupPointerExitEventsIfNeeded",
    value: function _setupPointerExitEventsIfNeeded() {
      var _this7 = this,
          _this$_passiveListene;

      if (this._pointerExitEventsInitialized) {
        return;
      }

      this._pointerExitEventsInitialized = true;
      var exitListeners = [];

      if (this._platformSupportsMouseEvents()) {
        exitListeners.push(['mouseleave', function () {
          return _this7.hide();
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();

        var touchendListener = function touchendListener() {
          clearTimeout(_this7._touchstartTimeout);

          _this7.hide(_this7._defaultOptions.touchendHideDelay);
        };

        exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
      }

      this._addListeners(exitListeners);

      (_this$_passiveListene = this._passiveListeners).push.apply(_this$_passiveListene, exitListeners);
    }
  }, {
    key: "_addListeners",
    value: function _addListeners(listeners) {
      var _this8 = this;

      listeners.forEach(function (_ref3) {
        var _ref4 = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
            event = _ref4[0],
            listener = _ref4[1];

        _this8._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
      });
    }
  }, {
    key: "_platformSupportsMouseEvents",
    value: function _platformSupportsMouseEvents() {
      return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */

  }, {
    key: "_disableNativeGesturesIfNecessary",
    value: function _disableNativeGesturesIfNecessary() {
      var gestures = this.touchGestures;

      if (gestures !== 'off') {
        var element = this._elementRef.nativeElement;
        var _style = element.style; // If gestures are set to `auto`, we don't disable text selection on inputs and
        // textareas, because it prevents the user from typing into them on iOS Safari.

        if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
          _style.userSelect = _style.msUserSelect = _style.webkitUserSelect = _style.MozUserSelect = 'none';
        } // If we have `auto` gestures and the element uses native HTML dragging,
        // we don't set `-webkit-user-drag` because it prevents the native behavior.


        if (gestures === 'on' || !element.draggable) {
          _style.webkitUserDrag = 'none';
        }

        _style.touchAction = 'none';
        _style.webkitTapHighlightColor = 'transparent';
      }
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      if (value !== this._position) {
        this._position = value;

        if (this._overlayRef) {
          this._updatePosition();

          if (this._tooltipInstance) {
            this._tooltipInstance.show(0);
          }

          this._overlayRef.updatePosition();
        }
      }
    }
    /** Disables the display of the tooltip. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

      if (this._disabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
    }
    /** The message to be displayed in the tooltip */

  }, {
    key: "message",
    get: function get() {
      return this._message;
    },
    set: function set(value) {
      var _this9 = this;

      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


      this._message = value != null ? "".concat(value).trim() : '';

      if (!this._message && this._isTooltipVisible()) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();

        this._updateTooltipMessage();

        this._ngZone.runOutsideAngular(function () {
          // The `AriaDescriber` has some functionality that avoids adding a description if it's the
          // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
          // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
          // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
          Promise.resolve().then(function () {
            _this9._ariaDescriber.describe(_this9._elementRef.nativeElement, _this9.message);
          });
        });
      }
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */

  }, {
    key: "tooltipClass",
    get: function get() {
      return this._tooltipClass;
    },
    set: function set(value) {
      this._tooltipClass = value;

      if (this._tooltipInstance) {
        this._setTooltipClass(this._tooltipClass);
      }
    }
  }]);

  return MatTooltip;
}();

MatTooltip.ɵfac = function MatTooltip_Factory(t) {
  return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8));
};

MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatTooltip,
  selectors: [["", "matTooltip", ""]],
  hostAttrs: [1, "mat-tooltip-trigger"],
  inputs: {
    showDelay: ["matTooltipShowDelay", "showDelay"],
    hideDelay: ["matTooltipHideDelay", "hideDelay"],
    touchGestures: ["matTooltipTouchGestures", "touchGestures"],
    position: ["matTooltipPosition", "position"],
    disabled: ["matTooltipDisabled", "disabled"],
    message: ["matTooltip", "message"],
    tooltipClass: ["matTooltipClass", "tooltipClass"]
  },
  exportAs: ["matTooltip"]
});

MatTooltip.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_TOOLTIP_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
    }]
  }];
};

MatTooltip.propDecorators = {
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipPosition']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipDisabled']
  }],
  showDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipShowDelay']
  }],
  hideDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipHideDelay']
  }],
  touchGestures: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipTouchGestures']
  }],
  message: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltip']
  }],
  tooltipClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipClass']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[matTooltip]',
      exportAs: 'matTooltip',
      host: {
        'class': 'mat-tooltip-trigger'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipShowDelay']
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipHideDelay']
    }],
    touchGestures: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipTouchGestures']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipDisabled']
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltip']
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipClass']
    }]
  });
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */


var TooltipComponent = /*#__PURE__*/function () {
  function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipComponent);

    this._changeDetectorRef = _changeDetectorRef;
    this._breakpointObserver = _breakpointObserver;
    /** Property watched by the animation framework to show or hide the tooltip */

    this._visibility = 'initial';
    /** Whether interactions on the page should close the tooltip */

    this._closeOnInteraction = false;
    /** Subject for notifying that the tooltip has been hidden from the view */

    this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Stream that emits whether the user has a handset-sized display.  */

    this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Handset);
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TooltipComponent, [{
    key: "show",
    value: function show(delay) {
      var _this10 = this;

      // Cancel the delayed hide if it is scheduled
      if (this._hideTimeoutId) {
        clearTimeout(this._hideTimeoutId);
        this._hideTimeoutId = null;
      } // Body interactions should cancel the tooltip if there is a delay in showing.


      this._closeOnInteraction = true;
      this._showTimeoutId = setTimeout(function () {
        _this10._visibility = 'visible';
        _this10._showTimeoutId = null; // Mark for check so if any parent component has set the
        // ChangeDetectionStrategy to OnPush it will be checked anyways

        _this10._markForCheck();
      }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */

  }, {
    key: "hide",
    value: function hide(delay) {
      var _this11 = this;

      // Cancel the delayed show if it is scheduled
      if (this._showTimeoutId) {
        clearTimeout(this._showTimeoutId);
        this._showTimeoutId = null;
      }

      this._hideTimeoutId = setTimeout(function () {
        _this11._visibility = 'hidden';
        _this11._hideTimeoutId = null; // Mark for check so if any parent component has set the
        // ChangeDetectionStrategy to OnPush it will be checked anyways

        _this11._markForCheck();
      }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */

  }, {
    key: "afterHidden",
    value: function afterHidden() {
      return this._onHide;
    }
    /** Whether the tooltip is being displayed. */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this._visibility === 'visible';
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._onHide.complete();
    }
  }, {
    key: "_animationStart",
    value: function _animationStart() {
      this._closeOnInteraction = false;
    }
  }, {
    key: "_animationDone",
    value: function _animationDone(event) {
      var toState = event.toState;

      if (toState === 'hidden' && !this.isVisible()) {
        this._onHide.next();
      }

      if (toState === 'visible' || toState === 'hidden') {
        this._closeOnInteraction = true;
      }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */

  }, {
    key: "_handleBodyInteraction",
    value: function _handleBodyInteraction() {
      if (this._closeOnInteraction) {
        this.hide(0);
      }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */

  }, {
    key: "_markForCheck",
    value: function _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
  }]);

  return TooltipComponent;
}();

TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]));
};

TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TooltipComponent,
  selectors: [["mat-tooltip-component"]],
  hostAttrs: ["aria-hidden", "true"],
  hostVars: 2,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
        return ctx._handleBodyInteraction();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveBody"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
    }
  },
  decls: 3,
  vars: 7,
  consts: [[1, "mat-tooltip", 3, "ngClass"]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
        return ctx._animationStart();
      })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
        return ctx._animationDone($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_0_0 = null;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
  styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
  encapsulation: 2,
  data: {
    animation: [matTooltipAnimations.tooltipState]
  },
  changeDetection: 0
});

TooltipComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-tooltip-component',
      template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      animations: [matTooltipAnimations.tooltipState],
      host: {
        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
        // won't be rendered if the animations are disabled or there is no web animations polyfill.
        '[style.zoom]': '_visibility === "visible" ? 1 : null',
        '(body:click)': 'this._handleBodyInteraction()',
        'aria-hidden': 'true'
      },
      styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatTooltipModule = function MatTooltipModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatTooltipModule);
};

MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatTooltipModule
});
MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatTooltipModule_Factory(t) {
    return new (t || MatTooltipModule)();
  },
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatTooltipModule, {
    declarations: function declarations() {
      return [MatTooltip, TooltipComponent];
    },
    imports: function imports() {
      return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]],
      declarations: [MatTooltip, TooltipComponent],
      entryComponents: [TooltipComponent],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "VFRK":
/*!********************************!*\
  !*** ./src/models/CartItem.ts ***!
  \********************************/
/*! exports provided: ShopItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopItem", function() { return ShopItem; });
var ShopItem = /** @class */ (function () {
    function ShopItem() {
    }
    return ShopItem;
}());



/***/ }),

/***/ "Wp6s":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
  \**********************************************************************/
/*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return MatCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return MatCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return MatCardAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return MatCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return MatCardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return MatCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return MatCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return MatCardLgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return MatCardMdImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return MatCardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return MatCardSmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return MatCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return MatCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return MatCardTitleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return MatCardXlImage; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


var _c0 = ["*", [["mat-card-footer"]]];
var _c1 = ["*", "mat-card-footer"];
var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

var MatCardContent = function MatCardContent() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardContent);
};

MatCardContent.ɵfac = function MatCardContent_Factory(t) {
  return new (t || MatCardContent)();
};

MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardContent,
  selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
  hostAttrs: [1, "mat-card-content"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: 'mat-card-content, [mat-card-content], [matCardContent]',
      host: {
        'class': 'mat-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


var MatCardTitle = function MatCardTitle() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardTitle);
};

MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
  return new (t || MatCardTitle)();
};

MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-card-title"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: "mat-card-title, [mat-card-title], [matCardTitle]",
      host: {
        'class': 'mat-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


var MatCardSubtitle = function MatCardSubtitle() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardSubtitle);
};

MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
  return new (t || MatCardSubtitle)();
};

MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-card-subtitle"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
      host: {
        'class': 'mat-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


var MatCardActions = function MatCardActions() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardActions);

  /** Position of the actions inside the card. */
  this.align = 'start';
};

MatCardActions.ɵfac = function MatCardActions_Factory(t) {
  return new (t || MatCardActions)();
};

MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-card-actions"],
  hostVars: 2,
  hostBindings: function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
});
MatCardActions.propDecorators = {
  align: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-card-actions',
        '[class.mat-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], function () {
    return [];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
    }]
  });
})();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


var MatCardFooter = function MatCardFooter() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardFooter);
};

MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
  return new (t || MatCardFooter)();
};

MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-card-footer"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-card-footer'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


var MatCardImage = function MatCardImage() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardImage);
};

MatCardImage.ɵfac = function MatCardImage_Factory(t) {
  return new (t || MatCardImage)();
};

MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-card-image"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-card-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


var MatCardSmImage = function MatCardSmImage() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardSmImage);
};

MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
  return new (t || MatCardSmImage)();
};

MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-card-sm-image"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-card-sm-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


var MatCardMdImage = function MatCardMdImage() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardMdImage);
};

MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
  return new (t || MatCardMdImage)();
};

MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-card-md-image"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-card-md-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


var MatCardLgImage = function MatCardLgImage() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardLgImage);
};

MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
  return new (t || MatCardLgImage)();
};

MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-card-lg-image"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-card-lg-image'
      }
    }]
  }], null, null);
})();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


var MatCardXlImage = function MatCardXlImage() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardXlImage);
};

MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
  return new (t || MatCardXlImage)();
};

MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-card-xl-image"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-card-xl-image'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


var MatCardAvatar = function MatCardAvatar() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardAvatar);
};

MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
  return new (t || MatCardAvatar)();
};

MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-card-avatar"]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-card-avatar'
      }
    }]
  }], null, null);
})();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */


var MatCard = // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
function MatCard(_animationMode) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCard);

  this._animationMode = _animationMode;
};

MatCard.ɵfac = function MatCard_Factory(t) {
  return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"], 8));
};

MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-card", "mat-focus-indicator"],
  hostVars: 2,
  hostBindings: function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    }
  },
  styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

MatCard.ctorParameters = function () {
  return [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
    args: [{
      selector: 'mat-card',
      exportAs: 'matCard',
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      host: {
        'class': 'mat-card mat-focus-indicator',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
    }]
  }], function () {
    return [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */


var MatCardHeader = function MatCardHeader() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardHeader);
};

MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
  return new (t || MatCardHeader)();
};

MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-card-header"],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-card-header-text"]],
  template: function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
    args: [{
      selector: 'mat-card-header',
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      host: {
        'class': 'mat-card-header'
      }
    }]
  }], null, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */


var MatCardTitleGroup = function MatCardTitleGroup() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardTitleGroup);
};

MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
  return new (t || MatCardTitleGroup)();
};

MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-card-title-group"],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 0,
  template: function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
    args: [{
      selector: 'mat-card-title-group',
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      host: {
        'class': 'mat-card-title-group'
      }
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatCardModule = function MatCardModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatCardModule);
};

MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatCardModule
});
MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  factory: function MatCardModule_Factory(t) {
    return new (t || MatCardModule)();
  },
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatCardModule, {
    declarations: function declarations() {
      return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
      exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]],
      declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "Wwls":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "YpYv":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvbWFwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Zfkz":
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./upgrade.component.html */ "PO8C");
/* harmony import */ var _upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.component.css */ "NL5l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.ctorParameters = function () { return []; };
    UpgradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upgrade',
            template: _raw_loader_upgrade_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_upgrade_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "bTqV":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
  \************************************************************************/
/*! exports provided: MatAnchor, MatButton, MatButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function() { return MatAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButton", function() { return MatButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return MatButtonModule; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default color palette for round buttons (mat-fab and mat-mini-fab) */




var _c0 = ["mat-button", ""];
var _c1 = ["*"];
var _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n";
var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */

var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

/** @docs-private */

var MatButtonBase = function MatButtonBase(_elementRef) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatButtonBase);

  this._elementRef = _elementRef;
};

var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(MatButtonBase)));
/**
 * Material design button.
 */


var MatButton = /*#__PURE__*/function (_MatButtonMixinBase2) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatButton, _MatButtonMixinBase2);

  var _super = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatButton);

  function MatButton(elementRef, _focusMonitor, _animationMode) {
    var _this;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatButton);

    _this = _super.call(this, elementRef);
    _this._focusMonitor = _focusMonitor;
    _this._animationMode = _animationMode;
    /** Whether the button is round. */

    _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
    /** Whether the button is icon button. */

    _this.isIconButton = _this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding class.

    var _iterator = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(BUTTON_HOST_ATTRIBUTES),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var attr = _step.value;

        if (_this._hasHostAttributes(attr)) {
          _this._getHostElement().classList.add(attr);
        }
      } // Add a class that applies to all buttons. This makes it easier to target if somebody
      // wants to target all Material buttons. We do it here rather than `host` to ensure that
      // the class is applied to derived classes.

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    elementRef.nativeElement.classList.add('mat-button-base');

    if (_this.isRoundButton) {
      _this.color = DEFAULT_ROUND_BUTTON_COLOR;
    }

    return _this;
  }

  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatButton, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, true);
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the button. */

  }, {
    key: "focus",
    value: function focus() {
      var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
      var options = arguments.length > 1 ? arguments[1] : undefined;

      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    }
  }, {
    key: "_getHostElement",
    value: function _getHostElement() {
      return this._elementRef.nativeElement;
    }
  }, {
    key: "_isRippleDisabled",
    value: function _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    /** Gets whether the button has one of the given attributes. */

  }, {
    key: "_hasHostAttributes",
    value: function _hasHostAttributes() {
      var _this2 = this;

      for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
        attributes[_key] = arguments[_key];
      }

      return attributes.some(function (attribute) {
        return _this2._getHostElement().hasAttribute(attribute);
      });
    }
  }]);

  return MatButton;
}(_MatButtonMixinBase);

MatButton.ɵfac = function MatButton_Factory(t) {
  return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
};

MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MatButton,
  selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
  viewQuery: function MatButton_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 5,
  hostBindings: function MatButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color"
  },
  exportAs: ["matButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 5,
  consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
  template: function MatButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]],
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});

MatButton.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatButton.propDecorators = {
  ripple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
      exportAs: 'matButton',
      host: {
        '[attr.disabled]': 'disabled || null',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        // Add a class for disabled button styling instead of the using attribute
        // selector or pseudo-selector.  This allows users to create focusabled
        // disabled buttons without recreating the styles.
        '[class.mat-button-disabled]': 'disabled',
        'class': 'mat-focus-indicator'
      },
      template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
      inputs: ['disabled', 'disableRipple', 'color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]]
    }]
  });
})();
/**
 * Material design anchor button.
 */


var MatAnchor = /*#__PURE__*/function (_MatButton) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatAnchor, _MatButton);

  var _super2 = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatAnchor);

  function MatAnchor(focusMonitor, elementRef, animationMode) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatAnchor);

    return _super2.call(this, elementRef, focusMonitor, animationMode);
  }

  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatAnchor, [{
    key: "_haltDisabledEvents",
    value: function _haltDisabledEvents(event) {
      // A disabled button shouldn't apply any actions
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }
  }]);

  return MatAnchor;
}(MatButton);

MatAnchor.ɵfac = function MatAnchor_Factory(t) {
  return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
};

MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MatAnchor,
  selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 7,
  hostBindings: function MatAnchor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
        return ctx._haltDisabledEvents($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex"
  },
  exportAs: ["matButton", "matAnchor"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 5,
  consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
  template: function MatAnchor_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"]],
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});

MatAnchor.ctorParameters = function () {
  return [{
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatAnchor.propDecorators = {
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
    args: [{
      selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
      exportAs: 'matButton, matAnchor',
      host: {
        // Note that we ignore the user-specified tabindex when it's disabled for
        // consistency with the `mat-button` applied on native buttons where even
        // though they have an index, they're not tabbable.
        '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
        '[attr.disabled]': 'disabled || null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '(click)': '_haltDisabledEvents($event)',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-button-disabled]': 'disabled',
        'class': 'mat-focus-indicator'
      },
      inputs: ['disabled', 'disableRipple', 'color'],
      template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatButtonModule = function MatButtonModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatButtonModule);
};

MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MatButtonModule
});
MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  factory: function MatButtonModule_Factory(t) {
    return new (t || MatButtonModule)();
  },
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatButtonModule, {
    declarations: function declarations() {
      return [MatButton, MatAnchor];
    },
    imports: function imports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
      exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
      declarations: [MatButton, MatAnchor]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "d3UM":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \************************************************************************/
/*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, matSelectAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function() { return MAT_SELECT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function() { return MAT_SELECT_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JX7q");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ "R0Ic");





















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










var _c0 = ["trigger"];
var _c1 = ["panel"];

function MatSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
  }
}

function MatSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
  }
}

function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function MatSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function MatSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r8._panelDoneAnimatingStream.next($event.toState);
    })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10._handleKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}

var _c2 = [[["mat-select-trigger"]], "*"];
var _c3 = ["mat-select-trigger", "*"];
var matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["animateChild"])()], {
    optional: true
  }))]),

  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_20__["style"])({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */

/** The max height of the select's overlay panel */

var SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis */

var SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */

var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** The height of the select items in `em` units. */

var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */

var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */

var SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('mat-select-scroll-strategy');
/** @docs-private */

function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** Injection token that can be used to provide the default options the select module. */


var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('MAT_SELECT_CONFIG');
/** @docs-private */

var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** Change event object that is emitted when the select value has changed. */

var MatSelectChange = function MatSelectChange(
/** Reference to the select that emitted the change event. */
source,
/** Current value of the select that emitted the event. */
value) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectChange);

  this.source = source;
  this.value = value;
}; // Boilerplate for applying mixins to MatSelect.

/** @docs-private */


var MatSelectBase = function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectBase);

  this._elementRef = _elementRef;
  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
};

var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinErrorState"])(MatSelectBase))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["InjectionToken"]('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */

var MatSelectTrigger = function MatSelectTrigger() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectTrigger);
};

MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
  return new (t || MatSelectTrigger)();
};

MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
  type: MatSelectTrigger,
  selectors: [["mat-select-trigger"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: MAT_SELECT_TRIGGER,
    useExisting: MatSelectTrigger
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Directive"],
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();

var MatSelect = /*#__PURE__*/function (_MatSelectMixinBase2) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSelect, _MatSelectMixinBase2);

  var _super = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(MatSelect);

  function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, defaults) {
    var _this;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelect);

    _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    _this._viewportRuler = _viewportRuler;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._ngZone = _ngZone;
    _this._dir = _dir;
    _this._parentFormField = _parentFormField;
    _this.ngControl = ngControl;
    _this._liveAnnouncer = _liveAnnouncer;
    /** Whether or not the overlay panel is open. */

    _this._panelOpen = false;
    /** Whether filling out the select is required in the form. */

    _this._required = false;
    /** The scroll position of the overlay panel, calculated to center the selected option. */

    _this._scrollTop = 0;
    /** Whether the component is in multiple selection mode. */

    _this._multiple = false;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */

    _this._compareWith = function (o1, o2) {
      return o1 === o2;
    };
    /** Unique id for this input. */


    _this._uid = "mat-select-".concat(nextUniqueId++);
    /** Current `ariar-labelledby` value for the select trigger. */

    _this._triggerAriaLabelledBy = null;
    /** Emits whenever the component is destroyed. */

    _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
    /** The cached font-size of the trigger element. */

    _this._triggerFontSize = 0;
    /** `View -> model callback called when value changes` */

    _this._onChange = function () {};
    /** `View -> model callback called when select has been touched` */


    _this._onTouched = function () {};

    _this._valueId = "mat-select-value-".concat(nextUniqueId++);
    /** The value of the select panel's transform-origin property. */

    _this._transformOrigin = 'top';
    /** Emits when the panel element is finished transforming in. */

    _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_18__["Subject"]();
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */

    _this._offsetY = 0;
    /**
     * This position config ensures that the top "start" corner of the overlay
     * is aligned with with the top "start" of the origin by default (overlapping
     * the trigger completely). If the panel cannot fit below the trigger, it
     * will fall back to a position above the trigger.
     */

    _this._positions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
    /** Whether the component is disabling centering of the active option over the trigger. */

    _this._disableOptionCentering = false;
    _this._focused = false;
    /** A name for this control that can be used by `mat-form-field`. */

    _this.controlType = 'mat-select';
    /** Aria label of the select. If not specified, the placeholder will be used as label. */

    _this.ariaLabel = '';
    /** Combined stream of all of the child options' change events. */

    _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["defer"])(function () {
      var options = _this.options;

      if (options) {
        return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"].apply(void 0, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(options.map(function (option) {
            return option.onSelectionChange;
          })));
        }));
      }

      return _this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])(function () {
        return _this.optionSelectionChanges;
      }));
    });
    /** Event emitted when the select panel has been toggled. */

    _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /** Event emitted when the select has been opened. */

    _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (o) {
      return o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function () {}));
    /** Event emitted when the select has been closed. */

    _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["filter"])(function (o) {
      return !o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(function () {}));
    /** Event emitted when the selected value has been changed by the user. */

    _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]();

    if (_this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      _this.ngControl.valueAccessor = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
    }

    _this._scrollStrategyFactory = scrollStrategyFactory;
    _this._scrollStrategy = _this._scrollStrategyFactory();
    _this.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

    _this.id = _this.id;

    if (defaults) {
      if (defaults.disableOptionCentering != null) {
        _this.disableOptionCentering = defaults.disableOptionCentering;
      }

      if (defaults.typeaheadDebounceInterval != null) {
        _this.typeaheadDebounceInterval = defaults.typeaheadDebounceInterval;
      }
    }

    return _this;
  }
  /** Whether the select is focused. */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatSelect, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_15__["SelectionModel"](this.multiple);
      this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
      // fire the animation end event twice for the same animation. See:
      // https://github.com/angular/angular/issues/24084

      this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this2.panelOpen) {
          _this2._scrollTop = 0;

          _this2.openedChange.emit(true);
        } else {
          _this2.openedChange.emit(false);

          _this2.overlayDir.offsetX = 0;

          _this2._changeDetectorRef.markForCheck();
        }
      });

      this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this2._panelOpen) {
          _this2._triggerRect = _this2.trigger.nativeElement.getBoundingClientRect();

          _this2._changeDetectorRef.markForCheck();
        }
      });
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this3 = this;

      this._initKeyManager();

      this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function (event) {
        event.added.forEach(function (option) {
          return option.select();
        });
        event.removed.forEach(function (option) {
          return option.deselect();
        });
      });

      this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        _this3._resetOptions();

        _this3._initializeSelection();
      });
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      var newAriaLabelledby = this._getTriggerAriaLabelledby(); // We have to manage setting the `aria-labelledby` ourselves, because part of its value
      // is computed as a result of a content query which can cause this binding to trigger a
      // "changed after checked" error.


      if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
        var element = this._elementRef.nativeElement;
        this._triggerAriaLabelledBy = newAriaLabelledby;

        if (newAriaLabelledby) {
          element.setAttribute('aria-labelledby', newAriaLabelledby);
        } else {
          element.removeAttribute('aria-labelledby');
        }
      }

      if (this.ngControl) {
        this.updateErrorState();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
      // the parent form field know to run change detection when the disabled state changes.
      if (changes['disabled']) {
        this.stateChanges.next();
      }

      if (changes['typeaheadDebounceInterval'] && this._keyManager) {
        this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy.next();

      this._destroy.complete();

      this.stateChanges.complete();
    }
    /** Toggles the overlay panel open or closed. */

  }, {
    key: "toggle",
    value: function toggle() {
      this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */

  }, {
    key: "open",
    value: function open() {
      var _this4 = this;

      if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
        return;
      }

      this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
      // `parseInt` ignores the trailing 'px' and converts this to a number.

      this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
      this._panelOpen = true;

      this._keyManager.withHorizontalOrientation(null);

      this._calculateOverlayPosition();

      this._highlightCorrectOption();

      this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


      this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe(function () {
        if (_this4._triggerFontSize && _this4.overlayDir.overlayRef && _this4.overlayDir.overlayRef.overlayElement) {
          _this4.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this4._triggerFontSize, "px");
        }
      });
    }
    /** Closes the overlay panel and focuses the host element. */

  }, {
    key: "close",
    value: function close() {
      if (this._panelOpen) {
        this._panelOpen = false;

        this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

        this._changeDetectorRef.markForCheck();

        this._onTouched();
      }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */

  }, {
    key: "_isRtl",

    /** Whether the element is in RTL mode. */
    value: function _isRtl() {
      return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (!this.disabled) {
        this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
      }
    }
    /** Handles keyboard events while the select is closed. */

  }, {
    key: "_handleClosedKeydown",
    value: function _handleClosedKeydown(event) {
      var keyCode = event.keyCode;
      var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["RIGHT_ARROW"];
      var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["SPACE"];
      var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

      if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
        event.preventDefault(); // prevents the page from scrolling down when pressing space

        this.open();
      } else if (!this.multiple) {
        var previouslySelectedOption = this.selected;
        manager.onKeydown(event);
        var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

        if (selectedOption && previouslySelectedOption !== selectedOption) {
          // We set a duration on the live announcement, because we want the live element to be
          // cleared after a while so that users can't navigate to it using the arrow keys.
          this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
        }
      }
    }
    /** Handles keyboard events when the selected is open. */

  }, {
    key: "_handleOpenKeydown",
    value: function _handleOpenKeydown(event) {
      var manager = this._keyManager;
      var keyCode = event.keyCode;
      var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["UP_ARROW"];
      var isTyping = manager.isTyping();

      if (isArrowKey && event.altKey) {
        // Close the select on ALT + arrow key to match the native <select>
        event.preventDefault();
        this.close(); // Don't do anything in this case if the user is typing,
        // because the typing sequence can include the space key.
      } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["hasModifierKey"])(event)) {
        event.preventDefault();

        manager.activeItem._selectViaInteraction();
      } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__["A"] && event.ctrlKey) {
        event.preventDefault();
        var hasDeselectedOptions = this.options.some(function (opt) {
          return !opt.disabled && !opt.selected;
        });
        this.options.forEach(function (option) {
          if (!option.disabled) {
            hasDeselectedOptions ? option.select() : option.deselect();
          }
        });
      } else {
        var previouslyFocusedIndex = manager.activeItemIndex;
        manager.onKeydown(event);

        if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
          manager.activeItem._selectViaInteraction();
        }
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      if (!this.disabled) {
        this._focused = true;
        this.stateChanges.next();
      }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */

  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this._focused = false;

      if (!this.disabled && !this.panelOpen) {
        this._onTouched();

        this._changeDetectorRef.markForCheck();

        this.stateChanges.next();
      }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */

  }, {
    key: "_onAttached",
    value: function _onAttached() {
      var _this5 = this;

      this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["take"])(1)).subscribe(function () {
        _this5._changeDetectorRef.detectChanges();

        _this5._calculateOverlayOffsetX();

        _this5.panel.nativeElement.scrollTop = _this5._scrollTop;
      });
    }
    /** Returns the theme to be used on the panel. */

  }, {
    key: "_getPanelTheme",
    value: function _getPanelTheme() {
      return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
    }
    /** Whether the select has a value. */

  }, {
    key: "_initializeSelection",
    value: function _initializeSelection() {
      var _this6 = this;

      // Defer setting the value in order to avoid the "Expression
      // has changed after it was checked" errors from Angular.
      Promise.resolve().then(function () {
        _this6._setSelectionByValue(_this6.ngControl ? _this6.ngControl.value : _this6._value);

        _this6.stateChanges.next();
      });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */

  }, {
    key: "_setSelectionByValue",
    value: function _setSelectionByValue(value) {
      var _this7 = this;

      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectNonArrayValueError();
        }

        this._selectionModel.clear();

        value.forEach(function (currentValue) {
          return _this7._selectValue(currentValue);
        });

        this._sortValues();
      } else {
        this._selectionModel.clear();

        var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
        // mode, because we don't know what option the user interacted with last.


        if (correspondingOption) {
          this._keyManager.updateActiveItem(correspondingOption);
        } else if (!this.panelOpen) {
          // Otherwise reset the highlighted option. Note that we only want to do this while
          // closed, because doing it while open can shift the user's focus unnecessarily.
          this._keyManager.updateActiveItem(-1);
        }
      }

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */

  }, {
    key: "_selectValue",
    value: function _selectValue(value) {
      var _this8 = this;

      var correspondingOption = this.options.find(function (option) {
        try {
          // Treat null as a special reset value.
          return option.value != null && _this8._compareWith(option.value, value);
        } catch (error) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            // Notify developers of errors in their comparator.
            console.warn(error);
          }

          return false;
        }
      });

      if (correspondingOption) {
        this._selectionModel.select(correspondingOption);
      }

      return correspondingOption;
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */

  }, {
    key: "_initKeyManager",
    value: function _initKeyManager() {
      var _this9 = this;

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

      this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this9.panelOpen) {
          // Select the active item when tabbing away. This is consistent with how the native
          // select behaves. Note that we only want to do this in single selection mode.
          if (!_this9.multiple && _this9._keyManager.activeItem) {
            _this9._keyManager.activeItem._selectViaInteraction();
          } // Restore focus to the trigger before closing. Ensures that the focus
          // position won't be lost if the user got focus into the overlay.


          _this9.focus();

          _this9.close();
        }
      });

      this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this9._panelOpen && _this9.panel) {
          _this9._scrollActiveOptionIntoView();
        } else if (!_this9._panelOpen && !_this9.multiple && _this9._keyManager.activeItem) {
          _this9._keyManager.activeItem._selectViaInteraction();
        }
      });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */

  }, {
    key: "_resetOptions",
    value: function _resetOptions() {
      var _this10 = this;

      var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(this.options.changes, this._destroy);
      this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
        _this10._onSelect(event.source, event.isUserInput);

        if (event.isUserInput && !_this10.multiple && _this10._panelOpen) {
          _this10.close();

          _this10.focus();
        }
      }); // Listen to changes in the internal state of the options and react accordingly.
      // Handles cases like the labels of the selected options changing.

      rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"].apply(void 0, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.options.map(function (option) {
        return option._stateChanges;
      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["takeUntil"])(changedOrDestroyed)).subscribe(function () {
        _this10._changeDetectorRef.markForCheck();

        _this10.stateChanges.next();
      });
    }
    /** Invoked when an option is clicked. */

  }, {
    key: "_onSelect",
    value: function _onSelect(option, isUserInput) {
      var wasSelected = this._selectionModel.isSelected(option);

      if (option.value == null && !this._multiple) {
        option.deselect();

        this._selectionModel.clear();

        if (this.value != null) {
          this._propagateChanges(option.value);
        }
      } else {
        if (wasSelected !== option.selected) {
          option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
        }

        if (isUserInput) {
          this._keyManager.setActiveItem(option);
        }

        if (this.multiple) {
          this._sortValues();

          if (isUserInput) {
            // In case the user selected the option with their mouse, we
            // want to restore focus back to the trigger, in order to
            // prevent the select keyboard controls from clashing with
            // the ones from `mat-option`.
            this.focus();
          }
        }
      }

      if (wasSelected !== this._selectionModel.isSelected(option)) {
        this._propagateChanges();
      }

      this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */

  }, {
    key: "_sortValues",
    value: function _sortValues() {
      var _this11 = this;

      if (this.multiple) {
        var options = this.options.toArray();

        this._selectionModel.sort(function (a, b) {
          return _this11.sortComparator ? _this11.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
        });

        this.stateChanges.next();
      }
    }
    /** Emits change event to set the model value. */

  }, {
    key: "_propagateChanges",
    value: function _propagateChanges(fallbackValue) {
      var valueToEmit = null;

      if (this.multiple) {
        valueToEmit = this.selected.map(function (option) {
          return option.value;
        });
      } else {
        valueToEmit = this.selected ? this.selected.value : fallbackValue;
      }

      this._value = valueToEmit;
      this.valueChange.emit(valueToEmit);

      this._onChange(valueToEmit);

      this.selectionChange.emit(new MatSelectChange(this, valueToEmit));

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */

  }, {
    key: "_highlightCorrectOption",
    value: function _highlightCorrectOption() {
      if (this._keyManager) {
        if (this.empty) {
          this._keyManager.setFirstItemActive();
        } else {
          this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
      }
    }
    /** Scrolls the active option into view. */

  }, {
    key: "_scrollActiveOptionIntoView",
    value: function _scrollActiveOptionIntoView() {
      var activeOptionIndex = this._keyManager.activeItemIndex || 0;

      var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);

      var itemHeight = this._getItemHeight();

      this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_getOptionScrollPosition"])((activeOptionIndex + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
    /** Focuses the select element. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    /** Gets the index of the provided option in the option list. */

  }, {
    key: "_getOptionIndex",
    value: function _getOptionIndex(option) {
      return this.options.reduce(function (result, current, index) {
        if (result !== undefined) {
          return result;
        }

        return option === current ? index : undefined;
      }, undefined);
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

  }, {
    key: "_calculateOverlayPosition",
    value: function _calculateOverlayPosition() {
      var itemHeight = this._getItemHeight();

      var items = this._getItemCount();

      var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
      var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

      var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

      var selectedOptionOffset = this.empty ? 0 : this._getOptionIndex(this._selectionModel.selected[0]);
      selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
      // center of the overlay panel rather than the top.

      var scrollBuffer = panelHeight / 2;
      this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
      this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

      this._checkOverlayWithinViewport(maxScroll);
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */

  }, {
    key: "_calculateOverlayScroll",
    value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
      var itemHeight = this._getItemHeight();

      var optionOffsetFromScrollTop = itemHeight * selectedIndex;
      var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
      // scroll container, then subtracts the scroll buffer to scroll the option down to
      // the center of the overlay panel. Half the option height must be re-added to the
      // scrollTop so the option is centered based on its middle, not its top edge.

      var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
      return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    /** Gets the aria-labelledby for the select panel. */

  }, {
    key: "_getPanelAriaLabelledby",
    value: function _getPanelAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }

      var labelId = this._getLabelId();

      return this.ariaLabelledby ? labelId + ' ' + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */

  }, {
    key: "_getAriaActiveDescendant",
    value: function _getAriaActiveDescendant() {
      if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
        return this._keyManager.activeItem.id;
      }

      return null;
    }
    /** Gets the ID of the element that is labelling the select. */

  }, {
    key: "_getLabelId",
    value: function _getLabelId() {
      var _a;

      return ((_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId()) || '';
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */

  }, {
    key: "_calculateOverlayOffsetX",
    value: function _calculateOverlayOffsetX() {
      var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();

      var viewportSize = this._viewportRuler.getViewportSize();

      var isRtl = this._isRtl();

      var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
      var offsetX; // Adjust the offset, depending on the option padding.

      if (this.multiple) {
        offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
      } else {
        var selected = this._selectionModel.selected[0] || this.options.first;
        offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
      } // Invert the offset in LTR.


      if (!isRtl) {
        offsetX *= -1;
      } // Determine how much the select overflows on each side.


      var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
      var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

      if (leftOverflow > 0) {
        offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
      } else if (rightOverflow > 0) {
        offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
      } // Set the offset directly in order to avoid having to go through change detection and
      // potentially triggering "changed after it was checked" errors. Round the value to avoid
      // blurry content in some browsers.


      this.overlayDir.offsetX = Math.round(offsetX);
      this.overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */

  }, {
    key: "_calculateOverlayOffsetY",
    value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
      var itemHeight = this._getItemHeight();

      var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
      var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
      var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

      if (this._disableOptionCentering) {
        return 0;
      }

      if (this._scrollTop === 0) {
        optionOffsetFromPanelTop = selectedIndex * itemHeight;
      } else if (this._scrollTop === maxScroll) {
        var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
        var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
        // portion of it is shown in the viewport and account for it in our offset.

        var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
        // there is always extra padding at the top or bottom of the panel. When
        // scrolled to the very bottom, this padding is at the top of the panel and
        // must be added to the offset.

        optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
      } else {
        // If the option was scrolled to the middle of the panel using a scroll buffer,
        // its offset will be the scroll buffer minus the half height that was added to
        // center it.
        optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
      } // The final offset is the option's offset from the top, adjusted for the height difference,
      // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
      // The value is rounded to prevent some browsers from blurring the content.


      return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */

  }, {
    key: "_checkOverlayWithinViewport",
    value: function _checkOverlayWithinViewport(maxScroll) {
      var itemHeight = this._getItemHeight();

      var viewportSize = this._viewportRuler.getViewportSize();

      var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
      var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
      var panelHeightTop = Math.abs(this._offsetY);
      var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
      var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

      if (panelHeightBottom > bottomSpaceAvailable) {
        this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
      } else if (panelHeightTop > topSpaceAvailable) {
        this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
      } else {
        this._transformOrigin = this._getOriginBasedOnOption();
      }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */

  }, {
    key: "_adjustPanelUp",
    value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
      // Browsers ignore fractional scroll offsets, so we need to round.
      var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
      // adjusts the offset by that amount to move the panel up into the viewport.

      this._scrollTop -= distanceBelowViewport;
      this._offsetY -= distanceBelowViewport;
      this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
      // by scrolling, so set the offset to 0 to allow the fallback position to take
      // effect.

      if (this._scrollTop <= 0) {
        this._scrollTop = 0;
        this._offsetY = 0;
        this._transformOrigin = "50% bottom 0px";
      }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */

  }, {
    key: "_adjustPanelDown",
    value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
      // Browsers ignore fractional scroll offsets, so we need to round.
      var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
      // adjusts the offset by that amount to move the panel down into the viewport.

      this._scrollTop += distanceAboveViewport;
      this._offsetY += distanceAboveViewport;
      this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
      // panel by scrolling, so set the offset to 0 to allow the fallback position
      // to take effect.

      if (this._scrollTop >= maxScroll) {
        this._scrollTop = maxScroll;
        this._offsetY = 0;
        this._transformOrigin = "50% top 0px";
        return;
      }
    }
    /** Sets the transform origin point based on the selected option. */

  }, {
    key: "_getOriginBasedOnOption",
    value: function _getOriginBasedOnOption() {
      var itemHeight = this._getItemHeight();

      var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
      var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
      return "50% ".concat(originY, "px 0px");
    }
    /** Calculates the amount of items in the select. This includes options and group labels. */

  }, {
    key: "_getItemCount",
    value: function _getItemCount() {
      return this.options.length + this.optionGroups.length;
    }
    /** Calculates the height of the select's options. */

  }, {
    key: "_getItemHeight",
    value: function _getItemHeight() {
      return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /** Gets the aria-labelledby of the select component trigger. */

  }, {
    key: "_getTriggerAriaLabelledby",
    value: function _getTriggerAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }

      var value = this._getLabelId() + ' ' + this._valueId;

      if (this.ariaLabelledby) {
        value += ' ' + this.ariaLabelledby;
      }

      return value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",
    value: function setDescribedByIds(ids) {
      this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      this.focus();
      this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "focused",
    get: function get() {
      return this._focused || this._panelOpen;
    }
    /** Placeholder to be shown if no value has been selected. */

  }, {
    key: "placeholder",
    get: function get() {
      return this._placeholder;
    },
    set: function set(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    /** Whether the component is required. */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceBooleanProperty"])(value);
      this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */

  }, {
    key: "multiple",
    get: function get() {
      return this._multiple;
    },
    set: function set(value) {
      if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectDynamicMultipleError();
      }

      this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceBooleanProperty"])(value);
    }
    /** Whether to center the active option over the trigger. */

  }, {
    key: "disableOptionCentering",
    get: function get() {
      return this._disableOptionCentering;
    },
    set: function set(value) {
      this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceBooleanProperty"])(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */

  }, {
    key: "compareWith",
    get: function get() {
      return this._compareWith;
    },
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonFunctionValueError();
      }

      this._compareWith = fn;

      if (this._selectionModel) {
        // A different comparator means the selection could change.
        this._initializeSelection();
      }
    }
    /** Value of the select control. */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(newValue) {
      if (newValue !== this._value) {
        if (this.options) {
          this._setSelectionByValue(newValue);
        }

        this._value = newValue;
      }
    }
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

  }, {
    key: "typeaheadDebounceInterval",
    get: function get() {
      return this._typeaheadDebounceInterval;
    },
    set: function set(value) {
      this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__["coerceNumberProperty"])(value);
    }
    /** Unique id of the element. */

  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value || this._uid;
      this.stateChanges.next();
    }
  }, {
    key: "panelOpen",
    get: function get() {
      return this._panelOpen;
    }
    /** The currently selected option. */

  }, {
    key: "selected",
    get: function get() {
      return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */

  }, {
    key: "triggerValue",
    get: function get() {
      if (this.empty) {
        return '';
      }

      if (this._multiple) {
        var selectedOptions = this._selectionModel.selected.map(function (option) {
          return option.viewValue;
        });

        if (this._isRtl()) {
          selectedOptions.reverse();
        } // TODO(crisbeto): delimiter should be configurable for proper localization.


        return selectedOptions.join(', ');
      }

      return this._selectionModel.selected[0].viewValue;
    }
  }, {
    key: "empty",
    get: function get() {
      return !this._selectionModel || this._selectionModel.isEmpty();
    }
  }, {
    key: "shouldLabelFloat",
    get: function get() {
      return this._panelOpen || !this.empty;
    }
  }]);

  return MatSelect;
}(_MatSelectMixinBase);

MatSelect.ɵfac = function MatSelect_Factory(t) {
  return new (t || MatSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
};

MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MatSelect,
  selectors: [["mat-select"]],
  contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  viewQuery: function MatSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
    }
  },
  hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
  hostVars: 20,
  hostBindings: function MatSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatSelect_focus_HostBindingHandler() {
        return ctx._onFocus();
      })("blur", function MatSelect_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex",
    ariaLabel: ["aria-label", "ariaLabel"],
    id: "id",
    disableOptionCentering: "disableOptionCentering",
    typeaheadDebounceInterval: "typeaheadDebounceInterval",
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    compareWith: "compareWith",
    value: "value",
    panelClass: "panelClass",
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    errorStateMatcher: "errorStateMatcher",
    sortComparator: "sortComparator"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    _closedStream: "closed",
    selectionChange: "selectionChange",
    valueChange: "valueChange"
  },
  exportAs: ["matSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
    useExisting: MatSelect
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"],
    useExisting: MatSelect
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c3,
  decls: 9,
  vars: 10,
  consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
  template: function MatSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
        return ctx.close();
      })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
        return ctx._onAttached();
      })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
        return ctx.close();
      });
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.empty);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx._valueId);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    }
  },
  directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
  styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
  encapsulation: 2,
  data: {
    animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
  },
  changeDetection: 0
});

MatSelect.ctorParameters = function () {
  return [{
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"]]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_SELECT_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
      args: [MAT_SELECT_CONFIG]
    }]
  }];
};

MatSelect.propDecorators = {
  trigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: ['trigger']
  }],
  panel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: ['panel']
  }],
  overlayDir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
    args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"]]
  }],
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], {
      descendants: true
    }]
  }],
  optionGroups: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], {
      descendants: true
    }]
  }],
  panelClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  customTrigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
    args: [MAT_SELECT_TRIGGER]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  disableOptionCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
    args: ['aria-labelledby']
  }],
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  typeaheadDebounceInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  sortComparator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
  }],
  openedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  _openedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
    args: ['opened']
  }],
  _closedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
    args: ['closed']
  }],
  selectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }],
  valueChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"],
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      template: "<div cdk-overlay-origin\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectionStrategy"].OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into g3, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`. When doing the
        // MDC-based `mat-select`, we can get away with starting it off as `listbox`.
        'aria-haspopup': 'true',
        'class': 'mat-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-describedby]': '_ariaDescribedby || null',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-select-disabled]': 'disabled',
        '[class.mat-select-invalid]': 'errorState',
        '[class.mat-select-required]': 'required',
        '[class.mat-select-empty]': 'empty',
        '[class.mat-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()'
      },
      animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatSelect
      }],
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ViewportRuler"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgZone"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__["LiveAnnouncer"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Inject"],
        args: [MAT_SELECT_CONFIG]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['aria-label']
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
      args: ['opened']
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"],
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Output"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    disableOptionCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    typeaheadDebounceInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: ['trigger']
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: ['panel']
    }],
    overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ViewChild"],
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["CdkConnectedOverlay"]]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_OPTGROUP"], {
        descendants: true
      }]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"],
      args: [MAT_SELECT_TRIGGER]
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"],
      args: ['aria-labelledby']
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatSelectModule = function MatSelectModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MatSelectModule);
};

MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: MatSelectModule
});
MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  factory: function MatSelectModule_Factory(t) {
    return new (t || MatSelectModule)();
  },
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MatSelectModule, {
    declarations: function declarations() {
      return [MatSelect, MatSelectTrigger];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](MatSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
      declarations: [MatSelect, MatSelectTrigger],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "dLVS":
/*!******************************************************!*\
  !*** ./src/app/new-product/new-product.component.ts ***!
  \******************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _raw_loader_new_product_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./new-product.component.html */ "pMWV");
/* harmony import */ var _new_product_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-product.component.css */ "EdFk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_productapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/productapi */ "BrVi");
/* harmony import */ var _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/graphql.products.service */ "1arE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/file-upload.service */ "HF6d");
/* harmony import */ var _models_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/file-upload */ "pUJ3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(graphqlProduct, router, storageService, uploadService) {
        this.graphqlProduct = graphqlProduct;
        this.router = router;
        this.storageService = storageService;
        this.uploadService = uploadService;
        this.myProduct = new _models_productapi__WEBPACK_IMPORTED_MODULE_3__["ProductApi"];
    }
    NewProductComponent.prototype.ngOnInit = function () {
    };
    NewProductComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    NewProductComponent.prototype.upload = function () {
        var _this = this;
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new _models_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUpload"](file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(function (percentage) {
            _this.percentage = Math.round(percentage);
        }, function (error) {
            console.log(error);
        });
    };
    NewProductComponent.prototype.addProduct = function () {
        var _this = this;
        var mytoken = this.storageService.getSession("token");
        alert(JSON.stringify(this.myProduct));
        this.graphqlProduct.createLink(mytoken, this.myProduct.url, this.myProduct.description, this.myProduct.precio)
            .subscribe(function (_a) {
            var data = _a.data;
            console.log('product created :  ', data);
            _this.router.navigate(['/productos']);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    NewProductComponent.ctorParameters = function () { return [
        { type: _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"] }
    ]; };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-product',
            template: _raw_loader_new_product_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_new_product_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';


// import { MatCheckboxModule } from '@angular/material/checkbox';

// import { MatExpansionModule } from '@angular/material/expansion';

// import { MatGridListModule } from '@angular/material/grid-list';


// import { MatLineModule } from '@angular/material/core';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';

// import { MatDividerModule } from '@angular/material/divider';
// import { MatTableModule } from '@angular/material/table';

var MATERIAL_MODULES = [
    // MatAutocompleteModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
    // MatButtonToggleModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    // MatCheckboxModule,
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
    // MatDividerModule,
    // MatExpansionModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    // MatGridListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [MATERIAL_MODULES],
            exports: [MATERIAL_MODULES]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "ihCf":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***********************************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options to pass to the animationstart listener. */



var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */

var AutofillMonitor = /*#__PURE__*/function () {
  function AutofillMonitor(_platform, _ngZone) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutofillMonitor);

    this._platform = _platform;
    this._ngZone = _ngZone;
    this._monitoredElements = new Map();
  }

  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutofillMonitor, [{
    key: "monitor",
    value: function monitor(elementOrRef) {
      var _this = this;

      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
      }

      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrRef);

      var info = this._monitoredElements.get(element);

      if (info) {
        return info.subject;
      }

      var result = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      var cssClass = 'cdk-text-field-autofilled';

      var listener = function listener(event) {
        // Animation events fire on initial element render, we check for the presence of the autofill
        // CSS class to make sure this is a real change in state, not just the initial render before
        // we fire off events.
        if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
          element.classList.add(cssClass);

          _this._ngZone.run(function () {
            return result.next({
              target: event.target,
              isAutofilled: true
            });
          });
        } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
          element.classList.remove(cssClass);

          _this._ngZone.run(function () {
            return result.next({
              target: event.target,
              isAutofilled: false
            });
          });
        }
      };

      this._ngZone.runOutsideAngular(function () {
        element.addEventListener('animationstart', listener, listenerOptions);
        element.classList.add('cdk-text-field-autofill-monitored');
      });

      this._monitoredElements.set(element, {
        subject: result,
        unlisten: function unlisten() {
          element.removeEventListener('animationstart', listener, listenerOptions);
        }
      });

      return result;
    }
  }, {
    key: "stopMonitoring",
    value: function stopMonitoring(elementOrRef) {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrRef);

      var info = this._monitoredElements.get(element);

      if (info) {
        info.unlisten();
        info.subject.complete();
        element.classList.remove('cdk-text-field-autofill-monitored');
        element.classList.remove('cdk-text-field-autofilled');

        this._monitoredElements.delete(element);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this2 = this;

      this._monitoredElements.forEach(function (_info, element) {
        return _this2.stopMonitoring(element);
      });
    }
  }]);

  return AutofillMonitor;
}();

AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
  return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
};

AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function AutofillMonitor_Factory() {
    return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
  },
  token: AutofillMonitor,
  providedIn: "root"
});

AutofillMonitor.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutofillMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }];
  }, null);
})();
/** A directive that can be used to monitor the autofill state of an input. */


var CdkAutofill = /*#__PURE__*/function () {
  function CdkAutofill(_elementRef, _autofillMonitor) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkAutofill);

    this._elementRef = _elementRef;
    this._autofillMonitor = _autofillMonitor;
    /** Emits when the autofill state of the element changes. */

    this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }

  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkAutofill, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
        return _this3.cdkAutofill.emit(event);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._autofillMonitor.stopMonitoring(this._elementRef);
    }
  }]);

  return CdkAutofill;
}();

CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
  return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](AutofillMonitor));
};

CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
});

CdkAutofill.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: AutofillMonitor
  }];
};

CdkAutofill.propDecorators = {
  cdkAutofill: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkAutofill, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[cdkAutofill]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: AutofillMonitor
    }];
  }, {
    cdkAutofill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Directive to automatically resize a textarea to fit its content. */


var CdkTextareaAutosize = /*#__PURE__*/function () {
  function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
  /** @breaking-change 11.0.0 make document required */
  document) {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkTextareaAutosize);

    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    this._enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */

    this._previousMinRows = -1;
    this._document = document;
    this._textareaElement = this._elementRef.nativeElement;
    this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
  }
  /** Minimum amount of rows in the textarea. */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkTextareaAutosize, [{
    key: "_setMinHeight",

    /** Sets the minimum height of the textarea as determined by minRows. */
    value: function _setMinHeight() {
      var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

      if (minHeight) {
        this._textareaElement.style.minHeight = minHeight;
      }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */

  }, {
    key: "_setMaxHeight",
    value: function _setMaxHeight() {
      var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

      if (maxHeight) {
        this._textareaElement.style.maxHeight = maxHeight;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this4 = this;

      if (this._platform.isBrowser) {
        // Remember the height which we started with in case autosizing is disabled
        this._initialHeight = this._textareaElement.style.height;
        this.resizeToFitContent();

        this._ngZone.runOutsideAngular(function () {
          var window = _this4._getWindow();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this4._destroyed)).subscribe(function () {
            return _this4.resizeToFitContent(true);
          });
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */

  }, {
    key: "_cacheTextareaLineHeight",
    value: function _cacheTextareaLineHeight() {
      if (this._cachedLineHeight) {
        return;
      } // Use a clone element because we have to override some styles.


      var textareaClone = this._textareaElement.cloneNode(false);

      textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
      // `visibility: hidden` so that nothing is rendered. Clear any other styles that
      // would affect the height.

      textareaClone.style.position = 'absolute';
      textareaClone.style.visibility = 'hidden';
      textareaClone.style.border = 'none';
      textareaClone.style.padding = '0';
      textareaClone.style.height = '';
      textareaClone.style.minHeight = '';
      textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
      // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
      // As a workaround that removes the extra space for the scrollbar, we can just set overflow
      // to hidden. This ensures that there is no invalid calculation of the line height.
      // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

      textareaClone.style.overflow = 'hidden';

      this._textareaElement.parentNode.appendChild(textareaClone);

      this._cachedLineHeight = textareaClone.clientHeight;

      this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


      this._setMinHeight();

      this._setMaxHeight();
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this._platform.isBrowser) {
        this.resizeToFitContent();
      }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */

  }, {
    key: "resizeToFitContent",
    value: function resizeToFitContent() {
      var _this5 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // If autosizing is disabled, just skip everything else
      if (!this._enabled) {
        return;
      }

      this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
      // in checking the height of the textarea.


      if (!this._cachedLineHeight) {
        return;
      }

      var textarea = this._elementRef.nativeElement;
      var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

      if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
        return;
      }

      var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
      // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
      // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
      // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
      // need to be removed temporarily.

      textarea.classList.add(this._measuringClass);
      textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
      // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

      var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

      textarea.style.height = "".concat(height, "px");
      textarea.classList.remove(this._measuringClass);
      textarea.placeholder = placeholderText;

      this._ngZone.runOutsideAngular(function () {
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(function () {
            return _this5._scrollToCaretPosition(textarea);
          });
        } else {
          setTimeout(function () {
            return _this5._scrollToCaretPosition(textarea);
          });
        }
      });

      this._previousValue = value;
      this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */

  }, {
    key: "reset",
    value: function reset() {
      // Do not try to change the textarea, if the initialHeight has not been determined yet
      // This might potentially remove styles when reset() is called before ngAfterViewInit
      if (this._initialHeight !== undefined) {
        this._textareaElement.style.height = this._initialHeight;
      }
    } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete

  }, {
    key: "_noopInputHandler",
    value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */

  }, {
    key: "_getDocument",
    value: function _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      var doc = this._getDocument();

      return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */

  }, {
    key: "_scrollToCaretPosition",
    value: function _scrollToCaretPosition(textarea) {
      var selectionStart = textarea.selectionStart,
          selectionEnd = textarea.selectionEnd;

      var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
      // element has been removed from the DOM. Assert that the directive hasn't been destroyed
      // between the time we requested the animation frame and when it was executed.
      // Also note that we have to assert that the textarea is focused before we set the
      // selection range. Setting the selection range on a non-focused textarea will cause
      // it to receive focus on IE and Edge.


      if (!this._destroyed.isStopped && document.activeElement === textarea) {
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  }, {
    key: "minRows",
    get: function get() {
      return this._minRows;
    },
    set: function set(value) {
      this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

      this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */

  }, {
    key: "maxRows",
    get: function get() {
      return this._maxRows;
    },
    set: function set(value) {
      this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

      this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */

  }, {
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
      // resizeToFitContent too early (i.e. before ngAfterViewInit)

      if (this._enabled !== value) {
        (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
      }
    }
  }]);

  return CdkTextareaAutosize;
}();

CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
  return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], 8));
};

CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      });
    }
  },
  inputs: {
    minRows: ["cdkAutosizeMinRows", "minRows"],
    maxRows: ["cdkAutosizeMaxRows", "maxRows"],
    enabled: ["cdkTextareaAutosize", "enabled"]
  },
  exportAs: ["cdkTextareaAutosize"]
});

CdkTextareaAutosize.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
    }]
  }];
};

CdkTextareaAutosize.propDecorators = {
  minRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkAutosizeMinRows']
  }],
  maxRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkAutosizeMaxRows']
  }],
  enabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkTextareaAutosize']
  }],
  _noopInputHandler: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['input']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: 'textarea[cdkTextareaAutosize]',
      exportAs: 'cdkTextareaAutosize',
      host: {
        'class': 'cdk-textarea-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
      }]
    }];
  }, {
    minRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkAutosizeMinRows']
    }],
    maxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkAutosizeMaxRows']
    }],
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkTextareaAutosize']
    }],
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['input']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var TextFieldModule = function TextFieldModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextFieldModule);
};

TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TextFieldModule
});
TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function TextFieldModule_Factory(t) {
    return new (t || TextFieldModule)();
  },
  imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TextFieldModule, {
    declarations: function declarations() {
      return [CdkAutofill, CdkTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]];
    },
    exports: function exports() {
      return [CdkAutofill, CdkTextareaAutosize];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TextFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [CdkAutofill, CdkTextareaAutosize],
      imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Login</h4>\n                        <p class=\"card-category\">Iniciar sesion</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                \n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Usuario\" [(ngModel)]=\"myUser.username\" name=\"username\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"password \" type=\"password\" [(ngModel)]=\"myUser.password\" name=\"password\">\n                                      </mat-form-field>\n                                </div>\n                            </div>\n                               \n                               \n                            \n                            <button mat-raised-button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"loginUser()\">Iniciar sesion</button>\n\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n                 </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "jY5f":
/*!*************************************************!*\
  !*** ./src/app/new-user/new-user.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "jxfC":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "kmnG":
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
  \****************************************************************************/
/*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function() { return MAT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function() { return MAT_FORM_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function() { return MAT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function() { return MAT_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function() { return _MAT_HINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






var _c0 = ["underline"];
var _c1 = ["connectionContainer"];
var _c2 = ["inputContainer"];
var _c3 = ["label"];

function MatFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}

function MatFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
  }
}

function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
  }
}

function MatFormField_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r13.updateOutlineGap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
  }
}

function MatFormField_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function MatFormField_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
  }
}

function MatFormField_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
  }
}

function MatFormField_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", ctx_r16._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
  }
}

function MatFormField_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
  }
}

var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
var nextUniqueId = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatError');
/** Single error message to be shown underneath the form field. */

var MatError = function MatError() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatError);

  this.id = "mat-error-".concat(nextUniqueId++);
};

MatError.ɵfac = function MatError_Factory(t) {
  return new (t || MatError)();
};

MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatError,
  selectors: [["mat-error"]],
  hostAttrs: ["role", "alert", 1, "mat-error"],
  hostVars: 1,
  hostBindings: function MatError_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_ERROR,
    useExisting: MatError
  }])]
});
MatError.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatError, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-error',
      host: {
        'class': 'mat-error',
        'role': 'alert',
        '[attr.id]': 'id'
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], function () {
    return [];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the MatFormField.
 * @docs-private
 */


var matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 1,
    transform: 'translateY(0%)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
    opacity: 0,
    transform: 'translateY(-100%)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** An interface which allows a control to work inside of a `MatFormField`. */

var MatFormFieldControl = function MatFormFieldControl() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormFieldControl);
};

MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
  return new (t || MatFormFieldControl)();
};

MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatFormFieldControl
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFormFieldControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */


function getMatFormFieldDuplicatedHintError(align) {
  return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
}
/** @docs-private */


function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */

var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatHint');
/** Hint text to be shown underneath the form field control. */


var MatHint = function MatHint() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatHint);

  /** Whether to align the hint label at the start or end of the line. */
  this.align = 'start';
  /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

  this.id = "mat-hint-".concat(nextUniqueId$1++);
};

MatHint.ɵfac = function MatHint_Factory(t) {
  return new (t || MatHint)();
};

MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatHint,
  selectors: [["mat-hint"]],
  hostAttrs: [1, "mat-hint"],
  hostVars: 4,
  hostBindings: function MatHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("id", ctx.id)("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-right", ctx.align == "end");
    }
  },
  inputs: {
    align: "align",
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _MAT_HINT,
    useExisting: MatHint
  }])]
});
MatHint.propDecorators = {
  align: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatHint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-hint',
      host: {
        'class': 'mat-hint',
        '[class.mat-right]': 'align == "end"',
        '[attr.id]': 'id',
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null'
      },
      providers: [{
        provide: _MAT_HINT,
        useExisting: MatHint
      }]
    }]
  }], function () {
    return [];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The floating label for a `mat-form-field`. */


var MatLabel = function MatLabel() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatLabel);
};

MatLabel.ɵfac = function MatLabel_Factory(t) {
  return new (t || MatLabel)();
};

MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatLabel,
  selectors: [["mat-label"]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-label'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */


var MatPlaceholder = function MatPlaceholder() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatPlaceholder);
};

MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
  return new (t || MatPlaceholder)();
};

MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatPlaceholder,
  selectors: [["mat-placeholder"]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: 'mat-placeholder'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatPrefix');
/** Prefix to be placed in front of the form field. */

var MatPrefix = function MatPrefix() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatPrefix);
};

MatPrefix.ɵfac = function MatPrefix_Factory(t) {
  return new (t || MatPrefix)();
};

MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatPrefix,
  selectors: [["", "matPrefix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_PREFIX,
    useExisting: MatPrefix
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matPrefix]',
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatSuffix');
/** Suffix to be placed at the end of the form field. */

var MatSuffix = function MatSuffix() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatSuffix);
};

MatSuffix.ɵfac = function MatSuffix_Factory(t) {
  return new (t || MatSuffix)();
};

MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
  type: MatSuffix,
  selectors: [["", "matSuffix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_SUFFIX,
    useExisting: MatSuffix
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatSuffix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Directive"],
    args: [{
      selector: '[matSuffix]',
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId$2 = 0;
var floatingLabelScale = 0.75;
var outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */

var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormFieldBase);

  this._elementRef = _elementRef;
};
/**
 * Base class to which we're applying the form field mixins.
 * @docs-private
 */


var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatFormFieldBase, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */


var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */

var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["InjectionToken"]('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */

var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatFormField, _MatFormFieldMixinBas);

  var _super = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatFormField);

  function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
    var _this;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormField);

    _this = _super.call(this, _elementRef);
    _this._elementRef = _elementRef;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._dir = _dir;
    _this._defaults = _defaults;
    _this._platform = _platform;
    _this._ngZone = _ngZone;
    /**
     * Whether the outline gap needs to be calculated
     * immediately on the next change detection run.
     */

    _this._outlineGapCalculationNeededImmediately = false;
    /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

    _this._outlineGapCalculationNeededOnStable = false;
    _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
    /** Override for the logic that disables the label animation in certain cases. */

    _this._showAlwaysAnimate = false;
    /** State of the mat-hint and mat-error animations. */

    _this._subscriptAnimationState = '';
    _this._hintLabel = ''; // Unique id for the hint label.

    _this._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the label element.

    _this._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
    _this._labelOptions = labelOptions ? labelOptions : {};
    _this.floatLabel = _this._getDefaultFloatLabelState();
    _this._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

    _this.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
    _this._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
    return _this;
  }
  /** The form-field appearance style. */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatFormField, [{
    key: "_shouldAlwaysFloat",

    /** Whether the floating label should always float or not. */
    value: function _shouldAlwaysFloat() {
      return this.floatLabel === 'always' && !this._showAlwaysAnimate;
    }
    /** Whether the label can float or not. */

  }, {
    key: "_canLabelFloat",
    value: function _canLabelFloat() {
      return this.floatLabel !== 'never';
    }
    /** Text for the form field hint. */

  }, {
    key: "getLabelId",

    /**
     * Gets the id of the label element. If no label is present, returns `null`.
     */
    value: function getLabelId() {
      return this._hasFloatingLabel() ? this._labelId : null;
    }
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */

  }, {
    key: "getConnectedOverlayOrigin",
    value: function getConnectedOverlayOrigin() {
      return this._connectionContainerRef || this._elementRef;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      this._validateControlChild();

      var control = this._control;

      if (control.controlType) {
        this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
      } // Subscribe to changes in the child control state in order to update the form field UI.


      control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
        _this2._validatePlaceholders();

        _this2._syncDescribedByIds();

        _this2._changeDetectorRef.markForCheck();
      }); // Run change detection if the value changes.

      if (control.ngControl && control.ngControl.valueChanges) {
        control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function () {
          return _this2._changeDetectorRef.markForCheck();
        });
      } // Note that we have to run outside of the `NgZone` explicitly,
      // in order to avoid throwing users into an infinite loop
      // if `zone-patch-rxjs` is included.


      this._ngZone.runOutsideAngular(function () {
        _this2._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(_this2._destroyed)).subscribe(function () {
          if (_this2._outlineGapCalculationNeededOnStable) {
            _this2.updateOutlineGap();
          }
        });
      }); // Run change detection and update the outline if the suffix or prefix changes.


      Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
        _this2._outlineGapCalculationNeededOnStable = true;

        _this2._changeDetectorRef.markForCheck();
      }); // Re-validate when the number of hints changes.

      this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
        _this2._processHints();

        _this2._changeDetectorRef.markForCheck();
      }); // Update the aria-described by when the number of errors changes.


      this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(function () {
        _this2._syncDescribedByIds();

        _this2._changeDetectorRef.markForCheck();
      });

      if (this._dir) {
        this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed)).subscribe(function () {
          if (typeof requestAnimationFrame === 'function') {
            _this2._ngZone.runOutsideAngular(function () {
              requestAnimationFrame(function () {
                return _this2.updateOutlineGap();
              });
            });
          } else {
            _this2.updateOutlineGap();
          }
        });
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this._validateControlChild();

      if (this._outlineGapCalculationNeededImmediately) {
        this.updateOutlineGap();
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      // Avoid animations on load.
      this._subscriptAnimationState = 'enter';

      this._changeDetectorRef.detectChanges();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */

  }, {
    key: "_shouldForward",
    value: function _shouldForward(prop) {
      var ngControl = this._control ? this._control.ngControl : null;
      return ngControl && ngControl[prop];
    }
  }, {
    key: "_hasPlaceholder",
    value: function _hasPlaceholder() {
      return !!(this._control && this._control.placeholder || this._placeholderChild);
    }
  }, {
    key: "_hasLabel",
    value: function _hasLabel() {
      return !!(this._labelChildNonStatic || this._labelChildStatic);
    }
  }, {
    key: "_shouldLabelFloat",
    value: function _shouldLabelFloat() {
      return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
    }
  }, {
    key: "_hideControlPlaceholder",
    value: function _hideControlPlaceholder() {
      // In the legacy appearance the placeholder is promoted to a label if no label is given.
      return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
    }
  }, {
    key: "_hasFloatingLabel",
    value: function _hasFloatingLabel() {
      // In the legacy appearance the placeholder is promoted to a label if no label is given.
      return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    }
    /** Determines whether to display hints or errors. */

  }, {
    key: "_getDisplayedMessages",
    value: function _getDisplayedMessages() {
      return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
    }
    /** Animates the placeholder up and locks it in position. */

  }, {
    key: "_animateAndLockLabel",
    value: function _animateAndLockLabel() {
      var _this3 = this;

      if (this._hasFloatingLabel() && this._canLabelFloat()) {
        // If animations are disabled, we shouldn't go in here,
        // because the `transitionend` will never fire.
        if (this._animationsEnabled && this._label) {
          this._showAlwaysAnimate = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(function () {
            _this3._showAlwaysAnimate = false;
          });
        }

        this.floatLabel = 'always';

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     */

  }, {
    key: "_validatePlaceholders",
    value: function _validatePlaceholders() {
      if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatFormFieldPlaceholderConflictError();
      }
    }
    /** Does any extra processing that is required when handling the hints. */

  }, {
    key: "_processHints",
    value: function _processHints() {
      this._validateHints();

      this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */

  }, {
    key: "_validateHints",
    value: function _validateHints() {
      var _this4 = this;

      if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        var startHint;
        var endHint;

        this._hintChildren.forEach(function (hint) {
          if (hint.align === 'start') {
            if (startHint || _this4.hintLabel) {
              throw getMatFormFieldDuplicatedHintError('start');
            }

            startHint = hint;
          } else if (hint.align === 'end') {
            if (endHint) {
              throw getMatFormFieldDuplicatedHintError('end');
            }

            endHint = hint;
          }
        });
      }
    }
    /** Gets the default float label state. */

  }, {
    key: "_getDefaultFloatLabelState",
    value: function _getDefaultFloatLabelState() {
      return this._defaults && this._defaults.floatLabel || this._labelOptions.float || 'auto';
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     */

  }, {
    key: "_syncDescribedByIds",
    value: function _syncDescribedByIds() {
      if (this._control) {
        var ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

        if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
          ids.push.apply(ids, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._control.userAriaDescribedBy.split(' ')));
        }

        if (this._getDisplayedMessages() === 'hint') {
          var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
            return hint.align === 'start';
          }) : null;
          var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
            return hint.align === 'end';
          }) : null;

          if (startHint) {
            ids.push(startHint.id);
          } else if (this._hintLabel) {
            ids.push(this._hintLabelId);
          }

          if (endHint) {
            ids.push(endHint.id);
          }
        } else if (this._errorChildren) {
          ids.push.apply(ids, Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._errorChildren.map(function (error) {
            return error.id;
          })));
        }

        this._control.setDescribedByIds(ids);
      }
    }
    /** Throws an error if the form field's control is missing. */

  }, {
    key: "_validateControlChild",
    value: function _validateControlChild() {
      if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatFormFieldMissingControlError();
      }
    }
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */

  }, {
    key: "updateOutlineGap",
    value: function updateOutlineGap() {
      var labelEl = this._label ? this._label.nativeElement : null;

      if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
        return;
      }

      if (!this._platform.isBrowser) {
        // getBoundingClientRect isn't available on the server.
        return;
      } // If the element is not present in the DOM, the outline gap will need to be calculated
      // the next time it is checked and in the DOM.


      if (!this._isAttachedToDOM()) {
        this._outlineGapCalculationNeededImmediately = true;
        return;
      }

      var startWidth = 0;
      var gapWidth = 0;
      var container = this._connectionContainerRef.nativeElement;
      var startEls = container.querySelectorAll('.mat-form-field-outline-start');
      var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

      if (this._label && this._label.nativeElement.children.length) {
        var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
        // invisible and we can't calculate the outline gap. Mark the element as needing
        // to be checked the next time the zone stabilizes. We can't do this immediately
        // on the next change detection, because even if the element becomes visible,
        // the `ClientRect` won't be reclaculated immediately. We reset the
        // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

        if (containerRect.width === 0 && containerRect.height === 0) {
          this._outlineGapCalculationNeededOnStable = true;
          this._outlineGapCalculationNeededImmediately = false;
          return;
        }

        var containerStart = this._getStartEnd(containerRect);

        var labelChildren = labelEl.children;

        var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

        var labelWidth = 0;

        for (var i = 0; i < labelChildren.length; i++) {
          labelWidth += labelChildren[i].offsetWidth;
        }

        startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
        gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
      }

      for (var _i = 0; _i < startEls.length; _i++) {
        startEls[_i].style.width = "".concat(startWidth, "px");
      }

      for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
        gapEls[_i2].style.width = "".concat(gapWidth, "px");
      }

      this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
    }
    /** Gets the start end of the rect considering the current directionality. */

  }, {
    key: "_getStartEnd",
    value: function _getStartEnd(rect) {
      return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
    }
    /** Checks whether the form field is attached to the DOM. */

  }, {
    key: "_isAttachedToDOM",
    value: function _isAttachedToDOM() {
      var element = this._elementRef.nativeElement;

      if (element.getRootNode) {
        var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
        // or the closest shadow root, otherwise it'll be the element itself.

        return rootNode && rootNode !== element;
      } // Otherwise fall back to checking if it's in the document. This doesn't account for
      // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


      return document.documentElement.contains(element);
    }
  }, {
    key: "appearance",
    get: function get() {
      return this._appearance;
    },
    set: function set(value) {
      var oldValue = this._appearance;
      this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

      if (this._appearance === 'outline' && oldValue !== value) {
        this._outlineGapCalculationNeededOnStable = true;
      }
    }
    /** Whether the required marker should be hidden. */

  }, {
    key: "hideRequiredMarker",
    get: function get() {
      return this._hideRequiredMarker;
    },
    set: function set(value) {
      this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "hintLabel",
    get: function get() {
      return this._hintLabel;
    },
    set: function set(value) {
      this._hintLabel = value;

      this._processHints();
    }
    /**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     */

  }, {
    key: "floatLabel",
    get: function get() {
      return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
    },
    set: function set(value) {
      if (value !== this._floatLabel) {
        this._floatLabel = value || this._getDefaultFloatLabelState();

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "_control",
    get: function get() {
      // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
      //  We should clean this up once Ivy is the default renderer.
      return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
    },
    set: function set(value) {
      this._explicitFormFieldControl = value;
    }
  }]);

  return MatFormField;
}(_MatFormFieldMixinBase);

MatFormField.ɵfac = function MatFormField_Factory(t) {
  return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"], 8));
};

MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MatFormField,
  selectors: [["mat-form-field"]],
  contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatLabel, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    }
  },
  viewQuery: function MatFormField_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstaticViewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mat-form-field"],
  hostVars: 44,
  hostBindings: function MatFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    }
  },
  inputs: {
    color: "color",
    floatLabel: "floatLabel",
    appearance: "appearance",
    hideRequiredMarker: "hideRequiredMarker",
    hintLabel: "hintLabel"
  },
  exportAs: ["matFormField"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: MAT_FORM_FIELD,
    useExisting: MatFormField
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c5,
  decls: 15,
  vars: 8,
  consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
  template: function MatFormField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
        return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "hint");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["CdkObserveContent"]],
  styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
  encapsulation: 2,
  data: {
    animation: [matFormFieldAnimations.transitionMessages]
  },
  changeDetection: 0
});

MatFormField.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatFormField.propDecorators = {
  appearance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hideRequiredMarker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  hintLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  floatLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
  }],
  underlineRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['underline']
  }],
  _connectionContainerRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['connectionContainer', {
      static: true
    }]
  }],
  _inputContainerRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['inputContainer']
  }],
  _label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
    args: ['label']
  }],
  _controlNonStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatFormFieldControl]
  }],
  _controlStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatFormFieldControl, {
      static: true
    }]
  }],
  _labelChildNonStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatLabel]
  }],
  _labelChildStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatLabel, {
      static: true
    }]
  }],
  _placeholderChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
    args: [MatPlaceholder]
  }],
  _errorChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MAT_ERROR, {
      descendants: true
    }]
  }],
  _hintChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [_MAT_HINT, {
      descendants: true
    }]
  }],
  _prefixChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MAT_PREFIX, {
      descendants: true
    }]
  }],
  _suffixChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
    args: [MAT_SUFFIX, {
      descendants: true
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"],
    args: [{
      selector: 'mat-form-field',
      exportAs: 'matFormField',
      template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        'class': 'mat-form-field',
        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
        '[class.mat-form-field-invalid]': '_control.errorState',
        '[class.mat-form-field-can-float]': '_canLabelFloat()',
        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
        '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
        '[class.mat-form-field-disabled]': '_control.disabled',
        '[class.mat-form-field-autofilled]': '_control.autofilled',
        '[class.mat-focused]': '_control.focused',
        '[class.mat-accent]': 'color == "accent"',
        '[class.mat-warn]': 'color == "warn"',
        '[class.ng-untouched]': '_shouldForward("untouched")',
        '[class.ng-touched]': '_shouldForward("touched")',
        '[class.ng-pristine]': '_shouldForward("pristine")',
        '[class.ng-dirty]': '_shouldForward("dirty")',
        '[class.ng-valid]': '_shouldForward("valid")',
        '[class.ng-invalid]': '_shouldForward("invalid")',
        '[class.ng-pending]': '_shouldForward("pending")',
        '[class._mat-animation-noopable]': '!_animationsEnabled'
      },
      inputs: ['color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }],
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_LABEL_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    floatLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    hideRequiredMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    hintLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"]
    }],
    underlineRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['underline']
    }],
    _connectionContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['connectionContainer', {
        static: true
      }]
    }],
    _inputContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['inputContainer']
    }],
    _label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"],
      args: ['label']
    }],
    _controlNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatFormFieldControl]
    }],
    _controlStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatFormFieldControl, {
        static: true
      }]
    }],
    _labelChildNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatLabel, {
        static: true
      }]
    }],
    _placeholderChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChild"],
      args: [MatPlaceholder]
    }],
    _errorChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [_MAT_HINT, {
        descendants: true
      }]
    }],
    _prefixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ContentChildren"],
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatFormFieldModule = function MatFormFieldModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MatFormFieldModule);
};

MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: MatFormFieldModule
});
MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  factory: function MatFormFieldModule_Factory(t) {
    return new (t || MatFormFieldModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
    declarations: function declarations() {
      return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"]];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
    args: [{
      declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"]],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "oT/u":
/*!************************************************!*\
  !*** ./src/app/new-user/new-user.component.ts ***!
  \************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _raw_loader_new_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./new-user.component.html */ "pvxy");
/* harmony import */ var _new_user_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-user.component.css */ "jY5f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_usersapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usersapi */ "D/Am");
/* harmony import */ var _services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/graphql.users.service */ "vb23");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/login.service */ "6Cq0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(graphqlService, storageService, loginService) {
        this.graphqlService = graphqlService;
        this.storageService = storageService;
        this.loginService = loginService;
        this.myUser = new _models_usersapi__WEBPACK_IMPORTED_MODULE_3__["UserApi"];
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent.prototype.addUser = function () {
        var _this = this;
        alert(JSON.stringify(this.myUser));
        this.graphqlService.createUser(this.myUser.username, this.myUser.email, this.myUser.password)
            .subscribe(function (_a) {
            var data = _a.data;
            console.log('got data', data);
            alert(JSON.stringify(_this.myUser));
            _this.graphqlService.tokenAuth(_this.myUser.username, _this.myUser.password)
                .subscribe(function (_a) {
                var data = _a.data;
                console.log('logged: ', JSON.stringify(data));
                _this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
                var mydata = {
                    user: _this.myUser.username,
                    token: JSON.parse(JSON.stringify(data)).tokenAuth.token
                };
                alert(JSON.stringify(mydata));
                _this.loginService.showData(mydata);
            }, function (error) {
                console.log('there was an error sending the query', error);
            });
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
        /*
        this.graphqlService.tokenAuth('adsoft','123456')
        .subscribe(({ data }) => {
           console.log('got data', data);
        }, (error) => {
           console.log('there was an error sending the query', error);
        });
      */
    };
    NewUserComponent.ctorParameters = function () { return [
        { type: _services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlUsersService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }
    ]; };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-user',
            template: _raw_loader_new_user_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_new_user_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlUsersService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "pMWV":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-product/new-product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Product Nuevo</h4>\n                        <p class=\"card-category\">Completa informacion del producto</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                <label>\n                                    <input\n                                      type=\"file\"\n                                      class=\"text-nowrap text-truncate\"\n                                      (change)=\"selectFile($event)\"\n                                    />\n                                  </label>\n                                  \n                                  <button\n                                    class=\"btn btn-success btn-sm\"\n                                    [disabled]=\"!selectedFiles\"\n                                    (click)=\"upload()\"\n                                  >\n                                    Upload\n                                  </button>\n                                  <div *ngIf=\"currentFileUpload\" class=\"progress mt-2\">\n                                    <div\n                                      class=\"progress-bar progress-bar-info\"\n                                      role=\"progressbar\"\n                                      attr.aria-valuenow=\"{{ percentage }}\"\n                                      aria-valuemin=\"0\"\n                                      aria-valuemax=\"100\"\n                                      [ngStyle]=\"{ width: percentage + '%' }\"\n                                    >\n                                      {{ percentage }}%\n                                    </div>\n                                  </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"url imagen\" [(ngModel)]=\"myProduct.url\" name=\"url\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Descripcion\" [(ngModel)]=\"myProduct.description\" name=\"description\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Precio\"  type=\"number\" [(ngModel)]=\"myProduct.precio\" name=\"precio\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            \n                            <button mat-raised-button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"addProduct()\">Agregar producto</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n          \n        </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "pUJ3":
/*!***********************************!*\
  !*** ./src/models/file-upload.ts ***!
  \***********************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());



/***/ }),

/***/ "pvxy":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-user/new-user.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Usuario Nuevo</h4>\n                        <p class=\"card-category\">Completa tu perfil</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                \n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Usuario\" [(ngModel)]=\"myUser.username\" name=\"username\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                \n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Email\" type=\"email\" [(ngModel)]=\"myUser.email\" name=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                            \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"password \" type=\"password\" [(ngModel)]=\"myUser.password\" name=\"password\">\n                                      </mat-form-field>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"retype password \" type=\"password\" [(ngModel)]=\"myUser.password\" name=\"password\">\n                                      </mat-form-field>\n                                </div>\n                                  \n                            </div>\n                            \n                            <button mat-raised-button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"addUser()\">Crear usuario</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n          \n        </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "qFsG":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***********************************************************************/
/*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "LK+K");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */








var MatTextareaAutosize = /*#__PURE__*/function (_CdkTextareaAutosize) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatTextareaAutosize, _CdkTextareaAutosize);

  var _super = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTextareaAutosize);

  function MatTextareaAutosize() {
    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTextareaAutosize);

    return _super.apply(this, arguments);
  }

  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTextareaAutosize, [{
    key: "matAutosizeMinRows",
    get: function get() {
      return this.minRows;
    },
    set: function set(value) {
      this.minRows = value;
    }
  }, {
    key: "matAutosizeMaxRows",
    get: function get() {
      return this.maxRows;
    },
    set: function set(value) {
      this.maxRows = value;
    }
  }, {
    key: "matAutosize",
    get: function get() {
      return this.enabled;
    },
    set: function set(value) {
      this.enabled = value;
    }
  }, {
    key: "matTextareaAutosize",
    get: function get() {
      return this.enabled;
    },
    set: function set(value) {
      this.enabled = value;
    }
  }]);

  return MatTextareaAutosize;
}(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"]);

MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
  return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
};

MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: MatTextareaAutosize,
  selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
  inputs: {
    cdkAutosizeMinRows: "cdkAutosizeMinRows",
    cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
    matAutosizeMinRows: "matAutosizeMinRows",
    matAutosizeMaxRows: "matAutosizeMaxRows",
    matAutosize: ["mat-autosize", "matAutosize"],
    matTextareaAutosize: "matTextareaAutosize"
  },
  exportAs: ["matTextareaAutosize"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]]
});
MatTextareaAutosize.propDecorators = {
  matAutosizeMinRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  matAutosizeMaxRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  matAutosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['mat-autosize']
  }],
  matTextareaAutosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};
var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
    args: [{
      selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
      exportAs: 'matTextareaAutosize',
      inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
      host: {
        'class': 'cdk-textarea-autosize mat-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1'
      }
    }]
  }], null, {
    matAutosizeMinRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    matAutosizeMaxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    matAutosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
      args: ['mat-autosize']
    }],
    matTextareaAutosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatInputUnsupportedTypeError(type) {
  return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */


var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

/** @docs-private */

var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
/** @docs-private */
ngControl) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInputBase);

  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
};

var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinErrorState"])(MatInputBase);
/** Directive that allows a native input to work inside a `MatFormField`. */


var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatInput, _MatInputMixinBase2);

  var _super2 = Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatInput);

  function MatInput(_elementRef, _platform,
  /** @docs-private */
  ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
  // to inject the form-field for determining whether the placeholder has been promoted.
  _formField) {
    var _this;

    Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInput);

    _this = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    _this._elementRef = _elementRef;
    _this._platform = _platform;
    _this.ngControl = ngControl;
    _this._autofillMonitor = _autofillMonitor;
    _this._formField = _formField;
    _this._uid = "mat-input-".concat(nextUniqueId++);
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.controlType = 'mat-input';
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.autofilled = false;
    _this._disabled = false;
    _this._required = false;
    _this._type = 'text';
    _this._readonly = false;
    _this._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
      return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["getSupportedInputTypes"])().has(t);
    });
    var element = _this._elementRef.nativeElement;
    var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
    // accessor.

    _this._inputValueAccessor = inputValueAccessor || element;
    _this._previousNativeValue = _this.value; // Force setter to be called in case id was not specified.

    _this.id = _this.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
    // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
    // exists on iOS, we only bother to install the listener on iOS.

    if (_platform.IOS) {
      ngZone.runOutsideAngular(function () {
        _elementRef.nativeElement.addEventListener('keyup', function (event) {
          var el = event.target;

          if (!el.value && !el.selectionStart && !el.selectionEnd) {
            // Note: Just setting `0, 0` doesn't fix the issue. Setting
            // `1, 1` fixes it for the first time that you type text and
            // then hold delete. Toggling to `1, 1` and then back to
            // `0, 0` seems to completely fix it.
            el.setSelectionRange(1, 1);
            el.setSelectionRange(0, 0);
          }
        });
      });
    }

    _this._isServer = !_this._platform.isBrowser;
    _this._isNativeSelect = nodeName === 'select';
    _this._isTextarea = nodeName === 'textarea';

    if (_this._isNativeSelect) {
      _this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
    }

    return _this;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatInput, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this._platform.isBrowser) {
        this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
          _this2.autofilled = event.isAutofilled;

          _this2.stateChanges.next();
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this.stateChanges.next();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stateChanges.complete();

      if (this._platform.isBrowser) {
        this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      } // We need to dirty-check the native element's value, because there are some cases where
      // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
      // updating the value using `emitEvent: false`).


      this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
      // present or not depends on a query which is prone to "changed after checked" errors.


      this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._elementRef.nativeElement.focus(options);
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete

  }, {
    key: "_focusChanged",
    value: function _focusChanged(isFocused) {
      if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
        this.focused = isFocused;
        this.stateChanges.next();
      }
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete

  }, {
    key: "_onInput",
    value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
      // Angular will run a new change detection each time the `input` event has been dispatched.
      // It's necessary that Angular recognizes the value change, because when floatingLabel
      // is set to false and Angular forms aren't used, the placeholder won't recognize the
      // value changes and will not disappear.
      // Listening to the input event wouldn't be necessary when the input is using the
      // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */

  }, {
    key: "_dirtyCheckPlaceholder",
    value: function _dirtyCheckPlaceholder() {
      var _a, _b; // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
      // screen readers will read it out twice: once from the label and once from the attribute.
      // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
      // the only one that supports promoting the placeholder to a label.


      var placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;

      if (placeholder !== this._previousPlaceholder) {
        var element = this._elementRef.nativeElement;
        this._previousPlaceholder = placeholder;
        placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
      }
    }
    /** Does some manual dirty checking on the native input `value` property. */

  }, {
    key: "_dirtyCheckNativeValue",
    value: function _dirtyCheckNativeValue() {
      var newValue = this._elementRef.nativeElement.value;

      if (this._previousNativeValue !== newValue) {
        this._previousNativeValue = newValue;
        this.stateChanges.next();
      }
    }
    /** Make sure the input is a supported type. */

  }, {
    key: "_validateType",
    value: function _validateType() {
      if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatInputUnsupportedTypeError(this._type);
      }
    }
    /** Checks whether the input type is one of the types that are never empty. */

  }, {
    key: "_isNeverEmpty",
    value: function _isNeverEmpty() {
      return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */

  }, {
    key: "_isBadInput",
    value: function _isBadInput() {
      // The `validity` property won't be present on platform-server.
      var validity = this._elementRef.nativeElement.validity;
      return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",

    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    value: function setDescribedByIds(ids) {
      if (ids.length) {
        this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
      } else {
        this._elementRef.nativeElement.removeAttribute('aria-describedby');
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      // Do not re-focus the input element if the element is already focused. Otherwise it can happen
      // that someone clicks on a time input and the cursor resets to the "hours" field while the
      // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
      if (!this.focused) {
        this.focus();
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      if (this.ngControl && this.ngControl.disabled !== null) {
        return this.ngControl.disabled;
      }

      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
      // Reset from here to ensure that the element doesn't become stuck.

      if (this.focused) {
        this.focused = false;
        this.stateChanges.next();
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value || this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
    /** Input type of the element. */

  }, {
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value || 'text';

      this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
      // input element. To ensure that bindings for `type` work, we need to sync the setter
      // with the native property. Textarea elements don't support the type property or attribute.


      if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["getSupportedInputTypes"])().has(this._type)) {
        this._elementRef.nativeElement.type = this._type;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "value",
    get: function get() {
      return this._inputValueAccessor.value;
    },
    set: function set(value) {
      if (value !== this.value) {
        this._inputValueAccessor.value = value;
        this.stateChanges.next();
      }
    }
    /** Whether the element is readonly. */

  }, {
    key: "readonly",
    get: function get() {
      return this._readonly;
    },
    set: function set(value) {
      this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "empty",
    get: function get() {
      return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "shouldLabelFloat",
    get: function get() {
      if (this._isNativeSelect) {
        // For a single-selection `<select>`, the label should float when the selected option has
        // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
        // overlapping the label with the options.
        var selectElement = this._elementRef.nativeElement;
        var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
        // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

        return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
      } else {
        return this.focused || !this.empty;
      }
    }
  }]);

  return MatInput;
}(_MatInputMixinBase);

MatInput.ɵfac = function MatInput_Factory(t) {
  return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"], 8));
};

MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
  hostVars: 9,
  hostBindings: function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      })("blur", function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      })("input", function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
    }
  },
  inputs: {
    id: "id",
    disabled: "disabled",
    required: "required",
    type: "type",
    value: "value",
    readonly: "readonly",
    placeholder: "placeholder",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"]
  },
  exportAs: ["matInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
    useExisting: MatInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
});

MatInput.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_INPUT_VALUE_ACCESSOR]
    }]
  }, {
    type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["AutofillMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"]]
    }]
  }];
};

MatInput.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  userAriaDescribedBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['aria-describedby']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  _focusChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['focus', ['true']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['blur', ['false']]
  }],
  _onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['input']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
    args: [{
      selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
      exportAs: 'matInput',
      host: {
        /**
         * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
         */
        'class': 'mat-input-element mat-form-field-autofill-control',
        '[class.mat-input-server]': '_isServer',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[attr.id]': 'id',
        // At the time of writing, we have a lot of customer tests that look up the input based on its
        // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
        // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
        '[attr.data-placeholder]': 'placeholder',
        '[disabled]': 'disabled',
        '[required]': 'required',
        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-required]': 'required.toString()'
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
        useExisting: MatInput
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [MAT_INPUT_VALUE_ACCESSOR]
      }]
    }, {
      type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["AutofillMonitor"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MAT_FORM_FIELD"]]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['focus', ['true']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['blur', ['false']]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['input']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
      args: ['aria-describedby']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatInputModule = function MatInputModule() {
  Object(_home_adsoft_cmf_iot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInputModule);
};

MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MatInputModule
});
MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  factory: function MatInputModule_Factory(t) {
    return new (t || MatInputModule)();
  },
  providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]],
  imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
  // be used together with `MatFormField`.
  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatInputModule, {
    declarations: function declarations() {
      return [MatInput, MatTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      declarations: [MatInput, MatTextareaAutosize],
      imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]],
      exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "smLI":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./table-list.component.html */ "Qd8X");
/* harmony import */ var _table_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-list.component.css */ "jxfC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.ctorParameters = function () { return []; };
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-table-list',
            template: _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_table_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "sqUA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by our friends from\n                  <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block\">\n                          <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "un8i":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "O5tJ");
/* harmony import */ var _typography_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.css */ "Wwls");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "urC5":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "3Puv");
/* harmony import */ var _maps_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component.css */ "YpYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent.ctorParameters = function () { return []; };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-maps',
            template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_maps_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "vrid":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <a class=\"nav-link\" [routerLink]=\"['/new-product']\">\n            <i class=\"material-icons\">login</i>\n            <p>\n                <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n        </a>\n        <div class=\"row\">\n       \n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Productos</h4>\n                        <p class=\"card-category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Clave</th>\n                                <th>Url</th>\n                                <th>Descripcion</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let product of posts\" >\n                                    <td>{{ product.id }}</td>\n                                    <td>{{ product.url }}</td>\n                                    <td>{{ product.description }}</td>\n                                </tr>\n                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_usersapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/usersapi */ "D/Am");
/* harmony import */ var _services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/graphql.users.service */ "vb23");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/login.service */ "6Cq0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(graphqlService, storageService, loginService, router) {
        this.graphqlService = graphqlService;
        this.storageService = storageService;
        this.loginService = loginService;
        this.router = router;
        this.myUser = new _models_usersapi__WEBPACK_IMPORTED_MODULE_3__["UserApi"];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        alert(JSON.stringify(this.myUser));
        this.graphqlService.tokenAuth(this.myUser.username, this.myUser.password)
            .subscribe(function (_a) {
            var data = _a.data;
            console.log('logged: ', JSON.stringify(data));
            _this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
            //this.storageService.setLocal("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
            var mydata = {
                user: _this.myUser.username,
                token: JSON.parse(JSON.stringify(data)).tokenAuth.token
            };
            _this.loginService.showData(mydata);
            _this.router.navigate(['/']);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlUsersService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlUsersService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./products.component.html */ "vrid");
/* harmony import */ var _products_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.component.css */ "/QLm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/graphql.products.service */ "1arE");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(graphqlProductsService) {
        this.graphqlProductsService = graphqlProductsService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySubscription = this.graphqlProductsService.links("-")
            .valueChanges
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).links;
            console.log(JSON.stringify(_this.posts));
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlProductsService"] }
    ]; };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-products',
            template: _raw_loader_products_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_products_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlProductsService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~layouts-admin-layout-admin-layout-module~layouts-home-layout-home-layout-module.js.map