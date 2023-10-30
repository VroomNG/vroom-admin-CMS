import { Component, OnInit } from '@angular/core';
import { IRiders } from 'src/app/model/ridersinfo';
@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss']
})
export class RidersComponent {
 riders: IRiders [] = [
  {
    id: 1,
    name: 'Tee',
    lastname: 'Justice',
    email: 'tpumpingt@gmail.com',
    phone:'+2348038642122',
    registered_on: new Date(),
    lastTrip: new Date(),
    wallet:0,
    isEditable: true,
    isNotify: false,
    isBlock: false
  }
 ]

}
