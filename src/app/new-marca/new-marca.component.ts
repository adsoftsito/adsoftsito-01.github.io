import { Component, OnInit, ApplicationRef } from "@angular/core";
import { MarcaApi } from "../../models/marcaapi";
import { GraphqlMarcasService } from "../../services/graphql.marcas.service";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import Swal from "sweetalert2";


@Component({
  selector: 'app-new-marca',
  templateUrl: './new-marca.component.html',
  styleUrls: ['./new-marca.component.css']
})

export class NewMarcaComponent {
  myMarca = new MarcaApi();
  mytoken: any;
  loading: boolean;
  posts: any;
  valor: string;

  validation: FormGroup;

  event;

  mode = 'create | update'

  constructor(
    private graphqlMarca: GraphqlMarcasService,
    private graphqlMarcasService: GraphqlMarcasService,
    private router: Router,
    private storageService: StorageService,
    private appRef: ApplicationRef,
    private route: ActivatedRoute,

    private fb: FormBuilder,
  ) 
  
  {
    this.route.params.subscribe(   
      res => {

        if(res.id == 0){
          this.mode = 'create';
        }else if(res.id != 0){
          this.mode = 'update';
        }

        console.log(res);
        this.myMarca.id = res.id;
        this.valor = res.id;
        

        if (this.myMarca.id > 0)  // is update option
        {
          this.mytoken = this.storageService.getSession("token");

          this.getMarcaById(this.myMarca.id);
        }
      }
    );
  }

  ngOnInit() {
    this.mytoken = this.storageService.getSession("token");
    this.createForm()
  }

  createForm(){
    this.validation = this.fb.group({
      description: ["", Validators.required]
    })
  }

  get r() { return this.validation.controls; }


  //redireccionamiento
  getMarcaById(id) {
    
    this.graphqlMarcasService.marca(this.mytoken, id)
    .subscribe(({ data, loading }) => {
      
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).marca;
      console.log("Recuperado: ",JSON.stringify(this.posts))

      //***Actualiza y llena los campos de id y descripcion con el patch***** */
      this.validation.patchValue({
        id: this.posts.id,
        description: this.posts.description
      })
      
    });

  }

  Marca() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    if(this.mode == 'create'){

      if (this.validation.valid) {

        swalWithBootstrapButtons.fire({
          title: '¿Estas seguro de crear esta Marca?',
          text: "No podrás deshacer los cambios.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, crear',
          cancelButtonText: 'No, cancelar',
          reverseButtons: true
        }).then((result) => {

          if(result.isConfirmed){
            /**Implemente code here */

            let saveValue;
            saveValue = new MarcaApi(this.validation.value);
            saveValue.id = 0
      
            this.graphqlMarca
              .createMarca(
                this.mytoken,
                saveValue.description,
                saveValue.id
              )
              .subscribe(
                ({ data }) => {
    
                  this.router.navigate(["/admin/admin/marcas"]);
                  this.appRef.tick();
                  //this.posts = undefined;
                },
                (error) => {
                  console.error("there was an error sending the query", error);
                },
              );

            swalWithBootstrapButtons.fire(
              'Nueva marca creada!',
              'Marca creada correctamente',
              'success'
            )
          }else if (
            result.dismiss === Swal.DismissReason.cancel
          ){
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'Operración cancelada',
              'error'
            )
          }

        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Campo vacio!',
          text: 'Introduzca dato valido!',
        })
      }
  
    }else if(this.mode == 'update'){
      this.posts.description = (this.posts.description);
      this.posts.id = (this.posts.id);
  

      if (
        this.validation.valid
      ) {
        /**implement here swet alert */
        swalWithBootstrapButtons.fire({
          title: '¿Estas seguro de actualizar esta Marca?',
          text: "No podrás deshacer los cambios.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, actualizar',
          cancelButtonText: 'No, cancelar',
          reverseButtons: true
        }).then((result) => {
          if(result.isConfirmed){
            let saveValue;
            saveValue = new MarcaApi(this.validation.value);
            saveValue.id = this.posts.id;
      
            this.graphqlMarca
              .createMarca(
                this.mytoken,
                saveValue.description,
                saveValue.id
              )
              .subscribe(
                ({ data }) => {
                  this.router.navigate(["/admin/admin/marcas"]);
                  this.appRef.tick();
                },
                (error) => {  
              },
            );
          }else if(
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelado',
              'Operración cancelada',
              'error'
            )
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Campo vacio!',
          text: 'Introduzca dato válido!',
        })
      }
  
    }
  }

  
  clearFieldsMarca() {
    this.event.srcElement.value = null;
    this.myMarca.description = "";
  }

  dataConversion() {
    if (this.posts.description == this.posts.description.toString())
      this.posts.description = this.posts.description.toString();

  }


}
