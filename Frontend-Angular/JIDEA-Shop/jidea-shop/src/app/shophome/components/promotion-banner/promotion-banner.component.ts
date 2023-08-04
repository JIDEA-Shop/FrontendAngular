import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/common/classes/product';
@Component({
  selector: 'app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss']
})
export class PromotionBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles:Product[] = [];
}