/* eslint no-constant-condition: "off" */

import { call, take, fork, put } from "redux-saga/effects"
import Client from "client"
import clearErrors from "sagas/clearErrors"
import { SIGNUP, signupSuccess, signupFailure, login } from "actions"

function* signup() {
  const client = new Client()

  while (true) {
    const action = yield take(SIGNUP)
    const { payload: { email, password } } = action
    const users = client.connection.service("/api/users")

    try {
      yield call([ users, users.create ], { email, password })
      yield put(signupSuccess())
      yield put(login({ email, password }))
    } catch (error) {
      yield put(signupFailure({ error }))
      yield fork(clearErrors)
    }
  }
}

export default signup
