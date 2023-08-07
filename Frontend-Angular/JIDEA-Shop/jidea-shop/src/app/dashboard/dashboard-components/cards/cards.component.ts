import { Component, OnInit } from '@angular/core';

interface cards {
  name: string,
  image: string;
  btn: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/**
 * Product information
 */
  cards: cards [] = [
    {
      name: "Evan Gal Zyncski",
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      name: "Duc Ho",
      image: "assets/images/u3.webp",
      btn: "primary",
    },
    {
      name: "Javier Olivia",
      image: "assets/images/u4.webp",
      btn: "accent",
    },
  ]

}
