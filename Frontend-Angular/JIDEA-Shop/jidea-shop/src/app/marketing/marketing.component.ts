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
  selector: "app-marketing",
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent {


  catalog : MarketingProduct[] = [];

  cart : ShoppingProduct[] = [];

  wishlist : ShoppingWish[] = [];

  inventoryList : MarketingProduct[] = []

  displayedColumns: string[] = ['sku', 'name', 'price' , "description"]

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

    //this.cart = shoppingservice.basket
    //this.wishlist = shoppingservice.wishlist



  }


  retrieveinventory() : MarketingProduct[]{
    return this.inventoryList
  }


  clearlist() : void{

    this.inventoryList  = []

  }

  saveforMarketing(sku : string){


    for(let a of this.marketingservice.catalog){
      if( a.sku == sku){
        console.log("Found!")
        this.inventoryList.push( a )


      }

    }



  }



  run() : void {

    console.log("Run is Running")

    for (let x of this.catalog) {
      console.log(x.description)

    }
  }





  addwish(): void {


    //Typescript has things called down casting.
    // It sucks. Imagine you have two Objects with the following Types:

    /*
    TYPE A
    {

    a: 1
    b: 1
    c: 2
    d: 3
    e: 4


    }

    TYPE B
    {
    a:
    e:
    }

     */

    // The goal is to Map A to B. with A's values in B.
    // So in the example above, throw away b,c, and d from A and set it to type B.

    //Why is it important: Interfaces should specify the Entities where Entities are
    // specified by Type



    // So Imagine that.
    // In JS you would do  " delete A.b , delete A.c , and delete A.d" to get it done.
    // Thats annoying. Imagine you have 20 fields.

    // The addition of "rest destructuring" helped fix this

    // let {b,c,d, ...name} = A

    // This produced a variable called "name" with fields a and e.
    // So in essence, you need to know -- in set notation -- A-B.

    // That still stinks. Ideally, all we would want is set (B subset A).
    // It sucks because you in either case, you have to know the properies of B and A.
    // In ideal world, we shouldnt care about fields.


    // With Typescript, this gets even more annoying since you have to handle types.

    // In the example below,
    // ShoppingProduct(sku, cost, n) -> WishProduct(sku,n)
    //



    // On the RHS you have to typecast to ShoppingProduct which is then mapped to placeholder
    let {n , ...placeholder }= this.shoppingservice.basket.at(0) as ShoppingProduct

    // This is annoying because you cannot specify type of placeholder. Its just an object.
    // Both samples below fail.
    //let {n , ...placeholder : WishProduct } = this.shoppingservice.basket.at(0) as ShoppingProduct
    //let {n , ...placeholder } : WishProduct = this.shoppingservice.basket.at(0) as ShoppingProduct

    //If you try this, it fails because on the LHS it doesnt know wtf the fields are since RHS is now Obj...
    //let {n , ...placeholder } : WishProduct = this.shoppingservice.basket.at(0) as Object

    // In the ideal world, i would want this.
    // let placeholder : WishProduct = this.shoppingservice.basket.at(0) as WishProduct.
    // Or something like this. Anything but the above. Its because of the dumb "undefined"
    // that TS cannot infer the fields to specify on the LHS.



    //Regardless, you now have to remember the Type of the Object.

    console.log("AFTER DOWNCASTING")
    console.log(typeof placeholder)


    //Luckily we remembered what the Type is here because we now have to cast it.
    this.shoppingservice.wishlist.push(placeholder as ShoppingWish)



  }


//  private legitDowncast



  clearAllWishes(): void{

    for(let a of this.shoppingservice.wishlist){

      this.shoppingservice.wishlist.pop()

    }

  }


  protected readonly alert = alert;
}
