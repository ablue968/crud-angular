import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona, PersonaUpdate } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonaDataService {

  api_url: String=environment.apiUrl;

  constructor( private http: HttpClient ) {  }
  
  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.api_url}/personas`)
  }

  addPerson( person: Persona): Observable<Persona>{
    return this.http.post<Persona>(`${this.api_url}`, person)
  };

  deletePerson(id: String): Observable<Persona>{
    return this.http.delete<Persona>(`${this.api_url}/personas/${id}`);
  }

  updatePerson(person: PersonaUpdate, id: number): Observable<PersonaUpdate>{
    return this.http.put<PersonaUpdate>(`${this.api_url}/personas/${id}`, person)
  }

  
}
