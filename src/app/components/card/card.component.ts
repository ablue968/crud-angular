import { Component, Input, OnInit } from '@angular/core';
import { PersonaDataService } from '../../service/persona-data.service';
import { Persona } from 'src/app/interfaces';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from 'src/app/views/update/update.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() profile!: Persona;
  
  constructor(public personaDataService: PersonaDataService, private router: Router, public dialog: MatDialog) {  }

  ngOnInit(): void {  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data: {
        id: this.profile.id,
        username: this.profile.username,
        password: this.profile.password,
        name: this.profile.name,
        surname: this.profile.surname,
        company_email: this.profile.company_email,
        personal_email: this.profile.personal_email,
        active: this.profile.active,
        created_date: this.profile.created_date,
      }
  })};

  btnUpdate(id: number){
    this.router.navigateByUrl('/persona/:id')
  }

  btnDelete(id : number){
    console.log(id)
  }
  
}
