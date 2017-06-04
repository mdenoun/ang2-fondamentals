import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  @Input()
  public profileForm: FormGroup;
  public communityInfo: FormGroup;
  @Input() public communityModel;

  constructor(private builder: FormBuilder) {
    this.communityInfo = builder.group({
      isCommunityMember: [false, [
        Validators.required
      ]],
      community: ['', [
        Validators.required
      ]]
    })
  }

  ngOnInit() {
    this.profileForm.addControl('communityInfo', this.communityInfo);
  }

  /*get communityInfo(): FormGroup{
    return <FormGroup> this.profileForm.get('communityInfo');
  }*/

  get isCommunityMember(): FormControl{
    return <FormControl> this.communityInfo.get('isCommunityMember');
  }
  get community(): FormControl{
    return <FormControl> this.communityInfo.get('community');
  }

}
