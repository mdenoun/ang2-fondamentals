/**
 * Created by maximedenoun on 2017-05-26.
 */
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {ProfileMock} from "./profile.mock";
import {ProfileAction} from "./profile.action";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {IAuthUser} from "app/store/auth/auth.types";

@Injectable()
export class ProfileMiddleware {
  constructor(private http: Http) {
  } //ForLaterUse No backend for now


  middleware = store => next => action => {
    let profileReq = {
      getProfile(user:IAuthUser): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => {
          this.value = 'Success';
        });
      }
    };
    if (action.type === ProfileAction.PROFILE) {
      profileReq.getProfile(action.payload).subscribe((value) => {
        next({type: ProfileAction.PROFILE_SUCCESS, payload: ProfileMock.retrievedProfile()});
      });
      return next(action);
    }
    return next(action);
  }
}
