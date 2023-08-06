import { Component,  OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderItem } from '../common/classes/order-item';
import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderItemProduct } from '../common/classes/order-item-product';
import { Product } from '../common/classes/product';
import { CartItem } from '../common/classes/cart-item';
import { OrderRequest } from '../common/classes/order-request';
import { OrderItemDto } from '../common/classes/order-item-dto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']

})

export class CartPageComponent  implements OnInit{
  

  displayedColumns: string[] = ['Image', 'Name', 'Price' , 'Buttons','Total'];
  itemCount = 2;
  productDetails:Product[] = [];
  cartItems: CartItem[] =[];
  orderItems: OrderItemDto[] =[];
  discount = -125;
  delivery = 10;
  maxQuanity = false;
  isEmpty=true;
  alertPlaceOrder = false;
  // orderList: OrderItemProduct [] = [];

  address = {
      street: '',
      city: '',
      state: ''
  }
  fullAddress = '';

  @ViewChild('addressForm') addressForm!: NgForm;

  

  constructor(private prodcutService: ProductService, 
              private router: Router, 
              private orderService: OrderService,
              private cdr: ChangeDetectorRef){

  }

  ngOnInit(): void {
    
    this.getProductDetails();
  }



  private getProductDetails(){
    // this.prodcutService.getOrderList().subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.cartDetails = response;
    //     console.log(response[0].orderItemList);
    //     // this.orderList = response.orderItemList;
    //   }
    // )
    let localCart = localStorage.getItem('localCart');
    if(localCart){
      this.isEmpty=false;
      this.productDetails = JSON.parse(localCart);

      

      this.productDetails.forEach(element => {
        // if(this.cartItems.map(x=>x.sku).includes(element.sku)){

        //   this.cartItems.filter(x=>(x.sku==element.sku))[0].price *= 
        //   this.cartItems.filter(x=>(x.sku==element.sku))[0].quantity;
        // }else{
          this.cartItems.push(new CartItem(element.image_url,element.name,element.unit_price,1,element.sku));
        //}
      });  
    }  
  }

  decreaseCount(item: CartItem){
    if(item.quantity == 1){
      item.quantity--;
      this.removeFromCart(item.sku)
      //this.getProductDetails();
      //this.data = 'Data changed';
     // this.cdr.detectChanges();
      console.log(this.cartItems);
      this.maxQuanity ? this.maxQuanity=!this.maxQuanity : this.maxQuanity;
      return;
    }
    this.maxQuanity ? this.maxQuanity=!this.maxQuanity : this.maxQuanity;
    item.quantity--;
    this.updatePrice(item);
  }

  increaseCount(item: CartItem){
    let countInStock = this.productDetails.filter(x=>(x.sku == item.sku)).map(x=>x.unitsInStock)[0];
    if(item.quantity >= countInStock || item.quantity === 5){
      console.log('maxxx');
      
      this.maxQuanity=true;
      return;
    }
    item.quantity++;
    this.updatePrice(item);
    console.log(this.cartItems);
  }

  private updatePrice(item:CartItem){
    let initialPrice = this.productDetails.filter(x => (x.sku == item.sku)).map(x=>x.unit_price)[0];
    item.price=Math.round(initialPrice * item.quantity *100)/100;
    
  }

  private removeFromCart(skuCode:string){
    let localCart = localStorage.getItem('localCart');
    if(localCart){
      this.isEmpty=false;
      let itemsLocal:Product []= JSON.parse(localCart);
      let index = itemsLocal.indexOf(itemsLocal.filter(x=> (x.sku==skuCode))[0])
      console.log(index);
      
      
      itemsLocal.splice(index,1)
      
      this.cartItems = [];

      console.log(this.cartItems);
      
      itemsLocal.forEach(element => {
       
          this.cartItems.push(new CartItem(element.image_url,element.name,element.unit_price,1,element.sku));
        
      });
      console.log(this.cartItems);
      localStorage.setItem('localCart',JSON.stringify(itemsLocal));
    }
}

getSubtotal(){
  if(this.cartItems.length==0)return 0;
  return this.cartItems.map(x => x.price).reduce((a,b) => (a+b));
}

getTotal(){
  if(this.cartItems.length==0)return 0;
  let subtotal = this.getSubtotal();
  let total = this.discount + this.delivery + subtotal;
  return total < 0 ? 0 : total;
}

passDiscount(){
  return this.discount*-1;
}
onSubmit(){
  console.log("aadress: " +  this.address.state);
  this.fullAddress = this.getAddress();
}

private getAddress(){
  if([this.address.city,this.address.state,this.address.street].filter(x=>x.length==0).length>0)return'';
  return this.address.street + '  ' 
  + this.address.city + ', ' 
  + this.address.state;

}

placeOrder(){
  if(this.fullAddress.length>0 && this.cartItems.length>0){
   //let orderItems = new OrderItem[];
   this.cartToOrder()
   let orderRequest = new OrderRequest(101, this.fullAddress, this.orderItems);
   
   this.prodcutService.saveOrder(orderRequest).subscribe(
    (response) =>{
      this.cartItems=[];
      localStorage.removeItem('localCart');
      this.fullAddress = '';
      this.addressForm.reset();
    }
   );
  }else{
    this.alertPlaceOrder=true;
    
    setTimeout(()=>{
      this.alertPlaceOrder=false;
    },2500)
  }
}

private cartToOrder(){
  this.cartItems.forEach((element => {
    this.orderItems.push(new OrderItemDto(element.sku,Number((element.price/element.quantity).toFixed(2)),element.quantity));
  }))
}
}


interface GetOrderResponse{
  address:string,
  date:Date,
  id:number,
  orderItemsList: OrderItem[],
  orderNumber:string,
  time:Time,
  totalPrice:number,
  userId:number
}

// interface CartItem{
//         imageURL: string,
//         name: string,
//         price:number,
//         quantity:number
// }