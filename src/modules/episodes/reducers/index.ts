import { combineReducers } from 'redux'

import episodes from 'src/modules/episodes/reducers/episodes'

import { appName } from 'src/settings/config'

export const moduleName = 'episodes'
export const prefix = `${appName}/${moduleName}`

export default combineReducers({
  episodes,
})
