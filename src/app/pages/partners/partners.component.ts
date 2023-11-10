import { Component, OnInit } from '@angular/core';
import { IPartners } from 'src/app/model/partners';
import { PartnerService } from 'src/app/service/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners: IPartners[] = [];
  showLoader = true;
  

  constructor(private Partners: PartnerService ) {

  }

  ngOnInit(): void {
    this.Partners.getPartners().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.partners = res.data;
        this.showLoader = false;
      }
    )
  }

}
