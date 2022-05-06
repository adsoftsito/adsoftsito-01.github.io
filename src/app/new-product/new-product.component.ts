<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { ProductApi } from "../../models/productapi";
import { GraphqlProductsService } from "../../services/graphql.products.service";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { FileUploadService } from "../../services/file-upload.service";
import { FileUpload } from "../../models/file-upload";
import Swal from "sweetalert2";
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, Validators, AbstractControl,} from "@angular/forms";

import { NgxSpinnerService } from "ngx-spinner";
import { Validate } from './validate';
@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"],
})
export class NewProductComponent implements OnInit {
  myProduct = new ProductApi();
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  mytoken: any;

  resultQueryClaveProdServ: any;
  resultQueryClaveUnidad: any;
  resultQueryMarca: any;
  resultQueryLinea: any;

  newProductFG: FormGroup;

  urlImage;
  event;

  uploadServiceImgURL;

  constructor(
    private graphqlProduct: GraphqlProductsService,
    private router: Router,
    private storageService: StorageService,
    private uploadService: FileUploadService,
    private rutaActiva: ActivatedRoute,
    private spinner: NgxSpinnerService,
  
  ) {}

  createForm() {
    this.newProductFG = new FormGroup({
      url: new FormControl("", [Validators.required]),
      noidentificacion: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-Z0-9_-]+$"),
      ]), //Numeros, letras y guiones(bajo y medio),sin espacio
      precio: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
      ]), //SOlo numeros positivos, enteros y decimales
      descuento: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
      ]), //SOlo numeros positivos, enteros y decimales
      retencionieps: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
       // Validate.isValidRetencionIEPS_Tasa,
       // Validate.isValidTrasladoRetencionIEPS_Cuota,
      ]), //SOlo numeros positivos, enteros y decimales
      retencioniva: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
        Validate.isValidRetencionIVA,
      ]), //SOlo numeros positivos, enteros y decimales
      retencionisr: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
        Validate.isValidRetencionISR
      ]), //SOlo numeros positivos, enteros y decimales
      trasladoiva: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
        Validate.isValidTrasladoIVA,
        
      ]), //SOlo numeros positivos, enteros y decimales
      trasladoieps: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
       // Validate.isValidTrasladoIEPS_Tasa,
       // Validate.isValidTrasladoRetencionIEPS_Cuota,

      ]), //SOlo numeros positivos, enteros y decimales
      codigobarras: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_-]*$"),
      ]), //Numeros, letras y guiones(bajo y medio),sin espacio
      existencias: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
      ]), //SOlo numeros positivos, enteros y decimales
      stockmin: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
      ]), //SOlo numeros positivos, enteros y decimales
      stockmax: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9.]+$"),
      ]), //SOlo numeros positivos, enteros y decimales
      modelo: new FormControl("", [Validators.required]),
      description: new FormControl("", [
        Validators.required,
        Validators.maxLength(200),
      ]),

      RadioButtonTrasladoIEPS: new FormControl("Tasa"),
      RadioButtonRetencionIEPS: new FormControl("Tasa"),

      codigoSatSeleccionado: new FormControl("", this.resultQueryClaveProdServ),
      claveUnidadSeleccionado: new FormControl("", this.resultQueryClaveUnidad),
      marcaSeleccionada: new FormControl("", this.resultQueryMarca),
      lineaSeleccionada: new FormControl("", this.resultQueryLinea),

      inputCodigoSat: new FormControl(""),
      inputClaveUnidad: new FormControl(""),
      inputMarca: new FormControl(""),
      inputLinea: new FormControl(""),
    }
   
    );
  }

  
