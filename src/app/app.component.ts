import { Component } from '@angular/core';

//Traigo el servicio
import { GetDataService } from '../app/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( public gs:GetDataService ) { }
}
