import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ResponseApi } from '../models/responseapi';
import { UserApi } from '../models/usersapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GraalvService {

 apiURL = 'http://34.68.87.191:8192';
 //apiURL = 'http://192.168.0.5:8080';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
 

  // HttpClient GET post() method 
 
  getVersion(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/home/about?command=v', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // HttpClient API post() method 
 
  loginUser(userApi): Observable<UserApi> {
    console.log(JSON.stringify(userApi));
    return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }


}