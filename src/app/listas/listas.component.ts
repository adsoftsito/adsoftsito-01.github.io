import { Component, OnInit } from '@angular/core';
import { GraphqlListasService } from '../../services/graphql.listas.service';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

    loading: boolean;
    posts: any;
    //private querySubscription: Subscription;
    user: string;
    token: string;
    valor: string;
  
    constructor(private graphqlListasService: GraphqlListasService,
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
  
      this.graphqlListasService.listas(this.token, valor, 0)
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = JSON.parse(JSON.stringify(data)).listas;
        console.log(JSON.stringify(this.posts))
      });
    }
  
    ngOnDestroy() {
  
    }
    
  }
  