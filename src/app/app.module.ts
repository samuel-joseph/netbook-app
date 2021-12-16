import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';
import { Book3Component } from './book3/book3.component';
import { Movie1Component } from './movie1/movie1.component';
import { Movie2Component } from './movie2/movie2.component';
import { Movie3Component } from './movie3/movie3.component';
import { Movie4Component } from './movie4/movie4.component';

@NgModule({
  declarations: [
    AppComponent,
    Book1Component,
    Book2Component,
    Book3Component,
    Movie1Component,
    Movie2Component,
    Movie3Component,
    Movie4Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
