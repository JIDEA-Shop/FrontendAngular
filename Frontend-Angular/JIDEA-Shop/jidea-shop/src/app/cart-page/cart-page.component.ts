import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderItem } from '../common/classes/order-item';
import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderItemProduct } from '../common/classes/order-item-product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']

})

export class CartPageComponent  implements OnInit{
  displayedColumns: string[] = ['User ID', 'Address', 'Total' ,'Date', 'Time', 'Buttons'];

  itemCount = 2;

  cartDetails:OrderItem[] = [];
  // orderList: OrderItemProduct [] = [];

  

  constructor(private prodcutService: ProductService, 
              private router: Router, 
              private orderService: OrderService){

  }

  ngOnInit(): void {
      this.getCartDetails();
  }

  getCartDetails(){
    this.prodcutService.getOrderList().subscribe(
      (response) => {
        console.log(response);
        this.cartDetails = response;
        console.log(response[0].orderItemList);
        // this.orderList = response.orderItemList;
      }
    )
  }

  decreaseCount(){
    this.itemCount--;
  }

  increaseCount(){
    this.itemCount++;
  }
  // goToDetails(orderId: number){
  //   console.log("id from cart: " + orderId);
    
  //   OrderService.setOrderIdDetail(orderId);
  //   this.router.navigate(['/orderDetails'])
  // }

  // getOrderItemsDetails(orderId: number){
  //   this.prodcutService.getOrderListItems(orderId).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.orderList = response;
        
  //     }
  //   )
  // }
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