/**
 * Created by maximedenoun on 2017-05-25.
 */
import {IAuthUser} from "./auth.types";

export class Mock {
  static retrievedUser():IAuthUser {
    return {
      id: 286,
      name:'Maxime',
      file:'../assets/286.jpg',
      email: "maximedenoun73@gmail.com",
      Name: 'Maxime',
      Surname: 'Denoun'
    }
  }
}
