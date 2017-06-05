import {Injectable} from "@angular/core";
import {IPayloadAction} from "../payload-action.types";
import {IEvent, IEvents} from "./events.types";
/**
 * Created by maximedenoun on 2017-06-05.
 */
@Injectable()
export class EventsAction {
  static EVENTS         = 'EVENTS';
  static EVENTS_SUCCESS = 'EVENTS_SUCCESS';
  static EVENTS_ERROR   = 'EVENTS_ERROR';
  static EVENTS_ADD     = 'EVENTS_ADD';
  static EVENTS_ADD_SUCCESS     = 'EVENTS_ADD_SUCCESS';


  retrieveEvents(userValue):IPayloadAction<IEvents, any> {
    return {type:EventsAction.EVENTS, payload:userValue};
  }

  addEvent(event):IPayloadAction<IEvent, any> {
    return {type:EventsAction.EVENTS_ADD, payload:event};
  }

}
