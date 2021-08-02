import { ActionCreator } from 'redux'
import { AppThunk } from 'store/rootReducer'

import * as actions from 'src/modules/seasons/constants/seasons'

export const getSeasonDetails: ActionCreator<any> = (id: string): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SEASON_DETAILS_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SEASON_DETAILS_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SEASON_DETAILS_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/seasons/${id}`)
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}

export const getSeasonEpisodes: ActionCreator<any> = (id: string): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SEASON_EPISODES_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SEASON_EPISODES_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SEASON_EPISODES_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/seasons/${id}/episodes`)
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}
