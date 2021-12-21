import { PayloadAction } from "@reduxjs/toolkit";

export type RequestsState = { [key: string]: boolean };

export default function RequestReducer(
  state: RequestsState = {},
  action: PayloadAction<any>
) {
  let key = "";
  if (action.type.includes("SUCCESS")) {
    key = action.type.replace("_SUCCESS", "");
    state[key] = true;
    return { ...state };
  } else if (action.type.includes("FAILED")) {
    key = action.type.replace("_FAILED", "");
    state[key] = false;
    return { ...state };
  }
  return state;
}
