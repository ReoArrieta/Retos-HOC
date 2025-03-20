import { TestBed } from '@angular/core/testing';
import { ProductUseCase } from './product.use-case';

describe('ProductUseCase', () => {
  let useCase: ProductUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    useCase = new ProductUseCase();
  });

  it('should return a list of products', () => {
    const products = useCase.getProducts();
    expect(products.length).toBeGreaterThan(0);
  });
});