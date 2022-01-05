(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "0Wcm":
/*!*******************************************************!*\
  !*** ./src/app/facturacion/facturacion.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3R1cmFjaW9uL2ZhY3R1cmFjaW9uLmNvbXBvbmVudC5jc3MifQ== */");

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

/***/ "8gRy":
/*!*****************************************************!*\
  !*** ./src/app/new-client/new-client.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jbGllbnQvbmV3LWNsaWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "9fMs":
/*!****************************************************!*\
  !*** ./src/app/new-client/new-client.component.ts ***!
  \****************************************************/
/*! exports provided: NewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClientComponent", function() { return NewClientComponent; });
/* harmony import */ var _raw_loader_new_client_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./new-client.component.html */ "jrHm");
/* harmony import */ var _new_client_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-client.component.css */ "8gRy");
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



var NewClientComponent = /** @class */ (function () {
    function NewClientComponent() {
    }
    NewClientComponent.prototype.ngOnInit = function () {
    };
    NewClientComponent.ctorParameters = function () { return []; };
    NewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-client',
            template: _raw_loader_new_client_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_new_client_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NewClientComponent);
    return NewClientComponent;
}());



/***/ }),

/***/ "BSfh":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracion/configuracion.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Edit Configuracion</h4>\n                        <p class=\"card-category\">Complete your profile</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Company (disabled)\" disabled>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Username\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Email address\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Last Name\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Adress\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"City\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Country\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                  <label>About Me</label>\n                                  <mat-form-field class=\"example-full-width\">\n                                     <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                                   </mat-form-field>\n                                    <!-- <div class=\"form-group\">\n  \n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                            <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                        </div>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n           \n        </div>\n    </div>\n  </div>\n  ");

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

/***/ "D4tt":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/facturacion/facturacion.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <!--\n        <a class=\"nav-link\" [routerLink]=\"['/admin/admin/new-product']\">\n            <i class=\"material-icons\">login</i>\n            <p>\n                <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n        </a> -->\n        <div class=\"row\">\n       \n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Facturacion</h4>\n                        <p class=\"card-category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Id</th>\n                                <th>Serie</th>\n                                <th>Folio</th>\n                                <th>Importe</th>\n                                <th>Cliente</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let product of posts\" >\n                                    <td>{{ product.id }}</td>\n                                    <td>{{ product.serie }}</td>\n                                    <td>{{ product.folio }}</td>\n                                    <td>{{ product.total }}</td>\n                                    <td>{{ product.postedBy.username }}</td>\n                                </tr>\n                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ");

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

