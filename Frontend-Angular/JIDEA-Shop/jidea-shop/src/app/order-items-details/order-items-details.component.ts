import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderItem } from '../common/classes/order-item';
import { Time } from '@angular/common';
import { OrderItemProduct } from '../common/classes/order-item-product';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-items-details',
  templateUrl: './order-items-details.component.html',
  styleUrls: ['./order-items-details.component.scss']
})
export class OrderItemsDetailsComponent implements OnInit{


  displayedColumns: string[] = ['SKU Code', 'Price', 'Quantity'];

  orderDetails:OrderItemProduct [] = [];

  

  constructor(private prodcutService: ProductService, private orderService: OrderService){

  }

  ngOnInit(): void {
      console.log("order details: " + OrderService.getOrderIdDetail());
    
      this.getOrderItemsDetails(OrderService.getOrderIdDetail());
  }

 

  getOrderItemsDetails(orderId: number){
    this.prodcutService.getOrderListItems(orderId).subscribe(
      (response) => {
        console.log(response);
        this.orderDetails = response;
        
      }
    )
  }
}

