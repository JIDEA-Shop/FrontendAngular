import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/classes/product';
import { ProductService } from 'src/app/services/product.service';

/**
 * TODO: CHANGE ELEMENT_DATA to from product Service in database.
 */
const ELEMENT_DATA: Product[] = [];

@Component({
  selector: 'app-shop-product',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Price', 'SKU', 'Description', 'Units In Stock'];
  dataSource = ELEMENT_DATA;
  page: number = 1;
  pageSize: number = 10;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
}

