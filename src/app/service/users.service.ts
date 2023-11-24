import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

   // response storage
   private loginResponseSubject = new BehaviorSubject<any>(null);
   loginResponse$ = this.loginResponseSubject.asObservable();

   setLoginResponse(response: any) {
     this.loginResponseSubject.next(response);
     console.log(response);
     const res = JSON.stringify(response)
     localStorage.setItem('userDetails',(res));
    // const storedUserDetails = localStorage.getItem('userDetails');

    // if (storedUserDetails) {
    //   // The item exists in localStorage
    //   const userDetails = JSON.parse(storedUserDetails);
    //   console.log('User details found:', userDetails);
    // } else {
    //   // The item does not exist in localStorage
    //   console.log('User details not found in localStorage.');
    // }
     return response
   }
 
   // uData = this.loginResponseSubject.getValue()
    getUserDetails() {
     const response = this.loginResponseSubject.getValue();
     console.log(response.lastname)
     return response;
   }
}
