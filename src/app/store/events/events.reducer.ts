import {IAppState} from "../root.types";
import {INITIAL_STATE} from "../root.state";
import {IPayloadAction} from "../payload-action.types";
import {IEvents} from "./events.types";
import {EventsAction} from "./events.action";
/**
 * Created by maximedenoun on 2017-06-05.
 */
export function eventsReducer(lastState:IAppState=INITIAL_STATE, action:IPayloadAction<IEvents,any>):IAppState {
  switch(action.type) {
    case EventsAction.EVENTS:
      return Object.assign({}, lastState, {events:{pending: true}});
    case EventsAction.EVENTS_SUCCESS:
      return Object.assign({}, lastState, {events:{...action.payload, pending: false}});
    case EventsAction.EVENTS_ERROR:
      return Object.assign({}, lastState, {events: null});
    case EventsAction.EVENTS_ADD:
      return Object.assign({}, lastState, {events: {pending: true}});
    case EventsAction.EVENTS_ADD_SUCCESS:
      return Object.assign({}, lastState, {events: {...action.payload, pending: false}});

    default:
      return lastState
  }
}
