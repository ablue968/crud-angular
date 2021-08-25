import { Component, Input, OnInit } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';
import { Persona } from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() profile!: Persona;
  
  constructor(public personaDataService: PersonaDataService, private router: Router) {  }

  ngOnInit(): void {  }

  btnUpdate(){
    this.router.navigateByUrl('/update')
  }

  btnDelete(id : number){
    console.log(id)
  }
  
}
