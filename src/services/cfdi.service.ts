import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { UserApi } from '../models/usersapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { timeout } from 'rxjs/operators/timeout';

@Injectable({
  providedIn: 'root'
})

export class CfdiService {

 apiURL = 'http://198.251.74.249:5000';
 
  constructor(private http: HttpClient) { }

 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'POST,OPTIONS' 

    })
  }  

  

  // HttpClient GET post() method 
  /*
  getVersion(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/home/about?command=v', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  */

  // HttpClient POST complement method 
  getCfdi(cfdi): Observable<any> {
    //console.log(JSON.stringify(cfdi));
    return this.http.post<any>(this.apiURL + '/', cfdi, this.httpOptions)
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
     console.log(errorMessage);
     //window.alert(errorMessage);
    //  return throwError(errorMessage);
     return errorMessage;
  }


}