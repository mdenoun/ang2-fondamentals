import { Injectable } from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {ProfileAction} from "../store/profile/profile.action";
import {IAppState} from "../store/root.types";

@Injectable()
export class ProfileService {
  constructor(private store: NgRedux<IAppState>, private action:ProfileAction) { }
  retrieveProfile(userValue) {
    this.store.dispatch(this.action.retrieveProfile(userValue));
  }

}
