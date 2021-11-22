import { PayloadAction } from "@reduxjs/toolkit";
import { bookmarksAction } from "../../article/articlePageActions";
import {
  getArticlesByIdFailed,
  getCurrentUserActionSuccess,
} from "../../authorization/actions/authorizeActions";
import { User } from "../../authorization/types/userTypes";

const DEFAULT_USER: User = {
  id: "0",
  name: "user",
  password: "11111111",
  isAdmin: false,
  isBlocked: false,
  bookmarks: [],
  photo: "",
  posts: [],
};

export default function userReducer(
  state = DEFAULT_USER,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case getCurrentUserActionSuccess.type:
      return action.payload;
    case getArticlesByIdFailed.type:
      return [];
    case bookmarksAction.type:
      return { ...state };
    default:
      return state;
  }
}
