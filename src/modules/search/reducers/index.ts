import { combineReducers } from 'redux'

import search from 'src/modules/search/reducers/search'

import { appName } from 'src/settings/config'

export const moduleName = 'search'
export const prefix = `${appName}/${moduleName}`

export default combineReducers({
  search,
})
