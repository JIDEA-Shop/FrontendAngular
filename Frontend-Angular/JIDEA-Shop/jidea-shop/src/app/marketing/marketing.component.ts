import { Component } from '@angular/core';
import {MarketingService} from "../marketing-service";
import {ImplMarketingService} from "../services/impl-marketing.service";
import {MarketingProduct} from "../common/classes/marketing-product";
import {Observable} from "rxjs";
import {Product} from "../common/classes/product";
import {ImplShoppingService} from "../services/impl-shopping.service";
import {ShoppingProduct} from "../common/classes/shopping-product";
import {ShoppingWish} from "../common/classes/shopping-wish";

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent {


   catalog : MarketingProduct[] = [];

   cart : ShoppingProduct[] = [];

   wishlist : ShoppingWish[] = []

  constructor(private marketingservice : ImplMarketingService , private shoppingservice : ImplShoppingService) {


    // The assumption is that the Service is Running and has array stuck.
    marketingservice.DisplayCatalog().subscribe()

    //Pass the data to this component
    this.catalog = marketingservice.catalog;


    //Debug
    //for(let x of this.catalog){console.log(x.description)}


    //Load Wishlist

    console.log("Starting shopping service wishlist")

    shoppingservice.getEntireWishlist().subscribe()

    console.log("Doing the cart now")
    shoppingservice.showall().subscribe()

    this.cart = shoppingservice.basket
    this.wishlist = shoppingservice.wishlist



  }


  run() : void {

    console.log("Run is Running")

    for (let x of this.catalog) {
      console.log(x.description)

    }
  }




}
