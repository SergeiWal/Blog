import { createAction } from "@reduxjs/toolkit";
import { IsRequestPayload } from "./reducers/fetchReducer";
import { withPayloadType } from "./store";

export const fetchStartAction = createAction(
  "FETCH_DATA_STARTED",
  withPayloadType<IsRequestPayload>()
);
export const fetchFinishedAction = createAction(
  "FETCH_DATA_FINISHED",
  withPayloadType<IsRequestPayload>()
);
