/**
 * Created by maximedenoun on 2017-05-26.
 */
export interface IMenu {
  id: number,
  name: string,
  iconClass:string,
  route:string
}
export class Menu implements Menu{
  constructor(public id: number, public name: string, public iconClass:string,  public route:string) { }
}
export interface IUser {
  id: number,
  name: string,
  file:string
}
export class User implements IUser{
  constructor(public id: number, public name: string, public file:string) { }
}
