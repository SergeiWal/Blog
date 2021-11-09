import {
  FETCH_DATA_FAILED,
  FETCH_DATA_FINISHED,
  FETCH_DATA_STARTED,
} from "../constants/fetch";

export type FetchAction = { type: string };

export const fetchStartAction = (): FetchAction => {
  return {
    type: FETCH_DATA_STARTED,
  };
};

export const fetchFinishedAction = (): FetchAction => {
  return {
    type: FETCH_DATA_FINISHED,
  };
};

export const fetchFailedAction = (): FetchAction => {
  return {
    type: FETCH_DATA_FAILED,
  };
};
