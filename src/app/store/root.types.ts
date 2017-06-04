/**
 * Created by maximedenoun on 2017-05-25.
 */
import {IAuthUser} from "./auth/auth.types";
import {IProfile} from "./profile/profile.types";

export interface IAppState {
  user?: IAuthUser,
  profile?: IProfile
}
