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
