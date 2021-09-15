import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonaDataService } from 'src/app/service/persona-data.service';
import { Persona } from '../../interfaces';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // id = this.actRute.snapshot.paramMap.get('id')

  updateForm: FormGroup = this.fb.group({
    username:[this.data.username, [ Validators.required, Validators.minLength(6)]],
    password:[this.data.password, Validators.required],
    name:[this.data.name, Validators.required],
    surname:[this.data.surname, Validators.required],
    company_email:[this.data.company_email, Validators.required],
    personal_email:[this.data.personal_email, Validators.required],
    active:[this.data.active]
  })
  


  constructor(
    private fb: FormBuilder,
    private personaDataService: PersonaDataService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: Persona){}
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    this.personaDataService.updatePerson( this.updateForm.value, this.data.id!)
      .subscribe( p => console.log(p));
    this.reloadComponent
  }

  //para recargar la página.. pero no funciona
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['']);
}

}

