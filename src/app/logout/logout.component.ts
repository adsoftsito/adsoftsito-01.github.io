import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/usersapi";
import { GraphqlUsersService} from '../../services/graphql.users.service';
import { StorageService } from "../../services/storage.service";
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  myUser = new UserApi;

  constructor(private graphqlService : GraphqlUsersService,
              private storageService : StorageService,
              private loginService : LoginService,
              private router: Router)
            { }

  ngOnInit(): void {
  }

  loginUser() {

    this.storageService.setSession("token", null);

      var mydata = {
        user:  "",
        token: ""
      };

      this.loginService.showData(mydata);
      this.router.navigate(['/']);

   
  }  
 
}
