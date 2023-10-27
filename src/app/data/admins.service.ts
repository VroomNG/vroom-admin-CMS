import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor() { }

  admin_data = [
    {
      id:1,
      name: 'wisdom',
      lastName:'ikoi', 
      email: 'wisdomjohn@vroomng.com',
      phone: +2349068140123,
      adminType: 'admin',
      isEditable: true, 
   },
    {
      id:2,
      name: 'tolulope',
      lastName:'ajao', 
      email: 'tolulopeajao@vroomng.com',
      phone: +2349068140123,
      adminType: 'Super Admin',
      isEditable: true, 
   },
  
  ]
}
