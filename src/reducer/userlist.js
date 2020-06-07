import { FETCH_USERLIST_DATA } from '@/constants/actionTypes'
const defaultState = {
  userData: {},
}
export default function user(state = defaultState, action) {
  switch (action.type) {
    case FETCH_USERLIST_DATA:
      action.payload.forEach((v) => {
        v.key = v.id
      })
      return { ...state, userData: action.payload }
    default:
      return state
  }
}
