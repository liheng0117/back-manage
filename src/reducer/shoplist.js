import { FETCH_SHOPLIST_DATA } from '@/constants/actionTypes'
const defaultState = {
  shopData: {},
}
export default function user(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SHOPLIST_DATA:
      action.payload.forEach((v) => {
        v.key = v.id
      })
      return { ...state, shopData: action.payload }
    default:
      return state
  }
}
