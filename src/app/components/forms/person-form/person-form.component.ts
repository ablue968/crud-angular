import { Component, OnInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import { PersonaDataService } from '../../../service/persona-data.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  personForm = this.personaDataService.personForm;

  constructor( private fb: FormBuilder,  public personaDataService: PersonaDataService) { }
  
  onSubmit(){
    console.log(this.personForm.value);
    this.personForm.reset(this.personForm);
  }

  ngOnInit(): void { }

}
