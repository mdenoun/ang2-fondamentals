import { Component, OnInit } from '@angular/core';
import {EventsService} from "./events.service";
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @select('events') public events;

  constructor(private service:EventsService) {
    this.service.retrieveEvents({});//ToDo value.user);
  }

  ngOnInit() {
  }

  public addEvent($event) {
    this.service.addEvent($event);
    console.log($event);
  }

}
