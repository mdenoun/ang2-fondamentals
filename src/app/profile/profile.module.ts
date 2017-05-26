import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileComponent} from "./profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from "./profile.service";
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentInfoComponent } from './employment-info/employment-info.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent, EmploymentComponent, EmploymentInfoComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
