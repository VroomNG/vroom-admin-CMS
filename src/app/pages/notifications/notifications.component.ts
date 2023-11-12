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
       this.showLoader = false
      }
     )
   }
}
