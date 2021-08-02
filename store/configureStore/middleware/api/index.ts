import axios, { AxiosInstance } from 'axios'
import {
  configureRequestsSuccess,
  configureResponseSuccess,
  configureResponseError,
} from './interceptors'

export default history => ({ dispatch, getState }) => {
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
  })

  instance.interceptors.request.use(
    configureRequestsSuccess(getState),
    e => Promise.reject(e),
  )

  instance.interceptors.response.use(
    configureResponseSuccess,
    configureResponseError,
  )

  return next => action => {
    if (typeof action === 'function') {
      action(dispatch, getState, instance, history)
    } else {
      next(action)
    }
  }
}
