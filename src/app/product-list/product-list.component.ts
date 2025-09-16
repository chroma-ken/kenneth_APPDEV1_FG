import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    products = [
    {name: "Carhartt Jacket", price: 1500, stock: 2},
    {name: "Stainless Steel Pan", price: 1500, stock: 3},
    {name: "The North Face Jacket", price: 1500, stock: 10},
    {name: "Salomon Hiking Shoes", price: 1500, stock: 2},
    {name: "Kappa Juventus Jacket", price: 1500, stock: 1},
  ]
}
