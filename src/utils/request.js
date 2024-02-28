import axios from 'axios'
import { BASE_URL } from './constant'
import { message } from 'antd'

const request = axios.create({
  baseURL: BASE_URL
})

request.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    message.error(error.response.data.message ?? 'Server error')
    return Promise.reject(error)
  }
)

export default request
