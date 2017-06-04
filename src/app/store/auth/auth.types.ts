/**
 * Created by maximedenoun on 2017-05-26.
 */
export interface IAuthUser {
  id?: number,
  pending?: boolean
  usernameEmail?: string;
  password?: string;
  name?: string,
  file?: string,
  email?: string
  surname?: string
}
