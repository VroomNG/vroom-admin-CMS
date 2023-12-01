import { Component } from '@angular/core';

interface Idata {
  id:number,
  name: string,
}

@Component({
  selector: 'app-trips-settings',
  templateUrl: './trips-settings.component.html',
  styleUrls: ['./trips-settings.component.scss']
})


export class TripsSettingsComponent {

  data: Idata[] = [
    {
      id: 1, name: 'angular'
    },
    {
      id: 2, name: 'react'
    },
    {
      id: 3, name: 'node.js'
    },
    {
      id: 4, name: 'backend'
    },
  ]
  
  searchText = ' '
}
