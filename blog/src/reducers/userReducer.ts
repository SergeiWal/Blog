import { DEFAULT_USER } from "../constants/user";
import {
  AddToBookmarks,
  DeleteFromBookmarks,
  GetCurrentUserLoaded,
  UserAction,
} from "../types/userActionsTypes";
import {
  ADD_TO_BOOKMARKS,
  DELETE_FROM_BOOKMARKS,
  GET_USER,
  GET_USER_lOADED,
} from "../constants/user";

let articleId: number;
let index: number;

export default function userReducer(state = DEFAULT_USER, action: UserAction) {
  switch (action.type) {
    case GET_USER:
      return state;
    case GET_USER_lOADED:
      return (action as GetCurrentUserLoaded).payload;
    case ADD_TO_BOOKMARKS:
      state.bookmarks.push((action as AddToBookmarks).payload.articleId);
      return { ...state };
    case DELETE_FROM_BOOKMARKS:
      articleId = (action as DeleteFromBookmarks).payload.articleId;
      index = state.bookmarks.indexOf(articleId);
      state.bookmarks.splice(index, 1);
      return { ...state };
    default:
      return state;
  }
}
