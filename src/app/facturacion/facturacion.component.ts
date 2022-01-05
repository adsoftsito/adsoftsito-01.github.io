import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphqlSalesService } from '../../services/graphql.sales.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private graphqlProductsService: GraphqlSalesService) {}

  ngOnInit() {
    this.querySubscription = this.graphqlProductsService.sales()
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = JSON.parse(JSON.stringify(data)).sales;
        console.log(JSON.stringify(this.posts))
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  
}
