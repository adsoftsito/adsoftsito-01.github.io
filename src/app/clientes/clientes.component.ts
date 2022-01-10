import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphqlProductsService} from '../../services/graphql.products.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private graphqlProductsService: GraphqlProductsService) {}

  ngOnInit() {
    this.querySubscription = this.graphqlProductsService.links("token", "-")
      //.valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = JSON.parse(JSON.stringify(data)).links;
        console.log(JSON.stringify(this.posts))
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  
}
