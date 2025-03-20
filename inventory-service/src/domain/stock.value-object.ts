export class Stock {
    constructor(public quantity: number) {}
  
    isAvailable(): boolean {
      return this.quantity > 0;
    }
  }