import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductDTO } from "app/DTO/product";

@Component({
  selector: 'app-product-insertion',
  outputs: ['productAddedEvent'],
  templateUrl: './product-insertion.component.html',
  styleUrls: ['./product-insertion.component.css']
})
export class ProductInsertionComponent implements OnInit {
  productAddedEvent: EventEmitter<ProductDTO>;

  constructor() {
    this.productAddedEvent = new EventEmitter<ProductDTO>();
  }

  ngOnInit() {
  }


  OnAddClicked(form: any): void {
    console.log("OnAddClicked-a");
    var addedProduct = new ProductDTO(form.sku, form.name, form.imageUrl, ["", ""], form.price);

    this.productAddedEvent.emit(addedProduct);
    console.log(addedProduct);
  }

}

