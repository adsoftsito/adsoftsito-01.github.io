(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ncC":
/*!***********************************************!*\
  !*** ./src/services/graphql.sales.service.ts ***!
  \***********************************************/
/*! exports provided: GraphqlSalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlSalesService", function() { return GraphqlSalesService; });
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
var EMISORME = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query Emisorme {\n    emisorme {\n      rfc\n      nombre\n      regimenfiscal\n    }\n  }\n"], ["\n  query Emisorme {\n    emisorme {\n      rfc\n      nombre\n      regimenfiscal\n    }\n  }\n"])));
var SALE = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nquery Sale($saleid: Int!) {\n  sale(saleid: $saleid) {\n      id\n      serie\n      folio\n      formapago\n      condicionesdepago\n      subtotal\n      descuento\n      moneda\n      tipodecomprobante\n      metodopago\n      lugarexpedicion\n      totalimpuestostrasladados\n      totalimpuestosretenidos\n      total\n      receptor {\n        rfc\n        nombre\n        usocfdi\n        \n      }\n     \n      details {\n      id\n      product {\n        noidentificacion\n        description\n        trasladoiva\n        trasladoieps\n        retencioniva\n        retencionisr\n        retencionieps\n\n        codigosat {\n          claveprodserv\n        }\n        claveunidad {\n          claveunidad\n          nombre\n        }\n      }\n      cantidad\n      precio\n      importe\n      descuento\n      trasladoiva\n      retencioniva\n      retencionieps\n    }    \n  }\n}\n"], ["\nquery Sale($saleid: Int!) {\n  sale(saleid: $saleid) {\n      id\n      serie\n      folio\n      formapago\n      condicionesdepago\n      subtotal\n      descuento\n      moneda\n      tipodecomprobante\n      metodopago\n      lugarexpedicion\n      totalimpuestostrasladados\n      totalimpuestosretenidos\n      total\n      receptor {\n        rfc\n        nombre\n        usocfdi\n        \n      }\n     \n      details {\n      id\n      product {\n        noidentificacion\n        description\n        trasladoiva\n        trasladoieps\n        retencioniva\n        retencionisr\n        retencionieps\n\n        codigosat {\n          claveprodserv\n        }\n        claveunidad {\n          claveunidad\n          nombre\n        }\n      }\n      cantidad\n      precio\n      importe\n      descuento\n      trasladoiva\n      retencioniva\n      retencionieps\n    }    \n  }\n}\n"])));
var SALES = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query Sales($search: String!) {\n    sales(search: $search) {\n      id\n      serie\n      folio\n      total\n      statuscfdi\n      xml\n      pdf\n      receptor {\n        rfc\n        nombre\n      }\n    }\n  }\n"], ["\n  query Sales($search: String!) {\n    sales(search: $search) {\n      id\n      serie\n      folio\n      total\n      statuscfdi\n      xml\n      pdf\n      receptor {\n        rfc\n        nombre\n      }\n    }\n  }\n"])));
var UPDATESALE = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nmutation UpdateSale($saleid: Int!, $statuscfdi: String!, $xml: String!, $pdf : String!) \n{\n  updateSale (saleid: $saleid, statuscfdi: $statuscfdi, xml: $xml, pdf: $pdf) \n  {\n    id  \n    statuscfdi\n    xml\n    pdf\n  }\n}\n"], ["\nmutation UpdateSale($saleid: Int!, $statuscfdi: String!, $xml: String!, $pdf : String!) \n{\n  updateSale (saleid: $saleid, statuscfdi: $statuscfdi, xml: $xml, pdf: $pdf) \n  {\n    id  \n    statuscfdi\n    xml\n    pdf\n  }\n}\n"])));
var CREATESALE = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  mutation CreateSale($subtotal: Float!, $iva: Float!, $total: Float!, $products : [DetailInput]!) {\n    createSale(\n                serie: \"A\",\n                folio: \"2\",\n                condicionesdepago: \"CONTADO\",\n                formapago: \"03\",\n                lugarexpedicion: \"94740\",\n                tipodecomprobante: \"I\",\n                metodopago: \"PUE\",\n                moneda: \"MXN\",\n                descuento: 0,\n                \n                totalimpuestosretenidos: 16,\n                totalimpuestostrasladados: $iva,\n    \n                subtotal: $subtotal, \n                total: $total, \n                receptorId: 1,\n                products : $products\n              ){\n      id\n      total\n      postedBy {\n        id\n        username\n        email\n\n      }\n   }\n  }\n  "], ["\n  mutation CreateSale($subtotal: Float!, $iva: Float!, $total: Float!, $products : [DetailInput]!) {\n    createSale(\n                serie: \"A\",\n                folio: \"2\",\n                condicionesdepago: \"CONTADO\",\n                formapago: \"03\",\n                lugarexpedicion: \"94740\",\n                tipodecomprobante: \"I\",\n                metodopago: \"PUE\",\n                moneda: \"MXN\",\n                descuento: 0,\n                \n                totalimpuestosretenidos: 16,\n                totalimpuestostrasladados: $iva,\n    \n                subtotal: $subtotal, \n                total: $total, \n                receptorId: 1,\n                products : $products\n              ){\n      id\n      total\n      postedBy {\n        id\n        username\n        email\n\n      }\n   }\n  }\n  "])));
var GraphqlSalesService = /** @class */ (function () {
    function GraphqlSalesService(apollo) {
        this.apollo = apollo;
    }
    GraphqlSalesService.prototype.emisorme = function (mytoken) {
        return this.apollo.query({
            query: EMISORME,
            context: {
                // example of setting the headers with context per operation
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'JWT ' + mytoken),
            },
        });
    };
    GraphqlSalesService.prototype.sale = function (mytoken, saleid) {
        return this.apollo.query({
            query: SALE,
            variables: {
                saleid: saleid,
            },
            context: {
                // example of setting the headers with context per operation
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'JWT ' + mytoken),
            },
        });
    };
    GraphqlSalesService.prototype.sales = function (mytoken, search) {
        return this.apollo.query({
            query: SALES,
            variables: {
                search: search,
            },
            context: {
                // example of setting the headers with context per operation
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'JWT ' + mytoken),
            },
        });
    };
    GraphqlSalesService.prototype.updateSale = function (mytoken, saleid, statuscfdi, xml, pdf) {
        console.log("token auth = " + mytoken);
        alert(mytoken);
        return this.apollo.mutate({
            mutation: UPDATESALE,
            variables: {
                saleid: saleid,
                statuscfdi: statuscfdi,
                xml: xml,
                pdf: pdf
            },
            context: {
                // example of setting the headers with context per operation
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'JWT ' + mytoken),
            },
        });
    };
    GraphqlSalesService.prototype.createSale = function (mytoken, subtotal, iva, total, products) {
        console.log("token auth = " + mytoken);
        alert(mytoken);
        return this.apollo.mutate({
            mutation: CREATESALE,
            variables: {
                subtotal: subtotal,
                iva: iva,
                total: total,
                products: products
            },
            context: {
                // example of setting the headers with context per operation
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'JWT ' + mytoken),
            },
        });
    };
    GraphqlSalesService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }
    ]; };
    GraphqlSalesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])
    ], GraphqlSalesService);
    return GraphqlSalesService;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "RU0v");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.css */ "9WCt");
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



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/m/Desktop/waves/cmf-iot/src/main.ts */"zUnb");


