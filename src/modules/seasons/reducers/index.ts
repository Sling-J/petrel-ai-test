import { combineReducers } from 'redux'

import seasons from 'src/modules/seasons/reducers/seasons'

import { appName } from 'src/settings/config'

export const moduleName = 'seasons'
export const prefix = `${appName}/${moduleName}`

export default combineReducers({
  seasons,
})
