import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MessagesRoutingModule} from "./messages-router.module";
import {MessagesService} from "./messages.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessagesRoutingModule
  ],
  declarations: [MessagesComponent],
  providers: [MessagesService]
})
export class MessagesModule { }
