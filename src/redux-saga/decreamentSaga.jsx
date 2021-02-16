import { delay, put, takeLatest } from "redux-saga/effects";
import { decreament, decreamentClicked } from "../redux-toolkit";

function* decreamentCounterSaga(action) {
  yield delay(1000);
  yield put(decreament(1));
}
export default function* watchDecreament() {
  yield takeLatest(decreamentClicked().type, decreamentCounterSaga);
}
