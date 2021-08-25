import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';


import { PersonaDataService } from '../service/persona-data.service';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
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
