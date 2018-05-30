import {  Routes, RouterModule, Router} from "@angular/router";

import { ShowcasesComponent } from './componentes/showcases/showcases.component';
import { WorkteamComponent } from './componentes/workteam/workteam.component';
import { HeaderComponent } from './componentes/header/header.component';
import {AppComponent} from './app.component';

const app_routes: Routes = [

    { path: 'home' , component: AppComponent},
    { path: 'frasedia', component: HeaderComponent},
    
     { path: 'experiencias', component: ShowcasesComponent},
    
     { path: 'equipo', component: WorkteamComponent},
  
    { path: '**' , pathMatch: 'full', redirectTo: '/' }

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true } );