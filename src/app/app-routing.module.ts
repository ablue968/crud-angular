import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { UpdateComponent } from './views/update/update.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent },
  // {path: 'persona/:id', component: UpdateComponent },
  {path: 'error', pathMatch:'full', component: ErrorComponent },
  {path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
