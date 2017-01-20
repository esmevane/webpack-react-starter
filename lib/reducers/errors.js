import {
  CLEAR_ERRORS,
  LOGOUT_FAILURE,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  payload
} from "actions"

const capitalize = (phrase) =>
  phrase.replace(/\b\w/, letter => letter.toUpperCase())

export const getErrorMessage = (action) => {
  const { error } = payload(action)

  if (error.errors && error.errors.length) {
    const message =
      error
        .errors
        .map(error => capitalize(error.message))
        .join("<br />")

    return { message }
  }

  return error
}

export const errors = (initialState = {}, action) => {
  switch (action.type) {
    case LOGOUT_FAILURE:
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return getErrorMessage(action)
    case CLEAR_ERRORS:
      return {}
    default:
      return initialState
  }
}
