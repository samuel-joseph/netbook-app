import { Component, OnInit } from '@angular/core';
import { Data } from "../data";

@Component({
  selector: 'app-movie4',
  templateUrl: './movie4.component.html',
  styleUrls: ['./movie4.component.css']
})
export class Movie4Component implements OnInit {
  data: Data[] = [{
    title: "The Hunger Games: Mockingjay – Part 2",
    subtitle: "Director Francis Lawrence (2015) Science Fiction Adventure",
    description: "The Hunger Games: Mockingjay – Part 2 is a 2015 American dystopian science fiction adventure film directed by Francis Lawrence, with a screenplay by Peter Craig and Danny Strong. It is the fourth and final installment in The Hunger Games film series, and the second of two films based on the 2010 novel Mockingjay, the final book in The Hunger Games trilogy by Suzanne Collins. The film was produced by Nina Jacobson and Jon Kilik, and distributed by Lionsgate. It features an ensemble cast that includes Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Julianne Moore, Philip Seymour Hoffman, and Donald Sutherland. Hoffman died in February 2014, marking his final film role.",
    actors: "Jennifer Lawrence | Josh Hutcherson | Liam Hemsworth | Woody Harrelson | Elizabeth Banks | Lenny Kravitz | Stanley Tucci | Donald Sutherland | Julianne Moore | Philip Seymour Hoffman | Jeffrey Wright"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
