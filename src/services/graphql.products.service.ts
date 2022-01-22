import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Subscription } from "rxjs";
//import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
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
      url
      id
      noidentificacion
      precio
      descuento

      retencionieps
      retencioniva
      retencionisr

      trasladoiva
      trasladoieps
      codigobarras

      existencias
      stockmin
      stockmax

      codigosat {
        id
        claveprodserv
        descripcion
        sinonimos
      }

      claveunidad {
        id
        claveunidad
        nombre
        descripcion
        simbolo
      }

      modelo
      description

      marca{
        id
        description
      }
    
      linea{
        id
        description
      }
      

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
  mutation CreateLink(
    $url: String!,
    $idprod: Int!,
    $noidentificacion: String!,
    $precio: Float!,
    $descuento: Float!,
    $retencionieps: Float!,
    $retencioniva: Float!,
    $retencionisr: Float!,
    $trasladoiva: Float!,
    $trasladoieps: Float!,
    $codigobarras: String!,
    $existencias: Float!,
    $stockmin: Float!,
    $stockmax: Float!,
    $codigosat: Int!,
    $claveunidad: Int!,
    $modelo: String!,
    $description: String!,

    $marca: Int!,
    $linea: Int!


  ) {
    createLink(
      url: $url,
      idprod: $idprod,
      noidentificacion: $noidentificacion,
      precio: $precio,
      descuento: $descuento,
      retencionieps: $retencionieps,
      retencioniva: $retencioniva,
      retencionisr: $retencionisr,
      trasladoiva: $trasladoiva,
      trasladoieps: $trasladoieps,
      codigobarras: $codigobarras,
      existencias: $existencias,
      stockmin: $stockmin,
      stockmax: $stockmax,
      codigosat: $codigosat,
      claveunidad: $claveunidad,
      modelo: $modelo,
      description: $description,

      marca: $marca,
      linea: $linea

    )   {
      id
      description
      codigosat
      marca {
      description
      }
      linea {
      description
      }
      }
      }
`;

const MARCASPARAM = gql`
  query Marcas($search: String!) {
    marcas(search: $search) {
      id
      description
    }
  }
`;

const CLAVES_PRO_SER_PARAM = gql`
  query ClaveProdServ($search: String!) {
    claveprodserv(search: $search) {
      id
      claveprodserv
      descripcion
      sinonimos
    }
  }
`;

const LINEASPARAM = gql`
  query Lineas($search: String!) {
    lineas(search: $search) {
      id
      description
    }
  }
`;

const CLAVE_UNIDADES_PARAM = gql`
  query ClaveUnidades($search: String!) {
    claveunidades(search: $search) {
      id
      claveunidad
      nombre
      descripcion
    }
  }
`;

@Injectable({
  providedIn: "root",
})
export class GraphqlProductsService {
  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

/*
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
*/  

/*
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

*/

  links(mytoken: string, valor: string) {
    return this.apollo.query({
      query: LINKSPARAM,
      variables: {
        search: valor,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  createLink(
    mytoken: string,
    url: string,
    idprod: number,
    noidentificacion: string,
    precio: number,
    descuento: number,
    retencionieps: number,
    retencioniva: number,
    retencionisr: number,
    trasladoiva: number,
    trasladoieps: number,
    codigobarras: string,
    existencias: number,
    stockmin: number,
    stockmax: number,
    codigosat: number,
    claveunidad: number,
    modelo: string,
    description: string,
    marca: number,
    linea: number,
  ) {
    //console.log("token auth = " + mytoken);
    return this.apollo.mutate({
      mutation: CREATELINK,
      variables: {
        url: url,
        idprod: idprod,
        noidentificacion: noidentificacion,
        precio: precio,
        descuento: descuento,
        retencionieps: retencionieps,
        retencioniva: retencioniva,
        retencionisr: retencionisr,
        trasladoiva: trasladoiva,
        trasladoieps: trasladoieps,
        codigobarras: codigobarras,
        existencias: existencias,
        stockmin: stockmin,
        stockmax: stockmax,
        codigosat: codigosat,
        claveunidad: claveunidad,
        modelo: modelo,
        description: description,
        marca : marca,
        linea : linea
        
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  marcas(mytoken: string, valor: string) {
    return this.apollo.query({
      query: MARCASPARAM,
      variables: {
        search: valor,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  claveprodserv(mytoken: string, valor: string) {
    return this.apollo.query({
      query: CLAVES_PRO_SER_PARAM,
      variables: {
        search: valor,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  lineas(mytoken: string, valor: string) {
    return this.apollo.query({
      query: LINEASPARAM,
      variables: {
        search: valor,
      },
      
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }


  claveunidades(mytoken: string, valor: string) {
    return this.apollo.query({
      query: CLAVE_UNIDADES_PARAM,
      variables: {
        search: valor,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

}
