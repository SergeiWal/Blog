import { Action } from "redux";
import { SIGN_IN, SIGN_OUT } from "../../authorization/constants/authorize";

export default function AuthorizeReducer(
  state: boolean = false,
  action: Action
) {
  switch (action.type) {
    case SIGN_IN:
      return true;
    case SIGN_OUT:
      return false;
    default:
      return state;
  }
}
