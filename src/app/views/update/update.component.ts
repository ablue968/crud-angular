import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../interfaces';
import { PersonaDataService } from '../../service/persona-data.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
 person! :Persona;

  constructor( private actRute: ActivatedRoute, private personaDataService: PersonaDataService, private router: Router ) {   }

  ngOnInit(): void {
    this.actRute.params
      .subscribe(({id})=> console.log)
  }

}
