import { Injectable } from '@angular/core';
import {ShoppinghttpService} from "./shoppinghttp.service";
import {ShoppingProduct} from "../common/classes/shopping-product";
import {ShoppingWish} from "../common/classes/shopping-wish";
import {ShoppingService} from "../shopping-service";
import {from, Observable} from "rxjs";
import {WishService} from "../wish-service";


@Injectable({
  providedIn: 'root'
})
export class ImplShoppingService implements ShoppingService , WishService{


  product : ShoppingProduct = new ShoppingProduct( "" , 0 , 0)
  wish : ShoppingWish = new ShoppingWish("" , 0);

  basket : ShoppingProduct[] = []
  wishlist : ShoppingWish[] = []



  constructor(private shoppingclient : ShoppinghttpService) { }


  // @ts-ignore
  // Helper method since TS lacks Collections Framework :(
  private removefromArr(arr: ShoppingProduct[] , index : String) : ShoppingProduct[] {

    let output : ShoppingProduct[] = []

    for(let i = 0 ; i < arr.length ; i++){

      if(arr[i].sku == index){

        //Skipping the one removed.
        continue;

      }else{

        // Load into new array.
        output.push(arr[i])

      }

      return output;

    }



  }

  // Remove One from cart.
  PulloutCart(product: ShoppingProduct): void {


    this.basket = this.removefromArr( this.basket , product.sku)
    this.shoppingclient.PulloutCart(product)

  }

  // Remove N from Cart
  PulloutNCart(product: ShoppingProduct): void {

    for(let i = 0 ; i< product.n ; i++ ){

      this.PulloutCart(product)

    }

    this.shoppingclient.PulloutNCart(product);

  }




  checkout(): void {
  }

  //putNintoCart
  putNintoCart(product: ShoppingProduct): void {

    for(let i = 0 ; i < product.n ; i++){
      this.putintoCart(product)
    }

    this.shoppingclient.putNintoCart(product)

  }

  //putNintoCart
  putintoCart(product: ShoppingProduct): void {

    this.basket.push(product)

    this.shoppingclient.putintoCart(product)

  }

  showall(): Observable<Object> {

    console.log("Starting Show all")
    this.shoppingclient.showall().subscribe( data => {


      Object.values(data).forEach(  product =>   {


        this.product = product as ShoppingProduct
        console.log(this.product.cost)
        this.basket.push(this.product)


      })



    } )


    let array = from(this.basket)


    return array;



  }

  getEntireWishlist(): Observable<Object> {

    let array = from(this.wishlist);
    return array;
  }

  removeFromWishlist(product: ShoppingProduct): void {

    let output : ShoppingWish[] = []

    for(let i = 0 ; i< this.wishlist.length ; i++){


      if(this.wishlist[i].sku == product.sku){
        //Skip this one
        continue;


      }else{

        output.push(this.wishlist[i])

      }

      this.wishlist = output;

    }

    this.shoppingclient.removeFromWishlist(product)

  }

  savetoWishlist(product: ShoppingProduct): void {

    let wish: ShoppingWish =  new ShoppingWish(product.sku , product.cost)

    this.wishlist.push(wish);

    this.shoppingclient.savetoWishlist(product);
  }












}
