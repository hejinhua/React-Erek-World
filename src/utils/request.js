import { isUrl, showToast } from './utils'

let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://www.pengdaokuan.cn:3001'
} else {
  baseUrl = 'http://localhost:3001'
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排毒（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误。',
  401: '用户没有权限(令牌、用户名、密码错误)。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求是针对不存在的资源。',
  405: '参数错误',
  406: '请求资源的格式不对。',
  410: '请求资源永久删除，并且不会再得到。',
  422: '创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const errorText = codeMessage[response.status] || response.statusText
  const error = new Error(errorText)
  error.status = response.status
  error.response = response
  throw error
}

export default function request(url, options) {
  options = options || {}
  const defaultOptions = {
    credentials: 'include'
  }
  if (!isUrl(url)) {
    url = baseUrl + url
  }
  let token = sessionStorage.getItem('authToken')
  token = token || ''
  options.headers = {
    ...options.headers,
    'React-Token': token
  }
  const newOptions = { ...defaultOptions, ...options }
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers
      }
      newOptions.body = JSON.stringify(newOptions.body)
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers
      }
    }
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(res => res.json())
    .then(res => {
      if (res.code === 0) {
        return res.data
      } else {
        const error = new Error(res.msg)
        error.code = res.code
        throw error
      }
    })
    .catch(err => {
      if (err.status === 401) {
        sessionStorage.clear()
        showToast({
          message: 'token已过期，请重新登录',
          type: 'warning',
          duration: 1500
        })
        setTimeout(() => {
          window.location.href = '/'
        }, 1500)
      } else if (err.status === 403) {
        showToast({
          message: '无权限',
          type: 'warning',
          duration: 1500
        })
      } else if (err.status === 500) {
        showToast({
          message: '服务器错误',
          type: 'error',
          duration: 1500
        })
      }
      throw err
    })
}
