import { FETCH_LOGIN_USER } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function getLogin(options) {
  return {
    type: FETCH_LOGIN_USER,
    payload: post(api.loginUrl, options),
  }
}
