import { SearchListType } from 'src/modules/search/types'

export interface SearchState {
  list: SearchListType[]
  loadingOfSearch: boolean
  errorOfSearch: object | string
}
