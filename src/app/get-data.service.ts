import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetDataService {
  
  allteam:any  [] = [];
  getExperincias:any []=[];

  constructor(public http:Http) { 
    this.getTeam();
    this.getExperiencias();
  }

  public getTeam(){
        this.http.get("https://websitemafoli.firebaseio.com/team.json")
                  .subscribe(data => {
                  this.allteam = data.json();
                  console.log(this.allteam);
              });
  }

  public getExperiencias(){
    this.http.get("https://websitemafoli.firebaseio.com/experiencias.json")
              .subscribe(data=>{
                this.getExperiencias = data.json();
                console.log(this.getExperiencias);
                
              })
  }
}
