import { Component, Input, OnInit } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';
import { Persona } from 'src/app/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardProfiles: Persona[] = []
  

  constructor(public personaDataService: PersonaDataService) {  }

  ngOnInit(): void {

    this.personaDataService.testService().subscribe(p =>{
      this.cardProfiles = p;
    });

  }
  
}
