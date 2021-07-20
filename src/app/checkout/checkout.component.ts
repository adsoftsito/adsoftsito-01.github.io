import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { GraphqlSalesService} from '../../services/graphql.sales.service';
import { StorageService } from "../../services/storage.service";
import { Totales } from "../../models/totales";
import { ShopItem } from "../../models/CartItem";
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';

//import { Observable, of } from 'rxjs';
//import { switchMap, shareReplay, share, take } from 'rxjs/operators';
//import {  map, tap    } from 'rxjs/operators';
//import { Totales } from '../../models/totales'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutDialog implements OnInit {
  state = this.shoppingCartService.state$.pipe();
  //totals = this.shoppingCartService.total$.pipe();
  myTotal = new Totales;
  myCar = [];

  mytotal : any;

    // @Inject(MAT_DIALOG_DATA) public data: any,
  constructor(
    private shoppingCartService: ShoppingCartService,
    private graphqlSalesService: GraphqlSalesService,
    private storageService: StorageService,
    private router: Router,
    private dialogRef: MatDialogRef<CheckoutDialog>,
    private loginService: LoginService) { }

  ngOnInit() {
    this.state.subscribe(cart => { 
      this.myTotal = cart.tot;
      //console.log(this.mytotal);
      //console.log(cart.cart);
      this.myCar = cart.cart;
      
    }
    );
  }
  completeOrder() {
    //console.log(this.state);

    this.addSale();

    
    /*this.state.pipe(
      map(([store, cart, tot, checkout]: any) => 
        ({ store, cart, tot, checkout })),
      tap(tot => {
          console.log('totales ', tot);
        
      }),
      // make sure we share to the world! or just the entire app
      shareReplay(1)
    ); */
    //this.shoppingCartService.checkout();
  }

  addSale() {
    var products = [];
    var mytoken = this.storageService.getSession("token");
    this.myCar.forEach(element => {
      products.push({
        product : element.id,
        cantidad : 1,
        precio: element.price
      })
    });
    alert(JSON.stringify(products));

    this.graphqlSalesService.createSale(mytoken, this.myTotal.subTot,
                  this.myTotal.tax, this.myTotal.grandTot, products)
    .subscribe(({ data }) => {
       console.log('Sale created :  ', data);
       //this.router.navigate(['/']);
       this.loginService.showData("token here !!!");

    }, (error) => {
       console.log('there was an error sending the query', error);
    });

   
  }
}