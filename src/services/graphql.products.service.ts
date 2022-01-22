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

const LINKSPARAM = gql`
  query Links($search: String!) {
    links(search: $search) {
      id
      url
      description
      precio
      postedBy {
        username
      }
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


  const Listas = gql`
  query{
    listas(search: "*" tipolista:0) {
      id
      descripcion
 }
}`;

  const ListasFilter = gql`
  query {
    lista(listaid: 1, tipolista:0) {
      id
      descripcion
      precios {
        producto {
          description
        }
      }
 }
}
  `;


@Injectable({
  providedIn: 'root'
})

export class GraphqlProductsService  {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  links(mytoken: string, valor : string) {
    
      return this.apollo.query({
        query: LINKSPARAM,
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


  QueryListProduct(mytoken: string, valor : string) {
    return this.apollo.query({
      query: Listas,
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

  QueryListFilter(mytoken: string, id : number) {
    return this.apollo.query({
      query: ListasFilter,
      variables: {
        listaid: id
      }, 
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
      },
    });
  //}

  }
   
}
