import { Component, Input, OnInit, Output } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeProfiles = this.personaDataService.serviceProfiles;

  constructor( public personaDataService: PersonaDataService) {
  }

  ngOnInit(): void {
  }


}
