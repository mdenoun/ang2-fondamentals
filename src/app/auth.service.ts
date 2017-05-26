import { Injectable } from '@angular/core';
import {IAppState} from "./store/root.types";
import {NgRedux, select} from '@angular-redux/store';
import {NavigationExtras, Router} from "@angular/router";

@Injectable()
export class AuthService {
  @select('user') public user;
  public isLoggedIn:boolean = false;
  public redirectUrl:string;//will be used with gard when trying to access page and we are not Logged In yet

  constructor(private store: NgRedux<IAppState>, public router:Router) {
    this.user.subscribe((value) => {
      if(typeof value.user.pending !== 'undefined' && !value.user.pending
        && typeof value.user.id !== 'undefined') {//we already receive the user id we are good to go for the redirection
        // If no redirect has been set, use the default
        this.isLoggedIn = true;
        let redirect = this.redirectUrl ? this.redirectUrl : '/dashboard';

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
}
