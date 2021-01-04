import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GraphqlProductsService} from '../../services/graphql.products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private graphqlProductsService: GraphqlProductsService) {}

  ngOnInit() {
    this.querySubscription = this.graphqlProductsService.links()
      .valueChanges
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
