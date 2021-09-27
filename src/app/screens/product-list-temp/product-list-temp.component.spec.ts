import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTempComponent } from './product-list-temp.component';

describe('ProductListTempComponent', () => {
  let component: ProductListTempComponent;
  let fixture: ComponentFixture<ProductListTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
