import { LOGIN_SUCCESS, LOGOUT_SUCCESS, payload } from "actions"

export const token = (initialState = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return payload(action).token
    case LOGOUT_SUCCESS:
      return null
    default:
      return initialState
  }
}
