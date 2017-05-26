/**
 * Created by maximedenoun on 2017-05-25.
 */

import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router';
import {PasswordRecoveryComponent} from "./password-recovery/password-recovery.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'recovery',
    component: PasswordRecoveryComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouterModule {}
