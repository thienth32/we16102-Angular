import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // yc1: hiển thị danh sách sản phẩm dựa vào dữ liệu của biến products
  // yc2: Sử dụng pipe để hiển thị tên sản phẩm theo kiểu capitalize & giá theo việt nam đồng
  // yc3: thêm form lọc ở phía trên của table danh sách sản phẩm, yêu cầu thực hiện:
  // lọc theo tên sản phẩm
  // lọc theo hãng sản xuất
  // yc4: bổ sung thêm 2 thẻ select ở trong phần filter bao gồm:
  // 1. tên cột cần sắp xếp (name, price, status)
  // 2. sắp xếp theo (tăng dần, giảm dần)
  // yc5: thực hiện tạo form thêm & sửa 
  // yc6: thực hiện xóa bằng cách bấm vào nút xóa ở dòng hiển thị sản phẩm
  products = [
    {
      id: 1,
      name: "iphone 13",
      price: 50000000,
      brands: 1,
      status: 1
    },
    {
      id: 2,
      name: "samsung s22",
      price: 52000000,
      brands: 2,
      status: 1
    },
    {
      id: 3,
      name: "iphone 12",
      price: 34000000,
      brands: 1,
      status: 0
    },
    {
      id: 4,
      name: "LG X1 max",
      price: 42000000,
      brands: 3,
      status: 0
    },
  ]

  brands = [
    {
      id: 1,
      name: "Apple"
    },
    {
      id: 2,
      name: "Samsung"
    },
    {
      id:3,
      name: "LG"
    }
  ]

  status = [
    {
      id: 1,
      name: "Còn trong kho"
    },
    {
      id: 2,
      name: "Hết sản phẩm"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
