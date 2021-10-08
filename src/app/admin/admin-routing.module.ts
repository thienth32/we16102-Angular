import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCateComponent } from './category/add-cate/add-cate.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      {
        path: 'add-cate',
        component: AddCateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
