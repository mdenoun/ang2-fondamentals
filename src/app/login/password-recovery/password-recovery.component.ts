import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(private builder:FormBuilder) {}

  ngOnInit() {

  }
}
