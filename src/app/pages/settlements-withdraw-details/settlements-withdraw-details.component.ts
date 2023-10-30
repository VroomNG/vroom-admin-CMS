import { Component } from '@angular/core';
import { Iwithdraw_Request } from 'src/app/model/settlements';

@Component({
  selector: 'app-settlements-withdraw-details',
  templateUrl: './settlements-withdraw-details.component.html',
  styleUrls: ['./settlements-withdraw-details.component.scss']
})
export class SettlementsWithdrawDetailsComponent {
  withdraw: Iwithdraw_Request [] = [
    {
      id: 1,
      driver_code:'DRV00755',
      driver_name: 'Moshood Salu',
      driver_email: 'tpumpingt@gmail.com',
      phone: '+2347031582774',
      withdrawn_amount: '2800',
      withdraw_date: '2023-10-25T00:28:28.000Z',
      status: '',
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
      status: '',
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
      status: '',
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
      status: '',
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
      status: '',
      details_history: true,
    }
  
    ];
  
}
