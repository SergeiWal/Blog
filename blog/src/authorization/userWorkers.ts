import { put, call } from "redux-saga/effects";
import { User } from "./types/userTypes";
import { getCurrentUserAction } from "./actions/authorizeActions";
import { updateBookmarkForUser } from "../api/apiService";
import { PayloadAction } from "@reduxjs/toolkit";

export function* signInSagaWorker() {
  yield put(getCurrentUserAction("1"));
}

export function* bookmarkWorker({ payload }: PayloadAction<User>) {
  yield call(updateBookmarkForUser, payload);
}
