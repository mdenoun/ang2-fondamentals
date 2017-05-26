/**
 * Created by maximedenoun on 2017-05-26.
 */
import {IAppState} from "./root.types";
import {IAuthUser} from "./auth/auth.types";

export const INITIAL_USER:IAuthUser = {
}
export const INITIAL_STATE: IAppState = {
  user: INITIAL_USER
};

