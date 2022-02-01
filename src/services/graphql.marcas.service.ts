import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { HttpHeaders } from "@angular/common/http";


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

const CREATEMARCA = gql`
mutation CreateMarca($idmarca: Int!, $description: String!) {
  createMarca(idmarca: $idmarca, description: $description){
    id
    description
  }
}
`;


@Injectable({
  providedIn: "root",
})
export class GraphqlMarcasService {
  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  
  createMarca(
    mytoken: string,
    description: string,
    idmarca: number,
    
  ) {
    //console.log("token auth = " + mytoken);
    return this.apollo.mutate({
      mutation: CREATEMARCA,
      variables: {
        idmarca: idmarca,
        description: description,
        
      },
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set("Authorization", "JWT " + mytoken),
      },
    });
  }

  marcas(mytoken: string, valor: string) {
    return this.apollo.query({
      query: MARCAS,
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
