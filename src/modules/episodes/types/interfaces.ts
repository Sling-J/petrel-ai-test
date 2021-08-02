import { EpisodeType } from 'src/modules/episodes/types'

export interface EpisodesState {
  details: EpisodeType
  loadingOfDetails: boolean
  errorOfDetails: object | string
}
