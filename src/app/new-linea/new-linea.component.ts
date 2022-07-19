import { Component, OnInit, ApplicationRef } from "@angular/core";
import { MarcaApi } from "../../models/marcaapi";
import { GraphqlLineasService } from "../../services/graphql.lines.service";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import Swal from "sweetalert2";


@Component({
  selector: 'app-new-linea',
  templateUrl: './new-linea.component.html',
  styleUrls: ['./new-linea.component.css']
})

export class NewLineaComponent { //hay que importarlo en el admin-layouut.modeil.ts
  myLinea = new MarcaApi();
  mytoken: any;
  loading: boolean;
  posts: any;
  valor: string;

  validation: FormGroup;

  event;

  mode = 'create | update'

  constructor(
    private graphqlLinea: GraphqlLineasService,
    private graphqlLineasService: GraphqlLineasService,
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
        this.myLinea.id = res.id;
        this.valor = res.id;
        

        if (this.myLinea.id > 0)  // is update option
        {
          this.mytoken = this.storageService.getSession("token");

          this.getLineaById(this.myLinea.id);
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
      //id: ["",Validators.required],
      description: ["", Validators.required]
    })
  }

  get r() { return this.validation.controls; }


  //redireccionamiento
  getLineaById(id) {
    
    this.graphqlLineasService.linea(this.mytoken, id)
    .subscribe(({ data, loading }) => {
      
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).linea;
      //console.log("Recuperado: ",JSON.stringify(this.posts))

      //***Actualiza y llena los campos de id y descripcion con el patch***** */
      this.validation.patchValue({
        id: this.posts.id,
        description: this.posts.description
      })
      
    });

  }

  Linea() {
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
          title: '¿Estas seguro de crear esta línea?',
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
      
            this.graphqlLinea
              .createLinea(
                this.mytoken,
                saveValue.description,
                saveValue.id
              )
              .subscribe(
                ({ data }) => {
    
                  this.router.navigate(["/admin/admin/lineas"]);
                  this.appRef.tick();
                  //this.posts = undefined;
                },
                (error) => {
                  console.error("there was an error sending the query", error);
                },
              );

            swalWithBootstrapButtons.fire(
              'Nueva linea creada!',
              'linea creada correctamente',
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
          title: '¿Estas seguro de actualizar esta Linea?',
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
      
            this.graphqlLinea
              .createLinea(
                this.mytoken,
                saveValue.description,
                saveValue.id
              )
              .subscribe(
                ({ data }) => {
                  this.router.navigate(["/admin/admin/lineas"]);
                  this.appRef.tick();

                  swalWithBootstrapButtons.fire(
                    'Linea Modificada!',
                    'Linea Modificada correctamente',
                    'success'
                  )
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
    this.myLinea.description = "";
  }

  dataConversion() {
    if (this.posts.description == this.posts.description.toString())
      this.posts.description = this.posts.description.toString();

  }

}
