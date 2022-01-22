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

const EMISORME = gql`
  query Emisorme {
    emisorme {
      rfc
      nombre
      regimenfiscal
    }
  }
`;

const SALE = gql`
query Sale($saleid: Int!) {
  sale(saleid: $saleid) {
      id
      serie
      folio
      formapago
      condicionesdepago
      subtotal
      descuento
      moneda
      tipodecomprobante
      metodopago
      lugarexpedicion
      totalimpuestostrasladados
      totalimpuestosretenidos
      total
      receptor {
        rfc
        nombre
        usocfdi
        
      }
     
      details {
      id
      product {
        noidentificacion
        description
        codigosat {
          claveprodserv
        }
        noidentificacion
        claveunidad {
          descripcion
        }
      }
      cantidad
      precio
      importe
      descuento
      trasladoiva
      retencioniva
      retencionieps
    }    
  }
}
`;

const SALES = gql`
  query Sales($search: String!) {
    sales(search: $search) {
      id
      serie
      folio
      total
      statuscfdi
      xml
      pdf
      receptor {
        rfc
        nombre
      }
    }
  }
`;

const UPDATESALE = gql`
mutation UpdateSale($saleid: Int!, $statuscfdi: String!, $xml: String!, $pdf : String!) 
{
  updateSale (saleid: $saleid, statuscfdi: $statuscfdi, xml: $xml, pdf: $pdf) 
  {
    id  
    statuscfdi
    xml
    pdf
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
                receptorId: 1,
                products : $products
              ){
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

  emisorme(mytoken: string) {
 
    return this.apollo.query({
      query: EMISORME,
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
      },
    });
  
  }


  sale(mytoken: string, saleid: number) {
 
    return this.apollo.query({
      query: SALE,
      variables: {
        saleid: saleid,       
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
      },
    });
  
  }

  sales(mytoken: string, search: string) {
 
    return this.apollo.query({
      query: SALES,
      variables: {
        search: search,       
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
      },
    });
  
  }

  updateSale(mytoken: string, saleid: number, statuscfdi: string, xml: string, pdf : string) 
  {
    console.log("token auth = " + mytoken);
    alert(mytoken);
    
    return this.apollo.mutate({
     mutation: UPDATESALE,
     variables: {
       saleid: saleid,
       statuscfdi: statuscfdi,
       xml: xml,
       pdf: pdf
     },
     context: {
       // example of setting the headers with context per operation
       headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
     },

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
