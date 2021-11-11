import {
  FETCH_DATA_FAILED,
  FETCH_DATA_FINISHED,
  FETCH_DATA_STARTED,
} from "./fetch";
import { Action } from "./actionTypes";

export const fetchStartAction = (): Action<any> => {
  return {
    type: FETCH_DATA_STARTED,
  };
};

export const fetchFinishedAction = (): Action<any> => {
  return {
    type: FETCH_DATA_FINISHED,
  };
};

export const fetchFailedAction = (): Action<any> => {
  return {
    type: FETCH_DATA_FAILED,
  };
};