/***/ }),

/***/ "0vfD":
/*!**************************************!*\
  !*** ./src/services/cfdi.service.ts ***!
  \**************************************/
/*! exports provided: CfdiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CfdiService", function() { return CfdiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CfdiService = /** @class */ (function () {
    function CfdiService(http) {
        this.http = http;
        this.apiURL = 'http://198.251.74.249:5000';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,OPTIONS'
            })
        };
    }
    // HttpClient GET post() method 
    /*
    getVersion(): Observable<any> {
      return this.http.get<any>(this.apiURL + '/home/about?command=v', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
    */
    // HttpClient POST complement method 
    CfdiService.prototype.getCfdi = function (cfdi) {
        //console.log(JSON.stringify(cfdi));
        return this.http.post(this.apiURL + '/', cfdi, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    // Error handling 
    CfdiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        //window.alert(errorMessage);
        //  return throwError(errorMessage);
        return errorMessage;
    };
    CfdiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CfdiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CfdiService);
    return CfdiService;
}());



/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2ZcO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(state | async) as s\">\r\n\t<!-- <pre>\r\n    {{ s | json }}\r\n  </pre> -->\r\n\t<h3>\r\n\t\tVerificar Compra\r\n\t\t<button style=\"float: right;\" mat-icon-button [mat-dialog-close]><mat-icon>cancelar</mat-icon></button>\r\n  </h3>\r\n\r\n\t<div *ngIf=\"s.cart.length > 0; else elseBlock\">\r\n  <p>\r\n    Revise sus artículos y pague\r\n  </p>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>Total: {{ s.tot.subTot | currency:'USD':'symbol':'1.2-2' }}</mat-card-title>\r\n      <mat-card-subtitle>\r\n      tax: {{ s.tot.tax | currency:'USD':'symbol':'1.2-2' }}\r\n      <br />\r\n          at checkout: {{ s.tot.grandTot | currency:'USD':'symbol':'1.2-2' }}\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-actions style=\"text-align: right;\">\r\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"completeOrder()\" >\r\n          completar la verificación de mi pedido \r\n          <!-- <mat-icon>check</mat-icon> -->\r\n        </button>\r\n      </mat-card-actions>\r\n      <br>\r\n      <mat-card-actions style=\"text-align: right;\">\r\n        <button type=\"button\" mat-raised-button style=\"background-color: #BAD1F3; color: #2772E7; font-weight: bold;\" (click)=\"getCfdi()\" >\r\n          Facturar <mat-icon></mat-icon>\r\n        </button>\r\n      </mat-card-actions>\r\n  </mat-card>\r\n  <div *ngFor=\"let item of s.cart\">\r\n    <p>\r\n      {{ item.name }}<br />\r\n      <strong>{{ item.price }}</strong>\r\n    </p>\r\n  </div> \r\n</div>\r\n  <ng-template #elseBlock>\r\n    <h4>Thank you for your fake purchase!</h4>\r\n     <button type=\"button\" mat-button color=\"primary\" [mat-dialog-close]>\r\n         Close <mat-icon>cancel</mat-icon>\r\n        </button>\r\n  </ng-template>\r\n</ng-container>");

/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache,ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
*/
var uri = 'https://adsoftsito-adsoftsito.cloud.okteto.net/graphql/'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"](),
    };
}
/*
export function createApollo(httpLink: HttpLink) {

  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');
    console.log('my token ' +  token);

    if (token === null) {
      return {};
    } else {

      return {
        headers: {
          Accept: 'charset=utf-8',
         'Content-Type': 'application/json',
          Authorization: 'JWT ' + token
        }
      };
    }
  });

  const link = ApolloLink.from([auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}
*/
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "61FP":
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.getApiUrl = function () {
        return 'http://localhost:8080';
        //return   'http://201.147.64.84:8083' 
    };
    StorageService.prototype.setSession = function (key, obj) {
        sessionStorage.setItem(key, JSON.stringify(obj));
    };
    StorageService.prototype.getSession = function (key) {
        var obj = sessionStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    };
    StorageService.prototype.sessionDeleteAll = function () {
        sessionStorage.clear();
    };
    StorageService.prototype.sessionDeleteByKey = function (key) {
        sessionStorage.removeItem(key);
    };
    StorageService.prototype.setLocal = function (key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    };
    StorageService.prototype.getLocal = function (key) {
        var obj = localStorage.getItem(key);
        return obj ? JSON.parse(obj) : null;
    };
    StorageService.prototype.localDeleteAll = function () {
        localStorage.clear();
    };
    StorageService.prototype.localDeleteByKey = function (key) {
        localStorage.removeItem(key);
    };
    return StorageService;
}());



