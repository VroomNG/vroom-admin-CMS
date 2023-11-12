import { Component, OnInit } from '@angular/core';
import { IRatings_R } from 'src/app/model/ridersinfo';
import { RiderService } from 'src/app/service/riders.service';

@Component({
  selector: 'app-ratings-rider',
  templateUrl: './ratings-rider.component.html',
  styleUrls: ['./ratings-rider.component.scss']
})
export class RatingsRiderComponent implements OnInit {

 constructor(
  private Riders: RiderService 
  ){}

  riders: IRatings_R [] = []
  showLoader = true;

  ngOnInit(): void {
    this.Riders.getRidersRatings().subscribe(
      (res:any)=> {
        console.log(res);
        this.riders = res.data;
        this.showLoader = false;
      }
    )

  }


}
