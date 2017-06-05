import {IMessages} from "./messages.types";
/**
 * Created by maximedenoun on 2017-06-05.
 */
export class MessagesMock {
  static retrievedMessages(): IMessages {
    return {
      messages: [
        {
          from: 'marcel@comp.co.il',
          to: 'roger@comp.co.il',
          title: 'Angular 5',
          body: "how was the conference",
          date: '2017/07/18'
        },
        {
          from: 'moshe@comp.co.il',
          to: 'roger@comp.co.il',
          title: 'React',
          body: "the conf was metsouyian",
          date: '2017/07/18'
        }
      ]
    }
  }
}
