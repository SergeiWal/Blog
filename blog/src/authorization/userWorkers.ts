import { put } from "redux-saga/effects";
import { getCurrentUserAction } from "./actions/authorizeActions";

export function* signInSagaWorker({ payload }: any) {
  yield put(getCurrentUserAction(payload.access_token));
}
