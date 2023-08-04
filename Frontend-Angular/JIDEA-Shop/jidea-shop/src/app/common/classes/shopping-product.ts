export class ShoppingProduct {
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

  get n(): number {
    return this._n;
  }

  set n(value: number) {
    this._n = value;
  }


  private _sku : string = ""
  private _cost : number = -9999
  private _n : number = 0

  constructor(

    sku : string,
    cost : number,
    n : number,

  ){}

}
