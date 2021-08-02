import { ShowType } from 'src/modules/shows/types'

export type SearchShowParams = {
  query?: string
}

export type SearchListType = {
  score: number
  show: ShowType
}
