import { Component } from '@angular/core';
import { IApproved_Drivers } from 'src/app/model/driverInfo';
import { DriversService } from '../../service/driver.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-drivers-approved',
  templateUrl: './drivers-approved.component.html',
  styleUrls: ['./drivers-approved.component.scss']
})
export class DriversApprovedComponent {
  app_drivers: IApproved_Drivers [] = [];
  checked = false;

  loaderColor!: 'primary';
  showLoader = true;
  searchText: string = '';


  constructor(
    private approved_drivers : DriversService
  ){

  }
  ngOnInit(): void {
    this.approved_drivers.getDrivers().subscribe(
      (res:any) => {
        console.log(res.data)
        this.app_drivers = res.data;
        this.showLoader = false;
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.app_drivers.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.app_drivers = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.app_drivers);
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
    this.approved_drivers.getDrivers().subscribe(
      (res:any)=>{
        console.log(res.data)
        this.app_drivers = res.data;
        this.showLoader = false;
      }
    )
  }
}