import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import {Category} from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getList(): Observable<Category[]>{
    let listUrl = `${environment.apiUrl}/categories` ;
    return this.http.get<Category[]>(listUrl);
  }
  addCate(obj: Category): Observable<Category>{
    return this.http.post<Category>(`${environment.apiUrl}/categories`, obj);
  }

  getCateByName(keyword: string): Observable<Category[]>{
    console.log(1);
    return this.http.get<Category[]>(`${environment.apiUrl}/categories?name_like=${keyword}`);
  }
}
