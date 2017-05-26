import { Injectable } from '@angular/core';
import {AuthAction} from "../store/auth/auth.action";
import {IAppState} from "../store/root.types";
import {NgRedux} from '@angular-redux/store';

@Injectable()
export class LoginService {
  constructor(private store: NgRedux<IAppState>, private action:AuthAction) {}

  login(userValue) {
    this.store.dispatch(this.action.login(userValue));
  }

}
