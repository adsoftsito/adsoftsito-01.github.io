(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-home-layout-home-layout-module"],{

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
var LINKS = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query Links {\n    links {\n      id\n      url\n      description\n      precio\n      postedBy {\n        username\n      }\n    }\n  }\n"], ["\n  query Links {\n    links {\n      id\n      url\n      description\n      precio\n      postedBy {\n        username\n      }\n    }\n  }\n"])));
/*
  input Product {
    product: Int
    cantidad: Float
    precio: Float
  }
*/
var CREATESALE = Object(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation CreateSale($subtotal: Float!, $iva: Float!, $total: Float!, $products : [DetailInput]!) {\n    createSale(subtotal: $subtotal, iva: $iva, total: $total, products : $products) {\n      id\n      total\n      postedBy {\n        id\n        username\n        email\n\n      }\n   }\n  }\n  "], ["\n  mutation CreateSale($subtotal: Float!, $iva: Float!, $total: Float!, $products : [DetailInput]!) {\n    createSale(subtotal: $subtotal, iva: $iva, total: $total, products : $products) {\n      id\n      total\n      postedBy {\n        id\n        username\n        email\n\n      }\n   }\n  }\n  "])));
var GraphqlSalesService = /** @class */ (function () {
    function GraphqlSalesService(apollo) {
        this.apollo = apollo;
    }
    GraphqlSalesService.prototype.links = function () {
        return this.apollo.watchQuery({
            query: LINKS
        });
    };
    GraphqlSalesService.prototype.createSale = function (mytoken, subtotal, iva, total, products) {
        console.log("token auth = " + mytoken);
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

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "1PcV":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "2ZcO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(state | async) as s\">\n\t<!-- <pre>\n    {{ s | json }}\n  </pre> -->\n\t<h3>\n\t\tCheckout\n\t\t<button style=\"float: right;\" mat-icon-button [mat-dialog-close]><mat-icon>cancel</mat-icon></button>\n  </h3>\n\n\t<div *ngIf=\"s.cart.length > 0; else elseBlock\">\n  <p>\n    Review your items and checkout\n  </p>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Total: {{ s.tot.subTot | currency:'USD':'symbol':'1.2-2' }}</mat-card-title>\n      <mat-card-subtitle>\n      tax: {{ s.tot.tax | currency:'USD':'symbol':'1.2-2' }}\n      <br />\n          at checkout: {{ s.tot.grandTot | currency:'USD':'symbol':'1.2-2' }}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-actions style=\"text-align: right;\">\n        <button type=\"button\" mat-button color=\"accent\" (click)=\"completeOrder()\" >\n          Complete my order <mat-icon>check</mat-icon>\n        </button>\n      </mat-card-actions>\n  </mat-card>\n  <div *ngFor=\"let item of s.cart\">\n    <p>\n      {{ item.name }}<br />\n      <strong>{{ item.price }}</strong>\n    </p>\n  </div> \n</div>\n  <ng-template #elseBlock>\n    <h4>Thank you for your fake purchase!</h4>\n     <button type=\"button\" mat-button color=\"primary\" [mat-dialog-close]>\n         Close <mat-icon>cancel</mat-icon>\n        </button>\n  </ng-template>\n</ng-container>");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ "RV7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/graphql.products.service */ "1arE");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "K5n9");
/* harmony import */ var _models_CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/CartItem */ "VFRK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(graphqlProductsService, shoppingCartService) {
        this.graphqlProductsService = graphqlProductsService;
        this.shoppingCartService = shoppingCartService;
        this.cartState$ = this.shoppingCartService.state$;
    }
    HomeComponent.prototype.addItemToCart = function (item) {
        //alert(JSON.stringify(item));
        var myItem = new _models_CartItem__WEBPACK_IMPORTED_MODULE_6__["ShopItem"]();
        myItem.id = item.id;
        myItem.name = item.description;
        myItem.price = item.precio;
        this.shoppingCartService.addCartItem(myItem);
    };
    HomeComponent.prototype.remove = function (item) {
        this.shoppingCartService.removeCartItem(item);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySubscription = this.graphqlProductsService.links()
            .valueChanges
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).links;
            console.log(JSON.stringify(_this.posts));
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    HomeComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    HomeComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    HomeComponent.ctorParameters = function () { return [
        { type: _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"] },
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "Ehx+":
/*!************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: HomeLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutRoutes", function() { return HomeLayoutRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home/home.component */ "9vUh");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../new-user/new-user.component */ "oT/u");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../products/products.component */ "ziXE");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../login/login.component */ "vtpD");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../new-product/new-product.component */ "dLVS");
/* harmony import */ var _carritocompras_carritocompras_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../carritocompras/carritocompras.component */ "zWA4");













var HomeLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__["NewUserComponent"] },
    { path: 'new-product', component: _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_11__["NewProductComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'home/productos', component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
    { path: 'carrito', component: _carritocompras_carritocompras_component__WEBPACK_IMPORTED_MODULE_12__["CarritocomprasComponent"] },
    { path: 'table-list', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__["TableListComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"] },
    { path: 'maps', component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'upgrade', component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__["UpgradeComponent"] },
];


/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n\n   \n    <div class=\"container-fluid\">\n  \n      <ng-container *ngIf=\"cartState$ | async as state\">\n          <app-cart [state]=\"state\"></app-cart>\n          <mat-card>\n              <mat-card-header>\n                  <mat-card-title>Total: {{ state.tot.subTot | currency:'USD':'symbol':'1.2-2' }}</mat-card-title>\n      \n                  <mat-card-subtitle>\n                      tax: {{ state.tot.tax | currency:'USD':'symbol':'1.2-2' }}\n                      <br />\n                at checkout: {{ state.tot.grandTot | currency:'USD':'symbol':'1.2-2' }}\n              </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-actions>\n              <mat-chip-list>\n                <mat-chip *ngFor=\"let item of state.cart\" [removable]=\"true\" (removed)=\"remove(item)\">{{ item.name }}\n                  <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n              </mat-chip-list>\n            </mat-card-actions>\n          </mat-card>\n        <hr />\n    <!--\n        <mat-card *ngFor=\"let item of state.store\">\n              <mat-card-header>\n                  {{ item.name }}\n              </mat-card-header>\t\t\n          <mat-card-subtitle>\n            \n            <ul>\n              <li>{{ item.details }}</li>\n              <li>{{ item.price | currency:'USD':'symbol':'1.2-2' }}</li>\n            </ul>\n          </mat-card-subtitle>\n          <mat-card-actions>\n      \n              <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(item)\">\n            <mat-icon>add_shopping_cart</mat-icon>\n            Add to cart\n          </button>\n          </mat-card-actions>\n        </mat-card>\n      -->\n      </ng-container>\n      \n    \n      <div class=\"row\"> \n  \n     \n            \n                <div class=\"col-md-4\" *ngFor=\"let product of posts\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header card-header-success\">\n                      <img  width=\"50\" height=\"50\" src={{product.url}}>\n                      Vendedor: {{product.postedBy.username}}\n  \n                    </div>\n                    <div class=\"card-body\">\n  \n                      <p class=\"card-category\">\n  \n                          <span class=\"text-success\">\n                              <img  width=\"200\" height=\"200\" src={{product.url}}>\n                          </span> \n                      </p>    \n                          <h4 class=\"card-title\">{{product.id}} - {{product.description}}</h4>\n  \n                      \n                      \n  \n                        <p class=\"card-category\">\n                            <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i>  \n                            </span> Precio: ${{product.precio}} \n                        </p>\n                    </div>\n                    <div class=\"card-footer\">\n                      \n                      <div class=\"stats\">\n  \n                          <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(product)\">\n                              <mat-icon>add_shopping_cart</mat-icon>\n                              Add to cart\n                            </button>\n                          <!--\n                          <i class=\"material-icons text-danger\">warning</i>\n                          <a href=\"javascript:void(0)\"> Comprar </a>\n                      -->\n                      </div>\n                    </div>\n                </div>\n                </div>\n              \n        </div> \n     \n     \n      \n  </div>\n  </div>\n  ");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _models_totales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/totales */ "LZ+U");
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
    function CheckoutDialog(shoppingCartService, graphqlSalesService, storageService, router, dialogRef) {
        this.shoppingCartService = shoppingCartService;
        this.graphqlSalesService = graphqlSalesService;
        this.storageService = storageService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.state = this.shoppingCartService.state$.pipe();
        //totals = this.shoppingCartService.total$.pipe();
        this.myTotal = new _models_totales__WEBPACK_IMPORTED_MODULE_8__["Totales"];
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
    CheckoutDialog.prototype.addSale = function () {
        var products = [];
        var mytoken = this.storageService.getSession("token");
        this.myCar.forEach(function (element) {
            products.push({
                product: element.id,
                cantidad: 1,
                precio: element.price
            });
        });
        alert(JSON.stringify(products));
        /*
            this.graphqlSalesService.createSale(mytoken, this.myTotal.subTot,
                          this.myTotal.tax, this.myTotal.grandTot, products)
            .subscribe(({ data }) => {
               console.log('Sale created :  ', data);
               this.router.navigate(['/dashboard']);
            }, (error) => {
               console.log('there was an error sending the query', error);
            });
          */
    };
    CheckoutDialog.ctorParameters = function () { return [
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
        { type: _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlSalesService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    CheckoutDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-checkout',
            template: _raw_loader_checkout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_checkout_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlSalesService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CheckoutDialog);
    return CheckoutDialog;
}());



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

/***/ "M2Tr":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n\tShopping Cart: <button mat-flat-button color=\"accent\" role=\"button\" [disabled]=\"state.cart.length < 1\" (click)=\"checkout()\">\n    <mat-icon>shopping_cart</mat-icon>\n     Checkout {{ state.cart.length }} Item{{ state.cart.length > 1 ? 's' : '' }}</button>\n</p>");

