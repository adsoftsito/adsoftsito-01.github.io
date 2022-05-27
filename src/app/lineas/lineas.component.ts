import { Component, OnInit } from '@angular/core';
import { GraphqlLineasService} from '../../services/graphql.lines.service';
import Swal from 'sweetalert2';
import { StorageService } from "../../services/storage.service";
import { Router } from "@angular/router";
import internal from 'stream';
import { LineaApi } from 'models/lineaapi';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})

export class LineasComponent implements OnInit {

  myLinea = new LineaApi();

  loading: boolean;
  posts: any;
  user: string;
  token: string;
  valor: string;

  constructor(
    private graphqlLinea: GraphqlLineasService,
    private graphqlLineasService: GraphqlLineasService,
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

    this.graphqlLineasService.lineas(this.token, valor)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).lineas;
      //console.log(JSON.stringify(this.posts))
    });
  }


  deleteThisLinea(idlinea: number){//colocar el id de la marca a eliminar como parametro

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

        //console.log("Mande una orden a service con id: "+idlinea);
        this.myLinea.id = (this.myLinea.id)

        this.graphqlLineasService
        .deleteLinea(
          this.token, idlinea
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

  updateThisLinea(idlinea: number){
    
    this.router.navigate(['/admin/admin/new-linea/',idlinea]);
  }

  ngOnDestroy() {

  }
  
}
