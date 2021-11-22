import { PayloadAction } from "@reduxjs/toolkit";
import { call } from "redux-saga/effects";
import { updateStatusForUser } from "../api/apiService";
import { User } from "../authorization/types/userTypes";

export function* blockUserSagaWorker({ payload }: PayloadAction<User>) {
  yield call(updateStatusForUser, payload);
}
