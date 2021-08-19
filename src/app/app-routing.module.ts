import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '**', pathMatch:'full', component: ErrorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
