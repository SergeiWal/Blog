import { PayloadAction } from "@reduxjs/toolkit";
import { fetchFinishedAction, fetchStartAction } from "../fetchActions";

export type IsRequestType = { [key: string]: boolean };
export type IsRequestPayload = string;

export default function fetchReducer(
  state: IsRequestType = {},
  action: PayloadAction<IsRequestPayload>
) {
  switch (action.type) {
    case fetchStartAction.type:
      state[action.payload] = true;
      return { ...state };
    case fetchFinishedAction.type:
      state[action.payload] = false;
      return { ...state };
    default:
      return state;
  }
}
