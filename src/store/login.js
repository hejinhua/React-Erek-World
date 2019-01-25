import { call, put, takeEvery } from 'redux-saga/effects'
import { showToast } from '../utils/utils'
import { getUserInfo } from '../service/user'
export const types = {
  USER_LOGIN: 'login/USER_LOGIN',
  SET_USER: 'login/SET_USER'
}

export const actions = {
  userLogin(data) {
    console.log('action: ', data)
    return { type: types.USER_LOGIN, payload: data }
  }
}

function* fetchUserLoginAsync(action) {
  try {
    const response = yield call(getUserInfo, action.payload)
    if (response.code === 1) {
      yield put({ type: types.SET_USER, payload: response.data })
      showToast({
        message: '获取用户信息成功',
        type: 'success'
      })
    } else {
      showToast({
        message: '获取用户信息失败',
        type: 'error'
      })
    }
  } catch (err) {
    showToast({
      message: '服务器错误',
      type: 'error'
    })
  }
}

export function* watchLogin() {
  yield takeEvery(types.USER_LOGIN, fetchUserLoginAsync)
}

const initialState = {
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: { ...action.payload }
      }
    default:
      return {
        ...state
      }
  }
}
