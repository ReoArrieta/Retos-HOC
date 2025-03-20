import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductUseCase } from '../core/use-cases/product.use-case';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule],
  // templateUrl: './products.component.html',
  template: `<div
    class="d-flex align-items-center justify-content-center"
    style="min-height: 100vh"
  >
    <div class="text-center bg-primary rounded-3 p-5 shadow-lg text-white">
      <h1>Productos</h1>
      <br />
      <div class="row">
        @for (item of products; track $index) {
        <div class="col">
          <div class="card" style="width: 18rem">
            <img [src]="item.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.description }}.</p>
              <a
                [routerLink]="['/product/' + item.id]"
                class="btn btn-secondary"
                >Detalles</a
              >
            </div>
          </div>
        </div>
        }
      </div>
      <br />
      <a
        [routerLink]="['/']"
        routerLinkActive="router-link-active"
        class="btn btn-secondary"
        >Regresar</a
      >
    </div>
  </div>`,
  styleUrl: './products.component.scss',
  providers: [ProductUseCase],
})
export class ProductsComponent implements OnInit {
  private _productsUseCase = inject(ProductUseCase);
  products: Product[] = [];

  ngOnInit() {
    this.products = this._productsUseCase.getProducts();
  }
}
