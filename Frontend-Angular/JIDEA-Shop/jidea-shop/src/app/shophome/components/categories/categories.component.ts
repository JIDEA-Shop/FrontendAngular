import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/classes/category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  
  constructor(private productService:ProductService,private route:Router){}
  ngOnInit(): void {
    this.getCategories();
  }
  selectedCategory:number = 1;
  categories:Category[]=[];
  getCategories() {
    this.productService.getCategories().subscribe
    (
      data => {
        console.log(data._embedded.productCategory);
        this.categories = data._embedded.productCategory;
      }
    )
  }
  selectCategory(category:Category)
  {
    this.selectedCategory = category.id;
    this.route.navigateByUrl(`shop/category/${category.id}`)
  }
}
