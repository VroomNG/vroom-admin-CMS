import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  showDropdown = false;
  userDetails:any;


  constructor(
    private router: Router,
    private users: UsersService
    ) { }

  ngOnInit() {
    
    const storedUserDetails = localStorage.getItem('userDetails');
    // check if the gotten items exists in local storage
    if (storedUserDetails) {
      // Parse the storedUserDetails JSON string to an object
      this.userDetails = JSON.parse(storedUserDetails);
      console.log('in admin component:', this.userDetails);

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
