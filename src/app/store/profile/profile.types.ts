/**
 * Created by maximedenoun on 2017-05-26.
 */
export interface IProfile {
  pending?: boolean,
  generalInfo?: {
    id?: number,
    file?: string,
    email?: string,
    name?: string,
    surname?: string,
    allowImageUsage?: boolean,
    biography?: string
  },
  employmentInfo?: {
    company?: string[],
    role?: string[]
  },
  social?: {
    nationality?: string,
    cityCountry?: string,
    phone?: string,
    website?: string,
    twitter?: string,
    facebook?: string,
    linkedIn?: string,
    git?: string,
  },
  languages?: {
    primary?: string,
    secondary?: string,
    third?: string,
    fourth?: string
  },
  communityInfo?: {
    isCommunityMember?: boolean,
    community?: string
  },
  agreement?: {
    agrees?: boolean,
  }
}
