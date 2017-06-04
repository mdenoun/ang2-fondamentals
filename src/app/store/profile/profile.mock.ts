import {IProfile} from "./profile.types";
/**
 * Created by maximedenoun on 2017-05-26.
 */
export class ProfileMock {
  static retrievedProfile():IProfile {
    return {
      generalInfo: {
        id: 286,
        file: '../assets/286.jpg',
        email: "maximedenoun173@gmail.com",
        name: 'Maxime',
        surname: 'Denoun',
        allowImageUsage: true,
        biography: 'This is my biography'
      },
      employmentInfo: {
        company: ['Tech 500', 'Tech 501' ],
        role: ['dev', 'public speaker']
      },
      social: {
        nationality: 'Israeli',
        cityCountry: 'Ashdod - Israel',
        phone: '0506944081',
        website: 'www.harbo.com',
        twitter: 'I don"t have twitter',
        facebook: 'I don"t have FB',
        linkedIn: 'I don"t have it',
        git: 'https://github.com/mdenoun',
      },
      languages: {
        primary: 'Hebrew',
        secondary: 'English',
        third: 'French',
        fourth: 'Chinese'
      },
      communityInfo: {
        isCommunityMember: true,
        community: 'Angular'
      },
      agreement: {
        agrees: true,
      }
    }
  }
}
