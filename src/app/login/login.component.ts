import {Component, OnInit, Input} from "@angular/core";
import {AuthService} from "./auth/auth.service";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loginForm:FormGroup;

  constructor(private builder:FormBuilder, private auth:AuthService) {
    this.loginForm = builder.group({
      usernameEmail: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

  }

  ngOnInit() {

  }

  get usernameEmail(): FormControl {
    return <FormControl>this.loginForm.get('usernameEmail');
  }

  get password(): FormControl {
    return <FormControl>this.loginForm.get('password');
  }

  private checkError(field) {
    if(field.control.errors !== null) {
      console.group(`${field.label} errors`);
      console.log(field.control.errors);
      console.groupEnd();
    }
  }

  login() {
    this.checkError({control:this.usernameEmail, label:'usernameEmail'});
    this.checkError({control:this.password, label:'password'});
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value);
    }
  }
}
