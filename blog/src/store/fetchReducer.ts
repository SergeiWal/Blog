import {
  FETCH_DATA_FAILED,
  FETCH_DATA_FINISHED,
  FETCH_DATA_STARTED,
} from "./fetch";
import { FetchAction } from "./actionTypes";

export default function fetchReducer(
  state: boolean = false,
  action: FetchAction
) {
  switch (action.type) {
    case FETCH_DATA_STARTED:
      return true;
    case FETCH_DATA_FINISHED:
      return false;
    case FETCH_DATA_FAILED:
      return false;
    default:
      return state;
  }
}
