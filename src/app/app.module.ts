import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipe } from './pipes/gender.pipe';
import { PostUnitComponent } from './components/post-unit/post-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    PostUnitComponent,
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
