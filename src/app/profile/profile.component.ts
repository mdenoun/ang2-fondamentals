import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {select} from "@angular-redux/store";
import {ProfileService} from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @select('user') public user;
  @select('profile') public profile;
  public profileForm: FormGroup;

  constructor(private builder: FormBuilder, private service:ProfileService) {
    this.user.subscribe((value) => {
      if(typeof value.user.pending !== 'undefined' && !value.user.pending
        && typeof value.user.id !== 'undefined') {//we already receive the user id we are good to go we can retrieve profile having user auth info
        this.service.retrieveProfile(value.user);
      }
    });
    /*this.profile.subscribe((value) => {
      if(value.profile && value.profile.EmploymentInfo) {
        this.updateEmploymentInfo(value.profile.EmploymentInfo);
      }
    });*/
    this.profileForm = builder.group({
    });
  }

  /*private checkError(field) {
    if(field.control.errors !== null) {
      console.group(`${field.label} errors`);
      console.log(field.control.errors);
      console.groupEnd();
    }
  }*/

  public save() {
    /*this.checkError({control:this.name, label:'Name'});
    this.checkError({control:this.surname, label:'Surname'});
    this.checkError({control:this.allowImageUsage, label:'AllowImageUsage'});
    this.checkError({control:this.biography, label:'Biography'});*/
    /*this.checkError({control:this.agrees, label:'Agrees'});*/
    //ToDo check for errors
    if(this.profileForm.valid) {
      console.log(this.profileForm.value);//ToDo send PROFILE_SAVED action
    }
  }

  ngOnInit() {
  }

}
