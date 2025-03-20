import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './icon.component.html',
  template: `<i [ngClass]="iconClass"></i>`,
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() iconClass: string = '';
}
