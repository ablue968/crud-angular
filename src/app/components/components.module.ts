import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


import { CardComponent } from './card/card.component';
import { PersonFormComponent } from './forms/person-form/person-form.component';


@NgModule({
  declarations: [
    CardComponent,
    PersonFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,

  ],
  exports: [
    CardComponent,
    PersonFormComponent,
  ]
})
export class ComponentsModule { }
