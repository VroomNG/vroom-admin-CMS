import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.serverUrl



  constructor(public http: HttpClient) { }
  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/loginadmin`, credentials);
  }

  addAdmin(adminForm:any){
    return this.http.post(`${this.baseUrl}/addAdmin`, adminForm)
  }
}
