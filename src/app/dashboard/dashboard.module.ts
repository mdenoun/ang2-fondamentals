/**
 * Created by maximedenoun on 2017-05-25.
 */
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRouterModule} from "./dashboard-router.module";

@NgModule({
  imports: [DashboardRouterModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
