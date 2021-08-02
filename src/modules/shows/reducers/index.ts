import { combineReducers } from 'redux'

import shows from 'src/modules/shows/reducers/shows'

import { appName } from 'src/settings/config'

export const moduleName = 'shows'
export const prefix = `${appName}/${moduleName}`

export default combineReducers({
  shows,
})
