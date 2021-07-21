import { OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { Apollo, gql} from 'apollo-angular';
//import { GraphqlService} from '../services/graphql.users.service';

const TOKENAUTH = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //constructor(private graphqlService: GraphqlService) {}

  ngOnInit() {

    /*
    this.apollo
      .watchQuery({
        query: gql`
          {
            users {
              username
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
       alert(JSON.stringify(result));
      });

    this.apollo.mutate({
      mutation: TOKENAUTH,
      variables: {
        username: 'adsoft',
        password: '123456'
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });

 this.graphqlService.tokenAuth('adsoft','123456')
  .subscribe(({ data }) => {
     console.log('login token ', data);
  }, (error) => {
     console.log('there was an error sending the query', error);
  });
  */
}

}
