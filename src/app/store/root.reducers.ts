/**
 * Created by maximedenoun on 2017-05-25.
 */
import {authReducer} from "./auth/auth.reducer";
import {combineReducers} from "redux";
import {profileReducer} from "./profile/profile.reducer";
import {eventsReducer} from "./events/events.reducer";
import {messagesReducer} from "./messages/messages.reducer";

export const rootReducer= combineReducers({
  user: authReducer,
  profile: profileReducer,
  events: eventsReducer,
  messages: messagesReducer
});
