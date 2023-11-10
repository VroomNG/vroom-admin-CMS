import { Component, OnInit } from '@angular/core';
import {IPending } from 'src/app/model/driverInfo';
import { DriversService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-drivers-pending',
  templateUrl: './drivers-pending.component.html',
  styleUrls: ['./drivers-pending.component.scss']
})
export class DriversPendingComponent implements OnInit {
  
  pending: IPending[] = []
  showLoader = true;
  checked = false;

  constructor(private Drivers: DriversService){}
  ngOnInit(): void {
    this.Drivers.getPennding().subscribe(
      (res:any)=>{
        console.log(res)
        this.pending = res.data;
        this.showLoader = false
      }
    )
  }

  

}
