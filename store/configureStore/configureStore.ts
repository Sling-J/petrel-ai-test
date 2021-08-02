import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import { loadState } from 'store/configureStore/persistStore'
import { rootReducer } from 'store/rootReducer'

import apiMiddleware from 'store/configureStore/middleware/api'

const persistedState = loadState()

export const store: Store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(apiMiddleware(history), thunk as ThunkMiddleware),
  ),
)
