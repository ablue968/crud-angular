import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged = false; 
   
  api_url = environment.apiUrl;

  constructor(private router:Router, private http:HttpClient) { }

  login(){
    this.logged = true;
    this.router.navigate(['/']);
    sessionStorage.setItem('login','true');
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.api_url}/users`, user);
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.api_url}/usuarios`)
  }
}
