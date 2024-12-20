import config from '@/config';
import axios from 'axios';
import { showLoadingToast, showToast, closeToast } from 'vant'

const baseURL = config.baseURL
const service = axios.create({ baseURL })
// 请求拦截器
service.interceptors.request.use(req => {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
  })
  return req
})
// 响应拦截器
service.interceptors.response.use(res => {
    console.log(123, res)
    closeToast()
    const { code, msg } = res.data
    if (code === 200) {
      if (msg !== '') {
        showToast({
          message: msg,
          type: 'success'
        })
      }
      return res.data || true
    }
    showToast({
      message: msg,
      type: 'error'
    })
    return false
  },
  error => {
    closeToast()
    showToast({
      message: '请求失败',
      type: 'fail'
    })
    console.log(error)
  }
)
export default service