/***/ }),

/***/ "6Cq0":
/*!***************************************!*\
  !*** ./src/services/login.service.ts ***!
  \***************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NavigationStart } from '@angular/router';

var LoginService = /** @class */ (function () {
    function LoginService() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LoginService.prototype.showData = function (outer_data) {
        // alert("data");
        this.dataChange.next(outer_data);
    };
    LoginService.prototype.getData = function () {
        return this.dataChange.asObservable();
    };
    LoginService.ctorParameters = function () { return []; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "9WCt":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "9uR+":
/*!******************************************************************!*\
  !*** ./src/app/components/home-navbar/home-navbar.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1uYXZiYXIvaG9tZS1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor = \"rgba(74,73,73,0.8)\" size = \"medium\" color = \"#ffffff\" type = \"ball-spin\" [fullScreen] = \"true\"><p style=\"color: white\" > Cargando... </p></ngx-spinner>\n\n<div class=\"wrapper\">\n\n\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n\n<!---\n<div class=\"navbar\">\n    <app-navbar></app-navbar> \n    \n</div>\n-->\n    <!--\n    <div class=\"main\">\n    -->\n     <div class=\"main-panel\"> \n        <app-navbar></app-navbar> \n\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n\n        <!--\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div> -->\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        //apiKey: "AIzaSyAF1og02DFYvP9tjGYNT6YlP2YSl6-G4RQ",
        //authDomain: "elmandadero-storage.firebaseapp.com",
        //projectId: "elmandadero-storage",
        //storageBucket: "elmandadero-storage.appspot.com",
        //messagingSenderId: "570694818428",
        //appId: "1:570694818428:web:f28410432578bf336647f9"
        apiKey: "AIzaSyC32lkjiyr7WcjmRU2HOdZ1G18wzSMiGD0",
        authDomain: "mi-mandadero.firebaseapp.com",
        databaseURL: "https://mi-mandadero-default-rtdb.firebaseio.com",
        projectId: "mi-mandadero",
        storageBucket: "mi-mandadero.appspot.com",
        messagingSenderId: "1055645118874",
        appId: "1:1055645118874:web:fa2b0093b05e6c8ada0a23"
    },
};


/***/ }),

/***/ "D/Am":
/*!********************************!*\
  !*** ./src/models/usersapi.ts ***!
  \********************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    return UserApi;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "DiOg":
/*!*************************************************************!*\
  !*** ./src/app/carritocompras/carritocompras.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnJpdG9jb21wcmFzL2NhcnJpdG9jb21wcmFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "HblP":
/*!****************************!*\
  !*** ./src/models/data.ts ***!
  \****************************/
/*! exports provided: DATA_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_ITEMS", function() { return DATA_ITEMS; });
var DATA_ITEMS = [
    {
        price: 59.99,
        image: null,
        name: 'Item 1',
        details: 'It\'s as cool as it sounds',
        heart: null,
    },
    {
        price: 99.99,
        image: null,
        name: 'Item 2',
        details: 'It\'s as cool as it sounds',
        heart: null,
    },
    {
        price: 19.99,
        image: null,
        name: 'Item 3',
        details: 'It\'s as cool as it sounds',
        heart: null,
    },
    {
        price: 59.99,
        image: null,
        name: 'Item 4',
        details: 'It\'s as cool as it sounds',
        heart: null,
    },
    {
        price: 39.99,
        image: null,
        name: 'Item 5',
        details: 'It\'s as cool as it sounds',
        heart: null,
    },
    {
        price: 9.99,
        image: null,
        name: 'Item 6',
        details: 'It\'s as cool as it sounds',
        heart: null,
    }
];


/***/ }),

