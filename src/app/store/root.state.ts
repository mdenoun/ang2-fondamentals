/**
 * Created by maximedenoun on 2017-05-26.
 */
import {IAppState} from "./root.types";
import {IAuthUser} from "./auth/auth.types";
import {IProfile} from "./profile/profile.types";
import {IEvents} from "./events/events.types";
import {IMessages} from "./messages/messages.types";

export const INITIAL_USER:IAuthUser = {
}
export const INITIAL_PROFILE:IProfile = {
}
export const INITIAL_EVENTS:IEvents = {
}
export const INITIAL_MESSAGES:IMessages = {
}
export const INITIAL_STATE: IAppState = {
  user: INITIAL_USER,
  profile: INITIAL_PROFILE,
  events: INITIAL_EVENTS,
  messages: INITIAL_MESSAGES
};

