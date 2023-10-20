import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { driverInfo } from '../../model/driverInfo';
import { passengerService } from '../../service/passenger.service';
import { exportService } from '../../service/export.service';
import {DateFilterPipe} from '../../pipe_filter/date-filter.pipe';
import { LoginService } from '../../service/login.service';

declare var $:any;

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  currentDate = new Date();
  dateFormat = 'MM/dd/yyyy';

  endDate!: string | number;
  startDate!: string | number;
  selectedMembers: any;
  getAlldata: any;
  show: boolean = true;
  hide: boolean = false;
  pagePath: any;

  FilterName = '';
  token: any;
  tripsList = [];
  tripStatusId: any;
  pageOfItems!: Array<any>;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private service: passengerService,
    private service1: exportService,
    private loginService:LoginService
    //public dateFilter:DateFilterPipe
  ) {
    if (localStorage['token'] != "" || localStorage['token'] != undefined) {
      this.token = localStorage['token'];
    }
    else
      this.route.navigate(['/login']);

    this.router.params.subscribe((response: any) => {
      // this.ridersDetails = new driverInfo();
      this.tripStatusId = response.id == undefined ? 0 : Number(response.id);

    });
  }

  ngOnInit() {
    this.getTripsView('','');
    this.pagePath = this.route.url.split('/');
    this.pagePath = this.pagePath[this.pagePath.length - 1];
    this.loginService.addInteraction(sessionStorage.getItem('email'),"Viewed Past trips ").subscribe((result:any) => {});
    $('#main').floatingScroll();
    
  }
  getTripsView(fromDate: string,toDate: string) {
    debugger; 
    this.tripsList = [];
    const inputRequest = {
      token: this.token,
      fromDate: fromDate,
      toDate: toDate
    };
    this.service.getTripsList(inputRequest, this.tripStatusId).subscribe((result: any) => {
      debugger;
      this.tripsList = [];
      if (result) {
        if (result.data.length) {
          console.log("RESULT ==>", result.data);
          // this.selectedMembers = result.data;
          this.getAlldata = result.data;

          if (result.data != undefined) {
            var tripType = '';
            for (let i = 0; i < result.data.length; i++) {
              tripType = '';
              if (result.data[i].trip_type == '1')
                tripType = 'Individual';
              else if (result.data[i].trip_type == '2')
                tripType = 'Share';
              else if (result.data[i].trip_type == '3')
                tripType = 'Split-Fare';

          //     this.tripsList.push({
          //       "id": result.data[i].id,
          //       "driverName": result.data[i].driverName,
          //       "trip_amount": result.data[i].trip_amount,
          //       // "actual_amount":JSON.parse(result.data[i].trip_fare_data).original_max_fare != undefined ? JSON.parse(result.data[i].trip_fare_data).original_max_fare:'',
          //       "actual_amount":(result.data[i].trip_fare_data) != undefined ? JSON.parse(result.data[i].trip_fare_data).original_max_fare != undefined?JSON.parse(result.data[i].trip_fare_data).original_max_fare:'':'',
          //       "riderName": result.data[i].riderName,
          //       "trip_date": result.data[i].trip_date,
          //       "trip_status": (result.data[i].trip_status == '0' ? 'Schedule' : (result.data[i].trip_status) == '1' ? 'Accepted' : result.data[i].trip_status == '2' ? 'Completed' : result.data[i].trip_status == '3' ? 'Cancelled' : result.data[i].trip_status == '4' ? 'Started' : result.data[i].trip_status == '5' ? 'Completed' : result.data[i].trip_status == '6' ? 'Completed' : ''),
          //       "trip_time": result.data[i].trip_time,
          //       "trip_type": tripType,
          //       "payment_type": result.data[i].payment_type,
          //       "user_id": result.data[i].user_id,
          //       "vehicle_type": result.data[i].vehicle_type,
          //       "Trips_sts": (result.data[i].trip_status == '0' || result.data[i].trip_status == '1' || result.data[i].trip_status == '4'?'Upcoming':'Past')
          //     })
            }
          }
          // this.tripsList = result.data;
        }
      }

    });

  }

  editTrips(id: string | number | undefined) {
    debugger;
    if (id != undefined && id != 0)
      this.route.navigate(['trips/trips-detail/' + id]);
  }
  onChangePage(items: Array<any>) {
    // update current page of items
    this.selectedMembers = items;
  }

  exportTrips() {    
    if(this.FilterName != '')
    this.service1.exportExcel(this.tripsList.filter((item:any) => item.trip_type.toLowerCase().includes(this.FilterName.toLowerCase()) || ( item.driverName != null ? item.driverName.toLowerCase().includes(this.FilterName.toLowerCase()):'') || item.id === this.FilterName || (item.riderName != null ? item.riderName.toLowerCase().includes(this.FilterName.toLowerCase()):'') || (item.vehicle_type != null ? item.vehicle_type.toLowerCase().includes(this.FilterName.toLowerCase()):'') || (item.payment_type != null ? item.payment_type.toLowerCase().includes(this.FilterName.toLowerCase()):'') || (item.trip_status != null ? item.trip_status.toLowerCase().includes(this.FilterName.toLowerCase()):'') || item.trip_amount === this.FilterName), 'tripsDetails');
   else
   this.service1.exportExcel(this.tripsList, 'tripsDetails');
  }

  dateFilter() {
    debugger;
    var tripdate=[]; this.tripsList=[];
    tripdate = this.getAlldata.filter((m: { trip_date: any; }) => m.trip_date > this.startDate && m.trip_date < this.endDate);
    if (tripdate != undefined) {
      var tripType = '';
      for (let i = 0; i < tripdate.length; i++) {
        tripType = '';
        if (tripdate[i].trip_type == '1')
          tripType = 'Individual';
        else if (tripdate[i].trip_type == '2')
          tripType = 'Share';
        else if (tripdate[i].trip_type == '3')
          tripType = 'Split-Fare';

      //   this.tripsList.push({
      //     "id": tripdate[i].id,
      //     "driverName": tripdate[i].driverName,
      //     "trip_amount": tripdate[i].trip_amount,
      //     "riderName": tripdate[i].riderName,
      //     "trip_date": tripdate[i].trip_date,
      //     "trip_status": (tripdate[i].trip_status == '0' ? 'Schedule' : (tripdate[i].trip_status) == '1' ? 'Accepted' : tripdate[i].trip_status == '2' ? 'Completed' : tripdate[i].trip_status == '3' ? 'Cancelled' : tripdate[i].trip_status == '4' ? 'Started' : tripdate[i].trip_status == '5' ? 'Completed' : tripdate[i].trip_status == '6' ? 'Completed' : ''),
      //     "trip_time": tripdate[i].trip_time,
      //     "trip_type": tripType,
      //     "payment_type": tripdate[i].payment_type,
      //     "user_id": tripdate[i].user_id,
      //     "vehicle_type": tripdate[i].vehicle_type,
      //   })
      }
    }

    console.log("date filter", this.selectedMembers);
    this.show = false;
    this.hide = true;
  }

  // CanceldateFilter() {
  //   this.hide = false;
  //   this.show = true;
  //   this.startDate = '';
  //   this.endDate = '';
  //   this.getTripsView('','');

  // }


  // submitDateFilter(){
  //   debugger;
  //   var fromDate = (<HTMLInputElement>document.getElementById("fromDate"));
  //   var toDate = (<HTMLInputElement>document.getElementById("toDate"));
  //   console.log("from Date =>",fromDate);
  //   console.log("to Date =>",toDate);
  // }


}
