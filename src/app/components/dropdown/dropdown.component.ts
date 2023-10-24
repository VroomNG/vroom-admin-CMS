import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  dropdownItems = [
    { content: 'admin',
      children: [
        {
          path: 'Add admin',
          
        },
        {
          path: 'view admin',
          
        }
      ]
  },
    { content: 'partner' ,
    children: [
      {
        path: 'Add partner',
        
      },
      {
        path: 'view partner',
        
      }
    ]
  
  },
    { content: 'sponsors' },
  ];

  openDropdown: number | null = null;

  toggleDropdown(index: number) {
    if (this.openDropdown === index) {
      // Clicked the currently open dropdown, so close it
      this.openDropdown = null;
    } else {
      // Clicked a different dropdown, so open it
      this.openDropdown = index;
    }
  }


}
