import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

// interface IUser {
  
//    id:number,
//    email:string,
//    password:string,
//    user_type:number,
//    device_token:number,
//    device_type:number,
//    created_at:string,
//    firstname:string,
//    lastname:string,
//    profile_url:string,
//    is_active:number,
//    ride_check:number,
//    phone_no: number,
//    city: string,
//    token: string 

// }

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  showDropdown = false;

  userDetails:any;
  // userDetailsArray: any[] = [];

  constructor(
    private router: Router,
    private users: UsersService
    ) { }

  ngOnInit() {
    
    const storedUserDetails = localStorage.getItem('userDetails');

    if (storedUserDetails) {
      // Parse the storedUserDetails JSON string to an object
      this.userDetails = JSON.parse(storedUserDetails);

      console.log('In admin component');
      console.log('userDetailsArray', this.userDetails);
    } else {
      console.log('User details not found in localStorage.');
    }
  
  }

  logout(){
     window.alert('are you sure')
      localStorage.clear()
      this.router.navigate(['/login']) 
  }

  pDropdown(){
    this.showDropdown = !this.showDropdown
  }
  // getObjectKeys(obj: any): string[] {
  //   return Object.keys(obj);
  // }

}
