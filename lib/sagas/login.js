/* eslint no-constant-condition: "off" */

import { call, take, fork, put } from "redux-saga/effects"
import { LOGIN, loginSuccess, loginFailure, payload } from "actions"
import Client from "client"
import clearErrors from "sagas/clearErrors"

export default function* () {
  const client = new Client()

  while (true) {
    const action = yield take(LOGIN)
    const { email, password } = payload(action)

    try {
      yield call([ client, client.login ], { email, password })
      yield put(loginSuccess({ token: client.token() }))
    } catch (error) {
      yield put(loginFailure({ error }))
      yield fork(clearErrors)
    }
  }
}
