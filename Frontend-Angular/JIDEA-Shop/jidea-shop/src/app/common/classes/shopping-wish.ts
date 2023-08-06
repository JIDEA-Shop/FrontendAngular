export class ShoppingWish {
  get sku(): string {
    return this._sku;
  }

  set sku(value: string) {
    this._sku = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }
  private _sku : string = ""
  private _cost : number = -9999

  constructor(

    sku : string,
    cost : number

  )
  {}



}
