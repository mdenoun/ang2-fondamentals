import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MessagesRoutingModule} from "./messages-router.module";
import {MessagesService} from "./messages.service";
import {MsgForDirective} from "./msg-for/msg-for.directive";
import {MsgListComponent} from "./msg-list/msg-list.component";
import {MsgComponent} from "./msg/msg.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessagesRoutingModule
  ],
  declarations: [MsgForDirective, MsgComponent, MsgListComponent, MessagesComponent],
  providers: [MessagesService]
})
export class MessagesModule { }
