import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Input()
  public profileForm: FormGroup;
  public social: FormGroup;
  @Input() public socialModel;

  constructor(private builder: FormBuilder) {
    this.social = builder.group({
      nationality: ['', [
        Validators.required
      ]],
      cityCountry: ['', [
        Validators.required
      ]],
      phone: ['', [
        Validators.required
      ]],
      website: [''],
      twitter: [''],
      facebook: [''],
      linkedIn: [''],
      git: ['']
    });
  }

  ngOnInit() {
    this.profileForm.addControl('social', this.social);
  }

  get nationality(): FormControl{
    return <FormControl> this.social.get('nationality');
  }
  get cityCountry(): FormControl{
    return <FormControl> this.social.get('cityCountry');
  }
  get phone(): FormControl{
    return <FormControl> this.social.get('phone');
  }
  get website(): FormControl{
    return <FormControl> this.social.get('website');
  }
  get twitter(): FormControl{
    return <FormControl> this.social.get('twitter');
  }
  get facebook(): FormControl{
    return <FormControl> this.social.get('facebook');
  }
  get linkedIn(): FormControl{
    return <FormControl> this.social.get('linkedIn');
  }
  get git(): FormControl{
    return <FormControl> this.social.get('git');
  }

}
