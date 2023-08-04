import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShoppingService} from "../shopping-service";
import {ShoppingProduct} from "../common/classes/shopping-product";
import {WishService} from "../wish-service";
//import String from "$GLOBAL$";
import {ShoppingWish} from "../common/classes/shopping-wish";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppinghttpService implements ShoppingService , WishService{

  // This is equivalent to the controller in the backend.
  // It implements the methods.


  private port : String = "9999"
  private subdomain: String = "http://localhost:" + this.port


  constructor(private http : HttpClient) { }



  PulloutCart(product: ShoppingProduct): void {

    let endpoint = "/api/shopping/remove"

    this.http.post( this.subdomain + endpoint , product)

  }

  PulloutNCart(product: ShoppingProduct): void {

    let endpoint = "/api/shopping/Nremove"

    this.http.post(this.subdomain + endpoint , product)

  }

  checkout(): void {

    let endpoint = "/api/shopping/complete"

    this.http.get(this.subdomain + endpoint )

  }

  putNintoCart(product: ShoppingProduct): void {

    let endpoint = "/api/shopping/Nplace"

    this.http.post(this.subdomain + endpoint , product)

  }

  putintoCart(product: ShoppingProduct): void {

    let endpoint = "/api/shopping/place"

    this.http.post(this.subdomain + endpoint , product)

  }

  showall(): Observable<Object> {

    let endpoint = "/api/shopping/display"

    return this.http.get( this.subdomain + endpoint)

    ;
  }


  getEntireWishlist(): Observable<Object> {

    let endpoint = "/api/shopping/place"

    return this.http.get(this.subdomain + endpoint );


  }

  removeFromWishlist(product: ShoppingProduct): void {

    let endpoint = "/api/shopping/removewish"

    this.http.post(this.subdomain + endpoint , product)

  }


  savetoWishlist(product: ShoppingProduct): void {

    let endpoint = "/api/shopping/wish"

    this.http.post(this.subdomain + endpoint , product)

  }



}

