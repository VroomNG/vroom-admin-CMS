import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';

interface City {
  name: string;
  code: string;
}
interface IVType {
  name: string;
  code: string;
}

interface Make {
  name: string;
  code: string;
}

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent  implements OnInit {
  adminForm!: FormGroup
  cities?: City[] |  undefined;
  make?: Make[] |  undefined;
  vehicle_type?: IVType[];
  // vehicle_make!: IVmake[];
  
  constructor(private formBuilder: FormBuilder){
    this.adminForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]]

    })
  }

  onSubmit(){
    if(this.adminForm.valid) {
     window.alert('admin added')
    }
  }
  ngOnInit(){
    this.cities = [
      { name: 'Daily', code: 'NY' },
      { name: 'Weekly', code: 'RM' },
      { name: 'Monthly', code: 'LDN' },
      { name: 'Yearly', code: 'IST' },
      // { name: 'Paris', code: 'PRS' }
  ];

  this.vehicle_type = [

    { name: 'SUV', code: 'NY' },
    { name: 'cedan', code: 'RM' },
    { name: 'Convertible', code: 'RM' },
    { name: 'Hatchback', code: 'RM' },
    { name: 'Van', code: 'RM' },
    { name: 'Minivan', code: 'RM' },
    { name: 'Wagon', code: 'RM' }
  ]

  this.make = [
    { name: 'SUV', code: 'NY' },
    { name: 'cedan', code: 'RM' },
    { name: 'Convertible', code: 'RM' },
    { name: 'Hatchback', code: 'RM' },
    { name: 'Van', code: 'RM' },
    { name: 'Minivan', code: 'RM' },
    { name: 'Wagon', code: 'RM' }
  ]

 

}}