/***/ "IiZn":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDialog", function() { return CheckoutDialog; });
/* harmony import */ var _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./checkout.component.html */ "2ZcO");
/* harmony import */ var _checkout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component.css */ "PkTJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "K5n9");
/* harmony import */ var _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/graphql.sales.service */ "+ncC");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _models_totales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/totales */ "LZ+U");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/login.service */ "6Cq0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cfdi_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/cfdi.service */ "0vfD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//import { Observable, of } from 'rxjs';
//import { switchMap, shareReplay, share, take } from 'rxjs/operators';
//import {  map, tap    } from 'rxjs/operators';
//import { Totales } from '../../models/totales'
var CheckoutDialog = /** @class */ (function () {
    // @Inject(MAT_DIALOG_DATA) public data: any,
    function CheckoutDialog(cfdiService, shoppingCartService, graphqlSalesService, storageService, router, dialogRef, loginService) {
        this.cfdiService = cfdiService;
        this.shoppingCartService = shoppingCartService;
        this.graphqlSalesService = graphqlSalesService;
        this.storageService = storageService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.loginService = loginService;
        this.state = this.shoppingCartService.state$.pipe();
        //totals = this.shoppingCartService.total$.pipe();
        this.myTotal = new _models_totales__WEBPACK_IMPORTED_MODULE_7__["Totales"];
        this.myCar = [];
    }
    CheckoutDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.state.subscribe(function (cart) {
            _this.myTotal = cart.tot;
            //console.log(this.mytotal);
            //console.log(cart.cart);
            _this.myCar = cart.cart;
        });
    };
    CheckoutDialog.prototype.completeOrder = function () {
        //console.log(this.state);
        this.addSale();
        /*this.state.pipe(
          map(([store, cart, tot, checkout]: any) =>
            ({ store, cart, tot, checkout })),
          tap(tot => {
              console.log('totales ', tot);
            
          }),
          // make sure we share to the world! or just the entire app
          shareReplay(1)
        ); */
        //this.shoppingCartService.checkout();
    };
    CheckoutDialog.prototype.getCfdi = function () {
        /*
        var products = [];
        var mytoken = this.storageService.getSession("token");
        this.myCar.forEach(element => {
          products.push({
            product : element.id,
            cantidad : 1,
            precio: element.price
          })
        });
        alert(JSON.stringify(products));
        */
        var mycfdi = {
            "serie": "AAA",
            "folio": 1000,
            "formapago": "03",
            "condicionesdepago": "CONTADO",
            "subtotal": "1850",
            "descuento": "175.00",
            "moneda": "MXN",
            "total": "1943.00",
            "tipodecomprobante": "I",
            "metodopago": "PUE",
            "lugarexpedicion": "68050",
            "emisor": {
                "rfc": "CETA7610219C9",
                "nombre": "ADOLFO CENTENO TELLEZ",
                "regimenfiscal": "601"
            },
            "receptor": {
                "rfc": "KUB1004199C9",
                "nombre": "KUBEET SRL DE CV",
                "usocfdi": "G01"
            },
            "conceptos": [
                {
                    "claveprodserv": "01010101",
                    "noidentificacion": "AULOG001",
                    "cantidad": "5",
                    "claveunidad": "H87",
                    "unidad": "Pieza",
                    "descripcion": "Aurriculares USB Logitech",
                    "valorunitario": "350.00",
                    "importe": "1750.00",
                    "descuento": "175.00",
                    "impuestos": {
                        "traslados": [
                            {
                                "base": "1575.00",
                                "impuesto": "002",
                                "tipofactor": "Tasa",
                                "tasaocuota": "0.160000",
                                "importe": "252.00"
                            }
                        ],
                        "retenciones": []
                    }
                },
                {
                    "claveprodserv": "01010101",
                    "noidentificacion": "USB",
                    "cantidad": "1",
                    "claveunidad": "H87",
                    "unidad": "Pieza",
                    "descripcion": "Memoria USB 32gb marca Kingston",
                    "valorunitario": "100.00",
                    "importe": "100.00",
                    "descuento": "0.00",
                    "impuestos": {
                        "traslados": [
                            {
                                "base": "100.00",
                                "impuesto": "002",
                                "tipofactor": "Tasa",
                                "tasaocuota": "0.160000",
                                "importe": "16.00"
                            }
                        ],
                        "retenciones": []
                    }
                }
            ],
            "impuestos": {
                "totalimpuestostrasladados": "268.00",
                "traslados": [
                    {
                        "impuesto": "002",
                        "tipofactor": "Tasa",
                        "tasaocuota": "0.160000",
                        "importe": "268.00"
                    }
                ]
            }
        };
        alert("cfdi ...");
        this.cfdiService.getCfdi(mycfdi)
            .subscribe(function (data) {
            console.log('Cfdi ok :  ', data);
            //this.router.navigate(['/']);
            alert(JSON.stringify(data));
        }, function (error) {
            console.log('there was an error in cfdi : ', error);
        });
    };
    CheckoutDialog.prototype.addSale = function () {
        var _this = this;
        var products = [];
        var mytoken = this.storageService.getSession("token");
        this.myCar.forEach(function (element) {
            products.push({
                product: element.id,
                cantidad: 1,
                precio: element.price,
                importe: 100,
                // url: "--",
                // codigosat: "101010",
                // noidentificacion: "A01",
                // claveunidad: "U01",
                descuento: 0.00,
            });
        });
        alert(JSON.stringify(products));
        this.graphqlSalesService.createSale(mytoken, this.myTotal.subTot, this.myTotal.tax, this.myTotal.grandTot, products).subscribe(function (_a) {
            var data = _a.data;
            console.log('Sale created :  ', data);
            alert(JSON.stringify(data));
            //this.router.navigate(['/']);
            _this.loginService.showData("token here !!!");
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    CheckoutDialog.ctorParameters = function () { return [
        { type: _services_cfdi_service__WEBPACK_IMPORTED_MODULE_10__["CfdiService"] },
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
        { type: _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlSalesService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"] }
    ]; };
    CheckoutDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-checkout',
            template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_checkout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_cfdi_service__WEBPACK_IMPORTED_MODULE_10__["CfdiService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlSalesService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]])
    ], CheckoutDialog);
    return CheckoutDialog;
}());



/***/ }),

/***/ "K5n9":
/*!***********************************************!*\
  !*** ./src/services/shopping-cart.service.ts ***!
  \***********************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/data */ "HblP");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





