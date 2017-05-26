/**
 * Created by maximedenoun on 2017-05-25.
 */
import {IAppState} from "../root.types";
import {AuthAction} from "./auth.action";
import {IPayloadAction} from "../payload-action.types";
import {IAuthUser} from "./auth.types";
import {INITIAL_STATE} from "../root.state";

export function authReducer(lastState:IAppState=INITIAL_STATE, action:IPayloadAction<IAuthUser,any>):IAppState {
  switch(action.type) {
    case AuthAction.LOGIN:
      return Object.assign({}, lastState, {user:{pending: true}});
    case AuthAction.LOGIN_SUCCESS:
      return Object.assign({}, lastState, {user:{...action.payload, pending: false}})
    default:
      return lastState
  }
}
