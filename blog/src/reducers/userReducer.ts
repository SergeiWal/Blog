import {} from "../types/articleTypes";
import { User } from "../types/userTypes";
import {
  AddToToBookmarks,
  GetCurrentUser,
  UserAction,
} from "../actions/userAction";
import { ADD_TO_BOOKMARKS, GET_CURRENT_USER } from "../constants/user";

const defaultUser: User = {
  id: 0,
  name: "user",
  password: "11111111",
  bookmarks: [],
  photo: "",
  posts: [],
};

export default function userReducer(state = defaultUser, action: UserAction) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return (action as GetCurrentUser).payload;
    case ADD_TO_BOOKMARKS:
      state.bookmarks.push((action as AddToToBookmarks).payload.articleId);
      return { ...state };
    default:
      return state;
  }
}
