import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
  // code: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})


export class UserProfileComponent implements OnInit {

  cities!: City[] | undefined
  userDetails:any;
  isReadOnly = true;
  isEdit = false;
  constructor(private users:UsersService) { }

  ngOnInit() {
    
    // const storedUserDetails = localStorage.getItem('userDetails');

    // if (storedUserDetails) {
    //   // Parse the storedUserDetails JSON string to an object
    //   this.userDetails = JSON.parse(storedUserDetails);
    //   console.log('In userProfile component');
    //   console.log('userDetailsArray', this.userDetails);
    // } else {
    //   console.log('User details not found in localStorage.');
    // }

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
  [Validators.required,Validators.email], )
  phone_no = new FormControl('', [
    Validators.required,
    Validators.minLength(11),
    Validators.maxLength(15)
  ]) 
  // password = new FormControl('',[Validators.required, Validators.pattern(
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  city = new FormControl(this.cities, [Validators.required, Validators.minLength(3)]) 
  userForm = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone_no: this.phone_no,
    // password: this.password,
    city: this.city,
    // user_type: this.user_type,
  })

  setEdit(){
    this.isEdit = !this.isEdit
    this.isReadOnly = !this.isReadOnly;
  }

}
