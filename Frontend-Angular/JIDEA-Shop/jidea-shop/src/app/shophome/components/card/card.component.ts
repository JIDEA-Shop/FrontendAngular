import { Component,OnInit } from '@angular/core';

interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/**
 * Card Information: Will be replace with Products
 */
  cards: cards [] = [
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u3.webp",
      btn: "primary",
    },
    {
      image: "assets/images/u4.webp",
      btn: "accent",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
  ]

}
