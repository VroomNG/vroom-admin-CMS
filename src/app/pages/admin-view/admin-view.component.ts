import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IAdmin } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';
import * as FileSaver from 'file-saver';
import { jsPDFAPI } from 'jspdf';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  providers: [DatePipe],
})
export class AdminViewComponent implements OnInit {
  // IAdmins = Adminsdata;
   admins: IAdmin[] = [];
  //  loaderColor!: 'primary';
   showLoader = true;
   originalData = this.admins
dt: any;


  //  admins: IAdmin[] = this.allUsers.slice().sort((a:any) => a.user_type == '4' );
  constructor(
    private Admins: AdminService,
    private datePipe: DatePipe
  ){}

  ngOnInit(): void {
    this.Admins.getAdmins().subscribe(
    (res:any)=> {
      console.log(res)
      this.admins = res.data
      this.showLoader = false;
    }
    )
  }

  date!: DatePipe;
  searchText:  string = ''

  applyFilter() {
    const filteredAdmins = this.admins.filter((admin) => {
      // Adjust the conditions based on your filtering requirements
      return (
        admin.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (admin.lastname && admin.lastname.toLowerCase().includes(this.searchText.toLowerCase())) ||
        admin.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (admin.phone_no && admin.phone_no.toLowerCase().includes(this.searchText.toLowerCase())) ||
        admin.user_type.toString().includes(this.searchText)
      );
    });

    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.admins = filteredAdmins;
  }

  clear() {
    this.searchText = '';
    // Reset the table data to its original state
    // You may need to fetch the data again from your source
    // or store the original data in a separate variable and assign it back here
    // Replace originalAdmins with your original data variable
    this.admins = this.originalData
    this.Admins.getAdmins().subscribe(
      (res:any)=> {
        // console.log(res)
        this.admins = res.data
        this.showLoader = false;
      }
      )
  }

//   exportPdf() {
//     import('jspdf').then((jsPDF) => {
//         import('jspdf-autotable').then((x) => {
//             const doc = new jsPDF.default('p', 'px', 'a4');
//             (doc as any).autoTable(this.exportColumns, this.products);
//             doc.save('products.pdf');
//         });
//     });
// }

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.admins);
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


}
