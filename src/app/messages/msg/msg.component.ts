import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  @Input() message;
  constructor() { }

  ngOnInit() {
  }

}
