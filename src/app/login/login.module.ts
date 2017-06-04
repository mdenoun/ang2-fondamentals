import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginRouterModule} from "./login-router.module";
import {LoginService} from "./login.service";
import {PasswordRecoveryComponent} from "./password-recovery/password-recovery.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthService} from "../auth.service";

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    LoginRouterModule
  ],
  declarations:[LoginComponent, PasswordRecoveryComponent, RegistrationComponent],
  exports: [LoginComponent, PasswordRecoveryComponent, RegistrationComponent],
  providers: [LoginService, AuthService]
})
export class LoginModule {}
