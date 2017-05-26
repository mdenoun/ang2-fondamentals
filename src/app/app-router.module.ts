/**
 * Created by maximedenoun on 2017-05-25.
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AuthGuardService} from "./auth/auth-guard.service";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth/auth.service";

const routes:Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivateChild: [AuthGuardService]
  },
  /* ToDo,
   { path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService]
})
export class AppRouterModule {}
