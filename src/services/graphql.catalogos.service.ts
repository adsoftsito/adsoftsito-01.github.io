import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';


const COLONIAS = gql`
  query Colonias ($codigopostal: String!) {
    colonias(codigopostal: $codigopostal) {
      id
      codigopostal
      colonia
      nombreAsentamiento
    }
  }
`;

const USOCFDI = gql`
  query Usocfdi ($search: String!) {
    usocfdi(search: $search) {
        usocfdi
        descripcion
    }
  }
`;


const FORMAPAGO = gql`
  query Formapago ($search: String!) {
    formapago(search: $search) {
        formapago
        descripcion
    }
  }
`;

const METODOPAGO = gql`
  query Metodopago ($search: String!) {
    metodopago(search: $search) {
       metodopago
       descripcion
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

export class GraphqlCatalogosService  {

  loading: boolean;
  posts: any;
  //private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}


  metodopago(mytoken: string, valor : string) {
    
    return this.apollo.query({
      query: METODOPAGO,
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

  
  formapago(mytoken: string, valor : string) {
    
    return this.apollo.query({
      query: FORMAPAGO,
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

  usocfdi(mytoken: string, valor : string) {
    
      return this.apollo.query({
        query: USOCFDI,
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

  colonias(mytoken: string, codigopostal : string) {
    
    return this.apollo.query({
      query: COLONIAS,
      variables: {
        codigopostal: codigopostal
      }, 
      context: {
        // example of setting the headers with context per operation
        headers: new HttpHeaders().set('Authorization', 'JWT ' + mytoken),
      },
    });
  //}

}

   
}
