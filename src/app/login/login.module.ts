import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginRouterModule} from "./login-router.module";
import {PasswordRecoveryComponent} from "./password-recovery/password-recovery.component";
import {RegistrationComponent} from "./registration/registration.component";

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    LoginRouterModule
  ],
  declarations:[LoginComponent, PasswordRecoveryComponent, RegistrationComponent],
  exports: [LoginComponent, PasswordRecoveryComponent, RegistrationComponent]
})
export class LoginModule {}
