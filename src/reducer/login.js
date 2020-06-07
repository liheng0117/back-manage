import { FETCH_LOGIN_USER } from '@/constants/actionTypes'
const defaultState = {
  loginData: {},
}
export default function home(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN_USER:
      return { ...state, loginData: action.payload }
    default:
      return state
  }
}
