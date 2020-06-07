import { FETCH_FOODLIST_DATA } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getFoods(options) {
  return {
    type: FETCH_FOODLIST_DATA,
    payload: get(`${api.foodsUrl}?limit=10&offset=${options}`),
  }
}