/***/ }),

/***/ "PkTJ":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "RV7M":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "M2Tr");
/* harmony import */ var _cart_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.component.css */ "1PcV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "K5n9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkout/checkout.component */ "IiZn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartComponent = /** @class */ (function () {
    function CartComponent(shoppingCartService, dialog) {
        this.shoppingCartService = shoppingCartService;
        this.dialog = dialog;
    }
    CartComponent.prototype.checkout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutDialog"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '600px',
        });
    };
    CartComponent.ctorParameters = function () { return [
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    CartComponent.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cart',
            template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cart_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "wKKF":
/*!***********************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutModule", function() { return HomeLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-layout.routing */ "Ehx+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home/home.component */ "9vUh");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../new-user/new-user.component */ "oT/u");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../login/login.component */ "vtpD");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/storage.service */ "61FP");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../cart/cart.component */ "c2A7");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../checkout/checkout.component */ "IiZn");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/shopping-cart.service */ "K5n9");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../material/material.module */ "hctd");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { UserProfileComponent } from '../../user-profile/user-profile.component';
//import { TableListComponent } from '../../table-list/table-list.component';
//import { TypographyComponent } from '../../typography/typography.component';
//import { IconsComponent } from '../../icons/icons.component';
//import { MapsComponent } from '../../maps/maps.component';

//import { UpgradeComponent } from '../../upgrade/upgrade.component';









//import {ProductsComponent } from '../../products/products.component';
//import {NewProductComponent } from '../../new-product/new-product.component';
//import { CarritocomprasComponent } from '../../carritocompras/carritocompras.component';


//CarritocomprasComponent,
//CartComponent,
//CheckoutDialog


var HomeLayoutModule = /** @class */ (function () {
    function HomeLayoutModule() {
    }
    HomeLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_home_layout_routing__WEBPACK_IMPORTED_MODULE_4__["HomeLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"]
            ],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                // UserProfileComponent,
                _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_13__["NewUserComponent"],
                // NewProductComponent,
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                //ProductsComponent,
                //TableListComponent,
                //TypographyComponent,
                //IconsComponent,
                //MapsComponent,
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"],
                //UpgradeComponent,
                //CarritocomprasComponent,
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_17__["CheckoutDialog"]
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"], _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_18__["ShoppingCartService"]]
        })
    ], HomeLayoutModule);
    return HomeLayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-home-layout-home-layout-module.js.map