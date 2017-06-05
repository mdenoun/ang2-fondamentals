/**
 * Created by maximedenoun on 2017-05-25.
 */
import {IAuthUser} from "./auth/auth.types";
import {IProfile} from "./profile/profile.types";
import {IEvents} from "./events/events.types";
import {IMessages} from "./messages/messages.types";

export interface IAppState {
  user?: IAuthUser,
  profile?: IProfile,
  events?: IEvents,
  messages?: IMessages
}
