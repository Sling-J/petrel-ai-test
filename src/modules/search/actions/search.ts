import { ActionCreator } from 'redux'
import { AppThunk } from 'store/rootReducer'

import { SearchShowParams } from 'src/modules/search/types'

import * as actions from 'src/modules/search/constants/search'

export const searchShow: ActionCreator<any> = (
  params: SearchShowParams
): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.SEARCH_SHOW_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.SEARCH_SHOW_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.SEARCH_SHOW_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get('/search/shows', {
        params: {
          q: params.query
        }
      })
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}
