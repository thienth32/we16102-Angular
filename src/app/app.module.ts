import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ClientLayoutComponent } from './screens/client-layout/client-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { ProductListComponent } from './screens/product-list/product-list.component';
import { ProductListTempComponent } from './screens/product-list-temp/product-list-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    ClientLayoutComponent,
    HomeComponent,
    AboutComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductListTempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
