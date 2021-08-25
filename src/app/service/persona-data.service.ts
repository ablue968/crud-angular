import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces';
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

  // getPersonaById( id: number): Observable<Persona>{
  //   return this.http.get<Persona>(`${this.api_url}/personas/${id})
  // }

  addPerson( person: Persona): Observable<Persona>{
    return this.http.post<Persona>(`${this.api_url}/personas`, person)
  }


  
}
