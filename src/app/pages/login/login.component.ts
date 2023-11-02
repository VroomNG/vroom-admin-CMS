import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'primary'
  inSubmission = false
  
    credentials = {
      email: '',
      password: ''
    }
  
    constructor( 
      private auth:AuthService
      ) { }
  
    ngOnInit(): void {
    }
  
    async login(){
      this.showAlert = true
      this.alertMsg = 'Please wait! we are logging you in.'
      this.alertColor = 'primary'
      this.inSubmission = true


      // try {
        this.auth.login(this.credentials).subscribe(
          (response) => {
             console.log({response})
             
            //  console.log({response}.response.{message})
            //  return response
            //  if(response)
          }
        )
        console.log(this.credentials) 
       
      // }
      // catch(e:any) {
      //   // this.inSubmission = false
        // this.alertMsg = 'Anunexpected error occured. Please try again later',
        // this.alertColor = 'danger'
        // console.log(e)
        // window.alert("please enter a valid email")
      //   console.log('error')
  
      //   return 
      // }

      // this.alertMsg = 'success! you are now logged in.'
      // this.alertColor = 'green'
    }

}
