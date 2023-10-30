import { Component } from '@angular/core';
import { ITrips } from 'src/app/model/trips';

@Component({
  selector: 'app-trips-past',
  templateUrl: './trips-past.component.html',
  styleUrls: ['./trips-past.component.scss']
})
export class TripsPastComponent {
  trips: ITrips[] = [
    {
      id: 1,
      trip_no: 'VRM2304',
      trip_type: 'Individual',
      trip_date: '09/18/2023',
      driver: 'Moshood Salu',
      rider: 'Stephen Olubyoyo',
      actual_amount: '6,411.00',
      rounding_amount: '6,400.00',
      vehicle_type: 'Sedan',
      trip_status: 'Completed',
      payment_mode: 'cash',
      past: 'Past',
      isViewable: true
    },
    {
      id: 1,
      trip_no: 'VRM2304',
      trip_type: 'Individual',
      trip_date: '09/18/2023',
      driver: 'Moshood Salu',
      rider: 'Stephen Olubyoyo',
      actual_amount: '6,411.00',
      rounding_amount: '6,400.00',
      vehicle_type: 'Sedan',
      trip_status: 'Completed',
      payment_mode: 'cash',
      past: 'Past',
      isViewable: true
    },
    {
      id: 1,
      trip_no: 'VRM2304',
      trip_type: 'Individual',
      trip_date: '09/18/2023',
      driver: 'Moshood Salu',
      rider: 'Stephen Olubyoyo',
      actual_amount: '6,411.00',
      rounding_amount: '6,400.00',
      vehicle_type: 'Sedan',
      trip_status: 'Completed',
      payment_mode: 'cash',
      past: 'Past',
      isViewable: true
    },
    {
      id: 1,
      trip_no: 'VRM2304',
      trip_type: 'Individual',
      trip_date: '09/18/2023',
      driver: 'Moshood Salu',
      rider: 'Stephen Olubyoyo',
      actual_amount: '6,411.00',
      rounding_amount: '6,400.00',
      vehicle_type: 'Sedan',
      trip_status: 'Completed',
      payment_mode: 'cash',
      past: 'Past',
      isViewable: true
    },
    {
      id: 1,
      trip_no: 'VRM2304',
      trip_type: 'Individual',
      trip_date: '09/18/2023',
      driver: 'Moshood Salu',
      rider: 'Stephen Olubyoyo',
      actual_amount: '6,411.00',
      rounding_amount: '6,400.00',
      vehicle_type: 'Sedan',
      trip_status: 'Completed',
      payment_mode: 'cash',
      past: 'Past',
      isViewable: true
    },
    {
      id: 1,
      trip_no: 'VRM2304',
      trip_type: 'Individual',
      trip_date: '09/18/2023',
      driver: 'Moshood Salu',
      rider: 'Stephen Olubyoyo',
      actual_amount: '6,411.00',
      rounding_amount: '6,400.00',
      vehicle_type: 'Sedan',
      trip_status: 'Completed',
      payment_mode: 'cash',
      past: 'Past',
      isViewable: true
    },
  
  ]
}
