import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';


const PROVEEDORES = gql`
  query Proveedores ($search: String!) {
    proveedores(search: $search) {
        id
        rfc
        nombre
        postedBy {
          username
        }
        
      }
  }
`;


const CREATEPROVEEDOR = gql`
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

export class GraphqlProveedoresService  {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}


  proveedores(mytoken: string, valor : string) {
    
      return this.apollo.query({
        query: PROVEEDORES,
        variables: {
          search: valor
        }, 
        context: {
          // example of setting the headers with context per operation
          headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
        },
      });
    //}
  
  }
  
  createProveedor(mytoken: string, url: string, description: string, precio: number) {
       console.log("token auth = " + mytoken);
      return this.apollo.mutate({
        mutation: CREATEPROVEEDOR,
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
