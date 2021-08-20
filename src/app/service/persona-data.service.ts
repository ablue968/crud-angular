import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Persona {
  username      : String;
  password      : String;
  name          : String;
  surname       : String;
  company_email : String;
  personal_email: String;
  active        : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonaDataService {

  
  dummie: Persona = {
    username      : 'dummie01',
    password      : '123456a',
    name          : 'pepe',
    surname       : 'perez',
    company_email : 'pepe.perez@ɵbosonit.com',
    personal_email: 'pepe.perez@personal.com',
    active        : true
  }

  dummie2: Persona = {
    username      : 'dummie02',
    password      : '123456a',
    name          : 'pepe',
    surname       : 'perez',
    company_email : 'pepe.perez@ɵbosonit.com',
    personal_email: 'pepe.perez@personal.com',
    active        : true
  }

  personForm: FormGroup = this.fb.group({
    username:['pepero200'],
    password:['123456', Validators.required],
    name:['pepe', Validators.required],
    surname:['pepon', Validators.required],
    company_email:['pepe.pepon@bosonit.com', Validators.required],
    personal_email:['pepe2000@example.com', Validators.required],
    active:[true]
  })

  serviceProfiles: Persona[] = [this.dummie, this.dummie2]
  


  constructor( public fb: FormBuilder ) {  }
  
}
