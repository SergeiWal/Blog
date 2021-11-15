import { createAction } from "@reduxjs/toolkit";

export const fetchStartAction = createAction("FETCH_DATA_STARTED");
export const fetchFinishedAction = createAction("FETCH_DATA_FINISHED");
