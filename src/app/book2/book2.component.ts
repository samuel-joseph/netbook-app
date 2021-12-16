import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book2',
  templateUrl: './book2.component.html',
  styleUrls: ['./book2.component.css']
})
export class Book2Component implements OnInit {
  title = "Catching Fire"
  subtitle = "Suzanne Collins (2009) | Science Fiction"
  description = "Catching Fire is a 2009 science fiction young adult novel by the American novelist Suzanne Collins, the second book in The Hunger Games series. As the sequel to the 2008 bestseller The Hunger Games, it continues the story of Katniss Everdeen and the post-apocalyptic nation of Panem. Following the events of the previous novel, a rebellion against the oppressive Capitol has begun, and Katniss and fellow tribute Peeta Mellark are forced to return to the arena in a special edition of the Hunger Games."
  plot = "The Hunger Games have passed, and Katniss’s and Peeta’s lives have changed substantially as they are now rich. Katniss returns home from the woods one day to find President Snow waiting for her. He’s concerned that any more public defiance of the Capitol by Katniss, like her and Peeta’s threat of suicide at the end of the Hunger Games, could spark an uprising in the districts. She has to continue pretending that she’s in love with Peeta, or they’ll hurt Gale, Katniss’s oldest friend. Katniss tells Haymitch everything that happened, and she realizes that she’ll never be able to stop pretending: She’ll have to marry Peeta."
  characters = "Katniss Everdeen | Peeta Mellark | Cinna | Haymitch Abernathy | President Snow"
  constructor() { }

  ngOnInit(): void {
  }

}
