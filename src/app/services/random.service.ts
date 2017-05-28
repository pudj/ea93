import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RandomService {
    constructor(private http: Http){
    console.log('working');
}
getRandomJokes(){
  return this.http.get('https://api.chucknorris.io/jokes/random')
    .map(res => res.json()) 
    .map(joke => <Joke>{value: joke.value});
}
}
 interface Joke{
 value: string;
}

 

