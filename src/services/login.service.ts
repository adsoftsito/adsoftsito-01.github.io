import { Injectable } from '@angular/core';
//import { NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class LoginService {

    dataChange = new Subject<any>();



    constructor() {

    }

    showData(outer_data) {
       // alert("data");
      this.dataChange.next(outer_data);
    }

    getData(): Observable<any> {
        return this.dataChange.asObservable();
    }
}