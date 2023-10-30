import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-partners-add',
  templateUrl: './partners-add.component.html',
  styleUrls: ['./partners-add.component.scss']
})
export class PartnersAddComponent {

  adminForm!: FormGroup
  cities!: City[] |  undefined;

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
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }
}
