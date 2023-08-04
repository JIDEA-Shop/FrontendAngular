import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  tiles = [
    {
      text: 'One',
      cols: 2,
      rows: 2,
    },
    {
      text: 'Two',
      cols: 2,
      rows: 1,
    },
    {
      text: 'Three',
      cols: 2,
      rows: 1,
    },
    {
      text: 'Three',
      cols: 2,
      rows: 1,
    },
    {
      text: 'Three',
      cols: 2,
      rows: 1,
    },
  ];
  
}
