/**
 * Created by maximedenoun on 2017-05-26.
 */
import {IAppState} from "../root.types";
import {INITIAL_STATE} from "../root.state";
import {IProfile} from "./profile.types";
import {IPayloadAction} from "../payload-action.types";
import {ProfileAction} from "./profile.action";

export function profileReducer(lastState:IAppState=INITIAL_STATE, action:IPayloadAction<IProfile,any>):IAppState {
  switch(action.type) {
    case ProfileAction.PROFILE:
      return Object.assign({}, lastState, {profile:{pending: true}}); //return Object.assign({}, state, {pending: true});
    case ProfileAction.PROFILE_SUCCESS:
      return Object.assign({}, lastState, {profile:{...action.payload, pending: false}})//return Object.assign({}, state, {profile: action.payload, pending: false});
    case ProfileAction.PROFILE_ERROR:
      return Object.assign({}, lastState, {profile: null});//return Object.assign({}, lastState, {profile: null, pending: true});
    default:
      return lastState
  }
}
