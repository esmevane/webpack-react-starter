import { delay } from "redux-saga"
import { put } from "redux-saga/effects"
import { clearErrors } from "actions"

export default function* () {
  yield delay(1000)
  yield put(clearErrors())
}
