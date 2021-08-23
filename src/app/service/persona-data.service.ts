import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class PersonaDataService {

  api_url: String="http://localhost:3000/personas";

  personForm: FormGroup = this.fb.group({
    username:['pepero200'],
    password:['123456', Validators.required],
    name:['pepe', Validators.required],
    surname:['pepon', Validators.required],
    company_email:['pepe.pepon@bosonit.com', Validators.required],
    personal_email:['pepe2000@example.com', Validators.required],
    active:[true]
  })

  // getPersonas(persona: Persona){
  //   return this
  // }

  serviceProfiles: Persona[] = []
  
  

  constructor( public fb: FormBuilder, private http: HttpClient ) {  }

  testService(): Observable<Persona[]>{
    return this.http.get<Persona[]>('http://localhost:3000/personas')
  }

  
}
