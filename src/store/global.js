// import { call, put, takeEvery } from 'redux-saga/effects'

export const types = {
  SET_APP_NAME: 'global/SET_APP_NAME'
}

export const actions = {
  setAppName(data) {
    return { type: types.SET_APP_NAME, payload: data }
  }
}

const initialState = {
  appname: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_APP_NAME:
      return {
        ...state,
        appname: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
