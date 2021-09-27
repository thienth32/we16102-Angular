import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './screens/home/home.component';
import {ProductDetailComponent} from './screens/product-detail/product-detail.component';
import {AboutComponent} from './screens/about/about.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProductListTempComponent } from './screens/product-list-temp/product-list-temp.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'san-pham',
    component: ProductListTempComponent,
    children: [
      {
        path: "",
        component: ProductListComponent
      },
      {
        path: "chi-tiet/:id",
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
