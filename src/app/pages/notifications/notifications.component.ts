import { Component , OnInit} from '@angular/core';
import { ISchedules,  } from 'src/app/model/notifications';
import { NotificationService } from 'src/app/service/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
   view_schedule: ISchedules [] = [];

   showLoader = true;
   constructor(private Notify: NotificationService){}


   ngOnInit(): void {
     this.Notify.getSchedules().subscribe(
      (res:any) =>{
       console.log(res.data);
       this.view_schedule = res.data
       this.showLoader = false;
       this.sortSchedule()
      }
     )
   }
   sortSchedule(){
    if(this.view_schedule){
      console.log('App drivers Exists')
     const newdata = this.view_schedule.sort((a, b) => {
        const dateA = new Date(a.sendDate).getTime();
        const dateB = new Date(b.sendDate).getTime();
        return dateB - dateA;
      });
      console.log('sorted array',newdata)
    }
    }
}
