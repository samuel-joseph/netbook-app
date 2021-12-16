import { Component, OnInit } from '@angular/core';
import { Data } from "../data";

@Component({
  selector: 'app-movie3',
  templateUrl: './movie3.component.html',
  styleUrls: ['./movie3.component.css']
})
export class Movie3Component implements OnInit {
  data: Data[] = [{
  title: "The Hunger Games: Mockingjay – Part 1",
  subtitle: "Director Francis Lawrence (2014) Science Fiction Adventure",
  description: "The Hunger Games: Mockingjay – Part 1 is a 2014 American dystopian science fiction adventure film directed by Francis Lawrence with a screenplay by Peter Craig and Danny Strong. It is the first of two films based on Suzanne Collins' 2010 novel Mockingjay, the final book in The Hunger Games trilogy, and the third installment in The Hunger Games film series, produced by Nina Jacobson and Jon Kilik and distributed by Lionsgate. The film features an ensemble cast that includes Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Julianne Moore, Philip Seymour Hoffman, Jeffrey Wright, Stanley Tucci, and Donald Sutherland. Principal photography for both parts of the film began on September 23, 2013, in Atlanta, before moving to Paris for two weeks of filming and officially concluding on June 20, 2014, in Berlin.",
  actors: "Jennifer Lawrence | Josh Hutcherson | Liam Hemsworth | Woody Harrelson | Elizabeth Banks | Lenny Kravitz | Stanley Tucci | Donald Sutherland | Julianne Moore"
  }];


  

  constructor() { }

  ngOnInit(): void {
  }

}
