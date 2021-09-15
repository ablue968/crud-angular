import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  UsuariosRegistrados: User[] = [];

  loginForm: FormGroup = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

  constructor(private authS: AuthService, private fb: FormBuilder,
              private loginS: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginS.getAllUsers()
      .subscribe(p => this.UsuariosRegistrados = p)
  }

  toLogin(){
    let emailArr = [];
    let passArr  = [];

    let email = this.loginForm.get('email')!.value;
    let pass = this.loginForm.get('password')!.value;

    for(let x in this.UsuariosRegistrados){
      emailArr.push(this.UsuariosRegistrados[x].email);
      passArr.push(this.UsuariosRegistrados[x].password);
    }

    if(emailArr.includes(email) && passArr.includes(pass)){
      this.loginS.login(email);
    }else{
      this.router.navigate(['error']);
    }


  }

}
