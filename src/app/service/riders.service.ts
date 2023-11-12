import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IRiders, IRatings_R } from '../model/ridersinfo';

@Injectable({
  providedIn: 'root'
})
export class RiderService {
  private user = 1;
  private baseUrl = environment.serverUrl;
  
  constructor(public http: HttpClient) { }
  getRiders(): Observable<IRiders[]>{
    return this.http.get<IRiders[]>(`${this.baseUrl}/getAllUsers`);
  }

  getRidersRatings(): Observable<IRatings_R[]>{
    return this.http.get<IRatings_R[]>(`${this.baseUrl}/api/v1/riderReview/${this.user}`);
  }
}
