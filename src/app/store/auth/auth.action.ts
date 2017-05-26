/**
 * Created by maximedenoun on 2017-05-25.
 */
import {Injectable} from "@angular/core";
import {IPayloadAction} from "../payload-action.types";
import {IAuthUser} from "./auth.types";

@Injectable()
export class AuthAction {
  static LOGIN='LOGIN';
  static LOGIN_SUCCESS='LOGIN_SUCCESS';

  login(userValue):IPayloadAction<IAuthUser, any> {
    return {type:AuthAction.LOGIN, payload:userValue};
  }

}
