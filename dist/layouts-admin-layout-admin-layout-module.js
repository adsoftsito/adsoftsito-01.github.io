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

/***/ "6kf0":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cfdi/cfdi.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Timbrado de CFDi - <b>Serie/Folio A100 - Importe: 100.00</b></h4>\n                        <p class=\"card-category\">Datos del <b>RECEPTOR</b></p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"RFC\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <button mat-raised-button type=\"submit\" class=\"btn btn-warning pull-right\">Buscar</button>\n\n                                  </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Nombre\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Email\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Uso CFDi\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                           \n                            <div class=\"row\">\n                                <div class=\"col-md-2\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Codigo Postal\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <button mat-raised-button type=\"submit\" class=\"btn btn-warning pull-right\">Buscar</button>\n\n                                  </div>\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Colonia\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Estado\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Municipio\" type=\"email\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                           \n                            <button mat-raised-button type=\"submit\" class=\"btn btn-info pull-right\">Actualizar Receptor</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n           \n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\">CFDi - Complementos <b>(Opcional)</b></h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                  <mat-form-field class=\"example-full-width\">\n                                      <input matInput placeholder=\"Seleccione complemento\" >\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <button mat-raised-button type=\"button\" class=\"btn btn-info pull-right\" (click)=\"getCfdi()\">Configurar Complemento</button>\n\n                                </div>\n                                \n                            </div>\n                            \n                            \n                            \n                        </form>\n                    </div>\n                </div>\n            </div>\n           \n        </div>\n    </div>\n  \n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                \n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\"><b>Confirma timbrado de CFDi</b></h4>\n                    </div>\n                \n                    <div class=\"card-body\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"getCfdi()\">Timbrar CFDi</button>\n                    </div>\n                </div>\n            </div>\n           \n        </div>\n    </div>\n  \n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <!--\n        <a class=\"nav-link\" [routerLink]=\"['/admin/admin/new-product']\">\n            <i class=\"material-icons\">login</i>\n            <p>\n                <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n        </a> -->\n\n        <div class=\"input-group no-border\">\n            <input type=\"text\" [(ngModel)]=\"valor\" name=\"valor\" class=\"form-control\" placeholder=\"Buscar cliente, serie, folio, importe ...\">\n            <button mat-raised-button (click)=\"search()\" class=\"btn btn-white btn-round btn-just-icon\">\n                <i class=\"material-icons\">search</i>\n                <div class=\"ripple-container\"></div>\n            </button>\n            \n        </div>\n         \n        <div class=\"row\">\n       \n            <div class=\"col-lg-12 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning\">\n                        <h4 class=\"card-title\">Facturacion</h4>\n                        <p class=\"card-category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                \n                                <th>Id</th>\n                                <th>Ser/Folio</th>\n                                <th>Importe</th>\n                                <th>RFC</th>\n                                <th>Cliente</th>\n                                <th>Actions</th>\n                                \n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let product of posts\" >\n                                    <td>{{ product.id }}</td>\n                                    <td>{{ product.folio }}/{{ product.folio }}</td>\n                                    <td>{{ product.total }}</td>\n                                    <td>{{ product.receptor.rfc }}</td>\n                                    <td>{{ product.receptor.nombre }}</td>\n                                    <td>\n\n                                        <a class=\"nav-link\" [routerLink]=\"['/admin/admin/cfdi/' + product.id]\">\n                                            <i class=\"material-icons\">login</i>\n                                            \n                                        </a>\n\n                                    </td>\n                                </tr>\n                              \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ");

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

/***/ "GE2I":
/*!****************************************!*\
  !*** ./src/app/cfdi/cfdi.component.ts ***!
  \****************************************/
