import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Output() public eventAdded = new EventEmitter();
  public eventForm: FormGroup;
  constructor(builder:FormBuilder) {
    this.eventForm = builder.group({
      title: ['', [Validators.required]],
      description: [''],
      location: ['', [Validators.required]],
      date: ['', [Validators.required]]
    })
  }

  get title(): FormControl{
    return <FormControl> this.eventForm.get('title');
  }
  get description(): FormControl{
    return <FormControl> this.eventForm.get('description');
  }
  get location(): FormControl{
    return <FormControl> this.eventForm.get('location');
  }
  get date(): FormControl{
    return <FormControl> this.eventForm.get('date');
  }

  ngOnInit() {
  }

  public onSubmit() {
    if(this.eventForm.valid) {
      this.eventAdded.emit(this.eventForm.value);
    }
  }
}
