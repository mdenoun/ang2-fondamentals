import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Input()
  public profileForm: FormGroup;
  public languages: FormGroup;
  @Input() public languagesModel;

  constructor(private builder: FormBuilder) {
    this.languages = builder.group({
      primary: ['', [
        Validators.required
      ]],
      secondary: [''],
      third: [''],
      fourth: ['']
    });
  }

  ngOnInit() {
    this.profileForm.addControl('languages', this.languages);
  }

  get primary(): FormControl{
    return <FormControl> this.languages.get('primary');
  }
  get secondary(): FormControl{
    return <FormControl> this.languages.get('secondary');
  }
  get third(): FormControl{
    return <FormControl> this.languages.get('third');
  }
  get fourth(): FormControl{
    return <FormControl> this.languages.get('fourth');
  }

}
