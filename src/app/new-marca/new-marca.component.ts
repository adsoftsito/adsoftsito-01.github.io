import { Component, OnInit,ApplicationRef } from "@angular/core";
import { MarcaApi } from "../../models/marcaapi";
import { GraphqlMarcasService } from "../../services/graphql.marcas.service";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-new-marca',
  templateUrl: './new-marca.component.html',
  styleUrls: ['./new-marca.component.css']
})

export class NewMarcaComponent  {
    myMarca = new MarcaApi();
    mytoken: any;
  
    event;
  
    constructor(
      private graphqlMarca: GraphqlMarcasService,
      private router: Router,
      private storageService: StorageService,
      private appRef: ApplicationRef
    ) {}
  
    ngOnInit(){
      this.mytoken = this.storageService.getSession("token");
      this.myMarca.id = 0;
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
  
   
    addMarca() {
     this.myMarca.description = (this.myMarca.description);
     this.myMarca.id=(0)

    console.log(this.myMarca.description)
    this.dataConversion();
          /*************************************************
           * Validar si estan llenos los campos
           * ***********************************************
           */
      if (
        this.check.isValidText(this.myMarca.description)
        ) 
      {
          
          this.graphqlMarca
            .createMarca(
              this.mytoken,
              this.myMarca.description,
              this.myMarca.id
             
            )
            .subscribe(
              ({ data }) => {
                alert(JSON.stringify(data));
                console.info("marca created :  ", data);
                this.router.navigate(["/admin/admin/marcas"]);
                this.appRef.tick();
              },
              (error) => {
                console.error("there was an error sending the query", error);
              },
            );
        
      }else {
          alert("Debe LLenar todos los campos");
      }
    }
  

  
  
  

    clearFieldsMarca() {
      this.event.srcElement.value = null;
      this.myMarca.description = "";
    }
  
    dataConversion(){
      if ( this.myMarca.description ==  this.myMarca.description.toString() ) 
       this.myMarca.description =  this.myMarca.description.toString();
      
    }
  
      
  }
  