import { Component, OnInit } from '@angular/core';
import { UserApi } from "../../models/usersapi";
import { GraphqlUsersService} from '../../services/graphql.users.service';
import { StorageService } from "../../services/storage.service";
import { LoginService } from "../../services/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  myUser = new UserApi;

  constructor(private graphqlService : GraphqlUsersService,
   private storageService : StorageService,
   private loginService : LoginService,
   private router: Router,

   ) { }

  ngOnInit(): void {
  }

  addUser() {

    //alert(JSON.stringify(this.myUser));
    this.graphqlService.createUser(this.myUser.username,
                  this.myUser.email, this.myUser.password)
    .subscribe(({ data }) => {
       console.log('got data', data);

       //alert(JSON.stringify(this.myUser));

       this.graphqlService.tokenAuth(this.myUser.username, this.myUser.password)
       .subscribe(({ data }) => {
          console.log('logged: ', JSON.stringify(data));

          this.storageService.setSession("user", this.myUser.username);
          this.storageService.setSession("token", JSON.parse(JSON.stringify(data)).tokenAuth.token);

          var mydata = {
           user:  this.myUser.username,
           token: JSON.parse(JSON.stringify(data)).tokenAuth.token
         };
         alert("User created : " + JSON.stringify(mydata));

         this.loginService.showData(mydata);
      
         this.router.navigate(['/admin/admin/dashboard']);

       }, (error) => {
          console.log('error logging user : ', error);
          
       });
     



    }, (error) => {
       console.log('error creating user : ', error);
       this.myUser.username = "";
       this.myUser.email = "";
       this.myUser.password = "";
       alert(error);
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
