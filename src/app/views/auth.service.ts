import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserResponse } from '../interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login(authData: User): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(
      `${environment.apiUrl}/auth/login`,authData
      ).pipe(
        map( (res: UserResponse)=>{
          console.log('res->', res)
          //saveToken
        }),
        catchError((err)=> this.handlerError(err))
      )
  }
  logout(): void{}
  private readToken(): void{}
  private saveToken(): void{}
  private handlerError(err:any): Observable<never>{
    let errorMsg = 'an error has appeared!'
    if (err){
      errorMsg = `Error: code ${err.message}`;
    }
    window.alert(errorMsg);
    return throwError(errorMsg);
  }

}
