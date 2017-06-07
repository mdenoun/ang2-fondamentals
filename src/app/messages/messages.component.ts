import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {MessagesService} from "./messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @select('messages') public messages;

  constructor(private service:MessagesService) {
    this.service.retrieveMessages({});
  }

  ngOnInit() {
  }

}
