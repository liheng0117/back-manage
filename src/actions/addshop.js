import { FETCH_ADDSHOP_CITY } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function getCity(options) {
  return {
    type: FETCH_ADDSHOP_CITY,
    payload: get(api.hotCityUrl),
  }
}
