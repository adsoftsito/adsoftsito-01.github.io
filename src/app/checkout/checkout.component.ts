import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { GraphqlSalesService} from '../../services/graphql.sales.service';
import { StorageService } from "../../services/storage.service";
import { Totales } from "../../models/totales";
import { ShopItem } from "../../models/CartItem";
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';
import { CfdiService } from '../../services/cfdi.service';

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
    private cfdiService: CfdiService,
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

  getCfdi() {
    /*
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
    */

    var mycfdi =
    {
      "serie": "AAA",
      "folio": 1000,
      "formapago":"03", 
      "condicionesdepago":"CONTADO", 
      "subtotal":"1850", 
      "descuento":"175.00", 
      "moneda":"MXN", 
      "total":"1943.00", 
      "tipodecomprobante":"I", 
      "metodopago":"PUE", 
      "lugarexpedicion":"68050",
      "emisor": { 
                  "rfc" : "CETA7610219C9",
                  "nombre": "ADOLFO CENTENO TELLEZ",
                  "regimenfiscal":"601"
  
                },
      "receptor": {
                    "rfc": "KUB1004199C9",
                    "nombre": "KUBEET SRL DE CV",
                    "usocfdi":"G01"
                 },
      "conceptos": [
                  {
                     "claveprodserv" : "01010101",
                     "noidentificacion": "AULOG001",
                     "cantidad": "5",
                     "claveunidad": "H87",
                     "unidad": "Pieza",
                     "descripcion": "Aurriculares USB Logitech",
                     "valorunitario": "350.00",
                     "importe": "1750.00",
                     "descuento": "175.00",
                     "impuestos": {
                        "traslados" : [
                            {
                                "base": "1575.00",
                                "impuesto": "002",
                                "tipofactor": "Tasa",
                                "tasaocuota": "0.160000",
                                "importe": "252.00"
                            }
                        ],
                        "retenciones":[]
  
                     }
                  },
                  {
                     "claveprodserv" : "01010101",
                     "noidentificacion": "USB",
                     "cantidad": "1",
                     "claveunidad": "H87",
                     "unidad": "Pieza",
                     "descripcion": "Memoria USB 32gb marca Kingston",
                     "valorunitario": "100.00",
                     "importe": "100.00",
                     "descuento": "0.00",
                      "impuestos": {
                        "traslados" : [
                            {
                                "base": "100.00",
                                "impuesto": "002",
                                "tipofactor": "Tasa",
                                "tasaocuota": "0.160000",
                                "importe": "16.00"
                            }
                        ],
                        "retenciones":[]
  
  
                     }
                  }
      ],
      "impuestos": {
          "totalimpuestostrasladados": "268.00",
          "traslados" : [
              {
              "impuesto":"002",
              "tipofactor":"Tasa",
              "tasaocuota":"0.160000",
              "importe":"268.00"
              }
          ]
      }
      
  }
   // alert("cfdi ...");
    this.cfdiService.getCfdi(mycfdi)
    .subscribe(( data ) => {
       console.log('Cfdi ok :  ', data);
       //this.router.navigate(['/']);
       alert(JSON.stringify(data));
       
    }, (error) => {
       console.log('there was an error in cfdi : ', error);
    });

   
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
       alert(JSON.stringify(data));
       //this.router.navigate(['/']);
       this.loginService.showData("token here !!!");

    }, (error) => {
       console.log('there was an error sending the query', error);
    });

   
  }
}