import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  static orderIdDetail:number = 0;
  constructor() { }

  static setOrderIdDetail(id: number){
    this.orderIdDetail = id;
  }  

  static getOrderIdDetail(){
    return this.orderIdDetail;
  }
}
