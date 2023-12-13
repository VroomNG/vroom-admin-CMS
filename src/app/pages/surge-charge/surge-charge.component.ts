import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { ISurge } from 'src/app/model/surge';
import { SurgeService } from 'src/app/service/surge.service';

@Component({
  selector: 'app-surge-charge',
  templateUrl: './surge-charge.component.html',
  styleUrls: ['./surge-charge.component.scss']
})

export class SurgeChargeComponent implements OnInit {

  surge: any;
  showLoader = true;
  searchText:string = ''

  constructor(private Surge: SurgeService){}

  ngOnInit(){
    this.Surge.getSurge().subscribe(
      (res:any)=> {
        console.log(res);
        this.surge = res.data;
        this.showLoader = false;
      }
    )
   }

   applyFilter() {
    const filteredAdmins = this.surge.filter((item:any) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.surgeSelected.toLowerCase().includes(this.searchText.toLowerCase()) 
      // ||
      // item.charge.toLowerCase().includes(this.searchText.toLowerCase()) ||
      // item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.surge = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.surge);
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
    this.Surge.getSurge().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.surge = res.data;
        this.showLoader = false;
      }
    )
  }




}
