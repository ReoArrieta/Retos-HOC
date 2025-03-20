import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [],
  // templateUrl: './card.component.html',
  template: `
  <div class="card">
    <img [src]="imageUrl" alt="Card Image" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
`,
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() imageUrl: string = '';
  @Input() title: string = 'Card Title';
  @Input() description: string = 'Card Description';
}
