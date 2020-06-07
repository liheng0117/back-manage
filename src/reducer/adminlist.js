import { FETCH_ADMINLIST_DATA } from '@/constants/actionTypes'
const defaultState = {
  adminData: {},
}
export default function admin(state = defaultState, action) {
  switch (action.type) {
    case FETCH_ADMINLIST_DATA:
      action.payload.data.forEach((v) => {
        v.key = v.id
      })
      return { ...state, adminData: action.payload.data }
    default:
      return state
  }
}
