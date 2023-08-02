import { Component,OnInit } from '@angular/core';

interface Product{
 text: String,
 cols:number,
 rows:number,
 color:String,
 image:String,

}
@Component({
  selector: 'app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss']
})
export class PromotionBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles:Product[] = [
    {
      text: 'One',
      cols: 3,
      rows: 1,
      color: 'lightblue',
      image: "assets/images/u2.webp",
    },
    {
      text: 'Two',
      cols: 1,
      rows: 2,
      color: 'lightgreen',
      image: "assets/images/u2.webp",
    },
    {
      text: 'Three',
      cols: 1,
      rows: 1,
      color: 'lightpink',
      image: "assets/images/u2.webp",
    },
    {
      text: 'Four',
      cols: 2,
      rows: 1,
      color: '#DDBDF1',
      image: "assets/images/u2.webp",
    }
  ];
}