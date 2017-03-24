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

  constructor() { }

  ngOnInit() { }

  productWasRemoved(product: ProductDTO) {
    var pos = this.productList.findIndex(p => p.Name == product.Name);
    this.productList.splice(pos,1);
  }
}
