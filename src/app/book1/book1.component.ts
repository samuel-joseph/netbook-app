import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.css']
})
export class Book1Component implements OnInit {
  title = "Hunger Games"
  subtitle = "Suzanne Collins (2008) | Science Fiction"
  description = "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battleroyale to the death. The book received critical acclaim from major reviewers and authors. It was praised for its plot and character development. In writing The Hunger Games, Collinsdrew upon Greek mythology, Roman gladiatorial games, and contemporary reality television for thematic content. The novel won many awards, including the California Young Reader Medal, and was named one of Publishers Weekly's 'Best Books of the Year' in 2008."
  plot = "The Hunger Games trilogy takes place in an unspecified future time, in the dystopian, post-apocalyptic nation of Panem, located in North America. The country consists of a wealthy Capitol city, located in the Rocky Mountains, surrounded by twelve (originally thirteen) poorer districts ruled by the Capitol. The Capitol is lavishly rich and technologically advanced, but the districts are in varying states of poverty. The trilogy's narrator and protagonist, Katniss Everdeen, lives in District 12, the poorest region of Panem, located in Appalachia, where people regularly die of starvation. As punishment for a past rebellion against the Capitol (called the Dark Days), in which District 13 was destroyed, one boy and one girl from each of the twelve remaining districts, between the ages of 12 and 18, are selected by lottery to compete in an annual pageant called the Hunger Games. The Games are a televised event in which the participants, called tributes, are forced to fight to the death in a dangerous public arena. The winning tribute and his or her home district are then rewarded with food, supplies, and riches. The purposes of the Hunger Games are to provide entertainment for the Capitol and to remind the districts of the Capitol's power and its lack of remorse or forgiveness for the failed rebellion of the current competitors' ancestors."
  characters = "Katniss Everdeen | Peeta Mellark | Gale Hawthorne | Haymitch Abernathy | Coriolanus Snow"
  constructor() { }

  ngOnInit(): void {
  }

}
