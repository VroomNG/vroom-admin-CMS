import { Component, OnInit } from '@angular/core';
import { IReferal } from 'src/app/model/reports';
import { ReportService } from 'src/app/service/reports.service';

@Component({
  selector: 'app-reports-ref',
  templateUrl: './reports-ref.component.html',
  styleUrls: ['./reports-ref.component.scss']
})
export class ReportsRefComponent implements OnInit {
 
  referal: IReferal[] = [];
  showLoader = true; 

 constructor(private Reports: ReportService){}

  ngOnInit(): void {
    this.Reports.getReferal().subscribe(
      (res:any)=> {
        console.log(res.data)
        this.showLoader = false;
        this.referal = res.data
      }
    )
  }
}
