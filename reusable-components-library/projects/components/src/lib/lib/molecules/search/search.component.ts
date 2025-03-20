import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../atoms/input/input.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'lib-search',
  standalone: true,
  imports: [FormsModule, InputComponent, ButtonComponent],
  // templateUrl: './search.component.html',
  template: `
    <lib-input [(ngModel)]="query" placeholder="Search" />
    <lib-button [label]="'Search'" (clicked)="onSearch()"></lib-button>
  `,
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.query);
  }
}
