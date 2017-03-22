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
  messages: string[];

  constructor() {
    this.messages = new Array<string>();
  }

  ngOnInit() {
  }

  ringWasPlaced(message: string) {
      this.messages.push("Product clicked: " + message);
  }

}
