export const LOGOUT = "LOGOUT"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE"

export const logout = () => ({ type: LOGOUT })
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
export const logoutFailure = (payload) => ({ type: LOGOUT_FAILURE, payload })
