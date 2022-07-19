import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { HttpHeaders } from "@angular/common/http";


const LINEAS = gql`
  query lineas($search: String!) {
    lineas(search: $search) {
      id
      description
      postedBy {
        username
      }
    }
  }
`;

const CREATELINEA = gql`
mutation createLinea($description: String!, $idlinea: Int!) {
  createLinea(description: $description, idlinea: $idlinea){
    id
    description
  }
}
`;

const DELETELINEA = gql`
mutation DeleteL($idlinea: Int!){
  deletelinea(idlinea: $idlinea) {
    id
    description
  }
}`;

const LINEA = gql`
  query Linea($idlinea: Int!) {
    linea(idlinea: $idlinea) {
      id
      description
      postedBy {
        username
      }
    }
  }
`;



@Injectable({
  providedIn: "root",
})
export class GraphqlLineasService {
  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  
  createLinea(
    mytoken: string,
    description: string,
    idlinea: number,
    
  ) {
    //console.log("token auth = " + mytoken);
    return this.apollo.mutate({
      mutation: CREATELINEA,
      variables: {
        idlinea: idlinea,
        description: description,
        
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken)
      },
    });
  }

  deleteLinea(
    mytoken: string,
    idlinea: number,
  ){
    console.log("token: "+mytoken+" id a rematar: "+idlinea);

    return this.apollo.mutate({
      mutation: DELETELINEA,
      variables: {
        idlinea: idlinea,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  lineas(mytoken: string, valor: string) {
    return this.apollo.query({
      query: LINEAS,
      variables: {
        search: valor,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  linea(mytoken: string, valor: number) {
    return this.apollo.query({
      query: LINEA,
      variables: {
        idlinea: valor,
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

}

