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

const LINKSPARAM = gql`
  query Links($nombre: String!) {
    links(nombre: $nombre) {
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

@Injectable({
  providedIn: 'root'
})

export class GraphqlProductsService  {

  loading: boolean;
  posts: any;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  links(valor : string) {
    //alert(valor);
    if (valor=="-")
    {
      return this.apollo.watchQuery({
        query: LINKS 
      });
    }
    else
    {
      //alert(valor);
      return this.apollo.watchQuery({
        query: LINKSPARAM,
        variables: {
          nombre: valor
        }, 
      });
    }
  
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
