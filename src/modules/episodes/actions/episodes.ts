import { ActionCreator } from 'redux'
import { AppThunk } from 'store/rootReducer'

import * as actions from 'src/modules/episodes/constants/episodes'

export const getEpisodeDetails: ActionCreator<any> = (id: string): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_EPISODE_DETAILS_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_EPISODE_DETAILS_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_EPISODE_DETAILS_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/episodes/${id}`, {
        params: {
          embed: 'show'
        }
      })
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}
