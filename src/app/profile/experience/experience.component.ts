import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experience;
  @Input() index;
  @Output() addExperience = new EventEmitter();
  @Output() deleteExperience = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}
