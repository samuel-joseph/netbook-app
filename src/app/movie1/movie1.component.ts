import { Component, OnInit } from '@angular/core';
import { Data } from "../data";

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.css']
})
export class Movie1Component implements OnInit {

  data: Data[] = [{
    title: "The Hunger Games",
    subtitle: "Director Gary Ross (2012) Science Fiction",
    description: "The Hunger Games is a 2012 American dystopian action film directed by Gary Ross and based on Suzanne Collins's 2008 novel of the same name. It is the first installment in The Hunger Games film series and was produced by Nina Jacobson and Jon Kilik, with a screenplay by Ross, Collins, and Billy Ray. The film stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Lenny Kravitz, Stanley Tucci, and Donald Sutherland. The film is set in a dystopian post-apocalyptic future in the nation of Panem, where a boy and a girl from each of the nation's 12 Districts are chosen annually as tributes and forced to compete in The Hunger Games, an elaborate televised fight to the death. Katniss Everdeen (Lawrence) volunteers to take her younger sister's place when her sister was initially selected as tribute. With her district's male tribute, Peeta Mellark (Hutcherson), Katniss travels to the Capitol to train and compete in the hunger games.",
    actors: "Jennifer Lawrence | Josh Hutcherson | Liam Hemsworth | Woody Harrelson | Elizabeth Banks | Lenny Kravitz | Stanley Tucci | Donald Sutherland",
  }];

  
  constructor() { }

  ngOnInit(): void {
  }

}
