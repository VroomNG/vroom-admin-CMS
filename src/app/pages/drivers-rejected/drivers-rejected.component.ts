import { Component, OnInit } from '@angular/core';
import { IRejected } from 'src/app/model/driverInfo';
import { DriversService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-drivers-rejected',
  templateUrl: './drivers-rejected.component.html',
  styleUrls: ['./drivers-rejected.component.scss']
})
export class DriversRejectedComponent implements OnInit {
  rejected: IRejected[] = []
  showLoader = true;
  checked = false;
  constructor(private Drivers: DriversService){}
  ngOnInit(): void {
    this.Drivers.getRejected().subscribe(
      (res:any)=>{
        console.log(res)
        this.rejected = res.data;
        this.showLoader = false
      }
    )
}
}