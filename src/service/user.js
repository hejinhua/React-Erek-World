import request from '../utils/request'

export async function checkSession() {
  return request('/cp/check-session')
}