/***/ "Ghqu":
/*!*************************************************!*\
  !*** ./src/app/clientes/clientes.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n\n   \n  <div class=\"container-fluid\">\n\n    <ng-container *ngIf=\"cartState$ | async as state\">\n      <form class=\"navbar-form\"> \n        <ng-container *ngIf=\"user\">\n\n        Bienvenido: <b>{{user}}</b> \n\n        Cerrar Sesion\n\n        <button mat-raised-button (click)=\"logout()\" class=\"btn btn-white btn-round btn-just-icon\">\n           <i class=\"material-icons\">login</i>\n           <div class=\"ripple-container\"></div>\n        </button>\n\n\n        </ng-container>\n        \n        \n      </form> \n\n      <ng-container *ngIf=\"user\">\n\n        <app-cart [state]=\"state\"></app-cart> \n      </ng-container>\n<!--\n      <ng-container *ngIf=\"!user\"> \n        Login para Comprar\n        <button mat-raised-button (click)=\"checkout()\" class=\"btn btn-white btn-round btn-just-icon\">\n           <i class=\"material-icons\">login</i>\n           <div class=\"ripple-container\"></div>\n        </button>\n\n        o crear Nuevo usuario\n        <button mat-raised-button (click)=\"newuser()\" class=\"btn btn-white btn-round btn-just-icon\">\n           <i class=\"material-icons\">login</i>\n           <div class=\"ripple-container\"></div>\n        </button>\n      </ng-container>\n    -->\n    <mat-card>\n      <mat-card-header>\n          <mat-card-title>Total: {{ state.tot.subTot | currency:'USD':'symbol':'1.2-2' }}</mat-card-title>\n\n          <mat-card-subtitle>\n              tax: {{ state.tot.tax | currency:'USD':'symbol':'1.2-2' }}\n              <br />\n        at checkout: {{ state.tot.grandTot | currency:'USD':'symbol':'1.2-2' }}\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-actions>\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let item of state.cart\" [removable]=\"true\" (removed)=\"remove(item)\">{{ item.name }}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </mat-card-actions>\n  </mat-card>\n    <hr />\n<!--\n    <mat-card *ngFor=\"let item of state.store\">\n          <mat-card-header>\n              {{ item.name }}\n          </mat-card-header>\t\t\n      <mat-card-subtitle>\n        \n        <ul>\n          <li>{{ item.details }}</li>\n          <li>{{ item.price | currency:'USD':'symbol':'1.2-2' }}</li>\n        </ul>\n      </mat-card-subtitle>\n      <mat-card-actions>\n  \n          <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(item)\">\n        <mat-icon>add_shopping_cart</mat-icon>\n        Add to cart\n      </button>\n      </mat-card-actions>\n    </mat-card>\n  -->\n  </ng-container>\n  <div class=\"input-group no-border\">\n    <input type=\"text\" [(ngModel)]=\"valor\" name=\"valor\" class=\"form-control\" placeholder=\"Producto o Codigo de Barras...\">\n    <button mat-raised-button (click)=\"search()\" class=\"btn btn-white btn-round btn-just-icon\">\n        <i class=\"material-icons\">search</i>\n        <div class=\"ripple-container\"></div>\n    </button>\n    \n</div>\n  \n  <div class=\"row\"> \n  \n     \n            \n    <div class=\"col-md-2\" *ngFor=\"let product of posts\">\n    <div class=\"card card-chart\">\n        <!--     \n           <div class=\"card-header card-header-success\">\n              <img  width=\"50\" height=\"50\" src={{product.url}}>\n          Vendedor: {{product.postedBy.username}}\n\n        </div>\n         -->\n        <div class=\"card-body\">\n\n          <p class=\"card-category\">\n\n              <span class=\"text-success\">\n                  <img  width=\"120\" height=\"120\" src={{product.url}}>\n              </span> \n          </p>    \n              <h4 class=\"card-title\">{{product.id}} - {{product.description}}</h4>\n\n          \n          \n\n            <p class=\"card-category\">\n                <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i>  \n                </span> Precio: ${{product.precio}} \n            </p>\n        </div>\n        <div class=\"card-footer\">\n          \n          <div class=\"stats\">\n\n              <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(product)\">\n                  <mat-icon>add_shopping_cart</mat-icon>\n                  Add to cart\n                </button>\n              <!--\n              <i class=\"material-icons text-danger\">warning</i>\n              <a href=\"javascript:void(0)\"> Comprar </a>\n          -->\n          </div>\n        </div>\n    </div>\n    </div>\n  \n</div> \n   \n   \n    \n</div>\n</div>\n");

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

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ "Zfkz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/storage.service */ "61FP");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../products/products.component */ "ziXE");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../new-product/new-product.component */ "dLVS");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../services/shopping-cart.service */ "K5n9");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../material/material.module */ "hctd");
/* harmony import */ var _facturacion_facturacion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../facturacion/facturacion.component */ "sTcI");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../clientes/clientes.component */ "elN/");
/* harmony import */ var _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../configuracion/configuracion.component */ "VQjA");
/* harmony import */ var _new_client_new_client_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../new-client/new-client.component */ "9fMs");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../services/login.service */ "6Cq0");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../cart/cart.component */ "c2A7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { UserProfileComponent } from '../../user-profile/user-profile.component';




//import { NotificationsComponent } from '../../notifications/notifications.component';







//import {NewUserComponent } from '../../new-user/new-user.component';
//import {LoginComponent } from '../../login/login.component';



//import { CarritocomprasComponent } from '../../carritocompras/carritocompras.component';

//import { CartComponent } from '../../cart/cart.component';
//import { CheckoutDialog } from '../../checkout/checkout.component';







