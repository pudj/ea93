import { Component } from '@angular/core';
import { KategorijeService } from '../services/kategorije.service';


@Component({
  selector: 'kategorije',
  template: `
  <ul>
  <li *ngFor="let joke of jokes">{{joke.value}}</li>
  </ul>
  <button (click)="getDevJoke()">more Dev jokes</button>
  <button (click)="getFoodJoke()">more Food jokes</button>
  <button (click)="getMovieJoke()">more Movie jokes</button>`,
providers: [KategorijeService]
})

export class KategorijeComponent {
    jokes:Joke[] = [];

constructor(private jokesService: KategorijeService){}

getFoodJoke() {
  this.jokesService.getFoodJokes()
    .subscribe(joke => {
       this.jokes.unshift(joke)
    })
}   

getMovieJoke() {
  this.jokesService.getMovieJokes()
    .subscribe(joke => {
       this.jokes.unshift(joke)
    })
}   

getDevJoke() {
  this.jokesService.getDevJokes()
    .subscribe(joke => {
       this.jokes.unshift(joke)
    })    
}
}
 interface Joke{
 value: string;
}
