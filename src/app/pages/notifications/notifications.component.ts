import { Component } from '@angular/core';
import { INotifications } from 'src/app/model/notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
   view_schedule: INotifications [] = [
    {
      id: 1,
      title: 'Are you online?',
      description: 'Go online now to start accepting trip requests.',
      schedule_date: 'May 18, 2022',
      target: 'Approved Drivers',
    }
   ]
}
