import { Component, HostListener, OnInit } from '@angular/core';
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
  isCollapsed!: boolean;
  isSmallScreen = false;

  constructor(
    private router: Router,
    private users: UsersService
    ) { }

  ngOnInit() {
    this.checkScreenSize();
    const storedUserDetails = localStorage.getItem('userDetails');
    // check if the gotten items exists in local storage
    if (storedUserDetails) {
      // Parse the storedUserDetails JSON string to an object
      this.userDetails = JSON.parse(storedUserDetails);
      console.log('in admin component:', this.userDetails);

    } else {
      console.log('User details not found in localStorage.');
    }

    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

  logout(){
     window.alert('are you sure')
      localStorage.clear()
      this.router.navigate(['/login']) 
  }

  pDropdown(){
    this.showDropdown = !this.showDropdown
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth < 1000; // Adjust the breakpoint as needed
  }

}
