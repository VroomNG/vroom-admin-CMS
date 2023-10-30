import { Component } from '@angular/core';
import { Iwithdraw_Request } from 'src/app/model/settlements';

@Component({
  selector: 'app-settlements-partner-withdraw-requests',
  templateUrl: './settlements-partner-withdraw-requests.component.html',
  styleUrls: ['./settlements-partner-withdraw-requests.component.scss']
})
export class SettlementsPartnerWithdrawRequestsComponent {
  withdraw: Iwithdraw_Request [] = [
  {
    id: 1,
    driver_code:'DRV00755',
    driver_name: 'Moshood Salu',
    driver_email: 'tpumpingt@gmail.com',
    phone: '+2347031582774',
    withdrawn_amount: '2800',
    withdraw_date: '2023-10-25T00:28:28.000Z',
    status: 'paid',
    details_history: true,
  },
  {
    id: 1,
    driver_code:'DRV00755',
    driver_name: 'Moshood Salu',
    driver_email: 'tpumpingt@gmail.com',
    phone: '+2347031582774',
    withdrawn_amount: '2800',
    withdraw_date: '2023-10-25T00:28:28.000Z',
    status: 'not paid',
    details_history: true,
  },
  {
    id: 1,
    driver_code:'DRV00755',
    driver_name: 'Moshood Salu',
    driver_email: 'tpumpingt@gmail.com',
    phone: '+2347031582774',
    withdrawn_amount: '2800',
    withdraw_date: '2023-10-25T00:28:28.000Z',
    status: 'not paid',
    details_history: true,
  },
  {
    id: 1,
    driver_code:'DRV00755',
    driver_name: 'Moshood Salu',
    driver_email: 'tpumpingt@gmail.com',
    phone: '+2347031582774',
    withdrawn_amount: '2800',
    withdraw_date: '2023-10-25T00:28:28.000Z',
    status: 'paid',
    details_history: true,
  }

  ];

  

}
