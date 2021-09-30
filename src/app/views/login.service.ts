import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LoginResponse, User, Persona } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = 'superSecretToken';
  private _user!: User;
   
   
  api_url = environment.apiUrl;

  //asegurado no modificar los usuarios
  get user(): any{
    return {...this._user}
  }

  constructor(private router:Router, private http:HttpClient) { }

  login(email: string, password: string){

    const url = `${this.api_url}/usuarios`;
    const body = {email, password};

    sessionStorage.setItem('token', this.token)
    console.log('?', this.http.get<LoginResponse>(url))

    return this.http.get<LoginResponse>(url)
      .pipe(
        tap( resp =>{
          if (resp){
            localStorage.setItem('token', resp.token!);
            this._user = {
              email: resp.email,
              password: resp.password
            }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      )
  }

  logout(){
    sessionStorage.removeItem('token')
    //google:
    localStorage.removeItem('google_auth');
  }

  tokenValidation(): Observable<boolean>{
    const url = `${this.api_url}/usuarios`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<LoginResponse>(url, {headers})
      .pipe(
        map(resp=>{
          this._user = {
            email: resp.email!,
            password: resp.password!
          }
          return resp.ok
        })
      )

    // if(sessionStorage.getItem('token') === this.token){
    //   return this.http.get<LoginResponse>(url)
    // }
  }

  //para cuando tenga varios
  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.api_url}/users`, user);
  }


  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.api_url}/usuarios`)
  }
}
