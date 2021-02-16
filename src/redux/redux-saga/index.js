import { all } from "redux-saga/effects";
import watchDecreament from "./decreamentSaga";
import watchIncreament from "./increamentSaga";

export function* rootSaga() {
  yield all([watchIncreament(), watchDecreament()]);
}
