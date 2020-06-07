import { FETCH_SHOPLIST_DATA } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getShop(options) {
  return {
    type: FETCH_SHOPLIST_DATA,
    payload: get(`${api.shopUrl}?limit=10&offset=${options}`),
  }
}
