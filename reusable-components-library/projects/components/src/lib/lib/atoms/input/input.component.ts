import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [],
  // templateUrl: './input.component.html',
  template: `<input [placeholder]="placeholder" [type]="type" />`,
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() placeholder: string = 'Enter text';
  @Input() type: string = 'text';
}
