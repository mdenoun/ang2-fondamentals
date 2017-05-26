/**
 * Created by maximedenoun on 2017-05-25.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Mock} from "./auth.mock";
import {AuthAction} from "./auth.action";
import {IAuthUser} from "./auth.types";

@Injectable()
export class AuthMiddleware {
  constructor(private http:Http) {} //ForLaterUse No backend for now

  middleware = store => next => action => {
    let authenticationReq = {
      login(user:IAuthUser): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => {
          this.value = 'Success';
        });
      }
    };
    if (action.type === AuthAction.LOGIN) {
      authenticationReq.login(action.payload).subscribe((value) => {
        next({type: AuthAction.LOGIN_SUCCESS, payload: Mock.retrievedUser()});
      });
      return next(action);
    }
    return next(action);
  }
}
