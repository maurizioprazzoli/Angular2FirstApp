
export class ProductDTO {
 constructor(
 public Sku: string,
 public Name: string,
 public ImageUrl: string,
 public Department: string[],
 public Price: number) {
 }
 }