/*
  changeType() {
    console.log(this.newProductFG.value.type);
    if (this.newProductFG.get("codigoSatSeleccionado").value == "") {
      this.newProductFG
        .get("codigoSatSeleccionado")
        .setValidators([Validators.required]);
      this.newProductFG.get("codigoSatSeleccionado").updateValueAndValidity();
    } else {
      this.newProductFG.get("codigoSatSeleccionado").clearValidators();
      this.newProductFG.get("codigoSatSeleccionado").updateValueAndValidity();
    }
  }
*/
  ngOnInit() {
    this.createForm();

    this.mytoken = this.storageService.getSession("token");

    if (this.rutaActiva.snapshot.params.id) {
      this.myProduct.id = this.rutaActiva.snapshot.params.id;

      //console.log('ESTE ES EL ID DEL PRODUCTO A EDITAR',this.rutaActiva.snapshot.params.id);

      this.graphqlProduct
        .link_getById(this.mytoken, this.rutaActiva.snapshot.params.id)
        .subscribe(({ data, loading }) => {
          let posts = JSON.parse(JSON.stringify(data)).link;
          console.log(JSON.stringify(posts));

          this.newProductFG.patchValue({
            url: posts.url,
            noidentificacion: posts.noidentificacion,
            precio: posts.precio,
            descuento: posts.descuento,
            retencionieps: posts.retencionieps,
            retencioniva: posts.retencioniva,
            retencionisr: posts.retencionisr,
            trasladoiva: posts.trasladoiva,
            trasladoieps: posts.trasladoieps,
            codigobarras: posts.codigobarras,
            existencias: posts.existencias,
            stockmin: posts.stockmin,
            stockmax: posts.stockmax,
            modelo: posts.modelo,
            description: posts.description,

            codigoSatSeleccionado: posts.codigosat.id,
            claveUnidadSeleccionado: posts.claveunidad.id,
            marcaSeleccionada: posts.marca.id,
            lineaSeleccionada: posts.linea.id,

            inputCodigoSat: posts.codigosat.descripcion,
            inputClaveUnidad: posts.claveunidad.nombre,
            inputMarca: posts.marca.description,
            inputLinea: posts.linea.description,
          });

          this.searchMarcas();
          this.searchLineas();

          this.searchClaveUnidad();
          this.searchCodigoSat();
        });
    } else {
      this.myProduct.id = 0;
      this.myProduct.codigosat = 2;
    }
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.urlImage = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }

    this.event = event;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);

    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage);
      
        //No sirve  this.newProductFG.controls.url.setValue(this.uploadService.downloadURL);
        
        //this.uploadServiceImgURL = this.uploadService.downloadURL;
      },
      (error) => {
        console.log(error);
      },
    );
   
  }


  addProduct() {

    this.graphqlProduct
          .createLink(
            this.mytoken,
            this.myProduct.url = this.newProductFG.get("url").value ,
            this.myProduct.id ,
            this.myProduct.noidentificacion = this.newProductFG.get("noidentificacion").value,
            this.myProduct.precio = this.newProductFG.get("precio").value,
            this.myProduct.descuento = this.newProductFG.get("descuento").value,
            this.myProduct.retencionieps = this.newProductFG.get("retencionieps").value,
            this.myProduct.retencioniva = this.newProductFG.get("retencioniva").value,
            this.myProduct.retencionisr = this.newProductFG.get("retencionisr").value,
            this.myProduct.trasladoiva = this.newProductFG.get("trasladoiva").value,
            this.myProduct.trasladoieps = this.newProductFG.get("trasladoieps").value,
            this.myProduct.codigobarras = this.newProductFG.get("codigobarras").value,
            this.myProduct.existencias = this.newProductFG.get("existencias").value,
            this.myProduct.stockmin = this.newProductFG.get("stockmin").value,
            this.myProduct.stockmax = this.newProductFG.get("stockmax").value,
            this.myProduct.codigosat = this.newProductFG.get("codigoSatSeleccionado").value,
            this.myProduct.claveunidad = this.newProductFG.get("claveUnidadSeleccionado").value,
            this.myProduct.modelo = this.newProductFG.get("modelo").value,
            this.myProduct.description = this.newProductFG.get("description").value,
            this.myProduct.marca = this.newProductFG.get("marcaSeleccionada").value,
            this.myProduct.linea = this.newProductFG.get("lineaSeleccionada").value
          )
          .subscribe(
            ({ data }) => {
              if(data){
                const swalWithBootstrapButtons = Swal.mixin({
                  customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger",
                  },
                  buttonsStyling: false,
                });
            
                swalWithBootstrapButtons
                  .fire(
                    "Guardado correctamente",
                    "Se ha guardado correctamente",
                    "success",
                  )
                  .then(() => {
                    this.router.navigate(["/admin/admin/productos"]);
                  }); 
              }
              
            },
            (error) => {
              console.error("there was an error sending the query", error);
            },
          );
  }

  searchClaveUnidad() {
    this.spinner.show();

    this.graphqlProduct
      .claveunidades(
        this.mytoken,
        this.newProductFG.get("inputClaveUnidad").value,
      )
      .subscribe(({ data }) => {
        this.resultQueryClaveUnidad = JSON.parse(
          JSON.stringify(data),
        ).claveunidades;
        if (data) {
          this.spinner.hide();
        }

        //console.log("Clave de la unidad",JSON.stringify(this.resultQueryClaveUnidad));
      });
  }

  searchCodigoSat() {

    this.spinner.show();
    this.graphqlProduct
      .claveprodserv(
        this.mytoken,
        this.newProductFG.get("inputCodigoSat").value,
      )
      .subscribe(({ data }) => {
        this.resultQueryClaveProdServ = JSON.parse(
          JSON.stringify(data),
        ).claveprodserv;
        //if(this.resultQueryClaveProdServ) {
        //  console.log("Terminado");
        //}
        if (data) {
          this.spinner.hide();
        }
      });
  }

  searchMarcas() {
    this.spinner.show();
    console.log(this.mytoken);
    this.graphqlProduct
      .marcas(this.mytoken, this.newProductFG.get("inputMarca").value)
      .subscribe(({ data }) => {
        this.resultQueryMarca = JSON.parse(JSON.stringify(data)).marcas;

        //console.log("Marca: ",JSON.stringify(this.resultQueryMarca));
        if (data) {
          this.spinner.hide();
        }
      });
  }

  searchLineas() {
    this.spinner.show();
    this.graphqlProduct
      .lineas(this.mytoken, this.newProductFG.get("inputLinea").value)
      .subscribe(({ data }) => {
        //this.lineaSeleccionada = "";
        this.resultQueryLinea = JSON.parse(JSON.stringify(data)).lineas;
        if (data) {
          this.spinner.hide();
        }
        // console.log("Linea: ",JSON.stringify(this.resultQueryLinea));
      });
  }
}
=======
import { Component, OnInit } from "@angular/core";
import { ProductApi } from "../../models/productapi";
import { GraphqlProductsService } from "../../services/graphql.products.service";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { FileUploadService } from "../../services/file-upload.service";
import { FileUpload } from "../../models/file-upload";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"],
})
export class NewProductComponent implements OnInit {
  myProduct = new ProductApi();
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  mytoken: any;

