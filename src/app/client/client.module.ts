import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './screen/home/home.component';
import { AboutComponent } from './screen/about/about.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
