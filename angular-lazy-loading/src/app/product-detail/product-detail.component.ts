import { Component, inject } from '@angular/core';
import { ProductDetailUseCase } from '../core/use-cases/product-detail.use-case';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule],
  // templateUrl: './product-detail.component.html',
  template: `<div
    class="d-flex align-items-center justify-content-center"
    style="min-height: 100vh"
  >
    <div class="text-center bg-info rounded-3 p-5 shadow-lg text-white">
      <h1>Productos</h1>
      <br />
      <div class="card" style="width: 18rem">
        <img [src]="product.imageUrl" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}.</p>
        </div>
      </div>
      <br />
      <a
        [routerLink]="['/products']"
        routerLinkActive="router-link-active"
        class="btn btn-secondary"
        >Regresar</a
      >
    </div>
  </div>`,
  styleUrl: './product-detail.component.scss',
  providers: [ProductDetailUseCase],
})
export class ProductDetailComponent {
  private _route = inject(ActivatedRoute);
  private _productDetailUseCase = inject(ProductDetailUseCase);
  product: any;

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id')!;
    this.product = this._productDetailUseCase.getProductById(id);
  }
}
