import { Component } from '@angular/core';
import { IApproved_Drivers } from 'src/app/model/driverInfo';
import { DriversService } from '../../service/driver.service';

@Component({
  selector: 'app-drivers-approved',
  templateUrl: './drivers-approved.component.html',
  styleUrls: ['./drivers-approved.component.scss']
})
export class DriversApprovedComponent {
  app_drivers: IApproved_Drivers [] = [];
  checked = false;

  loaderColor!: 'primary';
  showLoader = true;


  constructor(
    private approved_drivers : DriversService
  ){

  }
  ngOnInit(): void {
    this.approved_drivers.getDrivers().subscribe(
      (res:any) => {
        console.log(res.data)
        this.app_drivers = res.data;
        this.showLoader = false;
      }
    )
  }
}