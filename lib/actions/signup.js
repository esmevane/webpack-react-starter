export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const signup = (payload) => ({ type: SIGNUP, payload })
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS })

export const signupFailure = (payload) => (
  { type: SIGNUP_FAILURE, payload }
)
