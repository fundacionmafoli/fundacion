import { Component, OnInit } from '@angular/core';

//comsumo servivicio
import { GetDataService } from './../../get-data.service';

@Component({
  selector: 'app-showcases',
  templateUrl: './showcases.component.html',
  styleUrls: ['./showcases.component.css']
})
export class ShowcasesComponent implements OnInit {
//pt:photos services

constructor(public _ps:GetDataService) { 

}

  ngOnInit() {
  }
  

}
