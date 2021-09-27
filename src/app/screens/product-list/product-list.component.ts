import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: "sản phẩm 1"
    },
    {
      id: 2,
      name: "sản phẩm 2"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
