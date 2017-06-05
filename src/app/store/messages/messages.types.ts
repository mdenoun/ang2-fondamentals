/**
 * Created by maximedenoun on 2017-06-05.
 */
export interface IMessage {
  from: string;
  to: string;
  title?: string,
  body?: string;
  date: string;
}
export interface IMessages {
  pending?: boolean,
  messages?: [IMessage],
}
