import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  @Input() employment;
  constructor() { }

  ngOnInit() {
  }

}
