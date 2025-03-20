import { Product } from "../entities/product.entity";

export interface IProductRepository {
    findById(id: string): Promise<Product>;
    save(product: Product): Promise<void>;
  }