(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-home-layout-home-layout-module"],{

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
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/login.service */ "6Cq0");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/login.component */ "vtpD");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../new-user/new-user.component */ "oT/u");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../logout/logout.component */ "n1B2");
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
    function HomeComponent(graphqlProductsService, shoppingCartService, loginService, dialog) {
        this.graphqlProductsService = graphqlProductsService;
        this.shoppingCartService = shoppingCartService;
        this.loginService = loginService;
        this.dialog = dialog;
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
    HomeComponent.prototype.login = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '400px',
        });
    };
    HomeComponent.prototype.logout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '400px',
        });
    };
    HomeComponent.prototype.newuser = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__["NewUserComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '450px',
            width: '400px',
        });
    };
    HomeComponent.prototype.search = function () {
        //alert(this.valor);
        //this.buscar(this.valor);
    };
    HomeComponent.prototype.buscar = function (valor) {
        var _this = this;
        this.querySubscription = this.graphqlProductsService.links("token", valor)
            //.valueChanges
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).links;
            console.log(JSON.stringify(_this.posts));
        });
    };
    HomeComponent.prototype.remove = function (item) {
        this.shoppingCartService.removeCartItem(item);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySubscription = this.loginService.getData().subscribe(function (data) {
            //alert("print data"+ data);
            _this.user = data.user;
            _this.token = data.token;
            //console.log("token: " + this.token);
        });
        this.buscar("-");
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
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
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
/* harmony import */ var _carritocompras_carritocompras_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../carritocompras/carritocompras.component */ "zWA4");












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
    { path: 'home/new-user', component: _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_8__["NewUserComponent"] },
    // { path: 'new-product',    component: NewProductComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'home/productos', component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
    { path: 'carrito', component: _carritocompras_carritocompras_component__WEBPACK_IMPORTED_MODULE_11__["CarritocomprasComponent"] },
    { path: 'table-list', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__["TableListComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"] },
    { path: 'maps', component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'upgrade', component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__["UpgradeComponent"] },
];


