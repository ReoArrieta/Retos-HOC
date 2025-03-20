import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  // templateUrl: './home.component.html',
  template: `<div
    class="d-flex align-items-center justify-content-center"
    style="min-height: 100vh;"
  >
    <div class="text-center bg-primary rounded-3 p-5 shadow-lg text-white">
      <h1>Bienvenido</h1>
      <p>Aquí podrás ver nuestros productos</p>
      <a [routerLink]="['/products']" routerLinkActive="router-link-active"  class="btn btn-secondary">Productos</a>
    </div>
  </div>`,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
