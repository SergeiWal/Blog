import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "./store";

export const wsUpdateAction = createAction(
  "UPDATE_WS_ACTION",
  withPayloadType<WebSocket>()
);
