import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { GraphqlProductsService} from '../../services/graphql.products.service';
import { StorageService } from "../../services/storage.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;
  user: string;
  token: string;
  valor: string;
  private router: Router;

  constructor(private graphqlProductsService: GraphqlProductsService,
              private storageService : StorageService
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
    console.log(this.token);
    console.log(valor);

    this.graphqlProductsService.links(this.token, valor)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).links;
      console.log(JSON.stringify(this.posts))
    });
  }

  deleteThisProduct(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro que quieres eliminar este producto?',
      text: "No podrás deshacer los cambios.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'Producto eliminado correctamente',
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

  updateThisProduct(){
    console.log('redireccionado a productos');
    this.router.navigate(["/admin/admin/new-product"]);
  }

  ngOnDestroy() {

  }
  
}
