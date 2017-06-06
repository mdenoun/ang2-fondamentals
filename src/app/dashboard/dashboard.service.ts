import { Injectable } from '@angular/core';
import {IMenu, IUser, Menu, User} from "./dashboard.types";

@Injectable()
export class DashboardService {
  private menus:IMenu[] = [];

  constructor() {
    this.menus.push(new Menu(1, 'NgDynForms', 'fa fa-user', './profile'));
    this.menus.push(new Menu(2, 'NgEvents', 'fa fa-newspaper-o', './events'));
    this.menus.push(new Menu(3, 'NgDirectives', 'fa fa-bars', './directives'));
    this.menus.push(new Menu(4, 'NgForms', 'fa fa-lock', './forms'));
    this.menus.push(new Menu(5, 'Logout', 'fa fa-window-close', './logout'));
  }

  getMenus():IMenu[] {
    return this.menus;
  }
}
