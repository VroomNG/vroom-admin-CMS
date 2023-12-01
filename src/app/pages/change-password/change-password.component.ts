import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.'
  alertColor = 'info'
  inSubmission = false
  
    credentials = {
      old_pass: '',
      new_pass: ''
    }
  
    constructor( 
      private auth:AuthService, 
      public router: Router,
      private users: UsersService
      ) { }
  
    ngOnInit(): void {
      
    }
    async login(){
      this.showAlert = true;

      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
    try {
      
      this.auth.changePassword(this.credentials).subscribe( 
        (res:any) => {
          console.log(res.data)
          // let {message} = res;
          // console.log(message)
          if(res.code == "100"){
            this.alertMsg = res.message
            this.alertColor = 'danger'
            this.inSubmission = false
          } 
          else if(res.code == "200"){
            this.alertMsg = "Password Changed succesfully"
            this.alertColor = "success"
            const {token} = res.data;
            const data = res.data;
            // const {firstname} = res.data;
            
            console.log(token);
            // localStorage.setItem('token', token)

            // this.users.setLoginResponse(res.data);
            // localStorage.setItem('firstname',  firstname)
              this.router.navigate(['/dashboard']);
          }

        }
      );

    }
    catch(e){
    }
      }, 1600)
    }
    

}
