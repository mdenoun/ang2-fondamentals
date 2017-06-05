import { Injectable } from '@angular/core';
import {EventsAction} from "../store/events/events.action";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../store/root.types";

@Injectable()
export class EventsService {

  constructor(private store: NgRedux<IAppState>, private action:EventsAction) { }

  retrieveEvents(userValue) {
    this.store.dispatch(this.action.retrieveEvents(userValue));
  }

  addEvent(event) {
    this.store.dispatch(this.action.addEvent(event))
  }

}
