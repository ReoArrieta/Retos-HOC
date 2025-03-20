import { Product } from './entities/product.entity';
import { EventEmitter } from 'events';

export class Inventory {
  private products: Map<string, number> = new Map();
  private events: EventEmitter = new EventEmitter();
  

  constructor(public product: Product) {}

  get stock(): number {
    return this.products.get(this.product.id) || 0;
  }

  updateStock(quantity: number): void {
    this.products.set(this.product.id, quantity);
  }

  reserveStock(quantity: number): boolean {
    const currentStock = this.stock;
    if (currentStock >= quantity) {
      this.updateStock(currentStock - quantity);
      return true;
    }
    return false;
  }

  // Para escuchar eventos en otros servicios
  onStockChanged(callback: (event: any) => void) {
    this.events.on('stockChanged', callback);
  }
}   