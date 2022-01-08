import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphqlSalesService } from '../../services/graphql.sales.service';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  loading: boolean;
  posts: any;
  private querySubscription: Subscription;
  user: string;
  token: string;
  valor: string;

  constructor(private graphqlProductsService: GraphqlSalesService,
              private storageService: StorageService) 
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
    
    this.graphqlProductsService.sales(this.token, valor)
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.posts = JSON.parse(JSON.stringify(data)).sales;
      console.log(JSON.stringify(this.posts))
    });
  }


  ngOnDestroy() {
    //this.querySubscription.unsubscribe();
  }
  
}
