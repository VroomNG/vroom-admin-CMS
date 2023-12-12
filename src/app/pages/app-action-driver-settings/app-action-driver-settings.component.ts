import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TripService } from 'src/app/service/trips.service';
import { ActionService } from 'src/app/service/action.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-action-driver-settings',
  templateUrl: './app-action-driver-settings.component.html',
  styleUrls: ['./app-action-driver-settings.component.scss']
})
export class AppActionDriverSettingsComponent implements OnInit {
  Settings: | any;
  isActive = true;

  showAlert = false;
  alertMsg = 'please wait...';
  alertColor = 'primary';
  searchText = ''
  readonly:boolean = true;

  constructor(
    private Trips: TripService,
    private AppAction: ActionService,
    private router: Router
  ){}

  ngOnInit(){
    this.Trips.getTripset().subscribe(
      (res:any)=>{
        console.log(res);
        this.Settings =  res.data[0]
        console.log(this.Settings)
      }
    )
  }

  interval = new FormControl('',[Validators.required, Validators.minLength(0)])
 
  settingsForm = new FormGroup({
    interval: this.interval,
  })

  onSubmit(){

    console.log(this.settingsForm.value);
    this.AppAction.updateInterval(this.settingsForm.value).subscribe(
      (res:any)=>{
        if(res.code == 200){
          window.alert('Updated successfully');
          location.reload();
          this.isActive = !this.isActive               
        }else {
          window.alert('An error occured!!')
        }
      }
    )
  }

  enableForm(){
    this.isActive = !this.isActive
  }
}