;
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        var _this = this;
        /**
         * Main Observables
         *
         */
        this.stateTree$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.checkoutTrigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.cartAdd$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cartRemove$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Main Shopping Cart StateTree
         * Combines all dependencies and maps then to the StateTree Object
         */
        this.state$ = this.stateTree$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([_this.cart$, _this.total$, _this.checkoutTrigger$]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var store = _a[0], cart = _a[1], tot = _a[2], checkout = _a[3];
            return ({ store: store, cart: cart, tot: tot, checkout: checkout });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (state) {
            if (state.checkout) {
                //console.log('checkout', state);
            }
        }), 
        // make sure we share to the world! or just the entire app
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    Object.defineProperty(ShoppingCartService.prototype, "cart$", {
        /**
         * Main application cart Observable
         * This could start with items from local storage or even an API call
         * We use scan peak at the items within the cart and add and remove
         */
        get: function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.cartAdd$, this.cartRemove$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, item) {
                if (item) {
                    if (item.remove) {
                        return __spreadArrays(acc.filter(function (i) { return i.uuid !== item.uuid; }));
                    }
                    return __spreadArrays(acc, [item]);
                }
            }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingCartService.prototype, "total$", {
        /**
         * Calcs all Totals from being piped through the cart Observable
         * When an item gets added or removed it will automatically calc
         */
        get: function () {
            return this.cart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
                var total = 0;
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var i = items_1[_i];
                    total += i.price;
                }
                return total;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cost) { return ({
                subTot: cost,
                tax: .034 * cost,
                grandTot: .034 * cost + cost
            }); }));
        },
        enumerable: false,
        configurable: true
    });
    // Mock data service call
    ShoppingCartService.prototype.getItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_data__WEBPACK_IMPORTED_MODULE_4__["DATA_ITEMS"]);
    };
    // facade for next of cartAdd subject
    ShoppingCartService.prototype.addCartItem = function (item) {
        this.cartAdd$.next(__assign(__assign({}, item), { uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])() }));
    };
    // facade for next of cartRemove subject
    ShoppingCartService.prototype.removeCartItem = function (item) {
        this.cartRemove$.next(__assign(__assign({}, item), { remove: true }));
    };
    // not sure what else to do here so we don't do much
    // have a great day!
    ShoppingCartService.prototype.checkout = function () {
        this.checkoutTrigger$.next(true);
    };
    ShoppingCartService.ctorParameters = function () { return []; };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/waveslogo.jpg\" height=\"50\" width=\"70\"/>\r\n        </div>\r\n       <!--BioUV {{version}} -->\r\n       <b>waves</b> ERP\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <div *ngIf=\"isMobileMenu()\">\r\n\r\n    <!--\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form>\r\n-->\r\n<!--\r\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                </p>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n-->\r\n\r\n  </div>\r\n\r\n\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "LZ+U":
/*!*******************************!*\
  !*** ./src/models/totales.ts ***!
  \*******************************/
/*! exports provided: Totales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Totales", function() { return Totales; });
var Totales = /** @class */ (function () {
    function Totales() {
    }
    return Totales;
}());



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
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



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "PkTJ":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\r\n    display: table;\r\n  }\r\n  \r\n  .example-label {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 8px;\r\n    min-width: 120px;\r\n  }\r\n  \r\n  .example-button-row {\r\n    display: table-cell;\r\n    width: 490px;\r\n  }\r\n  \r\n  .example-button-row .mat-button-base {\r\n    margin: 8px 8px 8px 0;\r\n  }\r\n  \r\n  .example-flex-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n  }\r\n  \r\n  .example-button-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogNDkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "RU0v":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-8\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-header card-header-danger\">\r\n                      <h4 class=\"card-title\">Edit Profile</h4>\r\n                      <p class=\"card-category\">Complete your profile</p>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                      <form>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-5\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\r\n                                  </mat-form-field>\r\n                              </div>\r\n                              <div class=\"col-md-3\">\r\n                                  <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Username\">\r\n                                  </mat-form-field>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                  <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Email address\" type=\"email\">\r\n                                  </mat-form-field>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"City\" type=\"text\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Country\" type=\"text\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <label>About Me</label>\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                   <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\r\n                                 </mat-form-field>\r\n                                  <!-- <div class=\"form-group\">\r\n\r\n                                      <div class=\"form-group\">\r\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\r\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                      </div>\r\n                                  </div> -->\r\n                              </div>\r\n                          </div>\r\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\r\n                          <div class=\"clearfix\"></div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n              <div class=\"card card-profile\">\r\n                  <div class=\"card-avatar\">\r\n                      <a href=\"javascript:void(0)\">\r\n                          <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\r\n                      </a>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\r\n                      <h4 class=\"card-title\">Alec Thompson</h4>\r\n                      <p class=\"card-description\">\r\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                      </p>\r\n                      <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        \r\n      <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Bienvenido <b>{{user}}</b></a>\r\n      </div>\r\n    \r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n\r\n        \r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n       \r\n            <ul class=\"navbar-nav\">\r\n             <!--   \r\n             <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['/admin/admin/dashboard']\" rel=\"tooltip\" title=\"Punto de venta\" data-placement=\"bottom\">\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                      <p class=\"d-lg-none\">Ventas</p>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" [routerLink]=\"['/admin/admin/facturacion']\" rel=\"tooltip\" title=\"Generacion de CFDi\" data-placement=\"bottom\" >\r\n                      <i class=\"fa fa-twitter\"></i>\r\n                      <p class=\"d-lg-none\">Facturacion</p>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/admin/admin/productos']\" rel=\"tooltip\" title=\"Administracion de productos\" data-placement=\"bottom\" >\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                    <p class=\"d-lg-none\">Productos</p>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" >\r\n                <a class=\"nav-link\" [routerLink]=\"['/admin/admin/clientes']\" rel=\"tooltip\" title=\"Catalogo de clientes\" data-placement=\"bottom\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                    <p class=\"d-lg-none\">Clientes</p>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\" >\r\n                <a class=\"nav-link\" [routerLink]=\"['/admin/admin/configuracion']\" rel=\"tooltip\" title=\"Opciones de Configuracion\" data-placement=\"bottom\">\r\n                    <i class=\"fa fa-instagram\"></i>\r\n                    <p class=\"d-lg-none\">Configuracion</p>\r\n                </a>\r\n            </li>\r\n        -->\r\n            <li class=\"nav-item\" >\r\n                <a class=\"nav-link\" [routerLink]=\"['/admin/admin/logout']\" rel=\"tooltip\" title=\"Cerrar sesion del usuario\" data-placement=\"bottom\" >\r\n                    <i class=\"fa fa-github\"></i>\r\n                    <p class=\"d-lg-none\">Cerrar sesion</p>\r\n                </a>\r\n            </li>\r\n            </ul>\r\n        </div>\r\n        </div>\r\n     </nav>\r\n     <!--\r\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" href=\"http://waves-lab.com.mx:8081\">\r\n                    <img  src=\"assets/img/waveslogo.jpg\" alt=\"\"\r\n                    width=\"50\" \r\n                    height=\"40\" \r\n                    >      \r\n                    cloud ERP     \r\n                    - Bienvenido : <b>adsoft</b>\r\n     \r\n            </a>\r\n\r\n\r\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/admin/dashboard']\" rel=\"tooltip\" title=\"Punto de venta\" data-placement=\"bottom\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none\">Ventas</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/admin/facturacion']\" rel=\"tooltip\" title=\"Generacion de CFDi\" data-placement=\"bottom\" >\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none\">Facturacion</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/admin/productos']\" rel=\"tooltip\" title=\"Administracion de productos\" data-placement=\"bottom\" >\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none\">Productos</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" >\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/admin/clientes']\" rel=\"tooltip\" title=\"Catalogo de clientes\" data-placement=\"bottom\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                        <p class=\"d-lg-none\">Clientes</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" >\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/admin/configuracion']\" rel=\"tooltip\" title=\"Opciones de Configuracion\" data-placement=\"bottom\">\r\n                        <i class=\"fa fa-instagram\"></i>\r\n                        <p class=\"d-lg-none\">Configuracion</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" >\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin/admin/logout']\" rel=\"tooltip\" title=\"Cerrar sesion del usuario\" data-placement=\"bottom\" >\r\n                        <i class=\"fa fa-github\"></i>\r\n                        <p class=\"d-lg-none\">Cerrar sesion</p>\r\n                    </a>\r\n                </li>\r\n                \r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n-->\r\n<!--\r\n<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n        \r\n        <form class=\"navbar-form\"> \r\n            <ng-container *ngIf=\"user\">\r\n    \r\n            Bienvenido: <b>{{user}}</b> \r\n    \r\n           \r\n    \r\n            </ng-container>\r\n            \r\n            \r\n        </form>\r\n    \r\n          \r\n        <div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n\r\n        \r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n    \r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n        \r\n            <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        \r\n            <ul class=\"navbar-nav\">\r\n                \r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n\r\n            \r\n                \r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                        </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\r\n                    </div>\r\n                </li>\r\n            \r\n                <li class=\"nav-item\">\r\n                    Cerrar Sesion\r\n                                       \r\n                                        <a class=\"nav-link\" [routerLink]=\"['/admin/admin/logout']\">\r\n                                            <i class=\"material-icons\">login</i>\r\n                                            <p>\r\n                                                <span class=\"d-lg-none d-md-block\">Account</span>\r\n                                            </p>\r\n                                        </a>\r\n                                    \r\n                                        \r\n                                        <button mat-raised-button (click)=\"logout()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                                           <i class=\"material-icons\">login</i>\r\n                                           <div class=\"ripple-container\"></div>\r\n                                        </button>\r\n                                    \r\n                </li>\r\n            \r\n                <li class=\"nav-item\">\r\n\r\n                    <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                        <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                        <p>{{menuItem.title}}</p>\r\n                    </a>\r\n                \r\n\r\n                    <a class=\"nav-link\" [routerLink]=\"['/new-user']\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                \r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n-->\r\n\r\n<!--\r\n<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav> \r\n-->");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
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




