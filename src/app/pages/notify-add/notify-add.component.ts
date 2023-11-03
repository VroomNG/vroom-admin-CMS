import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, } from '@angular/forms';

@Component({
  selector: 'app-notify-add',
  templateUrl: './notify-add.component.html',
  styleUrls: ['./notify-add.component.scss']
})
export class NotifyAddComponent {
  adminForm!: FormGroup
  
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
  ngOnInit(){ }
}
