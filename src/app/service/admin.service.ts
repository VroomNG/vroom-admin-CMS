import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IAdmin, IAccessTrail } from '../model/admins';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  addAdmin(adminForm:any){
    return this.http.post(`${this.baseUrl}/addAdmin`, adminForm)
  }

  getAdmins(): Observable<IAdmin[]>{
    return this.http.get<IAdmin[]>(`${this.baseUrl}/api/v1/adminView`);
  }
  
  getAccessTrail(): Observable<IAccessTrail[]>{
    return this.http.get<IAccessTrail[]>(`${this.baseUrl}/getAccessLog`);
  }

}










// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Configuration } from '../../configuration';
// import { DefaultUrlSerializer, Params } from '@angular/router';

// import { environment } from 'src/environments/environment.prod';

// @Injectable()
// export class adminService {
//   readonly httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };
//   constructor(private http: HttpClient, private config: Configuration) { }

//   private baseUrl = environment.serverUrl

//   newEntryUser(userInput: any,inputParameter: Params) {
//     // debugger;
//     const serializer = new DefaultUrlSerializer();
//     const paramSerializer = serializer.parse('');
//     paramSerializer.queryParams = inputParameter;
//     const params = serializer.serialize(paramSerializer);
//     return this.http.post(this.config.newEntryUser + params, JSON.stringify(userInput), this.httpOptions);
//   }
// getAdminList(inputParameter: { [x: string]: any; token?: any; }) {
//     // debugger;
//     const serializer = new DefaultUrlSerializer();
//     const paramSerializer = serializer.parse('');
//     paramSerializer.queryParams = inputParameter;
//     const params = serializer.serialize(paramSerializer);
//     return this.http.get(this.config.getAdminDetail + params, this.httpOptions);        
//   }

//   getInformedUsers(id: string | number | null) {
//     debugger;
//     return this.http.get(this.config.getUserDetail+ '/' + id);          
//   }

//   updateUser(inputParameter: { firstname: any; lastname: any; email: any; city: string; phone_no: any; address: any; postal_code: any; about_me: any; profile_url: any; },id: string) {
//     debugger;     
//     return this.http.put(this.config.updateUserProfile + '/' + id , JSON.stringify(inputParameter), this.httpOptions);
   
//   }
//   addAdmin(adminForm:any){
//     return this.http.post(`${this.baseUrl}/addAdmin`, adminForm)
//   }

// }
