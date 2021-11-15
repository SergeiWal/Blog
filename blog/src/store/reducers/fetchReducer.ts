import { Action } from "redux";
import { fetchFinishedAction, fetchStartAction } from "../fetchActions";

export default function fetchReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case fetchStartAction.type:
      return true;
    case fetchFinishedAction.type:
      return false;
    default:
      return state;
  }
}
