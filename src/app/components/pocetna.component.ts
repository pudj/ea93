import { Component } from '@angular/core';
import { RandomService } from '../services/random.service';

@Component({
  selector: 'pocetna',
  template: `
  <ul>
  <li *ngFor="let joke of jokes">{{joke.value}}</li>
  </ul>
  <button (click)="getJoke()">more jokes</button>`,

  providers: [RandomService]
})
export class PocetnaComponent  { 
    jokes:Joke[] = [];

constructor(private jokesService: RandomService){}

ngOnInit() {
  this.getJoke()
}

getJoke() {
  this.jokesService.getRandomJokes()
    .subscribe(joke => {
       this.jokes.unshift(joke)
    })    
}
}
 interface Joke{
 value: string;
}


