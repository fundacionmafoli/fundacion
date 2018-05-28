import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { WorkteamComponent } from './componentes/workteam/workteam.component';
import { ShowcasesComponent } from './componentes/showcases/showcases.component';
import { HeaderComponent } from './componentes/header/header.component';

import { GetDataService } from '../app/get-data.service';
//Servicio



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    WorkteamComponent,
    ShowcasesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
