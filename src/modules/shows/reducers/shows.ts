import { createReducer } from 'lib/utils'
import { ShowsState } from 'src/modules/shows/types/interfaces'

import * as actions from 'src/modules/shows/constants/shows'

const initialState: ShowsState = {
  list: [],
  loadingOfShows: false,
  errorOfShows: null,

  details: null,
  loadingOfDetails: false,
  errorOfDetails: null,

  seasons: [],
  loadingOfSeasons: false,
  errorOfSeasons: null,

  episodes: [],
  loadingOfEpisodes: false,
  errorOfEpisodes: null,

  cast: [],
  loadingOfCast: false,
  errorOfCast: null,
}

export default createReducer(initialState, {
  [actions.GET_SHOWS_REQUEST]: state => ({
    ...state,
    loadingOfShows: true,
    errorOfShows: null
  }),
  [actions.GET_SHOWS_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    list: payload,
    loadingOfShows: false,
    errorOfShows: null
  }),
  [actions.GET_SHOWS_FAILURE]: (state, { error }: any) => ({
    ...state,
    list: [],
    loadingOfShows: false,
    errorOfShows: error
  }),
  [actions.GET_SHOW_CAST_REQUEST]: state => ({
    ...state,
    loadingOfCast: true,
    errorOfCast: null
  }),
  [actions.GET_SHOW_CAST_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    cast: payload,
    loadingOfCast: false,
    errorOfCast: null
  }),
  [actions.GET_SHOW_CAST_FAILURE]: (state, { error }: any) => ({
    ...state,
    cast: [],
    loadingOfCast: false,
    errorOfCast: error
  }),
  [actions.GET_SHOW_DETAILS_REQUEST]: state => ({
    ...state,
    loadingOfDetails: true,
    errorOfDetails: null
  }),
  [actions.GET_SHOW_DETAILS_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    details: payload,
    loadingOfDetails: false,
    errorOfDetails: null
  }),
  [actions.GET_SHOW_DETAILS_FAILURE]: (state, { error }: any) => ({
    ...state,
    details: null,
    loadingOfDetails: false,
    errorOfDetails: error
  }),
  [actions.GET_SHOW_SEASONS_REQUEST]: state => ({
    ...state,
    loadingOfSeasons: true,
    errorOfSeasons: null
  }),
  [actions.GET_SHOW_SEASONS_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    seasons: payload,
    loadingOfSeasons: false,
    errorOfSeasons: null
  }),
  [actions.GET_SHOW_SEASONS_FAILURE]: (state, { error }: any) => ({
    ...state,
    seasons: [],
    loadingOfSeasons: false,
    errorOfSeasons: error
  }),
  [actions.GET_SHOW_EPISODES_REQUEST]: state => ({
    ...state,
    loadingOfEpisodes: true,
    errorOfEpisodes: null
  }),
  [actions.GET_SHOW_EPISODES_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    episodes: payload,
    loadingOfEpisodes: false,
    errorOfEpisodes: null
  }),
  [actions.GET_SHOW_EPISODES_FAILURE]: (state, { error }: any) => ({
    ...state,
    episodes: [],
    loadingOfEpisodes: false,
    errorOfEpisodes: error
  }),
})
