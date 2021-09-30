import { Component, Input, OnInit, Output } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';
import { Persona } from '../../interfaces';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //google
  public userDetails: any;

  profiles!: Persona[];

  constructor( private personaDataService: PersonaDataService, private loginS: LoginService ) {
    this.personaDataService.getPersona().subscribe(p => this.profiles = p)
  }

  ngOnInit(): void {
    //google:
    const storage = localStorage.getItem('google_auth');
    if(storage){
      this.userDetails = JSON.parse(storage);
    }else{
      this.logout();
    }
  }

  createOrUpdate( method: string){
    if( method == 'create'){
      console.log(method)
    }
    if(method == 'update'){
      console.log(method)
    }
  }

  logout(){
    this.loginS.logout();
  }



}
