import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'employment-info',
  templateUrl: './employment-info.component.html',
  styleUrls: ['./employment-info.component.css']
})
export class EmploymentInfoComponent implements OnInit {

  @Input()
  public profileForm: FormGroup;

  public employmentInfo: FormGroup;

  @Input() set employmentModel(employments) {
    if(!employments) return;
    this.updateEmploymentInfo(employments);
  }

  constructor(private builder: FormBuilder) {
    this.employmentInfo = builder.group({
      experiences: builder.array([])
    })
  }

  private updateEmploymentInfo(employments): void {
    if(!employments || employments.length < 1 ) return;
    this.resetEmployment();
    for (let i = 0; i < employments.length; i++) {
      this.addExperience(employments[i].company, employments[i].role);
    }
  }

  get experiences(): FormArray {
    return <FormArray>this.profileForm.get('employmentInfo').get('experiences');
  }

  public addExperience(company: string, name: string): void {
    this.experiences.push(this.createExperienceGroup(company, name));
  }

  public deleteExperience(index): void {
    this.experiences.removeAt(index);
  }

  public deleteAllExperiences() {
    for (let i = 0; i < this.experiences.length; i++) {
      this.experiences.removeAt(this.experiences.length -1 - i);
    }
  }

  private resetEmployment() {
    this.deleteAllExperiences();
    this.experiences.reset();
  }

  public addEmptyExperience(): void {
    this.addExperience('', '');
  }

  private createExperienceGroup(company: string, name: string): FormGroup {
    return this.builder.group({
      company : [company, Validators.required],
      role: [name, Validators.required],
    })
  }

  ngOnInit() {
    this.profileForm.addControl('employmentInfo', this.employmentInfo);
    this.addEmptyExperience();
  }

}
