import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(userValue) {
    console.log(userValue);
  }

}
