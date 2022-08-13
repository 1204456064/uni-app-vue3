import { httpData } from './../../utils/types'
import { post } from '@/utils/request'
export default {
  login: (data: httpData) => post('/api/v1/user/manage/login', data),
}
