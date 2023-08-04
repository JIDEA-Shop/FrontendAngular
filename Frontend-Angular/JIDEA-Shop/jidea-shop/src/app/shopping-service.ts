import {ShoppingProduct} from "./common/classes/shopping-product";
import {Observable} from "rxjs";

export interface ShoppingService {


  // Same interface specified by Java backend.
  // THE ONLY DIFFERENCE IS USING OBSERVABLE.
  // DOes this mean we use RxJava in backend?


  // Put single product into Basket
  putintoCart( product : ShoppingProduct) : void;


  // Put N products into Basket.
  putNintoCart(product : ShoppingProduct) :void;


  // Pull Product out of basket.
  PulloutCart(product: ShoppingProduct) : void;

  // Pull N Product out of basket.
  PulloutNCart( product : ShoppingProduct) : void;


  //TEST: does List<Product> -> ShoppingProduct[] in ts?
  // Collections to typescript can be challenging.

  // Display all Product.
   showall() : Observable<Object>;


  // Submit to Database and Complete Transaction.
  // Here, there is nothing to send because
  checkout() : void;


}
