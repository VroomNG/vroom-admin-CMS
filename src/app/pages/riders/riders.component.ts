import { Component, OnInit } from '@angular/core';
import { IRiders } from 'src/app/model/ridersinfo';
import { RiderService } from 'src/app/service/riders.service';
@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss']
})
export class RidersComponent implements OnInit {
 riders: IRiders [] = [];
 showLoader = true;
 constructor(private Riders: RiderService ){}
  ngOnInit(): void {
    this.Riders.getRiders().subscribe(
      (res:any)=> {
        console.log(res);
        this.riders = res.data;
        this.showLoader = false;
      }

    )

    }
}
