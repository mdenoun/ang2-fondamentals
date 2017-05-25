import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {AuthModule} from "./auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginRouterModule} from "./login-router.module";

@NgModule({
  imports:[
    CommonModule,
    AuthModule,
    ReactiveFormsModule,
    LoginRouterModule
  ],
  declarations:[LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
