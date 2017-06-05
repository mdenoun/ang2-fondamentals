/**
 * Created by maximedenoun on 2017-06-05.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {MessagesMock} from "./messages.mock";
import {MessagesAction} from "./messages.action";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {IAuthUser} from "app/store/auth/auth.types";
import {IMessage} from "./messages.types";

@Injectable()
export class MessagesMiddleware {
  constructor(private http: Http) {
  } //ForLaterUse No backend for now


  middleware = store => next => action => {
    let messagesReq = {
      getMessages(user:IAuthUser): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => {
          this.value = 'Success';
        });
      }
    };
    let messageAddReq = {
      addMessage(message:IMessage): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => {
          this.value = 'Success';
        });
      }
    };


    if (action.type === MessagesAction.MESSAGES) {
      messagesReq.getMessages(action.payload).subscribe((value) => {
        next({type: MessagesAction.MESSAGES_SUCCESS, payload: MessagesMock.retrievedMessages()});
      });
      return next(action);
    }
    if (action.type === MessagesAction.MESSAGES_ADD) {
      messageAddReq.addMessage(action.payload).subscribe((value) => {
        let messagesPayload = MessagesMock.retrievedMessages();
        messagesPayload.messages.unshift(action.payload);
        next({type: MessagesAction.MESSAGES_ADD_SUCCESS, payload: messagesPayload});
      });
      return next(action);
    }
    return next(action);
  }
}
