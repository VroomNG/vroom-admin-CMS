import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, ROUTES } from '@angular/router';
  
// import { adminService } from '../../service/admin.service';
// import { driverInfo } from '../../model/driverInfo';
// import { LoginService } from '../../service/login.service';
// import { environment } from '../../../environments/environment';
declare const $: any;

declare interface RouteInfo {
  id:number;
  path: string;
  title: string;
  icon: string;
  class: string;
  children: any;
}
@Component({
  // standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  ROUTES: RouteInfo[] = [
    { id:0,
      path: '/dashboard', title: 'Dashboard', icon: 'fa fa-store', class: '', children: '' },
    {
      id:1,
      path: '/', title: 'Admin', icon: 'fa-solid fa-user-tie', class: '', 
      children: [
        { path: 'add-admin', title: 'Add Admin', icon: 'fa fa-user-plus', class: '' },
        { path: 'view-admin', title: 'View Admin', icon: 'fa fa-eye', class: '' },
        { path: 'view-access-trail', title: 'View Access trail', icon: 'fa fa-eye', class: '' }
      ]
    },
    {
      id:2,
      path: '/', title: 'Vehicle Type', icon: 'fa-solid fa-truck-monster text-primary', class: '', children: [
        { path: 'add-vehicle', title: 'Add Vehicle type', icon: 'fa fa-car-side text-primary', class: '', children: '' },
        { path: 'view-vehicle', title: 'View Vehicle Type', icon: 'fa fa-eye text-primary', class: '', children: '' },
      ]
    },
    {
      id:3,
      path: '/partners', title: 'partners', icon: ' fa-solid fa-handshake text-primary', class: '', children: [
        { path: 'add-partners', title: 'Add Partners', icon: 'fa fa-plus text-primary', class: '', children: '' },
        { path: '/view-partners', title: 'View Partners', icon: 'fa fa-eye text-primary', class: '', children: '' },
      ]
    },
    {
      id:4,
      path: '/driver', title: 'Driver', icon: 'fa-solid fa-car text-primary', class: '', children: [
        { path: 'add-drivers', title: 'Add Driver', icon: 'fas fa-plus text-primary', class: '', children: '' },
        { path: 'approved-drivers', title: 'Approved Drivers', icon: 'fa fa-eye text-primary', class: '', children: '' },
        { path: 'unapproved-drivers', title: 'Pending Drivers', icon: 'fas fa-spinner text-primary', class: '', children: '' },
        { path: 'rejected-drivers', title: 'Rejected Drivers', icon: 'fas fa-power-off text-primary', class: '', children: '' },
      ]
    },
    {
      id:5,
      path: '/rider', title: 'Rider', icon: 'fa-solid fa-motorcycle fa-shake text-primary', class: '', children: [
        { path: 'add-riders', title: 'Add Rider', icon: 'fa fa-plus-square text-primary', class: '', children: '' },
        { path: 'view-riders', title: 'View Riders', icon: 'fa fa-eye text-primary', class: '', children: '' },
      ]
    },
    {
      id:6,
      path: '/', title: 'Trips', icon: 'fa-solid fa-bus', class: '', children: [
        { path: 'trips', title: 'Trips', icon: 'fas fa-suitcase-rolling', class: '', children: '' },
        { path: 'upcoming-trips', title: 'Upcoming Trips',  icon: 'fas fa-luggage-cart', class: '',children:''},
        { path: 'past-trips', title: 'Past Trip', icon: 'fa fa-map ', class: '', children: '' },
        { path: 'trips-settings', title: 'Trip Settings',  icon: 'fas fa-ban', class: '',children:''},
      ]
    },
    {
      id:7,
      path: '/', title: 'Reviews and Ratings', icon: 'fas fa-star', class: '', children: [
        { path: '/driver-ratings', title: 'Driver Ratings',  icon: 'fas fa-star-half-alt text-primary', class: '',children:''},
        { path: '/rider-ratings', title: 'Rider Ratings',  icon: 'far fa-star', class: '',children:''},
      ]
    },
    {
      id:8,
      path: '/#', title: 'Settlements', icon: 'fa-solid fa-money-bill-transfer', class: '', children: [
        { path: 'cash-settlements', title: 'Cash Settlement', icon: 'fa-solid fa-money-bill', class: '', children: '' },
        { path: 'partner-settlements', title: 'Partner withdraw Request', icon: ' fa-solid fa-arrow-right-arrow-left fa-flip ', class: '', children: '' },
        { path: 'withdrawal-details', title: 'Withdraw Request', icon: 'fa-solid fa-arrow-right-arrow-left fa-flip ', class: '', children: '' },
        { path: 'withdrawal-requests', title: 'Withdraw Details', icon: 'fa-solid fa-arrow-right-arrow-left fa-flip ', class: '', children: '' },
      ]
    },
      { 
        id:9,
        path: '/maps', title: 'Maps',  icon:'fa-solid fa-location-dot text-primary', class: '' ,children:''},
    { 
      id:10,
      path: '/user-profile', title: 'User profile', icon: 'fa-solid fa-user text-primary', class: '', children: '' },
      {
        id:11,
        path: '/', title: 'Notification Centre', icon: 'fa-solid fa-bell fa-shake', class: '', children: [
          { path: '/add-notification', title: 'Add Schedule', icon: 'fa fa-user-plus text-primary', class: '', children: '' },
          { path: '/notifications', title: 'View Schedule', icon: 'fa fa-eye ', class: '', children: '' },
        ]
      },
      // { id:12,
      //   path: '/', title: 'App messages', icon: 'fa-solid fa-envelope text-primary', class: '', 
      //     children:[ 
      //     { path: '/new-message', title: 'Push New Message', icon: 'fa-solid fa-comments text-primary', class: '', children: '' },
      //     { path: 'messages', title: 'View Messages', icon: 'fa-solid fa-eye ', class: '', children: '' },
      //   ]
      // },
      { id:13,
        path: '/', title: 'Reports', icon: 'fa-solid fa-chart-pie text-primary', class: '', 
        children:[ 
          { path: 'reports', title: 'View Report', icon: 'fa-regular fa-folder-open text-primary', class: '', children: '' },
          { path: 'reports-ref', title: 'View Referal Report', icon: 'fa-solid fa-eye ', class: '', children: '' },
        ] 
      
      },
    //   {
    //   id:14,
    //   path: '/', title: 'Surge Charge', icon: 'fa-solid fa-face-smile', class: '', children: [
    //     { path: '/add-charge', title: 'Add Surge Charge', icon: 'fa fa-user-plus', class: '' },
    //     { path: '/view-edit-charge', title: 'View & Edit', icon: 'fa fa-eye', class: '' }
    //   ]
    // },
    {
      id:15,
      path: '/', title: 'Discount', icon: 'fa-solid fa-percent', class: '', children: [
        { path: '/add-discount', title: 'Add Discount', icon: 'fa fa-user-plus', class: '' },
        { path: '/view-discount', title: 'View discount', icon: 'fa fa-eye', class: '' },
        { path: '/view-code-use', title: 'View discount Code Use', icon: 'fa fa-eye', class: '' }
      ]
    },
    {
      id:16,
      path: '/', title: 'App actions', icon: 'fa-solid fa-gear', class: '', children: [
        { path: '/uninstalls', title: 'View uninstalls', icon: 'fa-solid fa-trash-can', class: '' },
        { path: '/driver-visibility-history', title: 'Driver Visibility History', icon: 'fa fa-eye', class: '' },
        { path: '/manage-settings', title: 'Manage Settings', icon: 'fa-solid fa-wrench', class: '' }
      ]
    },
  ];

  carret_down =  false;
  carret_up = true;
  openDropdown: number | null = null;

  toggleCarretDown(index: number) {
    if (this.openDropdown === index) {
      // Clicked the currently open dropdown, so close it
      this.openDropdown = null;
    } else {
      // Clicked a different dropdown, so open it
      this.openDropdown = index;
      this.carret_down = true;
      this.carret_up = false
    }
  }
  // user_type:any;
  // user_id:any;
  // public focus: any;
  // public listTitles!: any[];
  // public location: Location;
  // loginName: any;
  // filepath: any;
  // siteURL: any;
  // filename: any;
  // profileDetails!: driverInfo;
  // prifileDetails: any;
  // nabarData: boolean = false;

  // public menuItems!: any[];
  // public isCollapsed = true;

  constructor(
    // location: Location,
    // private router: Router,
    // private route: ActivatedRoute,
    // private element: ElementRef,
    // private service: adminService,
    // private loginService: LoginService,
  ) {
    // this.user_type = (localStorage['user_type'] != undefined ? localStorage['user_type'] : '')
    // this.location = location;
    // this.siteURL = environment.serverUrl;
  }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    // console.log("Menu ==>", this.menuItems);
    // this.route.params.subscribe((event) => {
    //   this.isCollapsed = true;
    // });
    // this.getProfileDetails();
    console.log('onInit')

  }

  // getProfileDetails() {
    // debugger;
    // var userId = localStorage.getItem("userId");
    // this.user_id = userId;
    // console.log("userId", localStorage.getItem("userId"));
    // this.service.getInformedUsers(userId).subscribe((response: any) => {
    //   console.log("updated image", response)
    //   if (response) {
    //     this.nabarData = true;
    //     this.prifileDetails = response.data;
        // console.log(this.prifileDetails, "prifile details")
        // if (response.data != undefined){
        // if (response.data.profile_url != null && response.data.profile_url.length > 0) {
          // console.log('avatar', response.data.profile_url);
      //     this.filepath = response.data.profile_url;
      //   }
      // }
      // }
  //   });
  // }


}
export { ROUTES };

