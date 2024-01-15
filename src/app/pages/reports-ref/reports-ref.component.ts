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
        this.sortReferals()
      }
    )
  }

  sortReferals(){
    if(this.referal){
      console.log('App drivers Exists')
     const newdata = this.referal.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateB - dateA;
      });
      console.log('sorted array',newdata)
    }
    }
  
}
