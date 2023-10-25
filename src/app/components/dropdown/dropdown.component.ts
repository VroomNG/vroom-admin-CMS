import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  dropdownItems = [
    {
      content: 'admin',
      children: [
        {
          path: 'Add admin',
        },
        {
          path: 'view admin',
        }
      ]
    },
    {
      content: 'partner',
      children: [
        {
          path: 'Add partner',
        },
        {
          path: 'view partner',
        }
  ] 
}]

  openDropdown: number | null = null;

  toggleDropdownIcon(index: number) {
    if (this.openDropdown === index) {
      // Clicked the currently open dropdown, so close it
      this.openDropdown = null;
    } else {
      // Clicked a different dropdown, so open it
      this.openDropdown = index;
    }
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

}

