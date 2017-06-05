/**
 * Created by maximedenoun on 2017-06-05.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {EventsMock} from "./events.mock";
import {EventsAction} from "./events.action";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {IAuthUser} from "app/store/auth/auth.types";
import {IEvent} from "./events.types";

@Injectable()
export class EventsMiddleware {
  constructor(private http: Http) {
  } //ForLaterUse No backend for now


  middleware = store => next => action => {
    let eventsReq = {
      getEvents(user:IAuthUser): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => {
          this.value = 'Success';
        });
      }
    };
    let eventAddReq = {
      addEvent(event:IEvent): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => {
          this.value = 'Success';
        });
      }
    };


    if (action.type === EventsAction.EVENTS) {
      eventsReq.getEvents(action.payload).subscribe((value) => {
        next({type: EventsAction.EVENTS_SUCCESS, payload: EventsMock.retrievedEvents()});
      });
      return next(action);
    }
    if (action.type === EventsAction.EVENTS_ADD) {
      eventAddReq.addEvent(action.payload).subscribe((value) => {
        let eventsPayload = EventsMock.retrievedEvents();
        eventsPayload.events.unshift(action.payload);
        next({type: EventsAction.EVENTS_ADD_SUCCESS, payload: eventsPayload});
      });
      return next(action);
    }
    return next(action);
  }
}
