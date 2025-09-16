import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APPDEV1_FG_EXAM';
  products = [
    {name: "Carhartt Jacket", price: 1500, stock: 2},
    {name: "Stainless Steel Pan", price: 1500, stock: 5},
    {name: "The North Face Jacket", price: 1500, stock: 10},
    {name: "Salomon Hiking Shoes", price: 1500, stock: 2},
    {name: "Kappa Juventus Jacket", price: 1500, stock: 1},
  ];
}
