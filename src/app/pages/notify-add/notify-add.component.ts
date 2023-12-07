import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/service/notifications.service';

interface Option {
  id:number,
  name: string,
}

@Component({
  selector: 'app-notify-add',
  templateUrl: './notify-add.component.html',
  styleUrls: ['./notify-add.component.scss']
})
export class NotifyAddComponent implements OnInit {

  options: Option[] = [];

  checked: boolean = false;
  ischecked: boolean = false;
  isChecked: boolean = false;

  showAlert = false;
  alertMsg = 'Sending notification, please wait...';
  alertColor = 'primary';
  
  constructor(private NotifyService: NotificationService){ }

  ngOnInit(){
     this.options = [
      {id:0, name:'No'},
      {id:1, name:'Yes'}
    ]

   }

  // validator
  
  title = new FormControl('', [Validators.required, Validators.minLength(0)]);
  textBody = new FormControl('', [Validators.required, Validators.minLength(0)]);
  sendDate = new FormControl('', [Validators.required, Validators.minLength(0)]);
  riders = new FormControl('', [Validators.required, Validators.minLength(0)]);
  drivers = new FormControl('', [Validators.required, Validators.minLength(0)]);
  udrivers = new FormControl('', [Validators.required, Validators.minLength(0)]);

  addNotify = new FormGroup({
    title: this.title,
    textBody: this.textBody,
    sendDate: this.sendDate,
    riders: this.riders,
    drivers: this.drivers,
    udrivers: this.udrivers
  })

  submitNotify(){
    this.showAlert = true;
    let addNotifyValue = this.addNotify.value
    // let sendDate = this.addNotify.value.sendDate
    // const formattedDate = this.formatDateTimeForServer(sendDate);
    console.log(addNotifyValue);
    this.NotifyService.addNotify(addNotifyValue).subscribe(
      (res:any)=> {
        console.log(res)

        if(res.code === 200) {
            this.alertMsg = 'Notification Sent'
            this.alertColor = 'success' 
        } else(
          this.alertMsg = 'Failed to send Notification',
          this.alertColor = 'danger'
        )
      }
    )
  }

  formatDateTimeForServer(date: any): string {
    const formattedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    return formattedDate;
  }
  reset( ){
    this.addNotify.reset()
  }

}