//import { GraphqlService} from '../services/graphql.users.service';
var TOKENAUTH = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_3__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation TokenAuth($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"], ["\n  mutation TokenAuth($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"])));
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    //constructor(private graphqlService: GraphqlService) {}
    AppComponent.prototype.ngOnInit = function () {
        /*
        this.apollo
          .watchQuery({
            query: gql`
              {
                users {
                  username
                }
              }
            `,
          })
          .valueChanges.subscribe((result: any) => {
           alert(JSON.stringify(result));
          });
    
        this.apollo.mutate({
          mutation: TOKENAUTH,
          variables: {
            username: 'adsoft',
            password: '123456'
          }
        }).subscribe(({ data }) => {
          console.log('got data', data);
        },(error) => {
          console.log('there was an error sending the query', error);
        });
    
     this.graphqlService.tokenAuth('adsoft','123456')
      .subscribe(({ data }) => {
         console.log('login token ', data);
      }, (error) => {
         console.log('there was an error sending the query', error);
      });
      */
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());

var templateObject_1;


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WNr7":
/*!***************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n    <!--\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://creative-tim.com/about-us\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    -->\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, made with love by\r\n            <a href=\"https://github.com/adsoftsito\" target=\"_blank\">adsoftsito</a> for a better world.\r\n        </div>\r\n    </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "tWBk");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _carritocompras_carritocompras_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carritocompras/carritocompras.component */ "zWA4");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./checkout/checkout.component */ "IiZn");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { CartComponent } from './cart/cart.component';
/*
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
*/











//import { CartComponent } from './cart/cart.component';

//import { LogoutComponent } from './logout/logout.component';





