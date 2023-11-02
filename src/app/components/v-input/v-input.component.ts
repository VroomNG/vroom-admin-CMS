import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './V-input.component.html',
  styleUrls: ['./V-input.component.css']
})
export class VInputComponent implements OnInit {

    @Input() control: FormControl = new FormControl()
    @Input() type = 'text'
    @Input() placeholder = '';
    @Input() format = ''
    
  constructor() { }

  ngOnInit(): void {
  }

}
