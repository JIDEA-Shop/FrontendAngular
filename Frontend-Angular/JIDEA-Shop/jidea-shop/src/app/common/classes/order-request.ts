import { OrderItemDto } from "./order-item-dto";
import { OrderItemProduct } from "./order-item-product";

export class OrderRequest {
    constructor(
        public userId: number,
        public address: string,
        public orderItems: OrderItemDto[]

    ){

    }
}
