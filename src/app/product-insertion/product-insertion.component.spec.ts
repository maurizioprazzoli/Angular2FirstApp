import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsertionComponent } from './product-insertion.component';

describe('ProductInsertionComponent', () => {
  let component: ProductInsertionComponent;
  let fixture: ComponentFixture<ProductInsertionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInsertionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
