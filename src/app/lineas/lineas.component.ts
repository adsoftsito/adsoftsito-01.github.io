import { Component, OnInit, OnDestroy } from '@angular/core';
import { GraphqlProductsService} from '../../services/graphql.products.service';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})
export class LineasComponent implements OnInit {
  
    loading: boolean;
    posts: any;
    //private querySubscription: Subscription;
    user: string;
    token: string;
    valor: string;
  
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
  
      this.graphqlProductsService.lineas(this.token, valor)
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = JSON.parse(JSON.stringify(data)).lineas;
        console.log(JSON.stringify(this.posts))
      });
    }
  
    ngOnDestroy() {
  
    }
    
  }
  