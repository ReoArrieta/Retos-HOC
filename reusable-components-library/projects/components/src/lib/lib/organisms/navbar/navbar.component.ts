import { Component } from '@angular/core';
import { SearchComponent } from "../../molecules/search/search.component";

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [SearchComponent],
  // templateUrl: './navbar.component.html',
  template: `
  <div class="logo">MyLogo</div>
  <div class="menu">Menu</div>
  <lib-search (search)="onSearch($event)"></lib-search>
`,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  onSearch(query: string) {
    console.log('Search:', query);
  }
}
