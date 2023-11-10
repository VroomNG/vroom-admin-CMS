import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IPartners } from '../model/partners';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }

  // addAdmin(adminForm:any){
  //   return this.http.post(`${this.baseUrl}/addAdmin`, adminForm)
  // }

  getPartners(): Observable<IPartners[]>{
    return this.http.get<IPartners[]>(`${this.baseUrl}/getAllUsers`);
  }
  

}


