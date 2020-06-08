import { FETCH_ADDGOODS_FOOD } from '@/constants/actionTypes'
const defaultState = {
  foodsType: [],
}
export default function goods(state = defaultState, action) {
  switch (action.type) {
    case FETCH_ADDGOODS_FOOD:
      return { ...state, foodsType: action.payload }
    default:
      return state
  }
}
