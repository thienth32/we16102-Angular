import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import {CategoryService} from '../services/category.service'
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  categories: Category[] = [];
  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
    // this.cateService.getList().subscribe(data => {
      // this.categories = data;
    // })
  }

}
