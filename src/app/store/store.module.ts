/**
 * Created by maximedenoun on 2017-05-25.
 */
import {NgModule} from "@angular/core";
import {NgRedux, NgReduxModule} from "@angular-redux/store";
import {rootReducer} from "./root.reducers";
import {AuthMiddleware} from "./auth/auth.middleware";
import {IAppState} from "./root.types";
import {ProfileMiddleware} from "./profile/profile.middleware";

@NgModule({
  imports: [NgReduxModule],
  providers:[AuthMiddleware, ProfileMiddleware]
})
export class StoreModule {
  constructor(ngRedux: NgRedux<IAppState>, authMdl:AuthMiddleware, profileMdl:ProfileMiddleware){
    ngRedux.configureStore(rootReducer, {}, [authMdl.middleware, profileMdl.middleware]);
  }
}
