import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, } from '@angular/forms';
import { DriversService } from 'src/app/service/driver.service';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-drivers-add',
  templateUrl: './drivers-add.component.html',
  styleUrls: ['./drivers-add.component.scss']
})
export class DriversAddComponent implements OnInit {

// variables
  cities!: City[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';

// constructor and lifecycle methods
  constructor(private drivers: DriversService){
     }

  ngOnInit(){
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];}

   // validators & formcontrols
    
   firstname = new FormControl('',[Validators.required, Validators.minLength(3)]);
   lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
   email = new FormControl('', [Validators.required, Validators.minLength(3)]);
   phone_no = new FormControl('',[Validators.required, Validators.minLength(3)]);
   password = new FormControl('', [Validators.required, Validators.minLength(3)]);
   user_type = new FormControl('2',[Validators.required, Validators.minLength(3)]);
   city = new FormControl('',[Validators.required, Validators.minLength(3)]);
   
   // Grouped Form
   addDrivers = new FormGroup({
     firstname: this.firstname,
     lastname: this.lastname,
     email: this.email,
     phone_no: this.phone_no,
     password: this.password,
     user_type: this.user_type,
     city: this.city
   })

  //  functions 
  onSubmit(){
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      const driverData = this.addDrivers.value
      console.log(driverData)
      this.drivers.addDrivers(driverData).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = 'Vehicle successfully added';
          this.alertColor = "success"
         } else {
          this.alertMsg = 'something went wrong check connectivity and try again';
          this.alertColor = 'danger'
         }
         } 
      )
      }, 1600)
  }
}
