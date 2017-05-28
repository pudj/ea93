import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { PocetnaComponent }  from './components/pocetna.component';
import { KategorijeComponent }  from './components/kategorije.component';
import { PretragaComponent }  from './components/pretraga.component';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, FormsModule ],
  declarations: [ AppComponent, PocetnaComponent, KategorijeComponent, PretragaComponent],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
