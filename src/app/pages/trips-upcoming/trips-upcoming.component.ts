import { Component, OnInit } from '@angular/core';
import { IAllTrips } from 'src/app/model/trips';
import { TripService } from 'src/app/service/trips.service';

@Component({
  selector: 'app-trips-upcoming',
  templateUrl: './trips-upcoming.component.html',
  styleUrls: ['./trips-upcoming.component.scss']
})
export class TripsUpcomingComponent {
  trips: IAllTrips[] = [];
  showLoader = true;
  
  constructor(private Trips: TripService){}
  ngOnInit(): void {
    this.Trips.getAllTrips().subscribe(
      (res:any) =>{
        console.log(res.data)
        this.trips = res.data
        this.showLoader = false;
      }
    )
  }
}
