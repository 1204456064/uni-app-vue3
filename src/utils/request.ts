import { httpType, httpData } from './types'
import { showToast } from './messageTip'
import { clearToken } from './uni-storage'

const BASE_URL = import.meta.env.VITE_API_URL as string

/**
 * 未登录码
 */
const NOT_LOGIN_CODE = -997

/**
 * 异常提示码
 */
const EXCEPTION_CODE = 300

/**
 * 成功码
 */
const SUCCESS_CODE = 120

function http(data: httpData, method: httpType, url: string) {
  const token = uni.getStorageSync('token')
  uni.showLoading({
    title: '请求中',
    mask: true,
  })

  console.log(BASE_URL + url)
  return new Promise((resolve) => {
    uni.request({
      url: BASE_URL + url,
      method,
      data,
      dataType: 'json',
      header: {
        'v-token': token,
      },
      success: (res) => {
        responHandler(res, resolve)
      },
      fail: () => {
        errorHander()
      },
      complete: () => {
        uni.hideLoading()
      },
    })
  })
}

function responHandler(res: httpData, resolve: httpData) {
  const { code } = res.data
  if (code === NOT_LOGIN_CODE) {
    // 未登录处理
    clearToken()
    uni.showToast({
      title: '登录失效，请重新登录',
      icon: 'none',
      mask: true,
      complete: () => {
        uni.navigateTo({ url: '/pages/login/login' })
      },
    })
    return false
  }

  if (code === EXCEPTION_CODE) {
    showToast(res.data.message)
    return false
  }

  if (code === SUCCESS_CODE) {
    return resolve({ ...res.data })
  }
}

/**
 * 错误处理
 */
function errorHander() {
  showToast('网络错误或服务器错误')
}

export function get(url: string, data: httpData) {
  return http(data, 'GET', url)
}
export function post(url: string, data: httpData) {
  return http(data, 'POST', url)
}
