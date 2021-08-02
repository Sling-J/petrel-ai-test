import { createReducer } from 'lib/utils'
import { SeasonsState } from 'src/modules/seasons/types/interfaces'

import * as actions from 'src/modules/seasons/constants/seasons'

const initialState: SeasonsState = {
  details: null,
  loadingOfDetails: false,
  errorOfDetails: null,

  episodes: [],
  loadingOfEpisodes: false,
  errorOfEpisodes: null
}

export default createReducer(initialState, {
  [actions.GET_SEASON_DETAILS_REQUEST]: state => ({
    ...state,
    loadingOfDetails: true,
    errorOfDetails: null
  }),
  [actions.GET_SEASON_DETAILS_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    details: payload,
    loadingOfDetails: false,
    errorOfDetails: null
  }),
  [actions.GET_SEASON_DETAILS_FAILURE]: (state, { error }: any) => ({
    ...state,
    details: null,
    loadingOfDetails: false,
    errorOfDetails: error
  }),
  [actions.GET_SEASON_EPISODES_REQUEST]: state => ({
    ...state,
    loadingOfEpisodes: true,
    errorOfEpisodes: null
  }),
  [actions.GET_SEASON_EPISODES_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    episodes: payload,
    loadingOfEpisodes: false,
    errorOfEpisodes: null
  }),
  [actions.GET_SEASON_EPISODES_FAILURE]: (state, { error }: any) => ({
    ...state,
    details: null,
    loadingOfEpisodes: false,
    errorOfEpisodes: error
  }),
})
