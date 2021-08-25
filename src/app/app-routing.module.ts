import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'update', component: UpdateComponent },
  {path: 'error', pathMatch:'full', component: ErrorComponent },
  {path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
