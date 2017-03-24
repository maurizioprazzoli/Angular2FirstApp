import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductDTO } from "app/DTO/product";


@Component({
  selector: 'app-product',
  inputs: ['product'],
  outputs: ['productRemovedEvent'],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRemovedEvent: EventEmitter<ProductDTO>;
  product: ProductDTO;

  constructor() {
    this.productRemovedEvent = new EventEmitter<ProductDTO>();
  }

  ngOnInit() {
  }

  OnRemovedClicked(): void {
    this.productRemovedEvent.emit(this.product);
  }

}
