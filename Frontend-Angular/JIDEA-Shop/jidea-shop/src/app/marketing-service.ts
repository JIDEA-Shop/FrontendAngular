import {MarketingProduct} from "./common/classes/marketing-product";
import {Observable} from "rxjs";

export interface MarketingService {


  // This interface mirrors the backend.
  // Note, still not sure if the Java Collections maps.
  // Also, might disable some of these methods in the future
  // for the frontend. Or leave them blank.

  // Will use Observable


  //Shows the Product on the page.
  DisplayProduct( product : MarketingProduct) : Observable<Object>;

  //Will Collection<Product -> array in ts?
  //Displays whole entire Catalog.
  DisplayCatalog() : Observable<Object>;

  //Applies a discount to the specific product.
  DiscountPrice(product : MarketingProduct) : void;



  // Provides a way to display all marketing stuff from ADMIN/Marketing
  loadCatalog(catalog : MarketingProduct[]) : void;


  // Retrieves Data from Admin's S3 Bucket.
  // This will pull from S3 to Backend.
  // Must use DisplayCatalog after wards to retrieve it.
  DownloadCatalog() : void;



  //Saves data to persistent. This would help with a Analysis Service
  gotomarketing() : void;





}
