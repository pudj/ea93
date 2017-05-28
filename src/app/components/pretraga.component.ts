import { Component } from '@angular/core';
import { PretragaService } from '../services/pretraga.service';

@Component({
  selector: 'pretraga',
  template: `
  <input type="text" class="form-control" placeholder="pretraži" [(ngModel)]="searchJoke"
   name="searchJoke" (keyup)="searchJokes()">
   <div *ngIf="searchRes">
   <div *ngFor="let joke of searchRes">
   <ul>
   <li>{{joke}}</li>
   </ul>
   </div>
   </div>
  `,
  providers: [PretragaService]
})
export class PretragaComponent {
  searchJoke: string;
    searchRes: any[]=[];

    constructor(private searchService: PretragaService){

    }
    searchJokes(){
       this.searchService.searchJokes(this.searchJoke)
       .subscribe(joke => {
       this.searchRes = joke;
    });
}
}

