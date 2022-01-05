import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { Subscription } from 'rxjs';
//import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
//import { StorageService } from "./storage.service";

const TOKENAUTH = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const SALES = gql`
  query Sales {
    sales {
      id
      serie
      folio
      total
      postedBy {
        username
      }
    }
  }
`;


const CREATESALE = gql`
  mutation CreateSale($subtotal: Float!, $iva: Float!, $total: Float!, $products : [DetailInput]!) {
    createSale(
                serie: "A",
                folio: "2",
                condicionesdepago: "CONTADO",
                formapago: "03",
                lugarexpedicion: "94740",
                tipodecomprobante: "I",
                metodopago: "PUE",
                moneda: "MXN",
                descuento: 0,
                
                totalimpuestosretenidos: 16,
                totalimpuestostrasladados: $iva,
    
                subtotal: $subtotal, 
                total: $total, 
                products : $products) {
      id
      total
      postedBy {
        id
        username
        email

      }
   }
  }
  `;

@Injectable({
  providedIn: 'root'
})

export class GraphqlSalesService  {

  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  sales() {
 
    return this.apollo.watchQuery({
      query: SALES 
    });
  
  }

  createSale(mytoken: string, subtotal: number, iva: number, total: number, products : any) {
       console.log("token auth = " + mytoken);
       alert(mytoken);
       
       return this.apollo.mutate({
        mutation: CREATESALE,
        variables: {
          subtotal: subtotal,
          iva: iva,
          total: total,
          products: products
        },
        context: {
          // example of setting the headers with context per operation
          headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
        },

      });
    
  }
   
}
