import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Product } from '../common/classes/product';
import { Category } from '../common/classes/category';
import { Time } from '@angular/common';
import { OrderItem } from '../common/classes/order-item';
import { OrderItemProduct } from '../common/classes/order-item-product';
import { CartItem } from '../common/classes/cart-item';
import { OrderRequest } from '../common/classes/order-request';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productURL = `http://34.198.182.156:5000/api/products`;
  // private productCatergoryUrl = `http://34.198.182.156:5000/api/product-category`;
  // private productURL = `http://localhost:9002/api/products`;
  // private productCatergoryUrl = `http://localhost:9002/api/product-category`;
  private productURL = `http://localhost:5000/api/products`;
  private productCatergoryUrl = `http://localhost:5000/api/product-category`;
  private orderURL = 'http://localhost:9001/api/orders';
  private orderProductListURL = 'http://localhost:9001/api/orders/productList'

  constructor(private http: HttpClient) {
  }

  /**
   * return a list of products,
   * getProducts return all Products with Page and defail category of 1
   * getCategory return all categories
   * getSearch product return product based on keyword.
   * @param size
   * @param page
   * @returns
   */
  getProducts(page: number, pageSize: number, category_id: number): Observable<GetProductResponse> {

  constructor(private http: HttpClient) { }
/**
 * return a list of products,
 * getProducts return all Products with Page and defail category of 1
 * getCategory return all categories
 * getSearch product return product based on keyword.
 * @param size 
 * @param page 
 * @returns 
 */
  getProducts(page:number, pageSize:number, category_id:number):Observable<GetProductResponse>{

    return this.http.get<GetProductResponse>(`${this.productURL}/search/findByCategoryId?id=${category_id}&page=${page}&size=${pageSize}`);
  }

  getCategories(): Observable<GetCategoryResponse> {
    return this.http.get<GetCategoryResponse>(`${this.productCatergoryUrl}`);
  }

  getSearchProduct(page: number, pageSize: number, keyword: string): Observable<GetProductResponse> {
    return this.http.get<GetProductResponse>(`${this.productURL}/search/findByNameContaining?name=${keyword}&page=${page}&size=${pageSize}`)
  }

  getOrderList(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.orderURL);
  }

  getOrderListItems(orderId: number): Observable<OrderItemProduct[]> {
    return this.http.get<OrderItemProduct[]>(`${this.orderProductListURL}/${orderId}`);
  }



  saveOrder(orderRequest: OrderRequest):Observable<OrderRequest>{
    console.log("Order placed:" + orderRequest.address);
    
    return this.http.post<OrderRequest>(this.orderURL, orderRequest);
  }

  getProductDetail(product_id: number):Observable<Product>
  {
    return this.http.get<Product>(`${this.productURL}/${product_id}`);

  }

  handleQuantity(product:Product){
    return product.unitsInStock > 0 
  }

  localAddToCart(product: Product){
     let cartData:Product[] =[];
     let localCart=localStorage.getItem('localCart');
     if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([product])); 
     }else{
      console.warn('Cart not empty!!');
      cartData =JSON.parse(localCart);
      if(!cartData.map(x=>x.sku).includes(product.sku)){
       // console.log("x: " + cartData.find());
        
        cartData.push(product);
      }
      localStorage.setItem('localCart',JSON.stringify(cartData));
      
     }

  }


}

  





interface GetProductResponse{
  _embedded:{
    products: Product[]
  }
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
interface GetCategoryResponse{
  _embedded:{
    productCategory: Category[]
  }
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }


}

interface GetOrderResponse{

}
