import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
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
 searchText:string = '';

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

    applyFilter() {
      this.searchText 
      console.log(this.searchText)
      
    }
  
    exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.riders);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, 'admins');
      });
  
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
    clear(){
      this.searchText = '',
      this.Riders.getRiders().subscribe(
        (res:any)=>{
          console.log(res.data)
          this.riders = res.data;
          this.showLoader = false;
        }
      )
    }

}
