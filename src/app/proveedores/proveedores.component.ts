import { Component, OnInit } from '@angular/core';
import { GraphqlProveedoresService} from '../../services/graphql.proveedores.service';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

      loading: boolean;
      posts: any;
      //private querySubscription: Subscription;
      user: string;
      token: string;
      valor: string;
    
      constructor(private graphqlProveedoresService: GraphqlProveedoresService,
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
    
        this.graphqlProveedoresService.proveedores(this.token, valor)
        .subscribe(({ data, loading }) => {
          this.loading = loading;
          this.posts = JSON.parse(JSON.stringify(data)).proveedores;
          console.log(JSON.stringify(this.posts))
        });
      }
    
      ngOnDestroy() {
    
      }
      
    }
    