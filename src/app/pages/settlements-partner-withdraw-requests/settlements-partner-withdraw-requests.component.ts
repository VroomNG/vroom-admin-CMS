import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IPartnerWRQ } from 'src/app/model/settlements';
import { settlementService } from 'src/app/service/settlements.service';

@Component({
  selector: 'app-settlements-partner-withdraw-requests',
  templateUrl: './settlements-partner-withdraw-requests.component.html',
  styleUrls: ['./settlements-partner-withdraw-requests.component.scss']
})
export class SettlementsPartnerWithdrawRequestsComponent implements OnInit {
  withdraw: IPartnerWRQ [] = [];
  searchText:string = '';
  showLoader = true;

  constructor(
    private PayService: settlementService
  ){ }

  ngOnInit(){
    this.PayService.getPartnerWRQ().subscribe(
      (res:any)=>{
       console.log(res.data)
       this.withdraw = res.data
       this.showLoader = false
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.withdraw.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.withdraw = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.withdraw);
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
    this.PayService.getPartnerWRQ().subscribe(
      (res:any)=>{
       console.log(res.data)
       this.withdraw = res.data
      }
    )
  }
}