/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"card\">\r\n          <div class=\"card-header card-header-danger\">\r\n              <h3 class=\"card-title\">Notifications</h3>\r\n              <p class=\"card-category\">Handcrafted by our friend\r\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\r\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\r\n              </p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4 class=\"card-title\">Notifications Style</h4>\r\n                      <div class=\"alert alert-info\">\r\n                          <span>This is a plain notification</span>\r\n                      </div>\r\n                      <div class=\"alert alert-info\">\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span>This is a notification with close button.</span>\r\n                      </div>\r\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                      </div>\r\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4 class=\"card-title\">Notification states</h4>\r\n                      <div class=\"alert alert-info\">\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span>\r\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                      </div>\r\n                      <div class=\"alert alert-success\">\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span>\r\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                      </div>\r\n                      <div class=\"alert alert-warning\">\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span>\r\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                      </div>\r\n                      <div class=\"alert alert-danger\">\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span>\r\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                      </div>\r\n                      <div class=\"alert alert-primary\">\r\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                              <i class=\"material-icons\">close</i>\r\n                          </button>\r\n                          <span>\r\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n              <div class=\"places-buttons\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                          <h4 class=\"card-title\">\r\n                              Notifications Places\r\n                              <p class=\"category\">Click to view notifications</p>\r\n                          </h4>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-4\">\r\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                              </div>\r\n                              <div class=\"col-md-4\">\r\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"main-content-home\">\r\n\r\n   \r\n    <div class=\"container-fluid\">\r\n       \r\n<!--\r\n\r\n      <nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n        <div class=\"container-fluid\">\r\n            \r\n          <div class=\"navbar-wrapper\">\r\n              <a class=\"navbar-brand\" href=\"javascript:void(0)\"> <b>waves</b> cloud ERP</a>\r\n          </div>\r\n        \r\n            <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n                <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n                <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n           \r\n                <ul class=\"navbar-nav\">\r\n                    \r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" [routerLink]=\"['/admin/admin/dashboard']\" rel=\"tooltip\" title=\"Punto de venta\" data-placement=\"bottom\">\r\n                          <i class=\"fa fa-twitter\"></i>\r\n                          <p class=\"d-lg-none\">Ventas</p>\r\n                      </a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" [routerLink]=\"['/admin/admin/facturacion']\" rel=\"tooltip\" title=\"Generacion de CFDi\" data-placement=\"bottom\" >\r\n                          <i class=\"fa fa-twitter\"></i>\r\n                          <p class=\"d-lg-none\">Facturacion</p>\r\n                      </a>\r\n                  </li>\r\n                 \r\n                </ul>\r\n            </div>\r\n            </div>\r\n         </nav>\r\n      <ng-container *ngIf=\"cartState$ | async as state\">\r\n          <form class=\"navbar-form\"> \r\n            <ng-container *ngIf=\"user\">\r\n\r\n            Bienvenido: {{user}} \r\n\r\n           Cerrar Sesion\r\n            <button mat-raised-button (click)=\"logout()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n               <i class=\"material-icons\">login</i>\r\n               <div class=\"ripple-container\"></div>\r\n            </button>\r\n\r\n\r\n            </ng-container>\r\n            \r\n            <div class=\"input-group no-border\">\r\n              <input type=\"text\" [(ngModel)]=\"valor\" name=\"valor\" class=\"form-control\" placeholder=\"Producto o vendedor...\">\r\n              <button mat-raised-button (click)=\"search()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                  <i class=\"material-icons\">search</i>\r\n                  <div class=\"ripple-container\"></div>\r\n              </button>\r\n              \r\n          </div>\r\n          </form> \r\n\r\n          <ng-container *ngIf=\"user\">\r\n\r\n            <app-cart [state]=\"state\"></app-cart> \r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!user\"> \r\n            Login para Comprar\r\n            <button mat-raised-button (click)=\"checkout()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n               <i class=\"material-icons\">login</i>\r\n               <div class=\"ripple-container\"></div>\r\n            </button>\r\n\r\n            o crear Nuevo usuario\r\n            <button mat-raised-button (click)=\"newuser()\" class=\"btn btn-white btn-round btn-just-icon\">\r\n               <i class=\"material-icons\">login</i>\r\n               <div class=\"ripple-container\"></div>\r\n            </button>\r\n          </ng-container>\r\n\r\n          <mat-card>\r\n              <mat-card-header>\r\n                  <mat-card-title>Total: {{ state.tot.subTot | currency:'USD':'symbol':'1.2-2' }}</mat-card-title>\r\n      \r\n                  <mat-card-subtitle>\r\n                      tax: {{ state.tot.tax | currency:'USD':'symbol':'1.2-2' }}\r\n                      <br />\r\n                at checkout: {{ state.tot.grandTot | currency:'USD':'symbol':'1.2-2' }}\r\n              </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-actions>\r\n              <mat-chip-list>\r\n                <mat-chip *ngFor=\"let item of state.cart\" [removable]=\"true\" (removed)=\"remove(item)\">{{ item.name }}\r\n                  <mat-icon matChipRemove>cancel</mat-icon>\r\n                </mat-chip>\r\n              </mat-chip-list>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        <hr />\r\n   \r\n      </ng-container>\r\n    -->\r\n\r\n\r\n      <div class=\"row\"> \r\n\r\n        <div class=\"col-md-3\" >\r\n          <div class=\"navbar-wrapper\">\r\n            <a class=\"navbar-brand\"> cloud ERP</a>\r\n          </div>\r\n      \r\n          <div class=\"logo-img\">\r\n            <img src=\"/assets/img/waveslogo.jpg\" height=\"200\" width=\"200\"/>\r\n        </div>\r\n        \r\n        \r\n        </div>\r\n\r\n        <div class=\"col-md-3\" >\r\n\r\n          <app-login></app-login>\r\n        </div>\r\n        <div class=\"col-md-1\" >\r\n\r\n        \r\n        </div>\r\n        <div class=\"col-md-4\" >\r\n          <app-new-user></app-new-user>\r\n            \r\n        </div>\r\n        <div class=\"col-md-1\" >\r\n\r\n        \r\n        </div>\r\n            <!--\r\n                <div class=\"col-md-4\" *ngFor=\"let product of posts\">\r\n                <div class=\"card card-chart\">\r\n                    <div class=\"card-header card-header-success\">\r\n                      <img  width=\"50\" height=\"50\" src={{product.url}}>\r\n                      Vendedor: {{product.postedBy.username}}\r\n  \r\n                    </div>\r\n                    <div class=\"card-body\">\r\n  \r\n                      <p class=\"card-category\">\r\n  \r\n                          <span class=\"text-success\">\r\n                              <img  width=\"200\" height=\"200\" src={{product.url}}>\r\n                          </span> \r\n                      </p>    \r\n                          <h4 class=\"card-title\">{{product.id}} - {{product.description}}</h4>\r\n  \r\n                      \r\n                      \r\n  \r\n                        <p class=\"card-category\">\r\n                            <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i>  \r\n                            </span> Precio: ${{product.precio}} \r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                      \r\n                      <div class=\"stats\">\r\n  \r\n                          <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(product)\">\r\n                              <mat-icon>add_shopping_cart</mat-icon>\r\n                              Add to cart\r\n                            </button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n              -->\r\n        </div> \r\n     \r\n     \r\n      \r\n  </div>\r\n  </div>\r\n  ");

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
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/shopping-cart.service */ "K5n9");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../material/material.module */ "hctd");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../services/login.service */ "6Cq0");
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
//import { CartComponent } from '../../cart/cart.component';
//import { CheckoutDialog } from '../../checkout/checkout.component';
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
                _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
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
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"], _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartService"], _services_login_service__WEBPACK_IMPORTED_MODULE_18__["LoginService"]],
        })
    ], HomeLayoutModule);
    return HomeLayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-home-layout-home-layout-module.js.map