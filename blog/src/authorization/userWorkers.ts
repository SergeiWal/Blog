import { put, call } from "redux-saga/effects";
import { User } from "./types/userTypes";
import { getCurrentUserLoadedAction } from "./actions/authorizeActions";
import { getUserById, updateBookmarkForUser } from "../api/apiService";
import { signInAction } from "./actions/authorizeActions";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getUserSagaWorker({ payload }: PayloadAction<any>) {
  const data: User = yield call(getUserById, payload);
  yield put(getCurrentUserLoadedAction(data));
  yield put(signInAction());
}

export function* bookmarkWorker({ payload }: PayloadAction<User>) {
  yield call(updateBookmarkForUser, payload);
}
