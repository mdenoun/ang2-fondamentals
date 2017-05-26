/**
 * Created by maximedenoun on 2017-05-25.
 */
import {IAuthUser} from "./auth/auth.types";

export interface IAppState {
  user?: IAuthUser,
  pending?: boolean
}
