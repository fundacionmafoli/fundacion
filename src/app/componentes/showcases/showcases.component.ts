import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//comsumo servivicio
import { GetDataService } from './../../get-data.service';

@Component({
  selector: 'app-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.css']
})
export class ShowcasesComponent implements OnInit {
//pt:photos services

constructor(_ps:GetDataService) { 

}

  ngOnInit() {
  }
  

}
