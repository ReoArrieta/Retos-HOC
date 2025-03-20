import { Component } from '@angular/core';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';

@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  // templateUrl: './product-list.component.html',
  template: `
    <lib-product-card
      *ngFor="let product of products"
      [image]="product.image"
      [title]="product.title"
      [price]="product.price"
    ></lib-product-card>
  `,
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    { image: 'product1.jpg', title: 'Product 1', price: '$10' },
    { image: 'product2.jpg', title: 'Product 2', price: '$20' },
    { image: 'product3.jpg', title: 'Product 3', price: '$30' },
  ];
}
