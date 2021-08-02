import { EpisodeType } from 'src/modules/episodes/types'
import { SeasonType } from 'src/modules/seasons/types'

export interface SeasonsState {
  details: SeasonType
  loadingOfDetails: boolean
  errorOfDetails: object | string

  episodes: EpisodeType[]
  loadingOfEpisodes: boolean
  errorOfEpisodes: object | string
}
