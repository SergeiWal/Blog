import { DEFAULT_USER } from "../constants/user";
import { GetCurrentUserLoaded, UserAction } from "../types/userActionsTypes";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/user";

export default function userReducer(state = DEFAULT_USER, action: UserAction) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return state;
    case GET_USER_SUCCESS:
      return (action as GetCurrentUserLoaded).payload;
    case ADD_TO_BOOKMARKS:
      return { ...state };
    case DELETE_FROM_BOOKMARKS:
      return { ...state };
    default:
      return state;
  }
}
