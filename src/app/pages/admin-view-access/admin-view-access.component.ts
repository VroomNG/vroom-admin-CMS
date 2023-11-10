import { Component, OnInit } from '@angular/core';
import { IAccessTrail } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-view-access',
  templateUrl: './admin-view-access.component.html',
  styleUrls: ['./admin-view-access.component.scss']
})
export class AdminViewAccessComponent implements OnInit {
  admin_access_trail: IAccessTrail[] = [];

  // loaderColor!: 'primary';
   showLoader = true;

  constructor(private Admin: AdminService ) {

  }

  ngOnInit(): void {
    this.Admin.getAccessTrail().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.admin_access_trail = res.data;
        this.showLoader = false
      }
    )
  }

}