/*! exports provided: CfdiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CfdiComponent", function() { return CfdiComponent; });
/* harmony import */ var _raw_loader_cfdi_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./cfdi.component.html */ "6kf0");
/* harmony import */ var _cfdi_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cfdi.component.css */ "mCK0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cfdi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cfdi.service */ "0vfD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/graphql.sales.service */ "+ncC");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
/* harmony import */ var _models_cfdi33_cfdi33__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/cfdi33/cfdi33 */ "Srm8");
/* harmony import */ var _models_cfdi33_emisor33__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/cfdi33/emisor33 */ "Im3d");
/* harmony import */ var _models_cfdi33_receptor33__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/cfdi33/receptor33 */ "O3fb");
/* harmony import */ var _models_cfdi33_concepto33__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/cfdi33/concepto33 */ "dBMS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CfdiComponent = /** @class */ (function () {
    function CfdiComponent(cfdiService, graphqlSalesService, storageService, route) {
        var _this = this;
        this.cfdiService = cfdiService;
        this.graphqlSalesService = graphqlSalesService;
        this.storageService = storageService;
        this.route = route;
        this.cfdi33 = new _models_cfdi33_cfdi33__WEBPACK_IMPORTED_MODULE_7__["Cfdi33"];
        this.emisor33 = new _models_cfdi33_emisor33__WEBPACK_IMPORTED_MODULE_8__["Emisor33"];
        this.receptor33 = new _models_cfdi33_receptor33__WEBPACK_IMPORTED_MODULE_9__["Receptor33"];
        this.conceptos33 = [];
        this.route.params.subscribe(function (res) {
            console.log(res.id);
            _this.saleid = res.id;
        });
    }
    CfdiComponent.prototype.ngOnInit = function () {
        this.token = this.storageService.getSession("token");
        this.buscarSale(this.saleid);
    };
    CfdiComponent.prototype.buscarSale = function (valor) {
        var _this = this;
        //this.posts = [];
        console.log(this.token);
        console.log(valor);
        //alert(valor);
        this.graphqlSalesService.sale(this.token, valor)
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.sale = JSON.parse(JSON.stringify(data)).sale;
            //this.conceptos = JSON.parse(JSON.stringify(data)).detail;
            console.log(JSON.stringify(_this.sale));
            console.log(_this.sale.sale.id);
            _this.emisorme();
        });
    };
    CfdiComponent.prototype.emisorme = function () {
        var _this = this;
        console.log(this.token);
        this.graphqlSalesService.emisorme(this.token)
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.emisor = JSON.parse(JSON.stringify(data)).emisorme;
            //this.conceptos = JSON.parse(JSON.stringify(data)).detail;
            console.log('emisorme : ');
            console.log(JSON.stringify(_this.emisor));
            _this.fillCfdi33();
        });
    };
    CfdiComponent.prototype.fillCfdi33 = function () {
        var _this = this;
        this.cfdi33.serie = this.sale.sale.serie;
        this.cfdi33.folio = this.sale.sale.folio;
        this.cfdi33.total = this.sale.sale.total;
        this.cfdi33.formapago = this.sale.sale.formapago;
        this.cfdi33.condicionesdepago = this.sale.sale.condicionesdepago;
        this.cfdi33.subtotal = this.sale.sale.subtotal;
        this.cfdi33.descuento = this.sale.sale.descuento;
        this.cfdi33.moneda = this.sale.sale.moneda;
        this.cfdi33.total = this.sale.sale.total;
        this.cfdi33.tipodecomprobante = this.sale.sale.tipodecomprobante;
        this.cfdi33.metodopago = this.sale.sale.total.metodopago;
        this.cfdi33.lugarexpedicion = this.sale.sale.lugarexpedicion;
        // emisor
        this.emisor33.rfc = this.emisor.rfc;
        this.emisor33.nombre = this.emisor.nombre;
        this.emisor33.regimenfiscal = this.emisor.regimenfiscal;
        this.cfdi33.emisor = this.emisor33;
        // receptor
        this.receptor33.rfc = this.sale.sale.receptor.rfc;
        this.receptor33.nombre = this.sale.sale.receptor.nombre;
        this.receptor33.usocfdi = this.sale.sale.receptor.usocfdi;
        this.cfdi33.receptor = this.receptor33;
        // conceptos
        this.sale.detail.forEach(function (item) {
            _this.concepto33 = new _models_cfdi33_concepto33__WEBPACK_IMPORTED_MODULE_10__["Concepto33"];
            _this.concepto33.claveprodserv = item.codigosat;
            _this.concepto33.noidentificacion = item.noidentificacion;
            _this.concepto33.cantidad = item.cantidad;
            _this.concepto33.claveunidad = item.claveunidad;
            _this.concepto33.unidad = "PZA";
            _this.concepto33.descripcion = item.product;
            _this.concepto33.valorunitario = item.precio;
            _this.concepto33.importe = item.importe;
            _this.concepto33.descuento = item.descuento;
            console.log(_this.concepto33);
            _this.conceptos33.push(_this.concepto33);
        });
        this.cfdi33.conceptos = this.conceptos33;
        console.log(JSON.stringify(this.cfdi33));
    };
    CfdiComponent.prototype.getCfdi = function () {
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
    CfdiComponent.ctorParameters = function () { return [
        { type: _services_cfdi_service__WEBPACK_IMPORTED_MODULE_3__["CfdiService"] },
        { type: _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlSalesService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CfdiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cfdi',
            template: _raw_loader_cfdi_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_cfdi_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_cfdi_service__WEBPACK_IMPORTED_MODULE_3__["CfdiService"],
            _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlSalesService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CfdiComponent);
    return CfdiComponent;
}());



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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n\n   \n  <div class=\"container-fluid\">\n\n    <ng-container *ngIf=\"cartState$ | async as state\">\n     <!--\n      <form class=\"navbar-form\"> \n        <ng-container *ngIf=\"user\">\n\n        Bienvenido: <b>{{user}}</b> \n\n        Cerrar Sesion\n\n        <button mat-raised-button (click)=\"logout()\" class=\"btn btn-white btn-round btn-just-icon\">\n           <i class=\"material-icons\">login</i>\n           <div class=\"ripple-container\"></div>\n        </button>\n\n\n        </ng-container>\n        \n        \n      </form> \n    -->\n      <ng-container *ngIf=\"user\">\n\n        <app-cart [state]=\"state\"></app-cart> \n      </ng-container>\n<!--\n      <ng-container *ngIf=\"!user\"> \n        Login para Comprar\n        <button mat-raised-button (click)=\"checkout()\" class=\"btn btn-white btn-round btn-just-icon\">\n           <i class=\"material-icons\">login</i>\n           <div class=\"ripple-container\"></div>\n        </button>\n\n        o crear Nuevo usuario\n        <button mat-raised-button (click)=\"newuser()\" class=\"btn btn-white btn-round btn-just-icon\">\n           <i class=\"material-icons\">login</i>\n           <div class=\"ripple-container\"></div>\n        </button>\n      </ng-container>\n    -->\n    <mat-card>\n      <mat-card-header>\n          <mat-card-title>Total: {{ state.tot.subTot | currency:'USD':'symbol':'1.2-2' }}</mat-card-title>\n\n          <mat-card-subtitle>\n              tax: {{ state.tot.tax | currency:'USD':'symbol':'1.2-2' }}\n              <br />\n        at checkout: {{ state.tot.grandTot | currency:'USD':'symbol':'1.2-2' }}\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-actions>\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let item of state.cart\" [removable]=\"true\" (removed)=\"remove(item)\">{{ item.name }}\n          <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </mat-card-actions>\n  </mat-card>\n    <hr />\n<!--\n    <mat-card *ngFor=\"let item of state.store\">\n          <mat-card-header>\n              {{ item.name }}\n          </mat-card-header>\t\t\n      <mat-card-subtitle>\n        \n        <ul>\n          <li>{{ item.details }}</li>\n          <li>{{ item.price | currency:'USD':'symbol':'1.2-2' }}</li>\n        </ul>\n      </mat-card-subtitle>\n      <mat-card-actions>\n  \n          <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(item)\">\n        <mat-icon>add_shopping_cart</mat-icon>\n        Add to cart\n      </button>\n      </mat-card-actions>\n    </mat-card>\n  -->\n  </ng-container>\n  \n  <div class=\"input-group no-border\">\n    <input type=\"text\" [(ngModel)]=\"valor\" name=\"valor\" class=\"form-control\" placeholder=\"Buscar Producto o Codigo de Barras...\">\n    <button mat-raised-button (click)=\"search()\" class=\"btn btn-white btn-round btn-just-icon\">\n        <i class=\"material-icons\">search</i>\n        <div class=\"ripple-container\"></div>\n    </button>\n    \n  </div>\n  \n  <div class=\"row\"> \n  \n     \n            \n    <div class=\"col-md-2\" *ngFor=\"let product of posts\">\n    <div class=\"card card-chart\">\n        <!--     \n           <div class=\"card-header card-header-success\">\n              <img  width=\"50\" height=\"50\" src={{product.url}}>\n          Vendedor: {{product.postedBy.username}}\n\n        </div>\n         -->\n        <div class=\"card-body\">\n\n          <p class=\"card-category\">\n\n              <span class=\"text-success\">\n                  <img  width=\"120\" height=\"120\" src={{product.url}}>\n              </span> \n          </p>    \n              <h4 class=\"card-title\">{{product.id}} - {{product.description}}</h4>\n\n          \n          \n\n            <p class=\"card-category\">\n                <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i>  \n                </span> Precio: ${{product.precio}} \n            </p>\n        </div>\n        <div class=\"card-footer\">\n          \n          <div class=\"stats\">\n\n              <button mat-flat-button color=\"primary\" role=\"button\" (click)=\"addItemToCart(product)\">\n                  <mat-icon>add_shopping_cart</mat-icon>\n                  Add to cart\n                </button>\n              <!--\n              <i class=\"material-icons text-danger\">warning</i>\n              <a href=\"javascript:void(0)\"> Comprar </a>\n          -->\n          </div>\n        </div>\n    </div>\n    </div>\n  \n</div> \n   \n   \n    \n</div>\n</div>\n");

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
                _this.downloadURL = fileUpload.url;
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

