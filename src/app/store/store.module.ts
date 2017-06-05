/**
 * Created by maximedenoun on 2017-05-25.
 */
import {NgModule} from "@angular/core";
import {NgRedux, NgReduxModule} from "@angular-redux/store";
import {rootReducer} from "./root.reducers";
import {AuthMiddleware} from "./auth/auth.middleware";
import {IAppState} from "./root.types";
import {ProfileMiddleware} from "./profile/profile.middleware";
import {EventsMiddleware} from "./events/events.middleware";
import {MessagesMiddleware} from "./messages/messages.middleware";

@NgModule({
  imports: [NgReduxModule],
  providers:[AuthMiddleware, ProfileMiddleware, EventsMiddleware, MessagesMiddleware]
})
export class StoreModule {
  constructor(ngRedux: NgRedux<IAppState>, authMdl:AuthMiddleware, profileMdl:ProfileMiddleware, eventsMdl:EventsMiddleware,
  messagesMdl:MessagesMiddleware){
    ngRedux.configureStore(rootReducer, {}, [authMdl.middleware, profileMdl.middleware, eventsMdl.middleware, messagesMdl.middleware]);
  }
}
