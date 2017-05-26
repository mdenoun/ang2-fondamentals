import { Injectable } from '@angular/core';
import {IMenu, IUser, Menu, User} from "./dashboard.types";

@Injectable()
export class DashboardService {
  private menus:IMenu[] = [];
  //private user:IUser;

  constructor() {
    this.menus.push(new Menu(1, 'NgDynForms', 'fa fa-user', './profile'));
    this.menus.push(new Menu(2, 'NgEvents', 'fa fa-bars', './events'));
    this.menus.push(new Menu(3, 'NgDirectives', 'fa fa-newspaper-o', './directives'));
    this.menus.push(new Menu(4, 'NgForms', 'fa fa-lock', './forms'));
    this.menus.push(new Menu(5, 'RxJs', 'fa fa-window-close', './rxjs'));
    this.menus.push(new Menu(6, 'Logout', 'fa fa-window-close', './logout'));
    //this.user = new User(286, 'Maxime', '../assets/286.jpg');
  }

  getMenus():IMenu[] {
    return this.menus;
  }

  /*getUser():IUser {
    return this.user;
  }
*/
}
