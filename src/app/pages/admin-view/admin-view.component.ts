import { Component, OnInit } from '@angular/core';
import { IAdmins } from 'src/app/model/admins';
// import { AdminsService } from 'src/app/data/admins.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  // IAdmins = Adminsdata;
   admins: IAdmins[] = [
    
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

  constructor(){}


  ngOnInit(): void {
    // this.admins = this.AdminsService
  }

}
