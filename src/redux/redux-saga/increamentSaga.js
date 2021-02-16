import { delay, put, takeLatest } from "redux-saga/effects";
import { increament, increamentClicked } from "../redux-toolkit/redux-toolkit";

function* increamentCounterSaga(action) {
  yield delay(1000);
  yield put(increament(5));
}
export default function* watchIncreament() {
  yield takeLatest(increamentClicked().type, increamentCounterSaga);
}
