import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
// import globalReducer, { watchGlobal } from './global'
import globalReducer from './global'

const rootReducer = combineReducers({
  uglobal: globalReducer
})

function* rootSaga() {
  // yield all([watchGlobal()])
  yield all([])
}

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  sagaMiddleware.run(rootSaga)
  return store
}
