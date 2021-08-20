import { Component, Input, OnInit } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';

interface Persona {
  username      : String;
  password      : String;
  name          : String;
  surname       : String;
  company_email : String;
  personal_email: String;
  active        : boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() person!: Persona[];
  

  constructor(public personaDataService: PersonaDataService) {  }

  ngOnInit(): void {}
  
}
