import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Joke } from '../joke'

@Injectable()
export class PretragaService {
    constructor(private http: Http){}
    searchJokes(str: string){return this.http.get('https://api.chucknorris.io/jokes/search?query=' + str)
                        .map(res => res.json())
                        .map(joke => {return joke.value});
    }
                        
    }
