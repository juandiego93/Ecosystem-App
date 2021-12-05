import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserRoutingModule } from './dashboard-user/dashboard-user-routing.module';


const routes: Routes = [
  { path: '', loadChildren: () => import('./authentication/authentication-routing.module').then(module_ => module_.AuthenticationRoutingModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard-user/dashboard-user-routing.module').then(module_ => module_.DashboardUserRoutingModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
