import { Component, OnInit, ApplicationRef } from "@angular/core";
import { MarcaApi } from "../../models/marcaapi";
import { GraphqlMarcasService } from "../../services/graphql.marcas.service";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { ActivatedRoute } from '@angular/router';
import { ComponentsModule } from "app/components/components.module";
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Console } from "console";
import { threadId } from "worker_threads";
import { valueToObjectRepresentation } from "@apollo/client/utilities";

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
          alert(this.mode)
        }else if(res.id != 0){
          this.mode = 'update';
          alert(this.mode)
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
    
    console.log("id a receuperar: ",id);

    this.graphqlMarcasService.marca(this.mytoken, id)
    .subscribe(({ data, loading }) => {
      console.log(data);
      
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).marca;
      console.log("Recuperado: ",JSON.stringify(this.posts))
      console.log("this.posts.description",this.posts.description)
      //this.myMarca.description = this.posts.description;

      //***Actualiza y llena los campos de id y descripcion con el patch***** */
      this.validation.patchValue({
        id: this.posts.id,
        description: this.posts.description
      })
      
    });

  }

  Marca() {
    if(this.mode == 'create'){

      //this.dataConversion();
      /*************************************************
       * Validar si estan llenos los campos
       * ***********************************************
       */
      console.log("llegue")
      if (this.validation.valid) {
        console.log("entre crear")
        let saveValue;
        saveValue = new MarcaApi(this.validation.value);
        saveValue.id = 0
        
        console.log(saveValue);
  
        this.graphqlMarca
          .createMarca(
            this.mytoken,
            saveValue.description,
            saveValue.id
          )
          .subscribe(
            ({ data }) => {
              alert(JSON.stringify(data));
              
              console.info("marca created :  ", data);
              this.router.navigate(["/admin/admin/marcas"]);
              this.appRef.tick();
              //this.posts = undefined;
            },
            (error) => {
              console.error("there was an error sending the query", error);
            },
          );
  
      } else {
        console.info("No se pudo guardar");
      }
  
    }else if(this.mode == 'update'){
      this.posts.description = (this.posts.description);
      this.posts.id = (this.posts.id);
  
      console.log(this.posts.description)
      //this.dataConversion();
      /*************************************************
       * Validar si estan llenos los campos
       * ***********************************************
       */
      if (
        this.validation.valid
      ) {
  
        let saveValue;
        saveValue = new MarcaApi(this.validation.value);//Probablemente aqui este el error
        saveValue.id = this.posts.id;
        console.log(saveValue.id);
  
        this.graphqlMarca
          .createMarca(
            this.mytoken,
            saveValue.description,
            saveValue.id
          )
          .subscribe(
            ({ data }) => {
              alert(JSON.stringify(data));
              
              console.info("marca created :  ", data);
              this.router.navigate(["/admin/admin/marcas"]);
              this.appRef.tick();
              //this.posts = undefined;
            },
            (error) => {
              console.error("there was an error sending the query", error);
            },
          );
  
      } else {
        alert("Debe LLenar todos los campos");
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
