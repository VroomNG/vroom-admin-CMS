import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  // IAdmins = Adminsdata;
   admins: IAdmin[] = [];
  //  loaderColor!: 'primary';
   showLoader = true;


  //  admins: IAdmin[] = this.allUsers.slice().sort((a:any) => a.user_type == '4' );
  constructor(
    private Admins: AdminService
  ){}

  ngOnInit(): void {
    this.Admins.getAdmins().subscribe(
    (res:any)=> {
      console.log(res)
      this.admins = res.data
      this.showLoader = false;
    }
    )
  }

}
