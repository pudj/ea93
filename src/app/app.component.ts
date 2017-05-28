import { Component } from '@angular/core';
import {PocetnaComponent} from './components/pocetna.component';



@Component({
  selector: 'my-app',
  template: `
  <nav>
    <a routerLink="/pocetna" routerLinkActive="active">Početna</a>
    <a routerLink="/kategorije" routerLinkActive="active">Kategorije</a>
    <a routerLink="/pretraga" routerLinkActive="active">Pretraga</a>
  </nav>
  <router-outlet></router-outlet>`
  ,
})
export class AppComponent  {  }
