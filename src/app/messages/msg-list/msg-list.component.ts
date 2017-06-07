import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.css']
})
export class MsgListComponent implements OnInit {
  @Input() public messages;
  constructor() { }

  ngOnInit() {
    console.log(this.messages)
  }

}
