import { Component, OnInit } from '@angular/core';
import { IRatings_D } from 'src/app/model/driverInfo';
import { DriversService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-ratings-driver',
  templateUrl: './ratings-driver.component.html',
  styleUrls: ['./ratings-driver.component.scss']
})
export class RatingsDriverComponent implements OnInit {
  drivers: IRatings_D [] = [];
  showLoader = true

  constructor(private Drivers: DriversService){}
  ngOnInit(): void {
    this.Drivers.getDriversRatings().subscribe(
      (res:any)=> {
        console.log(res.data)
        this.drivers = res.data
        this.showLoader = false;
      }
    )
  }


  
}
