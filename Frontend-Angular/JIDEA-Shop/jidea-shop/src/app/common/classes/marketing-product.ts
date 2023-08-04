export class MarketingProduct {
  get sku(): string {
    return this._sku;
  }

  set sku(value: string) {
    this._sku = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imageURL(): string {
    return this._imageURL;
  }

  set imageURL(value: string) {
    this._imageURL = value;
  }

  get buyersChoice(): boolean {
    return this._buyersChoice;
  }

  set buyersChoice(value: boolean) {
    this._buyersChoice = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
  private _sku : string = ""
  private _name : string = ""
  private _description : string = ""
  private _imageURL : string = ""
  private _buyersChoice : boolean = false
  private _price : number = -9999

  constructor(
    sku : string,
    name : string,
    description : string,
    imageURL : string,
    buyersChoice : boolean,
    price : number
  ) {
  }

}
