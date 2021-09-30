import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/interfaces';
import Swal from 'sweetalert2';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UsuariosRegistrados: User[] = [];

  loginForm: FormGroup = this.fb.group({
    email:['pepe.perez@bosonit.com',[ Validators.required, Validators.email]],
    password:['123456a', [ Validators.required, Validators.minLength(6)]]
  })

  constructor(  private fb: FormBuilder,
                private loginS: LoginService,
                private router: Router,
                private googleAuth: SocialAuthService
                ) { }

  ngOnInit(): void {
    this.loginS.getAllUsers()
      .subscribe(p => this.UsuariosRegistrados = p)
  }

  login(){

    const userR = this.UsuariosRegistrados

    const {email, password} = this.loginForm.value;

    if(userR.filter( resp => resp.email === email && resp.password === password)){
      this.loginS.login(email, password)
        .subscribe( resp=>{
          if(resp){
            console.log('yep')
            this.router.navigateByUrl('/home');
          }
      })
    }else {
      Swal.fire('Error', 'tienes mal los datos', 'error')
    }


  }

  googleHandler(): void{
    this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('home').then();
    })
  }

}
