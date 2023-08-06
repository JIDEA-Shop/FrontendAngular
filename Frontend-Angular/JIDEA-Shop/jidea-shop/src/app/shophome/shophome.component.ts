import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shophome',
  templateUrl: './shophome.component.html',
  styleUrls: ['./shophome.component.scss']
})
export default class ShophomeComponent implements OnInit{
  ngOnInit(): void {
    console.log("Shophome Ran");
  }

}
