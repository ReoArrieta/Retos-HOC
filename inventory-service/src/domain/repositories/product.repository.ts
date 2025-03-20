import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../../domain/repositories/product-repository.interface';
import { Product } from '../../domain/entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async findById(id: string): Promise<Product> {
    return await this.productRepo.findOne({where: {id}}) as Product;
  }

  async save(product: Product): Promise<void> {
    await this.productRepo.save(product);
  }
}