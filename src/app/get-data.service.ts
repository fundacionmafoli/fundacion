import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetDataService {
  
  allteam:any  [] = [];

  constructor(public http:Http) { 
    this.getTeam();
  }

  public getTeam(){
        this.http.get("https://websitemafoli.firebaseio.com/team.json")
                  .subscribe(data => {
                  this.allteam = data.json();
                  console.log(this.allteam);
              });
  }

}