//CarritocomprasComponent,
//CartComponent,
//CheckoutDialog
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _graphql_module__WEBPACK_IMPORTED_MODULE_19__["GraphQLModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_22__["NgxSpinnerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_17__["AdminLayoutComponent"],
                _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_18__["HomeLayoutComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                _carritocompras_carritocompras_component__WEBPACK_IMPORTED_MODULE_20__["CarritocomprasComponent"],
                //LogoutComponent,
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_21__["CheckoutDialog"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_21__["CheckoutDialog"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ "tWBk");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_5__["HomeLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/home-layout/home-layout.module#HomeLayoutModule'
            }]
    },
    {
        path: 'admin',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full',
    }, {
        path: 'admin',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"default~layouts-admin-layout-admin-layout-module~layouts-home-layout-home-layout-module",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/home-layout/home-layout.module": [
		"wKKF",
		"default~layouts-admin-layout-admin-layout-module~layouts-home-layout-home-layout-module",
		"layouts-home-layout-home-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "d+Iq":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-navbar/home-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavbarComponent", function() { return HomeNavbarComponent; });
/* harmony import */ var _raw_loader_home_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home-navbar.component.html */ "kvV3");
/* harmony import */ var _home_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-navbar.component.css */ "9uR+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../checkout/checkout.component */ "IiZn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeNavbarComponent = /** @class */ (function () {
    function HomeNavbarComponent(location, element, router, dialog) {
        this.element = element;
        this.router = router;
        this.dialog = dialog;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    HomeNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    HomeNavbarComponent.prototype.checkout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutDialog"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '600px',
        });
    };
    HomeNavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    HomeNavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    HomeNavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    HomeNavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    HomeNavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    HomeNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-navbar',
            template: _raw_loader_home_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], HomeNavbarComponent);
    return HomeNavbarComponent;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/storage.service */ "61FP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logout/logout.component */ "n1B2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, storageService, dialog) {
        this.element = element;
        this.router = router;
        this.storageService = storageService;
        this.dialog = dialog;
        this.mobile_menu_visible = 0;
        //this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.storageService.getSession("user");
        /*
            this.listTitles = ROUTES.filter(listTitle => listTitle);
            const navbar: HTMLElement = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
            this.router.events.subscribe((event) => {
              this.sidebarClose();
               var $layer: any = document.getElementsByClassName('close-layer')[0];
               if ($layer) {
                 $layer.remove();
                 this.mobile_menu_visible = 0;
               }
            });
      */
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.logout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '400px',
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-navbar/home-navbar.component */ "d+Iq");
/* harmony import */ var services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/storage.service */ "61FP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { CheckoutDialog } from '../checkout/checkout.component';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_6__["HomeNavbarComponent"],
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _home_navbar_home_navbar_component__WEBPACK_IMPORTED_MODULE_6__["HomeNavbarComponent"]
            ],
            providers: [services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "kvV3":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-navbar/home-navbar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper\">\r\n            \r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n        <!--    <form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        -->\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                  <!--  <a class=\"nav-link\" href=\"javascript:void(0)\"> -->\r\n                    <a class=\"nav-link\" [routerLink]=\"['/admin']\">\r\n\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n                <!--\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                        </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\r\n                    </div>\r\n                </li>\r\n            -->\r\n                <li class=\"nav-item\">\r\n                    \r\n                                        <a class=\"nav-link\" (onclick)=\"checkout()\">\r\n                                            <i class=\"material-icons\">login</i>\r\n                                            <p>\r\n                                                <span class=\"d-lg-none d-md-block\">Account</span>\r\n                                            </p>\r\n                                        </a>\r\n                                    <!--\r\n                                    <button mat-raised-button (click)=\"checkout()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                                        <i class=\"material-icons\">login</i>\r\n                                        <div class=\"ripple-container\"></div>\r\n                                    </button>\r\n                                -->\r\n                </li>\r\n                <li class=\"nav-item\">\r\n<!--\r\n                    <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\r\n                        <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                        <p>{{menuItem.title}}</p>\r\n                    </a>\r\n                -->\r\n\r\n                    <a class=\"nav-link\" [routerLink]=\"['/new-user']\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Account</span>\r\n                        </p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!--\r\n\r\n<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\r\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n");

/***/ }),

/***/ "n1B2":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./logout.component.html */ "r6bu");
/* harmony import */ var _logout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.component.css */ "vd7c");
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








