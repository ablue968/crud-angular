import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', children:[
    {path: 'update', component: UpdateComponent},
    {path: '**', redirectTo: 'update'}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
