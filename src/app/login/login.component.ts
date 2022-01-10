import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/usersapi";
import { GraphqlUsersService} from '../../services/graphql.users.service';
import { StorageService } from "../../services/storage.service";
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';
//import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myUser = new UserApi;

  constructor(private graphqlService : GraphqlUsersService,
              private storageService : StorageService,
              private loginService : LoginService,
              private router: Router,
             // private dialogRef: MatDialogRef<LoginComponent >
             )
            { }

  ngOnInit(): void {
  }


  loginUser() {

    //alert(JSON.stringify(this.myUser));
    this.graphqlService.tokenAuth(this.myUser.username, this.myUser.password)
    .subscribe(({ data }) => {
       console.log('user logged: ', JSON.stringify(data));
       this.storageService.setSession("user", this.myUser.username);
       this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      //this.storageService.setLocal("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);
      var mydata = {
        user:  this.myUser.username,
        token: JSON.parse(JSON.stringify(data)).tokenAuth.token
      };

      this.loginService.showData(mydata);
      //this.dialogRef.close();
       this.router.navigate(['/admin/admin/dashboard']);

    }, (error) => {
       console.log('there was an error sending the query', error);
       this.myUser.username = "";
       this.myUser.password = "";
       alert(error);
      });
  
  }  
 
  newUser() {

       this.router.navigate(['/home/new-user']);

  } 
}
