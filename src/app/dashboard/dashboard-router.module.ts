/**
 * Created by maximedenoun on 2017-05-25.
 */
import { DashboardComponent } from "./dashboard.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes:Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
