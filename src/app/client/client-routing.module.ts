import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_share/auth.guard';
import { ClientComponent } from './client.component';
import { AboutComponent } from './screen/about/about.component';
import { HomeComponent } from './screen/home/home.component';
import { LoginComponent } from './screen/login/login.component';
import { UserComponent } from './screen/user/user.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
