import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/common/classes/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-promotion-banner',
  templateUrl: './promotion-banner.component.html',
  styleUrls: ['./promotion-banner.component.scss']
})
export class PromotionBannerComponent implements OnInit {

  tiles:Product[] = [
  ];
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.productService.getPromotions().subscribe(
      x => {
        this.tiles = x._embedded.products;
      }
    );
  }

}