// 对于axios二次封装

import axios from 'axios'
import Blods from '../../public/config'

// 创建axios实例
const uidRequest = axios.create({
  baseURL: Blods.boardUrl,
  // 代表请求超时的时间
  timeout: 8000
})

export default uidRequest
