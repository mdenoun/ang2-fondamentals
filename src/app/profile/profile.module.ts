import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileComponent} from "./profile.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from "./profile.service";
import { EmploymentInfoComponent } from './employment-info/employment-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { SocialComponent } from './social/social.component';
import { LanguageComponent } from './language/language.component';
import { CommunityComponent } from './community/community.component';
import { AgreementComponent } from './agreement/agreement.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  declarations: [GeneralInfoComponent, ExperienceComponent, EmploymentInfoComponent, LanguageComponent, SocialComponent, ProfileComponent, CommunityComponent, AgreementComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
