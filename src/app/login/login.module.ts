import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {AuthModule} from "./auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports:[
    CommonModule,
    AuthModule,
    ReactiveFormsModule
  ],
  declarations:[LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {
}
