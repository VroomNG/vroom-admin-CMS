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
  admin_access_trail = [
    {
      id:1,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'login',
      time:   'oct 29 2023',
      isEditable: false, 
   },
    {
      id:2,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Riders',
      time:   'oct 29 2023',
      isEditable: false, 
   },
    {
      id:3,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Partners',
      time:   'oct 29 2023',
      isEditable: false, 
   },
    {
      id:4,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Vehicle info',
      time:   'oct 29 2023',
      isEditable: false, 
   },
    {
      id:5,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Driver Settlement',
      time:   'oct 29 2023',
      isEditable: false, 
   },
    {
      id:6,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Rider reviews',
      time:   'oct 27 2023',
      isEditable: false, 
   },
    {
      id:7,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Riders',
      time:   'oct 27 2023',
      isEditable: false, 
   },
    {
      id:8,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Riders',
      time:   'oct 27 2023',
      isEditable: false, 
   },
    {
      id:9,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Partners',
      time:   'oct 27 2023',
      isEditable: false, 
   },
    {
      id:10,
      name:  'wisdom',
      email: 'wisdomjohn@vroomng.com',
      action: 'Viewed Partners',
      time:   'oct 27 2023',
      isEditable: false, 
   },
    
  
  ]
}
