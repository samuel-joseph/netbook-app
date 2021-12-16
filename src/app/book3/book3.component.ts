import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book3',
  templateUrl: './book3.component.html',
  styleUrls: ['./book3.component.css']
})
export class Book3Component implements OnInit {
  title = "Mockingjay"
  subtitle = "Suzanne Collins (2010) | Science Fiction"
  description = "Mockingjay is a 2010 science fiction novel by American author Suzanne Collins. It is chronologically the last installment of The Hunger Games series, following 2008's The Hunger Games and 2009's Catching Fire. The book continues the story of Katniss Everdeen, who agrees to unify the districts of Panem in a rebellion against the tyrannical Capitol."
  plot = "Katniss Everdeen, her mother, her sister Primrose Everdeen, mentor Haymitch Abernathy, and her friends Finnick Odair and Gale Hawthorne, along with the survivors from District 12, adjust to life underground in District 13, headquarters of the rebellion in Panem. Katniss reluctantly agrees to act as the Mockingjay”–the symbol of the rebellion–for rebel propaganda, on the condition that District 13 President Alma Coin grant immunity to all surviving Hunger Games tributes, including Katniss's friend Peeta Mellark and Finnick's lover Annie Cresta. Coin, however, insists on flipping for Katniss's other demand: the right to personally execute Panem President Coriolanus Snow. The Capitol tortures Peeta to demoralize Katniss. A rescue team extracts Peeta along with the other captured victors, but discover that he has been brainwashed to fear and despise Katniss. He attempts to kill her, and is restrained under heavy guard while medics seek a cure. Finnick and Annie marry in a propaganda effort."
  characters = "Katniss Everdeen | Peeta Mellark | Haymitch Abernathy | President Snow | Finnick Odair"
  constructor() { }
  ngOnInit(): void {
  }

}
