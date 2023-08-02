import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/common/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private page = 1;
  private pageSize = 10;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }
  cards: Product [] = [];
  listProducts(){
    /**
     * pagination is not handled in .html
     * page, and size currently hardcode.
     */
    this.productService.getProducts().subscribe(
      x => {
        console.log(x);
        this.cards = x._embedded.products;
        console.log(this.cards);
      }
    )
  }
}
