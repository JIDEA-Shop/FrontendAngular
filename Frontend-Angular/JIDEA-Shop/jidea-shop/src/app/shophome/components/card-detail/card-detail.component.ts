import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  private thisProduct:Product = new Product(1,"","","",1,"", true,1,new Date(),new Date());
  private currentProductId = 1;
  constructor(private route:ActivatedRoute,private productService:ProductService){}

  ngOnInit(): void {
      this.handleProductDetail(this.currentProductId);
  }
  handleProductDetail(id:number) {
    this.productService.getProductDetail(id).subscribe(
      x => {
        this.thisProduct = x;
        console.log(this.thisProduct);
      }
    )
  }
  getThisProduct()
  {
    return this.thisProduct;
  }
}


