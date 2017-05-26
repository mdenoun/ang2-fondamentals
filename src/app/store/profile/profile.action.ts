/**
 * Created by maximedenoun on 2017-05-25.
 */
import {Injectable} from "@angular/core";
import {IPayloadAction} from "../payload-action.types";
import {IProfile} from "app/store/profile/profile.types";

@Injectable()
export class ProfileAction {
  static PROFILE         = 'PROFILE';
  static PROFILE_SUCCESS = 'PROFILE_SUCCESS';
  static PROFILE_ERROR   = 'PROFILE_ERROR';

  retrieveProfile(userValue):IPayloadAction<IProfile, any> {
    return {type:ProfileAction.PROFILE, payload:userValue};
  }

}
