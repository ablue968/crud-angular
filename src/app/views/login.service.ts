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

  login(user: string){
    this.logged = true;
    this.router.navigate(['/']);
    sessionStorage.setItem( user ,'true');
  }

  logout(){
    this.logged = false;
    this.router.navigate(['login']);
    sessionStorage.removeItem('user')
  }

  //para cuando tenga varios
  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.api_url}/users`, user);
  }


  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.api_url}/usuarios`)
  }
}
