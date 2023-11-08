import { Component, OnInit } from '@angular/core';
import {IVehicleType } from 'src/app/model/vehicleInfo';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent implements OnInit {
  
  vehicleType: IVehicleType [] = [];

  loaderColor!: 'primary';
  showLoader = true;


  constructor(
    private Vehicles : VehicleService
  ){

  }
  ngOnInit(): void {
    this.Vehicles.getVehicles().subscribe(
      (res:any) => {
        console.log(res.data)
        this.vehicleType = res.data;
        this.showLoader = false;
      }
    )
  }

}
