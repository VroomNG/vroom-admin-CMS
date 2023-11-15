import { Component, OnInit } from '@angular/core';
import { ICash } from 'src/app/model/settlements';
import { settlementService } from 'src/app/service/settlements.service';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.scss']
})
export class SettlementsComponent implements OnInit {

  settlements: ICash [] = [];
  showLoader = true;

  constructor(private Settlements: settlementService){}

  ngOnInit(): void {
    this.Settlements.getCash().subscribe(
      (res:any) => {
        console.log(res.data)
        this.settlements = res.data
        this.showLoader = false;
      }
    )
  }

}
