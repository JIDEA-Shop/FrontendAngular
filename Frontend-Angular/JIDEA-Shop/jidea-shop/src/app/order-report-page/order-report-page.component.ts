import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderItem } from '../common/classes/order-item';
import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { OrderItemProduct } from '../common/classes/order-item-product';

@Component({
  selector: 'app-order-report-page',
  templateUrl: './order-report-page.component.html',
  styleUrls: ['./order-report-page.component.scss']
})
export class OrderReportPageComponent implements OnInit{
  displayedColumns: string[] = ['Order Number', 'User ID', 'Address', 'Items','Total' ,'Date', 'Time'];

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
        this.cartDetails = response;
        // this.orderList = response.orderItemList;
      }
    )
  }
  
  goToDetails(orderId: number){
    OrderService.setOrderIdDetail(orderId);
    this.router.navigate(['/orderDetails'])
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
