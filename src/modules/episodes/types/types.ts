import { ShowType } from 'src/modules/shows/types'

export type EpisodeType = {
  id: number
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
  _links?: {
    self: {
      href: string
    }
  }
  _embedded?: {
    show?: ShowType
  }
}
