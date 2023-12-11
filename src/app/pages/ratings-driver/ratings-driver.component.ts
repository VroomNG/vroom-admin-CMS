import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IRatings_D } from 'src/app/model/driverInfo';
import { DriversService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-ratings-driver',
  templateUrl: './ratings-driver.component.html',
  styleUrls: ['./ratings-driver.component.scss']
})
export class RatingsDriverComponent implements OnInit {
  drivers: IRatings_D [] = [];
  viewRatings: IRatings_D | any;
  deleteRowId: number | null = null;
  showLoader = true;
  searchText:string = ''

  constructor(private Drivers: DriversService){}
  ngOnInit(): void {
    this.Drivers.getDriversRatings().subscribe(
      (res:any)=> {
        console.log(res.data)
        this.drivers = res.data
        this.showLoader = false;
      }
    )
  }

  applyFilter() {
    const filteredAdmins = this.drivers.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.driverName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.riderName.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.drivers= filteredAdmins;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.drivers);
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
    location.reload()
  }

  deleteDriver(drivers:any){
    this.drivers = { ...drivers }; // Create a copy to avoid modifying the original data; 
    this.deleteRowId = drivers.id;
    
    let driverId = this.deleteRowId
    window.alert(driverId)
    this.Drivers.deleteDriverReview(driverId).subscribe(
      (res:any)=>{
        console.log(res);
       
          window.alert('Successfully deleted')
          location.reload()
       
      }
    )
  }


  
}
