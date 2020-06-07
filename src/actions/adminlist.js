import { FETCH_ADMINLIST_DATA } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getAdmin(options) {
  return {
    type: FETCH_ADMINLIST_DATA,
    payload: get(`${api.adminUrl}?limit=10&offset=${options}`),
  }
}
