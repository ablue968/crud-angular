import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';


import { PersonaDataService } from '../service/persona-data.service';
import { YesNoPipe } from '../yes-no.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    UpdateComponent,
    LoginComponent,
    YesNoPipe

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    HomeComponent,
    ErrorComponent,
    UpdateComponent
  ],
  providers: [
    PersonaDataService
  ]
})
export class ViewsModule { }
