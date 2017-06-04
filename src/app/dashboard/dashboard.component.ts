import { Component, OnInit } from '@angular/core';
import {DashboardService} from './/dashboard.service';
import {select} from "@angular-redux/store";
import {IMenu} from "./dashboard.types";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public menus:IMenu[];
  @select('user') public user;
  constructor(private service: DashboardService) {
    this.menus = this.service.getMenus();
  }

  ngOnInit() {
  }

}
