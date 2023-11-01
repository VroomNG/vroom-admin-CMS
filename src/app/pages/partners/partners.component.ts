import { Component } from '@angular/core';
import { IPartners } from 'src/app/model/partners';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {

  partners:IPartners [] = [
        {
          id:1,
          org_name: 'Adebowale',
          contact_person: 'adebowale',
          email: 'demson4sure@gmail.com',
          phone: '08137296061',
          referal_code: 'ADEBOWALEA488',
          isEditable: true
        }
  ]

}
