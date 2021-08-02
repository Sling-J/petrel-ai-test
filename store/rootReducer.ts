import { combineReducers, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AxiosInstance } from 'axios'

import showsReducer, {
  moduleName as showsModule,
} from 'src/modules/shows/reducers'

import searchReducer, {
  moduleName as searchModule,
} from 'src/modules/search/reducers'

import seasonsReducer, {
  moduleName as seasonsModule,
} from 'src/modules/seasons/reducers'

import episodesReducer, {
  moduleName as episodesModule,
} from 'src/modules/episodes/reducers'

export const rootReducer = combineReducers({
  [showsModule]: showsReducer,
  [searchModule]: searchReducer,
  [seasonsModule]: seasonsReducer,
  [episodesModule]: episodesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  AxiosInstance,
  Action<string>
>
