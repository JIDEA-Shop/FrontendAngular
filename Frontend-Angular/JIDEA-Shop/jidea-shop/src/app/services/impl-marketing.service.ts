import { Injectable } from '@angular/core';
import {ShoppinghttpService} from "./shoppinghttp.service";
import {MarketingService} from "../marketing-service";
import {MarketingProduct} from "../common/classes/marketing-product";
import {from, Observable} from "rxjs";
//import Object from "$GLOBAL$";
import {MarketinghttpService} from "./marketinghttp.service";

@Injectable({
  providedIn: 'root'
})
export class ImplMarketingService implements MarketingService{


  product: MarketingProduct = new MarketingProduct("", "","","",false,-9999);

  catalog : MarketingProduct[] = []



  constructor(private marketingclient : MarketinghttpService) { }

  DiscountPrice(product: MarketingProduct): void {

    for(let i = 0 ; i< this.catalog.length ;i++){

      if(this.catalog[i].sku == product.sku){


        if((this.catalog[i].price - product.price)  <= 0 ){

          console.log("WARNING: AVOIDING GIVING AWAY PRODUCT FOR FREE")

          break;

        }

          // Apply discount
        this.catalog[i].price = this.catalog[i].price - product.price

        //Applying update to backend.
        this.marketingclient.DiscountPrice(product);

        //End Loop. Since there is only one unique item.
        break;

      }

    }


  }

  // This method will pull from the backend cache.
  // In general, the downloadS3 has to be ran first to have
  // the backend ready
  DisplayCatalog(): Observable<Object> {

    let value : MarketingProduct[] = []

      this
      .marketingclient
      .DisplayCatalog()
      .subscribe(data => {

      Object.values(data).forEach(prd =>{

        this.product =  prd as MarketingProduct
        this.catalog.push(this.product)
       // this.localDB.addMarketing(this.emp)
        value.push(this.product)


      })

    })

    return from(value);

  }

  DisplayProduct(product: MarketingProduct): Observable<Object> {

    let array = from(this.catalog)

    return array
  }


  // This will tell the backend to fetch
  DownloadCatalog(): void {

    this.marketingclient.DownloadCatalog();

    //The backend is now primed

  }

  gotomarketing(): void {

    this.marketingclient.gotomarketing()


  }

  loadCatalog(catalog: MarketingProduct[]): void {



  }

}
