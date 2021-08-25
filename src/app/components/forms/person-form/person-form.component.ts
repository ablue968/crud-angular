import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaDataService } from '../../../service/persona-data.service';
import { Persona } from '../../../interfaces';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  

  personForm: FormGroup = this.fb.group({
    username:['pepero200'],
    password:['123456', Validators.required],
    name:['pepe', Validators.required],
    surname:['pepon', Validators.required],
    company_email:['pepe.pepon@bosonit.com', Validators.required],
    personal_email:['pepe2000@example.com', Validators.required],
    active:[true]
  })

  constructor( private fb: FormBuilder, private personaDataService: PersonaDataService) { }

  
  onSubmit(){
    this.personaDataService.addPerson( this.personForm.value)
      .subscribe( p => console.log('console p',p))
    this.personForm.reset(this.personForm);

  }

  ngOnInit(): void { }

}
