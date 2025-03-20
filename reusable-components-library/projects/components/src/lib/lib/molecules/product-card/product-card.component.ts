import { Component, Input } from '@angular/core';
import { CardComponent } from '../../atoms/card/card.component';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [CardComponent],
  // templateUrl: './product-card.component.html',
  template: `<lib-card [imageUrl]="image" [title]="title" [description]="price"></lib-card>`,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() image: string = '';
  @Input() title: string = 'Product Title';
  @Input() price: string = 'Product Price';
}
