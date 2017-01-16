/* eslint no-undef: "off" */

import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import { createReducers } from "reducers"
import { createSagas } from "sagas"

const hasWindow = typeof window !== "undefined"
const devTools = hasWindow && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const useDevTools = devTools && process.env.NODE_ENV !== "production"

const sagas = createSagaMiddleware()
const composer = useDevTools ? devTools : compose
const store = createStore(
  createReducers(),
  composer(
    applyMiddleware(sagas)
  )
)

sagas.run(createSagas())

export default store
