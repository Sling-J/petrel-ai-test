import { EpisodeType } from 'src/modules/episodes/types'
import { SeasonType } from 'src/modules/seasons/types'
import {
  ShowType,
  CastType,
} from 'src/modules/shows/types'

export interface ShowsState {
  list: ShowType[]
  loadingOfShows: boolean,
  errorOfShows: object | string

  details: ShowType
  loadingOfDetails: boolean,
  errorOfDetails: object | string

  seasons: SeasonType[]
  loadingOfSeasons: boolean,
  errorOfSeasons: object | string

  episodes: EpisodeType[]
  loadingOfEpisodes: boolean,
  errorOfEpisodes: object | string

  cast: CastType[]
  loadingOfCast: boolean,
  errorOfCast: object | string
}
