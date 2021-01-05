import { Component, OnInit } from '@angular/core';
import { ProductApi } from "../../models/productapi";
import { GraphqlProductsService} from '../../services/graphql.products.service';
import { Router } from '@angular/router';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  myProduct = new ProductApi;

  constructor(private graphqlProduct : GraphqlProductsService,
              private router : Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
  }

  addProduct() {
    var mytoken = this.storageService.getSession("token");
    alert(JSON.stringify(this.myProduct));
    this.graphqlProduct.createLink(mytoken, this.myProduct.url,
                  this.myProduct.description, this.myProduct.precio)
    .subscribe(({ data }) => {
       console.log('product created :  ', data);
       this.router.navigate(['/productos']);
    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
   
  }

}
