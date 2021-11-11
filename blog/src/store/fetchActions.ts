import { createAction } from "@reduxjs/toolkit";

export const FETCH_DATA_STARTED: string = "FETCH_DATA_STARTED";
export const FETCH_DATA_FINISHED: string = "FETCH_DATA_FINISHED";

export const fetchStartAction = createAction(FETCH_DATA_STARTED);
export const fetchFinishedAction = createAction(FETCH_DATA_FINISHED);
