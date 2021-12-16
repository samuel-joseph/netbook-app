import { Component } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
  
export class AppComponent {
  movieImages: Data[] = [];
  title = 'netbooks';
  opening = true; 
  toggle = true;
  media = "MOVIE VERSION";
  colors: string[] = ["white", "blue", "black"];
  headerColor = "white";
  

 
  constructor() {
  }
  changeTheme() {
    if (this.toggle) {
      this.opening = false;
      this.media = "BOOK VERSION"
      this.toggle = !this.toggle
      this.headerColor = "gray"
    } else {
      this.media = "MOVIE VERSION"
      this.toggle = !this.toggle
      this.headerColor = "white"
    }
  }
}
