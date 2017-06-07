import { Injectable } from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../store/root.types";
import {MessagesAction} from "../store/messages/messages.action";

@Injectable()
export class MessagesService {

  constructor(private store: NgRedux<IAppState>, private action:MessagesAction) { }
  retrieveMessages(userValue) {
    this.store.dispatch(this.action.retrieveMessages(userValue));
  }

}
