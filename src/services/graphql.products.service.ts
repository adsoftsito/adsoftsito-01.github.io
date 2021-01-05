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

const CREATELINK = gql`
  mutation CreateLink($url: String!, $description: String!, $precio: Float!) {
    createLink(url: $url, description: $description, precio: $precio) {
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

  links() {
 
    return this.apollo.watchQuery({
      query: LINKS 
    });
  
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
