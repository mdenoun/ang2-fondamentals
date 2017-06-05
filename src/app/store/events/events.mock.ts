import {IEvents} from "./events.types";
/**
 * Created by maximedenoun on 2017-06-05.
 */
export class EventsMock {
  static retrievedEvents(): IEvents {
    return {
      events: [
        {
          title: 'Angular 5',
          description: "ng conf",
          location: 'TLV',
          date: '2017/07/18'
        },
        {
          title: 'React',
          description: "react conf",
          location: 'TLV',
          date: '2017/07/26'
        }
      ]
    }
  }
}
