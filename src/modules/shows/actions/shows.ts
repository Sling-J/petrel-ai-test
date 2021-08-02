import { ActionCreator } from 'redux'
import { AppThunk } from 'store/rootReducer'

import * as actions from 'src/modules/shows/constants/shows'

export const getShows: ActionCreator<any> = (): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SHOWS_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SHOWS_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SHOWS_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get('/shows')
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}

export const getShowCast: ActionCreator<any> = (id): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SHOW_CAST_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SHOW_CAST_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SHOW_CAST_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/shows/${id}/cast`)
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}


export const getShowDetails: ActionCreator<any> = (id): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SHOW_DETAILS_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SHOW_DETAILS_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SHOW_DETAILS_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/shows/${id}`, {
        params: {
          embed: 'nextepisode',
        },
      })
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}

export const getShowSeasons: ActionCreator<any> = (id): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SHOW_SEASONS_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SHOW_SEASONS_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SHOW_SEASONS_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/shows/${id}/seasons`)
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}

export const getShowEpisodes: ActionCreator<any> = (id): AppThunk => {
  const request: ActionCreator<any> = () => ({
    type: [actions.GET_SHOW_EPISODES_REQUEST],
  })
  const success: ActionCreator<any> = data => ({
    type: [actions.GET_SHOW_EPISODES_SUCCESS],
    payload: data,
  })
  const failure: ActionCreator<any> = error => ({
    type: [actions.GET_SHOW_EPISODES_FAILURE],
    error,
  })

  return (dispatch, getState, instance) => {
    dispatch(request())

    instance
      .get(`/shows/${id}/episodes`)
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}
