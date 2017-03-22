import { Component, OnInit } from '@angular/core';
import { ProductDTO } from "app/DTO/product";

@Component({
  selector: 'app-products-list',
  inputs: ['productList'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: ProductDTO[];

  constructor() {
  }

  ngOnInit() {
  }

  ringWasPlaced(message: string) {
    console.log("Put your hands up" + message);
  }

}
