import { OrderItemProduct } from "./order-item-product"
import { Time } from "@angular/common"

export class OrderItem {
    //constructor(public skuCode: string, public price: number, public quantity: number){
    constructor(
        public id: number,
        public address: string,
        public orderItemList: OrderItemProduct[],
        public time: Time,
        public date: Date,
        public orderEmail: string,
        public totalPrice: number,
        public orderNumber: string,
        ){}
    }


