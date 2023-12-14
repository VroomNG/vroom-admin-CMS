
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

   // response storage
   private loginResponseSubject = new BehaviorSubject<any>(null);
   loginResponse$ = this.loginResponseSubject.asObservable();

   setLoginResponse(response: any) {
     this.loginResponseSubject.next(response);
     console.log(response);
     const res = JSON.stringify(response)
     localStorage.setItem('userDetails',(res));
     return response
   }
 
    getUserDetails() {
     const response = this.loginResponseSubject.getValue();
     console.log(response.lastname)
     return response;
   }

   updateUser(updateUserForm: object, userId:any) {
    return this.http.put(`${this.baseUrl}/updateUser/${userId}`, updateUserForm);
  }
  getSingleUser(userId: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }

}
