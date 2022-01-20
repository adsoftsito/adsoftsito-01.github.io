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

/*
const LINKS = gql`
  query Links {
    links {
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
*/

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

const MARCAS = gql`
  query Marcas($search: String!) {
    marcas(search: $search) {
      id
      description
      postedBy {
        username
      }
    }
  }
`;

const LINEAS = gql`
  query Lineas($search: String!) {
    lineas(search: $search) {
      id
      description
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

@Injectable({
  providedIn: 'root'
})

export class GraphqlProductsService  {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}


  marcas(mytoken: string, valor : string) {
    
    return this.apollo.query({
      query: MARCAS,
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
  

  lineas(mytoken: string, valor : string) {
    
    return this.apollo.query({
      query: LINEAS,
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
   
}
