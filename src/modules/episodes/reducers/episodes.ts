import { createReducer } from 'lib/utils'
import { EpisodesState } from 'src/modules/episodes/types/interfaces'

import * as actions from 'src/modules/episodes/constants/episodes'

const initialState: EpisodesState = {
  details: null,
  loadingOfDetails: false,
  errorOfDetails: null,
}

export default createReducer(initialState, {
  [actions.GET_EPISODE_DETAILS_REQUEST]: state => ({
    ...state,
    loadingOfDetails: true,
    errorOfDetails: null
  }),
  [actions.GET_EPISODE_DETAILS_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    details: payload,
    loadingOfDetails: false,
    errorOfDetails: null
  }),
  [actions.GET_EPISODE_DETAILS_FAILURE]: (state, { error }: any) => ({
    ...state,
    details: null,
    loadingOfDetails: false,
    errorOfDetails: error
  }),
})
