/**
 * Created by maximedenoun on 2017-05-25.
 */
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouterModule} from "./dashboard-router.module";
import {DashboardService} from "./dashboard.service";
import NavigationModule from "../navigation/navigation.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    DashboardRouterModule,
    NavigationModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [ DashboardService ]
})
export class DashboardModule {}
