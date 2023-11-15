import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IAllTrips } from '../model/trips';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private baseUrl = environment.serverUrl

  constructor(public http: HttpClient) { }
  getAllTrips(): Observable<IAllTrips[]>{
    return this.http.get<IAllTrips[]>(`${this.baseUrl}/api/v1/trips`);
  }

}
