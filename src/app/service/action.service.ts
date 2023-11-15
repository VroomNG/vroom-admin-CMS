import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IUninstall } from '../model/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private baseUrl = environment.serverUrl;

  constructor(public http: HttpClient) { }
  getAppUninstalls(): Observable<IUninstall[]>{
    return this.http.get<IUninstall[]>(`${this.baseUrl}/getuninstalled`);
  }


}
