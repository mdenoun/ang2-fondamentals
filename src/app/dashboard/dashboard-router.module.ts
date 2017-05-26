/**
 * Created by maximedenoun on 2017-05-25.
 */
import { DashboardComponent } from "./dashboard.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [
  {
    path: '',
    component:DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/profile', pathMatch: 'full' },
      { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'},
      { path: 'events', loadChildren: 'app/events/events.module#EventsModule'},/*
      { path: 'directives', loadChildren: 'app/new-paper/new-paper.module#NewPaperModule'},
      { path: 'forms', loadChildren: 'app/password/password.module#PasswordModule'},
      { path: 'rxjs', loadChildren: 'app/password/password.module#PasswordModule'},*/
      { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
      { path: '**',   redirectTo: '/dashboard/profile', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
