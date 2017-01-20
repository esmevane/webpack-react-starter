import { fork } from "redux-saga/effects"
import login from "sagas/login"
import logout from "sagas/logout"
import signup from "sagas/signup"

function createSagas() {
  return function* () {
    yield fork(login)
    yield fork(logout)
    yield fork(signup)
  }
}

export { createSagas }