/***/ "Im3d":
/*!***************************************!*\
  !*** ./src/models/cfdi33/emisor33.ts ***!
  \***************************************/
/*! exports provided: Emisor33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emisor33", function() { return Emisor33; });
var Emisor33 = /** @class */ (function () {
    function Emisor33() {
    }
    return Emisor33;
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
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../logout/logout.component */ "n1B2");
/* harmony import */ var _cfdi_cfdi_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../cfdi/cfdi.component */ "GE2I");
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
                _new_client_new_client_component__WEBPACK_IMPORTED_MODULE_25__["NewClientComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_28__["LogoutComponent"],
                _cfdi_cfdi_component__WEBPACK_IMPORTED_MODULE_29__["CfdiComponent"]
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

/***/ "O3fb":
/*!*****************************************!*\
  !*** ./src/models/cfdi33/receptor33.ts ***!
  \*****************************************/
/*! exports provided: Receptor33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Receptor33", function() { return Receptor33; });
var Receptor33 = /** @class */ (function () {
    function Receptor33() {
    }
    return Receptor33;
}());



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
        //alert(this.valor);
        this.buscar(this.valor);
    };
    DashboardComponent.prototype.buscar = function (valor) {
        var _this = this;
        //this.posts = [];
        console.log(this.token);
        console.log(valor);
        // alert(this.user + " : " +  valor + "- " + this.token);
        //this.querySubscription = 
        this.graphqlProductsService.links(this.token, valor)
            //.valueChanges
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).links;
            console.log(JSON.stringify(_this.posts));
            //  this.querySubscription.unsubscribe();
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
        this.buscar("*");
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        //this.querySubscription.unsubscribe();
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

/***/ "Srm8":
/*!*************************************!*\
  !*** ./src/models/cfdi33/cfdi33.ts ***!
  \*************************************/
