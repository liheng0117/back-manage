import { FETCH_ORDERLIST_DATA } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getOrder(options) {
  return {
    type: FETCH_ORDERLIST_DATA,
    payload: get(`${api.orderUrl}?limit=10&offset=${options}`),
  }
}
