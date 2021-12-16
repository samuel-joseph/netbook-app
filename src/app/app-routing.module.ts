import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';
import { Book3Component } from './book3/book3.component';
import { Movie1Component } from './movie1/movie1.component';
import { Movie2Component } from './movie2/movie2.component';
import { Movie3Component } from './movie3/movie3.component';
import { Movie4Component } from './movie4/movie4.component';


const routes: Routes = [
  {path: "book1", component: Book1Component},
  {path: "book2", component: Book2Component},
  {path: "book3", component: Book3Component},
  {path: "movie1", component: Movie1Component},
  {path: "movie2", component: Movie2Component},
  { path: "movie3", component: Movie3Component },
  {path: "movie4", component: Movie4Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