/*! exports provided: Cfdi33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cfdi33", function() { return Cfdi33; });
var Cfdi33 = /** @class */ (function () {
    function Cfdi33() {
    }
    return Cfdi33;
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

/***/ "dBMS":
/*!*****************************************!*\
  !*** ./src/models/cfdi33/concepto33.ts ***!
  \*****************************************/
/*! exports provided: Concepto33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concepto33", function() { return Concepto33; });
var Concepto33 = /** @class */ (function () {
    function Concepto33() {
    }
    return Concepto33;
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
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
    function NewProductComponent(graphqlProduct, router, storageService, uploadService, formBuilder) {
        this.graphqlProduct = graphqlProduct;
        this.router = router;
        this.storageService = storageService;
        this.uploadService = uploadService;
        this.formBuilder = formBuilder;
        this.myProduct = new _models_productapi__WEBPACK_IMPORTED_MODULE_3__["ProductApi"]();
        this.codigoSatSeleccionado = "";
        this.claveUnidadSeleccionado = "";
        this.marcaSeleccionada = "";
        this.lineaSeleccionada = "";
        this.inputClaveUnidad = "";
        this.inputCodigoSat = "";
        this.inputMarca = "";
        this.inputLinea = "";
        this.check = {
            fieldsEmptyText: function (field) {
                var isValidated = false;
                for (var key in field) {
                    if (field[key] === undefined)
                        isValidated = true;
                    field[key] = field[key].replace("&nbsp;", "");
                    field[key] = field[key] == undefined ? "" : field[key];
                    if (!field[key] || 0 === field[key].trim().length)
                        isValidated = true;
                }
                return isValidated;
            },
            fieldsEmpty: function (field) {
                var isValidated = false;
                for (var key in field) {
                    console.log("verificando vacios " + field[key] + "-" + key);
                    if (field[key] == parseFloat(field[key])) {
                        field[key] = parseFloat(field[key]);
                    }
                    if (isNaN(field[key])) {
                        isValidated = true;
                        break;
                    }
                    if (field[key] == null) {
                        isValidated = true;
                        break;
                    }
                    if (field[key] == undefined) {
                        isValidated = true;
                        break;
                    }
                    if (field[key] == field.toString()) {
                        if (field[key].toString().trim().length() == 0) {
                            isValidated = true;
                            break;
                        }
                    }
                }
                return isValidated;
            },
            isValidText: function (text) {
                var pattern = new RegExp("/^[0-9a-zA-Z]+$/");
                return !!pattern.test(text);
            },
            isValidNumber: function (num) {
                if (num === undefined || num === null)
                    return false;
                if (typeof num !== "number")
                    return false;
                if (Math.sign(num) === -1)
                    return false;
                var pattern = new RegExp("/^[0-9]+$/");
                return !!pattern.test(num.toString());
            },
            isValidURL: function (str) {
                var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
                    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
                    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
                    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
                    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                    "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
                return !!pattern.test(str);
            },
            tax: {
                isFixed: function (value, fixedValue) {
                    // if (value == parseFloat(value)) value = parseFloat(value);
                    if (value === fixedValue)
                        return false;
                    return true;
                },
                isRange: function (value, min, max) {
                    // if (value == parseFloat(value)) value = parseFloat(value);
                    if (value < min || value > max)
                        return false;
                    return true;
                },
            },
        };
        this.windowsSweet = {
            something_went_wrong: function (message) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                    icon: "error",
                    title: "Oops...",
                    text: message,
                });
            },
        };
    }
    NewProductComponent.prototype.ngOnInit = function () {
        this.mytoken = this.storageService.getSession("token");
        this.myProduct.id = 0;
        this.myProduct.codigosat = 2;
        this.formProduct = this.formBuilder.group({
            noidentificacion: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(10)
                ]
            ],
            codigobarras: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                ]
            ],
            description: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(200)
                ]
            ],
            url: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            precio: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            descuento: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            modelo: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            existencias: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            stockmin: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            stockmax: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            trasladoiva: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            trasladoieps: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            retencioniva: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            retencionisr: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
            retencionieps: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required
                ]
            ],
        });
    };
    NewProductComponent.prototype.selectFile = function (event) {
        var _this = this;
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.urlImage = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.event = event;
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
        // this.myProduct.codigosat = parseInt(this.codigoSatSeleccionado);
        this.myProduct.claveunidad = parseInt(this.claveUnidadSeleccionado);
        this.myProduct.marca = parseInt(this.marcaSeleccionada);
        this.myProduct.linea = parseInt(this.lineaSeleccionada);
        /*
             if (
            
               this.check.tax.isFixed(this.myProduct.trasladoiva, 0.0) ||
               this.check.tax.isFixed(this.myProduct.trasladoiva, 0.16) ||
               this.check.tax.isRange(this.myProduct.retencioniva, 0.0, 0.16) ||
               this.check.tax.isFixed(this.myProduct.trasladoiva, 0.08) ||
               
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.265) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.265)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.3) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.265)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.53) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.53)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.5) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.5)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 1.6) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 1.6)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.304) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.304)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.25) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.25)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.09) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.09)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.08) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.08)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.07) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.07)) ||
               (this.check.tax.isFixed(this.myProduct.trasladoieps, 0.06) &&
                 this.check.tax.isFixed(this.myProduct.retencionieps, 0.06)) ||
               this.check.tax.isFixed(this.myProduct.trasladoieps, 0.03) ||
               this.check.tax.isFixed(this.myProduct.trasladoieps, 0.0) ||
               this.check.tax.isRange(this.myProduct.trasladoieps, 0.0, 59.1449) ||
               this.check.tax.isRange(this.myProduct.retencionieps, 0.0, 0.35)
             ) {
              
              
       
               alert(JSON.stringify(this.myProduct));
               this.graphqlProduct
                 .createLink(
                   this.mytoken,
                   this.myProduct.url,
                   this.myProduct.id,
                   this.myProduct.noidentificacion,
                   this.myProduct.precio,
                   this.myProduct.descuento,
                   this.myProduct.retencionieps,
                   this.myProduct.retencioniva,
                   this.myProduct.retencionisr,
                   this.myProduct.trasladoiva,
                   this.myProduct.trasladoieps,
                   this.myProduct.codigobarras,
                   this.myProduct.existencias,
                   this.myProduct.stockmin,
                   this.myProduct.stockmax,
                   this.myProduct.codigosat,
                   this.myProduct.claveunidad,
                   this.myProduct.modelo,
                   this.myProduct.description,
                   this.myProduct.marca,
                   this.myProduct.linea
                 )
                 .subscribe(
                   ({ data }) => {
                     console.info("product created :  ", data);
                     this.router.navigate(["/admin/admin/productos"]);
                   },
                   (error) => {
                     console.error("there was an error sending the query", error);
                   },
                 );
             }else{
               alert("Verifique los impuestos");
             }
           }
           */
    };
    NewProductComponent.prototype.searchClaveUnidad = function () {
        var _this = this;
        this.graphqlProduct
            .claveunidades(this.mytoken, this.inputClaveUnidad)
            .subscribe(function (_a) {
            var data = _a.data;
            _this.resultQueryClaveUnidad = JSON.parse(JSON.stringify(data)).claveunidades;
            _this.claveUnidadSeleccionado = "";
            //console.log("Clave de la unidad",JSON.stringify(this.resultQueryClaveUnidad));
        });
    };
    NewProductComponent.prototype.searchCodigoSat = function () {
        var _this = this;
        this.graphqlProduct
            .claveprodserv(this.mytoken, this.inputCodigoSat)
            .subscribe(function (_a) {
            var data = _a.data;
            _this.resultQueryClaveProdServ = JSON.parse(JSON.stringify(data)).claveprodserv;
            _this.codigoSatSeleccionado = "";
        });
    };
    NewProductComponent.prototype.searchMarcas = function () {
        var _this = this;
        console.log(this.mytoken);
        this.graphqlProduct
            .marcas(this.mytoken, this.inputMarca)
            .subscribe(function (_a) {
            var data = _a.data;
            _this.resultQueryMarca = JSON.parse(JSON.stringify(data)).marcas;
            _this.marcaSeleccionada = "";
            //  console.log("Marca: ",JSON.stringify(this.resultQueryMarca));
        });
    };
    NewProductComponent.prototype.SearchLineas = function () {
        var _this = this;
        this.graphqlProduct
            .lineas(this.mytoken, this.inputLinea)
            .subscribe(function (_a) {
            var data = _a.data;
            _this.lineaSeleccionada = "";
            _this.resultQueryLinea = JSON.parse(JSON.stringify(data)).lineas;
            // console.log("Linea: ",JSON.stringify(this.resultQueryLinea));
        });
    };
    NewProductComponent.prototype.clearFieldsProducts = function () {
        this.event.srcElement.value = null;
        this.urlImage = null;
        this.myProduct.url = "";
        this.myProduct.id = 0;
        this.myProduct.noidentificacion = "";
        this.myProduct.precio = 0;
        this.myProduct.descuento = 0;
        this.myProduct.retencionieps = 0;
        this.myProduct.retencioniva = 0;
        this.myProduct.retencionisr = 0;
        this.myProduct.trasladoiva = 0;
        this.myProduct.trasladoieps = 0;
        this.myProduct.codigobarras = "";
        this.myProduct.existencias = 0;
        this.myProduct.stockmin = 0;
        this.myProduct.stockmax = 0;
        this.myProduct.codigosat = 2;
        this.myProduct.claveunidad = 0;
        this.myProduct.modelo = "";
        this.myProduct.description = "";
        this.myProduct.marca = 0;
        this.myProduct.linea = 0;
    };
    NewProductComponent.ctorParameters = function () { return [
        { type: _services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] }
    ]; };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-new-product",
            template: _raw_loader_new_product_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_new_product_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_products_service__WEBPACK_IMPORTED_MODULE_4__["GraphqlProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])
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
        this.querySubscription = this.graphqlProductsService.links("token", "-")
            //.valueChanges
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

/***/ "mCK0":
/*!*****************************************!*\
  !*** ./src/app/cfdi/cfdi.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NmZGkvY2ZkaS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "pMWV":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-product/new-product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n \n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-danger row\">\n            <h4 class=\"card-title\">Product Nuevo</h4>\n            <p class=\"card-category\">Completa informacion del producto</p>\n          </div>\n\n         \n          <div class=\"card-body\">\n            <form >\n              <div class=\"d-flex justify-content-end p-2\">\n                <button\n                  mat-raised-button\n                  type=\"button\"\n                  style=\"float: right\"\n                  class=\"btn btn-sm bg-danger\"\n                  (click)=\"addProduct()\"\n                >\n                  <i class=\"material-icons\">save</i>\n                </button>\n              </div>\n    \n              <div class=\"row\">\n                <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xs-6\">\n                  <label>\n                    <input\n                      type=\"file\"\n                      class=\"text-nowrap text-truncate\"\n                      (change)=\"selectFile($event)\"\n                    />\n                  </label>\n\n                  <button\n                    class=\"btn btn-success btn-sm\"\n                    [disabled]=\"!selectedFiles\"\n                    (click)=\"upload()\"\n                  >\n                    Upload\n                  </button>\n\n                  <div *ngIf=\"currentFileUpload\" class=\"progress mt-2\">\n                    <div\n                      class=\"progress-bar progress-bar-info\"\n                      role=\"progressbar\"\n                      attr.aria-valuenow=\"{{ percentage }}\"\n                      aria-valuemin=\"0\"\n                      aria-valuemax=\"100\"\n                      [ngStyle]=\"{ width: percentage + '%' }\"\n                    >\n                      {{ percentage }}%\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xs-6\">\n                  <div\n                    class=\"d-flex justify-content-around shadow\"\n                    style=\"max-width: 80%; max-height: 100%\"\n                  >\n                    <img\n                      [src]=\"urlImage\"\n                      alt=\"Vista previa\"\n                      width=\"80%\"\n                      height=\"80%\"\n                    />\n                  </div>\n                </div>\n\n                <div>\n                  <input type=\"hidden\" name=\"id\" value=\"{{ myProduct.id }}\" [(ngModel)]=\"myProduct.id\" />\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xs-6\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Número de identificación\"\n                      type=\"text\"\n                      [(ngModel)]=\"myProduct.noidentificacion\"\n                      name=\"noidentificacion\"\n                      formControlName=\"noidentificacion\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xs-6\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Código de barras\"\n                      type=\"text\"\n                      [(ngModel)]=\"myProduct.codigobarras\"\n                      name=\"codigobarras\"\n                      formControlName=\"codigobarras\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-12 col-xs-12\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Descripción\"\n                      type=\"text\"\n                      [(ngModel)]=\"myProduct.description\"\n                      name=\"description\"\n                      formControlName=\"description\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-12 col-xs-12\" >\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"url imagen\"\n                      type=\"url\"\n                      value=\"{{ uploadService.downloadURL  }}\"\n                      [(ngModel)]=\"myProduct.url\"\n                      name=\"url\"\n                      formControlName=\"url\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Precio\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.precio\"\n                      name=\"precio\"\n                      formControlName=\"precio\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Descuento\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.descuento\"\n                      name=\"descuento\"\n                      formControlName=\"descuento\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Modelo\"\n                      typo=\"text\"\n                      [(ngModel)]=\"myProduct.modelo\"\n                      name=\"modelo\"\n                      formControlName=\"modelo\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <!--============= Marcas ============ -->\n\n                <div class=\"col-10 col-sm-5 col-md-5 col-lg-5 col-xs-5\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      type=\"search\"\n                      placeholder=\"Buscar marca.\"\n                      [(ngModel)]=\"inputMarca\"\n                      name=\"inputMarca\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-2 col-sm-1 col-md-1 col-lg-1 col-xs-1\">\n                  <button\n                    mat-raised-button\n                    type=\"button\"\n                    style=\"float: right\"\n                    class=\"btn btn-sm bg-primary\"\n                    (click)=\"searchMarcas()\"\n                  >\n                    <i class=\"material-icons\">search</i>\n                  </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xs-6\">\n                  <p>\n                    <select\n                      class=\"form-select form-select-sm form-control\"\n                      name=\"marcaSeleccionada\"\n                      [(ngModel)]=\"marcaSeleccionada\"\n                      \n                    >\n                      <option value=\"\">Elija una Marca</option>\n                      <option\n                        [value]=\"marca.id\"\n                        *ngFor=\"let marca of resultQueryMarca\"\n                      >\n                        {{ marca.description }}\n                      </option>\n                    </select>\n                  </p>\n                </div>\n                <!-- \n                <div class=\"col-4 col-sm-2 col-md-2 col-lg-2 col-xs-2\" *ngIf=\"resultQueryMarca\" >\n                  <div *ngFor=\"let marca of resultQueryMarca\" >\n                  <label class=\"form-control\" *ngIf=\"marca.id == marcaSeleccionada\">{{\n                    marca.id\n                  }}</label>\n                </div>\n                </div>\n                -->\n\n                <!--============= Linea ============   -->\n\n                <div class=\"col-10 col-sm-5 col-md-5 col-lg-5 col-xs-5\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Buscar linea.\"\n                      type=\"search\"\n                      [(ngModel)]=\"inputLinea\"\n                      name=\"inputLinea\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-2 col-sm-1 col-md-1 col-lg-1 col-xs-1\">\n                  <button\n                    mat-raised-button\n                    type=\"button\"\n                    style=\"float: right\"\n                    class=\"btn btn-sm bg-primary\"\n                    (click)=\"SearchLineas()\"\n                  >\n                    <i class=\"material-icons\">search</i>\n                  </button>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xs-6\">\n                  <p>\n                    <select\n                      class=\"form-select form-select-sm form-control\"\n                      name=\"lineaSeleccionada\"\n                      [(ngModel)]=\"lineaSeleccionada\"\n                    \n                    >\n                      <option value=\"\">Elija una Linea</option>\n                      <option\n                        [value]=\"linea.id\"\n                        *ngFor=\"let linea of resultQueryLinea\"\n                      >\n                        {{ linea.description }}\n                      </option>\n                    </select>\n                  </p>\n                </div>\n\n                <!-- \n                <div class=\"col-4 col-sm-2 col-md-2 col-lg-2 col-xs-2\" *ngIf=\"resultQueryLinea\" >\n                  <div *ngFor=\"let linea of resultQueryLinea\" >\n\n                  <label class=\"form-control\" *ngIf=\"linea.id == lineaSeleccionada\">{{\n                    linea.id\n                  }}</label>\n                </div>\n                </div>\n                -->\n\n      \n\n\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Existencias\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.existencias\"\n                      name=\"existencias\"\n                      formControlName=\"existencias\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Stock Minimo\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.stockmin\"\n                      name=\"stockmin\"\n                      formControlName=\"stockmin\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Stock Maximo\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.stockmax\"\n                      name=\"stockmax\"\n                      formControlName=\"stockmax\"\n                    />\n                  </mat-form-field>\n                </div>\n                <!--============= Código sat ============ -->\n\n                <div class=\"col-10 col-sm-5 col-md-5 col-lg-5 col-xs-5\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Buscar código sat..\"\n                      type=\"search\"\n                      [(ngModel)]=\"inputCodigoSat\"\n                      name=\"inputCodigoSat\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-2 col-sm-1 col-md-1 col-lg-1 col-xs-1\">\n                  <button\n                    mat-raised-button\n                    type=\"button\"\n                    style=\"float: right\"\n                    class=\"btn btn-sm bg-primary\"\n                    (click)=\"searchCodigoSat()\"\n                  >\n                    <i class=\"material-icons\">search</i>\n                  </button>\n                </div>\n\n                <div class=\"col-8 col-sm-4 col-md-4 col-lg-4 col-xs-4\">\n                  <p>\n                    <select\n                      class=\"form-select form-select-sm form-control\"\n                      name=\"codigoSatSeleccionado\"\n                      [(ngModel)]=\"codigoSatSeleccionado\"\n                     \n                    >\n                      <option value=\"\">Elija un código</option>\n                      <option\n                        [value]=\"codigoSat.id\"\n                        *ngFor=\"let codigoSat of resultQueryClaveProdServ\"\n                      >\n                        {{ codigoSat.descripcion }}\n                      </option>\n                    </select>\n                  </p>\n                </div>\n\n                <div class=\"col-4 col-sm-2 col-md-2 col-lg-2 col-xs-2\" *ngIf=\"resultQueryClaveProdServ\" >\n                  <div *ngFor=\"let codigoSat of resultQueryClaveProdServ\" >\n\n                  <label class=\"form-control labelCodigoSat\" *ngIf=\"codigoSat.id == codigoSatSeleccionado\">{{\n                    codigoSat.claveprodserv\n                  }}</label>\n                </div>\n                </div>\n\n                <!--============= Código de la unidad ============ -->\n\n                <div class=\"col-10 col-sm-5 col-md-5 col-lg-5 col-xs-5\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Buscar clave, Ej;Pieza,Litros,etc.\"\n                      type=\"search\"\n                      [(ngModel)]=\"inputClaveUnidad\"\n                      name=\"inputClaveUnidad\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-2 col-sm-1 col-md-1 col-lg-1 col-xs-1\">\n                  <button\n                    mat-raised-button\n                    type=\"button\"\n                    style=\"float: right\"\n                    class=\"btn btn-sm bg-primary\"\n                    (click)=\"searchClaveUnidad()\"\n                  >\n                    <i class=\"material-icons\">search</i>\n                  </button>\n                </div>\n\n                <div class=\"col-8 col-sm-4 col-md-4 col-lg-4 col-xs-4\">\n                  <p>\n                    <select\n                      class=\"form-select form-select-sm form-control\"\n                      name=\"claveUnidadSeleccionado\"\n                      [(ngModel)]=\"claveUnidadSeleccionado\"\n                     \n                    >\n                      <option value=\"\">Elija una clave</option>\n                      <option\n                        [value]=\"claveUnidad.id\"\n                        *ngFor=\"let claveUnidad of resultQueryClaveUnidad\"\n                      >\n                        {{ claveUnidad.nombre }}\n                      </option>\n                    </select>\n                  </p>\n                </div>\n\n                <div class=\"col-4 col-sm-2 col-md-2 col-lg-2 col-xs-2\" *ngIf=\"resultQueryClaveUnidad\" >\n                  <div *ngFor=\"let claveUnidad of resultQueryClaveUnidad\" >\n\n                  <label class=\"form-control\" *ngIf=\"claveUnidad.id == claveUnidadSeleccionado\">{{\n                    claveUnidad.claveunidad\n                  }}</label>\n                </div>\n                </div>\n\n              \n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Traslado IVA\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.trasladoiva\"\n                      name=\"trasladoiva\"\n                      formControlName=\"trasladoiva\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Traslado IEPS\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.trasladoieps\"\n                      name=\"trasladoieps\"\n                      formControlName=\"trasladoieps\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Retención IVA\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.retencioniva\"\n                      name=\"retencioniva\"\n                      formControlName=\"retencioniva\"\n                    />\n                  </mat-form-field>\n                </div>\n\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Retención ISR\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.retencionisr\"\n                      name=\"retencionisr\"\n                      formControlName=\"retencionisr\"\n                    />\n                  </mat-form-field>\n                </div>\n                <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xs-4\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input\n                      matInput\n                      placeholder=\"Retención IEPS\"\n                      type=\"number\"\n                      [(ngModel)]=\"myProduct.retencionieps\"\n                      name=\"retencionieps\"\n                      formControlName=\"retencionieps\"\n                    />\n                  </mat-form-field>\n                </div>\n\n              </div>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-4 offset-4 p-4 animate__animated animate__fadeInDown\">\n  <h2>Formulario reactivo Angular 11</h2>\n  <form [formGroup]=\"formLogin\" (submit)=\"send()\" class=\"pt-4 pb-4\" errorTailor>\n\n    <!-- ********** INPUT EMAIL ************** -->\n    <div  class=\"mb-3\">\n      <label for=\"email\" class=\"form-label\">Email address</label>\n      <input type=\"text\" class=\"form-control shadow\" id=\"email\" formControlName=\"email\">\n    </div>\n    <!-- ********** INPUT PASSWORD ************** -->\n    <div class=\"mb-3\">\n      <label for=\"password\" class=\"form-label\">Password</label>\n      <input type=\"password\"  class=\"form-control shadow\" id=\"password\" formControlName=\"password\"\n             [controlErrorsTpl]=\"messagePasswordError\">\n    </div>\n    <!-- ********** INPUT COLOR ************** -->\n    <div  class=\"mb-3\" *ngIf=\"formLogin.value?.type === 'carro'\">\n      <label for=\"color\" class=\"form-label\">Color</label>\n      <input type=\"text\" id=\"color\" class=\"form-control shadow\" formControlName=\"color\">\n    </div>\n\n    <!-- ********** INPUT SELECT ************** -->\n    <div class=\"mb-3\">\n      <label for=\"select\" class=\"form-label\">Tipo</label>\n      <select class=\"form-control shadow\" (change)=\"changeType()\" formControlName=\"type\" name=\"select\" id=\"select\">\n        <option value=\"moto\">Moto</option>\n        <option value=\"carro\">Carro</option>\n        <option value=\"ninguno\" selected>Ninguno</option>\n      </select>\n    </div>\n\n    <!-- ********** INPUT GITHUB ************** -->\n    <div class=\"mb-3\">\n      <label for=\"youtube\" class=\"form-label\">Youtube URL</label>\n      <input type=\"text\" class=\"form-control shadow\" id=\"youtube\" formControlName=\"youtube\">\n      <ng-container *ngTemplateOutlet=\"messageYoutubeError;context:{error:formLogin.get('youtube').errors}\"></ng-container>\n    </div>\n    <!-- ********** INPUT PASSWORD ************** -->\n    <div class=\"mb-3 d-flex\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" formControlName=\"terms\" [controlErrorsTpl]=\"mensajeError\"  type=\"checkbox\" value=\"\" id=\"flexCheckDefault\">\n        <label class=\"form-check-label\" for=\"flexCheckDefault\">\n          Terms and Conditions\n        </label>\n      </div>\n\n    </div>\n\n    <!-- ********** BUTTON ************** -->\n    <div class=\"w-100\">\n      <button class=\"btn-primary btn btn-block w-100\" [disabled]=\"formLogin.invalid\">Send</button>\n    </div>\n\n\n    <!--- ********************* RAW CONTENT ***************** --->\n    <div class=\"w-100 pt-4\">\n      <code class=\"w-100\">\n          <b>Estado del formulario:</b> {{formLogin.valid | json}}\n      </code>\n    </div>\n  </form>\n\n</div>\n\n\n<!---- ********************* ZONE TEMPLATES ****************** --->\n\n<ng-template let-error let-text=\"text\" #messagePasswordError>\n<!--  {{ error | json }} {{ text }}-->\n  <span class=\"control-error\">Error:</span>\n  <div *ngIf=\"error?.minlength\">\n    <i>No cumples con los caracteres minimos que son ({{error?.minlength?.requiredLength}}), ingresaste solo: {{error?.minlength?.actualLength}}</i>\n  </div>\n</ng-template>\n\n\n<ng-template let-error let-text=\"text\" #mensajeError> {{ error | json }} {{ text }} </ng-template>\n\n<ng-template #messageYoutubeError let-error=\"error\">\n  <div class=\"control-error\" *ngIf=\"error?.pattern?.requiredPattern\">\n    <span>No es una url correcta</span>\n  </div>\n</ng-template>");

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
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../logout/logout.component */ "n1B2");
/* harmony import */ var _cfdi_cfdi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cfdi/cfdi.component */ "GE2I");









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
    { path: 'admin/logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"] },
    { path: 'admin/cfdi/:id', component: _cfdi_cfdi_component__WEBPACK_IMPORTED_MODULE_8__["CfdiComponent"] },
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
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "61FP");
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
    function FacturacionComponent(graphqlProductsService, storageService) {
        this.graphqlProductsService = graphqlProductsService;
        this.storageService = storageService;
    }
    FacturacionComponent.prototype.ngOnInit = function () {
        this.user = this.storageService.getSession("user");
        this.token = this.storageService.getSession("token");
        this.buscar("*");
    };
    FacturacionComponent.prototype.search = function () {
        //alert(this.valor);
        this.buscar(this.valor);
    };
    FacturacionComponent.prototype.buscar = function (valor) {
        var _this = this;
        //this.posts = [];
        console.log(this.token);
        console.log(valor);
        this.graphqlProductsService.sales(this.token, valor)
            .subscribe(function (_a) {
            var data = _a.data, loading = _a.loading;
            _this.loading = loading;
            _this.posts = JSON.parse(JSON.stringify(data)).sales;
            console.log(JSON.stringify(_this.posts));
        });
    };
    FacturacionComponent.prototype.ngOnDestroy = function () {
        //this.querySubscription.unsubscribe();
    };
    FacturacionComponent.ctorParameters = function () { return [
        { type: _services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlSalesService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    FacturacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-facturacion',
            template: _raw_loader_facturacion_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_facturacion_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_graphql_sales_service__WEBPACK_IMPORTED_MODULE_3__["GraphqlSalesService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
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