export class Product {
    constructor(
        public id:number,
        public sku: string,
        public name: string,
        public description:string,
        public unit_price:number,
        public image_url:number,
        public active:boolean,
        public unitsInStock: number,
        public date_created: Date,
        public last_updated: Date,
    ){}
}
