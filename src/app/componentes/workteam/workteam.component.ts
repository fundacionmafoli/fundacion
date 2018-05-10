import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-workteam',
  templateUrl: './workteam.component.html',
  styles: ['./workteamstyle.css']
})
export class WorkteamComponent implements OnInit {

  constructor(public _st:GetDataService) { }

  ngOnInit() {
  }

}
