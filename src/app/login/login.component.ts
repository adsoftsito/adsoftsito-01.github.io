import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/usersapi";
import { GraphqlUsersService} from '../../services/graphql.users.service';
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUser = new UserApi;

  constructor(private graphqlService : GraphqlUsersService,
              private storageService : StorageService)
            { }

  ngOnInit(): void {
  }

  loginUser() {

    alert(JSON.stringify(this.myUser));
    this.graphqlService.tokenAuth(this.myUser.username, this.myUser.password)
    .subscribe(({ data }) => {
       console.log('logged: ', JSON.stringify(data));
       this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      //this.storageService.setLocal("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);


    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
  }  
 
}
