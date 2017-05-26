/**
 * Created by maximedenoun on 2017-05-25.
 */
import {authReducer} from "./auth/auth.reducer";
import {combineReducers} from "redux";

export const rootReducer= combineReducers({//Will add more reducer down the road
  user: authReducer
});
