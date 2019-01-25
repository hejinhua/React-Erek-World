import request from '../utils/request'

export async function getUserInfo() {
  return request('/auth-login')
}
export async function checkSession() {
  return request('/cp/check-session')
}
