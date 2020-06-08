import { FETCH_ADDGOODS_FOOD } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getFoods(options) {
  return {
    type: FETCH_ADDGOODS_FOOD,
    payload: get(api.foodsTypeUrl),
  }
}
