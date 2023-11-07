import { Component, OnInit } from '@angular/core';
import { IVehicleInfo } from 'src/app/model/vehicleInfo';
import {IVehicleType } from 'src/app/model/vehicleInfo';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent implements OnInit {

  // vehicleType: IVehicleInfo [] = [
  //   {
  //     id: 1,
  //     type: 'SUV',
  //     trip_type: 'Daily',
  //     per_km_rate: '85.00',
  //     per_minute_rate: '15.00',
  //     minimum_fare: '650.00',
  //     commission: 0,
  //     available_seat: 4,
  //     base_fare: '650.00',
  //     tolls_fees: '0.00',
  //     // rate_per_minute:any;
  //     levy: 20,
  //     cancel_charge_driver: '0.00',
  //     cancel_charge_rider: '0.00',
  //     isactive: true,
  //     // description: any;
  
  //     // peek_hour_fare: any;
  //     // make:any;
  //     // model:any;
  //     // year:any;
  //     // tax_percent:any;
  //     per_km_rate_share:'6.00',
  //     per_minute_rate_share:'1.00',
  //     minimum_fare_share:'5.00',
  //     base_fare_share:'1.00',
  //     promo_amount:0,
  //     promo_status:0,
  //     isEditable: true,
  //   }
  // ]

  vehicleType: IVehicleType [] = [];

  constructor(
    private Vehicles : VehicleService
  ){

  }

  ngOnInit(): void {
    this.Vehicles.getVehicles().subscribe(
      (res:any) => {
        console.log(res.data)
        this.vehicleType = res.data;
      }
    )
  }

}
