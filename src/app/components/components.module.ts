import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { CardComponent } from './card/card.component';
import { PersonFormComponent } from './forms/person-form/person-form.component';


@NgModule({
  declarations: [
    CardComponent,
    PersonFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [
    CardComponent,
    PersonFormComponent,
  ]
})
export class ComponentsModule { }
