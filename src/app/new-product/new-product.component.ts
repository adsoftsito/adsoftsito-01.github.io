import { Component, OnInit } from '@angular/core';
import { ProductApi } from "../../models/productapi";
import { GraphqlProductsService} from '../../services/graphql.products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  myProduct = new ProductApi;

  constructor(private graphqlProduct : GraphqlProductsService,
              private router : Router) { }

  ngOnInit(): void {
  }

  addProduct() {

    alert(JSON.stringify(this.myProduct));
    this.graphqlProduct.createLink(this.myProduct.url,
                  this.myProduct.description, this.myProduct.precio)
    .subscribe(({ data }) => {
       console.log('product created :  ', data);
       this.router.navigate(['/productos']);
    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
   
  }

}
