/* eslint no-constant-condition: "off" */

import { call, take, fork, put } from "redux-saga/effects"
import { LOGOUT, logoutSuccess, logoutFailure } from "actions"
import Client from "client"
import clearErrors from "sagas/clearErrors"

export default function* () {
  const client = new Client()

  while (true) {
    yield take(LOGOUT)

    try {
      yield call([ client, client.disconnect ])
      yield put(logoutSuccess())
    } catch (error) {
      yield put(logoutFailure({ error }))
      yield fork(clearErrors)
    }

  }
}
