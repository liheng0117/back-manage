import { FETCH_FOODLIST_DATA } from '@/constants/actionTypes'
const defaultState = {
  foodData: {},
}
export default function food(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FOODLIST_DATA:
      action.payload.forEach((v) => {
        v.key = v.item_id
      })
      return { ...state, foodData: action.payload }
    default:
      return state
  }
}
