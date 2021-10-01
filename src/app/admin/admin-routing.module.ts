import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      {path: "category/add", component: AddCateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
