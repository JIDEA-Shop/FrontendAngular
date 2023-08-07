import { Injectable } from '@angular/core';
import {MarketingService} from "../marketing-service";
import {MarketingProduct} from "../common/classes/marketing-product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Obj} from "@popperjs/core";

@Injectable({
  providedIn: 'root'
})
export class MarketinghttpService implements MarketingService{

  // This is equivalent to the controller in the backend.
  // It implements the methods.

  private port : String = "9996"
  private subdomain: String = "http://localhost:" + this.port


  constructor(private http : HttpClient) { }


  DiscountPrice(product: MarketingProduct): void {

    let endpoint = "/api/marketing/discount"

    this.http.post( this.subdomain + endpoint , product)

  }

  DisplayCatalog(): Observable<Object> {

    let endpoint = "/api/marketing/display"

    return this.http.get( this.subdomain + endpoint )


  }

  DisplayProduct(product: MarketingProduct): Observable<Object> {

    let endpoint = "/api/marketing/showProduct"

    return this.http.post( this.subdomain + endpoint , product)

  }

  DownloadCatalog(): void {

    let endpoint = "/api/marketing/catalog"

    this.http.get( this.subdomain + endpoint )
    console.log("Catalog Retreived")


  }

  gotomarketing(): void {

    let endpoint = "/api/marketing/analytics"

    this.http.get( this.subdomain + endpoint )

  }

  loadCatalog(catalog: MarketingProduct[]): void {

    let endpoint = "/api/marketing/upload"

    this.http.post( this.subdomain + endpoint , catalog)

  }

}
