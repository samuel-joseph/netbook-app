import { Component, OnInit } from '@angular/core';
import { Data } from "../data";

@Component({
  selector: 'app-movie2',
  templateUrl: './movie2.component.html',
  styleUrls: ['./movie2.component.css']
})
export class Movie2Component implements OnInit {

  data: Data[] = [{
    title: "The Hunger Games: Catching Fire",
  subtitle: "Director Francis Lawrence (2013) Science Fiction",
  description: "The Hunger Games: Catching Fire is a 2013 American dystopian science fiction adventure film based on Suzanne Collins' dystopian novel Catching Fire (2009), the second installment in The Hunger Games trilogy. The film is the sequel to The Hunger Games (2012) and the second installment in The Hunger Games film series, produced by Nina Jacobson and Jon Kilik, with co-production by Lionsgate Films and distributed by Lionsgate Entertainment. Francis Lawrence directed the film, with a screenplay by Simon Beaufoy and Michael Arndt (credited as Michael deBruyn). Adding to the existing cast, the supporting cast was filled out with Philip Seymour Hoffman, Jeffrey Wright, Sam Claflin, Lynn Cohen, Jena Malone, and Amanda Plummer. Filming began on September 10, 2012, in Atlanta, Georgia, before moving to Hawaii. The plot of Catching Fire begins a few months after the previous installment, Katniss Everdeen and fellow District 12 tribute Peeta Mellark have returned home safely after winning the 74th Annual Hunger Games. Throughout the story, Katniss senses that a rebellion against the oppressive Capitol is simmering among the districts.",
  actors: "Jennifer Lawrence | Josh Hutcherson | Liam Hemsworth | Woody Harrelson | Elizabeth Banks | Lenny Kravitz | Stanley Tucci | Donald Sutherland | Philip Seymour Hoffman"
  }]



  constructor() { }

  ngOnInit(): void {
  }

}
