import { FETCH_ORDERLIST_DATA } from '@/constants/actionTypes'
const defaultState = {
  orderData: {},
}
export default function order(state = defaultState, action) {
  switch (action.type) {
    case FETCH_ORDERLIST_DATA:
      action.payload.forEach((v) => {
        v.key = v.id
      })
      return { ...state, orderData: action.payload }
    default:
      return state
  }
}
