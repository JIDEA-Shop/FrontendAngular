import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Product } from '../common/classes/product';
import { Category } from '../common/classes/category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productURL = `http://34.198.182.156:5000/api/products`;
  // private productCatergoryUrl = `http://34.198.182.156:5000/api/product-category`;
  private productURL = `http://localhost:5000/api/products`;
  private productCatergoryUrl = `http://localhost:5000/api/product-category`;
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
  getCategories():Observable<GetCategoryResponse>{
    return this.http.get<GetCategoryResponse>(`${this.productCatergoryUrl}`);
  }
  getSearchProduct(page: number, pageSize: number, keyword: string):Observable<GetProductResponse>{
    return this.http.get<GetProductResponse>(`${this.productURL}/search/findByNameContaining?name=${keyword}&page=${page}&size=${pageSize}`)
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