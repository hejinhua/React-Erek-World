import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import globalReducer from './global'
import loginReducer, { watchLogin } from './login'

const rootReducer = combineReducers({
  uglobal: globalReducer,
  ulogin: loginReducer
})

function* rootSaga() {
  yield all([watchLogin()])
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
