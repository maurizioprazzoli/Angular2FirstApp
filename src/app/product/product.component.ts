import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductDTO } from "app/DTO/product";


@Component({
  selector: 'app-product',
  inputs: ['product'],
  outputs: ['putRingOnIt'],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  putRingOnIt: EventEmitter<string>;
  product: ProductDTO;

  constructor() {
    this.putRingOnIt = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  OnRemovedClicked(): void
  {
    console.log(this.product.Name);
    this.putRingOnIt.emit(this.product.Name);
  }

}
