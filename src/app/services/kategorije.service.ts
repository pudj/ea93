import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//DI

@Injectable()
export class KategorijeService {
    constructor(private http: Http){
}
getDevJokes(){
  return this.http.get('https://api.chucknorris.io/jokes/random?category=dev')
    .map(res => res.json()) 
    .map(joke => <Joke>{value: joke.value});
}
getMovieJokes(){
  return this.http.get('https://api.chucknorris.io/jokes/random?category=movie')
    .map(res => res.json()) 
    .map(joke => <Joke>{value: joke.value});
}
getFoodJokes(){
  return this.http.get('https://api.chucknorris.io/jokes/random?category=food')
    .map(res => res.json()) 
    .map(joke => <Joke>{value: joke.value});
}
}
 interface Joke{
 value: string;
}