import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import {AuthRouterModule} from "./auth-router.module";
import {AuthGuardService} from "./auth-guard.service";

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    AuthRouterModule
  ],
  declarations:[LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {}
