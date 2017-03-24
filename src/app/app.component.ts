import { Component } from '@angular/core';
import { ProductDTO } from "app/DTO/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  productList: ProductDTO[];

  constructor() {
    this.productList = new Array<ProductDTO>();

    this.productList.push(new ProductDTO("000", "Product-000", "", ["Dep0", "Dep1"], 0.00));
    this.productList.push(new ProductDTO("001", "Product-001", "", ["Dep2", "Dep3"], 1.00));
    this.productList.push(new ProductDTO("002", "Product-002", "", ["Dep4", "Dep5"], 2.00));
    this.productList.push(new ProductDTO("003", "Product-003", "", ["Dep6", "Dep7"], 3.00));
    this.productList.push(new ProductDTO("004", "Product-004", "", ["Dep8", "Dep9"], 4.00));
  }

  productWasAdded(product: ProductDTO) {
    console.log(product.Name);
    this.productList.push(product);
  }

}
