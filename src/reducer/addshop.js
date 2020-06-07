import { FETCH_ADDSHOP_CITY } from '@/constants/actionTypes'
const defaultState = {
  hotCity: [],
}
export default function admin(state = defaultState, action) {
  switch (action.type) {
    case FETCH_ADDSHOP_CITY:
      return { ...state, hotCity: action.payload }
    default:
      return state
  }
}
