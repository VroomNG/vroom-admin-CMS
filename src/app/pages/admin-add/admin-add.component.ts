import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterValidators } from '../../helpers/validators/register-validators'
// import { EmailTaken } from '../../helpers/validators/email-taken';

interface City {
  name: string;
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
  
  showAlert = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'orange';

  constructor(
    ){ }

  onSubmit(){
    if(this.adminForm.valid) {
     window.alert('admin added')
    }
  }
  ngOnInit(){
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Port Harcourt', code: '50001' },
      { name: 'Abuja', code: '50001' },
      { name: 'Lagos', code: '50001' },
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
  city = new FormControl('', [Validators.required, Validators.minLength(3)]) 
  user_type = new FormControl<number | null>(null,[Validators.required,Validators.min(0),Validators.max(100)])
  password = new FormControl('',[Validators.required, Validators.pattern(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  confirm_password = new FormControl('',[
    Validators.required
  ])

  adminForm = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone_no: this.phone_no,
    password: this.password,
    confirm_password: this.confirm_password
  })

  
}
