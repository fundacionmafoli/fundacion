import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetDataService {
  
  allteam:any  [] = [];
  verExperiencias:any []=[];
  phrase:any = "";

  constructor(public http:Http) { 
    this.getTeam();
    this.getExperiencias();
    this.traerFrase();
  }

  public getTeam(){
        this.http.get("https://websitemafoli.firebaseio.com/team.json")
                  .subscribe(data => {
                  this.allteam = data.json();
                  // console.log(this.allteam);
              });
  }

  public getExperiencias(){
    this.http.get("https://websitemafoli.firebaseio.com/experiencias.json")
              .subscribe(data=>{
                this.verExperiencias = data.json();
                // console.log(this.verExperiencias);
                
              })
  }

  public traerFrase(){
      this.http.get("https://websitemafoli.firebaseio.com/frasedia.json")
                  .subscribe(data=>{
                    this.phrase = data.json();
                    // console.log(this.phrase);
                  })
  }
}
