import { AuthorizeAction } from "../actions/authorizeActions";
import { SIGN_IN, SIGN_OUT } from "../constants/authorize";

export default function AuthorizeReducer(
  state: boolean = false,
  action: AuthorizeAction
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
