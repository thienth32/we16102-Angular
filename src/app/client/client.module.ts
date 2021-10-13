import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './screen/home/home.component';
import { AboutComponent } from './screen/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './screen/login/login.component';
import { UserComponent } from './screen/user/user.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
