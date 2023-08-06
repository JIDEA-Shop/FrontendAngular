import { Component,OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/classes/product';
import { ProductService } from 'src/app/services/product.service';
interface alert {
  border: string;
  background: string;
  color: string;
  icon: string;
  iconColor: string;
  message: string;
}

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  page = 1;
  pageSize = 12;
  searchMode:boolean = false;
  currentCategory:number = 1;
  previousCategory:number = this.currentCategory;
  length:number = 1;
  pageSizeOptions = [4, 8, 12,16];
  pageEvent: PageEvent = new PageEvent();


  alert:alert = {
    border: "alert-border-danger",
    background: "alert-danger",
    color: "alert-text-danger",
    icon: "alert-circle",
    iconColor: "text-danger",
    message: "This is an error alert — check it out!",
  }
  constructor(private productService:ProductService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => this.listProducts()
    )
  }
  cards: Product [] = [];
  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has(`keyword`);
    if(this.searchMode)
    {
      this.handleSearchList(String(this.route.snapshot.paramMap.get(`keyword`)));
    }
    this.handleProductList();
  }
  handleSearchList(keyword:string) {
    this.productService.getSearchProduct(this.page,this.pageSize,keyword).subscribe(
      x => {
        console.log(x);
        this.cards = x._embedded.products;
        console.log(this.cards);
        this.page = x.page.number;
        this.pageSize = x.page.size;
        this.length = x.page.totalElements;
      }
    )
  }
  handleProductList()
  {
    if(this.route.snapshot.paramMap.has("id")==true)
    {
      this.currentCategory = Number(this.route.snapshot.paramMap.get("id"));
    }
    else{
      this.currentCategory = 1;
    }
    if(this.previousCategory != this.currentCategory)
    {
      this.page = 1;
    }
    console.log(`The Current Category Id = ${this.currentCategory}, The Page Number: ${this.page},The Page Size: ${this.pageSize}`)
    this.handlePageEvent(this.pageEvent);
  }
  
  handlePageEvent(event?:PageEvent){
    if(event != undefined)
      this.productService.getProducts(event.pageIndex, event.pageSize,this.currentCategory).subscribe(
        x => {
          this.cards = x._embedded.products;
          this.page = x.page.number + 1;
          this.pageSize = x.page.size;
          this.length = x.page.totalElements;
        }
    )
    else{
      console.log("Event undefined")
    }
  }
  
  
  addToCart(productId:number){
    console.warn(productId);
    let product = this.cards.filter(x => (x.id == productId))[0];
    console.log(product);
    
    if(this.productService.handleQuantity(product)){
      console.log(this.productService.handleQuantity(product));
      this.productService.localAddToCart(product);
      
    }
  }
}

interface productData{
  id:number,
  sku: string,
  quantity: number,
      
}
