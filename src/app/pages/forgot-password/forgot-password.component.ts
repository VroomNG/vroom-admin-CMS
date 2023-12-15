import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  // userDetails:any;
  // userId:any;
  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false
  
    credentials = {
    email: ''
    }
  
    constructor( 
      // private auth:AuthService, 
      public router: Router,
      private users: UsersService
      ) { }
  
      ngOnInit() {
        // window.alert('on init')
    
        // const storedUserDetails = localStorage.getItem('userDetails');
        
    
        // if (storedUserDetails) {
        //   // Parse the storedUserDetails JSON string to an object
        //   this.userDetails = JSON.parse(storedUserDetails);
        //   console.log('change pass:', this.userDetails);
        // } else {
        //   console.log('User details not found in localStorage.');
        // }
    
        // window.alert(this.userDetails.id)
        // this.userId = this.userDetails.id  
      }

    async submitEMail(){
      this.showAlert = true;
      console.log(this.credentials)

      const userEmail = this.credentials

      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
     try {   
      this.users.forgotPassword(this.credentials, userEmail).subscribe( 
        (res:any) => {
          console.log(res)
          // let {message} = res;
          // console.log(message)
          if(res.code == "100"){
            window.alert('failed to send otp')
            this.alertMsg = res.message
            this.alertColor = 'danger'
            this.inSubmission = false
          } 
          else if(res.code == "200"){
            window.alert('OTP Sent')
            this.alertMsg = "Password Changed succesfully"
            this.alertColor = "success"
            const {token} = res.data;
            const data = res.data;
            console.log(token);

            setTimeout(() => {
            localStorage.clear()
            this.router.navigate(['/login']) 
          }, 1600)
          }

        }
      );

    }
    catch(e){
    }
      }, 1600)
    }
    

}
