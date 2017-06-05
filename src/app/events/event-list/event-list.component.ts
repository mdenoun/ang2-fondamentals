import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() public eventListModel;
  constructor() { }

  ngOnInit() {
  }

}
