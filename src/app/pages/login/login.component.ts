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
  alertColor = 'info'
  inSubmission = false
  
    credentials = {
      email: '',
      password: ''
    }
  
    constructor( 
      public auth:AuthService, public router: Router
      ) { }
  
    ngOnInit(): void {
      
    }
    async login(){
      this.showAlert = true;

      setTimeout(() => {
      this.showAlert = true
      this.alertMsg = 'Loading... If sync persists check network'
      this.alertColor = 'info'
      // this.inSubmission = true
    try {
      
      this.auth.login(this.credentials).subscribe(
        (res:any) => {
          console.log(res)
          // let {message} = res;
          // console.log(message)
          if(res.code == "100"){
            this.alertMsg = res.message
            this.alertColor = 'danger'
            this.inSubmission = false
          } 
          else if(res.code == "200"){
            this.alertMsg = "Login Successful"
            this.alertColor = "success"
              this.router.navigate(['/dashboard']);
          }

        }
      );

    }
    catch(e){
        console.log(e)
        this.alertMsg = "Bad Network Reload"
        this.alertColor = 'danger'
        this.inSubmission = false
       
    }
      }, 1600)
     
    }
    

}
