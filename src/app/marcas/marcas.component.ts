import { Component, OnInit } from '@angular/core';
import { GraphqlMarcasService} from '../../services/graphql.marcas.service';
import Swal from 'sweetalert2';
import { StorageService } from "../../services/storage.service";
import { Router } from "@angular/router";
import internal from 'stream';
import { MarcaApi } from 'models/marcaapi';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})

export class MarcasComponent implements OnInit {

  myMarca = new MarcaApi();

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;
  user: string;
  token: string;
  valor: string;
  //id: number; //del id que viene del html

  constructor(
    private graphqlMarca: GraphqlMarcasService,
    private graphqlMarcasService: GraphqlMarcasService,
    private storageService : StorageService,
    private router : Router
  ) 
  {}

  ngOnInit() {
    this.user = this.storageService.getSession("user");
    this.token = this.storageService.getSession("token");
   this.buscar("*");
  }

  search()
  {
    //alert(this.valor);
    this.buscar(this.valor);
  }

  buscar(valor :string) {
    //this.posts = [];
    //console.log(this.token);
    //console.log(valor);

    this.graphqlMarcasService.marcas(this.token, valor)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).marcas;
      //console.log(JSON.stringify(this.posts))
    });
  }


  deleteThisMarca(idMarca: number){//colocar el id de la marca a eliminar como parametro

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres eliminar esta Marca?',
      text: "No podrás deshacer los cambios.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      
      if (result.isConfirmed) {

        console.log("Mande una orden a service con id: "+idMarca);
        this.myMarca.id = (this.myMarca.id)

        this.graphqlMarcasService
        .deleteMarca(
          this.token, idMarca
        )
        .subscribe(
          
        )
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'Marca eliminada correctamente',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Operración cancelada',
          'error'
        )
      }
    })
  }

  updateThisMarca(idMarca: number){
    
    this.router.navigate(['/admin/admin/new-marca/',idMarca]);
    
  }

  ngOnDestroy() {

  }
  
}
