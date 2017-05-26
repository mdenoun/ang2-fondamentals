import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'employment-info',
  templateUrl: './employment-info.component.html',
  styleUrls: ['./employment-info.component.css']
})
export class EmploymentInfoComponent implements OnInit {

  @Input()
  public ProfileForm: FormGroup;

  public EmploymentInfo: FormGroup;

  @Input() set employmentModel(employments) {
    if(!employments) return;
    this.updateEmploymentInfo(employments);
  }

  constructor(private builder: FormBuilder) {
    this.EmploymentInfo = builder.group({
      Company: builder.array([builder.control('')]),
      Role: builder.array([builder.control('')])
    })
    //this.ProfileForm.addControl('EmploymentInfo', this.EmploymentInfo);
  }

  private updateEmploymentInfo(employments): void {
    if(!employments.Company || employments.Company.length < 1 ) return;
    this.resetEmployment();
    for (let i = 0; i < employments.Company.length; i++) {
      this.addEmployementInfo(employments.Company[i], employments.Role[i]);
    }
  }

  private resetEmployment() {
    //this.Company.reset();
    //this.Role.reset();
    for (let i = 0; i < this.Company.length; i++) {
      this.Company.removeAt(i);
      this.Role.removeAt(i)
    }
  }

  public addEmptyPosition(): void {
    this.addEmployementInfo('', '');
  }

  private addEmployementInfo(company: string, name: string): void {
    this.Company.push(this.builder.control(company));
    this.Role.push(this.builder.control(name));
  }

  get Company(): FormArray {
    return <FormArray> this.EmploymentInfo.get('Company');
  }

  get Role(): FormArray {
    return <FormArray> this.EmploymentInfo.get('Role');
  }

  ngOnInit() {
    this.ProfileForm.addControl('EmploymentInfo', this.EmploymentInfo);
  }

}
