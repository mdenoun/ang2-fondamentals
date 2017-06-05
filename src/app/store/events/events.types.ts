/**
 * Created by maximedenoun on 2017-06-05.
 */
export interface IEvent {
  title: string,
  description?: string;
  location: string;
  date: string;
}
export interface IEvents {
  pending?: boolean,
  events?: [IEvent],
}
