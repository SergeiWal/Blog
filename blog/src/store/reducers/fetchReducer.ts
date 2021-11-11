import { Action } from "redux";
import { FETCH_DATA_FINISHED, FETCH_DATA_STARTED } from "../fetchActions";

export default function fetchReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case FETCH_DATA_STARTED:
      return true;
    case FETCH_DATA_FINISHED:
      return false;
    default:
      return state;
  }
}
