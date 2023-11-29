import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-code-use',
  templateUrl: './discount-code-use.component.html',
  styleUrls: ['./discount-code-use.component.scss']
})
export class DiscountCodeUseComponent {
  cities = [
    { name: 'Super Amdin', code: '4' },
    { name: 'Sub Admin', code: '3' },
    { name: 'Partner', code: '5' },
    // { name: 'Istanbul', code: 'IST' },
    // { name: 'Paris', code: 'PRS' }
  ];

  selectedCity: any;
}
