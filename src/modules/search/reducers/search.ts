import { createReducer } from 'lib/utils'
import { SearchState } from 'src/modules/search/types/interfaces'

import * as actions from 'src/modules/search/constants/search'

const initialState: SearchState = {
  list: [],
  loadingOfSearch: false,
  errorOfSearch: null
}

export default createReducer(initialState, {
  [actions.SEARCH_SHOW_REQUEST]: state => ({
    ...state,
    list: [],
    loadingOfSearch: true,
    errorOfSearch: null
  }),
  [actions.SEARCH_SHOW_SUCCESS]: (state, { payload }: any) => ({
    ...state,
    list: payload,
    loadingOfSearch: false,
    errorOfSearch: null
  }),
  [actions.SEARCH_SHOW_FAILURE]: (state, { error }: any) => ({
    ...state,
    list: [],
    loadingOfSearch: false,
    errorOfSearch: error
  }),
})
