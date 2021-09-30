import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './views/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenValidationGuard implements CanActivate, CanLoad {

constructor( private loginS: LoginService, private router: Router){}

  canActivate(): Observable<boolean> | boolean {
    return this.loginS.tokenValidation()
    .pipe(
      tap( valid=>{
        console.log('valid', valid)
        if(!valid){
          console.log('valid?', valid)
          this.router.navigateByUrl('')
        }
      })
    );
  }
  canLoad():Observable<boolean> | boolean {
    return this.loginS.tokenValidation()
    .pipe(
      tap( valid=>{
        if(!valid){
          this.router.navigateByUrl('')
        }
      })
    );
  }
}
