import { Component, OnInit } from '@angular/core';

import { GetDataService } from './../../get-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
  
export class HeaderComponent  {
  
  dia:any = "";
  
  constructor(public _fs:GetDataService) {
    
    
      this.dia = new Date().getDay();

      switch (this.dia){
        case 0:
        this.dia = "Domingo";
        break;
  
        case 1:
        this.dia = "Lunes";
        break;
  
        case 2:
        this.dia = "Martes";
        break;
  
        case 3:
        this.dia = "Miercoles";
        break;
  
        case 4:
        this.dia = "Jueves";
        break;
  
        case 5:
        this.dia = "Viernes";
        break;
  
        case 6:
        this.dia = "Sabado";
        break;
      
    }
    
  }

  

  }
  


