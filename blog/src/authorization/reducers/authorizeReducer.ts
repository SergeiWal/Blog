import { Action } from "../../store/actionTypes";
import { SIGN_IN, SIGN_OUT } from "../constants/authorize";

export default function AuthorizeReducer(
  state: boolean = false,
  action: Action<any>
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
