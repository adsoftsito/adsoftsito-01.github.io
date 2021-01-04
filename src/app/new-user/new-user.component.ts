import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/usersapi";
import { GraphqlUsersService} from '../../services/graphql.users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  myUser = new UserApi;

  constructor(private graphqlService : GraphqlUsersService) { }

  ngOnInit(): void {
  }

  addUser() {

    alert(JSON.stringify(this.myUser));
    this.graphqlService.createUser(this.myUser.username,
                  this.myUser.email, this.myUser.password)
    .subscribe(({ data }) => {
       console.log('got data', data);
    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
    /*
    this.graphqlService.tokenAuth('adsoft','123456')
    .subscribe(({ data }) => {
       console.log('got data', data);
    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  */
  
  }
}
