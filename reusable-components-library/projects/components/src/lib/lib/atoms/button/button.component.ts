import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './button.component.html',
  template: `<button [ngClass]="class" (click)="onClick()">{{ label }}</button>`,
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() label: string = 'Click me';
  @Input() class: string = '';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
