/**
 * Created by maximedenoun on 2017-05-26.
 */
export interface IProfile {
  pending?: boolean;
  GeneralInfo?: {
    id?: 286,
    file?: string,
    Email?: string,
    Name?: string,
    Surname?: string,
    AllowImageUsage?: boolean,
    Biography?: string
  },
  EmploymentInfo?: {
    Company?: string[],
    Role?: string[]
  },
  Social?: {
    Nationality?: string,
    CityCountry?: string,
    Phone?: string,
    Website?: string,
    Twitter?: string,
    Facebook?: string,
    Linkedin?: string,
    Git?: string,
  },
  Languages?: {
    Primary?: string,
    Secondary?: string,
    Third?: string,
    Fourth?: string
  },
  CommunityInfo?: {
    IsCommunityMember?: boolean,
    Community?: string
  },
  Agreement?: {
    Agrees?: boolean,
  }
}
