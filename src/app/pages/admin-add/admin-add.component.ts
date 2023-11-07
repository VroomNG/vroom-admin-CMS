import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidators } from '../../helpers/validators/register-validators'
// import { EmailTaken } from '../../helpers/validators/email-taken';
import { adminService } from 'src/app/service/admin.service';
import { AuthService } from 'src/app/service/auth.service';

interface City {
  name: string;
  // code: string;
}
interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})


export class AdminAddComponent implements OnInit {

  inSubmission = false; 

  
  
  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;
  
  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';

  constructor(
    // private admin: adminService,
     private auth: AuthService
    ){ }

  onSubmit(){
    if(this.adminForm.valid) {
     window.alert('admin added')
    }
  }
  ngOnInit(){
    this.userType = [
      { type: 'Super Admin', code: '4' },
      { type: 'Sub Admin', code: '3' },
      { type: 'Partner', code: '5' },
  ];
    this.cities = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' },
      { name: 'Port Harcourt' },
      { name: 'Abuja' },
      { name: 'Lagos'},
  ];
   
  }

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
  
  adminForm = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone_no: this.phone_no,
    password: this.password,
    city: this.city,
    user_type: this.user_type,
  })

  // const selectedValue = this.form.get('selectedOption').value;

  submit(){
     console.log(this.adminForm.value)
    //  window.alert('in process') 
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      this.auth.addAdmin(this.adminForm.value).subscribe(
        (res:any) => {
         console.log(res)
         if(res.code == 200){
          this.alertMsg = 'Email sent for verification, please verify your email';
          this.alertColor = "success"
         } else {
          this.alertMsg = 'something went wrong check connectivity and try again';
          this.alertColor = 'danger'
         }
         }
        
      )
      }, 1600)
   
  }

  reset(){
    this.adminForm.reset()
  }

  
}
