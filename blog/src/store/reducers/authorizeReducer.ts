import { Action } from "redux";
import {
  signInAction,
  signOutAction,
} from "../../authorization/actions/authorizeActions";

export default function AuthorizeReducer(
  state: boolean = false,
  action: Action
) {
  switch (action.type) {
    case signInAction.type:
      return true;
    case signOutAction.type:
      return false;
    default:
      return state;
  }
}