var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                // UserProfileComponent,
                // NewUserComponent,
                _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_19__["NewProductComponent"],
                //LoginComponent,
                _products_products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_6__["TableListComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_9__["MapsComponent"],
                //NotificationsComponent,
                _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_10__["UpgradeComponent"],
                //CarritocomprasComponent,
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__["CartComponent"],
                //CheckoutDialog,
                _facturacion_facturacion_component__WEBPACK_IMPORTED_MODULE_22__["FacturacionComponent"],
                _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_23__["ClientesComponent"],
                _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_24__["ConfiguracionComponent"],
                _new_client_new_client_component__WEBPACK_IMPORTED_MODULE_25__["NewClientComponent"]
            ],
            providers: [_services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"], _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_20__["ShoppingCartService"], _services_login_service__WEBPACK_IMPORTED_MODULE_26__["LoginService"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
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

/***/ "MJcM":
/*!***********************************************************!*\
  !*** ./src/app/configuracion/configuracion.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNpb24vY29uZmlndXJhY2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
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
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(graphqlProductsService, shoppingCartService, loginService, dialog, storageService) {
        this.graphqlProductsService = graphqlProductsService;
        this.shoppingCartService = shoppingCartService;
        this.loginService = loginService;
        this.dialog = dialog;
        this.storageService = storageService;
        this.cartState$ = this.shoppingCartService.state$;
    }
    DashboardComponent.prototype.addItemToCart = function (item) {
        //alert(JSON.stringify(item));
        var myItem = new _models_CartItem__WEBPACK_IMPORTED_MODULE_6__["ShopItem"]();
        myItem.id = item.id;
        myItem.name = item.description;
        myItem.price = item.precio;
        this.shoppingCartService.addCartItem(myItem);
    };
    DashboardComponent.prototype.checkout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '400px',
        });
    };
    DashboardComponent.prototype.logout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '400px',
        });
    };
    DashboardComponent.prototype.newuser = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_10__["NewUserComponent"], {
            // data: { state: this.state }, // now uses the observable
            height: '450px',
            width: '400px',
        });
    };
    DashboardComponent.prototype.search = function () {
        alert(this.valor);
        this.buscar(this.valor);
    };
    DashboardComponent.prototype.buscar = function (valor) {
        var _this = this;
        this.querySubscription = this.graphqlProductsService.links(valor)
            .valueChanges
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).links;
            console.log(JSON.stringify(_this.posts));
        });
    };
    DashboardComponent.prototype.remove = function (item) {
        this.shoppingCartService.removeCartItem(item);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        /*
            this.querySubscription = this.loginService.getData().subscribe(data => {
              alert("print data"+ data);
              this.user = data.user;
        
              this.token = data.token;
              console.log("user: " + this.user);
        
              console.log("token: " + this.token);
            });
        */
        this.user = this.storageService.getSession("user");
        this.token = this.storageService.getSession("token");
        this.buscar("-");
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
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
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
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
    DashboardComponent.ctorParameters = function () { return [
        { type: _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"] },
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VQjA":
/*!**********************************************************!*\
  !*** ./src/app/configuracion/configuracion.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfiguracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionComponent", function() { return ConfiguracionComponent; });
/* harmony import */ var _raw_loader_configuracion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./configuracion.component.html */ "BSfh");
/* harmony import */ var _configuracion_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuracion.component.css */ "MJcM");
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



var ConfiguracionComponent = /** @class */ (function () {
    function ConfiguracionComponent() {
    }
    ConfiguracionComponent.prototype.ngOnInit = function () {
    };
    ConfiguracionComponent.ctorParameters = function () { return []; };
    ConfiguracionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-configuracion',
            template: _raw_loader_configuracion_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_configuracion_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ConfiguracionComponent);
    return ConfiguracionComponent;
}());



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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkout/checkout.component */ "IiZn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ShoppingCartService, CartItem } from '../../services/shopping-cart.service';


var CartComponent = /** @class */ (function () {
    function CartComponent(
    /*private shoppingCartService: ShoppingCartService,*/
    dialog) {
        this.dialog = dialog;
    }
    CartComponent.prototype.checkout = function () {
        // this.shoppingCartService.checkout();
        var dialogRef = this.dialog.open(_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutDialog"], {
            // data: { state: this.state }, // now uses the observable
            height: '400px',
            width: '600px',
        });
    };
    CartComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
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
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CartComponent);
    return CartComponent;
}());



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

/***/ "elN/":
/*!************************************************!*\
  !*** ./src/app/clientes/clientes.component.ts ***!
  \************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./clientes.component.html */ "uhdK");