var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(graphqlService, storageService, loginService, router) {
        this.graphqlService = graphqlService;
        this.storageService = storageService;
        this.loginService = loginService;
        this.router = router;
        this.myUser = new _models_usersapi__WEBPACK_IMPORTED_MODULE_3__["UserApi"];
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logoutUser = function () {
        console.log(' user : ' + this.storageService.getSession("user"));
        console.log(' token : ' + this.storageService.getSession("token"));
        this.storageService.sessionDeleteAll();
        //this.storageService.setSession("user", null);
        console.log(' user : ' + this.storageService.getSession("user"));
        console.log(' token : ' + this.storageService.getSession("token"));
        var mydata = {
            user: "",
            token: ""
        };
        this.loginService.showData(mydata);
        this.router.navigate(['/']);
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlUsersService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-logout',
            template: _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_logout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_users_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlUsersService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "pAaK":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home-layout/home-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n<!--\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n-->\r\n    <div class=\"main-panel-home\">\r\n       <!-- <app-home-navbar></app-home-navbar> -->\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n<!--\r\n    <div class=\"fixed-plugin\">\r\n        <div class=\"dropdown show-dropdown open show\">\r\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n                <i class=\"fa fa-cog fa-2x\"> </i>\r\n            </a>\r\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\r\n                <li class=\"header-title\"> Sidebar Filters</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <div class=\"ml-auto mr-auto\">\r\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\r\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li class=\"header-title\">Images</li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\r\n                    <div class=\"ripple-container\"></div></a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Download Free\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div>\r\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\r\n                            Buy Pro\r\n                        </button>\r\n                    </div>\r\n                </li>\r\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\r\n                  <div>\r\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\r\n                        View Documentation\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n-->\r\n</div>\r\n<!-- Buy-Modal-angular -->\r\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n<div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <h4 class=\"margin-top\">\r\n                Free Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container\">\r\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Html5\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"wrapper-card\">\r\n                    <div class=\"image-container image-angular-cli\">\r\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                    </div>\r\n                    Angular\r\n                    <div class=\"separator\"></div>\r\n                    <div class=\"product-type\">\r\n                        FREE\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <h4>\r\n                PRO Version\r\n            </h4>\r\n            <div class=\"separator\"></div>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container\">\r\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\r\n                </div>\r\n                Html5\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        49\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\r\n                <div class=\"image-container image-angular-cli\">\r\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\r\n                </div>\r\n                Angular\r\n                <div class=\"separator\"></div>\r\n                <div class=\"price\">\r\n                    from\r\n                    <span>\r\n                        59\r\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "prKX":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carritocompras/carritocompras.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/new-product']\">\r\n            <i class=\"material-icons\">login</i>\r\n            <p>\r\n                <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n        </a>\r\n        <div class=\"row\">\r\n       \r\n            <div class=\"col-lg-12 col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-warning\">\r\n                        <h4 class=\"card-title\">Carrito de Compras</h4>\r\n                        <p class=\"card-category\"> - </p>\r\n                    </div>\r\n                    <div class=\"card-body table-responsive\">\r\n                        <table class=\"table table-hover\">\r\n                            <thead class=\"text-warning\">\r\n                                <th>Clave</th>\r\n                                <th>Url</th>\r\n                                <th>Descripcion</th>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let product of posts\" >\r\n                                    <td>{{ product.id }}</td>\r\n                                    <td>{{ product.url }}</td>\r\n                                    <td>{{ product.description }}</td>\r\n                                </tr>\r\n                              \r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "r6bu":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-danger\">\r\n                        <h4 class=\"card-title\">Logout</h4>\r\n                        <p class=\"card-category\">Cerrar sesion</p>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form>\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col-md-12\">\r\n                                    Esta seguro de cerrar sesion ?\r\n                                </div>\r\n                            </div>\r\n                               \r\n                               \r\n                            \r\n                            <button mat-raised-button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"logoutUser()\">Cerrar sesion</button>\r\n\r\n                            <div class=\"clearfix\"></div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                 </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "tWBk":
/*!**************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _raw_loader_home_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home-layout.component.html */ "pAaK");
/* harmony import */ var _home_layout_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-layout.component.css */ "WNr7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    HomeLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    HomeLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    HomeLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    HomeLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    HomeLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HomeLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home-layout',
            template: _raw_loader_home_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_layout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "vb23":
/*!***********************************************!*\
  !*** ./src/services/graphql.users.service.ts ***!
  \***********************************************/
/*! exports provided: GraphqlUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlUsersService", function() { return GraphqlUsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
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


var TOKENAUTH = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation TokenAuth($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"], ["\n  mutation TokenAuth($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"])));
var CREATEUSER = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation CreateUser($username: String!, $email: String!, $password: String!) {\n    createUser(username: $username, email: $email, password: $password) {\n      user { \n        id\n        username\n        email\n      }\n    }\n  }\n  "], ["\n  mutation CreateUser($username: String!, $email: String!, $password: String!) {\n    createUser(username: $username, email: $email, password: $password) {\n      user { \n        id\n        username\n        email\n      }\n    }\n  }\n  "])));
var GraphqlUsersService = /** @class */ (function () {
    function GraphqlUsersService(apollo) {
        this.apollo = apollo;
    }
    GraphqlUsersService.prototype.tokenAuth = function (username, password) {
        return this.apollo.mutate({
            mutation: TOKENAUTH,
            variables: {
                username: username,
                password: password
            }
        });
    };
    GraphqlUsersService.prototype.createUser = function (username, email, password) {
        return this.apollo.mutate({
            mutation: CREATEUSER,
            variables: {
                username: username,
                email: email,
                password: password
            }
        });
    };
    GraphqlUsersService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"] }
    ]; };
    GraphqlUsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Apollo"]])
    ], GraphqlUsersService);
    return GraphqlUsersService;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "vd7c":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
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



var ROUTES = [
    { path: 'admin/dashboard', title: 'Ventas', icon: 'dashboard', class: '' },
    { path: 'admin/facturacion', title: 'Facturacion', icon: 'dashboard', class: '' },
    { path: 'admin/productos', title: 'Productos', icon: 'dashboard', class: '' },
    { path: 'admin/marcas', title: 'Marcas', icon: 'dashboard', class: '' },
    { path: 'admin/lineas', title: 'Lineas', icon: 'dashboard', class: '' },
    { path: 'admin/clientes', title: 'Clientes', icon: 'dashboard', class: '' },
    { path: 'admin/listas', title: 'Listas Precio', icon: 'dashboard', class: '' },
    { path: 'admin/proveedores', title: 'Proveedores', icon: 'dashboard', class: '' },
    { path: 'admin/listascompra', title: 'Listas Compra', icon: 'dashboard', class: '' },
    { path: 'admin/compras', title: 'Compras', icon: 'dashboard', class: '' },
    { path: 'admin/configuracion', title: 'Configuracion', icon: 'dashboard', class: '' },
    { path: 'admin/logout', title: 'Cerrar sesion', icon: 'dashboard', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.version = "0.0";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        /*
        this.graalvService.getVersion()
        .subscribe((data: any) => {
         this.version = data.version;
         //alert(data.version);
       });*/
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zWA4":
/*!************************************************************!*\
  !*** ./src/app/carritocompras/carritocompras.component.ts ***!
  \************************************************************/
/*! exports provided: CarritocomprasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritocomprasComponent", function() { return CarritocomprasComponent; });
/* harmony import */ var _raw_loader_carritocompras_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./carritocompras.component.html */ "prKX");
/* harmony import */ var _carritocompras_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carritocompras.component.css */ "DiOg");
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



var CarritocomprasComponent = /** @class */ (function () {
    function CarritocomprasComponent() {
    }
    CarritocomprasComponent.prototype.ngOnInit = function () {
    };
    CarritocomprasComponent.ctorParameters = function () { return []; };
    CarritocomprasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-carritocompras',
            template: _raw_loader_carritocompras_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_carritocompras_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], CarritocomprasComponent);
    return CarritocomprasComponent;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map