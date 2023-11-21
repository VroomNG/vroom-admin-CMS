import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators, } from '@angular/forms';
import { RiderService } from 'src/app/service/riders.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-riders-add',
  templateUrl: './riders-add.component.html',
  styleUrls: ['./riders-add.component.scss']
})
export class RidersAddComponent {
  // variables
  cities!: City[] |  undefined;
  showAlert = false;
  alertMsg = 'Please wait';
  alertColor = 'primary';
  
  // constructors & lifecycles
  constructor(private riders: RiderService){
  }
  ngOnInit(){
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
}
// functions
// validators & formcontrols
    
firstname = new FormControl('',[Validators.required, Validators.minLength(3)]);
lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
email = new FormControl('', [Validators.required, Validators.minLength(3)]);
phone_no = new FormControl('',[Validators.required, Validators.minLength(3)]);
password = new FormControl('', [Validators.required, Validators.minLength(3)]);
user_type = new FormControl('1',[Validators.required, Validators.minLength(3)]);
city = new FormControl('',[Validators.required, Validators.minLength(3)]);

// Grouped Form
addRiders = new FormGroup({
  firstname: this.firstname,
  lastname: this.lastname,
  email: this.email,
  phone_no: this.phone_no,
  password: this.password,
  user_type: this.user_type,
  city: this.city
})
onSubmit(){
  this.showAlert = true
  setTimeout(() => {
    this.showAlert = true
    this.alertMsg = 'Loading... If sync persists check network'
    this.alertColor = 'info'
    const ridersData = this.addRiders.value
    console.log(ridersData)
    this.riders.addRiders(ridersData).subscribe(
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
