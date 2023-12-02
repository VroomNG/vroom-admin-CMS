// Dependecies
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IAdmin } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';
import * as FileSaver from 'file-saver';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { jsPDFAPI } from 'jspdf';

// Interfaces
interface City {
  name: string;
}
interface Users {
  type: string;
  code: string;
}

// Decorator and file connector
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  providers: [DatePipe],
})


export class AdminViewComponent implements OnInit {
// variables
  admins: IAdmin[] = [];
  editedAdmin!: IAdmin;
  displayDialog: boolean = false;
  showLoader = true;
  originalData = this.admins
  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;
  // date!: DatePipe;
  searchText:  string = '' 

  //  lifecycle and constructor
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
    this.userType = [
      { type: 'Super Admin', code: '4' },
      { type: 'Sub Admin', code: '3' },
      { type: 'Partner', code: '5' },
  ];
    this.cities = [
      { name: 'Abia' },
      { name: 'Enugu' },
      { name: 'Bauchi' },
      { name: 'Calabar' },
      { name: 'Uyo' },
      { name: 'Port Harcourt' },
      { name: 'Abuja' },
      { name: 'Lagos'},
  ];
  }
  // validators
  firstname = new FormControl('',[Validators.required, Validators.minLength(3)])
  lastname = new FormControl('',[Validators.required, Validators.minLength(3)])
  email = new FormControl('',
  [Validators.required,Validators.email], 
  // [this.emailTaken.validate]
  )
  phone_no = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(15)
  ]) 
  password = new FormControl('',[Validators.required, Validators.pattern(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  city = new FormControl(this.cities, [Validators.required, Validators.minLength(3)]) 
  user_type = new FormControl(this.userType, [Validators.required, Validators.minLength(1)]) 

  editAdminForm = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone_no: this.phone_no,
    password: this.password,
    city: this.city,
    user_type: this.user_type,
  })


  // functions

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

editAdmin(admin: IAdmin):any {
  this.editedAdmin = { ...admin }; // Create a copy to avoid modifying the original data
  this.displayDialog = true;
}
saveEdit() {
  // Call API to update the admin data
  this.Admins.updateAdmin(this.editedAdmin).subscribe(
    (res: any) => {
      // Update the local data with the edited admin
      const index = this.admins.findIndex((a) => a.id === this.editedAdmin?.id);
      if (index !== -1) {
        this.admins[index] = { ...res.data }; // Update with the response from the API
      }
      // Close the dialog
      this.displayDialog = false;
    },
    (error:any) => {
      console.error('Error updating admin data', error);
      // Handle error
    }
  );
}

deleteAdmin(adminId: number) {
  // Show confirmation dialog or directly call API to delete the admin
  // if (confirm('Are you sure you want to delete this admin?')) {
  //   this.Admins.deleteAdmin(adminId).subscribe(
  //     () => {
  //       // Remove the deleted admin from the local data
  //       this.admins = this.admins.filter((admin) => admin.id !== adminId);
  //     },
  //     (error) => {
  //       console.error('Error deleting admin data', error);
  //       // Handle error
  //     }
  //   );
  }

  toggleDialog(){
    this.displayDialog = false
  }



}