/* harmony import */ var _clientes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.component.css */ "Ghqu");
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




var ClientesComponent = /** @class */ (function () {
    function ClientesComponent(graphqlProductsService) {
        this.graphqlProductsService = graphqlProductsService;
    }
    ClientesComponent.prototype.ngOnInit = function () {
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
    ClientesComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    ClientesComponent.ctorParameters = function () { return [
        { type: _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlProductsService"] }
    ]; };
    ClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-clientes',
            template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_clientes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlProductsService"]])
    ], ClientesComponent);
    return ClientesComponent;
}());



/***/ }),

/***/ "jrHm":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-client/new-client.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">New Cliente</h4>\n                        <p class=\"card-category\">Complete your profile</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Company (disabled)\" disabled>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Username\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Email address\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Last Name\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Adress\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"City\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Country\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                  </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                  <label>About Me</label>\n                                  <mat-form-field class=\"example-full-width\">\n                                     <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                                   </mat-form-field>\n                                    <!-- <div class=\"form-group\">\n  \n                                        <div class=\"form-group\">\n                                            <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                            <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                        </div>\n                                    </div> -->\n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"javascript:void(0)\">\n                            <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                        <h4 class=\"card-title\">Alec Thompson</h4>\n                        <p class=\"card-description\">\n                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                        </p>\n                        <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ");

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

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../products/products.component */ "ziXE");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../new-product/new-product.component */ "dLVS");
/* harmony import */ var _facturacion_facturacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../facturacion/facturacion.component */ "sTcI");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clientes/clientes.component */ "elN/");
/* harmony import */ var _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuracion/configuracion.component */ "VQjA");
/* harmony import */ var _new_client_new_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../new-client/new-client.component */ "9fMs");







var AdminLayoutRoutes = [
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
    { path: 'admin/dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'admin/facturacion', component: _facturacion_facturacion_component__WEBPACK_IMPORTED_MODULE_3__["FacturacionComponent"] },
    { path: 'admin/productos', component: _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"] },
    { path: 'admin/clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_4__["ClientesComponent"] },
    { path: 'admin/configuracion', component: _configuracion_configuracion_component__WEBPACK_IMPORTED_MODULE_5__["ConfiguracionComponent"] },
    { path: 'admin/new-product', component: _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_2__["NewProductComponent"] },
    { path: 'admin/new-client', component: _new_client_new_client_component__WEBPACK_IMPORTED_MODULE_6__["NewClientComponent"] },
];


/***/ }),

/***/ "sTcI":
/*!******************************************************!*\
  !*** ./src/app/facturacion/facturacion.component.ts ***!
  \******************************************************/
/*! exports provided: FacturacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturacionComponent", function() { return FacturacionComponent; });
/* harmony import */ var _raw_loader_facturacion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./facturacion.component.html */ "D4tt");
/* harmony import */ var _facturacion_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facturacion.component.css */ "0Wcm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/graphql.sales.service */ "+ncC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacturacionComponent = /** @class */ (function () {
    function FacturacionComponent(graphqlProductsService) {
        this.graphqlProductsService = graphqlProductsService;
    }
    FacturacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.querySubscription = this.graphqlProductsService.sales()
            .valueChanges
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).sales;
            console.log(JSON.stringify(_this.posts));
        });
    };
    FacturacionComponent.prototype.ngOnDestroy = function () {
        this.querySubscription.unsubscribe();
    };
    FacturacionComponent.ctorParameters = function () { return [
        { type: _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlSalesService"] }
    ]; };
    FacturacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-facturacion',
            template: _raw_loader_facturacion_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_facturacion_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlSalesService"]])
    ], FacturacionComponent);
    return FacturacionComponent;
}());



/***/ }),

/***/ "uhdK":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <a class=\"nav-link\" [routerLink]=\"['/admin/admin/new-client']\">\n            <i class=\"material-icons\">login</i>\n            <p>\n                <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n        </a>\n        <div class=\"row\">\n       \n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Clientes</h4>\n                        <p class=\"card-category\">New clients on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <th>Clave</th>\n                                <th>Url</th>\n                                <th>Descripcion</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let product of posts\" >\n                                    <td>{{ product.id }}</td>\n                                    <td>{{ product.url }}</td>\n                                    <td>{{ product.description }}</td>\n                                </tr>\n                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ");

/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map