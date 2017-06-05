import {Injectable} from "@angular/core";
import {IPayloadAction} from "../payload-action.types";
import {IMessage, IMessages} from "./messages.types";
/**
 * Created by maximedenoun on 2017-06-05.
 */
@Injectable()
export class MessagesAction {
  static MESSAGES         = 'MESSAGES';
  static MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
  static MESSAGES_ERROR   = 'MESSAGES_ERROR';
  static MESSAGES_ADD     = 'MESSAGES_ADD';
  static MESSAGES_ADD_SUCCESS     = 'MESSAGES_ADD_SUCCESS';


  retrieveMessages(userValue):IPayloadAction<IMessages, any> {
    return {type:MessagesAction.MESSAGES, payload:userValue};
  }

  addMessage(message):IPayloadAction<IMessage, any> {
    return {type:MessagesAction.MESSAGES_ADD, payload:message};
  }

}
