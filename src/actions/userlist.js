import { FETCH_USERLIST_DATA } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getUsers(options) {
  return {
    type: FETCH_USERLIST_DATA,
    payload: get(`${api.userUrl}?limit=10&offset=${options}`),
  }
}
