import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PocetnaComponent} from './components/pocetna.component';
import {KategorijeComponent} from './components/kategorije.component';
import { PretragaComponent }  from './components/pretraga.component';


const appRoutes: Routes = [
    {
        path:'pocetna',
        component: PocetnaComponent
    },
    {
        path:'kategorije',
        component: KategorijeComponent
    },
    {
        path:'pretraga',
        component: PretragaComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);