import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EventsRoutingModule} from "./events-router.module";
import {AddEventComponent} from "./add-event/add-event.component";
import {EventComponent} from "./event/event.component";
import {EventsService} from "./events.service";
import {EventListComponent} from "./event-list/event-list.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventsRoutingModule
  ],
  declarations: [AddEventComponent, EventComponent, EventListComponent, EventsComponent],
  providers: [EventsService]
})
export class EventsModule { }