  resultQueryClaveProdServ: any;
  resultQueryClaveUnidad: any;
  resultQueryMarca: any;
  resultQueryLinea: any; 

  codigoSatSeleccionado= "";
  claveUnidadSeleccionado= "";
  marcaSeleccionada = "";
  lineaSeleccionada = "";


  inputClaveUnidad = "";
  inputCodigoSat = "";
  inputMarca = "";
  inputLinea = "";



  urlImage;
  event;

  constructor(
    private graphqlProduct: GraphqlProductsService,
    private router: Router,
    private storageService: StorageService,
    private uploadService: FileUploadService,
  ) {}

  ngOnInit(){
    this.mytoken = this.storageService.getSession("token");
    this.myProduct.id = 0;
    this.myProduct.codigosat = 2;
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.urlImage = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }

    this.event = event;
  }

  uploadImage(){
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage);      
      },
      (error) => {
        console.log(error);
       
      },
    ); 
  }

  

 upload(): void{
  (()=>{
 
    this.uploadImage();

    setTimeout(()=>{
      this.myProduct.url = this.uploadService.downloadURL;
      console.log("despues 1",this.uploadService.downloadURL);
    },1000);
})();
 }

  addProduct() {
  
     // this.myProduct.codigosat = parseInt(this.codigoSatSeleccionado);
      this.myProduct.claveunidad = parseInt(this.claveUnidadSeleccionado);
      this.myProduct.marca = parseInt(this.marcaSeleccionada);
      this.myProduct.linea = parseInt(this.lineaSeleccionada);
      
      console.log(this.myProduct.codigosat);
      this.dataConversion();
        /*************************************************
         * Validar si estan llenos los campos
         * ***********************************************
         */
    if (
      this.check.isValidText(this.myProduct.url) &&
      this.check.isValidNumber(this.myProduct.id) &&
      this.check.isValidText(this.myProduct.noidentificacion) &&
      this.check.isValidNumber(this.myProduct.precio) &&
      this.check.isValidNumber(this.myProduct.descuento) &&
      this.check.isValidNumber(this.myProduct.retencionieps) &&
      this.check.isValidNumber(this.myProduct.retencioniva) &&
      this.check.isValidNumber(this.myProduct.retencionisr) &&
      this.check.isValidNumber(this.myProduct.trasladoiva) &&
      this.check.isValidNumber(this.myProduct.trasladoieps) &&
      this.check.isValidText(this.myProduct.codigobarras) &&
      this.check.isValidNumber(this.myProduct.existencias) &&
      this.check.isValidNumber(this.myProduct.stockmin) &&
      this.check.isValidNumber(this.myProduct.stockmax) &&
      this.check.isValidNumber(this.myProduct.codigosat) &&
      this.check.isValidNumber(this.myProduct.claveunidad) &&
      this.check.isValidText(this.myProduct.modelo) &&
      this.check.isValidText(this.myProduct.description) &&
      this.check.isValidNumber(this.myProduct.marca) &&
      this.check.isValidNumber(this.myProduct.linea)

      
    ) {
     
      if (
        /*************************************************
         * Validar si coincide con la tabla de impuesto
         * ***********************************************
         */
        
        // Impuesto IVA
        this.check.tax.isFixed(this.myProduct.trasladoiva, 0.0) ||
        this.check.tax.isFixed(this.myProduct.trasladoiva, 0.16) ||
        this.check.tax.isRange(this.myProduct.retencioniva, 0.0, 0.16) ||
        this.check.tax.isFixed(this.myProduct.trasladoiva, 0.08) ||
        // Impuesto IEPS
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
    }else{
        alert("Debe LLenar todos los campos");
    }
  }

  searchClaveUnidad() {
   
    this.graphqlProduct
    .claveunidades(this.mytoken, this.inputClaveUnidad)
    .subscribe(({ data }) => {

      this.resultQueryClaveUnidad = JSON.parse(JSON.stringify(data),).claveunidades;

        this.claveUnidadSeleccionado = "";
      //console.log("Clave de la unidad",JSON.stringify(this.resultQueryClaveUnidad));
 
     
    });
  }

  searchCodigoSat() {

    this.graphqlProduct
      .claveprodserv(this.mytoken, this.inputCodigoSat)
      .subscribe(({ data }) => {

        this.resultQueryClaveProdServ = JSON.parse(JSON.stringify(data),).claveprodserv;  
        this.codigoSatSeleccionado = "";
        //console.log("Clave prod serv",JSON.stringify(this.resultQueryClaveProdServ));
      });
  }

  searchMarcas() {

    console.log(this.mytoken);
    this.graphqlProduct
    .marcas(this.mytoken, this.inputMarca)
    .subscribe(({ data }) => {

      this.resultQueryMarca = JSON.parse(JSON.stringify(data),).marcas;
        this.marcaSeleccionada = "";
    //  console.log("Marca: ",JSON.stringify(this.resultQueryMarca));
    });
     
  }

  SearchLineas() {
    this.graphqlProduct
    .lineas(this.mytoken, this.inputLinea)
    .subscribe(({ data }) => {

      this.lineaSeleccionada = "";
      this.resultQueryLinea = JSON.parse(JSON.stringify(data),).lineas;

     // console.log("Linea: ",JSON.stringify(this.resultQueryLinea));
 
     
    });
  }

  clearFieldsProducts() {
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
  }

  dataConversion(){
    if ( this.myProduct.url ==  this.myProduct.url.toString() )  this.myProduct.url =  this.myProduct.url.toString();
    if ( this.myProduct.id == parseInt( this.myProduct.id.toString() )) this.myProduct.id = parseInt(this.myProduct.id.toString());
    if ( this.myProduct.noidentificacion ==  this.myProduct.noidentificacion.toString() )  this.myProduct.noidentificacion =  this.myProduct.noidentificacion.toString();
    if ( this.myProduct.precio == parseFloat( this.myProduct.precio.toString() )) this.myProduct.precio = parseFloat(this.myProduct.precio.toString());
    if ( this.myProduct.descuento == parseFloat( this.myProduct.descuento.toString() )) this.myProduct.descuento = parseFloat(this.myProduct.descuento.toString());
    if ( this.myProduct.retencionieps == parseFloat( this.myProduct.retencionieps.toString() )) this.myProduct.retencionieps = parseFloat(this.myProduct.retencionieps.toString()); 
    if ( this.myProduct.retencioniva == parseFloat( this.myProduct.retencioniva.toString() )) this.myProduct.retencioniva = parseFloat(this.myProduct.retencioniva.toString());
    if ( this.myProduct.retencionisr == parseFloat( this.myProduct.retencionisr.toString() )) this.myProduct.retencionisr = parseFloat(this.myProduct.retencionisr.toString());
    if ( this.myProduct.trasladoiva == parseFloat( this.myProduct.trasladoiva.toString() )) this.myProduct.trasladoiva = parseFloat(this.myProduct.trasladoiva.toString());
    if ( this.myProduct.trasladoieps == parseFloat( this.myProduct.trasladoieps.toString() )) this.myProduct.trasladoieps = parseFloat(this.myProduct.trasladoieps.toString());
    if ( this.myProduct.codigobarras ==  this.myProduct.codigobarras.toString() )  this.myProduct.codigobarras =  this.myProduct.codigobarras.toString();
    if ( this.myProduct.existencias == parseFloat( this.myProduct.existencias.toString() )) this.myProduct.existencias = parseFloat(this.myProduct.existencias.toString());
    if ( this.myProduct.stockmin == parseFloat( this.myProduct.stockmin.toString() )) this.myProduct.stockmin = parseFloat(this.myProduct.stockmin.toString());
    if ( this.myProduct.stockmax == parseFloat( this.myProduct.stockmax.toString() )) this.myProduct.stockmax = parseFloat(this.myProduct.stockmax.toString());
    if ( this.myProduct.codigosat == parseInt( this.myProduct.codigosat.toString() )) this.myProduct.codigosat = parseInt(this.myProduct.codigosat.toString());
    if ( this.myProduct.claveunidad == parseInt( this.myProduct.claveunidad.toString() )) this.myProduct.claveunidad = parseInt(this.myProduct.claveunidad.toString());
    if ( this.myProduct.modelo ==  this.myProduct.modelo.toString() )  this.myProduct.modelo =  this.myProduct.modelo.toString();
    if ( this.myProduct.description ==  this.myProduct.description.toString() )  this.myProduct.description =  this.myProduct.description.toString();
    if ( this.myProduct.marca == parseInt( this.myProduct.marca.toString() )) this.myProduct.marca = parseInt(this.myProduct.marca.toString());
    if ( this.myProduct.linea == parseInt( this.myProduct.linea.toString() )) this.myProduct.linea = parseInt(this.myProduct.linea.toString());
  }

  check = {
    isValidText: (text) => {
      if (toString().trim().length === 0) return false;
     // if (typeof text !== "string") return false;

      return true;
    },

    isValidNumber: (num) => {
     // if (decimal == parseFloat(decimal)) decimal = parseFloat(decimal);
      if (num === undefined || num === null) return false;
      if (typeof num !== "number") return false;
      if (Math.sign(num) === -1) return false;

      return true;
    },

    tax: {
      isFixed: (value, fixedValue: number) => {
       // if (value == parseFloat(value)) value = parseFloat(value);
        if (value === fixedValue) return false;

        return true;
      },

      isRange: (value, min: number, max: number) => {
       // if (value == parseFloat(value)) value = parseFloat(value);
        if (value < min || value > max) return false;

        return true;
      },
    },
  };

}
>>>>>>> marcas
