import {MessagesAction} from "./messages.action";
import {IAppState} from "../root.types";
import {INITIAL_STATE} from "../root.state";
import {IPayloadAction} from "../payload-action.types";
import {IMessages} from "./messages.types";
/**
 * Created by maximedenoun on 2017-06-05.
 */
export function messagesReducer(lastState:IAppState=INITIAL_STATE, action:IPayloadAction<IMessages,any>):IAppState {
  switch(action.type) {
    case MessagesAction.MESSAGES:
      return Object.assign({}, lastState, {messages:{pending: true}});
    case MessagesAction.MESSAGES_SUCCESS:
      return Object.assign({}, lastState, {messages:{...action.payload, pending: false}});
    case MessagesAction.MESSAGES_ERROR:
      return Object.assign({}, lastState, {messages: null});
    case MessagesAction.MESSAGES_ADD:
      return Object.assign({}, lastState, {messages: {pending: true}});
    case MessagesAction.MESSAGES_ADD_SUCCESS:
      return Object.assign({}, lastState, {messages: {...action.payload, pending: false}});

    default:
      return lastState
  }
}
