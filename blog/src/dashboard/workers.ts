import { PayloadAction } from "@reduxjs/toolkit";
import { call } from "redux-saga/effects";
import { updateStatusForUser } from "../api/apiService";
import { UpdateUserStatus } from "../store/requestsPayloads";

export function* blockUserSagaWorker({
  payload,
}: PayloadAction<UpdateUserStatus>) {
  yield call(updateStatusForUser, payload);
}
