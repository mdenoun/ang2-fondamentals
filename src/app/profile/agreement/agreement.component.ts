import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {
  @Input()
  public profileForm: FormGroup;
  public agreement: FormGroup;
  @Input() public agreementModel;

  constructor(private builder: FormBuilder) {
    this.agreement = builder.group({
      agrees: [false, [
        Validators.required
      ]],
    });
  }

  ngOnInit() {
    this.profileForm.addControl('agreement', this.agreement);
  }

  get agrees(): FormControl{
    return <FormControl> this.agreement.get('agrees');
  }

}
