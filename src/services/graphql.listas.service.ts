import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';


const LISTAS = gql`
query Listas($search: String!, $tipolista: Int!) {
    listas(search: $search, tipolista: $tipolista) {
        id
        descripcion
        descuento
        
      }
  }
`;



// 'idprod', 'codigosat', 'noidentificacion', 'claveunidad', 'descuento', 'trasladoiva', 'retiva', and 'ieps'

const CREATELINK = gql`
  mutation CreateLink($url: String!, $description: String!, $precio: Float!) {
    createLink(url: $url, description: $description, precio: $precio, idprod:"", codigosat: "", noidentificacion: "", claveunidad: "", descuento: 0.00, trasladoiva: 0.00, retiva: 0.00, ieps: 0.00) {
      id
      url
      description
      precio
   }
  }
  `;

@Injectable({
  providedIn: 'root'
})

export class GraphqlListasService  {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}


  listas(mytoken: string, valor : string, tipolista : number) {
    
      return this.apollo.query({
        query: LISTAS,
        variables: {
          search: valor,
          tipolista: tipolista
        }, 
        context: {
          // example of setting the headers with context per operation
          headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
        },
      });
    //}
  
  }
  
  createLink(mytoken: string, url: string, description: string, precio: number) {
       console.log("token auth = " + mytoken);
      return this.apollo.mutate({
        mutation: CREATELINK,
        variables: {
          url: url,
          description: description,
          precio: precio
        },
        context: {
          // example of setting the headers with context per operation
          headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
        },

      });
    
  }
   
}
