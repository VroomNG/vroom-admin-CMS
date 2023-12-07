import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
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
  searchText:string = ''

  constructor(private Partners: PartnerService ) {}

  ngOnInit(): void {
    this.Partners.getPartners().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.partners = res.data;
        this.showLoader = false;
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.partners.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.partners = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.partners);
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
    this.Partners.getPartners().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.partners = res.data;
        this.showLoader = false;
      }
    )
  }

}
