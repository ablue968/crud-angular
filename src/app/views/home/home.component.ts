import { Component, Input, OnInit, Output } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';
import { Persona } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profiles!: Persona[];

  constructor( public personaDataService: PersonaDataService) {
    this.personaDataService.getPersona().subscribe(p => this.profiles = p)
  }

  ngOnInit(): void {
  }

  createOrUpdate( method: string){
    if( method == 'create'){
      console.log(method)
    }
    if(method == 'update'){
      console.log(method)
    }
  }

}
