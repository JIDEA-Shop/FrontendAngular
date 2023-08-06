export class CartItem {
    [x: string]: any;
    constructor(
        public imageURL: string,
        public name: string,
        public price:number,
        public quantity:number,
        public sku: string
    ){}
   
}
