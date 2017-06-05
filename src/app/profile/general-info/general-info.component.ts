import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  @Input()
  public profileForm: FormGroup;

  public generalInfo: FormGroup;
  @Input() public generalInfoModel;

  /*@Input() set generalInfoModel(generalInfo) {
    if(!generalInfo) return;
    //this.updateEmploymentInfo(employments);
  }*/

  constructor(private builder: FormBuilder) {
    this.generalInfo = builder.group({
      image: [null],
      name: [null, [
        Validators.required
      ]],
      surname: [null, [
        Validators.required
      ]],
      allowImageUsage: [false, [
        Validators.required
      ]],
      biography: [null, [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    this.profileForm.addControl('generalInfo', this.generalInfo);
  }

  get name(): FormControl{
    return <FormControl> this.generalInfo.get('name');
  }
  get surname(): FormControl{
    return <FormControl> this.generalInfo.get('surname');
  }
  get allowImageUsage(): FormControl{
    return <FormControl> this.generalInfo.get('allowImageUsage');
  }
  get biography(): FormControl{
    return <FormControl> this.generalInfo.get('biography');
  }

}
