import { Injectable } from '@angular/core';
import {IAppState} from "./store/root.types";
import {NgRedux, select} from '@angular-redux/store';
import {NavigationExtras, Router} from "@angular/router";
import {AuthAction} from "./store/auth/auth.action";

@Injectable()
/**
 * AuthService is here to help auth guard to know if we already authenticate successfully and to reroute to the dashboard
 * whenever the authentication finished.
 * isLoggedIn and redirectUrl param are static to be extra safe but the AuthService needs to be instanciated just once
 * that is why it is only declare in app-router.module.
 */
export class AuthService {
  @select('user') public user;
  public static isLoggedIn:boolean = false;
  public static redirectUrl:string;//will be used with gard when trying to access page and we are not Logged In yet

  constructor(private store: NgRedux<IAppState>, private action:AuthAction, public router:Router) {
    this.user.subscribe((value) => {
      if(typeof value.user.pending !== 'undefined' && !value.user.pending
        && typeof value.user.id !== 'undefined') {//we already receive the user id, the user is authenticated, we are good to go for the redirection
        // If no redirect has been set, use the default
        AuthService.isLoggedIn = true;
        let redirect = AuthService.redirectUrl ? AuthService.redirectUrl : '/dashboard/profile';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          //preserveQueryParams: true, deprecated
          queryParamsHandling: "merge",
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  login(userValue) {
    this.store.dispatch(this.action.login(userValue));
  }
}
