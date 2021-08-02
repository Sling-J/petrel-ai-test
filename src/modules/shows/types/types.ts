export type ShowType = {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  officialSite: string
  schedule: {
    time: string
    days: string[]
  }
  rating: {
    average: number
  }
  weight: number
  network: {
    id: number
    name: string
    country: {
      name: string
      code: string
      timezone: string
    }
  }
  webChannel: any
  dvdCountry: any
  externals: {
    tvrage: number
    thetvdb: number
    imdb: string
  }
  image: {
    medium: string
    original: string
  }
  summary: string
  updated: number
  _links?: {
    self: {
      href: string
    }
    previousepisode: {
      href: string
    }
  }
  _embedded?: {
    nextepisode?: {
      id: 2113279
      url: string
      name: string
      season: number
      number: number
      type: string
      airdate: string
      airtime: string
      airstamp: string
      runtime: number
      image: {
        medium: string
        original: string
      }
      summary: string
      _links: {
        self: {
          href: string
        }
      }
    }
  }
}

export type CastType = {
  person: {
    id: number
    url: string
    name: string
    country: {
      name: string
      code: string
      timezone: string
    }
    birthday: string
    deathday: any
    gender: string
    image: {
      medium: string
      original: string
    }
    _links: {
      self: {
        href: string
      }
    }
  }
  character: {
    id: number
    url: string
    name: string
    image: {
      medium: string
      original: string
    }
    _links: {
      self: {
        href: string
      }
    }
  }
  self: boolean
  voice: boolean
}
