import {ShoppingProduct} from "./common/classes/shopping-product";
import {ShoppingWish} from "./common/classes/shopping-wish";
import {Observable} from "rxjs";

export interface WishService {


  // Save Product to wishlist.
  savetoWishlist( product : ShoppingProduct) : void;


  // Display all Wishlist
  getEntireWishlist() : Observable<Object>;

  // Search in Wishlist and remove.
  removeFromWishlist(product : ShoppingProduct) : void


}
