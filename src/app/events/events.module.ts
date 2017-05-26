import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EventsRoutingModule} from "./events-router.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent]
})
export class EventsModule { }
